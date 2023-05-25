import React from "react";

const Title = ({ title, ...props }) => {
  return (
    <div className="font-500" {...props}>
      {title}
    </div>
  );
};

export default Title;
