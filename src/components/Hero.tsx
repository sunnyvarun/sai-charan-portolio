import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Physiotherapy rehabilitation session"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Compassionate Physiotherapy &{" "}
            <span className="text-gradient">Neurological Rehabilitation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Helping you regain strength, mobility, and confidence in every step of life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button variant="hero" size="xl" asChild>
              <a href="/contact" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:9550836548" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Now
              </a>
            </Button>
          </div>

          <div className="gradient-card p-6 rounded-xl shadow-soft inline-block">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">4+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">Specialized in Neurology (MPT)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">Personalized Rehabilitation Plans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;