import React from 'react';

// ContractIQ - Legal document with magnifying glass & shield
const ContractIQIcon = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Document */}
        <rect x="30" y="20" width="40" height="52" rx="4" stroke="url(#contractGrad)" strokeWidth="2" fill="none" opacity="0.7" />
        <rect x="34" y="14" width="40" height="52" rx="4" stroke="url(#contractGrad)" strokeWidth="2" fill="rgba(25,206,103,0.08)" />
        <line x1="42" y1="26" x2="66" y2="26" stroke="#19CE67" strokeWidth="1.5" opacity="0.5" />
        <line x1="42" y1="33" x2="62" y2="33" stroke="#19CE67" strokeWidth="1.5" opacity="0.4" />
        <line x1="42" y1="40" x2="58" y2="40" stroke="#19CE67" strokeWidth="1.5" opacity="0.3" />
        <line x1="42" y1="47" x2="64" y2="47" stroke="#19CE67" strokeWidth="1.5" opacity="0.3" />
        <line x1="42" y1="54" x2="56" y2="54" stroke="#19CE67" strokeWidth="1.5" opacity="0.2" />
        {/* Magnifying Glass */}
        <circle cx="78" cy="72" r="16" stroke="url(#contractGrad)" strokeWidth="2.5" fill="rgba(25,206,103,0.06)" />
        <line x1="90" y1="84" x2="100" y2="94" stroke="url(#contractGrad)" strokeWidth="3" strokeLinecap="round" />
        {/* Shield Check */}
        <path d="M78 62 L78 56 C82 54 84 54 86 56 L86 62 C86 68 82 72 78 74 C74 72 70 68 70 62 L70 56 C72 54 74 54 78 56Z"
            stroke="#19CE67" strokeWidth="1.5" fill="rgba(25,206,103,0.1)" opacity="0.8" />
        <polyline points="73,64 76,67 83,60" stroke="#19CE67" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        {/* Connection nodes */}
        <circle cx="28" cy="80" r="3" fill="#19CE67" opacity="0.4" />
        <circle cx="40" cy="90" r="3" fill="#19CE67" opacity="0.3" />
        <circle cx="55" cy="95" r="3" fill="#19CE67" opacity="0.5" />
        <line x1="28" y1="80" x2="40" y2="90" stroke="#19CE67" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="90" x2="55" y2="95" stroke="#19CE67" strokeWidth="1" opacity="0.3" />
        <defs>
            <linearGradient id="contractGrad" x1="30" y1="14" x2="100" y2="94">
                <stop offset="0%" stopColor="#48EB80" />
                <stop offset="100%" stopColor="#19CE67" />
            </linearGradient>
        </defs>
    </svg>
);

// VivaGraph AI - Microphone with brain/neural waves
const VivaGraphIcon = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Microphone */}
        <rect x="50" y="28" width="20" height="36" rx="10" stroke="url(#vivaGrad)" strokeWidth="2.5" fill="rgba(25,206,103,0.1)" />
        <path d="M42 52 C42 66 48 72 60 72 C72 72 78 66 78 52" stroke="url(#vivaGrad)" strokeWidth="2" fill="none" />
        <line x1="60" y1="72" x2="60" y2="82" stroke="url(#vivaGrad)" strokeWidth="2" />
        <line x1="50" y1="82" x2="70" y2="82" stroke="url(#vivaGrad)" strokeWidth="2" strokeLinecap="round" />
        {/* Sound waves */}
        <path d="M82 40 C86 44 86 56 82 60" stroke="#19CE67" strokeWidth="1.5" opacity="0.5" fill="none" strokeLinecap="round" />
        <path d="M88 34 C94 40 94 60 88 66" stroke="#19CE67" strokeWidth="1.5" opacity="0.35" fill="none" strokeLinecap="round" />
        <path d="M38 40 C34 44 34 56 38 60" stroke="#19CE67" strokeWidth="1.5" opacity="0.5" fill="none" strokeLinecap="round" />
        <path d="M32 34 C26 40 26 60 32 66" stroke="#19CE67" strokeWidth="1.5" opacity="0.35" fill="none" strokeLinecap="round" />
        {/* Neural/brain nodes */}
        <circle cx="30" cy="90" r="4" stroke="#48EB80" strokeWidth="1.5" fill="rgba(72,235,128,0.15)" />
        <circle cx="50" cy="96" r="3" stroke="#48EB80" strokeWidth="1.5" fill="rgba(72,235,128,0.1)" />
        <circle cx="70" cy="96" r="3" stroke="#48EB80" strokeWidth="1.5" fill="rgba(72,235,128,0.1)" />
        <circle cx="90" cy="90" r="4" stroke="#48EB80" strokeWidth="1.5" fill="rgba(72,235,128,0.15)" />
        <circle cx="60" cy="104" r="3" stroke="#48EB80" strokeWidth="1" fill="rgba(72,235,128,0.1)" />
        <line x1="30" y1="90" x2="50" y2="96" stroke="#48EB80" strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="96" x2="70" y2="96" stroke="#48EB80" strokeWidth="1" opacity="0.4" />
        <line x1="70" y1="96" x2="90" y2="90" stroke="#48EB80" strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="96" x2="60" y2="104" stroke="#48EB80" strokeWidth="1" opacity="0.3" />
        <line x1="70" y1="96" x2="60" y2="104" stroke="#48EB80" strokeWidth="1" opacity="0.3" />
        {/* Graduation cap accent */}
        <polygon points="96,20 106,26 96,32 86,26" stroke="#19CE67" strokeWidth="1.5" fill="rgba(25,206,103,0.15)" opacity="0.6" />
        <line x1="96" y1="32" x2="96" y2="38" stroke="#19CE67" strokeWidth="1" opacity="0.4" />
        <defs>
            <linearGradient id="vivaGrad" x1="40" y1="28" x2="80" y2="82">
                <stop offset="0%" stopColor="#48EB80" />
                <stop offset="100%" stopColor="#19CE67" />
            </linearGradient>
        </defs>
    </svg>
);

// SalesAI - Funnel with email and growth chart
const SalesAIIcon = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Sales Funnel */}
        <path d="M30 24 L90 24 L72 52 L72 78 L48 78 L48 52 Z" stroke="url(#salesGrad)" strokeWidth="2" fill="rgba(25,206,103,0.06)" />
        <line x1="36" y1="32" x2="84" y2="32" stroke="#19CE67" strokeWidth="1" opacity="0.3" />
        <line x1="42" y1="40" x2="78" y2="40" stroke="#19CE67" strokeWidth="1" opacity="0.25" />
        {/* Small dots flowing through funnel */}
        <circle cx="52" cy="28" r="2" fill="#48EB80" opacity="0.6" />
        <circle cx="68" cy="28" r="2" fill="#48EB80" opacity="0.5" />
        <circle cx="60" cy="36" r="2" fill="#48EB80" opacity="0.7" />
        <circle cx="56" cy="46" r="1.5" fill="#19CE67" opacity="0.6" />
        <circle cx="60" cy="60" r="2" fill="#19CE67" opacity="0.8" />
        {/* Growth chart */}
        <polyline points="18,100 30,94 42,96 54,86 66,80 78,70 90,58" stroke="#19CE67" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        <circle cx="90" cy="58" r="3" fill="#19CE67" opacity="0.5" />
        {/* Arrow up */}
        <path d="M96 62 L96 48 L100 54 M96 48 L92 54" stroke="#19CE67" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
        {/* Email icon */}
        <rect x="14" y="60" width="22" height="16" rx="2" stroke="#19CE67" strokeWidth="1.5" fill="rgba(25,206,103,0.08)" opacity="0.6" />
        <polyline points="14,60 25,70 36,60" stroke="#19CE67" strokeWidth="1.5" fill="none" opacity="0.5" />
        <defs>
            <linearGradient id="salesGrad" x1="30" y1="24" x2="90" y2="78">
                <stop offset="0%" stopColor="#48EB80" />
                <stop offset="100%" stopColor="#19CE67" />
            </linearGradient>
        </defs>
    </svg>
);

// Supply Chain - Warehouse with connected nodes & gears
const SupplyChainIcon = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Warehouse */}
        <path d="M60 18 L90 38 L90 72 L30 72 L30 38 Z" stroke="url(#supplyGrad)" strokeWidth="2" fill="rgba(25,206,103,0.06)" />
        <rect x="50" y="52" width="20" height="20" stroke="url(#supplyGrad)" strokeWidth="1.5" fill="rgba(25,206,103,0.08)" />
        <line x1="60" y1="52" x2="60" y2="72" stroke="#19CE67" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="62" x2="70" y2="62" stroke="#19CE67" strokeWidth="1" opacity="0.3" />
        {/* Boxes */}
        <rect x="34" y="56" width="12" height="10" rx="1" stroke="#48EB80" strokeWidth="1.5" fill="rgba(72,235,128,0.1)" opacity="0.6" />
        <rect x="74" y="56" width="12" height="10" rx="1" stroke="#48EB80" strokeWidth="1.5" fill="rgba(72,235,128,0.1)" opacity="0.6" />
        {/* Supply chain flow nodes */}
        <circle cx="20" cy="90" r="6" stroke="url(#supplyGrad)" strokeWidth="1.5" fill="rgba(25,206,103,0.1)" />
        <circle cx="45" cy="90" r="6" stroke="url(#supplyGrad)" strokeWidth="1.5" fill="rgba(25,206,103,0.1)" />
        <circle cx="75" cy="90" r="6" stroke="url(#supplyGrad)" strokeWidth="1.5" fill="rgba(25,206,103,0.1)" />
        <circle cx="100" cy="90" r="6" stroke="url(#supplyGrad)" strokeWidth="1.5" fill="rgba(25,206,103,0.1)" />
        {/* Arrows between nodes */}
        <line x1="26" y1="90" x2="39" y2="90" stroke="#19CE67" strokeWidth="1.5" opacity="0.5" markerEnd="url(#arrowSupply)" />
        <line x1="51" y1="90" x2="69" y2="90" stroke="#19CE67" strokeWidth="1.5" opacity="0.5" />
        <line x1="81" y1="90" x2="94" y2="90" stroke="#19CE67" strokeWidth="1.5" opacity="0.5" />
        {/* Small arrows */}
        <polygon points="39,87 39,93 42,90" fill="#19CE67" opacity="0.5" />
        <polygon points="69,87 69,93 72,90" fill="#19CE67" opacity="0.5" />
        <polygon points="94,87 94,93 97,90" fill="#19CE67" opacity="0.5" />
        {/* Gear */}
        <circle cx="100" cy="30" r="10" stroke="#48EB80" strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="100" cy="30" r="5" stroke="#48EB80" strokeWidth="1" fill="rgba(72,235,128,0.1)" opacity="0.4" />
        <line x1="100" y1="18" x2="100" y2="22" stroke="#48EB80" strokeWidth="2" opacity="0.4" />
        <line x1="100" y1="38" x2="100" y2="42" stroke="#48EB80" strokeWidth="2" opacity="0.4" />
        <line x1="88" y1="30" x2="92" y2="30" stroke="#48EB80" strokeWidth="2" opacity="0.4" />
        <line x1="108" y1="30" x2="112" y2="30" stroke="#48EB80" strokeWidth="2" opacity="0.4" />
        <defs>
            <linearGradient id="supplyGrad" x1="20" y1="18" x2="100" y2="100">
                <stop offset="0%" stopColor="#48EB80" />
                <stop offset="100%" stopColor="#19CE67" />
            </linearGradient>
        </defs>
    </svg>
);

// Stock News - Stock chart with notification bell
const StockNewsIcon = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Chart background grid */}
        <line x1="20" y1="30" x2="20" y2="90" stroke="#2A2A2A" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="90" x2="105" y2="90" stroke="#2A2A2A" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="50" x2="105" y2="50" stroke="#2A2A2A" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
        <line x1="20" y1="70" x2="105" y2="70" stroke="#2A2A2A" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
        {/* Candlestick bars */}
        <line x1="32" y1="45" x2="32" y2="75" stroke="#869585" strokeWidth="1" opacity="0.5" />
        <rect x="28" y="52" width="8" height="16" fill="rgba(134,149,133,0.3)" stroke="#869585" strokeWidth="1" />
        <line x1="48" y1="40" x2="48" y2="72" stroke="#19CE67" strokeWidth="1" opacity="0.5" />
        <rect x="44" y="46" width="8" height="18" fill="rgba(25,206,103,0.3)" stroke="#19CE67" strokeWidth="1" />
        <line x1="64" y1="35" x2="64" y2="65" stroke="#19CE67" strokeWidth="1" opacity="0.5" />
        <rect x="60" y="38" width="8" height="20" fill="rgba(25,206,103,0.3)" stroke="#19CE67" strokeWidth="1" />
        <line x1="80" y1="28" x2="80" y2="58" stroke="#869585" strokeWidth="1" opacity="0.5" />
        <rect x="76" y="34" width="8" height="16" fill="rgba(134,149,133,0.3)" stroke="#869585" strokeWidth="1" />
        <line x1="96" y1="22" x2="96" y2="52" stroke="#19CE67" strokeWidth="1" opacity="0.5" />
        <rect x="92" y="26" width="8" height="18" fill="rgba(25,206,103,0.3)" stroke="#19CE67" strokeWidth="1" />
        {/* Trend line */}
        <polyline points="32,56 48,50 64,42 80,40 96,32" stroke="url(#stockGrad)" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bell notification */}
        <path d="M30 100 C30 94 34 92 38 92 C38 88 42 86 46 86 C50 86 54 88 54 92 C58 92 62 94 62 100 Z"
            stroke="#48EB80" strokeWidth="1.5" fill="rgba(72,235,128,0.1)" opacity="0.7" />
        <circle cx="46" cy="104" r="3" stroke="#48EB80" strokeWidth="1" fill="rgba(72,235,128,0.15)" opacity="0.7" />
        {/* Alert dot */}
        <circle cx="60" cy="88" r="4" fill="#869585" opacity="0.8" />
        {/* News lines */}
        <line x1="72" y1="96" x2="100" y2="96" stroke="#869585" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <line x1="72" y1="102" x2="92" y2="102" stroke="#869585" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
        <defs>
            <linearGradient id="stockGrad" x1="32" y1="56" x2="96" y2="32">
                <stop offset="0%" stopColor="#869585" />
                <stop offset="50%" stopColor="#48EB80" />
                <stop offset="100%" stopColor="#19CE67" />
            </linearGradient>
        </defs>
    </svg>
);

// AI Operations Copilot - Server with monitoring dashboard
const AIOpsIcon = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Server rack */}
        <rect x="18" y="24" width="40" height="60" rx="4" stroke="url(#opsGrad)" strokeWidth="2" fill="rgba(25,206,103,0.05)" />
        <line x1="18" y1="44" x2="58" y2="44" stroke="#19CE67" strokeWidth="1" opacity="0.3" />
        <line x1="18" y1="64" x2="58" y2="64" stroke="#19CE67" strokeWidth="1" opacity="0.3" />
        {/* Server LEDs */}
        <circle cx="28" cy="34" r="2.5" fill="#19CE67" opacity="0.7" />
        <circle cx="36" cy="34" r="2.5" fill="#19CE67" opacity="0.5" />
        <circle cx="44" cy="34" r="2.5" fill="#48EB80" opacity="0.5" />
        <circle cx="28" cy="54" r="2.5" fill="#19CE67" opacity="0.7" />
        <circle cx="36" cy="54" r="2.5" fill="#19CE67" opacity="0.5" />
        <circle cx="44" cy="54" r="2.5" fill="#869585" opacity="0.5" />
        <circle cx="28" cy="74" r="2.5" fill="#19CE67" opacity="0.6" />
        <circle cx="36" cy="74" r="2.5" fill="#19CE67" opacity="0.5" />
        <circle cx="44" cy="74" r="2.5" fill="#19CE67" opacity="0.5" />
        {/* Server lines */}
        <line x1="50" y1="34" x2="54" y2="34" stroke="#19CE67" strokeWidth="1.5" opacity="0.3" />
        <line x1="50" y1="54" x2="54" y2="54" stroke="#19CE67" strokeWidth="1.5" opacity="0.3" />
        <line x1="50" y1="74" x2="54" y2="74" stroke="#19CE67" strokeWidth="1.5" opacity="0.3" />
        {/* Dashboard panel */}
        <rect x="66" y="24" width="40" height="30" rx="3" stroke="url(#opsGrad)" strokeWidth="1.5" fill="rgba(25,206,103,0.05)" />
        {/* Mini chart in dashboard */}
        <polyline points="72,46 78,40 84,44 90,36 96,38 100,30" stroke="#19CE67" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round" />
        {/* Gear */}
        <circle cx="86" cy="72" r="12" stroke="#19CE67" strokeWidth="1.5" fill="none" opacity="0.35" />
        <circle cx="86" cy="72" r="6" stroke="#19CE67" strokeWidth="1" fill="rgba(25,206,103,0.08)" opacity="0.35" />
        {/* Gear teeth */}
        <line x1="86" y1="58" x2="86" y2="62" stroke="#19CE67" strokeWidth="2.5" opacity="0.35" />
        <line x1="86" y1="82" x2="86" y2="86" stroke="#19CE67" strokeWidth="2.5" opacity="0.35" />
        <line x1="72" y1="72" x2="76" y2="72" stroke="#19CE67" strokeWidth="2.5" opacity="0.35" />
        <line x1="96" y1="72" x2="100" y2="72" stroke="#19CE67" strokeWidth="2.5" opacity="0.35" />
        {/* Connection line */}
        <line x1="58" y1="50" x2="66" y2="40" stroke="#19CE67" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
        {/* Ticket icon */}
        <rect x="70" y="92" width="20" height="14" rx="2" stroke="#19CE67" strokeWidth="1.5" fill="rgba(25,206,103,0.08)" opacity="0.5" />
        <line x1="74" y1="97" x2="86" y2="97" stroke="#19CE67" strokeWidth="1" opacity="0.3" />
        <line x1="74" y1="101" x2="82" y2="101" stroke="#19CE67" strokeWidth="1" opacity="0.2" />
        <defs>
            <linearGradient id="opsGrad" x1="18" y1="24" x2="106" y2="84">
                <stop offset="0%" stopColor="#48EB80" />
                <stop offset="100%" stopColor="#19CE67" />
            </linearGradient>
        </defs>
    </svg>
);

// Voice-Enabled Executive Agent - Voice wave with orbiting icons
const VoiceAgentIcon = () => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Central speaker/device */}
        <circle cx="60" cy="55" r="16" stroke="url(#voiceGrad)" strokeWidth="2" fill="rgba(25,206,103,0.08)" />
        <circle cx="60" cy="55" r="8" stroke="url(#voiceGrad)" strokeWidth="1.5" fill="rgba(25,206,103,0.12)" />
        <circle cx="60" cy="55" r="3" fill="#19CE67" opacity="0.6" />
        {/* Voice waveform */}
        <path d="M60 30 L60 22" stroke="#48EB80" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
        <path d="M52 26 C52 18 60 14 60 14 C60 14 68 18 68 26" stroke="#48EB80" strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round" />
        <path d="M46 30 C46 16 60 10 60 10 C60 10 74 16 74 30" stroke="#48EB80" strokeWidth="1.5" fill="none" opacity="0.2" strokeLinecap="round" />
        {/* Orbit ring */}
        <ellipse cx="60" cy="60" rx="40" ry="24" stroke="#19CE67" strokeWidth="1" opacity="0.15" strokeDasharray="4 6" />
        {/* Calendar icon (orbiting) */}
        <g transform="translate(92, 48)">
            <rect x="0" y="0" width="16" height="16" rx="2" stroke="#48EB80" strokeWidth="1.5" fill="rgba(72,235,128,0.1)" />
            <line x1="0" y1="5" x2="16" y2="5" stroke="#48EB80" strokeWidth="1" opacity="0.5" />
            <line x1="4" y1="0" x2="4" y2="3" stroke="#48EB80" strokeWidth="1.5" opacity="0.5" />
            <line x1="12" y1="0" x2="12" y2="3" stroke="#48EB80" strokeWidth="1.5" opacity="0.5" />
            <rect x="3" y="8" width="3" height="2" fill="#48EB80" opacity="0.4" />
            <rect x="8" y="8" width="3" height="2" fill="#48EB80" opacity="0.4" />
            <rect x="3" y="12" width="3" height="2" fill="#48EB80" opacity="0.3" />
        </g>
        {/* Email icon (orbiting) */}
        <g transform="translate(12, 48)">
            <rect x="0" y="2" width="18" height="13" rx="2" stroke="#48EB80" strokeWidth="1.5" fill="rgba(72,235,128,0.1)" />
            <polyline points="0,2 9,10 18,2" stroke="#48EB80" strokeWidth="1.5" fill="none" opacity="0.5" />
        </g>
        {/* Search icon (orbiting bottom) */}
        <g transform="translate(50, 82)">
            <circle cx="8" cy="6" r="6" stroke="#48EB80" strokeWidth="1.5" fill="rgba(72,235,128,0.08)" />
            <line x1="12" y1="10" x2="18" y2="16" stroke="#48EB80" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </g>
        {/* Sparkle accents */}
        <circle cx="40" cy="36" r="1.5" fill="#48EB80" opacity="0.4" />
        <circle cx="82" cy="72" r="1.5" fill="#48EB80" opacity="0.4" />
        <circle cx="36" cy="76" r="1.5" fill="#48EB80" opacity="0.3" />
        <defs>
            <linearGradient id="voiceGrad" x1="44" y1="39" x2="76" y2="71">
                <stop offset="0%" stopColor="#48EB80" />
                <stop offset="100%" stopColor="#19CE67" />
            </linearGradient>
        </defs>
    </svg>
);

// Icon mapping by project ID
export const projectIconMap = {
    'contract-iq': ContractIQIcon,
    'vivagraph-ai': VivaGraphIcon,
    'ai-sales-automation-agent': SalesAIIcon,
    'smart-supply-chain-agent': SupplyChainIcon,
    'stock-news-alert-agent': StockNewsIcon,
    'ai-operations-copilot': AIOpsIcon,
    'voice-enabled-executive-agent': VoiceAgentIcon,
};

// Main component to render the right icon for a project
const ProjectIcon = ({ projectId, className = '' }) => {
    const IconComponent = projectIconMap[projectId];
    if (!IconComponent) return null;
    return (
        <div className={className}>
            <IconComponent />
        </div>
    );
};

export default ProjectIcon;
