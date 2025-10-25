"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="w-full border-2 border-gray-300 rounded-lg overflow-hidden transition-all"
          >
            {/* ВОПРОС - вся секция кликабельна */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left"
            >
              <span className="font-bold text-gray-900 text-lg pr-4">
                {item.question}
              </span>
              <span
                className={`text-blue-500 text-2xl transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* ОТВЕТ - раскрывается СНИЗУ */}
            {isOpen && (
              <div className="bg-gray-50 border-t-2 border-gray-300 p-6 animate-fadeIn">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
