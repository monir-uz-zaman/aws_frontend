import React from "react";
import { Carousel } from "react-responsive-carousel";

import useWindowDimensions from "@/hooks/WindowDimension";
import {
  CustomLeftArrowVodBanner,
  CustomRightArrowVodBanner,
} from "./CustomArrow";

import classes from "./VodBannerCustomCarousel.module.css";

const slickSettings = {
  dots: true,
  infiniteLoop: true,

  responsive: {
    desktop: {
      breakpoint: {
        max: 4000,
        min: 1441,
      },
      items: 1,
      partialVisibilityGutter: 0,
      slidesToSlide: 1,
    },
    laptop: {
      breakpoint: {
        max: 1440,
        min: 769,
      },
      items: 1,
      partialVisibilityGutter: 0,
      slidesToSlide: 1,
    },

    tablet: {
      breakpoint: {
        max: 768,
        min: 550,
      },
      items: 1,
      partialVisibilityGutter: 0,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: {
        max: 549,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 0,
      slidesToSlide: 1,
    },
  },
  centerMode: true,

  showStatus: false,
  showThumbs: false,
};
const renderIndicator = (onClickHandler, isSelected, index, label) => {
  return (
    <li
      className={`${classes.customIndicator} ${
        isSelected ? classes.selected : ""
      }`}
      onClick={onClickHandler}
      key={index}
      role="button"
      aria-label={label}
    />
  );
};

const VodBannerCustomCarousel = ({ children }) => {
  const { width } = useWindowDimensions();
  return (
    <Carousel
      {...slickSettings}
      centerSlidePercentage={width >= 549 ? 80 : 100}
      showArrows={width >= 549 ? true : false}
      renderArrowPrev={(onClick) =>
        width >= 549 && <CustomLeftArrowVodBanner onClick={onClick} />
      }
      renderArrowNext={(onClick) =>
        width >= 549 && <CustomRightArrowVodBanner onClick={onClick} />
      }
      renderIndicator={renderIndicator}
    >
      {children}
    </Carousel>
  );
};

export default VodBannerCustomCarousel;
