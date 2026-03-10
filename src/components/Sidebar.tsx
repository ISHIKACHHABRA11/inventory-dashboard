import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  SIDEBAR_WIDTH_COLLAPSED,
  SIDEBAR_WIDTH_EXPANDED,
} from "../constants/layout";
import type { SidebarStackItem } from "../types/cities";

export interface SidebarProps {
  stacks: SidebarStackItem[];
  setSelectedStack: (stack: SidebarStackItem) => void;
  expanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
}

export default function Sidebar({
  stacks,
  setSelectedStack,
  expanded,
  onExpandedChange,
}: SidebarProps) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const width = expanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED;

  const handleStackSelect = (stack: SidebarStackItem) => {
    setSelectedStack(stack);
    if (isMobile) onExpandedChange(false);
  };

  return (
    <Box
      sx={{
        width: { xs: expanded ? "100vw" : 0, sm: width },
        minWidth: { xs: expanded ? "100vw" : 0, sm: width },
        height: {
          xs: expanded ? "100vh" : "calc(100vh - 64px)",
          sm: "calc(100vh - 64px)",
        },
        marginTop: { xs: expanded ? 0 : 4, sm: 8 },
        background: "linear-gradient(180deg,#0b2c35,#0d3b46)",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1100,
        display: "flex",
        flexDirection: "column",
        transition: "width 0.25s ease-in-out",
        overflow: { xs: "auto", sm: "visible" },
      }}
    >

      {expanded && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1,
            pt: 2,
            pb: 1,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <IconButton sx={{ color: "white" }} onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
      )}

      {expanded && (
        <>
          <Typography variant="h6" sx={{ px: 2, pt: 2, pb: 1 }}>
            Sample Stack
          </Typography>

          <Box sx={{ overflowY: "auto", flex: 1, px: 2, pb: 2 }}>
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
                onClick={() => handleStackSelect(stack)}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
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
                      sx={{
                        backgroundColor: "white",
                        color: "#333",
                        "& .MuiChip-icon": { color: "inherit" },
                      }}
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
                      sx={{
                        backgroundColor: "white",
                        color: "#333",
                        "& .MuiChip-icon": { color: "inherit" },
                      }}
                    />
                  </Stack>

                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {stack.stackName}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
