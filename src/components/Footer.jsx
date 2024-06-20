import { DataContact, NAVBARLINK } from "@/app/Database"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <Image
                        width={100}
                        height={100}
                        src="/LBW.png"
                        alt="" />
                    <p>PT Lentera Berkat Wisesa.<br />Your Trusted Partner for Pipeline Needs</p>
                </aside>
                <div>
                    <nav>
                        <h6 className="footer-title">Address</h6>
                        <a
                            className="link link-hover"
                            href={DataContact.mapsLink}
                        >
                            {DataContact.address}
                        </a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Mail</h6>
                        <a
                            className="link link-hover"
                            href={DataContact.mailLink}
                        >
                            {DataContact.email}
                        </a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Phone</h6>
                        <a
                            className="link link-hover"
                            href={DataContact.waLink}
                        >
                            {DataContact.phone}
                        </a>
                    </nav>
                </div>
                <nav>
                    <h6 className="footer-title">Navigation</h6>
                    {NAVBARLINK.map((el, idx) => (
                        <>
                            <Link
                                key={idx}
                                href={el.href}
                                className="link link-hover"
                            >
                                {el.label}
                            </Link>
                        </>
                    ))}
                </nav>
            </footer>
            <footer className="footer flex justify-center items-center p-4 bg-gray-300">
                    <p className="text-center">Copyright © 2024 - All right reserved</p>
            </footer>
        </>
    )
}