import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ClassyLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

const ClassyLoader = React.forwardRef<HTMLDivElement, ClassyLoaderProps>(
  ({ className, color = "#facc15", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative flex flex-col items-center justify-center p-8 w-full max-w-md", className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <div className="relative flex items-center justify-center mb-12 will-change-transform">
          {/* Geometric golden ring animation */}
          <motion.div
            className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border border-yellow-500/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-28 h-28 md:w-40 md:h-40 rounded-full border-t border-yellow-500/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          {/* Center Logo with Pulse Effect */}
          <motion.div
            className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex items-center justify-center bg-black/50 backdrop-blur-sm border border-yellow-500/20"
            animate={{
              boxShadow: [
                "0 0 0px 0px rgba(250, 204, 21, 0)",
                "0 0 20px 2px rgba(250, 204, 21, 0.2)",
                "0 0 0px 0px rgba(250, 204, 21, 0)"
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.img
              src="/logo-gold.png"
              alt="Calistic Media Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-xl md:text-3xl font-extralight tracking-[0.3em] md:tracking-[0.4em] uppercase"
          >
            Calistic <span className="text-yellow-400 font-medium">Media</span>
          </motion.div>

          <div className="flex items-center gap-2 md:gap-3">
            <motion.div
              className="h-[1px] bg-yellow-500/20 w-8 md:w-12"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.span
              className="text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] text-white/30 uppercase font-medium whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Premier Marketing Agency
            </motion.span>
            <motion.div
              className="h-[1px] bg-yellow-500/20 w-8 md:w-12"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </div>

        {/* Progress line at the bottom */}
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-48 md:w-64 h-[1px] bg-white/5 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-yellow-500/50"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    );
  }
);
ClassyLoader.displayName = "ClassyLoader";

export { ClassyLoader as GooeyLoader };
