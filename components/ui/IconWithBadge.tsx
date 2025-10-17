import { ReactNode } from "react";

interface IconWithBadgeProps {
  icon: ReactNode;
  count?: number;
  showDot?: boolean;
  maxCount?: number;
  variant?: "default" | "success" | "warning" | "error" | "info";
}

export default function IconWithBadge({
  icon,
  count = 0,
  showDot = false,
  maxCount = 99,
  variant = "error",
}: IconWithBadgeProps) {
  const displayCount = count > maxCount ? `${maxCount}+` : count;
  const shouldShowBadge = count > 0 || showDot;

  const colors = {
    default: `
      bg-gray-100 
      text-gray-800
      hover:bg-gray-200
      hover:shadow-[2px_2px_8px_rgba(0,0,0,0.15)]
      transition-all duration-150
    `,
    success: `
      bg-green-500 
      text-white
      hover:bg-green-600
      hover:shadow-[2px_2px_8px_rgba(34,197,94,0.3)]
      transition-all duration-150
    `,
    warning: `
      bg-yellow-500 
      text-white
      hover:bg-yellow-600
      hover:shadow-[2px_2px_8px_rgba(234,179,8,0.3)]
      transition-all duration-150
    `,
    error: `
      bg-red-500 
      text-white
      hover:bg-red-600
      hover:shadow-[2px_2px_8px_rgba(239,68,68,0.4)]
      transition-all duration-150
    `,
    info: `
      bg-blue-500 
      text-white
      hover:bg-blue-600
      hover:shadow-[2px_2px_8px_rgba(59,130,246,0.3)]
      transition-all duration-150
    `,
  };

  return (
    <div className="relative inline-block">
      {icon}
      {shouldShowBadge && (
        showDot ? (
          <span 
            className={`
              absolute -top-1 -right-1 
              w-2.5 h-2.5 
              rounded-full 
              border-2 border-white
              ${colors[variant]}
            `} 
          />
        ) : (
          <span 
            className={`
              absolute -top-2 -right-2 
              flex items-center justify-center 
              font-bold rounded-full 
              border-2 border-white 
              px-1.5 py-0.5 
              text-[11px] 
              min-w-[20px] h-[20px]
              ${colors[variant]}
            `}
          >
            {displayCount}
          </span>
        )
      )}
    </div>
  );
}
