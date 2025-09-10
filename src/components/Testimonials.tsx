import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rajesh Kumar",
    condition: "Stroke Recovery",
    text: "Dr. Sai Charan's sessions helped me regain my strength after a stroke. His dedication and personalized approach made all the difference in my recovery. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    condition: "Parkinson's Management",
    text: "The therapy sessions have significantly improved my mobility and confidence. Dr. Sai Charan is extremely patient and knowledgeable. I'm grateful for his care.",
    rating: 5,
  },
  {
    name: "Venkat Reddy",
    condition: "Sports Injury",
    text: "After my knee injury, I thought I'd never play cricket again. Thanks to Dr. Sai Charan's expertise, I'm back on the field stronger than before!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our patients about their recovery journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-0 gradient-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.condition}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;