import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ChevronRight, MapPin, AlertTriangle, Home, Building2, Heart } from "lucide-react";
import { Link } from "react-router-dom";

type StickyMode = "relative" | "fixed" | "absolute";

const GeriatricPhysiotherapy = () => {
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
          Geriatric Physiotherapy in Hyderabad | Safe Elderly Rehabilitation – Sai Charan
        </title>

        <meta
          name="description"
          content="Expert geriatric physiotherapy in Hyderabad for elderly mobility, balance, fall prevention, arthritis, stroke recovery & post-surgery rehab. Home visits available. Book today."
        />

        <meta
          name="keywords"
          content="geriatric physiotherapy hyderabad, geriatric rehabilitation hyderabad, geriatric physiotherapist for seniors, elderly physiotherapy services hyderabad, senior rehabilitation therapy, geriatric pain management physiotherapy, mobility rehabilitation for elderly, balance training for seniors, fall prevention physiotherapy elderly, arthritis treatment physiotherapy seniors, post injury rehabilitation elderly, senior mobility improvement physiotherapy"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/services/geriatric-physiotherapy-in-hyderabad"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Geriatric Physiotherapy in Hyderabad | Safe Elderly Rehabilitation – Sai Charan"
        />

        <meta
          property="og:description"
          content="Specialized geriatric physiotherapy and elderly rehabilitation in Hyderabad for mobility improvement, balance training, arthritis care, and fall prevention."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/services/geriatric-physiotherapy-in-hyderabad"
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
          content="Geriatric Physiotherapy in Hyderabad | Elderly Rehabilitation"
        />

        <meta
          name="twitter:description"
          content="Expert elderly rehabilitation and geriatric physiotherapy care in Hyderabad."
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
            Geriatric Physiotherapy in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Maintain mobility, strength, and independence with specialised physiotherapy for seniors, addressing age-related weakness, balance problems, and fall prevention.
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
                    { id: "what-is", label: "What Is Geriatric Physiotherapy?" },
                    { id: "why-essential", label: "Why It's Essential for Elderly Care" },
                    { id: "vs-general", label: "General Physiotherapy vs Geriatric Physiotherapy" },
                    { id: "conditions", label: "Common Elderly Conditions We Treat" },
                    { id: "arthritis", label: "Arthritis & Joint Pain Management" },
                    { id: "stroke", label: "Stroke & Neurological Recovery" },
                    { id: "post-surgery", label: "Post-Surgery Rehabilitation for Elderly" },
                    { id: "balance", label: "Balance & Fall Prevention Therapy" },
                    { id: "weakness", label: "Muscle Weakness & Mobility Issues" },
                    { id: "treatment-types", label: "Types of Treatments" },
                    { id: "assessment", label: "What We Check During Assessment" },
                    { id: "clinic-vs-home", label: "In-Clinic vs Home Visit" },
                    { id: "home-services", label: "Home Physiotherapy for Elderly" },
                    { id: "risks", label: "Risks Without Proper Elderly Care" },
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
                What Is Geriatric Physiotherapy?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Geriatric physiotherapy focuses specifically on evaluating and treating movement problems, weakness, balance disorders, joint stiffness, and mobility limitations that affect older adults. Unlike standard rehabilitation designed primarily for younger populations, geriatric rehabilitation services account for age-related physical changes, reduced endurance, multiple medical conditions, and the specific fall risks that come with ageing.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Getting older quietly changes how the body moves. Muscle strength drops gradually, joints stiffen after sitting too long, balance becomes unpredictable, and simple tasks like getting up from a chair or walking to the kitchen start taking more effort than they once did. Many elderly individuals simply reduce activity, avoiding stairs, skipping outdoor walks, and holding walls while moving through the house without realising these adjustments are warning signs of deeper functional decline. Physiotherapy helps seniors rebuild strength, improve walking stability, reduce fall risk, manage pain more effectively, and regain the confidence to move independently.
              </p>
            </div>

            {/* Why Essential */}
            <div id="why-essential" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Geriatric Physiotherapy is Essential for Elderly Care
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ageing affects the body in layers. Muscle mass reduces year by year, joint cartilage wears down gradually, and reaction time slows. Balance reactions that once prevented stumbling become less reliable. Elderly individuals often notice these changes as stiffness after sitting, slower walking, hesitation at stairs, and unusual fatigue during activities that never felt difficult before.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Geriatric physiotherapy addresses these changes directly rather than waiting for mobility decline to reach a crisis point. It supports safe mobility improvement, pain management, walking confidence, and recovery after strokes, fractures, hospitalisations, or surgical procedures. Physiotherapy also addresses the psychological dimension many seniors become reluctant to walk or move independently after falling, experiencing dizziness, or dealing with persistent joint pain. Fear of movement, left unaddressed, often causes faster functional decline than the original physical problem itself.
              </p>
            </div>

            {/* General vs Geriatric */}
            <div id="vs-general" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                General Physiotherapy vs Geriatric Physiotherapy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                General physiotherapy may focus on aggressive strengthening, rapid return to activity, and performance-oriented recovery depending on the patient population. Geriatric physiotherapy follows a deliberately different approach because elderly patients require age-specific care that accounts for slower healing, reduced balance reserve, fatigue sensitivity, and multiple active medical conditions at the same time. Safety-focused rehabilitation becomes especially critical for seniors recovering from fractures, surgery, stroke, or significant deconditioning. Therapists carefully monitor walking stability, blood pressure response, breathing tolerance, and fatigue levels throughout sessions.
              </p>
            </div>

            {/* Conditions Overview */}
            <div id="conditions" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-6">
                Common Elderly Conditions We Treat
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Arthritis & Joint Pain", desc: "Stiffness, swelling, reduced walking tolerance" },
                  { title: "Stroke & Neurological Recovery", desc: "Gait training, balance exercises, transfer practice" },
                  { title: "Post-Surgery Rehabilitation", desc: "Fractures, joint replacement, abdominal surgery" },
                  { title: "Balance & Fall Prevention", desc: "Balance reactions, walking confidence, leg strength" },
                  { title: "Muscle Weakness", desc: "Post-hospitalisation, prolonged inactivity recovery" },
                  { title: "Age-Related Pain Disorders", desc: "Stiffness, tremors, poor posture, coordination loss" },
                ].map((condition) => (
                  <div key={condition.title} className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-1">{condition.title}</h4>
                    <p className="text-sm text-muted-foreground">{condition.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arthritis */}
            <div id="arthritis" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Arthritis & Joint Pain Management
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Arthritis causes stiffness, swelling, reduced walking tolerance, and pain during standing or stair climbing in many elderly patients. Many seniors significantly reduce movement because they worry that activity will worsen joint damage. In practice, complete inactivity typically increases stiffness and muscular weakness further, making movement more painful rather than protecting the joints. Physiotherapy focuses on improving joint mobility, muscular support, walking mechanics, and flexibility while reducing unnecessary joint stress during daily activities. Therapists also teach pacing strategies because elderly patients often swing between overactivity during good days and excessive rest during painful periods.
              </p>
            </div>

            {/* Stroke */}
            <div id="stroke" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Stroke & Neurological Recovery
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Stroke recovery in elderly patients progresses more slowly because of age-related weakness, balance deficits, fatigue, and the presence of other medical conditions. Many seniors become fearful of walking after experiencing one-sided weakness or a significant loss of balance. Rehabilitation, therefore, emphasises confidence building alongside physical recovery from the very beginning. Therapy commonly includes gait training, balance exercises, transfer practice, strengthening, coordination work, and mobility retraining. Families sometimes expect a quick recovery following hospital discharge, though neurological improvement often continues gradually across months of consistent rehabilitation.
              </p>
            </div>

            {/* Post Surgery */}
            <div id="post-surgery" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Post-Surgery Rehabilitation for Elderly
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Elderly patients recovering after fractures, joint replacement, abdominal surgery, or prolonged hospitalisation typically experience stiffness, weakness, and reduced endurance even after surgical healing proceeds normally. Simple activities such as standing from a chair or walking short distances may feel genuinely exhausting due to muscular deconditioning. Physiotherapy helps restore mobility safely while reducing fall risk throughout recovery. Therapists monitor walking stability, fatigue, swelling, and pain response carefully because elderly patients tolerate aggressive rehabilitation differently compared to younger adults.
              </p>
            </div>

            {/* Balance */}
            <div id="balance" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Balance & Fall Prevention Therapy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Fall prevention physiotherapy for elderly patients focuses heavily on balance reactions, walking confidence, leg strength, posture control, and environmental safety awareness. Many seniors reduce activity substantially after even minor falls when no significant injury occurs fear alone reshapes movement habits and confidence for months afterward. Therapists assess gait mechanics, standing stability, footwear habits, stair use patterns, and transfer ability while designing fall prevention programs. Families frequently overlook household hazards loose rugs, poor lighting, slippery bathroom flooring, or low seating arrangements that contribute meaningfully to fall risk.
              </p>
            </div>

            {/* Weakness */}
            <div id="weakness" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Muscle Weakness & Mobility Issues
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Geriatric rehab for weakness commonly becomes necessary after illness, hospitalisation, prolonged inactivity, or nutritional decline. Elderly patients lose muscle mass more rapidly during bed rest than younger individuals do, which explains why recovery after even relatively short illness periods can feel surprisingly difficult for seniors. Therapy focuses on rebuilding endurance gradually through walking practice, sit-to-stand exercises, targeted strengthening, posture work, and controlled mobility training. Therapists monitor fatigue carefully because overexertion may discourage elderly patients from maintaining rehabilitation consistency between sessions.
              </p>
            </div>

            {/* Treatment Types */}
            <div id="treatment-types" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Types of Geriatric Physiotherapy Treatments
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Mobility training",
                  "Strengthening exercises",
                  "Balance training",
                  "Posture correction",
                  "Flexibility work",
                  "Gait retraining",
                  "Breathing exercises",
                  "Functional movement practice",
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
                What We Check During Geriatric Physiotherapy Assessment
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                A proper elderly rehabilitation assessment covers considerably more than measuring strength or asking about pain. Therapists evaluate walking safety, balance reactions, endurance, posture, joint mobility, coordination, transfer ability, and functional independence during typical daily activities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Mobility and walking ability",
                  "Balance and fall risk evaluation",
                  "Muscle strength and endurance check",
                  "Joint flexibility and pain assessment",
                  "Daily activity function analysis",
                  "Environmental safety evaluation",
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
                    <li className="flex items-start gap-2">• Supervised balance and walking practice</li>
                    <li className="flex items-start gap-2">• Access to parallel bars and therapy equipment</li>
                    <li className="flex items-start gap-2">• Structured monitoring in controlled environment</li>
                    <li className="flex items-start gap-2">• Best for post-surgery and neurological recovery</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Home className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">Home Visit</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">• No travel fatigue for seniors</li>
                    <li className="flex items-start gap-2">• Identify real home hazards (rugs, lighting, stairs)</li>
                    <li className="flex items-start gap-2">• Caregiver training in actual environment</li>
                    <li className="flex items-start gap-2">• Ideal for severe weakness or balance instability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Services */}
            <div id="home-services" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Geriatric Physiotherapy at Home in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Home-based elderly rehabilitation has become increasingly necessary because many seniors experience fatigue, dizziness, pain, or balance instability during travel itself. Families frequently postpone appointments because arranging transportation and caregiver assistance adds physical and logistical stress for elderly patients. Home physiotherapy reduces travel fatigue and allows elderly patients to participate in therapy within familiar surroundings where anxiety remains lower. Many seniors perform movements more confidently at home than in unfamiliar clinic environments. Caregiver involvement is another significant advantage. Family members observe exercise techniques, safe transfer methods, and walking assistance strategies directly during sessions.
              </p>
            </div>

            {/* Risks */}
            <div id="risks" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Risks Without Proper Elderly Care
              </h2>
              <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-5 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <p className="text-foreground/80 leading-relaxed">
                    Without structured rehabilitation, many elderly patients gradually become dependent on caregivers for activities they previously managed independently. Weakness, poor balance, fear of falling, and chronic pain often combine to push seniors toward avoiding movement unnecessarily. Reduced activity causes further strength loss and walking instability, creating a cycle that becomes progressively harder to reverse.
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Falls remain among the most serious risks for elderly patients with untreated mobility problems. Even relatively minor balance deficits can lead to fractures, hospitalisation, or lasting fear of walking independently again. Therapists frequently see patients arriving considerably weaker after hospital stays because prolonged bed rest reduces muscular endurance rapidly in older adults.
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
                Why Choose Charan Physio for Geriatric Rehabilitation
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Experienced elderly care specialists",
                  "Safe and gentle therapy techniques",
                  "Personalized treatment plans",
                  "Home and clinic service options",
                  "Patient-centered approach",
                  "Long-term mobility preservation",
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
                When Should You Start Geriatric Physiotherapy?
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Geriatric rehabilitation should begin as soon as mobility decline, weakness, balance problems, or reduced activity tolerance become noticeable. Many families delay therapy until falls, hospitalisation, or severe dependence have already occurred. Earlier intervention generally preserves function more effectively because muscles, balance reactions, and walking confidence decline progressively when inactivity continues. Starting rehabilitation early substantially reduces long-term complications and supports seniors in remaining active safely for longer periods.
              </p>
            </div>

            {/* Benefits */}
            <div id="benefits" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Benefits of Geriatric Physiotherapy
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Increased independence in daily activities",
                  "Reduced fall risk and fall-related injuries",
                  "Improved mobility and walking confidence",
                  "Better pain management without medication",
                  "Enhanced quality of life and social participation",
                  "Preserved strength and endurance",
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
                Geriatric Physiotherapy Treatment Cost in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Families regularly ask about rehabilitation costs because geriatric physiotherapy often continues over longer periods than short-term injury recovery. Treatment duration depends heavily on mobility level, medical condition complexity, caregiver support availability, and session consistency.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Clinic Sessions</h4>
                  <p className="text-sm text-muted-foreground">Basic mobility training and supervised exercise sessions</p>
                </div>
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Home Visit Sessions</h4>
                  <p className="text-sm text-muted-foreground">Higher per session due to travel. Many families find it worthwhile for reduced patient stress and better real environment assessment</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mt-4 text-sm">
                <strong>Note:</strong> Steady moderate-frequency therapy maintained consistently usually delivers better outcomes than irregular intensive sessions interrupted by cost or fatigue. Families should evaluate rehabilitation quality and consistency rather than selecting treatment based solely on pricing. Contact us for a personalised quote based on your specific situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default GeriatricPhysiotherapy;