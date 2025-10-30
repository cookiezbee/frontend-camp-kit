"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Sidebar from "@/components/ui/Sidebar";

export default function SidebarPage() {
  const sidebarCode = `"use client";

import Link from "next/link";
import { useState } from "react";

interface SidebarLink {
  label: string;
  href: string;
}

interface SidebarProps {
  links: SidebarLink[];
  position?: "left" | "right";
}

export default function Sidebar({ links, position = "left" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Кнопка открытия (гамбургер) */}
      <button
        onClick={toggleSidebar}
        className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Открыть меню"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Оверлей (затемнение фона) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Боковое меню */}
      <div
        className={\`fixed top-0 \${
          position === "left" ? "left-0" : "right-0"
        } h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 \${
          isOpen
            ? "translate-x-0"
            : position === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        }\`}
      >
        {/* Шапка сайдбара */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Меню</h2>
          <button
            onClick={closeSidebar}
            className="p-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Закрыть меню"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Навигация */}
        <nav className="p-4">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={closeSidebar}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}`;

  const links = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Услуги", href: "/services" },
    { label: "Контакты", href: "/contact" },
    { label: "Блог", href: "/blog" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Sidebar (Боковое меню)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Меню, которое выезжает сбоку при клике на иконку
          </p>
        </div>

        {/* Базовый сайдбар (слева) */}
        <div className="mb-8">
          <ComponentPreview
            title="Базовый сайдбар (слева)"
            description="Нажми на иконку — откроется меню слева"
            code={`const links = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/about" },
  { label: "Услуги", href: "/services" },
  { label: "Контакты", href: "/contact" },
];

<Sidebar links={links} />`}
          >
            <div className="flex items-center gap-4 p-8 bg-white rounded-lg">
              <Sidebar links={links} />
              <p className="text-gray-600">← Нажми на иконку</p>
            </div>
          </ComponentPreview>
        </div>

        {/* Сайдбар справа */}
        <div className="mb-8">
          <ComponentPreview
            title="Сайдбар справа"
            description="Меню выезжает справа"
            code={`<Sidebar links={links} position="right" />`}
          >
            <div className="flex items-center gap-4 p-8 bg-white rounded-lg justify-end">
              <p className="text-gray-600">Нажми на иконку →</p>
              <Sidebar links={links} position="right" />
            </div>
          </ComponentPreview>
        </div>

        {/* В Header */}
        <div className="mb-8">
          <ComponentPreview
            title="Использование в Header"
            description="Добавь Sidebar в Header для мобильного меню"
            code={`import Sidebar from "@/components/ui/Sidebar";

export default function Header() {
  const links = [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contact" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="text-2xl font-bold text-blue-600">Logo</div>

          {/* Sidebar для мобильных */}
          <Sidebar links={links} />
        </div>
      </div>
    </header>
  );
}`}
          >
            <header className="bg-white border-b border-gray-200 shadow-sm rounded-lg">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">Logo</div>
                  <Sidebar links={links} />
                </div>
              </div>
            </header>
          </ComponentPreview>
        </div>

        {/* Инструкция */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border-2 border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как использовать?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Создай компонент
                </h3>
                <p className="text-gray-600">
                  Создай{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/Sidebar.tsx
                  </code>{" "}
                  и скопируй код
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Добавь в свой проект
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`import Sidebar from "@/components/ui/Sidebar";

const links = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contact" },
];

<Sidebar links={links} />`}
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Настройки</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">
                      Позиция (слева или справа):
                    </p>
                    <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-1">
                      {`<Sidebar links={links} position="left" />  // слева
<Sidebar links={links} position="right" /> // справа`}
                    </pre>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Ширина меню:</p>
                    <p className="text-sm text-gray-600 mt-1">
                      В компоненте найди <code className="bg-gray-100 px-1 rounded">w-80</code> и
                      замени на нужную ширину
                    </p>
                    <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-1">
                      {`w-64  // узкое (256px)
w-80  // стандартное (320px)
w-96  // широкое (384px)`}
                    </pre>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Цвета:</p>
                    <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-1">
                      {`// Фон меню:
bg-white → bg-gray-900 (темная тема)

// Цвет ссылок:
text-gray-700 → text-white

// Ховер:
hover:bg-blue-50 → hover:bg-gray-800`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Как работает */}
        <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Как это работает?
          </h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">1. Кнопка (иконка)</p>
              <p>
                Иконка гамбургера (три полоски) — при клике вызывает функцию{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  toggleSidebar()
                </code>
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">2. Состояние</p>
              <p>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  useState
                </code>{" "}
                хранит, открыто меню или закрыто
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">3. Анимация</p>
              <p>
                Меню выезжает через CSS класс{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  translate-x-0
                </code>{" "}
                (открыто) или{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  -translate-x-full
                </code>{" "}
                (скрыто)
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">4. Оверлей</p>
              <p>
                Затемнение фона —{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  bg-black bg-opacity-50
                </code>
                . Клик по оверлею закрывает меню
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">5. Закрытие</p>
              <p>
                Меню закрывается при клике на крестик, оверлей или на любую
                ссылку
              </p>
            </div>
          </div>
        </div>

        {/* Полный код */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код Sidebar"
            description="Скопируй в components/ui/Sidebar.tsx"
            code={sidebarCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз, чтобы скопировать код ⬇️
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  );
}
