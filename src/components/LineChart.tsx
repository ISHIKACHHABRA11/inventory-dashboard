import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, Switch, Typography } from "@mui/material";
import annotationPlugin from "chartjs-plugin-annotation";
import type { StackChartData } from "../types/cities";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  annotationPlugin,
);

export interface LineChartProps {
  stack: StackChartData;
}

export default function LineChart({ stack }: LineChartProps) {
  const [showConsumption, setShowConsumption] = useState(true);
  const [showAI, setShowAI] = useState(true);
  const [showFinal, setShowFinal] = useState(true);
  const [showPrevFinal, setShowPrevFinal] = useState(true);

  const labels = [
    ...stack.historical.consumption.map((d) => d.date),
    ...stack.forecast.aiForecast.map((d) => d.date),
  ];

  const historicalLength = stack.historical.consumption.length;
  const forecastLength = stack.forecast.aiForecast.length;

  const consumption = [
    ...stack.historical.consumption.map((d) => d.value),
    ...new Array(forecastLength).fill(null),
  ];

  const aiHistorical = [
    ...stack.historical.aiForecast.map((d) => d.value),
    ...new Array(forecastLength).fill(null),
  ];

  const aiForecast = [
    ...new Array(historicalLength).fill(null),
    ...stack.forecast.aiForecast.map((d) => d.value),
  ];

  const finalHistorical = [
    ...stack.historical.finalForecast.map((d) => d.value),
    ...new Array(forecastLength).fill(null),
  ];

  const finalForecast = [
    ...new Array(historicalLength).fill(null),
    ...stack.forecast.finalForecast.map((d) => d.value),
  ];

  const prevFinal = [
    ...new Array(historicalLength).fill(null),
    ...stack.forecast.previousQuarterFinalForecast.map((d) => d.value),
  ];

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

  const forecastStartLabel = stack.forecast.aiForecast[0].date;

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      annotation: {
        annotations: {
          forecastLine: {
            type: "line" as const,
            xMin: forecastStartLabel,
            xMax: forecastStartLabel,
            borderColor: "#999",
            borderWidth: 2,
            borderDash: [6, 6],
          },
        },
      },
    },
  };

  return (
    <Box sx={{ background: "#000", p: 3, borderRadius: 2 }}>
      <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
        <Typography sx={{ color: "white" }}>Consumption</Typography>
        <Switch
          checked={showConsumption}
          onChange={() => setShowConsumption(!showConsumption)}
        />

        <Typography sx={{ color: "white" }}>AI Forecast</Typography>
        <Switch checked={showAI} onChange={() => setShowAI(!showAI)} />

        <Typography sx={{ color: "white" }}>Final Forecast</Typography>
        <Switch checked={showFinal} onChange={() => setShowFinal(!showFinal)} />

        <Typography sx={{ color: "white" }}>Prev Quarter</Typography>
        <Switch
          checked={showPrevFinal}
          onChange={() => setShowPrevFinal(!showPrevFinal)}
        />
      </Box>

      <Line data={data} options={options} />
    </Box>
  );
}
