import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-fix-[1920px] h-[829px] bg-[#043873] top-[92px] left-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px]">
    <div className="flex items-center">
    <div className="w-[656px] h-[361px] gap-[60px] text-white">
        <h1 className="font-bold text-6xl gap-[24px]">Get More Done with whitepace</h1>
        <p className="text-base font-normal py-10">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>

        <Button btnText="try whitepace fee" bgColor="bg-[#4F9CF9]" className="py-5"/>
      </div>
      <div className="w-[824px] h-[400px] gap-4 bg-[#C4DEFD] text-center">

      </div>
    </div>
    </div>
  );
};

export default Hero;
