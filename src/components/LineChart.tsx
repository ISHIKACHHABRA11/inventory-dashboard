import { Box, Switch, Typography } from "@mui/material";
import { useState, useId } from "react";
import { Line } from "react-chartjs-2";
import type { StackChartData } from "../types/cities";

export interface LineChartProps {
  stack: StackChartData;
}

export default function LineChart({ stack }: LineChartProps) {
  const chartId = useId();
  const [showConsumption, setShowConsumption] = useState(true);
  const [showAI, setShowAI] = useState(true);
  const [showFinal, setShowFinal] = useState(true);
  const [showPrevFinal, setShowPrevFinal] = useState(true);

  console.log('stack in ', stack);

  // Unified timeline: all unique dates from every series, sorted
  // unique x coordinates 
  const allDates = new Set<string>([
    ...stack.historical.consumption.map((d) => d.date),
    ...stack.historical.aiForecast.map((d) => d.date),
    ...stack.historical.finalForecast.map((d) => d.date),
    ...stack.forecast.aiForecast.map((d) => d.date),
    ...stack.forecast.finalForecast.map((d) => d.date),
    ...stack.forecast.previousQuarterFinalForecast.map((d) => d.date),
  ]);

  console.log('allDates', allDates);
  const labels = Array.from(allDates).sort(); //converted set to array

  const valueByDate = <T extends { date: string; value: number }>(
    arr: T[],
  ): Record<string, number> =>
    Object.fromEntries(arr.map((d) => [d.date, d.value]));

  const consumptionMap = valueByDate(stack.historical.consumption);
  const aiHistMap = valueByDate(stack.historical.aiForecast);
  const aiFcMap = valueByDate(stack.forecast.aiForecast);
  const finalHistMap = valueByDate(stack.historical.finalForecast);
  const finalFcMap = valueByDate(stack.forecast.finalForecast);
  const prevFcMap = valueByDate(stack.forecast.previousQuarterFinalForecast);

  const consumption = labels.map((date) => consumptionMap[date] ?? null);
  const aiHistorical = labels.map((date) => aiHistMap[date] ?? null);
  const aiForecast = labels.map((date) => aiFcMap[date] ?? null);
  const finalHistorical = labels.map((date) => finalHistMap[date] ?? null);
  const finalForecast = labels.map((date) => finalFcMap[date] ?? null);
  const prevFinal = labels.map((date) => prevFcMap[date] ?? null);

  const datasets = [
    ...(showConsumption
      ? [
          {
            label: "Consumption",
            data: consumption,
            borderColor: "#8bcdf6",
            tension: 0.3,
          },
        ]
      : []),
    ...(showAI
      ? [
          {
            label: "AI Forecast (Historical)",
            data: aiHistorical,
            borderColor: "#1eea75",
            tension: 0.3,
          },
          {
            label: "AI Forecast (Forecast)",
            data: aiForecast,
            borderColor: "#1eea75",
            borderDash: [6, 6],
            tension: 0.3,
          },
        ]
      : []),
    ...(showFinal
      ? [
          {
            label: "Final Forecast (Historical)",
            data: finalHistorical,
            borderColor: "#ffe600",
            tension: 0.3,
          },
          {
            label: "Final Forecast (Forecast)",
            data: finalForecast,
            borderColor: "#ffe600",
            borderDash: [6, 6],
            tension: 0.3,
          },
        ]
      : []),
    ...(showPrevFinal
      ? [
          {
            label: "Prev Quarter Final",
            data: prevFinal,
            borderColor: "#f5c6c6",
            borderDash: [6, 4],
            tension: 0.3,
          },
        ]
      : []),
  ];

  const data = {
    labels,
    datasets,
  };

  // Last historical quarter (Q2) = last consumption date; forecast starts at Q3
  const lastHistoricalDate =
    stack.historical.consumption.length > 0
      ? stack.historical.consumption[stack.historical.consumption.length - 1]
          .date
      : null;
  const firstForecastDates = [
    stack.forecast.aiForecast[0]?.date,
    stack.forecast.finalForecast[0]?.date,
    stack.forecast.previousQuarterFinalForecast[0]?.date,
  ].filter(Boolean) as string[];
  
  // First forecast quarter (Q3) = earliest forecast date that is after last historical (Q2)
  const forecastDatesAfterHistorical =
    lastHistoricalDate != null
      ? firstForecastDates.filter((d) => d > lastHistoricalDate).sort()
      : firstForecastDates.sort();
  const firstForecastDate =
    forecastDatesAfterHistorical.length > 0
      ? forecastDatesAfterHistorical[0]
      : firstForecastDates.sort()[0] ?? null;
  const firstForecastIndex =
    firstForecastDate != null ? labels.indexOf(firstForecastDate) : -1;
  // Place vertical line at center between Q2 (last historical) and Q3 (first forecast)
  const forecastBoundaryX =
    firstForecastIndex > 0 ? firstForecastIndex - 0.5 : null;

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(20, 55, 45, 0.85)",
          drawTicks: true,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      annotation: {
        annotations: {
          ...(forecastBoundaryX != null && {
            forecastBoundary: {
              type: "line" as const,
              xMin: forecastBoundaryX,
              xMax: forecastBoundaryX,
              borderColor: "#999",
              borderWidth: 2,
              borderDash: [6, 6],
            },
          }),
        },
      },
    },
  };

  const toggleItems = [
    {
      label: "Consumption",
      color: "#8bcdf6",
      checked: showConsumption,
      onToggle: () => setShowConsumption(!showConsumption),
    },
    {
      label: "AI Forecast",
      color: "#1eea75",
      checked: showAI,
      onToggle: () => setShowAI(!showAI),
    },
    {
      label: "Final Forecast",
      color: "#ffe600",
      checked: showFinal,
      onToggle: () => setShowFinal(!showFinal),
    },
    {
      label: "Prev Quarter",
      color: "#f5c6c6",
      checked: showPrevFinal,
      onToggle: () => setShowPrevFinal(!showPrevFinal),
    },
  ];

  return (
    <Box sx={{ background: "#000", p: 3}}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          mb: 2,
          alignItems: "center",
        }}
      >
        {toggleItems.map((item) => (
          <Box
            key={item.label}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 20,
                borderRadius: 1,
                bgcolor: item.color,
                flexShrink: 0,
              }}
              aria-hidden
            />
            <Typography sx={{ color: "white" }}>{item.label}</Typography>
            <Switch checked={item.checked} onChange={item.onToggle} />
          </Box>
        ))}
      </Box>

      <Line key={chartId} data={data} options={options} />
    </Box>
  );
}
