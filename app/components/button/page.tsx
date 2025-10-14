/* eslint-disable react/no-unescaped-entities */
"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Button from "@/components/ui/Button";

export default function ButtonPage() {
  const buttonCode = `interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false 
}: ButtonProps) {
  
  const colors = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-500 hover:bg-red-600 text-white"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const baseStyles = "font-medium rounded-lg transition-all duration-200";
  const disabledStyles = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "hover:scale-105 active:scale-95";

  return (
    <button 
      className={\`\${baseStyles} \${colors[variant]} \${sizes[size]} \${disabledStyles}\`}
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

        {/* Danger кнопки */}
        <div className="mb-8">
          <ComponentPreview
            title="Danger кнопки - опасные действия"
            description="Используй для удаления, отмены подписки и других опасных действий"
            code={`<Button variant="danger" size="sm">Удалить</Button>
<Button variant="danger" size="md">Отменить подписку</Button>
<Button variant="danger" size="lg">Удалить навсегда</Button>`}
          >
            <div className="flex gap-4 flex-wrap items-center">
              <Button variant="danger" size="sm">
                Удалить
              </Button>
              <Button variant="danger" size="md">
                Отменить подписку
              </Button>
              <Button variant="danger" size="lg">
                Удалить навсегда
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
<Button variant="danger" disabled>Danger</Button>`}
          >
            <div className="flex gap-4 flex-wrap items-center">
              <Button variant="primary" disabled>
                Primary
              </Button>
              <Button variant="secondary" disabled>
                Secondary
              </Button>
              <Button variant="danger" disabled>
                Danger
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
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
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
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
