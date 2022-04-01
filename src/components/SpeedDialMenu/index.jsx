import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import styled, { useTheme } from "styled-components";
import GitHub from "@mui/icons-material/GitHub";
import React from "react";

const ClasseSpeedDialMobile = styled(SpeedDial)`
  position: "absolute";
  bottom: 20;
  right: 20;

  @media only screen and (max-width: 600px) {
    position: fixed;
  }
`;

const SpeedDialMenu = () => {
  const theme = useTheme();

  return (
    <ClasseSpeedDialMobile
      ariaLabel="SpeedDial menu"
      sx={{ position: "absolute", bottom: 20, right: 20 }}
      icon={<SpeedDialIcon />}
      direction="up"
      FabProps={{ sx: { backgroundColor: "black" } }}
    >
      <SpeedDialAction
        sx={{ backgroundColor: theme.inside }}
        icon={<GitHub sx={{ color: theme.text }} />}
        tooltipTitle={"GitHub Projects"}
        href="/"
      />
      <SpeedDialAction
        sx={{ backgroundColor: theme.inside }}
        icon={<CardMembershipIcon sx={{ color: theme.text }} />}
        tooltipTitle={"Courses"}
        href="/courses"
      />
    </ClasseSpeedDialMobile>
  );
};

export default SpeedDialMenu;
