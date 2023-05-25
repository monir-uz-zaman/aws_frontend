import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SerieSkeletonPlaceholder = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          margin: "20px 0",
          width: "70%",
        }}
      >
        {[...Array(4).keys()].map((_, i) => (
          <SkeletonTheme key={i.toString()}>
            <Skeleton width={"100%"} height={"30px"} />
          </SkeletonTheme>
        ))}
      </div>

      {[...Array(10).keys()].map((_, i) => (
        <SkeletonTheme key={i.toString()}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: "100%",
              width: "100%",
              gap: "20px",
              margin: "20px 0",
            }}
          >
            <Skeleton
              width={"100%"}
              height={"200px"}
              style={{
                borderRadius: "16px",
                flex: 1,
              }}
            />
            <div>
              {[...Array(4).keys()].map((_, i) => (
                <Skeleton key={i.toString()} width={"95%"} height={"10px"} />
              ))}
            </div>
          </div>
        </SkeletonTheme>
      ))}
    </>
  );
};

export default SerieSkeletonPlaceholder;
