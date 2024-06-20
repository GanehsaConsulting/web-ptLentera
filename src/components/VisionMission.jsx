'use client'
import { DataVisionMission } from "@/app/Database";
import Image from "next/image";
import { useState } from "react";

export const VisionMision = () => {
    const data = DataVisionMission
    const [toggle, setToggle] = useState(1);

    function updateToggle(id) {
        setToggle(id);
    }
    return (
        <>
            <div id="vision-mission" />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="flex w-full items-center flex-col justify-center relative">
                    <img
                        className="rounded-xl md:h-[50lvh] w-full object-cover"
                        src="https://images.unsplash.com/photo-1597833378191-d7e7f56ef794?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                    <div className={`absolute inset-5 flex justify-center`}>
                        <div className="bg-white flex justify-center rounded-full w-[200px] bg-opacity-20 backdrop-blur-md h-fit relative">
                            <button onClick={() => updateToggle(1)} className={`${toggle === 2 ? 'text-white' : 'hover:text-gray-500'} hover:text-gray-200 w-[100px] h-[50px] font-semibold rounded-box flex items-center justify-center gap-2 z-10 duration-500 ease-in-out`}>
                                Vision
                            </button>
                            <button onClick={() => updateToggle(2)} className={`${toggle === 1 ? 'text-white' : 'hover:text-gray-500'} hover:text-gray-200 w-[100px] h-[50px] font-semibold rounded-box flex items-center justify-center gap-2 z-10 duration-500 ease-in-out`}>
                                Mission
                            </button>
                            <span className={`${toggle === 1 ? 'translate-x-[-1%]' : 'translate-x-[105%]'} duration-500 ease-in-out absolute inset-0 bg-white bg-opacity-50 backdrop-blur-lg w-[90px] rounded-full mx-2 my-2`}></span>
                        </div>
                    </div>
                    <div className={`absolute top-20 flex justify-center`}>
                        <div className={`px-3 h-52 duration-500 ease-in-out rounded-xl`}>
                            {toggle === 1 ? (
                                <p className={` bg-white rounded-box p-5 bg-opacity-80 backdrop-blur-md`}>
                                    {data.vision}
                                </p>
                            ) : (
                                <div className={` bg-white rounded-box p-5 bg-opacity-80 backdrop-blur-md`}>
                                    {data.mission}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}