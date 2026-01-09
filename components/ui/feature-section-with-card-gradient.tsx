"use client";
import React from "react";
import { useId } from "react";
import { motion } from "framer-motion";

export function FeaturesSectionWithCardGradient() {
    return (
        <div className="py-20 lg:py-40 bg-[#030303]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-yellow-500 text-xs font-semibold tracking-[0.3em] uppercase block"
                    >
                        Premium Solutions
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extralight tracking-tight text-white"
                    >
                        The Calistic <span className="text-yellow-500 italic">Edge</span>
                    </motion.h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {grid.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative bg-gradient-to-b from-zinc-900/50 to-[#030303] p-10 rounded-[2.5rem] overflow-hidden border border-white/5 group hover:border-yellow-500/20 transition-colors"
                        >
                            <Grid size={20} />
                            <p className="text-2xl font-light text-white relative z-20 tracking-tight">
                                {feature.title}
                            </p>
                            <p className="text-white/40 mt-4 text-base font-light leading-relaxed relative z-20">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const grid = [
    {
        title: "Organic-First Approach",
        description:
            "We prioritize pure organic methods that build long-term brand equity and sustainable reach without relying solely on paid ads.",
    },
    {
        title: "Pan-India Data Insights",
        description:
            "Leverage our extensive data networks across India to target specific demographics with surgical precision and culturally resonant messaging.",
    },
    {
        title: "High-ROI Content Narratives",
        description:
            "Our content doesn't just look good; it's engineered for conversion. We craft narratives that turn viewers into lifelong customers.",
    },
    {
        title: "Pure Algorithmic Growth",
        description:
            "Understand the 'Why' behind every trend. We master platform algorithms to ensure your brand is always ahead of the curve.",
    },
    {
        title: "Strategic Consulting",
        description:
            "Direct access to marketing leaders who provide customized growth roadmaps tailored specifically to your brand's unique DNA.",
    },
    {
        title: "End-to-End Scale",
        description:
            "From initial spark to national dominance, we provide the infrastructure and execution needed to scale your brand seamlessly.",
    },
];

export const Grid = ({
    pattern,
    size,
}: {
    pattern?: number[][];
    size?: number;
}) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-20 group-hover:opacity-40 transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-yellow-500/10 to-transparent">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10"
                />
            </div>
        </div>
    );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]: any) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}
