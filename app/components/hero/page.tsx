"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Hero from "@/components/ui/Hero";

export default function HeroPage() {
  const heroCode = `import Button from "@/components/ui/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButton?: {
    text: string;
    onClick: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
  image?: React.ReactNode;
  background?: "gradient" | "solid" | "image";
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  image,
  background = "gradient",
}: HeroProps) {
  const backgrounds = {
    gradient: "bg-gradient-to-br from-blue-50 to-indigo-100",
    solid: "bg-gray-100",
    image: "bg-gray-900",
  };

  return (
    <section className={\`\${backgrounds[background]} py-20\`}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={
            image
              ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              : "max-w-3xl mx-auto text-center"
          }
        >
          {/* Контент */}
          <div className="space-y-6">
            {subtitle && (
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {subtitle}
              </p>
            )}

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            {description && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            )}

            {/* Кнопки */}
            {(primaryButton || secondaryButton) && (
              <div className={\`flex flex-wrap gap-4 \${!image ? "justify-center" : ""}\`}>
                {primaryButton && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={primaryButton.onClick}
                  >
                    {primaryButton.text}
                  </Button>
                )}
                {secondaryButton && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={secondaryButton.onClick}
                  >
                    {secondaryButton.text}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Изображение */}
          {image && <div className="flex items-center justify-center">{image}</div>}
        </div>
      </div>
    </section>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hero Section (Главная секция)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Первая секция сайта с заголовком, описанием и CTA кнопками
          </p>
        </div>

        {/* Базовая Hero секция */}
        <div className="mb-8">
          <ComponentPreview
            title="Базовая Hero секция"
            description="Простая секция с заголовком и кнопками"
            code={`<Hero 
  title="Создавай удивительные сайты"
  description="Современные инструменты для разработки веб-приложений"
  primaryButton={{
    text: "Начать",
    onClick: () => console.log("Начать"),
  }}
  secondaryButton={{
    text: "Узнать больше",
    onClick: () => console.log("Узнать больше"),
  }}
/>`}
          >
            <Hero
              title="Создавай удивительные сайты"
              description="Современные инструменты для разработки веб-приложений нового поколения"
              primaryButton={{
                text: "Начать",
                onClick: () => console.log("Начать"),
              }}
              secondaryButton={{
                text: "Узнать больше",
                onClick: () => console.log("Узнать больше"),
              }}
            />
          </ComponentPreview>
        </div>

        {/* С подзаголовком */}
        <div className="mb-8">
          <ComponentPreview
            title="С подзаголовком"
            description="Добавь маленький подзаголовок сверху"
            code={`<Hero 
  subtitle="Новое поколение"
  title="Создавай быстрее"
  description="Все инструменты в одном месте"
  primaryButton={{
    text: "Попробовать",
    onClick: () => console.log("Попробовать"),
  }}
/>`}
          >
            <Hero
              subtitle="Новое поколение"
              title="Создавай быстрее"
              description="Все инструменты разработки в одном месте для создания современных приложений"
              primaryButton={{
                text: "Попробовать",
                onClick: () => console.log("Попробовать"),
              }}
            />
          </ComponentPreview>
        </div>

        {/* С изображением */}
        <div className="mb-8">
          <ComponentPreview
            title="С изображением"
            description="Добавь картинку или иллюстрацию справа"
            code={`<Hero 
  title="Твой новый проект"
  description="Начни создавать уже сегодня"
  primaryButton={{
    text: "Создать проект",
    onClick: () => console.log("Создать"),
  }}
  image={
    <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-6xl">
      🚀
    </div>
  }
/>`}
          >
            <Hero
              title="Твой новый проект"
              description="Начни создавать уже сегодня с помощью мощных инструментов"
              primaryButton={{
                text: "Создать проект",
                onClick: () => console.log("Создать"),
              }}
              image={
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-6xl shadow-2xl">
                  🚀
                </div>
              }
            />
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
                  Создай компонент Hero
                </h3>
                <p className="text-gray-600">
                  Создай{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/sections/Hero.tsx
                  </code>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Используй на главной странице
                </h3>
                <p className="text-gray-600 mb-2">
                  Добавь Hero секцию на главную страницу
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-2">
                  {`import Hero from '@/components/sections/Hero';

export default function HomePage() {
  return (
    <div>
      <Hero 
        title="Создавай удивительные сайты"
        description="Современные инструменты для разработки"
        primaryButton={{
          text: "Начать",
          onClick: () => console.log("Начать"),
        }}
        secondaryButton={{
          text: "Узнать больше",
          onClick: () => console.log("Узнать больше"),
        }}
      />
      
      {/* Остальной контент */}
    </div>
  );
}`}
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Настрой под себя!</h3>
                <p className="text-gray-600 mb-3">
                  Измени цвета и стили в компоненте Hero:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`// Фон градиент:
from-blue-50 to-indigo-100  →  from-purple-50 to-pink-100

// Цвет подзаголовка:
text-blue-600  →  text-purple-600

// Размер заголовка:
text-5xl lg:text-6xl  →  text-6xl lg:text-7xl`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код Hero"
            description="Скопируй весь код"
            code={heroCode}
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
