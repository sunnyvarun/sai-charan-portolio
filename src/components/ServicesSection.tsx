import { Link } from "react-router-dom";
import { Brain, Heart, Baby, Activity, Users, Dumbbell, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Neurological Physiotherapy",
    description: "Stroke, Parkinson's, Multiple Sclerosis, Spinal cord injury",
    color: "text-primary",
    slug: "neuro-physiotherapy-in-hyderabad",
  },
  {
    icon: Activity,
    title: "Orthopedic Physiotherapy",
    description: "Post-fracture rehab, Arthritis, Joint pain",
    color: "text-secondary",
    slug: "orthopedic-physiotherapy-rehabilitation-in-hyderabad",
  },
  {
    icon: Users,
    title: "Geriatric Physiotherapy",
    description: "Age-related mobility and strength issues",
    color: "text-accent",
    slug: "geriatric-physiotherapy-in-hyderabad",
  },
  {
    icon: Baby,
    title: "Pediatric Physiotherapy",
    description: "Cerebral palsy, Developmental delays",
    color: "text-primary",
    slug: "pediatric-physiotherapy-in-hyderabad",
  },
  {
    icon: Dumbbell,
    title: "Balance & Strength Physiotherapy",
    description: "Fall prevention, muscle strengthening",
    color: "text-secondary",
    slug: "strength-balance-training-in-hyderabad",
  },
  {
    icon: Heart,
    title: "Cardiac Rehabilitation",
    description: "Post-surgery, heart recovery therapy",
    color: "text-accent",
    slug: "cardiac-rehabilitation-in-hyderabad",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
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