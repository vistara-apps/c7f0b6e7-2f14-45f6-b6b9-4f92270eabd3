import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface TagProps {
  variant?: 'skill' | 'status';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Tag({ variant = 'skill', children, className, onClick }: TagProps) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variantClasses = {
    skill: 'bg-blue-100 text-blue-800',
    status: 'bg-green-100 text-green-800'
  };

  const Component = onClick ? 'button' : 'span';

  return (
    <Component
      className={clsx(
        baseClasses,
        variantClasses[variant],
        onClick && 'hover:opacity-80 transition-opacity duration-200 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
