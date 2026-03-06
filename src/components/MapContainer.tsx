import { Box } from "@mui/material"

const MapContainer = () => {
  return (
    <div>
      <Box
      sx={{
        position: "absolute",   // so it stays behind
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#0B1E26", // temporary dark bg
        zIndex: -1,  // lowest layer
      }}
    />
    </div>
  )
}

export default MapContainer
