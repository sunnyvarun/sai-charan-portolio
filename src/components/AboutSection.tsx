import { Award, GraduationCap, Globe2, Heart } from "lucide-react";
import doctorImage from "@/assets/dr-sai-charan.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Dr. Sai Charan (PT)
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Dr. Sai Charan (PT), BPT, MPT (Neurology), is a compassionate and dedicated 
              physiotherapist with over 4 years of experience in treating neurological, 
              orthopedic, and rehabilitation cases. His expertise lies in providing 
              evidence-based therapy tailored to each patient's unique needs, ensuring 
              holistic recovery and improved quality of life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">BPT, MPT (Neurology)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-sm text-muted-foreground">4+ Years</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Languages</h4>
                  <p className="text-sm text-muted-foreground">Telugu | English | Hindi</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Approach</h4>
                  <p className="text-sm text-muted-foreground">Patient-Centered Care</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary-light/10 rounded-xl border border-primary/20">
              <p className="text-foreground italic">
                "My mission is to help every patient achieve their maximum potential for 
                recovery and return to their daily activities with confidence and independence."
              </p>
              <p className="text-sm text-primary mt-2 font-semibold">- Dr. Sai Charan (PT)</p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-10 rounded-2xl transform rotate-6"></div>
              <img
                src={doctorImage}
                alt=" (PT) - Physiotherapist"
                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;