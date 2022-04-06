import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "styled-components";
import AvatarGustavo from "../AvatarGustavo";
import LinkTree from "../LinkTree";

const Bio = () => {
  const theme = useTheme();

  return (
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
          Here's the list of tools/languages that I like to use and some cool
          stuff:
        </Typography>
      </Stack>
    </Box>
  );
};

export default Bio;
