import React from "react";
import PropTypes from "prop-types";

const Comments = (props) => {
  const { ArticleID } = props;
  return <div>{ArticleID}</div>;
};

Comments.propTypes = {
  ArticleID: PropTypes.number.isRequired,
};

export default Comments;
