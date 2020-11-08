import React from "react";
import Linkedin from "../../public/images/svg/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div
        class="bg-gray-100 z-1"
        style={{
          width: "100%",
          display: "inline-flex",
          flexFlow: "column nowrap",
        }}
      >
        <div
          class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      flex-row max-w-6xl text-center grid grid-cols-10 xl:gap-10 lg:gap-10 md:gap-10 sm:gap-5"
        >
          <div class="mt-2 text-center col-start-2 col-span-8">
            © Erfan Habibi Panah Fard. All Rights Reserved.
          </div>
          <div class="mt-2  flex col-end-11 col-span-1">
            <a
              rel="preconnect"
              href="https://www.linkedin.com/in/erfanhabibipanah"
              target="_blank"
              class="w-6 mx-1"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
