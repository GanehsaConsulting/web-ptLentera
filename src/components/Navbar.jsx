'use client'
import Link from "next/link"
import { NAVBARLINK } from "@/app/Database"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
    const path = usePathname()
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);
    return (
        <>
            <div className="flex justify-center">
                <div
                    className=
                    {` navbar bg-base-100 fixed bg-opacity-30 z-[100] backdrop-blur-xl m-2 !w-[96%] rounded-2xl px-5 
            ${isScrolled ? "bg-[#ffffffad] blurry !text-gray-800 duration-300 shadow-mainShadow" : "!bg-transparent text-white"}
            `}
                >
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {NAVBARLINK.map((n, id) => (
                                    <li key={id}>
                                        <Link
                                            className="!text-gray-800"
                                            href={n.href}
                                        >
                                            {n.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a className="text-xl flex gap-3 items-center font-bold">
                            <Image
                                width={50}
                                height={50}
                                src={'/LBW.png'}
                                alt="LOGO-LBW" />
                            <h1 className="rounded-none lg:text-xl text-base truncate">
                                PT Lentera Berkat Wisesa
                            </h1>
                        </a>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        {NAVBARLINK.map((n, id) => (
                            <ul key={id} tabIndex={0} className="flex text-sm gap-2 font-medium px-1">
                                <li>
                                    <Link
                                        className={`${path === n.href ? 'bg-red-200 text-gray-800' : ''} px-2 py-1 hover:bg-red-200 rounded-full duration-300 ease-in-out hover:text-gray-800`}
                                        href={n.href}
                                    >
                                        {n.label}
                                    </Link>
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className="navbar-end">
                        <Link
                            href={'#find-us'}
                            className={`
                        ${isScrolled ? "bg-white bg-opacity-30 shadow-mainShadow" : ""}
                        px-3 py-1 rounded-full font-bold hover:bg-opacity-100 duration-300 ease-in-out
                        `}
                        >
                            Find Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}