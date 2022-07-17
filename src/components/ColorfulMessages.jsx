import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;

  // cssのstyleのオブジェクト変数も定義して利用できる
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
