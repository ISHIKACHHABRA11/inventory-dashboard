import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(to right, #0f2027, #203a43)",
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
            <IconButton size="small" color="inherit">
              <MenuIcon />
            </IconButton>

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