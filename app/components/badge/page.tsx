"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Badge from "@/components/ui/Badge";
import IconWithBadge from "@/components/ui/IconWithBadge";
import { Bell, MessageCircle, Mail, ShoppingCart } from "lucide-react";

export default function BadgePage() {
  const badgeCode = `interface BadgeProps {
  children?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
}: BadgeProps) {

  const colors = {
    default: \`
      bg-gray-100 
      text-gray-800
      hover:bg-gray-200
      hover:shadow-[2px_2px_8px_rgba(0,0,0,0.15)]
      transition-all duration-150
    \`,
    
    success: \`
      bg-green-100 
      text-green-800
      hover:bg-green-200
      hover:shadow-[2px_2px_8px_rgba(34,197,94,0.3)]
      transition-all duration-150
    \`,
    
    warning: \`
      bg-yellow-100 
      text-yellow-800
      hover:bg-yellow-200
      hover:shadow-[2px_2px_8px_rgba(234,179,8,0.3)]
      transition-all duration-150
    \`,
    
    error: \`
      bg-red-500 
      text-white
      hover:bg-red-600
      hover:shadow-[2px_2px_8px_rgba(239,68,68,0.4)]
      transition-all duration-150
    \`,
    
    info: \`
      bg-blue-100 
      text-blue-800
      hover:bg-blue-200
      hover:shadow-[2px_2px_8px_rgba(59,130,246,0.3)]
      transition-all duration-150
    \`,
  };

  const sizes = {
    sm: dot ? "w-2 h-2" : "px-2 py-0.5 text-xs min-w-[18px] h-[18px]",
    md: dot ? "w-2.5 h-2.5" : "px-2 py-0.5 text-xs min-w-[20px] h-[20px]",
    lg: dot ? "w-3 h-3" : "px-2.5 py-1 text-sm min-w-[24px] h-[24px]",
  };

  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full";

  return (
    <span className={\`\${baseStyles} \${colors[variant]} \${sizes[size]}\`}>
      {!dot && children}
    </span>
  );
}`;

  const iconWithBadgeCode = `import { ReactNode } from "react";

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
  const displayCount = count > maxCount ? \`\${maxCount}+\` : count;
  const shouldShowBadge = count > 0 || showDot;

  const colors = {
    default: \`
      bg-gray-100 
      text-gray-800
      hover:bg-gray-200
      hover:shadow-[2px_2px_8px_rgba(0,0,0,0.15)]
      transition-all duration-150
    \`,
    success: \`
      bg-green-500 
      text-white
      hover:bg-green-600
      hover:shadow-[2px_2px_8px_rgba(34,197,94,0.3)]
      transition-all duration-150
    \`,
    warning: \`
      bg-yellow-500 
      text-white
      hover:bg-yellow-600
      hover:shadow-[2px_2px_8px_rgba(234,179,8,0.3)]
      transition-all duration-150
    \`,
    error: \`
      bg-red-500 
      text-white
      hover:bg-red-600
      hover:shadow-[2px_2px_8px_rgba(239,68,68,0.4)]
      transition-all duration-150
    \`,
    info: \`
      bg-blue-500 
      text-white
      hover:bg-blue-600
      hover:shadow-[2px_2px_8px_rgba(59,130,246,0.3)]
      transition-all duration-150
    \`,
  };

  return (
    <div className="relative inline-block">
      {icon}
      {shouldShowBadge && (
        showDot ? (
          <span 
            className={\`
              absolute -top-1 -right-1 
              w-2.5 h-2.5 
              rounded-full 
              border-2 border-white
              \${colors[variant]}
            \`} 
          />
        ) : (
          <span 
            className={\`
              absolute -top-2 -right-2 
              flex items-center justify-center 
              font-bold rounded-full 
              border-2 border-white 
              px-1.5 py-0.5 
              text-[11px] 
              min-w-[20px] h-[20px]
              \${colors[variant]}
            \`}
          >
            {displayCount}
          </span>
        )
      )}
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Badge (Значок)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Компактные метки для статусов, категорий и уведомлений.
          </p>
        </div>

        {/* Варианты */}
        <div className="mb-8">
          <ComponentPreview
            title="Варианты цветов - для разных статусов"
            description="Используй разные цвета чтобы передать смысл: успех, ошибка, предупреждение"
            code={`<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`}
          >
            <div className="flex gap-3 flex-wrap items-center">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </ComponentPreview>
        </div>

        {/* Размеры */}
        <div className="mb-8">
          <ComponentPreview
            title="Размеры - маленький, средний, большой"
            description="Выбери размер в зависимости от контекста"
            code={`<Badge variant="info" size="sm">Маленький</Badge>
<Badge variant="info" size="md">Средний</Badge>
<Badge variant="info" size="lg">Большой</Badge>`}
          >
            <div className="flex gap-3 flex-wrap items-center">
              <Badge variant="info" size="sm">Маленький</Badge>
              <Badge variant="info" size="md">Средний</Badge>
              <Badge variant="info" size="lg">Большой</Badge>
            </div>
          </ComponentPreview>
        </div>

        {/* Статус заказа */}
        <div className="mb-8">
          <ComponentPreview
            title="Статус заказа"
            description="Покажи статус заказа с помощью бейджа"
            code={`<div className="flex items-center gap-2">
  <span>Заказ #1234:</span>
  <Badge variant="success">Доставлен</Badge>
</div>
<div className="flex items-center gap-2">
  <span>Заказ #5678:</span>
  <Badge variant="warning">В пути</Badge>
</div>
<div className="flex items-center gap-2">
  <span>Заказ #9012:</span>
  <Badge variant="error">Отменен</Badge>
</div>`}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Заказ #1234:</span>
                <Badge variant="success">Доставлен</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Заказ #5678:</span>
                <Badge variant="warning">В пути</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Заказ #9012:</span>
                <Badge variant="error">Отменен</Badge>
              </div>
            </div>
          </ComponentPreview>
        </div>

        {/* Уведомления */}
        <div className="mb-8">
          <ComponentPreview
            title="Счетчик уведомлений"
            description="Покажи количество непрочитанных сообщений или уведомлений"
            code={`<div className="flex items-center gap-2">
  <span>Сообщения:</span>
  <Badge variant="error" size="sm">5</Badge>
</div>
<div className="flex items-center gap-2">
  <span>Уведомления:</span>
  <Badge variant="info" size="sm">12</Badge>
</div>`}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Сообщения:</span>
                <Badge variant="error" size="sm">5</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Уведомления:</span>
                <Badge variant="info" size="sm">12</Badge>
              </div>
            </div>
          </ComponentPreview>
        </div>

        {/* Теги и категории */}
        <div className="mb-8">
          <ComponentPreview
            title="Теги и категории"
            description="Группируй контент с помощью тегов"
            code={`<div className="flex gap-2 flex-wrap">
  <Badge variant="info">React</Badge>
  <Badge variant="info">TypeScript</Badge>
  <Badge variant="info">Next.js</Badge>
  <Badge variant="info">Tailwind</Badge>
</div>`}
          >
            <div className="flex gap-2 flex-wrap">
              <Badge variant="info">React</Badge>
              <Badge variant="info">TypeScript</Badge>
              <Badge variant="info">Next.js</Badge>
              <Badge variant="info">Tailwind</Badge>
            </div>
          </ComponentPreview>
        </div>

        {/* Badge на иконках */}
        <div className="mb-8">
          <ComponentPreview
            title="Badge на иконках - как в мессенджерах!"
            description="Покажи количество уведомлений прямо на иконке"
            code={`import { Bell, MessageCircle, Mail, ShoppingCart } from "lucide-react";
import IconWithBadge from "@/components/ui/IconWithBadge";

<IconWithBadge 
  icon={<Bell className="w-6 h-6 text-gray-700" />} 
  count={5} 
/>

<IconWithBadge 
  icon={<MessageCircle className="w-6 h-6 text-gray-700" />} 
  count={125} 
/>

<IconWithBadge 
  icon={<Mail className="w-6 h-6 text-gray-700" />} 
  showDot 
/>

<IconWithBadge 
  icon={<ShoppingCart className="w-6 h-6 text-gray-700" />} 
  count={3} 
/>`}
          >
            <div className="flex gap-8 items-center flex-wrap">
              <IconWithBadge 
                icon={<Bell className="w-6 h-6 text-gray-700" />} 
                count={5} 
              />
              
              <IconWithBadge 
                icon={<MessageCircle className="w-6 h-6 text-gray-700" />} 
                count={125} 
              />
              
              <IconWithBadge 
                icon={<Mail className="w-6 h-6 text-gray-700" />} 
                showDot 
              />
              
              <IconWithBadge 
                icon={<ShoppingCart className="w-6 h-6 text-gray-700" />} 
                count={3} 
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Только точка (dot) */}
        <div className="mb-8">
          <ComponentPreview
            title="Красная точка - есть новые уведомления"
            description="Когда не нужно показывать число, только индикатор"
            code={`<IconWithBadge 
  icon={<Bell className="w-8 h-8 text-gray-700" />} 
  showDot 
/>`}
          >
            <IconWithBadge 
              icon={<Bell className="w-8 h-8 text-gray-700" />} 
              showDot 
            />
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
                  Создай файлы компонентов
                </h3>
                <p className="text-gray-600 mb-2">
                  Создай файлы{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/Badge.tsx
                  </code>
                  {" "}и{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/IconWithBadge.tsx
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
                  Скопируй код из блоков ниже и вставь в соответствующие файлы
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
                  {`import Badge from '@/components/ui/Badge';
import IconWithBadge from '@/components/ui/IconWithBadge';
import { Bell } from 'lucide-react';

export default function MyPage() {
  return (
    <div>
      <Badge variant="success">Готово!</Badge>
      
      <IconWithBadge 
        icon={<Bell className="w-6 h-6" />} 
        count={5} 
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
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Настрой цвета под себя!
                </h3>
                <p className="text-gray-600 mb-3">
                  Хочешь свои цвета? Найди в коде компонентов блок colors:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`const colors = {
  success: \`
    bg-green-500 
    text-white
    hover:bg-green-600
  \`,
  // Замени green на purple для фиолетового!
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код Badge */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код компонента Badge"
            description="Скопируй этот код в файл components/ui/Badge.tsx"
            code={badgeCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз, чтобы увидеть полный код Badge ⬇️
            </div>
          </ComponentPreview>
        </div>

        {/* Полный код IconWithBadge */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код компонента IconWithBadge"
            description="Скопируй этот код в файл components/ui/IconWithBadge.tsx"
            code={iconWithBadgeCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз, чтобы увидеть полный код IconWithBadge ⬇️
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  );
}
