import React from "react";
import "./ShowList.scss";
import ShowTeaserCard from "../ShowTeaserCard";

import PlaceholderImage from "../../assets/placeholder.jpg";

const ShowList = ({ isLoading, showList }) => (
  <section className="ShowList">
    <h2>Shows</h2>
    <div className="ShowList__grid">
      {!isLoading ? (
        <React.Fragment>
          {showList.map((show, i) =>
            show.image === undefined ? (
              <ShowTeaserCard
                showId={show.id}
                showName={show.name}
                key={i}
                showImage={PlaceholderImage}
              />
            ) : (
              <ShowTeaserCard
                showId={show.id}
                showName={show.name}
                key={i}
                showImage={show.image.medium}
              />
            )
          )}
          )} }
        </React.Fragment>
      ) : (
        <React.Fragment>
          {[...Array(6)].map((_, i) => (
            <ShowTeaserCard key={i} showId={i} showName="Show" showImage={PlaceholderImage} />
          ))}
        </React.Fragment>
      )}
    </div>
  </section>
);
export default ShowList;
