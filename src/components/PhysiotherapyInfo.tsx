const PhysiotherapyInfo = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1645005512827-48ff6f97848a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Physiotherapy treatment session"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="md:w-1/2">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-foreground mb-5">
              Physiotherapy – Reduce Pain & Improve Function
            </h2>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg mb-5">
              Physiotherapy is an evidence-based approach to restore movement, reduce pain, 
              and improve function. Expert physiotherapists assess the root cause of your 
              concern and design a personalized plan using exercise therapy, manual techniques, 
              and clinically validated modalities.
            </p>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              Our approach combines hands-on care with proven rehabilitation methods to create 
              a results-driven program tailored to your goals. Each plan follows a structured 
              pathway comprehensive assessment, focused treatment with progress measurements, 
              followed by clear home exercises for continuous recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyInfo;