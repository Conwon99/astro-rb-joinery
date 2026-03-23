import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import LazyImage from "@/components/LazyImage";
import { trackPhoneCall, trackNavigation, trackQuoteRequest } from "@/utils/analytics";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { cn } from "@/lib/utils";
import { useTrackingPhone } from "@/hooks/useTrackingPhone";

const Navigation = () => {
  const { display: phoneDisplay, telHref } = useTrackingPhone();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [locationsExpanded, setLocationsExpanded] = useState(false);

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
      setLocationsExpanded(false);
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
    window.location.href = telHref;
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

  const LocationsDropdown = ({ compact }: { compact?: boolean }) => (
    <div className="relative group">
      <a
        href="/locations"
        className={compact ? servicesLinkClassSm : servicesLinkClass}
        onClick={() => trackNavigation("locations_hub")}
      >
        Locations
        <ChevronDown className="w-4 h-4 opacity-80" aria-hidden />
      </a>
      <div
        className="absolute left-0 top-full z-[100] -mt-px min-w-[200px] pt-2 opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
        role="menu"
        aria-label="Town pages"
      >
        <div className="rounded-lg border border-white/10 bg-black py-2 shadow-lg">
          {LOCATIONS.map((loc) => (
            <a
              key={loc.slug}
              href={`/${loc.slug}`}
              role="menuitem"
              className="block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-green-400"
              onClick={() => trackNavigation(`nav_location_${loc.slug}`)}
            >
              {loc.name}
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
        <div className="flex h-20 items-center justify-between md:h-24 lg:h-28">
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
              <div className="h-[3.75rem] w-[3.75rem] md:h-[4.5rem] md:w-[4.5rem] lg:h-24 lg:w-24">
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
            <LocationsDropdown compact />
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
            <LocationsDropdown />
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
                <span className="text-lg font-bold text-white">{phoneDisplay}</span>
              </div>
            </Button>
            <button
              type="button"
              onClick={handleQuoteClick}
              className="group inline-flex w-fit shrink-0 items-center gap-1 rounded-full bg-green-600 py-1.5 pl-5 pr-1.5 text-left text-xs font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-green-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span className="pr-1">Get free quote</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-800/90 transition-transform group-hover:scale-105">
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </span>
            </button>
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
                <span className="text-xl font-bold text-white lg:text-2xl">{phoneDisplay}</span>
              </div>
            </Button>
            <button
              type="button"
              onClick={handleQuoteClick}
              className="group inline-flex w-fit items-center gap-1 rounded-full bg-green-600 py-2 pl-8 pr-2 text-left font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-green-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span className="pr-2">Get free quote</span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-800/90 transition-transform group-hover:scale-105">
                <ArrowUpRight className="h-6 w-6" aria-hidden />
              </span>
            </button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            type="button"
            className="rounded-md p-2.5 lg:hidden md:p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-7 w-7 text-white" /> : <Menu className="h-7 w-7 text-white" />}
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

              <div className="border-b border-white/5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-2 text-left text-white transition-colors duration-200 hover:bg-white/10 hover:text-green-400"
                  onClick={() => setLocationsExpanded((v) => !v)}
                  aria-expanded={locationsExpanded}
                >
                  <span>Locations</span>
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", locationsExpanded && "rotate-180")}
                    aria-hidden
                  />
                </button>
                {locationsExpanded && (
                  <div className="space-y-1 border-l border-white/10 pb-3 pl-6">
                    <a
                      href="/locations"
                      className="block py-2 text-sm text-white/90 transition-colors hover:text-green-400"
                      onClick={() => {
                        trackNavigation("locations_hub");
                        setIsMenuOpen(false);
                      }}
                    >
                      All locations
                    </a>
                    {LOCATIONS.map((loc) => (
                      <a
                        key={loc.slug}
                        href={`/${loc.slug}`}
                        className="block py-2 text-sm text-white/90 transition-colors hover:text-green-400"
                        onClick={() => {
                          trackNavigation(`nav_location_${loc.slug}`);
                          setIsMenuOpen(false);
                        }}
                      >
                        {loc.name}
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
                    <span className="text-2xl font-bold text-white md:text-3xl">{phoneDisplay}</span>
                  </div>
                </Button>
                <button
                  type="button"
                  onClick={() => {
                    handleQuoteClick();
                    setIsMenuOpen(false);
                  }}
                  className="group inline-flex w-full items-center justify-center gap-1 rounded-full bg-green-600 py-2 pl-6 pr-2 font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-green-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span className="pr-2">Get free quote</span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-800/90 transition-transform group-hover:scale-105">
                    <ArrowUpRight className="h-6 w-6" aria-hidden />
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
