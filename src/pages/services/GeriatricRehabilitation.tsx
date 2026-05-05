import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";

type StickyMode = "relative" | "fixed" | "absolute";

const GeriatricRehabilitation = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<StickyMode>("relative");
  const [sidebarWidth, setSidebarWidth] = useState<number>(320);
  const [sidebarHeight, setSidebarHeight] = useState<number>(0);
  const [absoluteTop, setAbsoluteTop] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const conditions = [
    "Age-related Muscle Loss (Sarcopenia)",
    "Osteoporosis",
    "Arthritis",
    "Balance Disorders",
    "Joint Stiffness",
    "Post-Hip Fracture",
    "Parkinson's Disease (Elderly)",
    "Post-Stroke Recovery",
    "Dementia-related Mobility Issues",
    "Fear of Falling",
  ];

  const getSidebarStyle = (): React.CSSProperties => {
    if (mode === "fixed") {
      return { position: "fixed", top: 96, width: sidebarWidth };
    }
    if (mode === "absolute") {
      return { position: "absolute", top: absoluteTop, width: sidebarWidth };
    }
    return { position: "relative" };
  };

  return (
    <div className="pt-20 bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Geriatric Rehabilitation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized physiotherapy for seniors to address age-related mobility issues, 
            improve strength, enhance balance, and maintain independence with dignity.
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
          {/* LEFT SIDEBAR */}
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
                    { id: "what-is", label: "What Is Geriatric Rehabilitation?" },
                    { id: "how-it-works", label: "How Does It Work?" },
                    { id: "treatment-approaches", label: "Treatment Approaches" },
                    { id: "benefits", label: "Key Benefits" },
                    { id: "related-conditions", label: "Related Conditions" },
                    { id: "who-can-benefit", label: "Who Can Benefit?" },
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
                      Book an appointment with Dr. Sai Charan (PT)
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
            <div id="what-is" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                What Is Geriatric Rehabilitation?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Geriatric rehabilitation is a specialized branch of physiotherapy focused on addressing 
                the unique healthcare needs of older adults. As we age, natural changes occur in our 
                muscles, bones, joints, and nervous system that can affect mobility, balance, and overall function.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                At Dr. Sai Charan (PT)'s practice, we provide compassionate, patient-centered care to help 
                seniors maintain their independence, improve quality of life, and age gracefully. Our approach 
                focuses on gentle yet effective techniques tailored to each individual's capabilities and goals.
              </p>
            </div>

            <div id="how-it-works" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                How Does It Work?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Geriatric rehabilitation begins with a comprehensive assessment of your physical abilities, 
                medical history, medications, and personal goals. Dr. Sai Charan evaluates your strength, 
                balance, flexibility, endurance, and risk of falls to create a personalized treatment plan.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The treatment focuses on maintaining function, preventing decline, managing chronic conditions, 
                and reducing fall risk. Sessions are designed to be safe, comfortable, and effective, with 
                regular progress monitoring and adjustments as needed.
              </p>
            </div>

            <div id="treatment-approaches" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Treatment Approaches
              </h2>
              <ul className="space-y-3">
                {[
                  { title: "Strength Training", desc: "Gentle exercises to combat age-related muscle loss" },
                  { title: "Balance Exercises", desc: "Improve stability and reduce fall risk" },
                  { title: "Gait Training", desc: "Enhance walking patterns and endurance" },
                  { title: "Joint Mobility", desc: "Maintain flexibility and reduce stiffness" },
                  { title: "Fall Prevention", desc: "Home safety assessment and education" },
                  { title: "Pain Management", desc: "Natural approaches to reduce chronic pain" },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">
                      <strong className="text-foreground">{title}</strong> - {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="benefits" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Key Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Increased Independence", desc: "Perform daily activities with confidence" },
                  { title: "Fall Prevention", desc: "Reduce risk of devastating fall-related injuries" },
                  { title: "Improved Mobility", desc: "Walk, climb stairs, and move more easily" },
                  { title: "Better Quality of Life", desc: "Stay active and engaged in life" },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">{title}</h4>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="related-conditions" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-6">
                Related Conditions
              </h2>
              <div className="flex flex-wrap gap-3">
                {conditions.map((condition, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted rounded-full text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </div>

            <div id="who-can-benefit" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Who Can Benefit?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Geriatric rehabilitation is beneficial for older adults who are experiencing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Difficulty walking or getting up from chairs</li>
                <li>Recent falls or fear of falling</li>
                <li>Post-hip fracture or joint replacement recovery</li>
                <li>Age-related muscle weakness (sarcopenia)</li>
                <li>Arthritis-related joint pain and stiffness</li>
                <li>Balance disorders and dizziness</li>
                <li>Neurological conditions like Parkinson's or post-stroke</li>
                <li>General deconditioning from hospitalization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeriatricRehabilitation;