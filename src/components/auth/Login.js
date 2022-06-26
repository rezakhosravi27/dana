import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import accountimg from "../../images/accounting.jpg";
import upImage from "../../images/2.png";
import LoginForm from "./LoginForm";
import { Hidden } from "@mui/material";
import SwitchForm from "./SwitchForm";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    height: "100vh",
    background: `linear-gradient(to top, rgba(59,68,246, .8), rgba(59,68,246, .8)), url(${accountimg}) no-repeat top center`,
    backgroundSize: "cover",
    "& > img": {
      height: "70%",
      width: "80%",
      filter: "opacity(1)",
    },
  },
  formContainer: {
    height: "100vh",
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={7} className={classes.formContainer}>
        <SwitchForm />
      </Grid>
      <Hidden mdDown>
        <Grid
          item
          xs={12}
          md={5}
          className={classes.imageContainer}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={upImage} alt="accounting" />
        </Grid>
      </Hidden>
    </Grid>
  );
}
