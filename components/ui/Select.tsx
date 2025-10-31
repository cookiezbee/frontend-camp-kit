"use client";

import { useState, useRef, useEffect } from "react";

interface SelectProps {
  label: string;
  options?: string[];
  children?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function Select({
  label,
  options = [],
  children,
  value = "",
  onChange,
  placeholder = "Выберите опцию",
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="w-full" ref={selectRef}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full px-4 py-2 text-left bg-white border rounded-lg
            transition-all
            ${
              isOpen
                ? "border-blue-500 ring-2 ring-blue-200"
                : "border-gray-300"
            }
            hover:border-blue-500
            focus:outline-none
          `}
        >
          <span className={selectedValue ? "text-gray-900" : "text-gray-400"}>
            {selectedValue || placeholder}
          </span>
          <svg
            className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-96 overflow-y-auto">
            {children
              ? children
              : options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(option)}
                    className={`
                    px-4 py-2 cursor-pointer transition-colors
                    hover:bg-blue-50
                    ${
                      selectedValue === option
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-700"
                    }
                  `}
                  >
                    {option}
                    {selectedValue === option && (
                      <svg
                        className="inline-block float-right w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                ))}
          </div>
        )}
      </div>
    </div>
  );
}