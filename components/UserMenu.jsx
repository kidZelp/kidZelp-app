"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";

import { useUser } from "@clerk/nextjs";
import { capitalize } from "@/lib/util";
import Link from "next/link";

const UserMenu = () => {
	const { isLoaded, isSignedIn, user } = useUser();

	if (!isLoaded || !isSignedIn) {
		return null;
	}

	return (
		<>
			<div className='flex items-center justify-between gap-10 '>
				<Link href='/'>
					<p className=''>KidZelp</p>
				</Link>
				<div className='flex font-bold text-sm items-center gap-6'>
					<p>{/*{user.points} */} 100 points</p>
					<div className='flex items-center gap-2'>
						<UserButton afterSignOutUrl='/' />
						<p>{capitalize(user.username)}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserMenu;
