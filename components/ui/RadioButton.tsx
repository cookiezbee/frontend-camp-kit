"use client";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export default function RadioButton({
  label,
  value,
  checked = false,
  onChange,
  disabled = false,
}: RadioButtonProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <div
      className={`flex items-center gap-3 select-none ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleClick}
    >
      <div
        className={`
          w-5 h-5 rounded-full border-2 flex items-center justify-center
          transition-all duration-200
          border-blue-400
          ${!disabled && !checked ? "hover:border-blue-500" : ""}
          ${!disabled ? "hover:shadow-md" : ""}
        `}
      >
        {checked && <div className="w-3 h-3 rounded-full bg-blue-500" />}
      </div>
      <span className="text-gray-700 text-base">{label}</span>
    </div>
  );
}