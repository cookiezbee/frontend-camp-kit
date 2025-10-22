'use client';

import { useState } from 'react';
import ComponentPreview from '@/components/showcase/ComponentPreview';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import SearchInput from '@/components/ui/SearchInput';

export default function InputPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !value.includes('@')) {
      setEmailError('Email должен содержать @');
    } else {
      setEmailError('');
    }
  };

  const inputCode = `interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

export default function Input({ 
  type = 'text',
  placeholder,
  label,
  value,
  onChange,
  error,
  disabled = false,
  required = false
}: InputProps) {

  const styles = {
    container: "w-full",
    label: "block text-sm font-medium text-gray-700 mb-2",
    input: \`w-full px-4 py-2 border rounded-lg transition-all
      \${error 
        ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200' 
        : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
      }
      \${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
      outline-none\`,
    error: "mt-1 text-sm text-red-600",
    required: "text-red-500 ml-1"
  };

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={styles.input}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}`;

  const selectCode = `"use client";

import { useState, useRef, useEffect } from "react";

interface SelectProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function Select({
  label,
  options,
  value = "",
  onChange,
  placeholder = "Выберите опцию",
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
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
          className={\`
            w-full px-4 py-2 text-left bg-white border rounded-lg
            transition-all
            \${isOpen ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"}
            hover:border-blue-500 focus:outline-none
          \`}
        >
          <span className={selectedValue ? "text-gray-900" : "text-gray-400"}>
            {selectedValue || placeholder}
          </span>
          <svg
            className={\`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform \${
              isOpen ? "rotate-180" : ""
            }\`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelect(option)}
                className={\`
                  px-4 py-2 cursor-pointer transition-colors
                  hover:bg-blue-50
                  \${selectedValue === option ? "bg-blue-100 text-blue-600" : "text-gray-700"}
                \`}
              >
                {option}
                {selectedValue === option && (
                  <svg className="inline-block float-right w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}`;

  const searchInputCode = `"use client";

interface SearchInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({
  label,
  placeholder = "Поиск...",
  value = "",
  onChange,
}: SearchInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full pl-10 pr-4 py-2 
            bg-white border border-gray-300 rounded-lg
            transition-all placeholder:text-gray-400
            hover:border-blue-500
            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
          "
        />
      </div>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Input (Поля ввода)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Поля ввода для форм: текст, поиск, выбор из списка и другие
          </p>
        </div>

        {/* SearchInput */}
        <div className="mb-8">
          <ComponentPreview
            title="SearchInput (Поиск)"
            description="Поле поиска с иконкой лупы"
            code={`const [search, setSearch] = useState('');

<SearchInput 
  label="Поиск"
  placeholder="Введите запрос..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>`}
          >
            <div className="w-full max-w-md">
              <SearchInput 
                label="Поиск"
                placeholder="Введите запрос..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <p className="mt-3 text-gray-600">
                  Вы ищете: <strong>{search}</strong>
                </p>
              )}
            </div>
          </ComponentPreview>
        </div>

        {/* Select */}
        <div className="mb-8">
          <ComponentPreview
            title="Select (Раскрывающийся список)"
            description="Выбери один вариант из списка - кликни чтобы открыть"
            code={`const [city, setCity] = useState('');

<Select 
  label="Выберите город"
  options={["Москва", "Санкт-Петербург", "Казань", "Новосибирск"]}
  value={city}
  onChange={setCity}
  placeholder="Выберите город"
/>`}
          >
            <div className="w-full max-w-md">
              <Select 
                label="Выберите город"
                options={["Москва", "Санкт-Петербург", "Казань", "Новосибирск"]}
                value={city}
                onChange={setCity}
                placeholder="Выберите город"
              />
              {city && (
                <p className="mt-3 text-gray-600">
                  Выбран город: <strong>{city}</strong>
                </p>
              )}
            </div>
          </ComponentPreview>
        </div>

        {/* Базовое поле */}
        <div className="mb-8">
          <ComponentPreview
            title="Input (Текстовое поле)"
            description="Простое текстовое поле с placeholder"
            code={`<Input placeholder="Введите текст" />`}
          >
            <div className="w-full max-w-md">
              <Input placeholder="Введите текст" />
            </div>
          </ComponentPreview>
        </div>

        {/* С подписью */}
        <div className="mb-8">
          <ComponentPreview
            title="С подписью (label)"
            description="Добавь подпись над полем для понятности"
            code={`<Input 
  label="Имя"
  placeholder="Введите ваше имя"
/>`}
          >
            <div className="w-full max-w-md">
              <Input 
                label="Имя"
                placeholder="Введите ваше имя"
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Разные типы */}
        <div className="mb-8">
          <ComponentPreview
            title="Разные типы полей"
            description="Email, пароль, номер телефона и другие"
            code={`<div className="space-y-4">
  <Input 
    type="email"
    label="Email"
    placeholder="example@mail.com"
  />
  
  <Input 
    type="password"
    label="Пароль"
    placeholder="Введите пароль"
  />
  
  <Input 
    type="tel"
    label="Телефон"
    placeholder="+7 (___) ___-__-__"
  />
</div>`}
          >
            <div className="w-full max-w-md space-y-4">
              <Input 
                type="email"
                label="Email"
                placeholder="example@mail.com"
              />
              
              <Input 
                type="password"
                label="Пароль"
                placeholder="Введите пароль"
              />
              
              <Input 
                type="tel"
                label="Телефон"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
          </ComponentPreview>
        </div>

        {/* С обработкой изменений */}
        <div className="mb-8">
          <ComponentPreview
            title="С обработкой изменений (useState)"
            description="Сохраняй введенное значение в state"
            code={`const [name, setName] = useState('');

<Input 
  label="Ваше имя"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Введите имя"
/>`}
          >
            <div className="w-full max-w-md space-y-4">
              <Input 
                label="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
              />
              {name && (
                <p className="text-gray-700">
                  Вы ввели: <strong>{name}</strong>
                </p>
              )}
            </div>
          </ComponentPreview>
        </div>

        {/* С валидацией */}
        <div className="mb-8">
          <ComponentPreview
            title="С валидацией и ошибками"
            description="Показывай ошибки валидации пользователю"
            code={`const [email, setEmail] = useState('');
const [error, setError] = useState('');

const handleEmailChange = (e) => {
  const value = e.target.value;
  setEmail(value);
  
  if (value && !value.includes('@')) {
    setError('Email должен содержать @');
  } else {
    setError('');
  }
};

<Input 
  type="email"
  label="Email"
  value={email}
  onChange={handleEmailChange}
  error={error}
  placeholder="example@mail.com"
/>`}
          >
            <div className="w-full max-w-md">
              <Input 
                type="email"
                label="Email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                placeholder="example@mail.com"
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Обязательное поле */}
        <div className="mb-8">
          <ComponentPreview
            title="Обязательное поле"
            description="Отметь поле как обязательное звездочкой"
            code={`<Input 
  label="Email"
  type="email"
  placeholder="example@mail.com"
  required
/>`}
          >
            <div className="w-full max-w-md">
              <Input 
                label="Email"
                type="email"
                placeholder="example@mail.com"
                required
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Показать/скрыть пароль */}
        <div className="mb-8">
          <ComponentPreview
            title="Показать/скрыть пароль"
            description="Интерактивный пример с кнопкой показа пароля"
            code={`const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

<div className="relative w-full">
  <Input 
    type={showPassword ? "text" : "password"}
    label="Пароль"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Введите пароль"
  />
  
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 bottom-1.5 p-1 hover:bg-gray-100 rounded"
  >
    <img 
      src={showPassword ? "/icons/eyeClose.svg" : "/icons/eye.svg"}
      alt={showPassword ? "Скрыть" : "Показать"}
      className="w-5 h-5"
    />
  </button>
</div>`}
          >
            <div className="w-full max-w-md">
              <div className="relative w-full">
                <Input 
                  type={showPassword ? "text" : "password"}
                  label="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль"
                />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 bottom-1.5 p-1 hover:bg-gray-100 rounded transition-colors"
                  title={showPassword ? "Скрыть пароль" : "Показать пароль"}
                >
                  <img 
                    src={showPassword ? "/icons/eyeClose.svg" : "/icons/eye.svg"}
                    alt={showPassword ? "Скрыть" : "Показать"}
                    className="w-5 h-5"
                  />
                </button>
              </div>
              
              {password && (
                <p className="text-gray-700 text-sm mt-2">
                  Длина пароля: <strong>{password.length}</strong> символов
                  {password.length < 8 && (
                    <span className="text-red-500 ml-2">
                      (минимум 8 символов)
                    </span>
                  )}
                </p>
              )}
            </div>
          </ComponentPreview>
        </div>

        {/* Неактивное поле */}
        <div className="mb-8">
          <ComponentPreview
            title="Неактивное поле (disabled)"
            description="Поле нельзя редактировать"
            code={`<Input 
  label="Имя пользователя"
  value="ivan_petrov"
  disabled
/>`}
          >
            <div className="w-full max-w-md">
              <Input 
                label="Имя пользователя"
                value="ivan_petrov"
                disabled
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Форма регистрации */}
        <div className="mb-8">
          <ComponentPreview
            title="Пример: Форма регистрации"
            description="Комбинация нескольких полей в форме"
            code={`<form className="space-y-4">
  <Input 
    label="Имя"
    placeholder="Иван"
    required
  />
  
  <Input 
    type="email"
    label="Email"
    placeholder="ivan@example.com"
    required
  />
  
  <Input 
    type="password"
    label="Пароль"
    placeholder="Минимум 8 символов"
    required
  />
  
  <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
    Зарегистрироваться
  </button>
</form>`}
          >
            <div className="w-full max-w-md">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  label="Имя"
                  placeholder="Иван"
                  required
                />
                
                <Input 
                  type="email"
                  label="Email"
                  placeholder="ivan@example.com"
                  required
                />
                
                <Input 
                  type="password"
                  label="Пароль"
                  placeholder="Минимум 8 символов"
                  required
                />
                
                <button 
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Зарегистрироваться
                </button>
              </form>
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
                <h3 className="font-semibold text-lg mb-2">Создай файлы компонентов</h3>
                <p className="text-gray-600">
                  Создай <code className="bg-gray-100 px-2 py-1 rounded text-sm">components/ui/Input.tsx</code>,{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">components/ui/Select.tsx</code> и{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">components/ui/SearchInput.tsx</code>
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
              <div>
                <h3 className="font-semibold text-lg mb-2">Импортируй и используй</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-2">
{`import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import SearchInput from '@/components/ui/SearchInput';

export default function MyPage() {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div>
      <Input 
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <Select
        label="Город"
        options={["Москва", "Казань"]}
        value={city}
        onChange={setCity}
      />
      
      <SearchInput
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
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
              <div className="w-full">
                <h3 className="font-semibold text-lg mb-2">Настрой под свой дизайн!</h3>
                <p className="text-gray-600 mb-3">
                  Хочешь изменить цвета? Найди в коде:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Замени цвета границ и фокуса:
border-gray-300         →    border-purple-300
focus:border-blue-500   →    focus:border-purple-500
focus:ring-blue-200     →    focus:ring-purple-200`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код Input */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код Input"
            description="Скопируй в components/ui/Input.tsx"
            code={inputCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз ⬇️
            </div>
          </ComponentPreview>
        </div>

        {/* Полный код Select */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код Select"
            description="Скопируй в components/ui/Select.tsx"
            code={selectCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз ⬇️
            </div>
          </ComponentPreview>
        </div>

        {/* Полный код SearchInput */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код SearchInput"
            description="Скопируй в components/ui/SearchInput.tsx"
            code={searchInputCode}
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
