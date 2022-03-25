import { Avatar } from "@mui/material";
import Gustavo from "../../assets/img/avatar.jpeg";
import React from "react";

const AvatarGustavo = ({ width, height }) => {
  return (
    <Avatar
      src={Gustavo}
      alt="Avatar Gustavo Fior"
      sx={{ width: width, height: height, marginTop: 3 }}
    />
  );
};

export default AvatarGustavo;
