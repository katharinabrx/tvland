import React from "react";
import sanitizeHtml from "sanitize-html-react";
import PlaceholderImage from "../../assets/placeholder.jpg";
import "./EpisodeDetail.scss";

const EpisodeDetail = ({ isLoading, episode }) => {
  return (
    <section className="EpisodeDetail">
      {!isLoading ? (
        <React.Fragment>
          {episode.image === null ? (
            <img src={PlaceholderImage} alt={episode.name} className="EpisodeDetail__image" />
          ) : (
            <img src={episode.image.original} alt={episode.name} className="EpisodeDetail__image" />
          )}

          <div className="EpisodeDetail__details">
            <h2 className="h1">{episode.name}</h2>
            {episode.summary !== null ? (
              <div
                className="EpisodeDetail__summary"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(episode.summary, {
                    allowedTags: ["p"],
                    allowedAttributes: {}
                  })
                }}
              />
            ) : (
              <div className="EpisodeDetail__summary">No summary.</div>
            )}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>Loading</React.Fragment>
      )}
    </section>
  );
};

export default EpisodeDetail;
