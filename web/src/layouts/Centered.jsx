import { Box } from "@mui/material";

export default function Centered({ children, style }) {
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={style}>{children}</Box>
    </Box>
  );
}
