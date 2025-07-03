// src/components/AnimatedOnScroll.jsx
"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function AnimatedOnScroll({ children, delay = 0, className = "" }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delayChildren: delay,
                        staggerChildren: 0.2,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>

    );
}
