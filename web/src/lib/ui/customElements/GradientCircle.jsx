import { styled } from "@mui/material";

export default function GradientCircle() {
  const GradientCircle = styled("div")({
    width: "6px",
    height: "6px",
    marginRight: "0.7rem",
    borderRadius: "50%",
    backgroundImage: "linear-gradient(to left, #15E78F, #0E4FF1)",
  });
  return <GradientCircle />;
}
