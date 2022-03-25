import { Stack, Typography } from "@mui/material";
import React from "react";
import { Icone } from "../../UI/components";

const FourIconsRow = ({ text, icon1, icon2, icon3, icon4}) => {
  return (
    <Stack direction="row" spacing={3} marginTop={3} height={50}>
      <Typography marginTop={1}>{text}</Typography>
      <Icone src={icon1} />
      <Icone src={icon2} />
      <Icone src={icon3} />
      <Icone src={icon4} />
    </Stack>
  );
};

export default FourIconsRow;
