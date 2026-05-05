import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";

type StickyMode = "relative" | "fixed" | "absolute";

const CardiacRehabilitation = () => {
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
    "Post-Heart Attack Recovery",
    "Post-Bypass Surgery (CABG)",
    "Angioplasty with Stenting",
    "Heart Failure",
    "Coronary Artery Disease",
    "Valve Replacement/Repair",
    "High Blood Pressure",
    "High Cholesterol",
    "Diabetes with Cardiac Risk",
    "Post-Transplant Recovery",
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
            Cardiac Rehabilitation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Post-surgery and heart recovery therapy designed to safely restore cardiovascular health, 
            improve heart function, and help you return to daily activities with confidence.
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
                    { id: "what-is", label: "What Is Cardiac Rehabilitation?" },
                    { id: "how-it-works", label: "How Does It Work?" },
                    { id: "treatment-approaches", label: "Treatment Approaches" },
                    { id: "benefits", label: "Key Benefits" },
                    { id: "phases", label: "Phases of Cardiac Rehab" },
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
                What Is Cardiac Rehabilitation?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Cardiac rehabilitation is a medically supervised program designed to improve cardiovascular 
                health following a heart attack, heart surgery, or diagnosis of heart disease. It combines 
                exercise training, heart health education, and counseling to help patients recover safely 
                and reduce future cardiac risks.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                At Dr. Sai Charan (PT)'s practice, we provide comprehensive cardiac rehab tailored to your 
                specific condition and recovery stage. Our goal is to help you rebuild physical endurance, 
                strengthen your heart, and adopt lifestyle changes that promote long-term heart health.
              </p>
            </div>

            <div id="how-it-works" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                How Does It Work?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Cardiac rehabilitation begins with a thorough medical evaluation, including assessment of 
                your heart function, exercise capacity, risk factors, and current medications. Dr. Sai Charan 
                works closely with your cardiologist to ensure a coordinated, safe approach to your recovery.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Based on the assessment, a personalized exercise program is developed that gradually increases 
                in intensity as your heart becomes stronger. Your progress is closely monitored to ensure safety, 
                and adjustments are made based on how your body responds to each session.
              </p>
            </div>

            <div id="treatment-approaches" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Treatment Approaches
              </h2>
              <ul className="space-y-3">
                {[
                  { title: "Aerobic Conditioning", desc: "Walking, cycling, and other heart-healthy exercises" },
                  { title: "Strength Training", desc: "Gentle resistance exercises to rebuild overall strength" },
                  { title: "Breathing Exercises", desc: "Improve lung capacity and oxygen utilization" },
                  { title: "Heart Rate Monitoring", desc: "Safe exercise intensity guidance" },
                  { title: "Risk Factor Management", desc: "Blood pressure, cholesterol, and diabetes control" },
                  { title: "Lifestyle Education", desc: "Diet, stress management, and medication adherence" },
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
                  { title: "Strengthened Heart", desc: "Improve cardiac function and exercise capacity" },
                  { title: "Reduced Cardiac Risk", desc: "Lower chances of future heart events" },
                  { title: "Faster Recovery", desc: "Return to daily activities more quickly" },
                  { title: "Better Quality of Life", desc: "Regain confidence and independence" },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">{title}</h4>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="phases" className="mb-12 scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Phases of Cardiac Rehabilitation
              </h2>
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="font-semibold text-lg mb-2">Phase I: Inpatient (Hospital)</h4>
                  <p className="text-sm text-muted-foreground">Initial recovery immediately after cardiac event or surgery. Focus on gentle mobility, breathing exercises, and education.</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="font-semibold text-lg mb-2">Phase II: Outpatient (Early Recovery)</h4>
                  <p className="text-sm text-muted-foreground">Supervised exercise program with cardiac monitoring. Typically 3 sessions per week for 6-12 weeks.</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <h4 className="font-semibold text-lg mb-2">Phase III: Independent Maintenance</h4>
                  <p className="text-sm text-muted-foreground">Transition to home-based or gym-based program with periodic check-ins and progress monitoring.</p>
                </div>
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
                Cardiac rehabilitation is beneficial for individuals who have experienced:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Heart attack (myocardial infarction)</li>
                <li>Coronary artery bypass grafting (CABG) surgery</li>
                <li>Angioplasty or stent placement</li>
                <li>Heart valve repair or replacement</li>
                <li>Heart failure diagnosis</li>
                <li>Heart or combined heart-lung transplant</li>
                <li>Stable angina</li>
                <li>Peripheral artery disease</li>
                <li>Those with multiple cardiac risk factors (diabetes, hypertension, high cholesterol)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardiacRehabilitation;