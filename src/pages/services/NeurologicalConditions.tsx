import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";

type StickyMode = "relative" | "fixed" | "absolute";

const NeurologicalConditions = () => {
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
    "Stroke",
    "Parkinson's Disease",
    "Multiple Sclerosis",
    "Spinal Cord Injury",
    "Cerebral Palsy",
    "Guillain-Barré Syndrome",
    "Bell's Palsy",
    "Peripheral Neuropathy",
  ];

  // Compute inline style based on mode
  const getSidebarStyle = (): React.CSSProperties => {
    if (mode === "fixed") {
      return { position: "fixed", top: 96, width: sidebarWidth };
    }
    if (mode === "absolute") {
      return { position: "absolute", top: absoluteTop, width: sidebarWidth };
    }
    // "relative" — sits naturally in flow, no placeholder needed
    return { position: "relative" };
  };

  return (
    <div className="pt-20 bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Neurological Conditions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert physiotherapy for stroke, Parkinson's, multiple sclerosis, spinal cord injury,
            and other neurological conditions to help restore movement, independence, and quality of life.
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
            {/*
              Placeholder: only rendered (and only takes height) when sidebar
              is `fixed` — so there's NO empty space on initial load.
            */}
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
                    { id: "what-is", label: "What Is Neurological Physiotherapy?" },
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
                What Is Neurological Physiotherapy?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Neurological physiotherapy is a specialized branch of physiotherapy that focuses on the
                assessment and treatment of individuals with neurological conditions affecting the brain,
                spinal cord, and nerves. These conditions often result in movement disorders, muscle weakness,
                loss of coordination, and functional limitations.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                At Dr. Sai Charan (PT)'s practice, we use evidence-based techniques to promote neuroplasticity—the
                brain's ability to reorganize and form new neural connections—helping patients regain lost functions
                and improve their overall quality of life.
              </p>
            </div>

            <div id="how-it-works" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                How Does It Work?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Neurological physiotherapy works by stimulating the nervous system through repetitive,
                task-specific exercises and manual techniques. The goal is to retrain the brain and spinal
                cord to control movement more effectively.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Each patient receives a comprehensive assessment followed by a personalized treatment plan.
                Dr. Sai Charan uses a combination of hands-on techniques, therapeutic exercises, and specialized
                equipment to address specific impairments and functional limitations. Regular progress evaluations
                ensure the treatment plan evolves with your recovery.
              </p>
            </div>

            <div id="treatment-approaches" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Treatment Approaches
              </h2>
              <ul className="space-y-3">
                {[
                  { title: "Motor Relearning", desc: "Retraining specific movement patterns" },
                  { title: "Balance & Coordination Training", desc: "Improving stability and fall prevention" },
                  { title: "Strength & Mobility Exercises", desc: "Building muscle strength and flexibility" },
                  { title: "Gait Training", desc: "Improving walking patterns and endurance" },
                  { title: "Spasticity Management", desc: "Reducing muscle stiffness and tightness" },
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
                  { title: "Improved Mobility", desc: "Regain ability to walk, stand, and move independently" },
                  { title: "Reduced Pain", desc: "Manage chronic pain associated with neurological conditions" },
                  { title: "Enhanced Independence", desc: "Perform daily activities with greater ease" },
                  { title: "Better Quality of Life", desc: "Return to hobbies and social activities" },
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
                Neurological physiotherapy is beneficial for individuals of all ages who have been diagnosed with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Stroke survivors</li>
                <li>Individuals with Parkinson's disease</li>
                <li>Patients with multiple sclerosis</li>
                <li>Spinal cord injury patients</li>
                <li>Children with cerebral palsy</li>
                <li>Individuals recovering from brain injury</li>
                <li>Patients with peripheral neuropathy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeurologicalConditions;