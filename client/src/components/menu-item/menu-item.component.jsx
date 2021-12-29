import React from "react";
import { withRouter } from "react-router";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <h2 className="subtitle">SHOP NOW</h2>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
