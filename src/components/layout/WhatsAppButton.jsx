import React from 'react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { WHATSAPP_URL } from '../../lib/contact';

/**
 * Floating WhatsApp action, present on every page. Sits below the header
 * (z-50) and the mobile menu overlay (z-40) so it never covers navigation.
 */
const WhatsAppButton = () => {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Arif Ahmad Khan on WhatsApp"
            className="group fixed bottom-6 right-6 z-30 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] pl-4 pr-4 text-[#0B0B0B] shadow-[0_6px_28px_rgba(37,211,102,0.4)] transition-all duration-300 hover:pr-6 hover:shadow-[0_8px_34px_rgba(37,211,102,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white lg:bottom-8 lg:right-8"
        >
            <span className="flex h-14 w-6 items-center justify-center">
                <WhatsAppIcon className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            </span>

            {/* Label unfurls on hover, stays hidden on touch screens */}
            <span className="hidden max-w-0 whitespace-nowrap font-display text-[14px] font-bold uppercase tracking-[0.12em] opacity-0 transition-all duration-300 group-hover:max-w-[180px] group-hover:pl-3 group-hover:opacity-100 md:block">
                Chat on WhatsApp
            </span>
        </a>
    );
};

export default WhatsAppButton;
