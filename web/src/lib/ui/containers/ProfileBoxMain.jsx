import { Box } from "@mui/material";

export default function ProfileBoxMain({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "60%", sm: "50%" },
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
