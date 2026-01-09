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
        className={cn("relative flex flex-col items-center justify-center p-8", className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <div className="relative flex items-center justify-center mb-12">
          {/* Geometric golden ring animation */}
          <motion.div
            className="absolute w-48 h-48 rounded-full border border-yellow-500/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-40 h-40 rounded-full border-t border-yellow-500/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Center Logo with Pulse Effect */}
          <motion.div
            className="relative z-10 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-black/50 backdrop-blur-sm border border-yellow-500/20"
            animate={{
              boxShadow: [
                "0 0 0px 0px rgba(250, 204, 21, 0)",
                "0 0 20px 2px rgba(250, 204, 21, 0.2)",
                "0 0 0px 0px rgba(250, 204, 21, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.img
              src="/calistic-logo.png"
              alt="Calistic Media Logo"
              className="w-16 h-16 object-contain"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl font-extralight tracking-[0.4em] uppercase"
          >
            Calistic <span className="text-yellow-400 font-medium">Media</span>
          </motion.div>

          <div className="flex items-center gap-3">
            <motion.div
              className="h-[1px] bg-yellow-500/20 w-12"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.span
              className="text-[10px] tracking-[0.6em] text-white/30 uppercase font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Premier Marketing Agency
            </motion.span>
            <motion.div
              className="h-[1px] bg-yellow-500/20 w-12"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>

        {/* Progress line at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/5 overflow-hidden">
          <motion.div
            className="h-full bg-yellow-500/50"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    );
  }
);
ClassyLoader.displayName = "ClassyLoader";

export { ClassyLoader as GooeyLoader };
