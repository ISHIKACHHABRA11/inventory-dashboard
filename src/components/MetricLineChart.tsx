import { Line } from "react-chartjs-2";
import type { City, Metrics } from "../types/cities";

export interface MetricLineChartProps {
  cityData: City;
  metricName: keyof Metrics;
}

export const MetricLineChart = ({ cityData, metricName }: MetricLineChartProps) => {
  const metric = cityData.metrics[metricName];

  // extract correct arrays from new structure
  const history = metric?.historical?.aiForecast || [];
  const forecast = metric?.forecast?.aiForecast || [];

  // 1. Extract all dates
  const allDates = [
    ...history.map((item) => item.date),
    ...forecast.map((item) => item.date),
  ];

  const labels = allDates;

  // 2. Get last historical point
  const lastHistoryDate = history[history.length - 1]?.date;
  const lastHistoryValue = history[history.length - 1]?.value;

  // 3. Map history data
  const historyData = allDates.map((date) => {
    const found = history.find((item) => item.date === date);
    return found ? found.value : null;
  });

  // 4. Map forecast data
  const forecastData = allDates.map((date) => {
    if (date === lastHistoryDate) return lastHistoryValue;

    const found = forecast.find((item) => item.date === date);
    return found ? found.value : null;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Historical",
        data: historyData,
        borderColor: "#2563eb",
        backgroundColor: "#2563eb",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.3,
      },
      {
        label: "Forecast",
        data: forecastData,
        borderColor: "#16a34a",
        backgroundColor: "#16a34a",
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 3,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: 50,
        position: "relative",
      }}
    >
      <Line data={data} options={options} style={{ width: "100%" }} />
    </div>
  );
};
