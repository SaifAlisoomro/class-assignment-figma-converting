import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="z-30 sticky top-0">
      <div className="w-[1920px] h-[92px] bg-[#043873] flex justify-between items-center pt-[32px] pr-[220px] pb-[16px] pl-[220px] text-white sm:w-full">
        <div>
          <Image src={"/Logo.png"} alt="logo" width={191} height={34} />
        </div>

        <div className="flex justify-around gap-x-5">
          <Link href={"#"}>Products</Link>
          <Link href={"#"}>Solutions</Link>
          <Link href={"#"}>Resources</Link>
          <Link href={"#"}>Pricing</Link>
        </div>
        <div className="flex justify-between gap-x-5">
            <Button btnText="LogIn" bgColor="bg-[#FFE492]"/>
            <Button btnText="try whitepace fee" bgColor="bg-[#4F9CF9]" className="py-5"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
