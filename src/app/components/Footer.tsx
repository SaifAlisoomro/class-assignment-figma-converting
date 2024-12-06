import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-fixed-[1920px] h-[461px] bg-[#043873] top-[3626px] pt-[140px] pb-[140px] pr-[22px] pl-[220px] text-center">
      <div className="w-[1480px] h-[289px] flex gap-[100px]">
        <div className="w-[295px] h-[169px] gap-[15px] items-center">
          <Image src={"/Logo.png"} alt="logo" width={200} height={200} />
          <p className="text-white text-center text-[0.75rem] py-5">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>
        <div className="text-white text-center">
          <h1 className="font-bold py-2">Product</h1>
          <p className="py-2">Overview</p>
          <p className="py-2">Pricing</p>
          <p className="py-2">Costomer Stories</p>
        </div>
        <div className="text-white text-center">
          <h1 className="font-bold">Resources</h1>
          <p className="py-2">Blogs</p>
          <p className="py-2">Guides & tutorials</p>
          <p className="py-2">Help center</p>
        </div>
      </div>
      <div className="w-[1480px] bg-[#2E4E73]"></div>
      <div className="text-white text-center font-sans">
        &copy; 2021 Whitepace LLC.
      </div>
    </div>
  );
}

export default Footer;
