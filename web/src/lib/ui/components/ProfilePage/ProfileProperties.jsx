import { Button, Divider, Grid, Typography } from "@mui/material";

import useGetProfilePageValues from "../../../hooks/useGetProfilePageValues";
import useGetProfileProperties from "../../../hooks/useGetProfileProperties";

export default function ProfileProperties() {
  const TABSBACKGROUNDCOLOR = "rgba(255, 255, 255,0.05)";
  const DIVIDERCOLOR = "rgba(255, 255, 255,0.1)";
  const OPTIONSCOLOR = "rgba(255, 255, 255,0.25)";
  const { font, firstColor, secondColor } = useGetProfilePageValues();

  const { propsList, optionsList } = useGetProfileProperties();
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      alignItems={{ xs: "center", sm: "flex-start" }}
    >
      {propsList.map((prop) => (
        <Grid
          item
          sx={{ display: "flex", alignItems: "center" }}
          key={prop.label}
        >
          <Button
            startIcon={
              <img src={prop.picture} alt="" style={{ marginLeft: "10px" }} />
            }
            sx={{
              gap: "0.5rem",
              width: "230px",
              height: "50px",
              background: prop.label === "Главная" ? TABSBACKGROUNDCOLOR : null,
              "&:hover": {
                background: TABSBACKGROUNDCOLOR,
              },
              color: firstColor,
              justifyContent: "flex-start",
            }}
            size="large"
          >
            <Typography
              sx={{
                fontFamily: font,
                color: secondColor,
                fontWeight: 500,
                fontSize: "80%",
                textTransform: "none",
              }}
            >
              {prop.label}
            </Typography>
          </Button>
        </Grid>
      ))}
      <Grid item>
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          sx={{
            background: DIVIDERCOLOR,
            width: "215px",
            ml: 2,
          }}
        />
      </Grid>
      {optionsList.map((option) => (
        <Grid item key={option.label} sx={{ ml: { md: 2 }, width: "215px" }}>
          <a
            href={option.link}
            style={{
              marginTop: 0.5,
              marginBottom: 0.5,
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                fontFamily: font,
                color: OPTIONSCOLOR,
                fontSize: "70%",
                fontWeight: 500,
                transition: "0.2s all ease-out",
                "&:hover": {
                  color: secondColor,
                },
              }}
            >
              {option.label}
            </Typography>
          </a>
        </Grid>
      ))}
    </Grid>
  );
}
