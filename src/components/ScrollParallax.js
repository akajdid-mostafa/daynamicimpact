import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ScrollParallax = ({
    className,
    animateIn,
    delay,
    initiallyVisible,
    style,
    children,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Animation variants based on animateIn prop
    const getAnimationVariant = () => {
        switch (animateIn) {
            case "fadeInUp":
                return {
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                };
            case "fadeInDown":
                return {
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                };
            case "fadeInLeft":
                return {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                };
            case "fadeInRight":
                return {
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                };
            case "zoomIn":
                return {
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                };
            default: // fadeIn
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                };
        }
    };

    const animationVariant = getAnimationVariant();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={initiallyVisible ? "visible" : "hidden"}
            animate={isInView ? "visible" : "hidden"}
            variants={animationVariant}
            transition={{
                duration: 1,
                delay: delay || 0,
                ease: "easeOut"
            }}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default ScrollParallax;
