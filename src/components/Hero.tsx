import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackPhoneCall, trackWhatsAppClick, trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const serviceOptions = [
    'House Extensions',
    'Loft Conversions', 
    'Garden Rooms',
    'Kitchen Installation',
    'Home Improvements',
    'Joinery Services',
    'Carpentry',
    'Bespoke Joinery'
  ];


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mgvnlora', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: 'Free Quote Request from Website'
        }),
      });

      if (response.ok) {
        // Track successful form submission
        trackQuoteRequest('contact_form', [formData.service]);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
          title: "Quote request sent!",
          description: "Thank you for your request. We'll respond within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      trackFormInteraction('quote_form', 'submit_error');
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleCallClick = () => {
    trackPhoneCall('hero_call_button');
    window.location.href = "tel:+447927726622";
  };

  const handleMessengerClick = () => {
    trackWhatsAppClick('hero_whatsapp_button');
    window.open("https://wa.me/447927726622", "_blank");
  };

  return (
    <section id="hero" className="relative bg-background min-h-screen flex items-center py-20 px-4 pt-32 overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
          <LazyImage
            src="/RB joinery back2.jpg"
            alt="RB Joinery hero background"
            className="w-full h-full object-cover object-[center_40%]"
            loading="eager"
          />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center lg:justify-start">
          <div className="max-w-4xl w-full">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg px-2">
                <span className="relative inline-block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Professional
                  <img 
                    src="/undelrine svg1.svg" 
                    alt="" 
                    className="absolute top-1/2 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 object-contain -z-10 max-w-full overflow-hidden"
                  />
                </span> Joinery & Building Services
              </h1>
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white drop-shadow-lg flex items-center gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                Ayrshire & Glasgow
              </h2>
              
              <p className="text-base sm:text-lg text-white/90 font-medium max-w-lg leading-relaxed drop-shadow-md px-2">
                Expert joinery and building specialists serving Ayrshire and Glasgow. Professional house extensions, loft conversions, garden rooms, kitchens, and home improvements. Trusted contractors delivering premium joinery solutions
              </p>
            </div>



            {/* Quick Contact */}
            <div className="pt-4 border-t border-white/20">
              <p className="text-white text-base sm:text-lg font-semibold mb-3 text-left px-2">Give us a call or a Whatsapp for a <span className="font-bold text-green-400">FREE QUOTE</span></p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start px-2">
              <Button 
                onClick={handleMessengerClick}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-6 sm:py-8 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base sm:text-lg"
              >
                <WhatsAppIcon className="w-8 h-8" />
                WhatsApp
              </Button>
              <Button 
                onClick={handleCallClick}
                className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-6 sm:py-8 bg-transparent hover:bg-transparent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-gray-300 font-medium">CALL US NOW</span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">07927 726622</span>
                </div>
              </Button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;