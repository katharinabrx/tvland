import React from "react";
import { Link } from "react-router-dom";
import "./EpisodeTeaserCard.scss";

const EpisodeTeaserCard = ({ showId, id, name, season, number }) => {
  return (
    <Link to={`/shows/${showId}/episodes/${id}`} className="EpisodeTeaserCard">
      <article className="EpisodeTeaserCard__card">
        <div className="EpisodeTeaserCard__title">
          <strong>
            {number}. {name}
          </strong>
          <p></p>
        </div>
      </article>
    </Link>
  );
};

export default EpisodeTeaserCard;
