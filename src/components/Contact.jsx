import { DataContact } from "@/app/Database"
import { Headtag } from "./HeadTag"
import { FaQuoteRight } from "react-icons/fa6";
import { MdMail, MdPhone, MdWhatsapp } from "react-icons/md";
import Link from "next/link";

export const Contact = () => {
    const data = DataContact
    return (
        <>
            <div id="find-us" />
            <div className="min-h-screen flex flex-col items-center justify-center space-y-5">
                <Headtag tag={data.label} />
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="overflow-hidden rounded-box border border-mainBlue md:w-[50%]">
                        <iframe
                            className="w-full h-[50lvh]"
                            src={data.mapsLink}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="md:w-[50%]">
                        <div className="flex flex-wrap gap-5">
                            <div className="flex flex-col gap-1 h-fit grow bg-gray-100 w-fit p-5 rounded-box">
                                <div className="flex gap-2 items-center">
                                    <FaQuoteRight className="text-xl" />
                                </div>
                                <p>
                                    {data.desc}
                                </p>
                            </div>

                            <Link
                                href={data.waLink}
                                className="flex flex-col gap-5 h-fit grow bg-gray-100 w-fit p-5 rounded-box">
                                <div className="flex gap-2 items-center">
                                    <MdPhone className="text-xl" />
                                    Phone
                                </div>
                                <p>
                                    {data.phone}
                                </p>
                            </Link>

                            <Link
                                href={data.mailLink}
                                className="flex flex-col gap-5 h-fit grow bg-gray-100 w-fit p-5 rounded-box">
                                <div className="flex gap-2 items-center">
                                    <MdMail className="text-xl" />
                                    Mail
                                </div>
                                <p>
                                    {data.email}
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}