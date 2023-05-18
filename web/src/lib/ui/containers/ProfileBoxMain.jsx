import { Box } from "@mui/material";

export default function ProfileBoxMain({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "clamp(200px,  80vw, 700px)",
        height: "38rem",
        mx: "auto",
        flexDirection: "column",
        gap: "7rem",
      }}
    >
      {children}
    </Box>
  );
}
