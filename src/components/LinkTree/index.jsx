import { Link, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const LinkTree = ({ theme }) => {
  return (
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
  );
};

export default LinkTree;
