import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { stackDetailsMock } from "../data/stackDetailsMock";
import { sidebarData } from "../data/mockSidebarData";
import { useState } from "react";
import LineChart from "../components/LineChart";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import type { SidebarStackItem, StackChartData } from "../types/cities";

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();

  const fetchedData = id ? (sidebarData[id] ?? []) : [];
  const [selectedStack, setSelectedStack] = useState<SidebarStackItem | null>(
    fetchedData[0] ?? null,
  );

  const stackChartData: StackChartData | null =
    id && selectedStack
      ? (stackDetailsMock[id]?.[selectedStack.stackID] ?? null)
      : null;

  // TABLE DATA
  let quarters: string[] = [];
  let consumption: (number | string)[] = [];
  let aiForecast: number[] = [];
  let finalForecast: number[] = [];

  if (stackChartData) {
    quarters = [
      ...stackChartData.historical.consumption.map((d) => d.date),
      ...stackChartData.forecast.aiForecast.map((d) => d.date),
    ];

    consumption = [
      ...stackChartData.historical.consumption.map((d) => d.value),
      ...new Array(stackChartData.forecast.aiForecast.length).fill("-"),
    ];

    aiForecast = [
      ...stackChartData.historical.aiForecast.map((d) => d.value),
      ...stackChartData.forecast.aiForecast.map((d) => d.value),
    ];

    finalForecast = [
      ...stackChartData.historical.finalForecast.map((d) => d.value),
      ...stackChartData.forecast.finalForecast.map((d) => d.value),
    ];
  }

  return (
    <div style={{ marginTop: "64px" }}>
      <Sidebar stacks={fetchedData} setSelectedStack={setSelectedStack} />

      <div style={{ marginLeft: 320 }}>
        {selectedStack && stackChartData && (
          <>
            {/* HEADER */}
            <Box sx={{ bgcolor: "#144E5E", p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "white" }}>
                  {selectedStack.stackName}
                </Typography>

                <Typography sx={{ color: "white" }}>
                  Stack Id : {selectedStack.stackID}
                </Typography>

                <Box
                  sx={{
                    bgcolor: "#0D3B46",
                    p: 1,
                    borderRadius: 2,
                    display: "flex",
                    gap: 4,
                  }}
                >
                  <Typography sx={{ color: "white" }}>
                    Forecast : {stackChartData.forecastValue}
                  </Typography>

                  <Typography sx={{ color: "white" }}>
                    Historical : {stackChartData.historicalValue}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* CHART */}
            <LineChart stack={stackChartData} />

            {/* TABLE */}
            <Box sx={{ px: 3, bgcolor: "#144E5E" }}>
              <Table>
                <TableBody>
                  {/* AI Forecast */}
                  <TableRow>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      AI Forecast
                    </TableCell>
                    {aiForecast.map((val, i) => (
                      <TableCell
                        key={i}
                        sx={{ color: "#cfd8dc", textAlign: "right" }}
                      >
                        {val}
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Final Forecast */}
                  <TableRow>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Final Forecast
                    </TableCell>
                    {finalForecast.map((val, i) => (
                      <TableCell
                        key={i}
                        sx={{ color: "#cfd8dc", textAlign: "right" }}
                      >
                        {val}
                      </TableCell>
                    ))}
                  </TableRow>

                  {/* Consumption Row */}
                  <TableRow>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Consumption
                    </TableCell>
                    {consumption.map((val, i) => (
                      <TableCell
                        key={i}
                        sx={{ color: "#cfd8dc", textAlign: "right" }}
                      >
                        {val}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </>
        )}
      </div>
    </div>
  );
}
