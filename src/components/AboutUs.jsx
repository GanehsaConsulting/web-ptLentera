import { DataAboutUs } from "@/app/Database"
import { Headtag } from "./HeadTag"

export const AboutUs = () => {
    return (
        <>
            <div id="about-us" />
            <section className="min-h-screen flex flex-col items-center justify-center ml-5 mr-5 md:ml-24 md:mr-0 relative">
                {DataAboutUs.map((el, id) => (
                    <>
                        <div className="flex md:flex-row flex-col gap-10 h-full justify-center items-center">
                            <div className="space-y-5 text-justify h-full">
                                <Headtag key={id} tag={el.tag} />
                                {el.data}
                            </div>
                            <span className="w-96 h-96 blur-[100px] -z-20 bg-green-100 rounded-full absolute left-0 bottom-3"></span>
                            <img
                                className="md: md:w-[250%] md:h-[40lvh] object-cover rounded-lg md:rounded-l-full"
                                src={el.img}
                                alt={el.tag} />
                        </div>
                    </>
                ))}
            </section>
        </>
    )
}