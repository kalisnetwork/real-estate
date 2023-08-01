import type { NextPage } from "next";
import Link from "next/link";

type HeaderType = {
  hamburger?: boolean;
};

const Header: NextPage<HeaderType> = ({ hamburger }) => {
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link href="/">
          <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">REST.</div>
            <div className="relative text-sm leading-[16px] font-medium">
              Real Estate
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <Link href="/">
              <h3 className="relative leading-[22px]">HOME</h3>
            </Link>
            <Link href="/freatues">
              <h3 className="relative leading-[22px]">FEATURES</h3>
            </Link>
            <Link href="/properties">
              <h3 className="relative leading-[22px] font-semibold">
                PROPERTIES
              </h3>
            </Link>
            <Link href="/gallery">
              <h3 className="relative leading-[22px]">GALLERY</h3>
            </Link>
            <Link href="/contact">
              <h3 className="relative leading-[22px]">CONTACT US</h3>
            </Link>
          </div>
          {!hamburger && (
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
