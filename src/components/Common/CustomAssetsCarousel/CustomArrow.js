import * as React from "react";

const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} className="custom-left-arrow" />
);
const CustomRightArrow = ({ onClick }) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

// for vod banner

const CustomLeftArrowVodBanner = ({ onClick }) => (
  <i onClick={() => onClick()} className="custom-left-arrow-vod-banner" />
);
const CustomRightArrowVodBanner = ({ onClick }) => (
  <i onClick={() => onClick()} className="custom-right-arrow-vod-banner" />
);

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomLeftArrowVodBanner,
  CustomRightArrowVodBanner,
};
