"use client";
import { isTeacher } from "@/lib/isTeacher";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function GuardianPage() {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  if (isTeacher(user.id)) {
    router.push("/guardian");
  }

  return <div>Page</div>;
}
