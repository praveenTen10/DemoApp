import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import  { useState, useEffect } from "react";
import Button from "../../ui-components/button/button";
import Card from "../../ui-components/card/card";
import DraggableComponent from "../../ui-components/dragabble/dragabble";

type users = {
  login: string;
  id: number;
  avatar_url: string;
};

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
}));
function Home() {
  const classes = useStyles();
  const [users, setUsers] = useState<users[]>([]);

  useEffect(() => {
    axios.get("https://api.github.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Grid container className={classes.root} justifyContent="space-between">
      <Grid item md={5} style={{ marginBottom: 30 }}>
        <Box border={1} p={4} pb={0} borderRadius={"5%"}>
          <Typography variant="h5">Even Id's Group</Typography>
          <div className={classes.cards}>
            {users
              .filter((user) => user.id % 2 === 0)
              .map((user) => {
                return (
                  <DraggableComponent key={user.id}>
                    <Card
                      header={user.login}
                      content={
                        <img
                          src={user.avatar_url}
                          width="200px"
                          height="200px"
                          alt="user-img"
                        />
                      }
                    />
                  </DraggableComponent>
                );
              })}
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
          <Typography variant="h5">ODD Id's Group</Typography>
          <div className={classes.cards}>
            {users
              .filter((user) => user.id % 2 !== 0)
              .map((user) => {
                return (
                  <DraggableComponent key={user.id}>
                    <Card
                      header={user.login}
                      content={
                        <img
                          src={user.avatar_url}
                          width="200px"
                          height="200px"
                          alt="user-img"
                        />
                      }
                    />
                  </DraggableComponent>
                );
              })}
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
