import { Helmet } from "react-helmet-async";

import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>
          Advanced Physiotherapy Services in Hyderabad
        </title>

        <meta
          name="description"
          content="Comprehensive physiotherapy services in Hyderabad for neurological, orthopedic, pediatric, and cardiac conditions. Personalized rehabilitation and expert care—book today."
        />

        <meta
          name="keywords"
          content="physiotherapy services Hyderabad, physiotherapist Hyderabad, neurological physiotherapy Hyderabad, orthopedic physiotherapy Hyderabad, pediatric physiotherapy Hyderabad, cardiac rehabilitation Hyderabad, rehabilitation therapy Hyderabad"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/services"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Advanced Physiotherapy Services in Hyderabad"
        />

        <meta
          property="og:description"
          content="Explore expert physiotherapy services in Hyderabad including neurological, orthopedic, pediatric, geriatric, and cardiac rehabilitation."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/services"
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
          content="Advanced Physiotherapy Services in Hyderabad"
        />

        <meta
          name="twitter:description"
          content="Specialized physiotherapy and rehabilitation services by Dr Sai Charan in Hyderabad."
        />

        <meta
          name="twitter:image"
          content="https://charanphysio.com/og-image.jpg"
        />
      </Helmet>

      <div className="pt-20">
        <div className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive physiotherapy and rehabilitation services tailored to your needs
            </p>
          </div>
        </div>

        <ServicesSection />

        <div className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-poppins text-2xl font-bold mb-6">
              Schedule Your Treatment Today
            </h2>

            <Button variant="hero" size="xl" asChild>
              <a
                href="/contact"
                className="inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;