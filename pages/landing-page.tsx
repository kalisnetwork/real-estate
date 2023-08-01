import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreasContainer from "../components/areas-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesCard from "../components/rent-properties-card";
import RentPropertiesContainer from "../components/rent-properties-container";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta
          name="description"
          content="Find your dream home with our professional real estate services. We offer a wide range of properties, from cozy apartments to luxurious estates, to suit your needs and budget. Explore our listings today and let us guide you on your journey to finding the perfect place to call home."
        />
      </Head>
      <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <AreasContainer />
        <FeatureContainer />
        <RentPropertiesCard />
        <RentPropertiesContainer />
        <Contact />
        <Footer
          imageIds="/houseline2.svg"
          smallImageIds="/social-media-logo5.svg"
          mediumImageIds="/social-media-logo6.svg"
          extraSmallImageIds="/social-media-logo7.svg"
          largeImageIds="/social-media-logo8.svg"
          extraLargeImageIds="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;
