import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AlertCircle, ArrowUpRight, CheckCircle2, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from '../../components/ui/WhatsAppIcon';
import { Button, Eyebrow, Reveal, SplitTitle } from '../ui/primitives';
import { PERSONAL_INFO } from '../../genz/data/portfolioData';
import { SERVICE_OPTIONS } from '../data/siteContent';

const field =
  'w-full rounded-[var(--radius-sm)] bg-slate-50 px-4 py-3.5 text-[16px] text-navy-900 placeholder:text-navy-500/60 outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-pink-500';

export function Contact({ preselected }: { preselected?: string }) {
  const [form, setForm] = useState({ name: '', email: '', service: preselected || SERVICE_OPTIONS[0], message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (preselected) setForm((f) => ({ ...f, service: preselected }));
  }, [preselected]);

  const options = SERVICE_OPTIONS.includes(form.service) ? SERVICE_OPTIONS : [form.service, ...SERVICE_OPTIONS];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, title: form.service, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const whatsapp = () => {
    const text = encodeURIComponent(
      `Hi Arif, my name is ${form.name || 'a visitor'}. I am interested in ${form.service}. My note: ${form.message || 'I would like to discuss a project.'}`
    );
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div id="contact" className="container-grid grid gap-12 pb-[calc(var(--radius-xl)+clamp(5rem,4rem+4vw,9rem))] md:grid-cols-12">
      <div className="md:col-span-5">
        <Eyebrow className="text-navy-900">Contact</Eyebrow>
        <SplitTitle text={"Let's build something\nthat *works for you*"} className="heading mt-10 text-[length:var(--text-fluid-lg)] text-navy-900" />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-md text-[length:var(--text-fluid-2xs)] leading-[1.45] text-navy-500">
            Tell me what is slowing your team down. I reply within a day with an honest view of what is worth automating.
          </p>
          <ul className="mt-10 border-t hairline">
            {[
              { Icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
              { Icon: WhatsAppIcon, label: 'WhatsApp', value: PERSONAL_INFO.phone, href: PERSONAL_INFO.whatsappUrl },
              { Icon: MapPin, label: 'Based in', value: `${PERSONAL_INFO.location} · working worldwide`, href: undefined }
            ].map(({ Icon, label, value, href }) => {
              const Row = href ? 'a' : 'div';
              return (
                <li key={label} className="border-b hairline">
                  <Row
                    {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-sm)] bg-slate-100 text-navy-900 transition-colors group-hover:bg-pink-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="text-label-sm block text-navy-500">{label}</span>
                      <span className="mt-1 block text-[16px] text-navy-900">{value}</span>
                    </span>
                    {href && <ArrowUpRight className="h-5 w-5 text-navy-900 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                  </Row>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
        <div className="rounded-[var(--radius-lg)] bg-white p-6 sm:p-10">
          {sent ? (
            <div className="flex min-h-[420px] flex-col items-start justify-center">
              <CheckCircle2 className="h-10 w-10 text-pink-600" strokeWidth={1.5} />
              <p className="mt-6 text-[length:var(--text-fluid-xs)] tracking-[-0.03em] text-navy-900">Message received.</p>
              <p className="mt-3 text-[16px] text-navy-500">Thanks {form.name.split(' ')[0] || 'for reaching out'}. I will reply to {form.email} within a day.</p>
              <Button variant="slate" className="mt-8" onClick={() => setSent(false)}>
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-label-sm text-navy-500">Name</span>
                  <input required className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </label>
                <label className="grid gap-2">
                  <span className="text-label-sm text-navy-500">Email</span>
                  <input required type="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="text-label-sm text-navy-500">Interested in</span>
                <select className={field} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  {options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-label-sm text-navy-500">Project details</span>
                <textarea
                  required
                  rows={6}
                  className={`${field} resize-none`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What would you like to automate or build?"
                />
              </label>
              {error && (
                <p className="flex items-center gap-2 rounded-[var(--radius-sm)] bg-pink-500/10 px-4 py-3 text-[14px] text-pink-600">
                  <AlertCircle className="h-4 w-4" /> Could not send right now. Try WhatsApp or email instead.
                </p>
              )}
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <Button type="submit" variant="pink" disabled={sending}>
                  {sending ? 'Sending...' : 'Send message'}
                </Button>
                <Button variant="slate" onClick={whatsapp} icon={<WhatsAppIcon className="h-4 w-4" />}>
                  Send via WhatsApp
                </Button>
              </div>
            </form>
          )}
        </div>
      </Reveal>
    </div>
  );
}
