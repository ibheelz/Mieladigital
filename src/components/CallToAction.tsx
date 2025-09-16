import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const { toast } = useToast();
  const [clientForm, setClientForm] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState({ client: false, partner: false });

  const handleClientSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Client form submitted:', clientForm);
    setIsSubmitting(prev => ({ ...prev, client: true }));

    try {
      console.log('Making request to:', '/functions/v1/submit-inquiry');
      const response = await fetch('/functions/v1/submit-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...clientForm,
          type: 'client'
        })
      });

      if (response.ok) {
        toast({
          title: "Inquiry Submitted",
          description: "Thank you for your interest. We'll be in touch soon.",
        });
        setClientForm({ name: "", company: "", email: "", message: "" });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(prev => ({ ...prev, client: false }));
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partner form submitted:', partnerForm);
    setIsSubmitting(prev => ({ ...prev, partner: true }));

    try {
      console.log('Making request to:', '/functions/v1/submit-inquiry');
      const response = await fetch('/functions/v1/submit-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...partnerForm,
          type: 'partner'
        })
      });

      if (response.ok) {
        toast({
          title: "Partnership Inquiry Submitted",
          description: "Thank you for your interest. We'll review your submission.",
        });
        setPartnerForm({ name: "", company: "", email: "", message: "" });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(prev => ({ ...prev, partner: false }));
    }
  };
  return (
    <section className="bg-premium-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gold mb-4 sm:mb-6">
            Let's work
            <span className="font-medium text-on-black"> together</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-on-black font-light max-w-2xl mx-auto">
            Ready to accelerate your growth? Get in touch with our team to discuss your challenges and opportunities.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Direct Contact */}
          <div className="bg-premium-black border border-gold/20 p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-medium text-on-black mb-3">
                Get in touch directly
              </h3>
              <p className="text-muted-on-black font-light">
                Reach out to discuss your specific needs and how we can help accelerate your business transformation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-gold/30 pl-6">
                <h4 className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                  Email
                </h4>
                <a
                  href="mailto:contact@mieladigital.com"
                  className="text-lg text-on-black hover:text-gold transition-colors font-light"
                >
                  contact@mieladigital.com
                </a>
              </div>

              <div className="border-l-2 border-gold/30 pl-6">
                <h4 className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                  Office
                </h4>
                <p className="text-lg text-on-black font-light">
                  Seoul, South Korea
                </p>
              </div>

              <div className="border-l-2 border-gold/30 pl-6">
                <h4 className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                  Response time
                </h4>
                <p className="text-lg text-on-black font-light">
                  Within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-premium-black border border-gold/20 p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-medium text-on-black mb-3">
                Send us a message
              </h3>
              <p className="text-muted-on-black font-light">
                Tell us about your project and we'll get back to you with a tailored approach.
              </p>
            </div>

            <form onSubmit={handleClientSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gold mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    value={clientForm.name}
                    onChange={(e) => setClientForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold h-12 text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gold mb-2 uppercase tracking-wider">
                    Company
                  </label>
                  <Input
                    placeholder="Company name"
                    value={clientForm.company}
                    onChange={(e) => setClientForm(prev => ({ ...prev, company: e.target.value }))}
                    required
                    className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold h-12 text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gold mb-2 uppercase tracking-wider">
                  Email
                </label>
                <Input
                  placeholder="your.email@company.com"
                  type="email"
                  value={clientForm.email}
                  onChange={(e) => setClientForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold h-12 text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gold mb-2 uppercase tracking-wider">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project, challenges, and goals..."
                  rows={5}
                  value={clientForm.message}
                  onChange={(e) => setClientForm(prev => ({ ...prev, message: e.target.value }))}
                  required
                  className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold resize-none text-base min-h-[140px]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-premium-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold/90 transition-colors duration-200 disabled:opacity-50"
                disabled={isSubmitting.client}
              >
                {isSubmitting.client ? "SENDING MESSAGE..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-light text-on-black mb-6">
              Ready to start your
              <span className="font-medium text-gold"> transformation?</span>
            </h3>
            <p className="text-lg text-muted-on-black font-light mb-8">
              Join the organizations that have already accelerated their growth with our strategic approach. Let's discuss how we can help you navigate your greatest challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="bg-gold text-premium-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold/90 transition-colors duration-200">
                SCHEDULE A CALL
              </button>
              <button className="border border-gold/30 text-gold px-8 py-4 text-sm font-medium tracking-wide hover:border-gold hover:bg-gold/10 transition-all duration-200">
                VIEW OUR WORK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;