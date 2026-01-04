"use client";

import { cn } from "../../lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-surface-700 mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full px-4 py-2.5 rounded-lg border border-surface-200 bg-white text-surface-900 placeholder:text-surface-400",
            "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent",
            "transition-all duration-200",
            error && "border-error-500 focus:ring-error-500",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-error-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
