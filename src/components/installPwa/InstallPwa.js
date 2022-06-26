import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    padding: "1rem",
  },
});

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "0",
        right: "0",
        width: "100%",
        backgroundColor: "#fff",
        display: `${!showButton ? "none" : "block"}`,
      }}
    >
      <Grid container p={3}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.card} style={{ backgroundColor: "#eee" }}>
            <Grid item xs={12} justifyContent="center">
              <Typography textAlign="center" variant="body1" fontFamily="vazir">
                آيا ميخواهيد اين برنامه را به صفحه اصلي اضافه كنيد؟
              </Typography>
            </Grid>
            <Grid xs={12} display="flex" justifyContent="space-around" mt={2}>
              <Button
                color="error"
                size="medium"
                variant="contained"
                onClick={() => setShowButton(false)}
              >
                خير
              </Button>
              <Button
                color="success"
                onClick={onClick}
                variant="contained"
                title="Install app"
              >
                بلی
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InstallPWA;
