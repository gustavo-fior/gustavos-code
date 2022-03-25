import React from "react";
import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  AWS,
  CSS,
  Docker,
  Eclipse,
  Heroku,
  HTML,
  Java,
  JavaScript,
  Kubernetes,
  MongoDB,
  MySql,
  Postgres,
  ReactJS,
  Spring,
  VSCode,
} from "../UI/svgs";
import styled, { useTheme } from "styled-components";
import LinkTree from "../components/LinkTree";
import TreeIconsRow from "../components/TreeIconsRow";
import TwoIconsRow from "../components/TwoIconsRow";
import FourIconsRow from "../components/FourIconsRow";
import AvatarGustavo from "../components/AvatarGustavo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GitHubRepositories from "../components/GitHubRepositories";
import Cursos from "../components/Cursos";

const Body = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 100vh;
  max-height: max-content;
`;

const Home = ({ tema }) => {
  const theme = useTheme();

  return (
    <Body>
      <Container sx={{ backgroundColor: theme.body }}>
        <Box display="flex" justifyContent="center" position="relative">
          <Stack marginTop={5} alignItems="center">
            <Typography color={theme.text} variant="h2">
              Hi! I'm <strong>Gustavo</strong>
            </Typography>
            <AvatarGustavo width={100} height={100} />
            <LinkTree theme={theme} />
            <Typography color={theme.text} variant="h5" marginTop={2}>
              I ♥ coding and surfing.
            </Typography>
            <Typography color={theme.text} variant="body1" marginTop={2}>
              Here's the list of tools/languages that I like to use and some
              cool stuff:
            </Typography>
          </Stack>
        </Box>
        <Paper
          sx={{
            marginTop: 3,
            backgroundColor: theme.inside,
            color: theme.text,
          }}
          elevation={5}
        >
          <Grid padding={3} container>
            <Grid item md={4}>
              <TwoIconsRow text="Databases:" icon1={MySql} icon2={Postgres} />
              <TwoIconsRow text="IDEs:" icon1={Eclipse} icon2={VSCode} />
              <TwoIconsRow text="Languages:" icon1={Java} icon2={JavaScript} />
              <TwoIconsRow text="Frameworks:" icon1={Spring} icon2={ReactJS} />
              <TreeIconsRow
                text="Others:"
                icon1={Heroku}
                icon2={HTML}
                icon3={CSS}
              />
              <FourIconsRow
                text="Will study:"
                icon1={AWS}
                icon2={MongoDB}
                icon3={Docker}
                icon4={Kubernetes}
              />
            </Grid>
            <Grid item md={8}>
              <Router>
                <Routes>
                  <Route exact path="/" element={<GitHubRepositories />} />
                  <Route exact path="/courses" element={<Cursos />} />
                </Routes>
              </Router>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Body>
  );
};

export default Home;
