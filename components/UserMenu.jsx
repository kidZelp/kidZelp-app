"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";

import { useUser } from "@clerk/nextjs";

const UserMenu = () => {
	const { isLoaded, isSignedIn, user } = useUser();

	if (!isLoaded || !isSignedIn) {
		return null;
	}

	return (
		<div className='flex items-center gap-2'>
			<UserButton afterSignOutUrl='/' />
			<p className='text-black'>{user.username}</p>
		</div>
	);
};

export default UserMenu;
