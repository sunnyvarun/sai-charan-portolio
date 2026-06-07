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

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Physiotherapy Services in Hyderabad
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We provide specialized rehabilitation programs designed to reduce pain,
                restore mobility, improve strength, and help patients return to daily
                activities with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 border">
                <h3 className="font-semibold text-lg mb-3">
                  Personalized Treatment
                </h3>
                <p className="text-muted-foreground">
                  Every rehabilitation plan is tailored according to the patient's
                  condition, goals, lifestyle, and recovery requirements.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 border">
                <h3 className="font-semibold text-lg mb-3">
                  Home & Clinic Care
                </h3>
                <p className="text-muted-foreground">
                  Flexible physiotherapy services are available both at home and in the
                  clinic across Hyderabad.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 border">
                <h3 className="font-semibold text-lg mb-3">
                  Evidence-Based Recovery
                </h3>
                <p className="text-muted-foreground">
                  Treatment focuses on long-term recovery, movement correction, and
                  injury prevention rather than temporary symptom relief.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-poppins text-3xl font-bold mb-4">
                Conditions We Commonly Treat
              </h2>

              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our rehabilitation programs help patients recover from a wide range of
                musculoskeletal, neurological, pediatric, and cardiac conditions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Back Pain",
                "Neck Pain",
                "Sciatica",
                "Stroke Rehabilitation",
                "Sports Injuries",
                "ACL Rehabilitation",
                "Frozen Shoulder",
                "Parkinson's Disease",
                "Joint Replacement Recovery",
                "Balance Disorders",
                "Cardiac Rehabilitation",
                "Pediatric Conditions",
              ].map((condition) => (
                <div
                  key={condition}
                  className="bg-primary/5 border rounded-xl p-4 text-center"
                >
                  <span className="font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

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