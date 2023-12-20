"use client";
import { Fragment, useState } from "react";
import { isTeacher } from "@/lib/isTeacher";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import Navbar from "@/components/Navbar";

export default function GuardianPage() {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  if (!isTeacher(user.id)) {
    router.push("/");
  }

  const report = [
    {
      preText: "Introverted",
      value: 64,
      postText: "Extroverted",
    },
    {
      preText: "Intuitive",
      value: 57,
      postText: "Observant",
    },
    {
      preText: "Thinking",
      value: 50,
      postText: "Feeling"
    },

  ];

  const values = report.map((value, i) => {
    return (

      <div className="flex gap-4 items-center" key={i}>
        <span>{value.preText}</span>


        <div className="w-1/2 relative">
          <div className="text-center text-blue-500 text-lg">{`${value.value}%`}</div>
          <div className="bg-gray-300 h-2 rounded overflow-hidden relative">
            <div className="bg-blue-500 h-full transition-width" style={{ width: `${value.value}%` }}></div>
          </div>
        </div>

        <span>{value.postText}</span>
      </div>

    );
  });

  return (
    <Fragment>
      <div className="flex mt-2 gap-5">
        <Navbar />

        <div className="flex  bg-white w-full h-96 gap-5 p-10 rounded-xl flex-col justify-center border-solid">
          <div>Final Report and Statistics</div>
          <ValueMapper report={report} />
        </div>
      </div>
    </Fragment>
  );
}


const ValueMapper = ({ report }) => {
  return (
    <div className="flex flex-col gap-3 justify-center">
      {report.map((value, i) => (
        <div className="flex gap-4 items-center " key={i}>
          <span className='w-[10%]'>{value.preText}</span>
          <span className='w-[10%] text-center text-blue-500 text-lg'>{value.value}</span>
          <div className="w-1/2 relative">
            {/* <div className="text-center text-blue-500 text-lg">{`${value.value}%`}</div> */}
            <div className="bg-gray-300 h-2 rounded overflow-hidden relative">
              <div className="bg-blue-500 h-full transition-width" style={{ width: `${value.value}%` }}></div>
            </div>
          </div>

          <span>{value.postText}</span>
        </div>
      ))}
    </div>
  );
};