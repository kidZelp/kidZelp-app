import React from 'react'
import Image from 'next/image'
import cap from "../assets/Scholarcap.webp"
import student from "../assets/student.webp"

const Dashboard = () => {
  return (
    <>
      <div className="flex mt-6 justify-between dashboard-gradient rounded-xl p-5 text-white">
        <div className="flex flex-col">
          <p className="text-sm"> December 14,2023</p>
          <p >Welcome back, Saksham! </p>
          <p>Always stay updated in your student portal</p>
        </div>
        <div className="flex ">
          <Image src={cap} width={150} alt="img" />
          <Image src={student} width={130} alt="img" />
        </div>
      </div>
    </>
  )
}

export default Dashboard
