import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// 1. Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const MetricLineChart = ({ cityData, metricName }) => {
  const metric = cityData.metrics[metricName];

  // 2. Extract and format all unique dates for the X-axis
  const allDates = [
    ...metric.history.map((item) => item.date),
    ...metric.forecast.map((item) => item.date),
  ];

  const labels = allDates.map((date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "2-digit",
    }),
  );

  // 3. To connect the two lines seamlessly, we need the last history point
  const lastHistoryDate = metric.history[metric.history.length - 1]?.date;
  const lastHistoryValue = metric.history[metric.history.length - 1]?.value;

  // 4. Map the data to match the timeline (null where data doesn't exist)
  const historyData = allDates.map((date) => {
    const found = metric.history.find((item) => item.date === date);
    return found ? found.value : null;
  });

  const forecastData = allDates.map((date) => {
    // Inject the last history point into the forecast to bridge the gap
    if (date === lastHistoryDate) return lastHistoryValue;

    const found = metric.forecast.find((item) => item.date === date);
    return found ? found.value : null;
  });

  // 5. Configure the Chart.js data object
  const data = {
    labels,
    datasets: [
      {
        label: "Historical",
        data: historyData,
        borderColor: "#2563eb", // Blue
        backgroundColor: "#2563eb",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.3, // Adds a slight curve (monotone)
      },
      {
        label: "Forecast",
        data: forecastData,
        borderColor: "#16a34a", // Green
        backgroundColor: "#16a34a",
        borderWidth: 2,
        borderDash: [5, 5], // Dotted line
        pointRadius: 3,
        tension: 0.3,
      },
    ],
  };

  // 6. Configure options to match your previous Recharts look
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false, // Tooltip shows both values when hovering over the connection point
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides vertical grid lines
        },
        ticks: {
          display: false, // hides x-axis labels
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
          drawBorder: false,
          display: false,
        },
        border: {
          dash: [3, 3], // Dashed horizontal grid lines
        },
        ticks: {
          display: false, // hides x-axis labels
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
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
