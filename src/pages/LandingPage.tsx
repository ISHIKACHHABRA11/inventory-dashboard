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
        overflow: "hidden", // prevent full page scroll
      }}
    >
      <MapContainer />
      <Box sx={{ padding: 6 }}>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h3" sx={{ color: "white" }}>
            Hello User,
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 2,
              bgcolor: "blue",
              alignItems: "center",
              px: 2,
              py: 1,
              borderRadius: 1,
            }}
          >
            <InfoOutlineIcon sx={{ color: "white" }} />
            <Typography variant="body1" sx={{ color: "white" }}>
              There are 2 to action items.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 4, overflow: "auto", mt: 4 }}>
          {cities.map((cityData) => (
            <Box
              key={cityData.id}
              sx={{ border: "2px solid red" }}
              onClick={() => handleClick(cityData.id)}
            >
              <Typography variant="h5" sx={{ color: "white", mt: 4 }}>
                City 1
              </Typography>

              <Box>
                <Typography variant="body1" sx={{ color: "white" }}>
                  Forecast
                </Typography>
                <Box>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    45.7M
                  </Typography>
                  <Box>
                    <MetricLineChart
                      cityData={cityData}
                      metricName="sales_forecast"
                    />
                  </Box>
                  <Box>{/* arrow */}</Box>
                </Box>
              </Box>

              <Box>
                <Typography variant="body1" sx={{ color: "white" }}>
                  Growth
                </Typography>
                <Box>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    65%
                  </Typography>
                  <Box>
                    <MetricLineChart
                      cityData={cityData}
                      metricName="efficiency_rate"
                    />
                  </Box>
                  <Box>{/* arrow */}</Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
