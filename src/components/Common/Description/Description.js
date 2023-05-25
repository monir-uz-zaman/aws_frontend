import React from "react";

const Description = ({ description, ...props }) => {
  return (
    <div
      className="font-300"
      dangerouslySetInnerHTML={{ __html: description }}
      {...props}
    />
  );
};

export default Description;
