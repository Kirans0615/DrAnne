"use client";

import * as React from "react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { bookDepth } from "@/content/books";

/**
 * Real trim-size aspect ratios for the catalogue (content/books.ts `aspect`
 * field): 8x10 -> 4/5, 6x9 -> 2/3, 8.5x8.5 -> 1/1. Defect #5.
 */
export type BookAspect = "4/5" | "2/3" | "1/1";

const ASPECT_CLASS: Record<BookAspect, string> = {
  "4/5": "aspect-[4/5]",
  "2/3": "aspect-[2/3]",
  "1/1": "aspect-[1/1]",
};

/**
 * Automatic light/dark ink fallback for the cover text when no explicit
 * `textColor` is supplied (defect #6). This is a simple perceived-brightness
 * check, not a full WCAG contrast library — good enough to stop white-on-white
 * or black-on-black covers. Colors that aren't a plain hex string (e.g. a
 * `var(--color-brand-red)` reference) fall back to light ink, since every
 * brand color in this catalogue is dark/saturated enough to want it.
 */
function autoTextColor(background: string): string {
  const match = background.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
  if (!match) return "#fdfaf7";
  let hex = match[1];
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const perceivedBrightness = (r * 299 + g * 587 + b * 114) / 1000;
  return perceivedBrightness > 150 ? "#1c1917" : "#fdfaf7";
}

interface BookProps {
  children: React.ReactNode;
  /** Real title, used to build the accessible name "{title} — view details". */
  title: string;
  /** Real page count, used to derive spine depth via bookDepth(). */
  pages: number;
  color?: string;
  textColor?: string;
  texture?: boolean;
  /** Override the derived depth. Prefer letting it derive from `pages`. */
  depth?: number;
  variant?: "default" | "simple";
  illustration?: React.ReactNode;
  width?: number;
  aspect?: BookAspect;
  className?: string;
  /** Renders as a real <a> to this URL instead of a <button>. */
  href?: string;
  /** Called on click/Enter/Space — e.g. to open a detail drawer. */
  onOpen?: () => void;
}

function Book(props: BookProps) {
  const {
    children,
    title,
    pages,
    color = "#f50537",
    depth,
    texture = true,
    variant = "default",
    textColor,
    illustration,
    width,
    aspect = "4/5",
    className,
    href,
    onOpen,
  } = props;

  // Depth is derived from real page counts, never a hardcoded magic number
  // (depth = clamp(round(pages / 22), 3, 12), content/books.ts#bookDepth).
  const resolvedDepth = depth ?? bookDepth(pages);
  const resolvedTextColor = textColor ?? autoTextColor(color);
  const accessibleName = `${title} — view details`;

  const coverStack = (
    <>
      <Stack
        align="stretch"
        className="absolute inset-0 size-full overflow-hidden rounded-l rounded-r border border-border bg-stone-100 bg-[var(--book-color)] shadow-book dark:bg-stone-800"
      >
        {variant !== "simple" && (
          <Stack
            shrink
            grow
            direction="row"
            className="relative min-w-[calc(var(--book-width))] overflow-hidden bg-[var(--book-color)]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-y-0 min-w-[8.2%] bg-book-bind-bg opacity-100 mix-blend-overlay"
            />
            {illustration && (
              <div aria-hidden="true" className="object-cover">
                {illustration}
              </div>
            )}
          </Stack>
        )}
        <Stack grow={variant === "simple"} direction="row" className="h-fit">
          <div
            aria-hidden="true"
            className="h-full min-w-[8.2%] bg-book-bind-bg opacity-100 mix-blend-overlay"
          />
          <div className="w-full text-[var(--text-color)]">{children}</div>
        </Stack>
        {texture && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-book-texture bg-cover bg-no-repeat opacity-60 mix-blend-hard-light"
          />
        )}
      </Stack>
      <div
        aria-hidden="true"
        className="absolute top-[3px] h-[calc(100%-2*6px)] w-[calc(var(--book-depth)-2px)] bg-book-pages"
        style={{
          transform:
            "translateX(calc(var(--book-width) - var(--book-depth) / 2 - 3px)) rotateY(90deg) translateX(calc(var(--book-depth) / 2))",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-0 h-full w-full rounded-l-md rounded-r bg-[var(--book-color)]"
        style={{ transform: "translateZ(calc(-1 * var(--book-depth)))" }}
      />
    </>
  );

  const interactiveClassName = cn(
    // `@container` (not the fake `contain-inline-size` class) is what makes
    // `--book-depth`'s cqw units resolve instead of collapsing to 0 (defect #3).
    "@container relative block w-fit min-w-[calc(var(--book-width))] rotate-0 cursor-pointer rounded-l rounded-r text-left [transform-style:preserve-3d]",
    ASPECT_CLASS[aspect],
    "transition-transform duration-500 ease-out",
    // Full 3D tilt only when motion is safe; a static, still-noticeable
    // treatment otherwise (defect #8).
    "motion-safe:hover:[transform:rotateY(-20deg)_scale(1.066)_translateX(-8px)] motion-safe:focus-visible:[transform:rotateY(-20deg)_scale(1.066)_translateX(-8px)]",
    "motion-reduce:hover:shadow-lg motion-reduce:hover:brightness-110 motion-reduce:focus-visible:shadow-lg motion-reduce:focus-visible:brightness-110",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  );

  return (
    <div
      className={cn("inline-block w-fit [perspective:900px]", className)}
      style={
        {
          "--book-color": color,
          "--text-color": resolvedTextColor,
          "--book-depth": `${resolvedDepth}cqw`,
          "--book-width": `${width ?? 196}px`,
        } as React.CSSProperties
      }
    >
      {href ? (
        <a
          href={href}
          onClick={onOpen}
          aria-label={accessibleName}
          className={interactiveClassName}
        >
          {coverStack}
        </a>
      ) : (
        <button
          type="button"
          onClick={onOpen}
          aria-label={accessibleName}
          className={interactiveClassName}
        >
          {coverStack}
        </button>
      )}
    </div>
  );
}

type FlexAlignItems = "stretch" | "start" | "end" | "center";
type FlexJustifyContent =
  | "stretch"
  | "start"
  | "end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "center";

interface StackProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  direction?: "column" | "row";
  align?: FlexAlignItems;
  justify?: FlexJustifyContent;
  gap?: number;
  padding?: number;
  grow?: boolean;
  shrink?: boolean;
  wrap?: boolean;
  className?: string;
}

function Stack(props: StackProps) {
  const {
    children,
    shrink = false,
    grow = false,
    justify = "start",
    align = "start",
    wrap = false,
    padding = 0,
    gap = 0,
    direction = "column",
    className,
    style,
    ...rest
  } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flex: "initial",
        flexDirection: direction,
        alignItems:
          align === "start" ? "flex-start" : align === "end" ? "flex-end" : align,
        justifyContent:
          justify === "start" ? "flex-start" : justify === "end" ? "flex-end" : justify,
        flexWrap: wrap ? "wrap" : "nowrap",
        flexGrow: grow ? 1 : 0,
        flexShrink: shrink ? 1 : 0,
        padding: padding * 4 + "px",
        gap: gap * 4 + "px",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export { Book, Stack };
export type { BookProps, StackProps };
