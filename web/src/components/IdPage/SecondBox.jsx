import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import arrow from "../../assets/ID/arrow.svg";
import biglogo from "../../assets/ID/biglogo.svg";
import { IdContext } from "../../pages/IdPage";
export default function SecondBox() {
  const idValues = useContext(IdContext);
  const font = idValues.font;
  const firstColor = idValues.firstColor;
  const secondColor = idValues.secondColor;
  const BORDERINITIALCOLOR = idValues.BORDERINITIALCOLOR;
  const USERAGREEMENT = "";
  const POLITICSCONFID = "";
  const GIVENDATA = "";
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" disableTypography>
              <Typography sx={{ color: "white", fontFamily: font, mr: -1 }}>
                +7
              </Typography>
            </InputAdornment>
          ),
          sx: { color: secondColor },
        }}
        type="tel"
        autoComplete="off"
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
      <Box
        sx={{
          display: "flex",
          alignSelf: "start",
          alignItems: "center",
          width: "85%",
          mx: "auto",
          mb: 2,
        }}
      >
        <Checkbox
          sx={{
            p: 0,
            width: "30px",
            height: "30px",
            borderRadius: "3px",
            border: `2px rgba(${BORDERINITIALCOLOR}, 0.2) solid`,
            "&.Mui-checked": {
              color: firstColor,
              background: firstColor,
              border: `0px solid`,
            },
            "& .MuiSvgIcon-root": {
              fontSize: "2.5rem",
              p: 0,
            },
            mr: 1.5,
          }}
          checkedIcon={<CheckIcon sx={{ maxWidth: "80%", color: "black" }} />}
        />
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 500,
            fontSize: "80%",
            opacity: 0.25,
            textAlign: "center",
            display: "inline",
            mr: 0.5,
          }}
        >
          Сохранить вход
        </Typography>
      </Box>
      <Box
        sx={{
          width: "95%",
          height: { md: "23%", xl: "17%" },
          marginTop: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 500,
            fontSize: "80%",
            opacity: 0.5,
            textAlign: "center",
            display: "inline",
            mr: 0.5,
          }}
        >
          Нажимая «Продолжить», вы принимаете
        </Typography>
        <a href={USERAGREEMENT}>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 500,
              fontSize: "80%",
              opacity: 0.7,
              textAlign: "center",
              textDecoration: "underline",
              display: "inline",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            пользовательское соглашение
          </Typography>
        </a>
        <Typography
          sx={{
            fontFamily: font,
            color: secondColor,
            fontWeight: 500,
            fontSize: "80%",
            opacity: 0.5,
            textAlign: "center",
            display: "inline",
            mx: 0.5,
          }}
        >
          и
        </Typography>
        <a href={POLITICSCONFID}>
          <Typography
            sx={{
              fontFamily: font,
              color: secondColor,
              fontWeight: 500,
              fontSize: "80%",
              opacity: 0.7,
              textAlign: "center",
              textDecoration: "underline",
              display: "inline",
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            политику конфиденциальности
          </Typography>
        </a>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 1,
          }}
        >
          <a href={GIVENDATA}>
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontSize: "80%",
                fontWeight: 500,
                opacity: 0.7,
                textAlign: "center",
                mr: 1,
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              Передаваемые данные
            </Typography>
          </a>
          <img src={arrow} alt="" />
        </Box>
      </Box>
    </Grid>
  );
}
