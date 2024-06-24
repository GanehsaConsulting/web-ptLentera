'use client'
import { DataProducts } from "@/app/Database"
import Image from "next/image"
import { useState } from "react";

export const Products = () => {
    const [activeModal, setActiveModal] = useState(null);
    const data = DataProducts
    const dataMain = DataProducts.points[0]
    const dataChild = DataProducts.points[0].child

    return (
        <>
            <div id="our-products" />
            <div className="min-h-screen flex flex-col items-center justify-center gap-5">
                <h1 className="text-center uppercase text-3xl tracking-widest font-semibold text-violet-500 drop-shadow-sm">
                    {data.label}
                </h1>
                <h1 className="text-center text-lg capitalize tracking-wide -mt-3">
                    {data.desc}
                </h1>

                <div className="flex md:flex-row flex-col gap-3">
                    <div className="md:w-[50%] space-y-3 grow">
                        <div className="relative group grow h-full">
                            <Image
                                width={500}
                                height={500}
                                className="w-full h-full grow object-cover rounded-box shadow-mainShadow"
                                src={dataMain.img}
                                alt="" />
                            <div className="absolute !z-20 inset-0 h-full self-end flex flex-col justify-end gap-2">
                                <h2 className="text-white uppercase font-semibold tracking-wider text-2xl pl-5">
                                    {dataMain.name}
                                </h2>
                                <div className="p-5 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-b-box">
                                    <p className="text-white">
                                        {dataMain.exp}
                                    </p>
                                </div>
                            </div>
                            <span className="w-full from-[#0000007a] to-[#ffffff00] group-hover:opacity-0 bg-gradient-to-t absolute h-[80%] bottom-0 rounded-box  object-cover"></span>
                        </div>
                    </div>
                    <p className="block md:hidden text-center font-semibold">
                        Below Our Trusted Valve Brands
                    </p>
                    <div className="md:w-[50%]">
                        <div className="md:grid md:grid-cols-3 gap-3 carousel md:justify-between">
                            {dataChild.map((el) => (
                                <div key={el.id} className="carousel-item flex flex-col justify-center items-center gap-1">
                                    <button className="border px-5 rounded-box grow md:min-h-[25lvh] w-full hover:scale-95 ease-in-out duration-300" onClick={() => setActiveModal(el.id)}>
                                        <Image
                                            width={500}
                                            height={500}
                                            className="rounded-box w-[40lvw] md:w-full object-fill"
                                            src={el.imgUrl}
                                            alt={el.name}
                                        />
                                    </button>
                                    <h3 className="font-medium">{el.name}</h3>

                                    {activeModal === el.id && (
                                        <dialog open id={`modal-${el.id}`} className="modal bg-black bg-opacity-30 backdrop-blur-md modal-bottom sm:modal-middle">
                                            <div className="modal-box flex flex-col justify-center items-center">
                                                <div className="carousel gap-5 items-center">
                                                    {el.imgItems.map((el, idx) => (
                                                        <img
                                                            key={idx}
                                                            className="carousel-item md:w-[20lvw] h-fit"
                                                            src={el}
                                                            alt={el.name} />
                                                    ))}
                                                </div>
                                                <h3 className="font-bold text-lg">{el.name}</h3>
                                                <p className="py-4 text-center">{el.descriptions}</p>
                                                <div className="modal-action">
                                                    <button className="bg-red-300 bg-opacity-30 hover:bg-opacity-100 shadow-mainShadow px-3 py-1 rounded-full font-bold duration-300 ease-in-out" onClick={() => setActiveModal(null)}>Close</button>
                                                </div>
                                            </div>
                                        </dialog>
                                    )}
                                </div>
                            ))}
                        </div>
                        <span className="text-xs flex justify-end self-end animate-pulse animate__animated animate__slower text-opacity-50 text-gray-700">
                            *click the images for more details
                        </span>
                    </div>
                </div>
                <div className="mt-5 carousel rounded-box w-full">
                    {data.points.map((el, idx) => (
                        <>
                            {el.id !== 'item1' ?

                                (
                                    <div key={idx} id={el.id} className="carousel-item !w-full shadow-mainShadow rounded-box">
                                        <div className="flex md:flex-col w-full flex-col">
                                            <div className="relative group">
                                                <Image
                                                    className={`!w-full h-[40lvh] rounded-t-box ${el.id === 'item4' ? 'object-contain' : 'object-cover'}`}
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
                                ) :
                                null}
                        </>
                    ))}
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item2" className="btn btn-xs rounded-full bg-slate-700 text-white">1</a>
                    <a href="#item3" className="btn btn-xs rounded-full bg-slate-700 text-white">2</a>
                    <a href="#item4" className="btn btn-xs rounded-full bg-slate-700 text-white">3</a>
                </div>
            </div>
        </>
    )
}