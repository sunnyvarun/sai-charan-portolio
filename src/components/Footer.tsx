import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-poppins font-semibold text-xl mb-4">Dr. Sai Charan</h3>
            <p className="text-background/80 mb-2">BPT, MPT (Neurology)</p>
            <p className="text-background/80">
              Expert physiotherapy and neurological rehabilitation services
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <a href="tel:9550836548" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                9550836548
              </a>
              <a href="mailto:dubasisaicharan@gmail.com" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                dubasisaicharan@gmail.com
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Serving Hyderabad Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-background/60">
            © {new Date().getFullYear()} Dr. Sai Charan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;