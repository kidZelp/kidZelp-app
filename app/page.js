import Image from "next/image";
import Link from "next/link";
import UserMenu from "@/components/UserMenu";
import logo from "../assets/Logo.png";

export default function Home() {
  return (
    <main className="text-black font-poppins bg-gradient-custom flex justify-between flex-row p-4 h-screen">
      <div className="text-white p-14 flex w-229 h-785 flex-col gap-1 nav-gradient-custom justify-between rounded-2xl">
        <div className="flex flex-col gap-6 ">
        <div className="content-center">
          <Image src={logo} width="90" height="90" alt="logo image" />
        </div>
        <div>
          <ul>
            <li className="flex text-dash-font flex-col gap-8 w-full">
              <Link href="">Dashboard</Link>
              <Link href="/pointsgrabber">Points Grabber</Link>
              <Link href="dailydairy">Daily Dairy</Link>
              <Link href="marketplace">Points Marketplace</Link>
             
            </li>
          </ul>
          </div>
        </div>
        <div> <p>Log Out</p></div>
      </div>
      <div className="p-8 w-4/5">
        <UserMenu />
      </div>
    </main>
  );
}
