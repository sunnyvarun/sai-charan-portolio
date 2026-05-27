import { Helmet } from "react-helmet-async";

import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Patient Reviews | Sai Charan Physiotherapy
        </title>

        <meta
          name="description"
          content="Read real patient reviews of Sai Charan Physiotherapy. Trusted care, proven results, and positive recovery experiences from satisfied patients."
        />

        <meta
          name="keywords"
          content="patient reviews physiotherapy, physiotherapy reviews, physiotherapy testimonials, patient feedback physiotherapy, physiotherapy success stories, rehabilitation reviews, physio clinic reviews, real patient experiences physiotherapy, treatment results physiotherapy, physiotherapy patient satisfaction"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/testimonials"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Patient Reviews | Sai Charan Physiotherapy"
        />

        <meta
          property="og:description"
          content="Explore real patient recovery stories and physiotherapy testimonials from Sai Charan Physiotherapy in Hyderabad."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/testimonials"
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
          content="Patient Reviews | Sai Charan Physiotherapy"
        />

        <meta
          name="twitter:description"
          content="Real physiotherapy recovery experiences and patient testimonials."
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
              Patient Success Stories
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our patients on their path to recovery
            </p>
          </div>
        </div>

        <Testimonials />

        <div className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-poppins text-2xl font-bold mb-6">
              Join Our Success Stories
            </h2>

            <Button variant="hero" size="xl" asChild>
              <a
                href="/contact"
                className="inline-flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Get Started Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;