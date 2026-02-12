import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureDiagram = ({ nodes = [] }) => {
    if (!nodes || nodes.length === 0) return null;

    const nodeWidth = 160;
    const nodeHeight = 44;
    const gap = 24;
    const totalWidth = 700;
    const startY = 30;

    // Layout: flow from top to bottom, agents fan out in the middle
    const inputNodes = nodes.filter(n => n.type === 'input');
    const processNodes = nodes.filter(n => n.type === 'process');
    const agentNodes = nodes.filter(n => n.type === 'agent');
    const outputNodes = nodes.filter(n => n.type === 'output');

    const rows = [inputNodes, processNodes, agentNodes, outputNodes].filter(r => r.length > 0);

    let positioned = [];
    let y = startY;

    rows.forEach((row, rowIndex) => {
        const totalRowWidth = row.length * nodeWidth + (row.length - 1) * gap;
        const startX = (totalWidth - totalRowWidth) / 2;

        row.forEach((node, i) => {
            positioned.push({
                ...node,
                x: startX + i * (nodeWidth + gap),
                y: y,
                w: nodeWidth,
                h: nodeHeight
            });
        });
        y += nodeHeight + gap + 30;
    });

    const svgHeight = y + 20;

    // Draw connections between consecutive rows
    const connections = [];
    let prevRow = [];
    rows.forEach((row) => {
        const currentPositioned = positioned.filter(p => row.some(r => r.id === p.id));
        if (prevRow.length > 0) {
            prevRow.forEach(prev => {
                currentPositioned.forEach(curr => {
                    connections.push({
                        x1: prev.x + prev.w / 2,
                        y1: prev.y + prev.h,
                        x2: curr.x + curr.w / 2,
                        y2: curr.y
                    });
                });
            });
        }
        prevRow = currentPositioned;
    });

    const typeIcons = {
        input: '📥',
        process: '⚙️',
        agent: '🤖',
        output: '📤'
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full overflow-x-auto"
        >
            <svg viewBox={`0 0 ${totalWidth} ${svgHeight}`} className="w-full max-w-2xl mx-auto" style={{ minWidth: '400px' }}>
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Connections */}
                {connections.map((conn, i) => (
                    <line
                        key={i}
                        x1={conn.x1}
                        y1={conn.y1}
                        x2={conn.x2}
                        y2={conn.y2}
                        stroke="#4b5563"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        opacity="0.6"
                    />
                ))}

                {/* Nodes */}
                {positioned.map((node) => (
                    <g key={node.id}>
                        <rect
                            x={node.x}
                            y={node.y}
                            width={node.w}
                            height={node.h}
                            rx="10"
                            fill="#1f2937"
                            stroke={node.color || '#6366f1'}
                            strokeWidth="1.5"
                            filter="url(#glow)"
                        />
                        <text
                            x={node.x + 14}
                            y={node.y + node.h / 2 + 1}
                            fill="#e5e7eb"
                            fontSize="11"
                            fontWeight="600"
                            dominantBaseline="middle"
                        >
                            {typeIcons[node.type]} {node.label}
                        </text>
                    </g>
                ))}
            </svg>
        </motion.div>
    );
};

export default ArchitectureDiagram;
