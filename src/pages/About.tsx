import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const About = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Dr. Sai Charan
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
            <a href="tel:9550836548" className="inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Book Your Consultation
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;