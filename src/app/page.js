import { AboutUs } from "@/components/AboutUs";
import { AnimateOnce } from "@/components/AnimateOnce";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contact";
import { Products } from "@/components/Products";
import { VisionMision } from "@/components/VisionMission";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <AnimateOnce animation={'animate__fadeInDown'}>
        <Banner />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInBottomRight'}>
        <AboutUs />
      </AnimateOnce>
      <section className="lg:mx-24 mx-5 space-y-20 md:space-y-40">
        <AnimateOnce animation={'fadeInBottomLeft'}>
          <VisionMision />
        </AnimateOnce>
        <AnimateOnce animation={'fadeInBottomRight'}>
          <Products />
          <WhyUs />
        </AnimateOnce>
        <AnimateOnce animation={'fadeInBottomLeft'}>
          <Contact />
        </AnimateOnce>
      </section>
    </>
  );
}
