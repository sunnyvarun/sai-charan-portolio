import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    const phoneNumber = "919550836548";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-3">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book your appointment or reach out to us for any queries
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Info - 2/5 */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            {/* Call & WhatsApp Row */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-soft hover:shadow-xl transition-all duration-300 group flex-1">
                <CardContent className="p-5 text-center h-full flex flex-col items-center justify-center">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Call Now
                  </p>
                  <a href="tel:9550836548" className="text-primary hover:underline font-semibold text-sm">
                    9550836548
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-xl transition-all duration-300 group flex-1">
                <CardContent className="p-5 text-center h-full flex flex-col items-center justify-center">
                  <div className="bg-green-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    WhatsApp
                  </p>
                  <a 
                    href="https://wa.me/919550836548" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline font-semibold text-sm"
                  >
                    9550836548
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Email */}
            <Card className="border-0 shadow-soft hover:shadow-xl transition-all duration-300 group flex-1">
              <CardContent className="p-5 h-full flex items-center">
                <div className="bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Email</p>
                  <a href="mailto:dubasisaicharan@gmail.com" className="text-primary hover:underline font-medium">
                    dubasisaicharan@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="border-0 shadow-soft hover:shadow-xl transition-all duration-300 group flex-1">
              <CardContent className="p-5 h-full flex items-center">
                <div className="bg-purple-500/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Service Areas</p>
                  <p className="text-sm font-medium leading-relaxed">
                    Suncity, Bandlaguda Jagir, Kalimandir, Kismathpur, Narsingi, Langer House, Kokapet
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="border-0 shadow-soft hover:shadow-xl transition-all duration-300 group flex-1">
              <CardContent className="p-5 h-full flex items-center">
                <div className="bg-amber-500/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Working Hours</p>
                  <p className="text-sm font-medium">Mon - Sat: 9AM - 7PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Appointment Form - 3/5 */}
          <div className="lg:col-span-3 flex">
            <Card className="border-0 shadow-soft hover:shadow-xl transition-all duration-300 w-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="font-poppins font-semibold text-2xl mb-2">
                    Book <span className="text-primary">Appointment</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill in the details and we'll get back to you instantly via WhatsApp
                  </p>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="flex-1 flex flex-col space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1.5 focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1.5 focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>

                  <div className="flex-1">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Your Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your condition or requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1.5 resize-none h-[100px] focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-6 rounded-xl shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book via WhatsApp
                    <Send className="w-4 h-4 ml-1" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                    <span className="inline-block w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                    You'll be redirected to WhatsApp to confirm your appointment
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;