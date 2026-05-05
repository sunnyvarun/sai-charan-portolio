import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";

type StickyMode = "relative" | "fixed" | "absolute";

const BalanceStrengthTraining = () => {
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
    "Frequent Falls",
    "Vertigo & Dizziness",
    "Parkinson's Disease",
    "Post-Stroke Imbalance",
    "Muscle Weakness",
    "Knee or Hip Weakness",
    "Post-Injury Deconditioning",
    "Elderly Frailty",
    "Osteoporosis",
    "Neurological Conditions",
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
            Balance & Strength Training
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized programs for fall prevention, muscle strengthening, and improving overall 
            stability to reduce injury risk and boost confidence in daily activities.
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
                    { id: "what-is", label: "What Is Balance & Strength Training?" },
                    { id: "how-it-works", label: "How Does It Work?" },
                    { id: "treatment-approaches", label: "Training Approaches" },
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
                What Is Balance & Strength Training?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Balance and strength training is a specialized physiotherapy program designed to improve 
                your body's ability to maintain stability, control movement, and generate force. It combines 
                targeted exercises to build muscle strength with activities that challenge your balance system 
                (vestibular, visual, and proprioceptive).
              </p>
              <p className="text-foreground/80 leading-relaxed">
                At Dr. Sai Charan (PT)'s practice, we create customized training programs that address your 
                specific weaknesses and goals. Whether you're looking to prevent falls, recover from an injury, 
                or enhance athletic performance, our evidence-based approach helps you build a stronger, more 
                stable foundation for all your daily activities.
              </p>
            </div>

            <div id="how-it-works" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                How Does It Work?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The program begins with a comprehensive assessment of your current strength levels, 
                balance capabilities, gait pattern, and fall risk factors. Dr. Sai Charan evaluates how 
                you perform various movements and identifies specific areas that need improvement.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Based on the assessment, a progressive training plan is developed that gradually increases 
                in difficulty as your strength and balance improve. Exercises are designed to challenge your 
                body in safe, controlled ways, building confidence alongside physical capability.
              </p>
            </div>

            <div id="treatment-approaches" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Training Approaches
              </h2>
              <ul className="space-y-3">
                {[
                  { title: "Progressive Strengthening", desc: "Build muscle power from basic to advanced exercises" },
                  { title: "Balance Board Training", desc: "Challenge stability using specialized equipment" },
                  { title: "Single-Leg Stance", desc: "Improve standing balance and weight shifting" },
                  { title: "Core Stabilization", desc: "Strengthen abdominal and back muscles for better posture" },
                  { title: "Gait & Walking Drills", desc: "Enhance walking pattern and endurance" },
                  { title: "Functional Movements", desc: "Practice real-life activities like squatting and reaching" },
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
                  { title: "Fall Prevention", desc: "Significantly reduce risk of dangerous falls" },
                  { title: "Increased Confidence", desc: "Move freely without fear of losing balance" },
                  { title: "Better Posture", desc: "Stand taller and reduce strain on joints" },
                  { title: "Enhanced Athletic Performance", desc: "Improve stability for sports and exercise" },
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
                Balance and strength training is beneficial for individuals who are experiencing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Frequent falls or near-falls</li>
                <li>Fear of falling that limits daily activities</li>
                <li>Generalized muscle weakness</li>
                <li>Difficulty standing on one leg or walking on uneven surfaces</li>
                <li>Recovery from stroke or neurological conditions</li>
                <li>Aging-related decline in strength and stability</li>
                <li>Post-injury deconditioning</li>
                <li>Vertigo or dizziness affecting balance</li>
                <li>Athletes looking to enhance performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceStrengthTraining;