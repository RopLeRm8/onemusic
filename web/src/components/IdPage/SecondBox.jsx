import { Button, Grid, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import biglogo from "../../assets/ID/biglogo.png";
import { IdContext } from "../../pages/IdPage";

export default function SecondBox() {
  const idValues = useContext(IdContext);
  const font = idValues.font;
  const firstColor = idValues.firstColor;
  const secondColor = idValues.secondColor;
  const BORDERINITIALCOLOR = idValues.BORDERINITIALCOLOR;
  return (
    <Grid
      container
      justifyContent="start"
      direction="column"
      alignItems="center"
      sx={{ py: 4, width: "100%" }}
    >
      <img src={biglogo} alt="" />
      <Typography
        sx={{
          fontFamily: font,
          color: secondColor,
          fontWeight: 600,
          ml: 1,
          mt: 1.5,
        }}
      >
        Вход с ONE.RU ID
      </Typography>
      <TextField
        sx={{
          width: "85%",
          mt: 2.5,
          border: `2px rgba(${BORDERINITIALCOLOR}, 0.1) solid`,
          color: "white",
          borderRadius: "2px",
          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              border: `2px ${firstColor} solid`,
              borderRadius: "2px",
            },
          },
          "& .MuiOutlinedInput-input": {
            py: 1.1,
          },
        }}
        autoFocus
        variant="outlined"
        inputProps={{
          style: {
            color: "white",
            fontSize: "90%",
            fontFamily: font,
          },
        }}
        placeholder="+7"
        type="tel"
      />
      <Button
        sx={{
          width: "85%",
          fontFamily: font,
          fontSize: "80%",
          borderRadius: "2px",
          background: "rgba(10,115,71,1)",
          color: `rgba(${BORDERINITIALCOLOR}, 0.5)`,
          border: `2px rgba(10,115,71,1) solid`,
          my: 2,
          textTransform: "none",
          py: 1.05,
          "&:hover": {
            color: firstColor,
            border: `2px ${firstColor} solid`,
          },
        }}
      >
        Продолжить
      </Button>
      <Typography
        sx={{
          fontFamily: font,
          color: secondColor,
          fontWeight: 500,
          opacity: 0.5,
        }}
      >
        или
      </Typography>
      <Button
        sx={{
          width: "85%",
          fontFamily: font,
          fontWeight: 500,
          fontSize: "80%",
          borderRadius: "2px",
          border: `2px rgba(${BORDERINITIALCOLOR}, 0.05) solid`,
          background: "transparent",
          color: secondColor,
          my: 2,
          textTransform: "none",
          py: 1.1,
          "&:hover": {
            color: firstColor,
            border: `2px ${firstColor} solid`,
          },
        }}
      >
        QR-код
      </Button>
      {/* <Typography
      sx={{
        fontFamily: font,
        color: secondColor,
        fontWeight: 500,
        fontSize: "60%",
        opacity: 0.5,
        textAlign: "center",
      }}
    >
      Нажимая «Продолжить», вы принимаете пользовательское соглашение и
      политику конфиденциальности
    </Typography>
    <Typography
      sx={{
        fontFamily: font,
        color: secondColor,
        fontSize: "60%",
        fontWeight: 500,
        opacity: 0.7,
        textAlign: "center",
      }}
    >
      Передаваемые данные
    </Typography> */}
    </Grid>
  );
}
