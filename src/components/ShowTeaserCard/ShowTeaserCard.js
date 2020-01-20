import React from "react";
import { Link } from "react-router-dom";
import "./ShowTeaserCard.scss";

const ShowTeaserCard = ({ showId, showName, showImage }) => {
  return (
    <article className="ShowTeaserCard">
      <Link to={`/shows/${showId}`} key={showId} className="ShowTeaserCard__link">
        <img src={showImage} alt={showName} className="ShowTeaserCard__card" />
        <div className="ShowTeaserCard__title">{showName}</div>
      </Link>
    </article>
  );
};

export default ShowTeaserCard;
