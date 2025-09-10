import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const TestimonialsPage = () => {
  return (
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
            <a href="/contact" className="inline-flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Get Started Today
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;