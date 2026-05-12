"use client";

import { forwardRef, type ReactNode, type ComponentPropsWithoutRef } from "react";
import {
  motion,
  useReducedMotion,
  AnimatePresence as FramerAnimatePresence,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  transitions,
  viewportSettings,
} from "@/lib/animations";

export const AnimatePresence = FramerAnimatePresence;
export { useReducedMotion } from "framer-motion";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BaseMotionProps {
  children: ReactNode;
  disabled?: boolean;
  variants?: Variants;
  className?: string;
}

type MotionDivProps = BaseMotionProps &
  Omit<HTMLMotionProps<"div">, "variants" | "children">;

interface FadeInUpProps extends MotionDivProps {
  delay?: number;
}

interface StaggerContainerProps extends MotionDivProps {
  staggerDelay?: number;
  delayChildren?: number;
}

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

export const FadeInUp = forwardRef<HTMLDivElement, FadeInUpProps>(
  (
    {
      children,
      disabled,
      variants = fadeInUp,
      delay = 0,
      className,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    if (disabled || prefersReducedMotion) {
      return (
        <div ref={ref} className={className} {...filterMotionProps(props)}>
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings.standard}
        variants={variants}
        transition={{ ...transitions.smooth, delay }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
FadeInUp.displayName = "FadeInUp";

export const FadeIn = forwardRef<HTMLDivElement, FadeInUpProps>(
  (
    {
      children,
      disabled,
      variants = fadeIn,
      delay = 0,
      className,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    if (disabled || prefersReducedMotion) {
      return (
        <div ref={ref} className={className} {...filterMotionProps(props)}>
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings.standard}
        variants={variants}
        transition={{ ...transitions.smooth, delay }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
FadeIn.displayName = "FadeIn";

export const ScaleIn = forwardRef<HTMLDivElement, FadeInUpProps>(
  (
    {
      children,
      disabled,
      variants = scaleIn,
      delay = 0,
      className,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    if (disabled || prefersReducedMotion) {
      return (
        <div ref={ref} className={className} {...filterMotionProps(props)}>
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings.standard}
        variants={variants}
        transition={{ ...transitions.spring, delay }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
ScaleIn.displayName = "ScaleIn";

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  (
    {
      children,
      disabled,
      variants,
      staggerDelay = 0.1,
      delayChildren = 0.1,
      className,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    if (disabled || prefersReducedMotion) {
      return (
        <div ref={ref} className={className} {...filterMotionProps(props)}>
          {children}
        </div>
      );
    }

    const containerVariants: Variants = variants ?? {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delayChildren,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings.standard}
        variants={containerVariants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
StaggerContainer.displayName = "StaggerContainer";

export const StaggerItem = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, disabled, variants = fadeInUp, className, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (disabled || prefersReducedMotion) {
      return (
        <div ref={ref} className={className} {...filterMotionProps(props)}>
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        variants={variants}
        transition={transitions.smooth}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
StaggerItem.displayName = "StaggerItem";

interface MotionDivComponentProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  disabled?: boolean;
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivComponentProps>(
  ({ children, disabled, className, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    if (disabled || prefersReducedMotion) {
      return (
        <div ref={ref} className={className} {...filterMotionProps(props)}>
          {children}
        </div>
      );
    }

    return (
      <motion.div ref={ref} className={className} {...props}>
        {children}
      </motion.div>
    );
  }
);
MotionDiv.displayName = "MotionDiv";

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function filterMotionProps(
  props: Record<string, unknown>
): ComponentPropsWithoutRef<"div"> {
  const motionPropKeys = [
    "initial", "animate", "exit", "variants", "transition",
    "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView",
    "viewport", "onAnimationStart", "onAnimationComplete", "onUpdate",
    "onDragStart", "onDrag", "onDragEnd",
    "dragConstraints", "dragElastic", "dragMomentum", "dragTransition",
    "drag", "dragControls", "dragListener", "dragPropagation",
    "dragDirectionLock", "onDirectionLock", "onDragTransitionEnd",
    "layout", "layoutId", "onLayoutAnimationStart", "onLayoutAnimationComplete",
    "layoutDependency", "layoutScroll", "layoutRoot",
    "transformTemplate", "custom", "inherit",
    "onBeforeLayoutMeasure", "onViewportEnter", "onViewportLeave",
  ];

  const filtered: Record<string, unknown> = {};
  for (const key in props) {
    if (!motionPropKeys.includes(key)) {
      filtered[key] = props[key];
    }
  }
  return filtered as ComponentPropsWithoutRef<"div">;
}
