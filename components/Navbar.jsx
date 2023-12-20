"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "../assets/Logo.png";
import dashboard from "../assets/dashboard.png";
import icon from "../assets/Vector.png";

const Navbar = ({ onNavItemClick, render }) => {
  const handleItemClick = (component) => {
    onNavItemClick(component);
  };

  return (
    <div className=" text-white p-6 md:flex w-56 items-center h-screen flex-col gap-1 nav-gradient-custom justify-between rounded-2xl">
      <div className="flex flex-col gap-6 ">
        <div>
          <Image src={logo} width="90" height="auto" alt="logo image" />
        </div>
        <div>
          <ul>
            <li className="flex p-1 bg-gray-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border  text-dash-font flex-col gap-8 w-full">
              <Link
                href=""
                onClick={() => handleItemClick("dashboard")}
                className={`flex gap-1 ${
                  render === "dashboard" ? "text-white" : "text-gray-300"
                }`}
              >
                <Image
                  src={dashboard}
                  height="auto"
                  width="13"
                  alt="Dashboard Icon"
				
                />
                Dashboard
              </Link>
              {/* <Link
								href=''
								onClick={() =>
									handleItemClick("pointsgrabber")
								}
								className={`flex gap-1 ${
									render === "pointsgrabber"
										? "text-white"
										: "text-gray-300"
								}`}
							>
								<Image
									src={icon}
									height='auto'
									width='13'
									alt='Icon'
								/>
								Points Grabber
							</Link> */}
              {/* <Link
								href=''
								onClick={() =>
									handleItemClick("dailydairy")
								}
								className={`flex gap-1 ${
									render === "dailydairy"
										? "text-white"
										: "text-gray-300"
								}`}
							>
								<Image
									src={icon}
									height='auto'
									width='13'
									alt='Icon'
								/>
								Daily Dairy
							</Link> */}
              {/* <Link
								href=''
								onClick={() =>
									handleItemClick("marketplace")
								}
								className={`flex gap-1 ${
									render === "marketplace"
										? "text-white"
										: "text-gray-300"
								}`}
							>
								<Image
									src={icon}
									height='auto'
									width='13'
									alt='Icon'
								/>
								Points Marketplace
							</Link> */}
            </li>
          </ul>
        </div>
      </div>
      <div>
	Contact Us: +91875046798 , kidzelp@gmail.com
	  </div>
    </div>
  );
};

export default Navbar;
