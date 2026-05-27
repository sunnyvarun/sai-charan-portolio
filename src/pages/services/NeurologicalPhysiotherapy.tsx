import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ChevronRight, MapPin, AlertTriangle, Home, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

type StickyMode = "relative" | "fixed" | "absolute";

const NeurologicalPhysiotherapy = () => {
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
          Best Neuro Physiotherapy Specialist in Hyderabad - Sai Charan
        </title>

        <meta
          name="description"
          content="Struggling with stroke, Parkinson’s, or nerve issues? Get expert neuro physiotherapy in Hyderabad by Dr Sai Charan with advanced rehabilitation and proven recovery care."
        />

        <meta
          name="keywords"
          content="neurological physiotherapy, physiotherapy in neurological conditions, neurological physiotherapy in Hyderabad, neuro physiotherapy in Hyderabad, neurological physiotherapy near me, neuro physiotherapist near me, stroke rehabilitation Hyderabad, paralysis physiotherapy treatment, Parkinson's physiotherapy Hyderabad, spinal cord injury physiotherapy"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/services/neuro-physiotherapy-in-hyderabad"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best Neuro Physiotherapy Specialist in Hyderabad - Sai Charan"
        />

        <meta
          property="og:description"
          content="Expert neurological physiotherapy in Hyderabad for stroke, paralysis, Parkinson's disease, spinal cord injury, and neuro rehabilitation."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/services/neuro-physiotherapy-in-hyderabad"
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
          content="Best Neuro Physiotherapy Specialist in Hyderabad"
        />

        <meta
          name="twitter:description"
          content="Advanced neuro rehabilitation and neurological physiotherapy care in Hyderabad."
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
            Neurological Physiotherapy in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Restore movement, balance, coordination, and independence after stroke, spinal cord injury, Parkinson's, and other neurological conditions.
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
                    { id: "what-is", label: "What Is Neurological Physiotherapy?" },
                    { id: "why-different", label: "Why It's Different from General Physiotherapy" },
                    { id: "conditions", label: "Conditions We Treat" },
                    { id: "stroke", label: "Stroke & Brain Stroke Rehabilitation" },
                    { id: "paralysis", label: "Paralysis Recovery" },
                    { id: "spinal-cord", label: "Spinal Cord Injury" },
                    { id: "parkinsons", label: "Parkinson's Disease" },
                    { id: "cerebral-palsy", label: "Cerebral Palsy" },
                    { id: "brain-injury", label: "Brain Injury Rehabilitation" },
                    { id: "assessment", label: "What Happens During Assessment" },
                    { id: "clinic-vs-home", label: "In-Clinic vs Home Visit" },
                    { id: "home-services", label: "Home Neurological Physiotherapy" },
                    { id: "why-early", label: "Why Starting Early Matters" },
                    { id: "areas", label: "Service Areas" },
                    { id: "why-us", label: "Why Choose Charan Physio" },
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
                What Is Neurological Physiotherapy?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Recovering from a stroke, spinal cord injury, or any condition affecting the nervous system is unlike healing a broken bone. The nervous system does not follow a neat schedule. Progress can be painfully slow on some days and surprisingly encouraging on others. Many families in Hyderabad discover this reality only after discharge from the hospital, when the real work of rehabilitation begins at home.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Neurological physiotherapy focuses on restoring what neurological damage takes away: movement, balance, coordination, posture, and the quiet confidence a person has when moving through their own home safely. Whether a patient is dealing with stroke related weakness, paralysis, Parkinson's disease, or a spinal cord injury, structured, purposeful recovery support is essential.
              </p>
            </div>

            {/* Why Different */}
            <div id="why-different" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Neurological Rehabilitation Requires a Different Clinical Approach
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Many people assume physiotherapy is broadly the same regardless of diagnosis, but that is not true. Neurological physiotherapy is built on a very different foundation compared to standard musculoskeletal care. In mechanical injuries such as muscle tears or post-surgical recovery, treatment often focuses on strengthening tissues, restoring range of motion, and reducing pain.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Neurological rehabilitation is different because the problem occurs at the signalling level. The brain, spinal cord, or peripheral nerves lose the ability to communicate movement instructions effectively. This specialised approach focuses on rewiring those disrupted neural pathways through a process called neuroplasticity, using repetitive, guided movement to encourage the nervous system to develop alternative pathways.
              </p>
            </div>

            {/* Conditions Overview */}
            <div id="conditions" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-6">
                Neurological Conditions We Treat
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Stroke", desc: "Hemiplegia, walking difficulties, balance impairment" },
                  { title: "Paralysis", desc: "Complete or partial loss of movement control" },
                  { title: "Spinal Cord Injury", desc: "Trunk control, transfer training, standing work" },
                  { title: "Parkinson's Disease", desc: "Stiffness, freezing episodes, postural instability" },
                  { title: "Cerebral Palsy", desc: "Muscle tightness, coordination impairments, gait issues" },
                  { title: "Brain Injury", desc: "Physical weakness, balance, coordination, cognitive slowing" },
                ].map((condition) => (
                  <div key={condition.title} className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-1">{condition.title}</h4>
                    <p className="text-sm text-muted-foreground">{condition.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stroke */}
            <div id="stroke" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Stroke and Brain Stroke Rehabilitation
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Stroke recovery remains one of the most demanding areas in neurological physiotherapy. Most stroke patients face weakness or paralysis on one side, altered sensation, balance instability, and walking difficulties that are profoundly limiting in daily life. Neurological physiotherapy for stroke recovery works through progressive stages: early sessions address sitting balance and safe bed mobility, middle phase introduces walking practice and stair training, advanced recovery focuses on endurance and coordination.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Families often mistake early walking ability for complete recovery. Patients may still struggle with fatigue, uneven gait, or reduced arm function for many months beyond the point when walking resumes. Both clinic based and home visit options are available because recovery depth depends on therapy reaching into a patient's actual daily routine.
              </p>
            </div>

            {/* Paralysis */}
            <div id="paralysis" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Paralysis Recovery
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Paralysis physiotherapy treatment must begin early to prevent secondary complications from prolonged immobility. Muscle tightness develops fast, and joint stiffness can become permanent without regular movement. Pressure sores, circulation problems, and severe contractures are largely preventable when consistent physiotherapy is provided from early stages. Treatment includes assisted joint movement, muscle activation work, bed mobility training, and gradual standing progression wherever nerve recovery allows. Caregiver education forms a major part of this work because rehabilitation must continue between sessions.
              </p>
            </div>

            {/* Spinal Cord */}
            <div id="spinal-cord" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Spinal Cord Injury
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Physiotherapy for spinal cord injury is complex. Recovery depends on injury level, how much neural tissue remains intact, and how soon rehabilitation begins. Therapy adapts to whatever functional potential exists. Waiting to see how much movement returns before starting physiotherapy wastes critical early recovery time. Sessions cover trunk control, transfer training from bed to wheelchair and back, standing frame work where appropriate, and breathing exercises when thoracic or cervical injuries affect respiratory muscles.
              </p>
            </div>

            {/* Parkinson's */}
            <div id="parkinsons" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Parkinson's Disease
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Parkinson's physiotherapy addresses a disease that progresses gradually, affecting movement quality long before patients feel truly disabled. Tremors attract most attention early on, but stiffness, slowed movement, freezing episodes, and progressive postural instability are what ultimately reduce daily independence. Many patients delay therapy until they have fallen or can no longer manage basic tasks. Starting earlier preserves more function. Therapy focuses on large amplitude movement training, rhythm based gait exercises, posture correction, and balance retraining that specifically counters the forward leaning, shuffling gait pattern Parkinson's creates.
              </p>
            </div>

            {/* Cerebral Palsy */}
            <div id="cerebral-palsy" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Cerebral Palsy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Cerebral palsy physiotherapy treatment addresses muscle tightness, coordination impairments, altered gait mechanics, and postural abnormalities that gradually worsen if left unmanaged. Many people assume cerebral palsy treatment is relevant only in childhood. In reality, patients benefit from physiotherapy support well into adulthood because physical demands change, muscle tightness can worsen with growth, and maintaining functional independence requires sustained effort. Treatment includes targeted stretching, strengthening, gait retraining, and task specific practice.
              </p>
            </div>

            {/* Brain Injury */}
            <div id="brain-injury" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Brain Injury Rehabilitation
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Neuro rehab for brain injury following trauma, oxygen deprivation, or infection involves rebuilding multiple systems simultaneously. Physical weakness, balance impairment, coordination deficits, cognitive slowness, and altered reaction timing may all be present. Recovery often fluctuates unpredictably. Some sessions show real progress. Others feel like a regression. Families become discouraged during these phases, sometimes reducing therapy frequency at precisely the moments when consistent input matters most. Structured neuro rehabilitation helps maintain a realistic trajectory despite these natural fluctuations.
              </p>
            </div>

            {/* Assessment */}
            <div id="assessment" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                What Happens During a Neurological Physiotherapy Assessment
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The initial assessment is the most important hour in any rehabilitation program. Rushed or superficial assessment produces treatment plans that miss the actual problems. A thorough evaluation covers far more than a patient's formal diagnosis.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Posture in sitting and standing",
                  "Balance responses during movement transitions",
                  "Gait analysis (step length, trunk stability, arm swing)",
                  "Muscle tone evaluation (spasticity assessment)",
                  "Sensory testing (limb position, surface contact)",
                  "Functional independence assessment",
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
                    <li className="flex items-start gap-2">• Parallel bars for supported walking practice</li>
                    <li className="flex items-start gap-2">• Balance platforms and specialised equipment</li>
                    <li className="flex items-start gap-2">• Progressive stair training under supervision</li>
                    <li className="flex items-start gap-2">• Systematic session after session clinical observation</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Home className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">Home Visit</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">• Observe actual bedroom layout, bathroom access, steps</li>
                    <li className="flex items-start gap-2">• No travel exhaustion before therapy begins</li>
                    <li className="flex items-start gap-2">• Caregiver training in real environment</li>
                    <li className="flex items-start gap-2">• Address specific home safety risks directly</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Services */}
            <div id="home-services" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Neuro Physiotherapy at Home in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Travelling to a physiotherapy clinic multiple times per week creates a real barrier for many neurological patients. Elderly stroke survivors, patients recovering from severe paralysis, and individuals with advanced Parkinson's disease often exhaust themselves during travel preparation alone, leaving little energy for actual rehabilitation. Home neuro physiotherapy addresses this by bringing structured rehabilitation directly into the patient's living environment. Beyond convenience, home sessions provide clinical information that clinic visits cannot replicate.
              </p>
            </div>

            {/* Why Early Matters */}
            <div id="why-early" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Starting Neurological Physiotherapy Early Matters
              </h2>
              <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-5 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <p className="text-foreground/80 leading-relaxed">
                    The window of maximum neural recovery after stroke or brain injury is roughly the first three to six months. Therapy during this window substantially improves functional outcomes compared to delayed intervention. Every week of inactivity allows stiffness, muscle wasting, and compensatory patterns to become more established.
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                For chronic neurological conditions such as Parkinson's disease, early physiotherapy support means preventive care. Patients who begin therapy before significant functional decline tend to preserve independence considerably longer than those who start only when daily tasks have already become severely impaired. Preventive rehabilitation is more effective than recovery rehabilitation.
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
                Why Choose Charan Physio for Neurological Rehabilitation
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Experienced neurological physiotherapists",
                  "Home and clinic treatment options",
                  "Personalised rehabilitation programs",
                  "Neuroplasticity focused techniques",
                  "Caregiver training and support",
                  "Long term recovery planning",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div id="benefits" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Benefits of Neurological Physiotherapy
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Improved mobility and walking ability",
                  "Better balance and fall prevention",
                  "Reduced muscle stiffness and spasticity",
                  "Enhanced independence in daily activities",
                  "Improved posture and coordination",
                  "Better quality of life and confidence",
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
                Neuro Physiotherapy Treatment Cost in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Neuro physiotherapy treatment cost varies based on condition severity, session frequency, whether therapy occurs at home or in a clinic, travel distance for home visits, and therapist experience level.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Clinic Sessions</h4>
                  <p className="text-sm text-muted-foreground">Typically range based on assessment complexity and specialised care requirements</p>
                </div>
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Home Visit Sessions</h4>
                  <p className="text-sm text-muted-foreground">Higher per session due to travel. Many families find it worthwhile for reduced patient stress and better real environment rehabilitation</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mt-4 text-sm">
                <strong>Note:</strong> Sustainable therapy planning matters more than aggressive short term intensity. Patients who maintain consistent sessions over several months typically achieve better outcomes than those who do intensive therapy for a short period then stop. Contact us for an accurate quote based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NeurologicalPhysiotherapy;