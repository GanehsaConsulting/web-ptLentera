import { DataProducts } from "@/app/Database"
import { Headtag } from "./HeadTag"
import Image from "next/image"

export const Products = () => {
    const data = DataProducts
    return (
        <>
            <div id="our-products" />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-center uppercase text-3xl tracking-widest font-semibold text-violet-500 drop-shadow-sm">
                    {data.label}
                </h1>
                <h1 className="text-center text-lg capitalize tracking-wide">
                    {data.desc}
                </h1>

                <div className="mt-5 carousel rounded-box w-full">
                    {data.points.map((el, idx) => (
                        <>
                            <div key={idx} id={el.id} className="carousel-item !w-full shadow-mainShadow rounded-box">
                                <div className="flex md:flex-col w-full flex-col">
                                    <div className="relative group">
                                        <Image
                                            className="!w-full h-[40lvh] rounded-t-box object-cover"
                                            width={500}
                                            height={500}
                                            src={el.img}
                                            alt={el.name} />
                                        <div className="absolute left-5 bottom-5 z-10">
                                            <h2 className="font-semibold text-white text-2xl uppercase tracking-widest">
                                                {el.name}
                                            </h2>
                                        </div>
                                        <span className="w-full from-[#0000007a] to-[#ffffff00] group-hover:opacity-0 bg-gradient-to-t absolute h-[80%] bottom-0 rounded-t-box  object-cover"></span>
                                    </div>
                                    <div className=" flex  h-full items-end leading-relaxed rounded-b-box bg-gray-900">
                                        <h3 className="p-5 text-white">
                                            {el.exp}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs rounded-full bg-slate-700 text-white">1</a>
                    <a href="#item2" className="btn btn-xs rounded-full bg-slate-700 text-white">2</a>
                    <a href="#item3" className="btn btn-xs rounded-full bg-slate-700 text-white">3</a>
                    <a href="#item4" className="btn btn-xs rounded-full bg-slate-700 text-white">4</a>
                </div>
            </div>
        </>
    )
}