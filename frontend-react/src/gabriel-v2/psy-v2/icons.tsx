/* Icônes (tracés Lucide, licence ISC) embarquées pour éviter une dépendance. */
import type { SVGProps } from "react";
type P = SVGProps<SVGSVGElement> & { size?: number };
const mk = (d: string[]) => ({ size = 16, strokeWidth = 2, ...rest }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
    {d.map((p, i) => <path key={i} d={p} />)}
  </svg>
);
export const Activity = mk(["M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"]);
export const ArrowUp = mk(["M12 19V5", "m5 12 7-7 7 7"]);
export const Check = mk(["M20 6 9 17l-5-5"]);
export const ChevronDown = mk(["m6 9 6 6 6-6"]);
export const ChevronLeft = mk(["m15 18-6-6 6-6"]);
export const ChevronRight = mk(["m9 18 6-6-6-6"]);
export const Paperclip = mk(["m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"]);
export const Plus = mk(["M5 12h14", "M12 5v14"]);
export const RefreshCw = mk(["M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", "M21 3v5h-5", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", "M8 16H3v5"]);
export const X = mk(["M18 6 6 18", "m6 6 12 12"]);
