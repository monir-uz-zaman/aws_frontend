import React from "react";
import Carousel from "react-multi-carousel";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrow";

export const slickSettings = {
  infinite: true,
  partialVisible: true,
  responsive: {
    desktop: {
      breakpoint: {
        max: 4000,
        min: 1441,
      },
      items: 4,
      partialVisibilityGutter: 0,
      slidesToSlide: 1,
    },
    laptop: {
      breakpoint: {
        max: 1440,
        min: 769,
      },
      items: 4,
      partialVisibilityGutter: 0,
      slidesToSlide: 1,
    },

    tablet: {
      breakpoint: {
        max: 768,
        min: 550,
      },
      items: 2,
      partialVisibilityGutter: 0,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: {
        max: 549,
        min: 0,
      },
      items: 1,
      // show gutter only on mobile device
      partialVisibilityGutter: 40,
      slidesToSlide: 1,
    },
  },
};

const CustomAssetsCarousel = ({ children }) => {
  return (
    // MIN HEIGHT IS WHEN THIS COMPONENT HAS NOT RENDERED PROPERLY(IMAGE) AND CAUSING THE UI TO SHIFT
    <div style={{ minHeight: "350px" }}>
      <Carousel
        {...slickSettings}
        itemClass="image-item"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        // hide arrow on mobile device
        removeArrowOnDeviceType={["mobile"]}
        // swipeable={true}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CustomAssetsCarousel;
