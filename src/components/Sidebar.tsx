import { useState } from "react";
import {
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
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";
import type { SidebarStackItem } from "../types/cities";

export const SIDEBAR_WIDTH_EXPANDED = 320;
export const SIDEBAR_WIDTH_COLLAPSED = 56;

export interface SidebarProps {
  stacks: SidebarStackItem[];
  setSelectedStack: (stack: SidebarStackItem) => void;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

export default function Sidebar({
  stacks,
  setSelectedStack,
  expanded: controlledExpanded,
  onExpandedChange,
}: SidebarProps) {
  const navigate = useNavigate();
  const [internalExpanded, setInternalExpanded] = useState(true);

  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  const handleToggle = () => {
    const next = !expanded;
    if (isControlled && onExpandedChange) {
      onExpandedChange(next);
    } else {
      setInternalExpanded(next);
    }
  };

  const width = expanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED;

  return (
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
        overflow: "visible",
      }}
    >
      {/* Header - when expanded */}
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

      {/* Collapsed state: show «-style hint */}
      {!expanded && (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 0,
          }}
        />
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
