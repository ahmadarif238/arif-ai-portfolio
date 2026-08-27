import React from 'react';
import { motion } from 'framer-motion';

/**
 * Top-to-bottom flow diagram. Node colour comes from its role, not from the
 * data file, so every case study renders in the same green-on-dark system.
 */
const roleStyle = {
    input: { stroke: '#869585', text: '#E2E2E2', tag: 'IN' },
    process: { stroke: '#3C4A3D', text: '#C8C6C5', tag: 'FN' },
    agent: { stroke: '#19CE67', text: '#FFFFFF', tag: 'AGENT' },
    output: { stroke: '#48EB80', text: '#FFFFFF', tag: 'OUT' },
};

const ArchitectureDiagram = ({ nodes = [] }) => {
    if (!nodes || nodes.length === 0) return null;

    const nodeWidth = 168;
    const nodeHeight = 48;
    const gap = 24;
    const totalWidth = 720;
    const startY = 24;

    const rows = [
        nodes.filter((n) => n.type === 'input'),
        nodes.filter((n) => n.type === 'process'),
        nodes.filter((n) => n.type === 'agent'),
        nodes.filter((n) => n.type === 'output'),
    ].filter((r) => r.length > 0);

    const positioned = [];
    let y = startY;

    rows.forEach((row) => {
        const totalRowWidth = row.length * nodeWidth + (row.length - 1) * gap;
        const startX = (totalWidth - totalRowWidth) / 2;

        row.forEach((node, i) => {
            positioned.push({
                ...node,
                x: startX + i * (nodeWidth + gap),
                y,
                w: nodeWidth,
                h: nodeHeight,
            });
        });
        y += nodeHeight + gap + 32;
    });

    const svgHeight = y;

    // Connect each row to the next
    const connections = [];
    let prevRow = [];
    rows.forEach((row) => {
        const current = positioned.filter((p) => row.some((r) => r.id === p.id));
        prevRow.forEach((prev) => {
            current.forEach((curr) => {
                connections.push({
                    x1: prev.x + prev.w / 2,
                    y1: prev.y + prev.h,
                    x2: curr.x + curr.w / 2,
                    y2: curr.y,
                });
            });
        });
        prevRow = current;
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-x-auto"
        >
            <svg
                viewBox={`0 0 ${totalWidth} ${svgHeight}`}
                className="mx-auto w-full max-w-3xl"
                style={{ minWidth: '420px' }}
                role="img"
                aria-label="System architecture flow"
            >
                {connections.map((conn, i) => (
                    <line
                        key={i}
                        x1={conn.x1}
                        y1={conn.y1}
                        x2={conn.x2}
                        y2={conn.y2}
                        stroke="#3C4A3D"
                        strokeWidth="1"
                        strokeDasharray="5 5"
                    />
                ))}

                {positioned.map((node) => {
                    const style = roleStyle[node.type] || roleStyle.process;
                    return (
                        <g key={node.id}>
                            <rect
                                x={node.x}
                                y={node.y}
                                width={node.w}
                                height={node.h}
                                rx="2"
                                fill="#1A1A1A"
                                stroke={style.stroke}
                                strokeWidth="1"
                            />
                            <text
                                x={node.x + 14}
                                y={node.y + 18}
                                fill={style.stroke}
                                fontSize="8"
                                fontWeight="600"
                                letterSpacing="1.6"
                                fontFamily="Rubik, sans-serif"
                            >
                                {style.tag}
                            </text>
                            <text
                                x={node.x + 14}
                                y={node.y + 34}
                                fill={style.text}
                                fontSize="12"
                                fontWeight="500"
                                fontFamily="Rubik, sans-serif"
                            >
                                {node.label}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </motion.div>
    );
};

export default ArchitectureDiagram;
