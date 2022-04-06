import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import styled, { useTheme } from "styled-components";
import { Icone, IconeDark } from "../../UI/components";

const WrapperMobile = styled.div`
  @media only screen and (max-width: 600px) {
    width: 37vh;
    text-align: center;
  }
`;

const CursoSoftgraf = ({ icone }) => {
  const theme = useTheme();

  return (
    <WrapperMobile>
      <Stack direction="row" spacing={2}>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            margin: 2,
            backgroundColor: theme.body,
          }}
        >
          <Grid container>
            <Grid sx={{ marginTop: 2 }} item xs={12} md={0.8}>
              {theme.text === "black" ? (
                <Icone src={icone} />
              ) : (
                <IconeDark src={icone} />
              )}
            </Grid>
            <Grid item xs={12} md={9.7}>
              <Typography color={theme.text} variant="h6">
                Softgraf
              </Typography>
              <Typography color={theme.text} variant="body1">
                This is where I started to learn how to code. I did a Java 8
                course (140h) <br /> and a C# course (40h).
              </Typography>
            </Grid>
            <Grid item xs={12} md={1.5}>
              <Button
                sx={{
                  backgroundColor: theme.button,
                  textAlign: "center",
                  height: 80,
                }}
                variant="contained"
                size="small"
                href="https://www.softgraf.com/site/"
              >
                Visit their website
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </WrapperMobile>
  );
};

export default CursoSoftgraf;
