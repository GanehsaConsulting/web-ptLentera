import { DataWhyUs } from "@/app/Database"
import { Headtag } from "./HeadTag"
import Image from "next/image"

export const WhyUs = () => {
    const data = DataWhyUs
    return (
        <>
            <div id="why-us" />
            <div className="min-h-screen flex flex-col items-center justify-center space-y-5">
                <Headtag tag={data.label} />
                <div className="flex flex-col md:grid md:grid-cols-2 gap-5 relative">
                    {data.points.map((el, idx) => (
                        <div className="grow relative flex flex-col gap-5 group">
                            <Image
                                width={500}
                                height={500}
                                className="h-[30lvh] object-cover rounded-box w-full"
                                src={el.img}
                                alt={el.label}
                            />
                            <span className="w-full absolute backdrop-blur-lg opacity-0 group-hover:opacity-100 duration-300 ease-in-out h-[100%] top-0 rounded-box"></span>
                            <span className="w-full from-[#0000007a] to-[#ffffff00] bg-gradient-to-t absolute h-[80%] bottom-0 rounded-box"></span>
                            <div className="absolute bottom-0 p-5 text-white">
                                <h1 className="font-medium text-xl uppercase tracking-wider text-white drop-shadow-lg text">
                                    {el.label}
                                </h1>
                                <h2>
                                    {el.desc}
                                </h2>
                            </div>
                        </div>
                    ))}
                    <span className="w-[80lvh] h-[80lvh] blur-[90px] -z-20 bg-amber-100 rounded-full absolute bottom-3 right-0"></span>
                </div>
            </div>
        </>
    )
}