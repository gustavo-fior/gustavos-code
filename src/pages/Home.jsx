import React from "react";
import {
  Avatar,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import Gustavo from "../assets/img/avatar.jpeg";
import { Box } from "@mui/system";
import { Icone } from "../UI/components.js";
import GitHubRepo from "../components/GitHubRepo";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
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

const Body = styled.div`
  background-color: ${({ theme }) => theme.body};
  height: 100vh;
`;

const Home = () => {
  const theme = useTheme();

  return (
    <Body>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          position="relative"
        >
          <Stack marginTop={5} alignItems="center">
            <Typography color={theme.text} variant="h2">
              Hi! I'm <strong>Gustavo</strong>
            </Typography>
            <Avatar
              src={Gustavo}
              alt="Avatar Gustavo Fior"
              sx={{ width: 100, height: 100, marginTop: 3 }}
            />
            <Stack marginTop={3} spacing={2} direction="row">
              <Link href="https://www.instagram.com/gustavo.fior">
                <InstagramIcon sx={{ color: theme.text }} />
              </Link>
              <Link href="mailto:gustavo_fior@outlook.com">
                <EmailIcon sx={{ color: theme.text }} />
              </Link>
              <Link href="https://www.linkedin.com/in/gustavo-fior-a910781b4/">
                <LinkedInIcon sx={{ color: theme.text }} />
              </Link>
              <Link href="https://www.github.com/gustavo-fior">
                <GitHubIcon sx={{ color: theme.text }} />
              </Link>
            </Stack>
            <Typography color={theme.text} variant="h5" marginTop={2}>
              I ♥ coding and surfing.
            </Typography>
            <Typography color={theme.text} variant="body1" marginTop={2}>
              Here's the list of tools/languages that I like to use and some
              cool stuff:
            </Typography>
          </Stack>
        </Box>
        <Paper sx={{ marginTop: 3, backgroundColor: theme.inside, color: theme.text}} elevation={5}>
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
              </Stack>
              <Stack direction="row" spacing={3} marginTop={3} height={50}>
                <Typography marginTop={1}>Will study:</Typography>
                <Icone src={AWS} />
                <Icone src={MongoDB} />
                <Icone src={Docker} />
                <Icone src={Kubernetes} />
              </Stack>
            </Grid>
            <Grid item md={8}>
              <GitHubRepo
                name="news"
                link="https://brazil-news.herokuapp.com"
              />
              <GitHubRepo
                name="news-react"
                link="https://branews.vercel.app/"
              />
              <GitHubRepo
                name="alura-styled-components"
                link="https://bytebank-neon.vercel.app/"
              />
              <GitHubRepo
                name="gustavos-code"
                link="https://gustavo-woad.vercel.app/"
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Body>
  );
};

export default Home;
