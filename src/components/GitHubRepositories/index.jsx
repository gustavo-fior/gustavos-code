import React from "react";
import GitHubRepo from "../GitHubRepo";

const GitHubRepositories = () => {
  return (
    <>
      <GitHubRepo name="news" link="https://brazil-news.herokuapp.com" />
      <GitHubRepo name="news-react" link="https://branews.vercel.app/" />
      <GitHubRepo
        name="alura-styled-components"
        link="https://bytebank-neon.vercel.app/"
      />
      <GitHubRepo
        name="gustavos-code"
        link="https://gustavo-woad.vercel.app/"
      />
    </>
  );
};

export default GitHubRepositories;
