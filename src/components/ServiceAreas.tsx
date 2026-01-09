import { MapPin } from "lucide-react";

const areas = [
  "Suncity",
  "Bandlaguda Jagir",
  "Kalimandir",
  "Kismathpur",
  "Narsingi",
  "Langer House",
  "Kokapet",
];

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing physiotherapy services across Hyderabad
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60908.5887692029!2d78.3476!3d17.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95eda0afde1b%3A0x3c1c4f19942b3e2f!2sBandlaguda%20Jagir%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Areas Map"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;