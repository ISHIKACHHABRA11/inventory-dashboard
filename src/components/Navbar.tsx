import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useMatch, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

function Navbar() {
  const navigate = useNavigate();
  const sidebar = useContext(SidebarContext);
  const isDetailsPage = !!useMatch("/city/:id");

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "linear-gradient(to right, #0f2027, #203a43)",
        zIndex: 1300,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: "auto",
          px: 2,
          py: 1, // small vertical padding
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* LEFT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isDetailsPage && sidebar && (
              <Button
                color="inherit"
                variant="text"
                size="small"
                sx={{ minWidth: 0, px: 1 }}
                onClick={sidebar.toggle}
                aria-label={sidebar.open ? "Close sidebar" : "Open sidebar"}
              >
                <MenuIcon fontSize="small" />
              </Button>
            )}

            <Typography
              variant="h6"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Webapp
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <PublicIcon fontSize="small" />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccountCircleIcon fontSize="small" />
              <Typography variant="body2">user</Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
