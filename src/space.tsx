import React, { FC } from "react";

interface IProps {
  width?: number;
  height?: number;
}

let Space: FC<IProps> = (props) => {
  return (
    <div
      style={{
        display: props.width ? "inline-block" : "block",
        width: props.width || 1,
        height: props.height || 1,
      }}
    />
  );
};

export default Space;
