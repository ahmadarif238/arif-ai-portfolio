import React from 'react';

const items = [
    'Web Development',
    'App Development',
    'AI Agents',
    'Chatbot Development',
    'AI Calling Agents',
    'Workflow Automation',
    'AI Integration',
];

/** Tilted green band that breaks the vertical rhythm between sections. */
const Marquee = () => {
    return (
        <div className="relative z-20 flex w-full -rotate-1 scale-[1.03] overflow-hidden whitespace-nowrap bg-primary py-7">
            <div className="flex animate-marquee items-center">
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="mx-8 font-display text-[24px] font-semibold uppercase tracking-[0.04em] text-on-primary lg:text-[30px]"
                    >
                        &bull; {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
