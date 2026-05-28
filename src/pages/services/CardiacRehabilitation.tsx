import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ChevronRight, MapPin, AlertTriangle, Home, Building2, Heart } from "lucide-react";
import { Link } from "react-router-dom";

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

  const serviceAreas = [
    { name: "Bandlaguda Jagir", slug: "physiotherapist-in-bandlaguda-jagir-hyderabad" },
    { name: "Suncity", slug: "physiotherapist-in-suncity-hyderabad" },
    { name: "Narsingi", slug: "physiotherapist-in-narsingi-hyderabad" },
    { name: "Kismathpur", slug: "physiotherapist-in-kismathpur-hyderabad" },
    { name: "Langer House", slug: "physiotherapist-in-langer-house-hyderabad" },
    { name: "Kokapet", slug: "physiotherapist-in-kokapet-hyderabad" },
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
          Cardiac Rehabilitation in Hyderabad | Expert Cardiac Physiotherapy - Sai Charan
        </title>

        <meta
          name="description"
          content="Searching for cardiac rehabilitation in Hyderabad? Dr. Sai Charan Physio offers supervised cardiac physiotherapy, home visit services, and personalised recovery programs after bypass surgery, heart attack, and angioplasty."
        />

        <meta
          name="keywords"
          content="cardiac rehabilitation hyderabad, cardiac rehab physiotherapy, heart rehabilitation program, cardiac physiotherapy hyderabad, heart recovery physiotherapy, cardiovascular rehabilitation therapy, post heart surgery rehabilitation, cardiac fitness training physiotherapy, heart health rehabilitation, supervised cardiac exercise program, cardiac recovery treatment hyderabad"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/services/cardiac-rehabilitation-in-hyderabad"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Cardiac Rehabilitation in Hyderabad | Expert Cardiac Physiotherapy - Sai Charan"
        />

        <meta
          property="og:description"
          content="Expert cardiac rehabilitation and physiotherapy in Hyderabad after heart attack, bypass surgery, angioplasty, and heart failure."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/services/cardiac-rehabilitation-in-hyderabad"
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
          content="Cardiac Rehabilitation in Hyderabad | Heart Recovery Care"
        />

        <meta
          name="twitter:description"
          content="Specialized cardiac physiotherapy and rehabilitation services in Hyderabad."
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
            Cardiac Rehabilitation in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rebuild strength, stamina, and confidence safely after heart attack, bypass surgery, angioplasty, or heart failure.
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
                    { id: "what-is", label: "What Is Cardiac Rehabilitation?" },
                    { id: "why-essential", label: "Why It's Essential After Heart Conditions" },
                    { id: "vs-general", label: "General Physiotherapy vs Cardiac Physiotherapy" },
                    { id: "conditions", label: "Cardiac Conditions We Treat" },
                    { id: "heart-attack", label: "Post Heart Attack Rehabilitation" },
                    { id: "bypass", label: "Post Bypass Surgery (CABG) Recovery" },
                    { id: "angioplasty", label: "Post Angioplasty Recovery" },
                    { id: "heart-failure", label: "Heart Failure Rehabilitation" },
                    { id: "treatment-types", label: "Types of Treatments" },
                    { id: "assessment", label: "What We Check During Assessment" },
                    { id: "clinic-vs-home", label: "In-Clinic vs Home Visit" },
                    { id: "home-services", label: "Home Cardiac Physiotherapy" },
                    { id: "risks", label: "Risks Without Proper Cardiac Rehab" },
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
            {/* What Is */}
            <div id="what-is" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                What Is Cardiac Rehabilitation?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Cardiac rehabilitation is a medically guided recovery programme designed for people who have experienced heart disease, cardiac surgery, or a significant cardiac event. It is not a fitness programme. It is a clinical service that combines supervised exercise, breathing retraining, circulation support, endurance building, and lifestyle education all carefully calibrated to what the individual patient's heart can safely handle at each stage of recovery.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Coming home after a heart attack or bypass surgery feels like relief. But within a few days, most patients discover something nobody fully warned them about. Climbing stairs leaves them winded. A slow walk around the house feels harder than expected. This is not unusual. It is what happens when the heart and body have been through significant trauma. Cardiac rehabilitation exists precisely for this moment, the gap between leaving the hospital and feeling genuinely functional again.
              </p>
            </div>

            {/* Why Essential */}
            <div id="why-essential" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Cardiac Rehabilitation is Essential After Heart Conditions
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Heart surgery and cardiac events do not just affect the heart. They affect the entire body: the lungs, the muscles, the circulation, the nervous system, and the patient's confidence in their own physical capacity. Many people underestimate this. They expect to feel mostly normal within a week of discharge and are unprepared when simple tasks leave them breathless and drained.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Cardiac rehabilitation addresses the full picture of recovery. It improves stamina, restores breathing efficiency, rebuilds safe movement tolerance, and crucially helps patients understand what their body is telling them during exertion. Without it, the risk of prolonged weakness, poor exercise tolerance, anxiety-driven inactivity, and avoidable readmission increases significantly.
              </p>
            </div>

            {/* General vs Cardiac */}
            <div id="vs-general" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                General Physiotherapy vs Cardiac Physiotherapy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Not all physiotherapy is the same. General physiotherapy addresses musculoskeletal injuries, neurological recovery, and post-orthopaedic surgery rehabilitation. But cardiac patients have needs that fall outside standard physiotherapy practice. Cardiac physiotherapy follows a heart-safe exercise approach where every variable, including movement intensity, heart rate response, blood pressure changes, breathing pattern, oxygen saturation, and fatigue tolerance, is carefully monitored. Medications routinely prescribed after cardiac events, beta-blockers, diuretics, and anticoagulants, all affect how the body responds to exercise. A cardiac physiotherapist understands this and adjusts accordingly.
              </p>
            </div>

            {/* Conditions Overview */}
            <div id="conditions" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-6">
                Cardiac Conditions We Treat
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Post Heart Attack", desc: "Gradual, carefully monitored cardiovascular conditioning" },
                  { title: "Post Bypass Surgery (CABG)", desc: "Sternal healing, chest expansion, postural recovery" },
                  { title: "Post Angioplasty", desc: "Structured endurance rebuilding after procedure" },
                  { title: "Heart Failure", desc: "Slow, carefully paced progression with meticulous monitoring" },
                  { title: "Post Valve Surgery", desc: "Recovery after valve replacement or repair" },
                  { title: "General Cardiac Conditioning", desc: "For chronic illness, prolonged inactivity, or multiple risk factors" },
                ].map((condition) => (
                  <div key={condition.title} className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-1">{condition.title}</h4>
                    <p className="text-sm text-muted-foreground">{condition.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Heart Attack */}
            <div id="heart-attack" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Post Heart Attack Rehabilitation
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Heart attack patients often feel physically unstable even after medical stabilisation. Walking short distances may trigger anxiety because patients fear recurrence during exertion. Our approach starts with slowly monitored walking, breathing exercises, and gentle circulation work and builds trust alongside physical capacity. Many patients describe the moment they complete a walk they previously thought impossible as a turning point, not just physically but psychologically.
              </p>
            </div>

            {/* Bypass */}
            <div id="bypass" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Post Bypass Surgery (CABG) Recovery
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Post-CABG physiotherapy addresses a wider range of recovery challenges than most patients anticipate. The sternal incision restricts chest expansion and arm movement for weeks. Many patients develop a protective forward posture that, left unaddressed, becomes a source of long-term stiffness and discomfort. Recovery systematically works through chest mobility, breathing efficiency, postural restoration, and progressive endurance in the correct sequence and at the appropriate pace for sternal healing.
              </p>
            </div>

            {/* Angioplasty */}
            <div id="angioplasty" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Post Angioplasty Recovery
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Angioplasty recovery patients frequently underestimate rehabilitation needs because procedures appear less invasive externally. However, underlying cardiac weakness, stamina reduction, and circulation concerns may still affect daily function considerably. The relatively quick discharge after angioplasty can create a false sense of full recovery when the cardiovascular system still needs structured rehabilitation support. Cardiac rehab after angioplasty builds the physical conditioning and lifestyle habits that meaningfully reduce the risk of future events.
              </p>
            </div>

            {/* Heart Failure */}
            <div id="heart-failure" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Heart Failure Rehabilitation
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Heart failure rehabilitation operates under different rules from standard cardiac rehab. These patients fatigue more quickly, tolerate exertion less predictably, and may have very different capacity from one session to the next. Progress is slow and carefully paced. Monitoring is meticulous. These patients usually require slower progression compared to standard cardiac rehab cases because energy fluctuations and fatigue patterns vary significantly.
              </p>
            </div>

            {/* Treatment Types */}
            <div id="treatment-types" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Types of Cardiac Rehabilitation Treatments
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Monitored walking programmes",
                  "Low-resistance circulation exercises",
                  "Progressive endurance work",
                  "Functional movement training",
                  "Breathing and respiratory physiotherapy",
                  "Posture correction",
                  "Circulation exercises for DVT prevention",
                  "Energy management education",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-primary/5 rounded-xl p-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment */}
            <div id="assessment" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                What We Check During Cardiac Rehabilitation Assessment
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Every cardiac rehabilitation programme begins with a detailed assessment. Safe progression is impossible without an accurate picture of where the patient actually is, not where they should be at this stage of recovery, but where they actually are.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Heart rate and vital monitoring",
                  "Exercise tolerance testing",
                  "Breathing and oxygen level assessment",
                  "Strength and endurance evaluation",
                  "Risk factor assessment",
                  "Posture and movement analysis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 border border-border/50 rounded-lg p-3">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-Clinic vs Home */}
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
                    <li className="flex items-start gap-2">• Close monitoring during exercise progression</li>
                    <li className="flex items-start gap-2">• Immediate therapist response to warning signs</li>
                    <li className="flex items-start gap-2">• Controlled clinical setting for safety</li>
                    <li className="flex items-start gap-2">• Access to specialised cardiac rehab equipment</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Home className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">Home Visit</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">• No travel fatigue during early healing</li>
                    <li className="flex items-start gap-2">• Reduced infection exposure after surgery</li>
                    <li className="flex items-start gap-2">• Evaluate stair negotiation, household fatigue</li>
                    <li className="flex items-start gap-2">• Lower movement anxiety in familiar surroundings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Services */}
            <div id="home-services" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Cardiac Rehabilitation at Home in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Home cardiac physiotherapy services have grown significantly in demand, and for straightforward reasons. Many patients, particularly in the first weeks after major cardiac surgery, are simply not safe or comfortable travelling to a clinic. The journey itself, the physical effort, the stress, and the exposure to infection risk can be counterproductive during early healing phases. Post-cardiac surgery rehab at home removes these barriers without reducing clinical quality. Home sessions include vitals monitoring, structured exercise progression, breathing training, and circulation work delivered by a qualified home visit cardiac physiotherapist.
              </p>
            </div>

            {/* Risks */}
            <div id="risks" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Risks Without Proper Cardiac Rehab
              </h2>
              <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-5 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <p className="text-foreground/80 leading-relaxed">
                    Skipping cardiac rehabilitation has real, measurable consequences. Patients who remain sedentary after major cardiac events typically see significant endurance decline within two to three weeks. Walking distance drops. Fatigue arrives earlier. Simple activities that should gradually feel easier instead become progressively harder.
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Prolonged inactivity also increases risks beyond deconditioning: poor circulation raises the risk of deep vein thrombosis, reduced respiratory muscle use contributes to chest infections, weakened legs increase fall risk, and weight gain from inactivity places additional strain on a heart already working hard to recover. All of this is largely preventable through early, consistent, professionally guided cardiac rehabilitation.
              </p>
            </div>

            {/* Service Areas */}
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
                Why Choose Charan Physio for Cardiac Rehabilitation
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Experienced cardiac physiotherapists",
                  "Safe and supervised rehab programs",
                  "Personalized treatment plans",
                  "Home and clinic services available",
                  "Patient-focused care",
                  "Medically supervised progression",
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
                When Should You Start Cardiac Rehabilitation?
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                The answer is: as soon as medically appropriate, which is almost always earlier than patients expect. Medically, rehabilitation can often begin within one to two weeks of discharge for most cardiac patients, provided their condition is stable. Delayed rehabilitation creates avoidable problems. Patients remaining sedentary for weeks after surgery commonly develop severe endurance decline, posture stiffness, poor circulation, and anxiety during activity. Timely rehabilitation creates safer recovery pacing where activity increases steadily according to cardiovascular tolerance and medical recovery stage.
              </p>
            </div>

            {/* Benefits */}
            <div id="benefits" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Benefits of Cardiac Rehabilitation
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Faster recovery after surgery",
                  "Improved heart health through progressive conditioning",
                  "Better stamina and sustainable endurance",
                  "Reduced hospital readmission risk",
                  "Improved quality of life",
                  "Lower mortality rates",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 bg-primary/5 rounded-xl p-4">
                    <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost */}
            <div id="cost" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Cardiac Rehabilitation Treatment Cost in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Cardiac rehab treatment cost depends on recovery complexity, supervision level, treatment duration, therapist experience, home visit requirements, and the patient's physical condition during rehabilitation.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Clinic Sessions</h4>
                  <p className="text-sm text-muted-foreground">Generally more affordable. Includes structured supervision and equipment access.</p>
                </div>
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Home Visit Sessions</h4>
                  <p className="text-sm text-muted-foreground">Higher per session due to travel. Many patients find it worthwhile for reduced stress and better consistency during early recovery.</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mt-4 text-sm">
                <strong>Note:</strong> Patients should avoid choosing programmes purely based on low pricing because poorly supervised rehabilitation may delay recovery or create unsafe progression. Contact us for a personalised quote based on your individual situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardiacRehabilitation;