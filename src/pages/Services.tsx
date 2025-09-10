import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Services = () => {
  return (
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
            <a href="/contact" className="inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;