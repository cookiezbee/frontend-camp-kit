"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import FAQ from "@/components/ui/FAQ";

export default function FAQPage() {
  const faqCode = `"use client";

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
                className={\`text-blue-500 text-2xl transition-transform duration-300 flex-shrink-0 \${
                  isOpen ? "rotate-180" : ""
                }\`}
              >
                ▼
              </span>
            </button>

            {/* ОТВЕТ - раскрывается СНИЗУ */}
            {isOpen && (
              <div className="bg-gray-50 border-t-2 border-gray-300 p-6">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}`;

  const demoItems = [
    {
      question: "Что такое компонент?",
      answer:
        "Компонент — это переиспользуемый блок кода. Например, кнопка Button или карточка Card. Один раз создаёшь — используешь везде.",
    },
    {
      question: "Что такое props?",
      answer:
        "Props (properties) — это данные, которые передаются в компонент. Как параметры функции. Например: <Button text='Нажми' />.",
    },
    {
      question: "Что такое useState?",
      answer:
        "useState — это React Hook для хранения данных, которые могут меняться. Например, открыт ли FAQ блок или нет.",
    },
    {
      question: "Зачем нужен Tailwind CSS?",
      answer:
        "Tailwind позволяет стилизовать элементы прямо в className, без создания отдельных CSS файлов. Быстрее и удобнее.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            FAQ (Частые вопросы)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Раскрывающийся список вопросов и ответов (аккордеон).
          </p>
        </div>

        {/* Базовый пример */}
        <div className="mb-8">
          <ComponentPreview
            title="Базовый FAQ"
            description="Кликай на вопросы, чтобы открыть/закрыть ответы. Стрелочка поворачивается при открытии!"
            code={`const items = [
  { 
    question: "Что такое компонент?", 
    answer: "Переиспользуемый блок кода..." 
  },
  { 
    question: "Что такое props?", 
    answer: "Данные для компонента..." 
  }
];

<FAQ items={items} />`}
          >
            <FAQ items={demoItems} />
          </ComponentPreview>
        </div>

        {/* Как работает */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Как это работает?
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">
                  1. Храним индекс активного элемента
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2">
                  {`const [activeIndex, setActiveIndex] = useState(null);
// null = всё закрыто
// число = индекс открытого вопроса`}
                </pre>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">
                  2. При клике переключаем состояние
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2">
                  {`const handleToggle = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};`}
                </pre>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">
                  3. Показываем ответ только если элемент активен
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2">
                  {`const isOpen = activeIndex === index;

{isOpen && (
  <div className="bg-gray-50 p-6">
    {item.answer}
  </div>
)}`}
                </pre>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">
                  4. Стрелочка поворачивается при открытии
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2">
                  {`<span className={\`transition-transform \${
  isOpen ? "rotate-180" : ""
}\`}>
  ▼
</span>`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Инструкция */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border-2 border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как использовать в своем проекте?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Создай файл компонента
                </h3>
                <p className="text-gray-600 mb-2">
                  Создай файл{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/FAQ.tsx
                  </code>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Скопируй код</h3>
                <p className="text-gray-600">
                  Скопируй весь код из блока ниже и вставь в свой файл
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Импортируй и используй
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-2">
                  {`import FAQ from '@/components/ui/FAQ';

export default function MyPage() {
  const faqItems = [
    { 
      question: "Твой вопрос?", 
      answer: "Твой ответ" 
    }
  ];

  return (
    <div>
      <FAQ items={faqItems} />
    </div>
  );
}`}
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Настрой под свой дизайн!
                </h3>
                <p className="text-gray-600 mb-3">
                  Хочешь изменить цвет стрелочки? Найди в коде:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`<span className="text-blue-500 ...">
  ▼
</span>
// Замени blue-500 на green-500 для зеленой стрелки!`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код компонента */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код компонента FAQ"
            description="Скопируй весь этот код в файл components/ui/FAQ.tsx"
            code={faqCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз, чтобы увидеть полный код ⬇️
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  );
}