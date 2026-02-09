import { motion } from "framer-motion";

export type ConnectionLineProps = {
  variant:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  className?: string;
  delay?: number;
};

export const ConnectionLine = ({
  variant,
  className,
  delay = 0,
}: ConnectionLineProps) => {
  const getPath = () => {
    switch (variant) {
      case "top-left":
        // Curves from top-left (card bottom) to bottom-right (hub)
        return "M1 1 C 1 80, 369 80, 369 151";
      case "top-center":
        // Straight down
        return "M1 1 L 1 101";
      case "top-right":
        // Curves from top-right (card bottom) to bottom-left (hub)
        return "M369 1 C 369 80, 1 80, 1 151";
      case "bottom-left":
        // Curves from bottom-left (card top) to top-right (hub)
        return "M1 152 C 1 80, 369 80, 369 1";
      case "bottom-center":
        // Straight up
        return "M1.5 97 L 1.5 1";
      case "bottom-right":
        // Curves from bottom-right (card top) to top-left (hub)
        return "M369 152 C 369 80, 1 80, 1 1";
    }
  };

  const viewBox = {
    "top-left": "0 0 370 152",
    "top-center": "0 0 2 102",
    "top-right": "0 0 370 152",
    "bottom-left": "0 0 370 153",
    "bottom-center": "0 0 3 98",
    "bottom-right": "0 0 370 153",
  }[variant];

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7F21FF" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#E2CBFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7F21FF" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Base Line */}
      <path
        d={getPath()}
        stroke={`url(#gradient-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Animated Data Packet */}
      <motion.path
        d={getPath()}
        stroke="#E2CBFF"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
        animate={{ pathOffset: 1, opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
          times: [0, 0.1, 0.9, 1],
        }}
      />
    </svg>
  );
};
