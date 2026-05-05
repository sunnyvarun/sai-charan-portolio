import { Link } from "react-router-dom";
import { Brain, Heart, Baby, Activity, Users, Dumbbell, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Neurological Conditions",
    description: "Stroke, Parkinson's, Multiple Sclerosis, Spinal cord injury",
    color: "text-primary",
    slug: "neurological-conditions",
  },
  {
    icon: Activity,
    title: "Orthopedic Conditions",
    description: "Post-fracture rehab, Arthritis, Joint pain",
    color: "text-secondary",
    slug: "orthopedic-conditions",
  },
  {
    icon: Users,
    title: "Geriatric Rehabilitation",
    description: "Age-related mobility and strength issues",
    color: "text-accent",
    slug: "geriatric-rehabilitation",
  },
  {
    icon: Baby,
    title: "Pediatric Conditions",
    description: "Cerebral palsy, Developmental delays",
    color: "text-primary",
    slug: "pediatric-conditions",
  },
  {
    icon: Dumbbell,
    title: "Balance & Strength Training",
    description: "Fall prevention, muscle strengthening",
    color: "text-secondary",
    slug: "balance-strength-training",
  },
  {
    icon: Heart,
    title: "Cardiac Rehabilitation",
    description: "Post-surgery, heart recovery therapy",
    color: "text-accent",
    slug: "cardiac-rehabilitation",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services Offered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive physiotherapy treatments tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 gradient-card animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`${service.color} mb-4`}>
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-primary-light/20 rounded-xl">
          <h3 className="font-poppins font-semibold text-lg mb-2">
            Sports Injuries Treatment
          </h3>
          <p className="text-muted-foreground">
            Specialized care for muscle tears, ligament injuries, and performance recovery to help athletes return to their peak condition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;