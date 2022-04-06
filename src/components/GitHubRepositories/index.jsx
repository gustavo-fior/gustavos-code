import React from "react";
import GitHubRepo from "../GitHubRepo";

const GitHubRepositories = () => {
  return (
    <>
      <GitHubRepo name="news" link="https://brazil-news.herokuapp.com" />
      <GitHubRepo name="news-react" link="https://branews.vercel.app/" />
      <GitHubRepo
        name="f1"
        link="f1basic.vercel.app"
      />
      <GitHubRepo
        name="gustavos-code"
        link="https://gustavoscode.vercel.app/"
      />
    </>
  );
};

export default GitHubRepositories;
