"use client";

import { useState } from "react";
import ComponentPreview from "@/components/showcase/ComponentPreview";
import Checkbox from "@/components/ui/Checkbox";
import RadioButton from "@/components/ui/RadioButton";

export default function CheckboxRadioPage() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");

  const checkboxCode = `"use client";

import Image from "next/image";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  icon?: string;
}

export default function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  icon = "/icons/check.svg",
}: CheckboxProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div
      className={\`flex items-center gap-3 select-none \${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }\`}
      onClick={handleClick}
    >
      <div
        className={\`
          w-5 h-5 rounded border-2 flex items-center justify-center
          transition-all duration-200
          \${checked ? "bg-blue-500 border-transparent" : "bg-white border-gray-300"}
          \${!disabled && !checked ? "hover:border-blue-500" : ""}
          \${!disabled ? "hover:shadow-md" : ""}
        \`}
      >
        {checked && (
          <Image
            src={icon}
            alt="check"
            width={15}
            height={15}
            className="object-contain"
          />
        )}
      </div>
      <span className="text-gray-700 text-base">{label}</span>
    </div>
  );
}`;

  const radioCode = `"use client";

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
  name,
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
      className={\`flex items-center gap-3 select-none \${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }\`}
      onClick={handleClick}
    >
      <div
        className={\`
          w-5 h-5 rounded-full border-2 flex items-center justify-center
          transition-all duration-200
          border-blue-400
          \${!disabled && !checked ? "hover:border-blue-500" : ""}
          \${!disabled ? "hover:shadow-md" : ""}
        \`}
      >
        {checked && <div className="w-3 h-3 rounded-full bg-blue-500" />}
      </div>
      <span className="text-gray-700 text-base">{label}</span>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Checkbox & RadioButton (Чекбоксы и радиокнопки)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Кастомные элементы выбора
          </p>
        </div>

        {/* Чекбоксы */}
        <div className="mb-8">
          <ComponentPreview
            title="Чекбоксы"
            description="Кликни чтобы отметить/снять галочку"
            code={`const [check1, setCheck1] = useState(false);

<Checkbox 
  label="Вариант 1" 
  checked={check1} 
  onChange={setCheck1} 
/>
<Checkbox 
  label="Вариант 2" 
  checked={check2} 
  onChange={setCheck2} 
/>
<Checkbox 
  label="Вариант 3" 
  checked={check3} 
  onChange={setCheck3} 
/>`}
          >
            <div className="space-y-3">
              <Checkbox
                label="Вариант 1"
                checked={check1}
                onChange={setCheck1}
              />
              <Checkbox
                label="Вариант 2"
                checked={check2}
                onChange={setCheck2}
              />
              <Checkbox
                label="Вариант 3"
                checked={check3}
                onChange={setCheck3}
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Disabled чекбокс */}
        <div className="mb-8">
          <ComponentPreview
            title="Неактивный чекбокс"
            description="Чекбокс в состоянии disabled"
            code={`<Checkbox label="Неактивный" disabled />
<Checkbox label="Неактивный отмеченный" checked disabled />`}
          >
            <div className="space-y-3">
              <Checkbox label="Неактивный" disabled />
              <Checkbox label="Неактивный отмеченный" checked disabled />
            </div>
          </ComponentPreview>
        </div>

        {/* Радиокнопки */}
        <div className="mb-8">
          <ComponentPreview
            title="Радиокнопки"
            description="Выбери один вариант - кликни чтобы выбрать"
            code={`const [selectedOption, setSelectedOption] = useState("option1");

<RadioButton 
  label="Вариант 1" 
  name="options" 
  value="option1"
  checked={selectedOption === "option1"}
  onChange={setSelectedOption}
/>
<RadioButton 
  label="Вариант 2" 
  name="options" 
  value="option2"
  checked={selectedOption === "option2"}
  onChange={setSelectedOption}
/>
<RadioButton 
  label="Вариант 3" 
  name="options" 
  value="option3"
  checked={selectedOption === "option3"}
  onChange={setSelectedOption}
/>`}
          >
            <div className="space-y-3">
              <RadioButton
                label="Вариант 1"
                name="options"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={setSelectedOption}
              />
              <RadioButton
                label="Вариант 2"
                name="options"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={setSelectedOption}
              />
              <RadioButton
                label="Вариант 3"
                name="options"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={setSelectedOption}
              />
            </div>
            <p className="ml-10 text-gray-600">
              Выбрано: <span className="font-semibold">{selectedOption}</span>
            </p>
          </ComponentPreview>
        </div>

        {/* Disabled радиокнопка */}
        <div className="mb-8">
          <ComponentPreview
            title="Неактивные радиокнопки"
            description="Радиокнопки в состоянии disabled"
            code={`<RadioButton label="Неактивная" name="test" value="disabled1" disabled />
<RadioButton label="Неактивная отмеченная" name="test" value="disabled2" checked disabled />`}
          >
            <div className="space-y-3">
              <RadioButton
                label="Неактивная"
                name="test"
                value="disabled1"
                disabled
              />
              <RadioButton
                label="Неактивная отмеченная"
                name="test"
                value="disabled2"
                checked
                disabled
              />
            </div>
          </ComponentPreview>
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
                  Создай файлы компонентов
                </h3>
                <p className="text-gray-600">
                  Создай{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/Checkbox.tsx
                  </code>{" "}
                  и{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/RadioButton.tsx
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
                  Скопируй весь код из блоков ниже и вставь в свои файлы
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="w-full">
                <h3 className="font-semibold text-lg mb-2">
                  Добавь иконку галочки
                </h3>
                <p className="text-gray-600 mb-3">
                  Положи иконку галочки из дизайна в папку{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    public/icons/check.png
                  </code>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="w-full">
                <h3 className="font-semibold text-lg mb-2">
                  Импортируй и используй
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import Checkbox from '@/components/ui/Checkbox';
import RadioButton from '@/components/ui/RadioButton';

export default function MyPage() {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState("option1");

  return (
    <div>
      <Checkbox 
        label="Согласен с условиями"
        checked={checked}
        onChange={setChecked}
      />
      
      <RadioButton
        label="Вариант 1"
        name="choice"
        value="option1"
        checked={selected === "option1"}
        onChange={setSelected}
      />
    </div>
  );
}`}
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div className="w-full">
                <h3 className="font-semibold text-lg mb-2">
                  Настрой под свой дизайн!
                </h3>
                <p className="text-gray-600 mb-3">
                  Хочешь изменить цвет? Найди в коде компонента:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`// Чекбокс:
bg-blue-500           →    bg-green-500
border-gray-300       →    border-gray-400
hover:border-blue-500 →    hover:border-green-500

// Радиокнопка:
border-blue-400       →    border-green-400
bg-blue-500           →    bg-green-500
// Замени blue на green для зеленых элементов!`}
                </pre>

                <p className="text-gray-600 mt-4 mb-3">
                  Хочешь использовать другую иконку для конкретного чекбокса?
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`<Checkbox 
  label="С кастомной иконкой" 
  icon="/icons/custom-check.png"
/>`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код Checkbox */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код Checkbox"
            description="Скопируй в components/ui/Checkbox.tsx"
            code={checkboxCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз ⬇️
            </div>
          </ComponentPreview>
        </div>

        {/* Полный код RadioButton */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код RadioButton"
            description="Скопируй в components/ui/RadioButton.tsx"
            code={radioCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз ⬇️
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  );
}
