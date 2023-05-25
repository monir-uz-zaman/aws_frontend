import HomeBannerCustomCarousel from "@/components/Common/CustomAssetsCarousel/HomeBannerCustomCarousel";
import useWindowDimensions from "@/hooks/WindowDimension";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import classes from "./HomeBanners.module.css";

const HomeBanners = ({ assets }) => {
  const { width } = useWindowDimensions();
  const router = useRouter();

  return (
    <div className={classes.container}>
      <HomeBannerCustomCarousel>
        {assets.slice(0, 1).map((el, i) => {
          let description = el?.description;

          return (
            <div key={i.toString()}>
              <div className={classes.radialContainer}></div>

              <div className={classes.heroImageContainer1}>
                <Image
                  src={
                    // "https://imageproxy.wolt.com/venue/624c359bda2bf042c50801ad/29238428-b4dc-11ec-b828-8e85b443cea8_better_japanese_food.jpg?w=960"
                    "https://imageproxy.wolt.com/wolt-frontpage-images/content_editor/banners/images/733df4a2-f3e3-11ed-a7b8-0eba32d48d66_bab27792_11a8_4167_a762_4e4a83cb91ea.jpg?w=1600"
                  }
                  key={el?.id}
                  width="1920"
                  height="420" // 1:4 RATIO FOR PLACEHODLER
                  className={classes.heroImage}
                  alt={"home-banner"}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base65,iVBORw0KGgoAAAANSUhEUgAAAFIAAABWCAYAAABcvcGNAAAMQGlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBoAQSkhN4E6QSQEkILIL0INkISIJQQA0HFji4quHYRARu6KqLYAbEjdhbBhn2xoKKsiwW78iYFdN1XvjffN3f"
                />
                <div className={classes.detailsContainer}>
                  {/* // text */}
                  <div className={classes.textContainer}>
                    {/* name */}
                    <div className={`${classes.title} font-600`}>
                      {el?.title || el?.name}
                    </div>
                    {/* decription */}
                    <div
                      className={`${classes.description} font-500`}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </HomeBannerCustomCarousel>
    </div>
  );
};

export default HomeBanners;
