import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need a doctor's referral for physiotherapy?",
      answer:
        "No, you don't need a referral. You can directly consult Dr. Sai Charan (PT) for physiotherapy treatment. However, if you have a referral from your doctor, please bring it along for better understanding of your condition.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "The number of sessions varies depending on your condition, its severity, and how your body responds to treatment. Some acute conditions may improve in 4-6 sessions, while chronic conditions might need 8-12 sessions or more. Dr. Sai Charan will assess and give you a personalized treatment plan.",
    },
    {
      question: "Do you offer home visits?",
      answer:
        "Yes, absolutely! We provide home physiotherapy services across Suncity, Bandlaguda Jagir, Kalimandir, Kismathpur, Narsingi, Langer House, and Kokapet. Home visits are especially beneficial for elderly patients or those with mobility issues.",
    },
    {
      question: "Is physiotherapy painful?",
      answer:
        "Physiotherapy should not cause severe pain. Some mild discomfort during certain movements or exercises is normal as we work on stiff joints or tight muscles. However, Dr. Sai Charan ensures all treatments are within your comfort level and will adjust techniques based on your feedback.",
    },
    {
      question: "What conditions do you treat?",
      answer:
        "We treat a wide range of conditions including neurological conditions (Stroke, Parkinson's), orthopedic issues (back pain, arthritis, post-fracture), sports injuries, geriatric mobility issues, pediatric conditions (cerebral palsy), and post-surgical rehabilitation.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-5">
            Frequently Asked Questions
          </h2>

          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers about your physiotherapy journey
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-5 border border-border/60 rounded-[24px] overflow-hidden bg-background transition-all duration-300 hover:border-primary/20"
            >
              {/* Question */}
              <button
                className="w-full text-left px-8 md:px-10 py-5 md:py-6 flex justify-between items-center transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-poppins font-semibold text-[17px] md:text-[18px] leading-[1.5] text-foreground pr-6">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-8 md:px-10 pb-6">
                    <p className="text-muted-foreground text-[15px] md:text-[16px] leading-[1.9]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;