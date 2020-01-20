import React from "react";
import sanitizeHtml from "sanitize-html-react";
import "./ShowDetail.scss";
export const ShowDetail = ({ isLoading, show }) => {
  return (
    <section className="ShowDetail">
      {!isLoading ? (
        <React.Fragment>
          <img src={show.image.original} alt={show.name} className="ShowDetail__image" />
          <div className="ShowDetail__details">
            <h2 className="h1">{show.name}</h2>
            <div
              className="ShowDetail__summary"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(show.summary, {
                  allowedTags: ["p"],
                  allowedAttributes: {}
                })
              }}
            />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>Loading</React.Fragment>
      )}
    </section>
  );
};

export default ShowDetail;
