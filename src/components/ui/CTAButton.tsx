import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
}

export function CTAButton({
  href,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className,
  children,
  ...props
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-body font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';

  const sizeClasses = {
    sm: 'h-8 px-3.5 text-xs rounded-md gap-2',
    md: 'h-10 px-5 text-sm rounded-lg gap-2.5',
    lg: 'h-12 px-7 text-base rounded-lg gap-3',
  };

  const variantClasses = {
    // Primary: warm terracotta button with white text
    primary: 'bg-accent text-on-accent hover:bg-[var(--accent-hover)] shadow-xs hover:shadow-md',
    // Secondary: tinted surface
    secondary: 'bg-surface text-ink hover:bg-surface/80 border border-line',
    // Outline: crisp line
    outline: 'border border-line text-ink bg-surface/60 hover:bg-surface hover:border-ink/30',
    // Dark: on dark sections
    dark: 'bg-paper-on-dark text-ink hover:bg-surface shadow-xs',
    // Ghost
    ghost: 'text-ink hover:bg-ink/5',
  };

  const combinedClasses = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          className={cn(
            'w-5 h-5 rounded-md flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 shrink-0',
            variant === 'primary'
              ? 'bg-on-accent/20 text-on-accent'
              : variant === 'dark'
                ? 'bg-surface text-ink'
                : 'bg-surface/60 text-ink'
          )}
        >
          <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
