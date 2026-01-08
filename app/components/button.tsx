export const Button: React.FC<{
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({
  variant = 'filled',
  size = 'md',
  children,
  onClick,
  className = ''
}) => {
  const baseStyles =
    'rounded-full font-medium transition-all duration-300 cursor-pointer';

  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  };

  const variantStyles = {
    filled:
      'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg hover:scale-105',
    outlined:
      'border-2 border-main text-main bg-transparent hover:bg-main hover:text-white',
    ghost: 'text-main hover:bg-main/10'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
