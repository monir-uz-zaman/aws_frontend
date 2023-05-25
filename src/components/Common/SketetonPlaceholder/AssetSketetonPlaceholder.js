import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CustomAssetsCarousel from "../CustomAssetsCarousel/CustomAssetsCarousel";
import Header from "../Header/Header";

const skeletonItem = [1, 2, 3, 4, 5, 6, 7, 8];

export const Item = () => {
  return (
    <SkeletonTheme>
      <p>
        <Skeleton
          width={"100%"}
          height={"150px"}
          style={{
            borderRadius: "16px",
          }}
        />
      </p>
      <p>
        <Skeleton width={"50%"} height={"15px"} />
      </p>
      <p>
        <Skeleton width={"100%"} height={"30px"} />
      </p>
    </SkeletonTheme>
  );
};

const AssetSketetonPlaceholder = ({ title }) => {
  return (
    <div>
      <Header title={title} />
      <CustomAssetsCarousel>
        {skeletonItem.map((el) => (
          <Item item={el} key={el} />
        ))}
      </CustomAssetsCarousel>
    </div>
  );
};

export default AssetSketetonPlaceholder;
