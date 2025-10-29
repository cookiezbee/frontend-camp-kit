"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

export default function HeaderPage() {
  const headerCode = `"use client";

import Link from "next/link";
import { useState } from "react";

interface DropdownLink {
  type: "link";
  label: string;
  href: string;
}

interface DropdownText {
  type: "text";
  label: string;
}

interface DropdownButton {
  type: "button";
  label: string;
  onClick: () => void;
}

type DropdownItem = DropdownLink | DropdownText | DropdownButton;

interface NavigationLink {
  type: "link";
  label: string;
  href: string;
}

interface NavigationDropdown {
  type: "dropdown";
  label: string;
  items: DropdownItem[];
}

type NavigationItem = NavigationLink | NavigationDropdown;

interface HeaderProps {
  logo?: React.ReactNode;
  navigation?: NavigationItem[];
  actions?: React.ReactNode;
}

export default function Header({ logo, navigation, actions }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Логотип */}
          <div className="flex items-center gap-2 mr-8">
            {logo || (
              <div className="text-2xl font-bold text-blue-600">Logo</div>
            )}
          </div>

          {/* Навигация */}
          {navigation && (
            <nav className="flex items-center gap-6">
              {navigation.map((item, index) => (
                <div key={index} className="relative">
                  {item.type === "link" ? (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1"
                      >
                        {item.label}
                        <svg
                          className={\`w-4 h-4 transition-transform \${
                            openDropdown === index ? "rotate-180" : ""
                          }\`}
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

                      {openDropdown === index && (
                        <>
                          <div
                            className="fixed inset-0 z-10"
                            onClick={closeDropdown}
                          />
                          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[220px] z-20">
                            {item.items.map((dropdownItem, dropdownIndex) => {
                              if (dropdownItem.type === "link") {
                                return (
                                  <Link
                                    key={dropdownIndex}
                                    href={dropdownItem.href}
                                    onClick={closeDropdown}
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                );
                              } else if (dropdownItem.type === "text") {
                                return (
                                  <div
                                    key={dropdownIndex}
                                    className="px-4 py-2 text-gray-500 text-sm"
                                  >
                                    {dropdownItem.label}
                                  </div>
                                );
                              } else if (dropdownItem.type === "button") {
                                return (
                                  <button
                                    key={dropdownIndex}
                                    onClick={() => {
                                      dropdownItem.onClick();
                                      closeDropdown();
                                    }}
                                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                  >
                                    {dropdownItem.label}
                                  </button>
                                );
                              }
                            })}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Действия */}
          {actions && (
            <div className="flex items-center gap-3 ml-auto">{actions}</div>
          )}
        </div>
      </div>
    </header>
  );
}`;

  const navigation = [
    { type: "link" as const, label: "Главная", href: "/" },
    { type: "link" as const, label: "О нас", href: "/about" },
    { type: "link" as const, label: "Контакты", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Header (Шапка сайта)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Навигация, логотип, выпадающие меню и кнопки действий
          </p>
        </div>

        {/* Базовая шапка */}
        <div className="mb-8">
          <ComponentPreview
            title="Базовая шапка"
            description="Простая шапка с логотипом и навигацией"
            code={`const navigation = [
  { type: "link", label: "Главная", href: "/" },
  { type: "link", label: "О нас", href: "/about" },
  { type: "link", label: "Контакты", href: "/contact" },
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
                  <span className="text-xl font-bold text-gray-900">
                    MyApp
                  </span>
                </div>
              }
              navigation={navigation}
            />
          </ComponentPreview>
        </div>

        {/* С выпадающим меню - ссылки */}
        <div className="mb-8">
          <ComponentPreview
            title="С выпадающим меню (ссылки)"
            description="Кликни на 'Услуги' — откроется список ссылок"
            code={`const navigationWithDropdown = [
  { type: "link", label: "Главная", href: "/" },
  { 
    type: "dropdown",
    label: "Услуги",
    items: [
      { type: "link", label: "Веб-разработка", href: "/services/web" },
      { type: "link", label: "Мобильные приложения", href: "/services/mobile" },
      { type: "link", label: "Дизайн", href: "/services/design" },
      { type: "link", label: "SEO", href: "/services/seo" },
    ]
  },
  { type: "link", label: "Контакты", href: "/contact" },
];

<Header navigation={navigationWithDropdown} />`}
          >
            <Header
              navigation={[
                { type: "link" as const, label: "Главная", href: "/" },
                {
                  type: "dropdown" as const,
                  label: "Услуги",
                  items: [
                    {
                      type: "link" as const,
                      label: "Веб-разработка",
                      href: "/services/web",
                    },
                    {
                      type: "link" as const,
                      label: "Мобильные приложения",
                      href: "/services/mobile",
                    },
                    {
                      type: "link" as const,
                      label: "Дизайн",
                      href: "/services/design",
                    },
                    {
                      type: "link" as const,
                      label: "SEO",
                      href: "/services/seo",
                    },
                  ],
                },
                { type: "link" as const, label: "Контакты", href: "/contact" },
              ]}
            />
          </ComponentPreview>
        </div>

        {/* С выпадающим меню - текст */}
        <div className="mb-8">
          <ComponentPreview
            title="Dropdown с текстом и ссылками"
            description="Можно добавить текст-заголовок между ссылками"
            code={`const navigationWithText = [
  { type: "link", label: "Главная", href: "/" },
  { 
    type: "dropdown",
    label: "Продукты",
    items: [
      { type: "text", label: "Для бизнеса" },
      { type: "link", label: "CRM система", href: "/products/crm" },
      { type: "link", label: "E-commerce", href: "/products/ecommerce" },
      { type: "text", label: "Для частных лиц" },
      { type: "link", label: "Личный сайт", href: "/products/personal" },
      { type: "link", label: "Портфолио", href: "/products/portfolio" },
    ]
  },
];

<Header navigation={navigationWithText} />`}
          >
            <Header
              navigation={[
                { type: "link" as const, label: "Главная", href: "/" },
                {
                  type: "dropdown" as const,
                  label: "Продукты",
                  items: [
                    { type: "text" as const, label: "Для бизнеса" },
                    {
                      type: "link" as const,
                      label: "CRM система",
                      href: "/products/crm",
                    },
                    {
                      type: "link" as const,
                      label: "E-commerce",
                      href: "/products/ecommerce",
                    },
                    { type: "text" as const, label: "Для частных лиц" },
                    {
                      type: "link" as const,
                      label: "Личный сайт",
                      href: "/products/personal",
                    },
                    {
                      type: "link" as const,
                      label: "Портфолио",
                      href: "/products/portfolio",
                    },
                  ],
                },
              ]}
            />
          </ComponentPreview>
        </div>

        {/* С кнопками в dropdown */}
        <div className="mb-8">
          <ComponentPreview
            title="Dropdown с кнопками"
            description="Можно добавить кнопки с функциями (alert, console.log, любой код)"
            code={`const navigationWithButtons = [
  { type: "link", label: "Главная", href: "/" },
  { 
    type: "dropdown",
    label: "Действия",
    items: [
      { type: "link", label: "Мой профиль", href: "/profile" },
      { type: "link", label: "Настройки", href: "/settings" },
      { 
        type: "button", 
        label: "Выйти", 
        onClick: () => alert("Выход из системы") 
      },
    ]
  },
];

<Header navigation={navigationWithButtons} />`}
          >
            <Header
              navigation={[
                { type: "link" as const, label: "Главная", href: "/" },
                {
                  type: "dropdown" as const,
                  label: "Действия",
                  items: [
                    {
                      type: "link" as const,
                      label: "Мой профиль",
                      href: "/profile",
                    },
                    {
                      type: "link" as const,
                      label: "Настройки",
                      href: "/settings",
                    },
                    {
                      type: "button" as const,
                      label: "Выйти",
                      onClick: () => alert("Выход из системы"),
                    },
                  ],
                },
              ]}
            />
          </ComponentPreview>
        </div>

        {/* С кнопками действий */}
        <div className="mb-8">
          <ComponentPreview
            title="Dropdown + Кнопки действий"
            description="Комбинируй dropdown с кнопками"
            code={`<Header 
  logo={
    <div className="flex items-center gap-2">
      <div className="text-3xl">🚀</div>
      <span className="text-xl font-bold text-gray-900">MyApp</span>
    </div>
  }
  navigation={[
    { type: "link", label: "Главная", href: "/" },
    { 
      type: "dropdown",
      label: "Услуги",
      items: [
        { type: "link", label: "Веб-разработка", href: "/services/web" },
        { type: "link", label: "Дизайн", href: "/services/design" },
      ]
    },
  ]}
  actions={
    <>
      <Button variant="secondary" size="sm">Войти</Button>
      <Button variant="primary" size="sm">Регистрация</Button>
    </>
  }
/>`}
          >
            <Header
              logo={
                <div className="flex items-center gap-2">
                  <div className="text-3xl">🚀</div>
                  <span className="text-xl font-bold text-gray-900">
                    MyApp
                  </span>
                </div>
              }
              navigation={[
                { type: "link" as const, label: "Главная", href: "/" },
                {
                  type: "dropdown" as const,
                  label: "Услуги",
                  items: [
                    {
                      type: "link" as const,
                      label: "Веб-разработка",
                      href: "/services/web",
                    },
                    {
                      type: "link" as const,
                      label: "Дизайн",
                      href: "/services/design",
                    },
                  ],
                },
              ]}
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

        {/* Объяснение */}
        <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Как работает dropdown?
          </h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                3 типа элементов в dropdown:
              </h3>
              <div className="bg-white p-4 rounded-lg space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">1. Ссылка (link)</p>
                  <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-1">
                    {`{ type: "link", label: "Веб-разработка", href: "/services/web" }`}
                  </pre>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    2. Текст (text) — не кликабельный
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-1">
                    {`{ type: "text", label: "Для бизнеса" }`}
                  </pre>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    3. Кнопка (button) — с функцией
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-1">
                    {`{ type: "button", label: "Выйти", onClick: () => alert("Выход") }`}
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Как открывается?</h3>
              <p>
                <strong>По клику</strong> — кликни на кнопку → меню откроется.
                Кликни вне меню или на ссылку → закроется.
              </p>
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
                  Создай компонент Header
                </h3>
                <p className="text-gray-600">
                  Создай{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/Header.tsx
                  </code>{" "}
                  и скопируй полный код ниже
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
                  Добавь Header в главный layout
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-2">
                  {`import Header from '@/components/ui/Header';

export default function RootLayout({ children }) {
  const navigation = [
    { type: "link", label: "Главная", href: "/" },
    { 
      type: "dropdown",
      label: "Услуги",
      items: [
        { type: "link", label: "Веб-разработка", href: "/services/web" },
        { type: "link", label: "Дизайн", href: "/services/design" },
      ]
    },
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
            title="Полный код Header с dropdown"
            description="Скопируй в components/ui/Header.tsx"
            code={headerCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз, чтобы скопировать полный код ⬇️
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  );
}
