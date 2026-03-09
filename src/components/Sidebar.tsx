// MUI layout and UI primitives
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// Icons: back navigation
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// Icons: trend up/down for forecast chips
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// Icons: collapse/expand sidebar
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// Programmatic navigation (e.g. back button)
import { useNavigate } from "react-router-dom";
// Type for each stack item shown in the sidebar
import type { SidebarStackItem } from "../types/cities";
import {
  SIDEBAR_WIDTH_COLLAPSED,
  SIDEBAR_WIDTH_EXPANDED,
} from "../constants/layout";

// Props: data + callbacks; expand state is always controlled by parent
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
  const handleToggle = () => onExpandedChange(!expanded);
  console.log('stacks', stacks);
  const width = expanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED;

  return (
    // Fixed left sidebar: full height below 64px navbar, teal gradient, animated width
    <Box
      sx={{
        width,
        minWidth: width,
        height: "calc(100vh - 64px)",
        marginTop: "64px",
        background: "linear-gradient(180deg,#0b2c35,#0d3b46)",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1100,
        display: "flex",
        flexDirection: "column",
        transition: "width 0.25s ease-in-out",
        overflow:"visible",  // default property (others are hidden,auto)
      }}
    >
      {/* Header - when expanded: back button row */}
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

      {/* When expanded: title + scrollable list of stack cards */}
      {expanded && (
        <>
          <Typography variant="h6" sx={{ px: 2, pt: 2, pb: 1 }}>
            Sample Stack
          </Typography>

          <Box sx={{ overflowY: "auto", flex: 1, px: 2, pb: 2 }}>
            {stacks.map((stack) => {
              console.log('stack', stack);
              return(
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
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Stack direction="row" spacing={1} mb={1}>
                    {/* Chip: forecast stability — up/down arrow from stack.forecastStab */}
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

                    {/* Chip: forecast accuracy — up/down arrow from stack.forecastAcc */}
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
            )})}
          </Box>
        </>
      )}

      {/* Toggle button - right edge, vertically centered, extends outward */}
      <IconButton
        onClick={handleToggle}
        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translate(50%, -50%)",
          width: 40,
          height: 48,
          backgroundColor: "#5ba3b3",
          color: "white",
          borderRadius: "6px 0 0 6px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
          zIndex: 1,
          "&:hover": {
            backgroundColor: "#6eb5c4",
          },
        }}
      >
        {expanded ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </IconButton>
    </Box>
  );
}
