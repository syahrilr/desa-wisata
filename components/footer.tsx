import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white bottom-0 w-full">
        <Separator className="mt-10"/>
      <div className="mx-auto">
        <p className="text-center text-xs text-black py-6">
          &copy; 2024 Digitalent. All rigths reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
