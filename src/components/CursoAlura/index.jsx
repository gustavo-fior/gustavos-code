import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import { Icone, IconeDark } from "../../UI/components";

const CursoAlura = ({ icone }) => {
    const theme = useTheme();

  return (
    <Stack direction="row" spacing={2}>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          margin: 2,
          backgroundColor: theme.body,
          width: 700,
        }}
      >
        <Grid container>
          <Grid sx={{ marginTop: 2 }} item md={0.8}>
            {theme.text === "black" ? (
              <Icone src={icone} />
            ) : (
              <IconeDark src={icone} />
            )}
          </Grid>
          <Grid item md={9.7}>
            <Typography color={theme.text} variant="h6">
              Alura Courses
            </Typography>
            <Typography color={theme.text} variant="body1">
              Courses about a bunch of technologies including Java, JS, SQL,
              Cloud Providers, HTML, CSS, Srping, React...
            </Typography>
          </Grid>
          <Grid item md={1.5}>
            <Button
              sx={{
                backgroundColor: theme.button,
                textAlign: "center",
                height: 80,
              }}
              variant="contained"
              size="small"
              href="https://cursos.alura.com.br/user/gustavoo/fullCertificate/e1ef5abd7402b0b3e8c593d2758017b7"
            >
              See the full list
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
};

export default CursoAlura;
