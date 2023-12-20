import React, { Fragment, useState } from "react";
import Image from "next/image";
import cap from "../assets/Scholarcap.webp";
import student from "../assets/student.webp";
import { useUser } from "@clerk/nextjs";
import { capitalize } from "@/lib/util";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import Model from "@/assets/MODEL.svg";
import { useRouter } from "next/navigation";
import boy from "../assets/boy.svg"
const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  let [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const router = useRouter();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // Clear previous user data from local storage
    localStorage.removeItem("user");

    // Save the new form data to local storage
    localStorage.setItem("user", JSON.stringify(formData));

    // Close the dialog
    setIsOpen(false);

    router.push("/play-quiz-game");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-wrap justify-between nav-gradient-custom rounded-xl p-5 text-white hover:shadow-lg">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <p>🗓️</p>
            <p>{new Date().toLocaleDateString("en-US")}</p>
          </div>
          <p>Welcome back, {capitalize(user.username)} ! </p>
          <p>Always stay updated in your student portal</p>
        </div>
        <div className="flex ">
         
          <Image src={boy} width={130} alt="img" />
        </div>
      </div>

      <div className="flex mt-20 justify-between  flex-wrap bg-opacity-10 rounded-xl p-5 py-20 text-white border-4  shadow-lg hover:shadow-xl  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25 border border-gray-100">
        <div className="flex flex-col gap-14 w-2/3">
          <p className="text-blue-800">
            Let's roll on in a video simulation-based quiz model, where you get
            to immerse yourself through a realistic video-based scenario, where
            your responses unfold your narrative story. <br></br>

            Once you enter in this immersive video-based quiz game, you will be presented with various video-based scenarios and situations. Based upon your understanding of the situation-based games, you will now have to select the most suitable option according to your intuition.
          </p>

          <div
            className="flex dashboard-gradient flex-col w-fit bg-blue-800 px-4 py-2 rounded-lg cursor-pointer items-end"
            onClick={() => setIsOpen(true)}
          >
            <p className="font-semibold text-[18px]">Click to Play</p>
          </div>
        </div>
        <Image src={Model.src} width={200} height={200} />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="mb-5 text-center bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text "
                  >
                    Fill your details
                  </Dialog.Title>

                  <form onSubmit={onSubmit}>
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Name
                      </label>
                      <div>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="age"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Age
                      </label>
                      <div>
                        <input
                          required
                          type="number"
                          id="numericInput"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          min="0"
                          max="100"
                          step="1"
                          inputMode="numeric"
                          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter your age"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="gender"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Gender
                      </label>
                      <div>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="" disabled>
                            Select your gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                      >
                        Let's Play!
                      </button>
                    </div>
                  </form>
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
