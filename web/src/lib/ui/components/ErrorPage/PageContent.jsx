import { Box, Button, Typography } from "@mui/material";
import { useCallback } from "react";
import x_1 from "../../../../assets/Landing/x_1.svg";
import x_2 from "../../../../assets/Landing/x_2.svg";
import { useGetGlobalValues } from "../../../hooks/useDataHandling";
import { useRedirect } from "../../../hooks/useRoutingHandlers";
import ErrorBox from "../../containers/ErrorBox";

export default function PageContent() {
  const { firstColor, secondColor, font } = useGetGlobalValues();
  const redirect = useRedirect();
  const handleReturn = useCallback(() => {
    redirect("/");
  }, [redirect]);
  return (
    <ErrorBox>
      <img
        src={x_1}
        alt=""
        style={{ position: "relative", left: "-6vw", top: "15rem" }}
      />
      <img
        src={x_2}
        alt=""
        style={{
          position: "relative",
          right: "-7.5rem",
          top: "0rem",
          transform: "rotate(30deg)",
        }}
      />
      <Box sx={{ display: "block", width: "15rem", textAlign: "justify" }}>
        <Typography
          sx={{
            color: secondColor,
            fontFamily: font,
            fontWeight: 700,
            fontSize: "300%",
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            color: secondColor,
            fontFamily: font,
            fontWeight: 600,
            fontSize: "125%",
            mt: -1.5,
            mb: 2,
          }}
        >
          Страница не найдена
        </Typography>
        <Button
          fullWidth
          sx={{
            fontFamily: font,
            fontSize: "100%",
            background: firstColor,
            borderRadius: "3px",
            color: "black",
            border: `2px solid ${firstColor}`,
            "&:hover": {
              color: secondColor,
              background: "transparent",
            },
            textTransform: "none",
          }}
          onClick={handleReturn}
        >
          На главную
        </Button>
      </Box>
    </ErrorBox>
  );
}
