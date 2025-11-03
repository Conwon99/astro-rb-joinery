import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { trackPhoneCall, trackQuoteRequest } from "@/utils/analytics";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What services does RB Joinery provide?",
      answer: "We provide professional joinery and building services including house extensions, loft conversions, garden rooms, kitchen installations, and home improvements. Our team specializes in carpentry, construction, and complete home transformations across Ayrshire and Glasgow."
    },
    {
      question: "What areas do you cover?",
      answer: "We serve Ayrshire and Glasgow areas. Contact us to confirm coverage for your specific location and discuss your project requirements."
    },
    {
      question: "Do you offer house extensions?",
      answer: "Yes, we specialize in house extensions including single storey and two storey extensions. We handle the complete process from initial design consultation through to planning permission and construction, ensuring all work meets building regulations and your specific requirements."
    },
    {
      question: "What building services do you offer?",
      answer: "Our building services include house extensions, loft conversions, garden rooms, kitchen installations, and home improvements. We handle both residential and commercial projects, ensuring all work meets high standards and local building regulations."
    },
    {
      question: "Do you provide loft conversions?",
      answer: "Yes, we specialize in loft conversions including dormer and Velux conversions. We can transform your loft space into beautiful, functional rooms such as bedrooms, home offices, or playrooms, adding significant value to your property."
    },
    {
      question: "Do you build garden rooms?",
      answer: "Absolutely! We provide comprehensive garden room construction including home offices, garden studios, garden gyms, and entertainment spaces. We work with various materials and can create bespoke solutions to meet your specific needs and budget."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project duration depends on size and complexity. Simple improvements may take a few days, while larger projects like house extensions or loft conversions may take several weeks to months. We provide realistic timelines during the quote process and keep you updated throughout the project."
    },
    {
      question: "Do you offer free quotes?",
      answer: "Yes, we provide completely free, no-obligation quotes for all our services. You can request a quote by calling 07927 726622, messaging us on WhatsApp, emailing us at ryan@rbjoinery.com, or using our contact form. We'll assess your needs and provide a detailed, transparent quote with no hidden costs."
    }
  ];

  return (
    <>
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))] overflow-x-hidden">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
              Common questions about our joinery, building services, house extensions, loft conversions, garden rooms, and home improvements in Ayrshire and Glasgow
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg text-[hsl(var(--asphalt-grey))] pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-[hsl(var(--primary-blue))] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[hsl(var(--primary-blue))] flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-[hsl(var(--asphalt-grey))] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-[hsl(var(--asphalt-grey))] mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447403725998"
                onClick={() => trackPhoneCall('faq_section_call_button')}
                className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--primary-blue))] text-white rounded-full font-semibold hover:bg-[hsl(var(--primary-blue))]/90 transition-colors"
              >
                Call 07927 726622
              </a>
              <button
                onClick={() => {
                  trackQuoteRequest('faq_section_quote_button', []);
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[hsl(var(--primary-blue))] text-[hsl(var(--primary-blue))] rounded-full font-semibold hover:bg-[hsl(var(--primary-blue))] hover:text-white transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
