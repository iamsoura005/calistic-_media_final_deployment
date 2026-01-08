import * as React from "react";
import { cn } from "@/lib/utils";

export interface GooeyLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The primary color for the goo effect. Defaults to shadcn's primary color. */
  primaryColor?: string;
  /** The secondary color for the goo effect. Defaults to shadcn's secondary color. */
  secondaryColor?: string;
  /** The color for the bottom border. Defaults to shadcn's border color. */
  borderColor?: string;
}

const GooeyLoader = React.forwardRef<HTMLDivElement, GooeyLoaderProps>(
  ({ className, primaryColor, secondaryColor, borderColor, ...props }, ref) => {
    // CSS variables for dynamic styling. Falls back to shadcn's theme variables.
    const style = {
      "--gooey-primary-color": primaryColor || "hsl(var(--primary))",
      "--gooey-secondary-color": secondaryColor || "hsl(var(--secondary))",
      "--gooey-border-color": borderColor || "hsl(var(--border))",
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={cn("relative flex flex-col items-center justify-center gap-8", className)}
        style={style}
        role="status"
        aria-label="Loading"
        {...props}
      >
        {/* SVG filter for the gooey effect */}
        <svg className="absolute w-0 h-0">
          <defs>
            <filter id="gooey-loader-filter">
              <feGaussianBlur in="SourceGraphic" stdDeviation={12} result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 48 -7"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>

        {/* Embedded styles */}
        <style>
          {`
            .gooey-loader {
              width: 14em;
              height: 4em;
              position: relative;
              overflow: hidden;
              border-bottom: 2px solid var(--gooey-border-color);
              filter: url(#gooey-loader-filter);
            }

            .gooey-loader::before,
            .gooey-loader::after {
              content: '';
              position: absolute;
              border-radius: 50%;
            }

            .gooey-loader::before {
              width: 22em;
              height: 18em;
              background: linear-gradient(to right, var(--gooey-primary-color), var(--gooey-secondary-color));
              left: -2em;
              bottom: -18em;
              animation: gooey-loader-wee1 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }

            .gooey-loader::after {
              width: 16em;
              height: 12em;
              background-color: var(--gooey-secondary-color);
              opacity: 0.8;
              left: -4em;
              bottom: -12em;
              animation: gooey-loader-wee2 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.75s;
            }

            @keyframes loader-text-reveal {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            @keyframes gooey-loader-wee1 {
              0% { transform: translateX(-12em) rotate(0deg); }
              100% { transform: translateX(10em) rotate(180deg); }
            }

            @keyframes gooey-loader-wee2 {
              0% { transform: translateX(-10em) rotate(0deg); }
              100% { transform: translateX(10em) rotate(180deg); }
            }
          `}
        </style>

        {/* The loader element */}
        <div className="flex flex-col items-center gap-6">
          <div className="gooey-loader" />
          <div
            style={{ animation: 'loader-text-reveal 1s ease-out forwards' }}
            className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-medium flex items-center gap-2"
          >
            <span className="w-8 h-[1px] bg-white/10" />
            Calistic Media
            <span className="w-8 h-[1px] bg-white/10" />
          </div>
        </div>
      </div>
    );
  }
);
GooeyLoader.displayName = "GooeyLoader";

export { GooeyLoader };
