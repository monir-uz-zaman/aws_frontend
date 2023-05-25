import React from "react";
import Carousel from "react-multi-carousel";

import {
  CustomLeftArrowVodBanner,
  CustomRightArrowVodBanner,
} from "./CustomArrow";
import useWindowDimensions from "@/hooks/WindowDimension";
import classes from "./PromoBannerCustomCarousel.module.css";

const slickSettings = {
  infinite: true,

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
        min: 969,
      },
      items: 1,
      partialVisibilityGutter: 0,
      slidesToSlide: 1,
    },
    laptopMini: {
      breakpoint: {
        max: 968,
        min: 769,
      },
      items: 1,
      partialVisibilityGutter: 100,
      slidesToSlide: 1,
    },

    tablet: {
      breakpoint: {
        max: 768,
        min: 550,
      },
      items: 1,
      partialVisibilityGutter: 100,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: {
        max: 549,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 40,
      slidesToSlide: 1,
    },
  },
};

const PromoBannerCustomCarousel = ({ children }) => {
  const { width } = useWindowDimensions();
  return (
    <Carousel
      {...slickSettings}
      // centermode and partial mode needs to be other way araound. both cannot be true
      centerMode={width > 968 ? true : false}
      // partialVisbile={width > 968 ? false : true}
      itemClass={classes["promo-carousel-item-padding-10-px"]}
      customRightArrow={<CustomRightArrowVodBanner />}
      customLeftArrow={<CustomLeftArrowVodBanner />}
      // hide arrow on mobile device

      removeArrowOnDeviceType={["mobile"]}
    >
      {children}
    </Carousel>
  );
};

export default PromoBannerCustomCarousel;
