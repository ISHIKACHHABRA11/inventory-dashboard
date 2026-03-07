import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router-dom";
import type { SidebarStackItem } from "../types/cities";

export interface SidebarProps {
  stacks: SidebarStackItem[];
  setSelectedStack: (stack: SidebarStackItem) => void;
}

export default function Sidebar({ stacks, setSelectedStack }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" anchor="left" sx={{ mt: 5 }}>
      <Box
        sx={{
          width: 320,
          height: "100%",
          background: "linear-gradient(180deg,#0b2c35,#0d3b46)",
          color: "white",
          p: 2,
          pt: 8,
          zIndex: -1,
          position: "relative",
        }}
      >
        {/* Header */}
        <Stack direction="row" spacing={1}>
          <IconButton sx={{ color: "white" }} onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        </Stack>

        {/* Stack title */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          Sample Stack
        </Typography>

        {/* Stack cards */}
        <Box sx={{ overflowY: "auto", height: "70%", mt: 2 }}>
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
