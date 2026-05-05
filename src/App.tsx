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
