/* eslint-disable react/prop-types */
import React from "react";
import Input from "../form-elements/Input";
import "./Landing.scss";

const Landing = props => {
  const { children } = props;
  return (
    <div className="landing-page">
      <Input />
    </div>
  );
};

export default Landing;
