import WhatsAppIcon from '../ui/WhatsAppIcon';
import { WHATSAPP_URL } from '../../lib/contact';

/**
 * Floating WhatsApp action, present on every page. Styled as one of the
 * site's pink square buttons; the label unfurls on hover.
 */
const WhatsAppButton = () => (
    <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Arif Ahmad Khan on WhatsApp"
        className="group fixed bottom-5 right-5 z-[120] flex h-14 items-center overflow-hidden rounded-[7px] bg-[#ff488b] px-4 text-[#101421] shadow-[0_10px_40px_rgba(255,72,139,.35)] transition-[padding,background-color] duration-300 hover:bg-[#f6186a] lg:bottom-8 lg:right-8"
    >
        <WhatsAppIcon className="h-6 w-6 shrink-0" />
        <span className="text-label hidden max-w-0 whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[200px] group-hover:pl-3 group-hover:opacity-100 md:block">
            Chat on WhatsApp
        </span>
    </a>
);

export default WhatsAppButton;
