import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { isTeacher } from "@/lib/isTeacher";

const GuardianLayout = ({ children }) => {
    const { userId } = auth();

    if (!isTeacher(userId)) {
        return redirect("/");
    }

    return <>{children}</>;
};

export default GuardianLayout;