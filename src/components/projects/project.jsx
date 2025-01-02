// Imports
import React from "react";
import Data from "./project-data";
import pr_1 from "../../images/pr-1.png";
import pr_2 from "../../images/pr-2.png";
import pr_3 from "../../images/pr-3.png";

function Project() {
  return (
    <>
      <Data
        title="Example Project"
        prag="A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more."
        src={pr_1}
      />

      <Data
        title="Example Project"
        prag="A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more."
        src={pr_2}
      />

      <Data
        title="Example Project"
        prag="A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more."
        src={pr_3}
      />
    </>
  );
}

export default Project;
