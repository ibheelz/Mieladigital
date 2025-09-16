import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// SVG Icon Components
const UserIcon = () => (
  <svg className="w-5 h-5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-5 h-5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-5 h-5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

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
    setIsSubmitting(prev => ({ ...prev, client: true }));

    try {
      const subject = encodeURIComponent('New Client Inquiry from Miela Digital');
      const body = encodeURIComponent(`Name: ${clientForm.name}
Company: ${clientForm.company}
Email: ${clientForm.email}
Inquiry Type: Client Services

Message:
${clientForm.message}

---
This inquiry was submitted through mieladigital.com`);

      const mailtoLink = `mailto:contact@mieladigital.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink);

      toast({
        title: "Email Client Opened",
        description: "Your default email app should open with the message pre-filled. Simply send the email!",
      });

      setClientForm({ name: "", company: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not open email client. Please contact us directly at contact@mieladigital.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(prev => ({ ...prev, client: false }));
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(prev => ({ ...prev, partner: true }));

    try {
      const subject = encodeURIComponent('New Partnership Inquiry from Miela Digital');
      const body = encodeURIComponent(`Name: ${partnerForm.name}
Company: ${partnerForm.company}
Email: ${partnerForm.email}
Inquiry Type: Partnership/Provider

Message:
${partnerForm.message}

---
This inquiry was submitted through mieladigital.com`);

      const mailtoLink = `mailto:contact@mieladigital.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink);

      toast({
        title: "Email Client Opened",
        description: "Your default email app should open with the message pre-filled. Simply send the email!",
      });

      setPartnerForm({ name: "", company: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not open email client. Please contact us directly at contact@mieladigital.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(prev => ({ ...prev, partner: false }));
    }
  };
  return (
    <section className="bg-black px-4 sm:px-6 py-12 sm:py-16 flex items-center justify-center" id="contact">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-muted-on-black">
            Choose the appropriate form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Clients Form */}
          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-sm sm:text-base font-semibold text-gold mb-2 uppercase font-montserrat" style={{letterSpacing: '0.3em'}}>Clients</h3>
            <p className="text-gray-300 mb-6">For companies seeking marketing services.</p>

            <form onSubmit={handleClientSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <UserIcon />
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={clientForm.name}
                    onChange={(e) => setClientForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="glass-input pl-12 pr-4 py-3 text-white placeholder:text-gray-400 focus:outline-none w-full"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <BuildingIcon />
                  </div>
                  <input
                    type="text"
                    placeholder="Company"
                    value={clientForm.company}
                    onChange={(e) => setClientForm(prev => ({ ...prev, company: e.target.value }))}
                    required
                    className="glass-input pl-12 pr-4 py-3 text-white placeholder:text-gray-400 focus:outline-none w-full"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <EmailIcon />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={clientForm.email}
                  onChange={(e) => setClientForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="glass-input pl-12 pr-4 py-3 text-white placeholder:text-gray-400 focus:outline-none w-full"
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-4">
                  <MessageIcon />
                </div>
                <textarea
                  placeholder="Tell us about your marketing objectives"
                  rows={4}
                  value={clientForm.message}
                  onChange={(e) => setClientForm(prev => ({ ...prev, message: e.target.value }))}
                  required
                  className="glass-input pl-12 pr-4 py-3 text-white placeholder:text-gray-400 focus:outline-none resize-none w-full"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting.client}
                className="glass-button w-full px-6 py-3 text-gold font-semibold hover:bg-yellow-400 hover:text-black hover:font-bold transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
              >
                <SendIcon />
                {isSubmitting.client ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Providers Form */}
          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-sm sm:text-base font-semibold text-gold mb-2 uppercase font-montserrat" style={{letterSpacing: '0.3em'}}>Providers</h3>
            <p className="text-gray-300 mb-6">For service providers looking to collaborate.</p>

            <form onSubmit={handlePartnerSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <UserIcon />
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={partnerForm.name}
                    onChange={(e) => setPartnerForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="glass-input pl-12 pr-4 py-3 text-white placeholder:text-gray-400 focus:outline-none w-full"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <BuildingIcon />
                  </div>
                  <input
                    type="text"
                    placeholder="Company"
                    value={partnerForm.company}
                    onChange={(e) => setPartnerForm(prev => ({ ...prev, company: e.target.value }))}
                    required
                    className="glass-input pl-12 pr-4 py-3 text-white placeholder:text-gray-400 focus:outline-none w-full"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <EmailIcon />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={partnerForm.email}
                  onChange={(e) => setPartnerForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="glass-input pl-12 pr-4 py-3 text-white placeholder:text-gray-400 focus:outline-none w-full"
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-4">
                  <MessageIcon />
                </div>
                <textarea
                  placeholder="Describe your services and collaboration interest"
                  rows={4}
                  value={partnerForm.message}
                  onChange={(e) => setPartnerForm(prev => ({ ...prev, message: e.target.value }))}
                  required
                  className="glass-input pl-12 pr-4 py-3 text-white placeholder:text-gray-400 focus:outline-none resize-none w-full"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting.partner}
                className="glass-button w-full px-6 py-3 text-gold font-semibold hover:bg-yellow-400 hover:text-black hover:font-bold transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
              >
                <SendIcon />
                {isSubmitting.partner ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;