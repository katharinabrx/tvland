import React from "react";
import EpisodeTeaserCard from "../EpisodeTeaserCard";
import "./EpisodeList.scss";

const EpisodeList = ({ isLoading, episodeList, showId }) => {
  return (
    <section className="EpisodeList">
      <div className="EpisodeList__grid">
        {!isLoading ? (
          <React.Fragment>
            {episodeList.map((episode, i) => {
              return (
                <EpisodeTeaserCard
                  key={i}
                  showId={showId}
                  id={episode.id}
                  name={episode.name}
                  season={episode.season}
                  number={episode.number}
                />
              );
            })}
          </React.Fragment>
        ) : (
          <React.Fragment>loading</React.Fragment>
        )}
      </div>
    </section>
  );
  //}
};

export default EpisodeList;
