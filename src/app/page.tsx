import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { Booking } from "@/components/Booking";
import { Facilities } from "@/components/Facilities";
import { Emergency } from "@/components/Emergency";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Membership } from "@/components/Membership";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <AnimateOnScroll delay={100}>
          <Services />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <Booking />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <Facilities />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Emergency />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <WhyChooseUs />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <Testimonials />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Membership />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <Location />
        </AnimateOnScroll>
      </main>
      <Footer />
    </>
  );
}
