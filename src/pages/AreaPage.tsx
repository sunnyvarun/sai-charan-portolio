import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

type StickyMode = "relative" | "fixed" | "absolute";

interface AreaPageProps {
  areaName: string;
  areaSlug: string;
}

const AreaPage = ({ areaName, areaSlug }: AreaPageProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<StickyMode>("relative");
  const [sidebarWidth, setSidebarWidth] = useState<number>(320);
  const [sidebarHeight, setSidebarHeight] = useState<number>(0);
  const [absoluteTop, setAbsoluteTop] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Best Physiotherapist in ${areaName} | Dr. Sai Charan (PT)`;
  }, [areaName]);

  useEffect(() => {
    const NAV_HEIGHT = 96;

    const update = () => {
      const sidebar = sidebarRef.current;
      const container = containerRef.current;
      if (!sidebar || !container) return;

      const sidebarH = sidebar.offsetHeight;
      const colW = sidebar.parentElement?.offsetWidth ?? 320;
      setSidebarWidth(colW);
      setSidebarHeight(sidebarH);

      const containerRect = container.getBoundingClientRect();
      const maxTop = containerRect.height - sidebarH;
      const scrolledIn = NAV_HEIGHT - containerRect.top;

      if (scrolledIn <= 0) {
        setMode("relative");
      } else if (scrolledIn >= maxTop) {
        setAbsoluteTop(maxTop);
        setMode("absolute");
      } else {
        setMode("fixed");
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const getSidebarStyle = (): React.CSSProperties => {
    if (mode === "fixed") {
      return { position: "fixed", top: 96, width: sidebarWidth };
    }
    if (mode === "absolute") {
      return { position: "absolute", top: absoluteTop, width: sidebarWidth };
    }
    return { position: "relative" };
  };

  const nearbyAreas = [
    "Suncity",
    "Bandlaguda Jagir",
    "Narsingi",
    "Kismathpur",
    "Langer House",
    "Kokapet",
  ].filter(area => area !== areaName);

  return (
    <div className="pt-20 bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <span className="text-primary font-medium">Physiotherapy Services</span>
          </div>
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Best Physiotherapist in {areaName}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert physiotherapy services now available in {areaName}. Dr. Sai Charan (PT) provides 
            compassionate, evidence-based care at your doorstep.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-12 md:py-16">
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-14 items-start"
          style={{ position: "relative" }}
        >
          {/* LEFT SIDEBAR - Sticky */}
          <aside className="hidden lg:block" style={{ position: "relative" }}>
            {mode === "fixed" && (
              <div style={{ height: sidebarHeight, visibility: "hidden" }} />
            )}

            <div ref={sidebarRef} style={getSidebarStyle()}>
              <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                <h3 className="font-poppins font-semibold text-[22px] mb-5 text-foreground">
                  Contents
                </h3>

                <ul className="space-y-4">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "services-offered", label: "Services Offered" },
                    { id: "why-choose-us", label: "Why Choose Us?" },
                    { id: "nearby-areas", label: "Nearby Areas We Serve" },
                    { id: "how-to-book", label: "How to Book an Appointment" },
                  ].map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className="text-[15px] text-muted-foreground hover:text-primary transition-colors text-left leading-relaxed"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Need Help Card */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-poppins font-semibold text-lg mb-2">Need Help?</h4>
                    <p className="text-[14px] leading-7 text-muted-foreground mb-4">
                      Book an appointment with Dr. Sai Charan (PT) in {areaName}
                    </p>
                    <Button variant="hero" size="sm" className="w-full" asChild>
                      <a href="/contact">Book Appointment</a>
                    </Button>
                    <a
                      href="tel:9550836548"
                      className="flex items-center justify-center gap-2 mt-4 text-sm text-primary hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      9550836548
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="min-w-0">
            {/* Overview Section */}
            <div id="overview" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Physiotherapy Services in {areaName}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Dr. Sai Charan (PT) brings specialized physiotherapy services to residents of {areaName}. 
                With over 4 years of experience and expertise in neurological rehabilitation, orthopedic 
                conditions, post-surgical recovery, and sports injuries, we are committed to helping you 
                regain mobility and live pain-free.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Whether you need home visits (available in {areaName}) or prefer clinic sessions, our 
                services are designed to accommodate your schedule and specific healthcare needs. We 
                understand that every patient is unique, which is why we create personalized treatment 
                plans tailored to your condition and goals.
              </p>
            </div>

            {/* Services Offered */}
            <div id="services-offered" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Services Offered in {areaName}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Neurological Rehabilitation (Stroke, Parkinson's, MS)",
                  "Orthopedic Physiotherapy (Back Pain, Arthritis, Fractures)",
                  "Geriatric Care (Elderly Mobility & Fall Prevention)",
                  "Pediatric Physiotherapy (Cerebral Palsy, Developmental Delays)",
                  "Sports Injury Treatment",
                  "Cardiac Rehabilitation (Post-Surgery Recovery)",
                  "Post-Surgical Recovery",
                  "Home Visit Available in {areaName}",
                ].map((service) => (
                  <div key={service} className="flex items-start gap-3 p-3 bg-primary/5 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div id="why-choose-us" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Choose Dr. Sai Charan (PT) in {areaName}?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Expert Qualification", desc: "BPT, MPT (Neurology) with 4+ years experience" },
                  { title: "Home Visit Facility", desc: "Convenient physiotherapy at your doorstep" },
                  { title: "Personalized Care", desc: "Treatment plans tailored to your needs" },
                  { title: "Evidence-Based Approach", desc: "Proven techniques for effective recovery" },
                  { title: "Affordable Pricing", desc: "Quality care at reasonable rates" },
                  { title: "Flexible Timings", desc: "Appointments that fit your schedule" },
                ].map((item) => (
                  <div key={item.title} className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div id="nearby-areas" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                We Also Serve Nearby Areas
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                In addition to {areaName}, Dr. Sai Charan (PT) provides physiotherapy services in these 
                nearby locations across Hyderabad:
              </p>
              <div className="flex flex-wrap gap-3">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area}
                    to={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 bg-muted rounded-full text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    {area}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>

            {/* How to Book */}
            <div id="how-to-book" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                How to Book an Appointment in {areaName}?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Call or WhatsApp</h4>
                    <p className="text-muted-foreground">Reach out to us at <a href="tel:9550836548" className="text-primary">9550836548</a> to discuss your condition</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Book Online</h4>
                    <p className="text-muted-foreground">Fill out the contact form on our website with your preferred date and time</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Get Confirmation</h4>
                    <p className="text-muted-foreground">We'll confirm your appointment and schedule a home visit or clinic session in {areaName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaPage;