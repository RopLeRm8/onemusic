import { Box } from "@mui/material";

export default function ErrorBox({ children }) {
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Box>{children}</Box>
    </Box>
  );
}
