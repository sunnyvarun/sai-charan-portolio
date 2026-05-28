import { Helmet } from "react-helmet-async";

import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About - Dr Sai Charan Physiotherapy Clinic in Hyderabad
        </title>

        <meta
          name="description"
          content="Learn about Dr Sai Charan, a trusted physiotherapist in Hyderabad, offering expert care, advanced treatments, and personalised rehabilitation for lasting recovery."
        />

        <meta
          name="keywords"
          content="Dr Sai Charan physiotherapist, Charan Physiotherapy Clinic Hyderabad, physiotherapy clinic Hyderabad, physiotherapist in Hyderabad, about physiotherapy clinic Hyderabad, expert physiotherapist Hyderabad, rehabilitation therapy Hyderabad, pain relief physiotherapy Hyderabad, manual therapy Hyderabad, sports injury physiotherapy Hyderabad, spine physiotherapy Hyderabad, ortho physiotherapy Hyderabad"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/about"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About - Dr Sai Charan Physiotherapy Clinic in Hyderabad"
        />

        <meta
          property="og:description"
          content="Meet Dr Sai Charan, expert physiotherapist in Hyderabad providing advanced rehabilitation and patient-focused physiotherapy care."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/about"
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
          content="About Dr Sai Charan Physiotherapy Clinic"
        />

        <meta
          name="twitter:description"
          content="Trusted physiotherapy and rehabilitation care in Hyderabad."
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
              About Dr. Sai Charan(PT)
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about our expert physiotherapist and his approach to patient care
            </p>
          </div>
        </div>

        <AboutSection />

        <div className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-poppins text-2xl font-bold mb-6">
              Ready to Start Your Recovery Journey?
            </h2>

            <Button variant="hero" size="xl" asChild>
              <a
                href="tel:9550836548"
                className="inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Book Your Consultatio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;