import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import LazyImage from "@/components/LazyImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackPhoneCall, trackNavigation, trackQuoteRequest } from "@/utils/analytics";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/');
    
    const handlePopState = () => {
      setIsHomePage(window.location.pathname === '/');
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Approximate hero section height
      
      if (scrollY > heroHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    trackPhoneCall('navigation_call_button');
    window.location.href = "tel:+447927726622";
  };

  const scrollToSection = (sectionId: string) => {
    trackNavigation(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleQuoteClick = () => {
    trackQuoteRequest('navigation_button', []);
    window.location.href = "/contact";
  };

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      // Navigate to homepage and scroll to section
      window.location.href = `/#${sectionId}`;
    }
  };

  const navItems = [
    { label: "Home", onClick: () => handleNavClick("hero"), isLink: false },
    { label: "Services", onClick: () => handleNavClick("services"), isLink: false },
    { label: "Gallery", onClick: () => handleNavClick("gallery"), isLink: false },
    { label: "FAQ", onClick: () => handleNavClick("faq"), isLink: false },
    { label: "Contact", href: "/contact", isLink: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-hidden ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-sm border-b border-white/10 shadow-md' 
        : 'bg-black/95 backdrop-blur-sm border-b border-white/10 shadow-md'
    }`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <LazyImage
                src="/rblogo - Edited.png"
                alt="RB Joinery logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {navItems.slice(0, 3).map((item) => (
              item.isLink ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-sm"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-sm"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.isLink ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-green-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-white hover:text-green-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Tablet CTA */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <Button
              onClick={handleCallClick}
              variant="ghost"
              className="flex items-center gap-2 text-gray-300 hover:text-white bg-transparent hover:bg-transparent p-0"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-300 font-medium">CALL</span>
                <span className="text-lg font-bold text-white">07927 726622</span>
              </div>
            </Button>
            <Button
              onClick={handleQuoteClick}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Quote
            </Button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              onClick={handleCallClick}
              variant="ghost"
              className="flex items-center gap-4 text-gray-300 hover:text-white bg-transparent hover:bg-transparent p-0"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm text-gray-300 font-medium">CALL US NOW</span>
                <span className="text-xl lg:text-2xl font-bold text-white">07927 726622</span>
              </div>
            </Button>
            <Button
              onClick={handleQuoteClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Get A Free Quote
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black border-t border-white/10 shadow-lg">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                item.isLink ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block w-full text-left px-4 py-2 text-white hover:text-green-400 hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="block w-full text-left px-4 py-2 text-white hover:text-green-400 hover:bg-white/10 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                <Button
                  onClick={handleCallClick}
                  variant="ghost"
                  className="w-full justify-start flex items-center gap-4 text-gray-700 hover:text-gray-900 bg-transparent hover:bg-transparent p-0"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-gray-300 font-medium">CALL US NOW</span>
                    <span className="text-2xl md:text-3xl font-bold text-white">07927 726622</span>
                  </div>
                </Button>
                <Button
                  onClick={handleQuoteClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Get A Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;