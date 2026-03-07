import { Box, Typography } from "@mui/material";
import MapContainer from "../components/MapContainer";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { MetricLineChart } from "../components/MetricLineChart";
import { cities } from "../data/mockCities";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = (id: Number) => {
    navigate(`/city/${id}`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        mt: 8,
      }}
    >
      <MapContainer />

      <Box sx={{ position: "absolute", top: 0, width: "100%", p: 6 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography variant="h3" sx={{ color: "white" }}>
            Hello User,
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#2563eb",
              px: 2,
              py: 1,
              borderRadius: 2,
            }}
          >
            <InfoOutlineIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white" }}>
              There are 2 action items.
            </Typography>
          </Box>
        </Box>

        {/* City Cards */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            mt: 6,
            overflowX: "auto",
            // scrollbarWidth: "none",
            // "&::-webkit-scrollbar": {
            //   display: "none",
            // }, // used if not mentioned globally
          }}
        >
          {cities.map((cityData) => (
            <Box
              key={cityData.id}
              onClick={() => handleClick(cityData.id)}
              sx={{
                minWidth: 320,
                p: 3,
                borderRadius: 4,
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                background: "rgba(0,0,0,0.45)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {/* City Name */}
              <Typography variant="h5" sx={{ color: "white", mb: 2 }}>
                {cityData.city}
              </Typography>

              {/* Metrics */}
              {Object.entries(cityData.metrics).map(([metricName, metric]) => (
                <Box key={metricName} sx={{ mt: 3 }}>
                  <Typography sx={{ color: "white", opacity: 0.8 }}>
                    {metricName === "sales_forecast"
                      ? " Sales Forecast"
                      : "Revenue Growth"}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 1,
                      gap: 2,
                    }}
                  >
                    {/* Value */}
                    <Typography variant="h4" sx={{ color: "white" }}>
                      {metric.value}
                      {metric.unit}
                    </Typography>

                    {/* Chart */}
                    <Box sx={{ flex: 1, ml: 2 }}>
                      <MetricLineChart
                        cityData={cityData}
                        metricName={metricName}
                      />
                    </Box>

                    {/* Trend */}
                    <Typography
                      sx={{
                        fontSize: 24,
                        color:
                          metric.trend === "up"
                            ? "#22c55e"
                            : metric.trend === "down"
                              ? "#ef4444"
                              : "#eab308",
                      }}
                    >
                      {metric.trend === "up"
                        ? "↑"
                        : metric.trend === "down"
                          ? "↓"
                          : "→"}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
