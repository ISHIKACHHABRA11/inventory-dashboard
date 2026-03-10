import { useId } from "react";
import { Line } from "react-chartjs-2";
import type { City, Metrics } from "../types/cities";

export interface MetricLineChartProps {
  cityData: City;
  metricName: keyof Metrics;
}

export const MetricLineChart = ({ cityData, metricName }: MetricLineChartProps) => {
  const chartId = useId();
  const metric = cityData.metrics[metricName];

  const history = metric?.historical?.aiForecast || [];
  const forecast = metric?.forecast?.aiForecast || [];

  const allDates = [
    ...history.map((item) => item.date),
    ...forecast.map((item) => item.date),
  ];

  const labels = allDates;

  const historyData = allDates.map((date) => {
    const found = history.find((item) => item.date === date);
    return found ? found.value : null;
  });

  const forecastData = allDates.map((date) => {
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
      }}
    >
      <Line key={chartId} data={data} options={options} style={{ width: "100%" }} />
    </div>
  );
};
