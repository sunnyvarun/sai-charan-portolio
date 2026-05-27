import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ChevronRight, MapPin, AlertTriangle, Home, Building2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

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

  const serviceAreas = [
    { name: "Bandlaguda Jagir", slug: "bandlaguda-jagir" },
    { name: "Suncity", slug: "suncity" },
    { name: "Narsingi", slug: "narsingi" },
    { name: "Kismathpur", slug: "kismathpur" },
    { name: "Langer House", slug: "langer-house" },
    { name: "Kokapet", slug: "kokapet" },
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
    <>
      <Helmet>
        <title>
          Balance Physiotherapy in Hyderabad | Dizziness and Fall Prevention - Sai Charan
        </title>

        <meta
          name="description"
          content="Looking for balance physiotherapy in Hyderabad? Get expert vestibular rehabilitation, dizziness treatment, fall prevention, and home physiotherapy services for vertigo and walking imbalance."
        />

        <meta
          name="keywords"
          content="strength and balance physiotherapy hyderabad, balance training physiotherapy, strength training physiotherapy, balance rehabilitation hyderabad, stability training physiotherapy, fall prevention physiotherapy, mobility and balance therapy, muscle strengthening rehabilitation, coordination training physiotherapy, post injury strength rehabilitation, functional strength physiotherapy, gait and balance training"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/services/strength-balance-training-in-hyderabad"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Balance Physiotherapy in Hyderabad | Dizziness and Fall Prevention - Sai Charan"
        />

        <meta
          property="og:description"
          content="Expert balance physiotherapy, vestibular rehabilitation, vertigo treatment, and fall prevention therapy in Hyderabad."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/services/strength-balance-training-in-hyderabad"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://charanphysio.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Balance Physiotherapy in Hyderabad | Vertigo & Fall Prevention"
        />

        <meta
          name="twitter:description"
          content="Specialized balance physiotherapy and vestibular rehabilitation care in Hyderabad."
        />

        <meta
          name="twitter:image"
          content="https://charanphysio.com/og-image.jpg"
        />
      </Helmet>
    <div className="pt-20 bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Balance Physiotherapy in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Regain stability, walking confidence, and independence through specialized
            vestibular and balance rehabilitation for dizziness, vertigo & fall prevention.
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

                <ul className="space-y-3">
                  {[
                    { id: "introduction", label: "Why Balance Physiotherapy Matters" },
                    { id: "what-is", label: "What Is Balance Physiotherapy?" },
                    { id: "causes", label: "Balance Disorders & Causes" },
                    { id: "risks", label: "Risks of Ignoring Balance Issues" },
                    { id: "vs-general", label: "Physiotherapy vs Vestibular Therapy" },
                    { id: "treatment-types", label: "Types of Treatments" },
                    { id: "conditions", label: "Conditions We Treat" },
                    { id: "services", label: "Services We Offer" },
                    { id: "assessment", label: "What We Check" },
                    { id: "clinic-vs-home", label: "In-Clinic vs Home Visit" },
                    { id: "home-services", label: "Home Visit Services" },
                    { id: "who-needs-home", label: "Who Needs Home Physiotherapy" },
                    { id: "process", label: "Our 5-Step Process" },
                    { id: "areas", label: "Service Areas" },
                    { id: "why-us", label: "Why Choose Charan Physio" },
                    { id: "when-to-start", label: "When to Start" },
                    { id: "benefits", label: "Benefits" },
                    { id: "cost", label: "Treatment Cost" },
                  ].map(({ id, label }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className="text-[15px] text-muted-foreground hover:text-primary transition-colors text-left leading-relaxed flex items-center gap-1"
                      >
                        <ChevronRight className="w-3 h-3" />
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
          <div className="min-w-0 space-y-12">
            {/* Introduction */}
            <div id="introduction" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Balance Physiotherapy Matters
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Feeling unsteady while walking, turning suddenly, climbing stairs, or getting out of bed can indicate a serious balance issue. Many patients describe it as spinning, floating, or the ground shifting beneath them, making even simple daily movement feel unsafe and stressful.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Balance problems often lead to cautious walking, fear of movement, reduced confidence, and near-falls. Balance physiotherapy helps improve vestibular function, stability, coordination, and overall movement control through structured rehabilitation supporting elderly patients, post-stroke recovery, vestibular disorders, concussion recovery, and unexplained dizziness.
              </p>
            </div>

            {/* What is */}
            <div id="what-is" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                What Is Balance Physiotherapy?
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Balance physiotherapy focuses on improving body stability, walking control, coordination, posture, and movement confidence in people experiencing dizziness, vertigo, unsteadiness, or increased fall risk. Treatment combines vestibular rehabilitation, gait training, balance retraining, posture correction, and movement adaptation exercises always highly individualized because every patient experiences instability differently.
              </p>
            </div>

            {/* Causes */}
            <div id="causes" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Balance Disorders & Causes
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Balance disorders can develop from inner ear problems, neurological conditions, muscle weakness, stroke, medication side effects, aging-related decline, head injuries, or vestibular system dysfunction. Some patients experience intense spinning vertigo; others describe a constant floating sensation or persistent walking instability. Proper clinical assessment before starting exercises is critical.
              </p>
            </div>

            {/* Risks of Ignoring */}
            <div id="risks" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Risks of Ignoring Balance Issues
              </h2>
              <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-5 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <p className="text-foreground/80 leading-relaxed">
                    Ignoring dizziness and walking instability often leads to a slow but significant decline in mobility. 
                    What starts as occasional unsteadiness can evolve into complete avoidance of independent outdoor movement within a year.
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Therapists frequently see patients who waited far too long because they assumed the dizziness would resolve naturally. Delayed treatment sometimes allows:
              </p>
              <ul className="space-y-2 ml-6 list-disc text-foreground/80">
                <li>Compensatory walking patterns to become deeply established</li>
                <li>Excessive dependence on visual cues for stability</li>
                <li>Reduced neck mobility from avoiding head turns</li>
                <li>Severe fear of falling that becomes as disabling as the physical problem</li>
              </ul>
            </div>

            {/* General vs Vestibular */}
            <div id="vs-general" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                General Physiotherapy vs Vestibular Therapy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                General physiotherapy addresses orthopedic pain and muscular injury. Balance rehabilitation follows a dizziness-specific approach focused on vestibular adaptation, eye-head coordination, and gait retraining. Vestibular therapy requires careful progression pushing too aggressively can temporarily worsen dizziness.
              </p>
            </div>

            {/* Treatment Types */}
            <div id="treatment-types" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Types of Treatments
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Vestibular rehabilitation therapy",
                  "Balance training physiotherapy",
                  "Gait and coordination exercises",
                  "Posture correction work",
                  "Fall prevention strategies",
                  "Visual stabilization training",
                  "Functional mobility retraining",
                  "Balance board physiotherapy",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-primary/5 rounded-xl p-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions */}
            <div id="conditions" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-6">
                Conditions We Treat
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Vertigo & Dizziness", desc: "Spinning sensations, motion sensitivity, positional dizziness" },
                  { title: "Vestibular Disorders", desc: "Neuritis, labyrinthitis, chronic vestibular hypofunction" },
                  { title: "Post-Stroke Instability", desc: "Weight shifting, posture control, walking symmetry" },
                  { title: "Walking Imbalance", desc: "Unstable gait, poor coordination, uneven step patterns" },
                  { title: "Elderly Fall Risk", desc: "Age-related instability, slowed balance reactions" },
                  { title: "Neurological Conditions", desc: "Parkinson's, concussion recovery, neurological imbalance" },
                ].map((condition) => (
                  <div key={condition.title} className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-1">{condition.title}</h4>
                    <p className="text-sm text-muted-foreground">{condition.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div id="services" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Services We Offer
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Programs are designed around each patient's specific mobility limitations, dizziness severity, walking confidence, fall history, and daily life demands. Some patients need intensive vestibular rehabilitation; others require gradual balance retraining. Our services focus on both physical rehabilitation and rebuilding movement confidence safely.
              </p>
            </div>

            {/* Assessment */}
            <div id="assessment" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                What We Check During Assessment
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Balance & Stability Evaluation",
                  "Gait & Walking Pattern Analysis",
                  "Vestibular Function Testing",
                  "Coordination & Reflex Assessment",
                  "Fall Risk Assessment",
                  "Posture & Movement Analysis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 border border-border/50 rounded-lg p-3">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-Clinic vs Home Visit */}
            <div id="clinic-vs-home" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                In-Clinic vs Home Visit: Which One Is Right for You?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">In-Clinic</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">• Structured balance equipment & gait training areas</li>
                    <li className="flex items-start gap-2">• Controlled conditions with immediate therapist supervision</li>
                    <li className="flex items-start gap-2">• Best for initial assessment and severe cases</li>
                    <li className="flex items-start gap-2">• Access to advanced vestibular testing tools</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Home className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">Home Visit</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">• Real-life environment assessment (identify home fall hazards)</li>
                    <li className="flex items-start gap-2">• No travel stress - essential for severe vertigo patients</li>
                    <li className="flex items-start gap-2">• Practice actual daily activities: bed transfers, stairs, bathroom</li>
                    <li className="flex items-start gap-2">• Family education and caregiver training included</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Services */}
            <div id="home-services" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Balance Physiotherapy at Home in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Many patients postpone treatment because travel itself becomes stressful - crowded traffic, long walks, stairs, and vehicle movement can aggravate vestibular symptoms. Home balance physiotherapy allows therapists to train balance directly within your natural environment, including bed transfers, bathroom mobility, hallway navigation, and stair practice.
              </p>
            </div>

            {/* Who Needs Home Physiotherapy */}
            <div id="who-needs-home" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Who Needs Home Physiotherapy for Balance
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Elderly with significant fall risk",
                  "Severe active vertigo patients",
                  "Post-stroke recovery cases",
                  "Neurological disorders affecting mobility",
                  "Post-hospitalization weakness",
                  "Anyone unable to travel safely to clinic",
                ].map((item) => (
                  <span key={item} className="px-4 py-2 bg-primary/10 rounded-full text-sm text-foreground/80">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mt-4 text-sm">
                Home sessions often produce significantly better rehabilitation quality because the patient conserves 
                physical and cognitive energy for actual treatment rather than spending it on travel.
              </p>
            </div>

            {/* 5-Step Process */}
            <div id="process" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our 5-Step Balance Physiotherapy Process
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Book Consultation", desc: "Discuss dizziness history, instability triggers, walking difficulties, and fall concerns" },
                  { step: "2", title: "Detailed Assessment", desc: "Gait analysis, vestibular testing, balance evaluation, and fall risk screening" },
                  { step: "3", title: "Customized Therapy Plan", desc: "Personalized plan based on your specific diagnosis, endurance, and mobility goals" },
                  { step: "4", title: "Therapy Sessions", desc: "Vestibular retraining, balance drills, gait correction, and functional mobility practice" },
                  { step: "5", title: "Progress Monitoring", desc: "Regular evaluation of walking confidence, dizziness frequency, and fall risk reduction" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas - CLICKABLE */}
            <div id="areas" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-6">
                Service Areas in Hyderabad
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/areas/${area.slug}`}
                    className="flex items-center gap-3 bg-primary/5 hover:bg-primary/10 transition-colors rounded-xl p-4 group"
                  >
                    <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-foreground/80 group-hover:text-primary transition-colors font-medium">
                      {area.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Why Us */}
            <div id="why-us" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Choose Charan Physio
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Experienced Balance & Vestibular Specialists",
                  "Advanced Therapy Techniques & Tools",
                  "Personalized Treatment Plans",
                  "Home & Clinic Service Availability",
                  "Patient-Centered Rehabilitation",
                  "Long-Term Movement Confidence",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* When to Start */}
            <div id="when-to-start" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                When to Start Balance Physiotherapy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Many people delay treatment because dizziness seems inconsistent early on. Early rehabilitation prevents worsening compensation patterns. Search for a balance physiotherapist near you once dizziness, instability, or coordination problems begin affecting walking confidence, stair use, or daily safety. Earlier is almost always better for vestibular and balance rehabilitation.
              </p>
            </div>

            {/* Benefits */}
            <div id="benefits" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Benefits of Balance Physiotherapy
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Improved stability and coordination",
                  "Reduced frequency of dizziness episodes",
                  "Safer and more confident walking",
                  "Meaningful fall prevention",
                  "Restored movement confidence",
                  "Better posture and walking efficiency",
                  "Less fear-based activity avoidance",
                  "Preserved independence for daily living",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 bg-primary/5 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost */}
            <div id="cost" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Balance Physiotherapy Treatment Cost in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Balance physiotherapy treatment cost varies depending on diagnosis complexity, dizziness severity, session frequency, home visit requirements, and rehabilitation duration.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Clinic Sessions</h4>
                  <p className="text-sm text-muted-foreground">Typically range based on assessment complexity and specialized care requirements</p>
                </div>
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Home Visit Sessions</h4>
                  <p className="text-sm text-muted-foreground">Higher per-session due to travel - many patients find it worthwhile for convenience and reduced travel stress</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mt-4 text-sm">
                <strong>Note:</strong> A straightforward positional vertigo case may resolve in relatively few sessions, while chronic vestibular dysfunction or post-stroke instability typically requires extended treatment. Contact us for an accurate quote based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BalanceStrengthTraining;