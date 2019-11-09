import React from "react";
import PropTypes from "prop-types";
import "./LargeCard.scss";

const LargeCard = props => {
  const { artist } = props;
  return <div>{artist}</div>;
};

LargeCard.propTypes = {
  artist: PropTypes.string.isRequired
};

export default LargeCard;
