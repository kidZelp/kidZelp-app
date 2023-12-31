"use client";
import { Fragment, useState } from "react";

import UserMenu from "@/components/UserMenu";
import Navbar from "@/components/Navbar";

import Dashboard from "@/components/Dashboard";
// import PointsGrabber from "@/components/PointsGrabber";
// import MarketPlace from "@/components/MarketPlace";
// import DailyDairy from "@/components/DailyDairy";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { isTeacher } from "@/lib/isTeacher";

export default function Home() {
  const [render, setRender] = useState("dashboard");

  const handleNavItemClick = (component) => {
    setRender(component);
  };

  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  if (isTeacher(user.id)) {
    router.push("/guardian");
  }

  return (
    <Fragment>
      <div className="flex flex-row gap-5">
        <Navbar onNavItemClick={handleNavItemClick} render={render} />

        {/* *******************right section start ******************** */}

        <div className=" w-4/5 flex flex-col  justify-center">
          <section>
            {render === "dashboard" && <Dashboard />}
            {/* {render === "marketplace" && <MarketPlace />}
    {render === "dailydairy" && <DailyDairy />}
    {render === "pointsgrabber" && <PointsGrabber />} */}
          </section>
        </div>
      </div>

      <TawkMessengerReact
        propertyId="65114be10f2b18434fda6950"
        widgetId="1hb5p0ql5"
      />
    </Fragment>
  );
}
