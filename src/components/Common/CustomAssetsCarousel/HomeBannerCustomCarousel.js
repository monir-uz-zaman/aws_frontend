import React from "react";
import Carousel from "react-multi-carousel";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrow";

const slickSettings = {
  dots: false,
  infinite: false,
  lazyLoad: false,
  // partialVisible: false,
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
  ssr: true,
};

const HomeBannerCustomCarousel = ({ children }) => {
  return (
    <Carousel
      {...slickSettings}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {children}
    </Carousel>
  );
};

export default HomeBannerCustomCarousel;
