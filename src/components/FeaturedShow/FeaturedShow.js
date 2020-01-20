import React from "react";
import { Link } from "react-router-dom";
import sanitizeHtml from "sanitize-html-react";
import "./FeaturedShow.scss";
import PlaceholderImage from "../../assets/placeholder.jpg";

const FeaturedShow = ({ isLoading, show }) => {
  const premiereDate = new Date(show.premiered).getFullYear();

  return (
    <section className="FeaturedShow">
      {!isLoading ? (
        <React.Fragment>
          <Link to={`/shows/${show.id}`}>
            {show.image === undefined ? (
              <img src={PlaceholderImage} alt={show.name} className="FeaturedShow__image" />
            ) : (
              <img src={show.image.original} alt={show.name} className="FeaturedShow__image" />
            )}
          </Link>
          <div className="FeaturedShow__details">
            <h2 className="h1">{show.name}</h2>
            <div className="FeaturedShow__additional-info">
              <span className="FeaturedShow__date">{premiereDate}</span>

              <span className="FeaturedShow__genres">{show.genres.join(", ")}</span>
            </div>
            <div
              className="FeaturedShow__summary"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(show.summary, {
                  allowedTags: ["p"],
                  allowedAttributes: {}
                })
              }}
            />
            <Link to={`/shows/${show.id}`} className="FeaturedShow__link">
              More Infos
            </Link>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>Loading</React.Fragment>
      )}
    </section>
  );
};
export default FeaturedShow;
