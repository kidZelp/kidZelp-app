import React, { Fragment, useState } from "react";
import Image from "next/image";
import cap from "../assets/Scholarcap.webp";
import student from "../assets/student.webp";
import { useUser } from "@clerk/nextjs";
import { capitalize } from "@/lib/util";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import Model from "@/assets/MODEL.svg";

const Dashboard = () => {
	const { isLoaded, isSignedIn, user } = useUser();
	let [isOpen, setIsOpen] = useState(false);

	if (!isLoaded || !isSignedIn) {
		return null;
	}

	return (
		<>
			<div className='flex flex-wrap justify-between nav-gradient-custom rounded-xl p-5 text-white hover:shadow-lg'>
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

			<div className='flex mt-20 justify-between  flex-wrap bg-opacity-10 rounded-xl p-5 py-20 text-white border-4  shadow-lg hover:shadow-xl  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 border border-gray-100'>
				<div className='flex flex-col gap-14 w-2/3'>
					<p className='text-blue-800'>
						Let{"'"}s roll on in a video simulation-based
						quiz model, where you get to immerse yourself
						through a realistic video-based scenario,
						where your responses unfold your narrative
						story.
					</p>

					<div
						className='flex dashboard-gradient flex-col w-fit bg-blue-800 px-4 py-2 rounded-lg cursor-pointer items-end'
						onClick={() => setIsOpen(true)}
					>
						<p className='font-semibold text-[18px]'>
							Click to Play
						</p>
					</div>
				</div>
				<Image src={Model.src} width={200} height={200} />
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-10'
					onClose={() => setIsOpen(false)}
				>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black/25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
									<Dialog.Title
										as='h3'
										className='text-lg font-medium leading-6 text-gray-900'
									>
										Payment successful
									</Dialog.Title>

									<div className='mt-2'>
										<p className='text-sm text-gray-500'>
											Your payment has been
											successfully submitted.
											We’ve sent you an email
											with all of the details of
											your order.
										</p>
									</div>

									<div className='mt-4'>
										<button
											type='button'
											className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
											// TODO: Logic for navigating to the video page after login
											onClick={() => {}}
										>
											Got it, thanks!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Dashboard;
