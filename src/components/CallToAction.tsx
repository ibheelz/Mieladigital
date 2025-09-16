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
    <section className="bg-premium-black min-h-screen px-4 sm:px-6 py-20 sm:py-24 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-muted-on-black">
            Choose the appropriate form below
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Client Services Form */}
          <div className="bg-premium-black border border-gold/20 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-on-black mb-2">Clients</h3>
            <p className="text-muted-on-black mb-6 sm:mb-8">For companies seeking marketing services</p>
            
            <form onSubmit={handleClientSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Name" 
                  value={clientForm.name}
                  onChange={(e) => setClientForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold h-12 text-base"
                />
                <Input 
                  placeholder="Company" 
                  value={clientForm.company}
                  onChange={(e) => setClientForm(prev => ({ ...prev, company: e.target.value }))}
                  required
                  className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold h-12 text-base"
                />
              </div>
              
              <Input 
                placeholder="Email" 
                type="email"
                value={clientForm.email}
                onChange={(e) => setClientForm(prev => ({ ...prev, email: e.target.value }))}
                required
                className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold h-12 text-base"
              />
              
              <Textarea 
                placeholder="Tell us about your marketing objectives" 
                rows={4}
                value={clientForm.message}
                onChange={(e) => setClientForm(prev => ({ ...prev, message: e.target.value }))}
                required
                className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold resize-none text-base min-h-[120px]"
              />
              
              <Button 
                type="submit" 
                variant="premium-outline" 
                size="lg" 
                className="w-full h-12 text-base"
                disabled={isSubmitting.client}
              >
                {isSubmitting.client ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>

          {/* Partner/Provider Form */}
          <div className="bg-premium-black border border-gold/20 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-on-black mb-2">Providers</h3>
            <p className="text-muted-on-black mb-6 sm:mb-8">For service providers looking to collaborate</p>
            
            <form onSubmit={handlePartnerSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Name" 
                  value={partnerForm.name}
                  onChange={(e) => setPartnerForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold h-12 text-base"
                />
                <Input 
                  placeholder="Company" 
                  value={partnerForm.company}
                  onChange={(e) => setPartnerForm(prev => ({ ...prev, company: e.target.value }))}
                  required
                  className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold h-12 text-base"
                />
              </div>
              
              <Input 
                placeholder="Email" 
                type="email"
                value={partnerForm.email}
                onChange={(e) => setPartnerForm(prev => ({ ...prev, email: e.target.value }))}
                required
                className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold h-12 text-base"
              />
              
              <Textarea 
                placeholder="Describe your services and collaboration interest" 
                rows={4}
                value={partnerForm.message}
                onChange={(e) => setPartnerForm(prev => ({ ...prev, message: e.target.value }))}
                required
                className="bg-premium-black border-gold/30 text-on-black placeholder:text-muted-on-black focus:border-gold resize-none text-base min-h-[120px]"
              />
              
              <Button 
                type="submit" 
                variant="premium-outline" 
                size="lg" 
                className="w-full h-12 text-base"
                disabled={isSubmitting.partner}
              >
                {isSubmitting.partner ? "Submitting..." : "Submit Offer"}
              </Button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;