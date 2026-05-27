import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>
          Best Physiotherapist in Hyderabad - Fast Recovery | Book Now
        </title>

        <meta
          name="description"
          content="Struggling with pain or injury? Get expert physiotherapy in Hyderabad with advanced rehabilitation techniques, proven results, and fast recovery. Book appointment now."
        />

        <meta
          name="keywords"
          content="physiotherapist in Hyderabad, physiotherapy in Hyderabad, best physiotherapist Hyderabad, physiotherapy clinic Hyderabad, pain relief physiotherapy Hyderabad, rehabilitation therapy Hyderabad, back pain physiotherapist Hyderabad, sports injury physiotherapy Hyderabad, spine physiotherapy Hyderabad, ortho physiotherapy Hyderabad, manual therapy Hyderabad, physiotherapy near me Hyderabad"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best Physiotherapist in Hyderabad - Fast Recovery | Book Now"
        />

        <meta
          property="og:description"
          content="Get expert physiotherapy and rehabilitation services in Hyderabad with advanced treatment techniques and personalized care."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://charanphysio.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Best Physiotherapist in Hyderabad - Fast Recovery"
        />

        <meta
          name="twitter:description"
          content="Expert physiotherapy and rehabilitation services in Hyderabad."
        />

        <meta
          name="twitter:image"
          content="https://charanphysio.com/og-image.jpg"
        />
      </Helmet>

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