import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xanpaopz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          _subject: 'Contact Form Submission from Website'
        }),
      });

      if (response.ok) {
        trackQuoteRequest('contact_page_form', []);
        trackFormInteraction('contact_form', { status: 'submit_success' });
        
        toast({
          title: "Message sent!",
          description: "Thank you for contacting us. We'll respond within 24 hours.",
        });
        
        setFormData({
          name: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      trackFormInteraction('contact_form', { status: 'submit_error' });
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-[hsl(var(--asphalt-grey))] font-semibold text-base mb-2 block">
          Name *
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          className="rounded-xl border-2 text-base"
          placeholder="Your full name"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-[hsl(var(--asphalt-grey))] font-semibold text-base mb-2 block">
          Phone Number *
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          required
          className="rounded-xl border-2 text-base"
          placeholder="07927 726622"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-[hsl(var(--asphalt-grey))] font-semibold text-base mb-2 block">
          Message *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          required
          placeholder="Tell us about your project..."
          className="rounded-xl border-2 min-h-[150px] text-base"
        />
        <p className="text-sm text-gray-600 mt-2">
          This message will go to my phone, and I will get back to you as soon as possible.
        </p>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-base"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;

