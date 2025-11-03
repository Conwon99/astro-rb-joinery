import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { trackExternalLink } from "@/utils/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                RB Joinery
              </h3>
              <p className="text-white leading-relaxed">
                Trusted provider of joinery and building services in Ayrshire and Glasgow. 
                Our skilled team specializes in house extensions, loft conversions, garden rooms, kitchens, and home improvements, ensuring every project is completed to the highest standards.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white">07927 726622</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white">Ryan@rbjoinery.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white">Ayrshire & Glasgow</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • House Extensions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • Loft Conversions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • Garden Rooms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • Kitchen Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • Home Improvements
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3 text-white">
              <li>
                • Joinery in Ayrshire
              </li>
              <li>
                • Joinery in Glasgow
              </li>
              <li>
                • House Extensions Ayrshire
              </li>
              <li>
                • House Extensions Glasgow
              </li>
              <li>
                • Building Services Ayrshire
              </li>
              <li>
                • Building Services Glasgow
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-sm">
              © {currentYear} RB Joinery. All rights reserved.
            </div>
            <div className="text-white/70 text-sm text-center">
              Professional joinery and building services in Ayrshire and Glasgow.
              <br />
              Website Design by{' '}
              <a 
                href="https://codapixel.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-gray-300 transition-colors"
                onClick={() => trackExternalLink('https://codapixel.com/', 'CodaPixel')}
              >
                CodaPixel
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;