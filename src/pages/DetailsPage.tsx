import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import LineChart from "../components/LineChart";
import Sidebar from "../components/Sidebar";
import {
  SIDEBAR_WIDTH_COLLAPSED,
  SIDEBAR_WIDTH_EXPANDED,
} from "../constants/layout";
import { useSidebar } from "../context/SidebarContext";
import { sidebarData } from "../data/mockSidebarData";
import { stackDetailsMock } from "../data/stackDetailsMock";
import type { SidebarStackItem, StackChartData } from "../types/cities";

export default function DetailsPage() {
  const { id } = useParams<{ id: string }>();

  const fetchedData = id ? (sidebarData[id] ?? []) : [];
  const [selectedStack, setSelectedStack] = useState<SidebarStackItem | null>(
    fetchedData[0] ?? null
  );
  const sidebar = useSidebar();
  const sidebarExpanded = sidebar?.open ?? true;
  const setSidebarExpanded = sidebar?.setOpen ?? (() => {});

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

  const sidebarWidth = sidebarExpanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED;

  return (
    <Box sx={{ marginTop: {xs: 4, sm: 8}, display:{xs: "flex", sm: "block"}, flexDirection: {xs: "column"}, 
          minHeight: {xs: '100vh'}}}>
      <Sidebar
        stacks={fetchedData}
        setSelectedStack={setSelectedStack}
        expanded={sidebarExpanded}
        onExpandedChange={setSidebarExpanded}
      />

      <Box sx={{ marginLeft: {xs: 0, sm: sidebarWidth}, transition: "margin-left 0.25s ease-in-out" , 
      display:{xs: "flex", sm: "block"}, 
      flexDirection: {xs: "column"}, flex:{xs: 1, sm: 0}}}>
        {selectedStack && stackChartData && (
          <>
            {/* HEADER */}
            <Box sx={{ bgcolor: "#144E5E", p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: {xs: "flex-start", sm: "center"},
                  flexDirection: {xs: "column", sm: "row"},
                  gap:{xs: 2, sm: 0},
                  padding:{xs: 2, sm: 0},
                }}
              >
                <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 2}}>
                <Typography sx={{ color: "white" }}>
                  {selectedStack.stackName}
                </Typography>

                <Typography sx={{ color: "white" }}>
                  Stack Id : {selectedStack.stackID}
                </Typography>
                </Box>

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
            <Box sx={{display:"flex",flexDirection: "column", flex:{xs:1, sm: 0}}}>
            <LineChart stack={stackChartData} />

            {/* TABLE */}
            <Box sx={{ px: 3, bgcolor: "#144E5E", overflowX: "auto" , flex:{xs:2, sm: 0}}}>
              <Table>
                <TableBody>
                  {/* Quarter headers */}
                  <TableRow>
                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Quarter
                    </TableCell>
                    {quarters.map((q, i) => (
                      <TableCell
                        key={`quarter-${q}-${i}`}
                        sx={{ color: "#cfd8dc", textAlign: "right" }}
                      >
                        {q}
                      </TableCell>
                    ))}
                  </TableRow>
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
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
