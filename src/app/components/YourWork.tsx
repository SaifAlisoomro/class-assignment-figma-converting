import React from "react";
import Button from "./Button";

function YourWork() {
  return (
    <div className="w-fixed-[1921px] h-[574px] bg-[#043873] top-[2513px] pt-[140px] pb-[140px] pr-[220px] pl-[220px] text-center">
      <div className="w-[1481px] h-[294px] gap-[60px] text-white">
        <div className="w-[1064px] h-[171px] gap-[24px]">
        <h1 className="text-[70px] font-bold py-5">Your work, everywhere you are</h1>
        <p className="text-[1rem] text-center py-5">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
        <Button btnText="Try Tasky" bgColor="bg-[#4F9CF9]" />
        </div>
      </div>
    </div>
  );
}

export default YourWork;
