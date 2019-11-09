import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = props => {
  const { placeholder } = props;
  return (
    <>
      <input {...placeholder} />
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Input;
