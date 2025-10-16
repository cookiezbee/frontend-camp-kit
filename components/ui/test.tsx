interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {

  const colors = {
    primary: `
      bg-blue-500 
      hover:bg-blue-600 
      hover:shadow-[4px_4px_12px_rgba(0,0,0,0.3)]
      active:bg-transparent
      active:text-blue-600
      active:shadow-[inset_0_0_0_2px_rgb(37,99,235)]
      disabled:bg-gray-300
      disabled:text-gray-500
      disabled:cursor-not-allowed
      disabled:hover:shadow-none
      text-white
    `,
    
    secondary: `
      bg-gray-200 
      hover:bg-gray-300 
      hover:shadow-[4px_4px_12px_rgba(0,0,0,0.2)]
      active:bg-transparent
      active:text-gray-700
      active:shadow-[inset_0_0_0_2px_rgb(55,65,81)]
      disabled:bg-gray-100
      disabled:text-gray-400
      disabled:cursor-not-allowed
      disabled:hover:shadow-none
      text-gray-800
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const baseStyles = "font-medium rounded-lg transition-all duration-150 justify-center";

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${widthStyle} ${colors[variant]} ${sizes[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}