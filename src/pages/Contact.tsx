import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
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
  );
};

export default Contact;