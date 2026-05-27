import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ChevronRight, MapPin, AlertTriangle, Home, Building2, Heart } from "lucide-react";
import { Link } from "react-router-dom";

type StickyMode = "relative" | "fixed" | "absolute";

const PediatricPhysiotherapy = () => {
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
          Best Pediatric Physiotherapy for Children in Hyderabad - Sai Charan
        </title>

        <meta
          name="description"
          content="Looking for pediatric physiotherapy in Hyderabad? Charan Physio offers expert child development physiotherapy, home visits, cerebral palsy rehab, autism support & more. Book now."
        />

        <meta
          name="keywords"
          content="pediatric physiotherapy hyderabad, child physiotherapy hyderabad, pediatric rehabilitation hyderabad, child rehabilitation therapy, developmental delay physiotherapy, cerebral palsy physiotherapy children, pediatric neurological physiotherapy, delayed milestones treatment physiotherapy, pediatric mobility therapy, balance and coordination therapy children, pediatric injury rehabilitation, physiotherapy for kids hyderabad"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/services/pediatric-physiotherapy-in-hyderabad"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best Pediatric Physiotherapy for Children in Hyderabad - Sai Charan"
        />

        <meta
          property="og:description"
          content="Specialized pediatric physiotherapy in Hyderabad for developmental delay, cerebral palsy, autism support, coordination issues, and child rehabilitation."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/services/pediatric-physiotherapy-in-hyderabad"
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
          content="Best Pediatric Physiotherapy in Hyderabad"
        />

        <meta
          name="twitter:description"
          content="Expert pediatric physiotherapy and child rehabilitation care in Hyderabad."
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
            Pediatric Physiotherapy in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Help your child reach developmental milestones, improve movement, and build confidence through specialised physiotherapy for infants, toddlers, and children.
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
                    { id: "what-is", label: "What Is Pediatric Physiotherapy?" },
                    { id: "why-essential", label: "Why It's Important for Child Development" },
                    { id: "vs-general", label: "General Physiotherapy vs Pediatric Physiotherapy" },
                    { id: "conditions", label: "Pediatric Conditions We Treat" },
                    { id: "cerebral-palsy", label: "Cerebral Palsy & Neurological Disorders" },
                    { id: "developmental-delay", label: "Developmental Delay & Milestone Issues" },
                    { id: "autism", label: "Autism Spectrum Therapy Support" },
                    { id: "hypotonia", label: "Low Muscle Tone (Hypotonia) Treatment" },
                    { id: "toe-walking", label: "Toe Walking & Flat Feet Correction" },
                    { id: "brain-injury", label: "Pediatric Brain Injury Rehabilitation" },
                    { id: "muscular-dystrophy", label: "Muscular Dystrophy Management" },
                    { id: "treatment-types", label: "Types of Treatments" },
                    { id: "assessment", label: "What We Check During Assessment" },
                    { id: "clinic-vs-home", label: "In-Clinic vs Home Visit" },
                    { id: "home-services", label: "Home Pediatric Physiotherapy" },
                    { id: "risks", label: "Risks of Ignoring Developmental Delays" },
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
                What Is Pediatric Physiotherapy?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Pediatric physiotherapy focuses on evaluating and improving movement, posture, balance, strength, coordination, and physical function across infants, toddlers, children, and adolescents. Unlike adult physiotherapy, pediatric treatment must adapt to the child's developmental stage, attention span, sensory tolerance, and neurological maturity rather than following standardized adult rehabilitation protocols.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Parents rarely notice movement concerns in children all at once. It starts slowly a baby who hasn't rolled by five months, a toddler still unsteady at eighteen months, or a child who trips constantly during play or avoids running with peers. Pediatric physiotherapy has become genuinely important because more parents are now seeking early guidance instead of waiting months for natural improvement that may not fully arrive on its own. Children respond very differently to rehabilitation compared to adults. They don't describe discomfort well, resist routine exercise, and tire faster than their visible energy might suggest.
              </p>
            </div>

            {/* Why Essential */}
            <div id="why-essential" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Pediatric Physiotherapy is Important for Child Development
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Movement quality during infancy and childhood shapes balance, coordination, strength, posture, and physical confidence throughout life. Children who face delayed milestones, low muscle tone, neurological conditions, or coordination difficulties may struggle with sitting, crawling, walking, and keeping pace with physical activity at school. Early physiotherapy intervention regularly improves long-term movement outcomes because the developing brain responds faster to motor retraining during early childhood than after movement compensations have been deeply established over years. Play is not a distraction from therapy for young children, play is the therapy.
              </p>
            </div>

            {/* General vs Pediatric */}
            <div id="vs-general" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                General Physiotherapy vs Pediatric Physiotherapy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                General physiotherapy primarily focuses on adult injury recovery, post-surgical rehabilitation, and pain management. Pediatric physiotherapy follows a completely different clinical approach because growing children require specialized assessment tools, age-appropriate communication, and developmental progression methods rather than standard adult injury recovery timelines. Play-based therapy techniques are not optional extras; they are essential because children rarely cooperate meaningfully with long repetitive exercise sequences. Therapists integrate games, obstacle challenges, balance tasks, and functional movement scenarios into each session.
              </p>
            </div>

            {/* Conditions Overview */}
            <div id="conditions" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-6">
                Pediatric Conditions We Treat
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Cerebral Palsy", desc: "Muscle control, posture, coordination, balance" },
                  { title: "Developmental Delay", desc: "Sitting, crawling, standing, walking milestones" },
                  { title: "Autism Spectrum", desc: "Motor planning, balance, body awareness, coordination" },
                  { title: "Low Muscle Tone (Hypotonia)", desc: "Postural control, head stability, sitting balance" },
                  { title: "Toe Walking & Flat Feet", desc: "Gait correction, strengthening, balance activities" },
                  { title: "Pediatric Brain Injury", desc: "Movement, coordination, posture, strength recovery" },
                  { title: "Muscular Dystrophy", desc: "Mobility preservation, flexibility, function" },
                  { title: "Coordination Disorders", desc: "Balance, motor planning, physical confidence" },
                ].map((condition) => (
                  <div key={condition.title} className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-1">{condition.title}</h4>
                    <p className="text-sm text-muted-foreground">{condition.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cerebral Palsy */}
            <div id="cerebral-palsy" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Cerebral Palsy & Neurological Disorders
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Cerebral palsy affects muscle control, posture, coordination, balance, and movement quality differently in every child. Some children primarily struggle with walking stiffness and lower limb control, while others face significant challenges with sitting balance, transfers, and basic independent mobility in daily life. Therapy typically focuses on posture control, stretching, targeted strengthening, gait training, balance exercises, and functional mobility improvement tailored to each child's presentation. Families sometimes become discouraged during neurological rehabilitation because progress occurs more slowly than in developmental cases. Consistent therapy, however, regularly improves movement efficiency, functional independence, and social participation in meaningful ways over time.
              </p>
            </div>

            {/* Developmental Delay */}
            <div id="developmental-delay" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Developmental Delay & Milestone Issues
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Children with developmental delays may reach milestones such as sitting, crawling, standing, or walking later than expected. Some children compensate using unusual movement strategies that initially work but eventually create balance and coordination difficulties as physical demands increase with age. Therapists assess milestone progression carefully, identifying weakness, postural instability, coordination deficits, and sensory-motor issues contributing to delayed development. Rehabilitation typically includes guided play activities, progressive strengthening, mobility training, and balance challenges adapted carefully to each child's developmental readiness, endurance, and attention capacity.
              </p>
            </div>

            {/* Autism */}
            <div id="autism" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Autism Spectrum Therapy Support
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Children on the autism spectrum sometimes experience movement coordination difficulties, balance problems, low muscle tone, poor postural control, or reduced body awareness alongside sensory and behavioral challenges. Pediatric physiotherapy for autism helps improve motor planning and movement confidence through structured sensory-friendly activities designed to match each child's specific tolerances. Therapists adapt communication styles carefully because many children on the spectrum respond poorly to direct verbal instructions or overstimulating environments. Building trust gradually becomes essential before meaningful physical participation becomes possible.
              </p>
            </div>

            {/* Hypotonia */}
            <div id="hypotonia" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Low Muscle Tone (Hypotonia) Treatment
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Physiotherapy for low muscle tone typically focuses on improving postural control, head stability, sitting balance, crawling ability, standing endurance, and overall muscular activation across the trunk and limbs. Hypotonia often causes children to appear floppy, tire quickly, and naturally avoid physically demanding movement. Treatment emphasizes gradual progressive strengthening and movement repetition without causing excessive fatigue. Children with low tone frequently require longer rehabilitation periods because endurance develops slowly. Parents sometimes reduce therapy frequency once walking begins, though continued strengthening work typically remains necessary to improve balance quality and long-term coordination.
              </p>
            </div>

            {/* Toe Walking */}
            <div id="toe-walking" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Toe Walking & Flat Feet Correction
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Physiotherapy for toe walking involves careful assessment of muscle tightness, sensory processing, balance, posture, and walking mechanics. Occasional toe walking during early walking attempts is developmentally common. Persistent toe walking beyond age three warrants professional assessment because it can progressively affect calf flexibility, balance, and walking efficiency. Physiotherapy for flat feet typically includes strengthening, posture training, gait correction exercises, balance activities, and footwear guidance. Children with flat feet sometimes report leg fatigue, reduced running endurance, or foot discomfort during prolonged activity.
              </p>
            </div>

            {/* Brain Injury */}
            <div id="brain-injury" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pediatric Brain Injury Rehabilitation
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Pediatric rehab for brain injury focuses on restoring movement, coordination, posture control, strength, balance, and functional independence following traumatic or neurological injury. Recovery outcomes vary significantly depending on injury severity, age at injury, and rehabilitation consistency. Children recovering after a brain injury often fatigue rapidly and struggle to maintain concentration during therapy. Therapists balance physical rehabilitation with appropriately shorter, engaging activity formats suited to the child's cognitive tolerance at each recovery stage.
              </p>
            </div>

            {/* Muscular Dystrophy */}
            <div id="muscular-dystrophy" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Muscular Dystrophy Management
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Physiotherapy for muscular dystrophy aims to preserve mobility, posture, flexibility, and functional independence as long as possible while preventing complications from progressive muscle weakness. Treatment emphasizes maintaining safe function rather than aggressive strengthening that may increase fatigue excessively. Therapists monitor endurance carefully because children with muscular dystrophy often overexert during good energy periods and experience significant fatigue subsequently. Rehabilitation also includes caregiver education regarding safe positioning, mobility assistance, and energy conservation strategies.
              </p>
            </div>

            {/* Treatment Types */}
            <div id="treatment-types" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Types of Pediatric Physiotherapy Treatments
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Motor skill training",
                  "Balance and coordination exercises",
                  "Strengthening activities",
                  "Gait retraining",
                  "Posture correction",
                  "Stretching programs",
                  "Functional mobility work",
                  "Sensory-motor integration",
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
                What We Check During Pediatric Physiotherapy Assessment
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                A thorough pediatric assessment evaluates much more than visible movement delay alone. Therapists assess posture, muscle tone, strength, balance, coordination, milestone progression, walking mechanics, physical endurance, and body control through both structured testing and careful observation during free play.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Motor skill development",
                  "Balance and coordination",
                  "Muscle strength and tone",
                  "Posture and movement analysis",
                  "Milestone progress evaluation",
                  "Sensory tolerance and attention",
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
                In-Clinic vs Home Visit: Which One Is Right for Your Child?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">In-Clinic</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">• Access to therapy equipment and balance tools</li>
                    <li className="flex items-start gap-2">• Supervised gait training in controlled environment</li>
                    <li className="flex items-start gap-2">• Helps develop structured instruction following</li>
                    <li className="flex items-start gap-2">• Best for coordination and cerebral palsy</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Home className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">Home Visit</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">• No travel fatigue for children</li>
                    <li className="flex items-start gap-2">• Observe natural movement in familiar environment</li>
                    <li className="flex items-start gap-2">• Identify home barriers (flooring, play space)</li>
                    <li className="flex items-start gap-2">• Ideal for infants and sensory sensitive children</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Services */}
            <div id="home-services" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pediatric Physiotherapy at Home in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Home-based rehabilitation has grown meaningfully in value for children who become anxious in clinical settings, fatigue easily during travel, or benefit most from therapy integrated naturally into daily routines. Children often participate more naturally during home-based rehabilitation because familiar surroundings reduce anxiety and sensory overload. Therapists can integrate exercises directly into existing daily play using toys, household furniture, stairs, and movement opportunities the child already encounters regularly. Home therapy also significantly improves caregiver involvement as parents observe handling techniques, positioning strategies, milestone activities, and exercise methods directly during sessions.
              </p>
            </div>

            {/* Risks */}
            <div id="risks" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Risks of Ignoring Developmental Delays
              </h2>
              <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-5 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <p className="text-foreground/80 leading-relaxed">
                    Well-meaning family members often reassure parents that every child develops at their own pace. Minor developmental variation is normal. But persistent delays in sitting, crawling, walking, balance, or coordination that don't self-correct within reasonable windows should be professionally assessed rather than managed with continued waiting alone.
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Delayed rehabilitation allows compensatory movement patterns to solidify. Children may develop deeply ingrained abnormal walking mechanics, progressively avoid physical challenges, or build a negative relationship with movement that affects them well beyond early childhood. Early physiotherapy intervention supports brain and movement development during the period when children remain most neurologically adaptable.
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
                Why Choose Charan Physio for Pediatric Physiotherapy
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Experienced pediatric physiotherapists",
                  "Child-friendly therapy approach",
                  "Personalized treatment plans",
                  "Home and clinic services available",
                  "Focus on development and recovery",
                  "Play-based engaging sessions",
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
                When Should You Start Pediatric Physiotherapy?
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Many parents wait while hoping improvement arrives naturally, especially when children show some independent progress. Consulting a pediatric physiotherapist early does not automatically indicate a severe condition. Early assessment frequently identifies mild developmental delays, posture concerns, or coordination differences before they create significant movement limitations affecting school participation, physical confidence, and social development later in childhood. Delayed milestones in babies, after birth complications, developmental disorders, injury, or neurological conditions are all appropriate times to seek professional assessment.
              </p>
            </div>

            {/* Benefits */}
            <div id="benefits" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Benefits of Pediatric Physiotherapy
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Achieve developmental milestones",
                  "Improved movement coordination and balance",
                  "Increased strength and endurance",
                  "Better posture and walking patterns",
                  "Enhanced confidence and independence",
                  "Reduced risk of secondary complications",
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
                Pediatric Physiotherapy Treatment Cost in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Parents naturally worry about whether sustained pediatric rehabilitation will become financially difficult, especially when therapy may continue across many months. Pediatric physiotherapy treatment cost depends significantly on condition severity, required session frequency, therapist experience, home versus clinic preference, and overall rehabilitation complexity.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Clinic Sessions</h4>
                  <p className="text-sm text-muted-foreground">Foundational clinic sessions remain more accessible financially. Includes equipment access and structured supervision.</p>
                </div>
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Home Visit Sessions</h4>
                  <p className="text-sm text-muted-foreground">Higher per session due to travel. Many families find it worthwhile for reduced child stress and better real environment assessment.</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mt-4 text-sm">
                <strong>Note:</strong> Consistency over time matters far more than extremely intensive short-term therapy that families cannot financially sustain beyond the first few weeks. Contact us for a personalised quote based on your child's specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PediatricPhysiotherapy;