import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import TestimonialsPage from "./pages/TestimonialsPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NeurologicalConditions from "./pages/services/NeurologicalConditions";
import OrthopedicConditions from "./pages/services/OrthopedicConditions";
import GeriatricRehabilitation from "./pages/services/GeriatricRehabilitation";
import PediatricConditions from "./pages/services/PediatricConditions";
import BalanceStrengthTraining from "./pages/services/BalanceStrengthTraining";
import CardiacRehabilitation from "./pages/services/CardiacRehabilitation";

import BandlagudaJagir from "./pages/areas/BandlagudaJagir";
import Suncity from "./pages/areas/Suncity";
import Narsingi from "./pages/areas/Narsingi";
import Kismathpur from "./pages/areas/Kismathpur";
import LangerHouse from "./pages/areas/LangerHouse";
import Kokapet from "./pages/areas/Kokapet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> 
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/neurological-conditions" element={<NeurologicalConditions />} />
              <Route path="/services/orthopedic-conditions" element={<OrthopedicConditions />} />
              <Route path="/services/geriatric-rehabilitation" element={<GeriatricRehabilitation />} />
              <Route path="/services/pediatric-conditions" element={<PediatricConditions />} />
              <Route path="/services/balance-strength-training" element={<BalanceStrengthTraining />} />
              <Route path="/services/cardiac-rehabilitation" element={<CardiacRehabilitation />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />

              <Route path="/areas/bandlaguda-jagir" element={<BandlagudaJagir />} />
              <Route path="/areas/suncity" element={<Suncity />} />
              <Route path="/areas/narsingi" element={<Narsingi />} />
              <Route path="/areas/kismathpur" element={<Kismathpur />} />
              <Route path="/areas/langer-house" element={<LangerHouse />} />
              <Route path="/areas/kokapet" element={<Kokapet />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
