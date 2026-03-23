import { useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";
import { cn } from "@/lib/utils";
import { useTrackingPhone } from "@/hooks/useTrackingPhone";

const FORMSPREE_URL = "https://formspree.io/f/xanpaopz";

const fieldClass =
  "h-11 rounded-lg border-white/15 bg-black/45 text-white placeholder:text-neutral-500 focus-visible:border-amber-500/50 focus-visible:ring-amber-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1528] md:text-sm";

const textareaClass =
  "min-h-[140px] rounded-lg border-white/15 bg-black/45 text-white placeholder:text-neutral-500 focus-visible:border-amber-500/50 focus-visible:ring-amber-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1528] text-base";

type ServicePageContactSplitProps = {
  backgroundImage: string;
  /** Shown in the left column (desktop). */
  heading?: string;
  /** Used in the enquiry email subject and analytics. */
  serviceLabel: string;
  sectionId?: string;
  /** Slightly tighter spacing for standalone pages like /contact. */
  compact?: boolean;
};

const ServicePageContactSplit = ({
  backgroundImage,
  heading = "Protect Your Home with Our Expert Services Today",
  serviceLabel,
  sectionId = "service-contact",
  compact = false,
}: ServicePageContactSplitProps) => {
  const { display: phoneDisplay, telHref } = useTrackingPhone();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    houseNumber: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          postcode: formData.postcode,
          houseNumber: formData.houseNumber,
          message: formData.message,
          service: serviceLabel,
          website: "https://rbjoinery.com/",
          _subject: `Service enquiry: ${serviceLabel} — rbjoinery.com`,
        }),
      });

      if (response.ok) {
        trackQuoteRequest("service_page_contact_form", [serviceLabel]);
        trackFormInteraction("service_contact_form", { status: "submit_success" });
        window.location.href = "/thank-you";
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      trackFormInteraction("service_contact_form", { status: "submit_error" });
      toast({
        title: "Error sending message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id={sectionId}
      className={cn(
        "bg-neutral-950 px-4 text-white",
        compact ? "py-10 md:py-12 lg:py-14" : "py-14 md:py-16 lg:py-20"
      )}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:grid lg:grid-cols-2 lg:rounded-2xl">
          {/* Left — image + CTA */}
          <div className={cn("relative min-h-[280px]", compact ? "lg:min-h-[480px]" : "lg:min-h-[560px]")}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${JSON.stringify(backgroundImage)})` }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-slate-950/88 via-slate-900/80 to-slate-950/90"
              aria-hidden
            />
            <div
              className={cn(
                "relative z-10 flex h-full flex-col justify-center gap-6 p-7 md:p-8",
                compact ? "min-h-[280px] lg:min-h-[480px] lg:p-10" : "min-h-[300px] lg:min-h-[560px] lg:gap-8 lg:p-12"
              )}
            >
              <h2
                id={`${sectionId}-heading`}
                className="font-display max-w-xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.35rem] lg:leading-[1.15]"
              >
                {heading}
              </h2>
              <a
                href={telHref}
                className={cn(
                  "inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-black/55 px-5 py-3.5",
                  "text-lg font-semibold text-sky-300 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-black/65 hover:text-sky-200"
                )}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                {phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div
            className={cn(
              "border-t border-white/10 bg-[#0d1528] p-6 sm:p-8 lg:border-l lg:border-t-0",
              compact ? "lg:p-8" : "lg:p-10"
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor={`${sectionId}-name`} className="text-sm font-medium text-neutral-300">
                    Name
                  </Label>
                  <Input
                    id={`${sectionId}-name`}
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${sectionId}-phone`} className="text-sm font-medium text-neutral-300">
                    Phone
                  </Label>
                  <Input
                    id={`${sectionId}-phone`}
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor={`${sectionId}-email`} className="text-sm font-medium text-neutral-300">
                    Email
                  </Label>
                  <Input
                    id={`${sectionId}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${sectionId}-postcode`} className="text-sm font-medium text-neutral-300">
                    Post code
                  </Label>
                  <Input
                    id={`${sectionId}-postcode`}
                    name="postcode"
                    required
                    autoComplete="postal-code"
                    placeholder="Post code"
                    value={formData.postcode}
                    onChange={(e) => setFormData((p) => ({ ...p, postcode: e.target.value }))}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor={`${sectionId}-house`} className="text-sm font-medium text-neutral-300">
                  House number / name
                </Label>
                <Input
                  id={`${sectionId}-house`}
                  name="houseNumber"
                  autoComplete="street-address"
                  placeholder="House number / name"
                  value={formData.houseNumber}
                  onChange={(e) => setFormData((p) => ({ ...p, houseNumber: e.target.value }))}
                  className={fieldClass}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor={`${sectionId}-message`} className="text-sm font-medium text-neutral-300">
                  Message
                </Label>
                <Textarea
                  id={`${sectionId}-message`}
                  name="message"
                  required
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className={textareaClass}
                />
              </div>

              <p className="pt-1 text-sm font-normal leading-snug text-neutral-400">
                By submitting this form you agree to be contacted by RB Joinery about your enquiry
              </p>

              <Button
                type="submit"
                disabled={submitting}
                className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-amber-500 text-base font-semibold text-white shadow-md transition-colors hover:bg-amber-600 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Submit"}
                {!submitting ? <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden /> : null}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageContactSplit;
