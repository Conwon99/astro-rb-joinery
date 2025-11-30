import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackQuoteRequest } from "@/utils/analytics";

const ContactSection = () => {
  const handleQuoteClick = () => {
    trackQuoteRequest('contact_section_button', []);
    window.location.href = "/contact";
  };

  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--muted))] overflow-x-hidden">
      <div className="container mx-auto max-w-4xl w-full">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))]">
              Contact Us
            </h2>
            <p className="text-lg sm:text-xl text-[hsl(var(--asphalt-grey))] max-w-2xl mx-auto">
              Ready to transform your home? Get in touch for your free, no-obligation quote today.
            </p>
          </div>
          <Button 
            onClick={handleQuoteClick}
            className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-6 sm:py-8 px-8 sm:px-12 rounded-lg text-lg sm:text-xl md:text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            Get A Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;