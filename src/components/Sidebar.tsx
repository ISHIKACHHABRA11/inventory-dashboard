// Sidebar.jsx
import { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Sidebar({ stacks, setSelectedStack }) {
  const [tab, setTab] = useState(0);

  return (
    <Drawer variant="permanent" anchor="left">
      <Box
        sx={{
          width: 320,
          height: "100%",
          background: "linear-gradient(180deg,#0b2c35,#0d3b46)",
          color: "white",
          p: 2,
        }}
      >
        {/* Header */}
        <Stack direction="row" spacing={1}>
          <IconButton sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>

          <IconButton sx={{ color: "white" }}>
            <ArrowBackIcon />
          </IconButton>
        </Stack>

        {/* Stack title */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          Sample Stack
        </Typography>

        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(e, v) => setTab(v)}
          textColor="inherit"
          indicatorColor="primary"
          sx={{ mt: 2 }}
        >
          <Tab label="BACKLOG (238)" />
          <Tab label="PENDING (0)" />
          <Tab label="FINAL SIGN-OFF (0)" />
        </Tabs>

        {/* Filter */}
        <Typography sx={{ mt: 2, mb: 1, fontSize: 14 }}>Filter</Typography>

        {/* Stack cards */}
        <Box sx={{ overflowY: "auto", height: "70%" }}>
          {stacks.map((stack) => (
            <Card
              key={stack.stackID}
              sx={{
                mb: 2,
                backgroundColor: "#134e5e",
                color: "white",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#16697a" },
              }}
              onClick={() => setSelectedStack(stack)}
            >
              <CardContent>
                <Stack direction="row" spacing={1} mb={1}>
                  <Chip
                    size="small"
                    icon={
                      stack.forecastStab === "up" ? (
                        <ArrowUpwardIcon />
                      ) : (
                        <ArrowDownwardIcon />
                      )
                    }
                    label="F'CAST STAB."
                    color="default"
                  />

                  <Chip
                    size="small"
                    icon={
                      stack.forecastAcc === "up" ? (
                        <ArrowUpwardIcon />
                      ) : (
                        <ArrowDownwardIcon />
                      )
                    }
                    label="F'CAST ACC."
                  />

                  <OpenInNewIcon fontSize="small" />
                </Stack>

                <Typography variant="body2">{stack.stackName}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}
