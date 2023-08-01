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
  const properties = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      name: "Riverside Retreat in Sydney",
      price: 25000,
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1477&q=80	",
      name: "New York Cozy Cottage",
      price: 120000,
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80	 ",
      name: "Luxury Penthouse in Dubai Marina",
      price: 450000,
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80 ",
      name: "Premium Home in Berlin",
      price: 357000,
    },
  ];
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta
          name="description"
          content="Find your dream home with our professional real estate services. We offer a wide range of properties, from cozy apartments to luxurious estates, to suit your needs and budget. Explore our listings today and let us guide you on your journey to finding the perfect place to call home."
        />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <AreasContainer />
        <FeatureContainer />
        <RentPropertiesCard properties={properties} />
        <RentPropertiesContainer />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
