import { Helmet } from "react-helmet-async";

import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact us | Sai Charan Best Physiotherapist in Hyderabad
        </title>

        <meta
          name="description"
          content="Contact Sai Charan Physiotherapy in Hyderabad to book an appointment. Qualified specialists, clinical assessment, and evidence-based rehabilitation care."
        />

        <meta
          name="keywords"
          content="contact physiotherapy hyderabad, physiotherapy clinic contact hyderabad, book physiotherapy appointment hyderabad, contact physiotherapist hyderabad, physio clinic contact details, physiotherapy appointment booking, rehab consultation hyderabad, physiotherapy clinic phone number, schedule physio session hyderabad, physiotherapy enquiry hyderabad"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/contact"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Sai Charan Physiotherapy Hyderabad"
        />

        <meta
          property="og:description"
          content="Book your physiotherapy appointment with Dr. Sai Charan in Hyderabad."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/contact"
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
          content="Contact Sai Charan Physiotherapy"
        />

        <meta
          name="twitter:description"
          content="Schedule your physiotherapy consultation in Hyderabad."
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
              Contact Us
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch to schedule your appointment or ask any questions
            </p>
          </div>
        </div>

        <ContactSection />
      </div>
    </>
  );
};

export default Contact;