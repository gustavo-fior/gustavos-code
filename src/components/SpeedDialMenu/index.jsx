import GitHub from "@mui/icons-material/GitHub";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import React from "react";
import { useTheme } from "styled-components";

const SpeedDialMenu = () => {
  const theme = useTheme();

  return (
    <SpeedDial
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
    </SpeedDial>
  );
};

export default SpeedDialMenu;
