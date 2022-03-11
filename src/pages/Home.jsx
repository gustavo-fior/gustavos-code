import React from "react";
import {
  Avatar,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Gustavo from "../assets/img/avatar.jpeg";
import { Box } from "@mui/system";
import { Icone } from "../UI/components.js";
import GitHubRepo from "../components/GitHubRepo";
import { CSS, Eclipse, Github, Heroku, HTML, Java, JavaScript, MySql, Postgres, ReactJS, Spring, VSCode } from "../UI/svgs";

const Home = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        position="relative"
        marginTop={10}
      >
        <Stack alignItems="center">
          <Typography variant="h2">
            Hi! I'm <strong>Gustavo...</strong>
          </Typography>
          <Avatar
            src={Gustavo}
            alt="Avatar Gustavo Fior"
            sx={{ width: 100, height: 100, marginTop: 3 }}
          />
          <Typography variant="h5" marginTop={3}>
            I ♥ coding and surfing.
          </Typography>
          <Typography variant="body1" marginTop={3}>
            Here's the list of tools/languages that I like to use and some cool
            stuff:
          </Typography>
        </Stack>
      </Box>
      <Paper sx={{ marginTop: 3 }} elevation={5}>
        <Grid padding={5} container>
          <Grid item md={4}>
            <Stack direction="row" spacing={3} marginTop={3} height={50}>
              <Typography marginTop={1}>Databases:</Typography>
              <Icone src={MySql} />
              <Icone src={Postgres} />
            </Stack>
            <Stack direction="row" spacing={3} marginTop={3} height={50}>
              <Typography marginTop={1}>IDEs:</Typography>
              <Icone src={Eclipse} />
              <Icone src={VSCode} />
            </Stack>
            <Stack direction="row" spacing={3} marginTop={3} height={50}>
              <Typography marginTop={1}>Languages:</Typography>
              <Icone src={Java} />
              <Icone src={JavaScript} />
            </Stack>
            <Stack direction="row" spacing={3} marginTop={3} height={50}>
              <Typography marginTop={1}>Frameworks:</Typography>
              <Icone src={Spring} />
              <Icone src={ReactJS} />
            </Stack>
            <Stack direction="row" spacing={3} marginTop={3} height={50}>
              <Typography marginTop={1}>Others:</Typography>
              <Icone src={Heroku} />
              <Icone src={HTML} />
              <Icone src={CSS} />
              <Icone src={Github} />
            </Stack>
          </Grid>
          <Grid item md={8}>
                <GitHubRepo name="news" link="https://brazil-news.herokuapp.com"/>
                <GitHubRepo name="news-react" link="http://brazilnews.herokuapp.com"/>
                <GitHubRepo name="alura-styled-components" link="http://bancobyte.herokuapp.com"/>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
