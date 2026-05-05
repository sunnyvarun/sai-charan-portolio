import { Award, Users, MapPin, Heart, Clock, Home, Stethoscope, ThumbsUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Expert Physiotherapist",
      description: "Dr. Sai Charan (PT) with BPT, MPT (Neurology) and 4+ years of specialized experience",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Personalized treatment plans tailored to your unique condition and goals",
    },
    {
      icon: Home,
      title: "Home Visits Available",
      description: "Convenient physiotherapy at your doorstep - no travel needed",
    },
    {
      icon: MapPin,
      title: "Multiple Service Areas",
      description: "Serving Suncity, Bandlaguda Jagir, Narsingi, Kokapet & surrounding areas",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Monday-Saturday 9 AM - 7 PM, Sunday by appointment",
    },
    {
      icon: ThumbsUp,
      title: "Proven Results",
      description: "Evidence-based treatments with high success rates for various conditions",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Dr. Sai Charan (PT)?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-5"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compassionate care, expert knowledge, and personalized attention for your recovery journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-3 rounded-full">
            <Stethoscope className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              Trusted by 500+ patients across Hyderabad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;