"use client";
import { useState } from "react";

import UserMenu from "@/components/UserMenu";
import Navbar from "@/components/Navbar";

import Dashboard from "@/components/Dashboard";
// import PointsGrabber from "@/components/PointsGrabber";
// import MarketPlace from "@/components/MarketPlace";
// import DailyDairy from "@/components/DailyDairy";

import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function Home() {
  const [render, setRender] = useState("dashboard");

  const handleNavItemClick = (component) => {
    setRender(component);
  };

  return (
    <main className="text-black  bg-gradient-custom font-bold font-poppins  flex justify-between flex-row p-4 h-screen overflow-hidden">
      <Navbar onNavItemClick={handleNavItemClick} render={render} />

      {/* *******************right section start ******************** */}

      <div className="p-8 w-4/5 flex flex-col">
        <UserMenu />

        <section>
          {render === "dashboard" && <Dashboard />}
          {/* {render === "marketplace" && <MarketPlace />}
          {render === "dailydairy" && <DailyDairy />}
          {render === "pointsgrabber" && <PointsGrabber />} */}
        </section>
      </div>

      <TawkMessengerReact
        propertyId="65114be10f2b18434fda6950"
        widgetId="1hb5p0ql5"
      />

    </main>
  );
}
