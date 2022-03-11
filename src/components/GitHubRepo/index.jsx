import { Button, Grid, Link, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRepoData } from "../../api/api";
import { Icone } from "../../UI/components";
import { Java } from "../../UI/svgs";

const GitHubRepo = ({ name, link }) => {
  const [repoData, setRepoData] = useState({});

  useEffect(() => {
    getRepoData(name, setRepoData);
  }, [name]);

  return (
    <Paper sx={{ padding: 2, margin: 1 }}>
      <Grid container>
        <Grid item md={8}>
          <Link underline="hover" color="black" href={repoData.html_url}>
            <Typography variant="h6">{repoData.full_name}</Typography>
          </Link>
          <Typography variant="body1">{repoData.description}</Typography>
        </Grid>
        <Grid item md={4}>
          <Button href={link} sx={{ marginTop: 1 }} variant="contained" size="small">
            See the project!
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GitHubRepo;
