import React from "react";
import Image from "next/image";
import cap from "../assets/Scholarcap.webp";
import student from "../assets/student.webp";
import { useUser } from "@clerk/nextjs";
import { capitalize } from "@/lib/util";
import Link from "next/link";

import Model from "@/assets/MODEL.svg";

const Dashboard = () => {
	const { isLoaded, isSignedIn, user } = useUser();

	if (!isLoaded || !isSignedIn) {
		return null;
	}

	return (
		<>
			<div className='flex mt-6 justify-between dashboard-gradient rounded-xl p-5 text-white hover:shadow-lg'>
				<div className='flex flex-col gap-4'>
					<div className='flex items-center gap-1'>
						<p>🗓️</p>
						<p>
							{new Date().toLocaleDateString("en-US")}
						</p>
					</div>
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

			<div
				className='flex mt-20 justify-between items-end play-gradient bg-opacity-10 rounded-xl p-10 py-20 text-white border-4 border-solid border-purple-600 shadow-lg hover:shadow-xl
      '
			>
				<div className='flex flex-col gap-14 w-2/3'>
					<p className='text-blue-800'>
						Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Obcaecati inventore nisi
						necessitatibus iusto delectus repudiandae
						consectetur laudantium adipisci ea, nemo,
						sapiente accusamus corporis id asperiores quia
						nostrum beatae possimus vitae? Itaque quam
						quos provident odio?
					</p>
					<Link href='/play-quiz-game'>
						<div className='flex flex-col w-fit bg-blue-800 px-4 py-2 rounded-lg cursor-pointer items-end hover:bg-blue-900 hover:shadow-lg'>
							<p className='uppercase font-semibold text-[20px]'>
								Click to play
							</p>
						</div>
					</Link>
				</div>
				<Image src={Model.src} width={200} height={200} />
			</div>
		</>
	);
};

export default Dashboard;
