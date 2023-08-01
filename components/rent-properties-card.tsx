import React from "react";
import PropertyCard from "./property-card";
import Link from "next/link";

type PropertyCardType = {
  imgUrl: string;
  name: string;
  price: number;
};

const RentPropertiesCard: React.FC<{ properties: PropertyCardType[] }> = ({
  properties,
}) => {
  return (
    <form className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
            Properties
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center gap-[8px]">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              imgUrl={property.imgUrl}
              name={property.name}
              price={property.price}
            />
          ))}
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
        <Link href="/properties">
          <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
            Load more listing
          </div>
        </Link>
      </button>
    </form>
  );
};

export default RentPropertiesCard;
