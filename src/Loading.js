import React from "react";
import { css } from "@emotion/react";
import Loader from "react-spinners/GridLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading({size}) {
  return (
    <div className="sweet-loading">
      <Loader color={"#1676FF"} loading={true} css={override} size={size} />
    </div>
  );
}

export default Loading;