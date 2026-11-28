
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
};

export function Button({
  children,
  variant = "primary",
  loading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-500 text-white",
    secondary: "bg-yellow-400 hover:bg-yellow-300 text-black",
    outline: "border border-white/20 hover:border-purple-400 text-white"
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {loading && <Loader2 size={18} className="animate-spin" />}
      {children}
    </button>
  );
}

type CardProps = HTMLAttributes<HTMLDivElement> & {
  glow?: boolean;
};

export function Card({
  children,
  glow = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={`glass rounded-2xl p-6 ${
        glow ? "purple-glow" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

