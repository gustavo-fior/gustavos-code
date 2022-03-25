import { Button, Grid, Link, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { getRepoData } from "../../api/api";
import { Icone } from "../../UI/components";
import { Github } from "../../UI/svgs";

const GitHubRepo = ({ name, link }) => {
  const theme = useTheme();
  const [repoData, setRepoData] = useState({});

  useEffect(() => {
    getRepoData(name, setRepoData);
  }, [name]);

  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2, backgroundColor: theme.body }}>
      <Grid container>
        <Grid sx={{ marginTop: 2 }} item md={0.8}>
          <Icone src={Github} />
        </Grid>
        <Grid item md={9.7}>
          <Link underline="hover" color="black" href={repoData.html_url}>
            <Typography color={theme.text} variant="h6">{repoData.full_name}</Typography>
          </Link>
          <Typography color={theme.text} variant="body1">{repoData.description}</Typography>
        </Grid>
        <Grid item md={1.5}>
          <Button
            href={link}
            sx={{ backgroundColor: theme.button, textAlign: "center" }}
            variant="contained"
            size="small"
          >
            See the project!
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GitHubRepo;
