/** Single source of truth for contact details used across the site. */

export const WHATSAPP_NUMBER = '923438992587';
export const WHATSAPP_DISPLAY = '+92 343 8992587';

const GREETING = 'Hi Arif, I found you through your portfolio and would like to discuss a project.';

/** wa.me deep link. Opens the app on mobile and WhatsApp Web on desktop. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING)}`;

export const EMAIL = 'ahmadarif238@gmail.com';
export const GITHUB_URL = 'https://github.com/ahmadarif238';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/arif-a-0b853580';
