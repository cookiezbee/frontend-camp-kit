"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Button from "@/components/ui/Button";

export default function ButtonPage() {
  const buttonCode = `interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
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
    primary: \`
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
    \`,
    
    secondary: \`
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
    \`,
    
    outline: \`
      border-2 border-gray-300 
      hover:shadow-[4px_4px_12px_rgba(0,0,0,0.2)]
      hover:bg-gray-100
      active:bg-transparent
      active:text-gray-700
      active:!border-transparent
      active:shadow-[inset_0_0_0_2px_rgb(200,200,200)]
      disabled:bg-gray-100
      disabled:text-gray-400
      disabled:cursor-not-allowed
      disabled:hover:shadow-none
      text-gray-800
    \`,
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
      className={\`\${baseStyles} \${widthStyle} \${colors[variant]} \${sizes[size]}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Button (Кнопка)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Универсальная кнопка с разными вариантами оформления и размерами.
          </p>
        </div>

        {/* Primary кнопки */}
        <div className="mb-8">
          <ComponentPreview
            title="Primary кнопки - основные действия"
            description="Используй для главных действий: Купить, Отправить, Подписаться"
            code={`<Button variant="primary" size="sm">Маленькая</Button>
<Button variant="primary" size="md">Средняя</Button>
<Button variant="primary" size="lg">Большая</Button>`}
          >
            <div className="flex gap-4 flex-wrap items-center">
              <Button variant="primary" size="sm">
                Маленькая
              </Button>
              <Button variant="primary" size="md">
                Средняя
              </Button>
              <Button variant="primary" size="lg">
                Большая
              </Button>
            </div>
          </ComponentPreview>
        </div>

        {/* Secondary кнопки */}
        <div className="mb-8">
          <ComponentPreview
            title="Secondary кнопки - второстепенные действия"
            description="Используй для дополнительных действий: Отмена, Назад, Закрыть"
            code={`<Button variant="secondary" size="sm">Отмена</Button>
<Button variant="secondary" size="md">Назад</Button>
<Button variant="secondary" size="lg">Закрыть</Button>`}
          >
            <div className="flex gap-4 flex-wrap items-center">
              <Button variant="secondary" size="sm">
                Отмена
              </Button>
              <Button variant="secondary" size="md">
                Назад
              </Button>
              <Button variant="secondary" size="lg">
                Закрыть
              </Button>
            </div>
          </ComponentPreview>
        </div>

        {/* Outline кнопки */}
        <div className="mb-8">
          <ComponentPreview
            title="Outline кнопки - контурные кнопки"
            code={`<Button variant="outline" size="sm">Отмена</Button>
<Button variant="outline" size="md">Отменить</Button>
<Button variant="outline" size="lg">Отклонить</Button>`}
          >
            <div className="flex gap-4 flex-wrap items-center">
              <Button variant="outline" size="sm">
                Отмена
              </Button>
              <Button variant="outline" size="md">
                Отменить
              </Button>
              <Button variant="outline" size="lg">
                Отклонить
              </Button>
            </div>
          </ComponentPreview>
        </div>

        {/* Disabled состояние */}
        <div className="mb-8">
          <ComponentPreview
            title="Disabled - неактивная кнопка"
            description="Когда действие временно недоступно"
            code={`<Button variant="primary" disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="outline" disabled>Outline</Button>`}
          >
            <div className="flex gap-4 flex-wrap items-center">
              <Button variant="primary" disabled>
                Primary
              </Button>
              <Button variant="secondary" disabled>
                Secondary
              </Button>
              <Button variant="outline" disabled>
                Outline
              </Button>
            </div>
          </ComponentPreview>
        </div>

        {/* С действием */}
        <div className="mb-8">
          <ComponentPreview
            title="Кнопка с действием"
            description="Добавь onClick для обработки клика"
            code={`<Button 
  variant="primary"
  onClick={() => alert('Привет!')}
>
  Нажми меня!
</Button>`}
          >
            <Button variant="primary" onClick={() => alert("Привет!")}>
              Нажми меня!
            </Button>
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
                  Создай файл компонента
                </h3>
                <p className="text-gray-600 mb-2">
                  Создай файл{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/Button.tsx
                  </code>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                ⚠️
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 text-red-600">
                  ВАЖНО! Добавь  &#34;use client &#34; в начало файла
                </h3>
                <p className="text-gray-600 mb-3">
                  В Next.js все компоненты по умолчанию работают только на сервере. 
                  Но наша кнопка использует{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">onClick</code> - 
                  это значит она должна работать в браузере у пользователя.
                </p>
                <p className="text-gray-600 mb-3">
                  Чтобы Next.js понял это, нужно написать{" "}
                  <code className="bg-red-100 px-2 py-1 rounded text-red-700 font-semibold">
                     &#34;use client&#34;
                  </code>{" "}
                  <strong>в самой первой строке файла</strong> (даже перед импортами!):
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`'use client'  // ← Эта строка ОБЯЗАТЕЛЬНА!

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;  // ← onClick работает только с 'use client'
  // ...
}

export default function Button({ ... }) {
  // код кнопки
}`}
                </pre>
                <div className="mt-3 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-sm text-yellow-900 font-medium">
                    <strong>📌 Золотое правило:</strong> Если компонент использует{" "}
                    <code className="bg-yellow-100 px-1 rounded">onClick</code>,{" "}
                    <code className="bg-yellow-100 px-1 rounded">useState</code>,{" "}
                    <code className="bg-yellow-100 px-1 rounded">useEffect</code>{" "}
                    или другие интерактивные функции — обязательно пиши{" "}
                    <code className="bg-yellow-100 px-1 rounded font-semibold">
                      &#34;use client &#34;
                    </code>{" "}
                    в первой строке файла!
                  </p>
                </div>
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
                  {`import Button from '@/components/ui/Button';

export default function MyPage() {
  return (
    <div>
      <Button variant="primary">
        Привет, мир!
      </Button>
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
                  Хочешь изменить цвета? Найди в коде компонента блок:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`const colors = {
  primary: \`
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
  \`,
  // Замени blue на green для зеленой кнопки!
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код компонента */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код компонента Button"
            description="Скопируй весь этот код в файл components/ui/Button.tsx"
            code={buttonCode}
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