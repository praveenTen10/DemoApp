import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Button from "../../ui-components/button/button";
import Card from "../../ui-components/card/card";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiPaper-root": {
      margin: 20,
    },
  },
  cards: {
    height: 295,
    overflowY: "auto",
    margin: 10,
    paddingBottom: 32,
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgb(0 0 0 / 30%)",
      borderRadius: 10,
    },
    "*::-webkit-scrollbar-thumb": {
      boxShadow: "inset 1px 1px 6px rgb(0 0 0 / 50%)",
      borderRadius: 10,
    },
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="space-between">
      <Grid item md={5}>
        <Box border={1} p={4} pb={0} borderRadius={"5%"}>
          <Typography variant="h5">Group 1</Typography>
          <div className={classes.cards}>
            <Card />
            <Card />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 5,
            }}
          >
            <Button buttonText="Add" fullWidth={false} />
          </div>
        </Box>
      </Grid>
      <Grid item md={5}>
        <Box border={1} p={4} pb={0} borderRadius={"5%"}>
          <Typography variant="h5">Group 2</Typography>
          <div className={classes.cards}>
            <Card />
            <Card />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 5,
            }}
          >
            <Button buttonText="Add" fullWidth={false} />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
