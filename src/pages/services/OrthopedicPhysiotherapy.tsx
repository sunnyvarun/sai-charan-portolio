import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, ChevronRight, MapPin, AlertTriangle, Home, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

type StickyMode = "relative" | "fixed" | "absolute";

const OrthopedicPhysiotherapy = () => {
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
          Orthopedic Physiotherapy in Hyderabad | Pain Relief & Recovery – Sai Charan
        </title>

        <meta
          name="description"
          content="Expert orthopaedic physiotherapy in Hyderabad for back pain, knee pain, shoulder pain, neck pain, sports injuries & post-surgery rehab. Home visits available. Book now."
        />

        <meta
          name="keywords"
          content="orthopedic physiotherapy Hyderabad, orthopedic rehabilitation Hyderabad, joint pain physiotherapy, back pain treatment Hyderabad, knee pain rehab, sports injury rehabilitation, physiotherapy clinic Hyderabad, orthopedic injury treatment, mobility rehabilitation, musculoskeletal physiotherapy"
        />

        <link
          rel="canonical"
          href="https://charanphysio.com/services/orthopedic-physiotherapy-rehabilitation-in-hyderabad"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Orthopedic Physiotherapy in Hyderabad | Pain Relief & Recovery – Sai Charan"
        />

        <meta
          property="og:description"
          content="Expert orthopedic physiotherapy and rehabilitation in Hyderabad for pain relief, mobility restoration, injury recovery, and post-surgical rehabilitation."
        />

        <meta
          property="og:url"
          content="https://charanphysio.com/services/orthopedic-physiotherapy-rehabilitation-in-hyderabad"
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
          content="Orthopedic Physiotherapy in Hyderabad | Pain Relief & Recovery"
        />

        <meta
          name="twitter:description"
          content="Advanced orthopedic rehabilitation and physiotherapy treatment in Hyderabad."
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
            Orthopedic Physiotherapy in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Restore mobility, reduce pain, and recover from musculoskeletal conditions with expert orthopedic rehabilitation.
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
                    { id: "what-is", label: "What Is Orthopedic Physiotherapy?" },
                    { id: "why-essential", label: "Why It's Essential for Pain Relief" },
                    { id: "conditions", label: "Orthopedic Conditions We Treat" },
                    { id: "back-pain", label: "Back Pain & Slip Disc" },
                    { id: "knee-pain", label: "Knee Pain & Ligament Injuries" },
                    { id: "shoulder-pain", label: "Shoulder Pain & Frozen Shoulder" },
                    { id: "neck-pain", label: "Neck Pain & Cervical Issues" },
                    { id: "sports-injury", label: "Sports Injury Rehabilitation" },
                    { id: "fracture", label: "Fracture & Post-Surgery Recovery" },
                    { id: "arthritis", label: "Arthritis & Joint Degeneration" },
                    { id: "assessment", label: "What We Check During Assessment" },
                    { id: "clinic-vs-home", label: "In-Clinic vs Home Visit" },
                    { id: "home-services", label: "Home Orthopedic Physiotherapy" },
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
                What Is Orthopedic Physiotherapy?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Orthopedic physiotherapy focuses on diagnosing, managing, and rehabilitating conditions affecting bones, joints, muscles, ligaments, tendons, and connective tissues. Unlike general wellness exercise guidance, orthopedic physiotherapy treatment is structured around specific pain patterns, movement restrictions, and functional limitations that affect how a person works, exercises, and manages daily life.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Patients may seek treatment for acute injuries, chronic pain, degenerative joint conditions, post-surgical recovery, or repetitive strain issues caused by prolonged poor posture and sedentary habits. Effective treatment combines short-term pain management with long-term movement correction, reducing the likelihood of repeated flare-ups.
              </p>
            </div>

            {/* Why Essential */}
            <div id="why-essential" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Orthopedic Physiotherapy is Essential for Pain Relief
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Musculoskeletal pain affects daily function quietly at first. People continue working through mild back discomfort, ignore occasional knee aching after stairs, or adapt to neck stiffness by moving differently. These small adjustments accumulate over months. Joints take abnormal loads, and muscles activate unevenly. Movement becomes less efficient without anyone consciously realizing it.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Orthopedic physiotherapy interrupts this process by identifying movement dysfunction before it produces wider problems. Individuals who engage early typically require fewer sessions and return to normal function faster than those who wait until daily life is seriously disrupted. If movement has changed even subtly because of discomfort, that is reason enough to seek assessment.
              </p>
            </div>

            {/* Conditions Overview */}
            <div id="conditions" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-6">
                Orthopedic Conditions We Treat
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Back Pain & Slip Disc", desc: "Lumbar strain, disc irritation, nerve compression" },
                  { title: "Knee Pain & Ligament Injuries", desc: "Cartilage wear, ligament tears, muscular imbalance" },
                  { title: "Shoulder Pain & Frozen Shoulder", desc: "Rotator cuff issues, stiffness, limited mobility" },
                  { title: "Neck Pain & Cervical Issues", desc: "Stiffness, headaches, arm tingling, posture related" },
                  { title: "Sports Injuries", desc: "Muscle strains, ankle sprains, tendon irritation" },
                  { title: "Fracture & Post-Surgery", desc: "Joint replacement, ligament reconstruction, fracture fixation" },
                  { title: "Arthritis & Joint Degeneration", desc: "Osteoarthritis, rheumatoid arthritis, joint stiffness" },
                  { title: "Posture Related Pain", desc: "Desk work, ergonomic issues, repetitive strain" },
                ].map((condition) => (
                  <div key={condition.title} className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-1">{condition.title}</h4>
                    <p className="text-sm text-muted-foreground">{condition.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Back Pain */}
            <div id="back-pain" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Back Pain & Slip Disc Treatment
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Lower back pain may result from muscle strain, prolonged sitting, poor lifting mechanics, disc irritation, joint stiffness, or nerve compression. Many patients assume all back pain means permanent disc damage, though a significant proportion of cases improve through movement correction and targeted strengthening. Complete bed rest during acute back pain episodes is one of the most common mistakes patients make. Short rest helps during severe flare-ups, but prolonged immobility worsens stiffness and muscular weakness substantially. Therapists guide patients through controlled movement progression earlier than many expect.
              </p>
            </div>

            {/* Knee Pain */}
            <div id="knee-pain" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Knee Pain & Ligament Injuries
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Knee pain affects all age groups: athletes with ligament injuries, middle-aged adults with cartilage wear, and older individuals developing muscular imbalance around the joint. Ligament injury physiotherapy requires careful progression because patients often either rush return to activity or become excessively fearful of movement after injury. Both extremes delay proper recovery and raise reinjury risk. Rehabilitation commonly includes quadriceps strengthening, hip stability work, balance training, gait correction, and controlled loading exercises that gradually restore joint support.
              </p>
            </div>

            {/* Shoulder Pain */}
            <div id="shoulder-pain" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Shoulder Pain & Frozen Shoulder
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Shoulder problems are particularly limiting because even minor restrictions affect dressing, grooming, lifting, and sleeping comfort. Frozen shoulder patients frequently delay therapy, assuming stiffness will resolve naturally. By the time treatment begins, shoulder movement may already be severely restricted and painful in multiple directions. Orthopedic rehabilitation for shoulder conditions combines mobility restoration, posture correction, manual therapy, and gradual strengthening. Fear of arm movement due to pain is common, but complete avoidance consistently worsens stiffness.
              </p>
            </div>

            {/* Neck Pain */}
            <div id="neck-pain" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Neck Pain & Cervical Issues
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Neck pain and cervical dysfunction have become increasingly common among office workers, drivers, and anyone spending extended hours using mobile devices. Patients describe stiffness, headaches, shoulder tightness, arm tingling, or reduced neck rotation after prolonged sitting or poor sleeping posture. Treatment focuses on posture correction, mobility restoration, muscular strengthening, ergonomic guidance, and reducing mechanical overload around the cervical spine. Upper back mechanics are also evaluated because thoracic stiffness is a common driver of persistent neck strain.
              </p>
            </div>

            {/* Sports Injury */}
            <div id="sports-injury" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Sports Injury Rehabilitation
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Sports injury physiotherapy programs manage conditions from muscle strains and ankle sprains to tendon irritation and ligament tears. Athletes often face pressure to return quickly, leading to incomplete rehabilitation and repeated injury cycles. Reduced pain does not mean tissues are fully prepared for sports demands. Rehabilitation progresses through clearly defined phases: pain control, mobility restoration, strength rebuilding, balance and coordination retraining, and finally sport-specific movement preparation.
              </p>
            </div>

            {/* Fracture */}
            <div id="fracture" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Fracture & Post-Surgery Recovery
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Fracture rehabilitation becomes essential after immobilization because joints stiffen and muscles weaken rapidly during casting or restricted activity periods. Patients often expect normal movement to return automatically once structural fracture healing progresses. In reality, weakness, swelling, fear of movement, and restricted joint mobility can persist for months without guided rehabilitation. Post-surgery physiotherapy helps patients recover safely after joint replacements, ligament reconstruction, spinal procedures, or orthopedic repairs.
              </p>
            </div>

            {/* Arthritis */}
            <div id="arthritis" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Arthritis & Joint Degeneration Treatment
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Arthritis physiotherapy focuses on preserving joint mobility, reducing stiffness, and improving movement efficiency despite degenerative changes. Many patients assume arthritis means rest and progressive decline, but inactivity consistently worsens both joint stiffness and muscular weakness. Controlled movement remains essential even when structural degeneration is present and cannot be reversed. Therapists guide patients through low-impact strengthening, flexibility exercises, gait correction, balance work, and activity modification strategies.
              </p>
            </div>

            {/* Assessment */}
            <div id="assessment" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                What We Check During Orthopedic Physiotherapy Assessment
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                A proper orthopedic assessment involves far more than asking where pain is located. Patients frequently describe symptoms in one area while dysfunction originates elsewhere in the movement chain. Experienced therapists evaluate how joints move together, how muscles support movement, and how posture affects mechanical loading during daily activities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Joint mobility and range of motion",
                  "Muscle strength and imbalance check",
                  "Posture and alignment evaluation",
                  "Pain source identification",
                  "Functional movement analysis",
                  "Gait and walking mechanics",
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
                    <li className="flex items-start gap-2">• Specialised equipment for progressive recovery</li>
                    <li className="flex items-start gap-2">• Direct therapist supervision and movement correction</li>
                    <li className="flex items-start gap-2">• Controlled environment for demanding exercises</li>
                    <li className="flex items-start gap-2">• Best for post-surgical and chronic conditions</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Home className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">Home Visit</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">• No travel stress for severe pain patients</li>
                    <li className="flex items-start gap-2">• Real environment assessment (sofa height, stairs, bathroom)</li>
                    <li className="flex items-start gap-2">• Caregiver training in actual home setting</li>
                    <li className="flex items-start gap-2">• Ideal for elderly, post-surgery, arthritis patients</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Services */}
            <div id="home-services" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Orthopedic Physiotherapy at Home in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Home rehabilitation has become increasingly common because many orthopedic patients genuinely struggle to maintain regular clinic visits during painful recovery phases. Long travel, traffic, stairs, or prolonged sitting during transport worsens symptoms before treatment even begins. Home orthopedic physiotherapy programs also provide a more realistic picture of how pain affects daily function. Therapists observe work setup, sleeping arrangement, furniture height, walking space, and lifting habits directly in the patient's environment.
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
                Why Choose Charan Physio for Orthopedic Physiotherapy
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Experienced orthopedic physiotherapists",
                  "Advanced manual therapy techniques",
                  "Personalized treatment plans",
                  "Home and clinic treatment options",
                  "Patient-centered care",
                  "Long-term recovery and prevention focus",
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
                When Should You Start Orthopedic Physiotherapy?
              </h2>
              <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-5 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <p className="text-foreground/80 leading-relaxed">
                    Orthopedic rehabilitation should begin as early as possible once pain, stiffness, or movement restriction starts interfering with normal daily function. Waiting too long allows muscular weakness, compensation patterns, and joint stiffness to become more firmly established and harder to reverse.
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Early physiotherapy shortens recovery because tissues retain better mobility and strength before prolonged inactivity sets in. Even chronic orthopedic conditions improve meaningfully when rehabilitation begins consistently rather than relying on temporary pain relief through medication alone.
              </p>
            </div>

            {/* Benefits */}
            <div id="benefits" className="scroll-mt-24">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-foreground mb-4">
                Benefits of Orthopedic Physiotherapy
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Natural pain relief without medication dependency",
                  "Improved mobility and joint function",
                  "Faster recovery after injury or surgery",
                  "Prevention of future injuries and flare-ups",
                  "Better posture and movement efficiency",
                  "Reduced risk of chronic pain development",
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
                Orthopedic Physiotherapy Treatment Cost in Hyderabad
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Orthopedic rehabilitation costs vary depending on condition severity, treatment setting, and required therapy duration. Recovery timelines differ considerably between acute injuries and chronic, long-standing dysfunction.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Clinic Sessions</h4>
                  <p className="text-sm text-muted-foreground">Typically range based on assessment complexity and therapist expertise</p>
                </div>
                <div className="border border-border/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Home Visit Sessions</h4>
                  <p className="text-sm text-muted-foreground">Higher per session due to travel. Many patients find it worthwhile for reduced stress and better real environment rehabilitation</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mt-4 text-sm">
                <strong>Note:</strong> Steady moderate-frequency therapy maintained consistently produces better outcomes than aggressive short-term schedules patients cannot sustain. Contact us for an accurate quote based on your specific condition and needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default OrthopedicPhysiotherapy;