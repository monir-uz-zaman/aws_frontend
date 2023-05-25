import HomeBanners from "@/components/Banners/HomeBanners/HomeBanners";

export default function Home() {
  return (
    <>
      <HomeBanners
        assets={[
          {
            title: "About Us",
            description:
              "FOODIN is Your trusted food supply partner. We source the finest ingredients, offer a wide variety of products, and provide exceptional customer service. Experience convenience, reliability, and quality with us.",
          },
        ]}
      />
    </>
  );
}
