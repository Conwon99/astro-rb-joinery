import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import LazyImage from "@/components/LazyImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackPhoneCall, trackNavigation, trackQuoteRequest } from "@/utils/analytics";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");

    const handlePopState = () => {
      setIsHomePage(window.location.pathname === "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      setServicesExpanded(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (scrollY > heroHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCallClick = () => {
    trackPhoneCall("navigation_call_button");
    window.location.href = "tel:+447927726622";
  };

  const scrollToSection = (sectionId: string) => {
    trackNavigation(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleQuoteClick = () => {
    trackQuoteRequest("navigation_button", []);
    window.location.href = "/contact";
  };

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const servicesLinkClass =
    "text-white hover:text-green-400 transition-colors duration-200 font-medium flex items-center gap-1";
  const servicesLinkClassSm = "text-sm " + servicesLinkClass;

  const ServicesDropdown = ({ compact }: { compact?: boolean }) => (
    <div className="relative group">
      <a
        href="/services"
        className={compact ? servicesLinkClassSm : servicesLinkClass}
        onClick={() => trackNavigation("services_page")}
      >
        Services
        <ChevronDown className="w-4 h-4 opacity-80" aria-hidden />
      </a>
      {/* overflow-visible on nav is required; use opacity + pointer-events (not visibility:hidden) so the panel can receive hover between link and items */}
      <div
        className="absolute left-0 top-full z-[100] -mt-px min-w-[220px] pt-2 opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
        role="menu"
        aria-label="Service pages"
      >
        <div className="rounded-lg border border-white/10 bg-black py-2 shadow-lg">
          {SERVICES.map((s) => (
            <a
              key={s.href}
              href={s.href}
              role="menuitem"
              className="block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-green-400"
              onClick={() => trackNavigation(`nav_service_${s.href.replace(/\//g, "")}`)}
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 z-50 w-full overflow-visible transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-black/95 shadow-md backdrop-blur-sm"
          : "border-b border-white/10 bg-black/95 shadow-md backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — links to homepage */}
          <div className="flex items-center">
            <a
              href="/"
              className="block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="RB Joinery — Home"
              onClick={() => {
                trackNavigation("logo_home");
                setIsMenuOpen(false);
              }}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
                <LazyImage
                  src="/rblogo - Edited.png"
                  alt="RB Joinery logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </a>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden items-center space-x-4 md:flex lg:hidden">
            <button
              type="button"
              onClick={() => handleNavClick("hero")}
              className="text-sm font-medium text-white transition-colors duration-200 hover:text-green-400"
            >
              Home
            </button>
            <ServicesDropdown compact />
            <button
              type="button"
              onClick={() => handleNavClick("gallery")}
              className="text-sm font-medium text-white transition-colors duration-200 hover:text-green-400"
            >
              Gallery
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 lg:flex">
            <button
              type="button"
              onClick={() => handleNavClick("hero")}
              className="font-medium text-white transition-colors duration-200 hover:text-green-400"
            >
              Home
            </button>
            <ServicesDropdown />
            <button
              type="button"
              onClick={() => handleNavClick("gallery")}
              className="font-medium text-white transition-colors duration-200 hover:text-green-400"
            >
              Gallery
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("faq")}
              className="font-medium text-white transition-colors duration-200 hover:text-green-400"
            >
              FAQ
            </button>
            <a
              href="/contact"
              className="font-medium text-white transition-colors duration-200 hover:text-green-400"
              onClick={() => trackNavigation("contact_page")}
            >
              Contact
            </a>
          </div>

          {/* Tablet CTA */}
          <div className="hidden items-center space-x-2 md:flex lg:hidden">
            <Button
              onClick={handleCallClick}
              variant="ghost"
              className="flex items-center gap-2 bg-transparent p-0 text-gray-300 hover:bg-transparent hover:text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium text-gray-300">CALL</span>
                <span className="text-lg font-bold text-white">07927 726622</span>
              </div>
            </Button>
            <Button
              onClick={handleQuoteClick}
              className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Quote
            </Button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center space-x-3 lg:flex">
            <Button
              onClick={handleCallClick}
              variant="ghost"
              className="flex items-center gap-4 bg-transparent p-0 text-gray-300 hover:bg-transparent hover:text-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-300">CALL US NOW</span>
                <span className="text-xl font-bold text-white lg:text-2xl">07927 726622</span>
              </div>
            </Button>
            <Button
              onClick={handleQuoteClick}
              className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Get A Free Quote
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button type="button" className="p-2 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-black shadow-lg lg:hidden">
            <div className="space-y-0 py-4">
              <button
                type="button"
                onClick={() => handleNavClick("hero")}
                className="block w-full px-4 py-2 text-left text-white transition-colors duration-200 hover:bg-white/10 hover:text-green-400"
              >
                Home
              </button>

              <div className="border-b border-white/5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-2 text-left text-white transition-colors duration-200 hover:bg-white/10 hover:text-green-400"
                  onClick={() => setServicesExpanded((v) => !v)}
                  aria-expanded={servicesExpanded}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", servicesExpanded && "rotate-180")}
                    aria-hidden
                  />
                </button>
                {servicesExpanded && (
                  <div className="space-y-1 border-l border-white/10 pb-3 pl-6">
                    <a
                      href="/services"
                      className="block py-2 text-sm text-white/90 transition-colors hover:text-green-400"
                      onClick={() => {
                        trackNavigation("services_page");
                        setIsMenuOpen(false);
                      }}
                    >
                      All services
                    </a>
                    {SERVICES.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="block py-2 text-sm text-white/90 transition-colors hover:text-green-400"
                        onClick={() => {
                          trackNavigation(`nav_service_${s.href.replace(/\//g, "")}`);
                          setIsMenuOpen(false);
                        }}
                      >
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => handleNavClick("gallery")}
                className="block w-full px-4 py-2 text-left text-white transition-colors duration-200 hover:bg-white/10 hover:text-green-400"
              >
                Gallery
              </button>
              <button
                type="button"
                onClick={() => handleNavClick("faq")}
                className="block w-full px-4 py-2 text-left text-white transition-colors duration-200 hover:bg-white/10 hover:text-green-400"
              >
                FAQ
              </button>
              <a
                href="/contact"
                className="block w-full px-4 py-2 text-left text-white transition-colors duration-200 hover:bg-white/10 hover:text-green-400"
                onClick={() => {
                  trackNavigation("contact_page");
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>

              <div className="space-y-3 border-t border-gray-200 px-4 pt-4">
                <Button
                  onClick={handleCallClick}
                  variant="ghost"
                  className="w-full justify-start bg-transparent p-0 text-gray-700 hover:bg-transparent hover:text-gray-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-gray-300">CALL US NOW</span>
                    <span className="text-2xl font-bold text-white md:text-3xl">07927 726622</span>
                  </div>
                </Button>
                <Button
                  onClick={handleQuoteClick}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  <WhatsAppIcon className="h-5 w-5" />
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
