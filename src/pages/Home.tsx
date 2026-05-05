import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PhysiotherapyInfo from "@/components/PhysiotherapyInfo";
import WhyChooseUs from "@/components/WhyChooseUs"; 
import ServicesSection from "@/components/ServicesSection";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";  
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <PhysiotherapyInfo />
      <WhyChooseUs />
      <ServicesSection />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
};

export default Home;