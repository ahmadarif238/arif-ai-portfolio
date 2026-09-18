import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import WhatsAppIcon from '../../components/ui/WhatsAppIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  selectedServiceOrTier?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServiceOrTier }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceInterest: selectedServiceOrTier || 'Autonomous AI Agents',
    message: ''
  });

  useEffect(() => {
    if (selectedServiceOrTier) {
      setFormData((prev) => ({ ...prev, serviceInterest: selectedServiceOrTier }));
    }
  }, [selectedServiceOrTier]);

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(false);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.serviceInterest,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const openWhatsAppWithDetails = () => {
    const text = encodeURIComponent(
      `Hi Arif, my name is ${formData.name || 'a visitor'}. I am interested in ${formData.serviceInterest}. My note: ${formData.message || 'I would like to discuss a project.'}`
    );
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const serviceOptions = [
    'Autonomous AI Agents',
    'Full-Stack Web App',
    'Workflow Automation (n8n/Make)',
    'AI Voice Calling Bot',
    'API & Cloud Microservices',
    'Technical Advisory / Audit'
  ];

  return (
    <section id="contact" className="relative py-24 border-t border-[#222f43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GenZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold text-[#0bd1d1] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0ea5ea]" />
              <span>Let's Build Together</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Get In <span className="color-linear">Touch</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#94a9c9] leading-relaxed">
            Have a project in mind or looking to automate your company's workflows? Reach out directly for an immediate reply.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover-border bg-[#131c31] border-[#222f43] p-5 rounded-2xl flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0bd1d1]/10 border border-[#0bd1d1]/30 flex items-center justify-center text-[#0bd1d1] group-hover:bg-gradient-to-tr group-hover:from-[#0ea5ea] group-hover:to-[#0bd1d1] group-hover:text-white transition-all">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-[#7f92b0] uppercase tracking-wider">
                  WhatsApp (Fastest Response)
                </div>
                <div className="text-base font-bold text-white group-hover:text-[#0bd1d1] transition-colors">
                  {PERSONAL_INFO.phone}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#7f92b0] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="card-hover-border bg-[#131c31] border-[#222f43] p-5 rounded-2xl flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0ea5ea]/10 border border-[#0ea5ea]/30 flex items-center justify-center text-[#0ea5ea] group-hover:bg-gradient-to-tr group-hover:from-[#0ea5ea] group-hover:to-[#0bd1d1] group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold text-[#7f92b0] uppercase tracking-wider">
                  Direct Email
                </div>
                <div className="text-sm font-bold text-white group-hover:text-[#0bd1d1] transition-colors truncate">
                  {PERSONAL_INFO.email}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#7f92b0] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            {/* Location Card */}
            <div className="card-hover-border bg-[#131c31] border-[#222f43] p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#222f43] flex items-center justify-center text-[#94a9c9]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#7f92b0] uppercase tracking-wider">
                  Location & Timezone
                </div>
                <div className="text-sm font-bold text-white">
                  {PERSONAL_INFO.location} (PKT / UTC+5)
                </div>
                <div className="text-xs text-[#94a9c9] mt-0.5">
                  Available for Global Remote & Contract
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-5 rounded-2xl bg-[#0b1220] border border-[#222f43] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold color-linear">
                <CheckCircle2 className="w-4 h-4 text-[#0bd1d1]" />
                <span>Single-Engineer Accountability</span>
              </div>
              <p className="text-xs text-[#94a9c9] leading-relaxed">
                Direct communication with the engineer designing and building your product. No middle managers or lost context.
              </p>
            </div>
          </div>

          {/* Right Column: GenZ Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-hover-border bg-[#131c31] border-[#222f43] p-6 sm:p-8 rounded-3xl shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#0ea5ea] to-[#0bd1d1] mx-auto flex items-center justify-center text-white shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-[#94a9c9] max-w-md mx-auto">
                    Thank you {formData.name}. Your note about "{formData.serviceInterest}" has been sent and Arif will get back to you shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      type="button"
                      onClick={openWhatsAppWithDetails}
                      className="btn-linear"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Continue on WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-border-linear"
                    >
                      <span>Send Another Note</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#7f92b0] uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full bg-[#0b1220] border border-[#222f43] rounded-xl px-4 py-3 text-sm text-white placeholder-[#66768f] focus:outline-hidden focus:border-[#0ea5ea] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#7f92b0] uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#0b1220] border border-[#222f43] rounded-xl px-4 py-3 text-sm text-white placeholder-[#66768f] focus:outline-hidden focus:border-[#0ea5ea] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#7f92b0] uppercase tracking-wider mb-2">
                      Project Domain / Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full bg-[#0b1220] border border-[#222f43] rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-[#0ea5ea] transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#131c31] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#7f92b0] uppercase tracking-wider mb-2">
                      Tell Me About Your Project
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your goal, existing stack, or current manual workflow bottlenecks..."
                      className="w-full bg-[#0b1220] border border-[#222f43] rounded-xl px-4 py-3 text-sm text-white placeholder-[#66768f] focus:outline-hidden focus:border-[#0ea5ea] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-linear w-full sm:w-auto"
                    >
                      <Send className="w-4 h-4" />
                      <span>{sending ? 'Sending...' : 'Submit Inquiry'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsAppWithDetails}
                      className="btn-border-linear w-full sm:w-auto"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#0bd1d1]" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>

                  {sendError && (
                    <p className="flex items-center gap-2 text-xs text-rose-400">
                      <AlertCircle className="w-4 h-4" />
                      <span>Could not send just now. Please use WhatsApp or email {PERSONAL_INFO.email} directly.</span>
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
