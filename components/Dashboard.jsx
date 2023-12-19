import React from "react";
import Image from "next/image";
import cap from "../assets/Scholarcap.webp";
import student from "../assets/student.webp";

import { useUser } from "@clerk/nextjs";
import { capitalize } from "@/lib/util";
import Link from "next/link";

const Dashboard = () => {
	const { isLoaded, isSignedIn, user } = useUser();

	if (!isLoaded || !isSignedIn) {
		return null;
	}

	return (
		<>
			<div className='flex mt-6 justify-between dashboard-gradient rounded-xl p-5 text-white'>
				<div className='flex flex-col'>
					<p className=''> December 14,2023</p>
					<p>
						Welcome back, {capitalize(user.username)} !{" "}
					</p>
					<p>Always stay updated in your student portal</p>
				</div>
				<div className='flex '>
					<Image src={cap} width={150} alt='img' />
					<Image src={student} width={130} alt='img' />
				</div>
			</div>

			<div className='flex mt-20 justify-center dashboard-gradient bg-opacity-10 rounded-xl p-10 py-20 text-white'>
				<div className='flex flex-col bg-blue-800 px-4 py-2 rounded-lg cursor-pointer'>
					<Link href='/play-quiz-game'>
						<p className='uppercase font-semibold text-[20px]'>
							Click to play
						</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
