"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

export default function HeaderPage() {
  const headerCode = `"use client";

import Link from "next/link";

interface HeaderProps {
  logo?: React.ReactNode;
  navigation?: { label: string; href: string }[];
  actions?: React.ReactNode;
}

export default function Header({ logo, navigation, actions }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Логотип */}
          <div className="flex items-center gap-2">
            {logo || (
              <div className="text-2xl font-bold text-blue-600">Logo</div>
            )}
          </div>

          {/* Навигация */}
          {navigation && (
            <nav className="flex items-center gap-6">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Действия (кнопки, иконки) */}
          {actions && <div className="flex items-center gap-3 ml-auto">{actions}</div>}
        </div>
      </div>
    </header>
  );
}`;

  const navigation = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/" },
    { label: "Услуги", href: "/" },
    { label: "Контакты", href: "/" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Header (Шапка сайта)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Навигация, логотип и кнопки действий для сайта
          </p>
        </div>

        {/* Базовая шапка */}
        <div className="mb-8">
          <ComponentPreview
            title="Базовая шапка"
            description="Простая шапка с логотипом и навигацией"
            code={`const navigation = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/about" },
  { label: "Услуги", href: "/services" },
  { label: "Контакты", href: "/contact" },
];

<Header navigation={navigation} />`}
          >
            <Header navigation={navigation} />
          </ComponentPreview>
        </div>

        {/* С кастомным логотипом */}
        <div className="mb-8">
          <ComponentPreview
            title="С кастомным логотипом"
            description="Добавь свой логотип текстом или картинкой"
            code={`<Header 
  logo={
    <div className="flex items-center gap-2">
      <div className="text-3xl">🚀</div>
      <span className="text-xl font-bold text-gray-900">MyApp</span>
    </div>
  }
  navigation={navigation}
/>`}
          >
            <Header
              logo={
                <div className="flex items-center gap-2">
                  <div className="text-3xl">🚀</div>
                  <span className="text-xl font-bold text-gray-900">MyApp</span>
                </div>
              }
              navigation={navigation}
            />
          </ComponentPreview>
        </div>

        {/* С кнопками */}
        <div className="mb-8">
          <ComponentPreview
            title="С кнопками действий"
            description="Добавь кнопки Войти/Регистрация"
            code={`<Header 
  navigation={navigation}
  actions={
    <>
      <Button variant="secondary" size="sm">
        Войти
      </Button>
      <Button variant="primary" size="sm">
        Регистрация
      </Button>
    </>
  }
/>`}
          >
            <Header
              navigation={navigation}
              actions={
                <>
                  <Button variant="secondary" size="sm">
                    Войти
                  </Button>
                  <Button variant="primary" size="sm">
                    Регистрация
                  </Button>
                </>
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
                  Создай компонент Header
                </h3>
                <p className="text-gray-600">
                  Создай{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/Header.tsx
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
                  Добавь в layout.tsx
                </h3>
                <p className="text-gray-600 mb-2">
                  Добавь Header в главный layout, чтобы он был на всех страницах
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-2">
                  {`import Header from '@/components/ui/Header';

export default function RootLayout({ children }) {
  const navigation = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
  ];

  return (
    <html>
      <body>
        <Header navigation={navigation} />
        {children}
      </body>
    </html>
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
                <h3 className="font-semibold text-lg mb-2">
                  Настрой под себя!
                </h3>
                <p className="text-gray-600 mb-3">
                  Измени цвета в компоненте Header:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`// Фон шапки:
bg-white         →    bg-blue-500

// Цвет ссылок:
text-gray-700    →    text-white

// Бордер:
border-gray-200  →    border-blue-600`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код Header"
            description="Скопируй в components/ui/Header.tsx"
            code={headerCode}
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
