"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Footer from "@/components/ui/Footer";

export default function FooterPage() {
  const footerCode = `import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: React.ReactNode;
  sections?: FooterSection[];
  socialLinks?: React.ReactNode;
  copyright?: string;
}

export default function Footer({
  logo,
  sections,
  socialLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="space-y-4">
            {logo || (
              <div className="text-2xl font-bold text-white">Logo</div>
            )}
            <p className="text-sm text-gray-400">
              Создаем удивительные веб-приложения для современного мира.
            </p>
          </div>

          {/* Секции ссылок */}
          {sections?.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-semibold text-lg">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            {copyright || \`© \${new Date().getFullYear()} Все права защищены.\`}
          </p>

          {/* Соцсети */}
          {socialLinks && (
            <div className="flex items-center gap-4">{socialLinks}</div>
          )}
        </div>
      </div>
    </footer>
  );
}`;

  const sections = [
    {
      title: "Продукт",
      links: [
        { label: "Возможности", href: "/" },
        { label: "Цены", href: "/" },
        { label: "Отзывы", href: "/" },
      ],
    },
    {
      title: "Компания",
      links: [
        { label: "О нас", href: "/" },
        { label: "Блог", href: "/" },
        { label: "Вакансии", href: "/" },
      ],
    },
    {
      title: "Поддержка",
      links: [
        { label: "Помощь", href: "/" },
        { label: "Контакты", href: "/" },
        { label: "FAQ", href: "/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Footer (Подвал сайта)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Навигация, соцсети и контакты внизу страницы
          </p>
        </div>

        {/* Базовый Footer */}
        <div className="mb-8">
          <ComponentPreview
            title="Базовый подвал"
            description="Простой футер с секциями ссылок"
            code={`const sections = [
  {
    title: "Продукт",
    links: [
      { label: "Возможности", href: "/features" },
      { label: "Цены", href: "/pricing" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "/about" },
      { label: "Блог", href: "/blog" },
    ],
  },
];

<Footer sections={sections} />`}
          >
            <Footer sections={sections} />
          </ComponentPreview>
        </div>

        {/* С логотипом */}
        <div className="mb-8">
          <ComponentPreview
            title="С кастомным логотипом"
            description="Добавь свой логотип"
            code={`<Footer 
  logo={
    <div className="flex items-center gap-2">
      <div className="text-3xl">🚀</div>
      <span className="text-xl font-bold text-white">MyApp</span>
    </div>
  }
  sections={sections}
/>`}
          >
            <Footer
              logo={
                <div className="flex items-center gap-2">
                  <div className="text-3xl">🚀</div>
                  <span className="text-xl font-bold text-white">MyApp</span>
                </div>
              }
              sections={sections}
            />
          </ComponentPreview>
        </div>

        {/* С соцсетями */}
        <div className="mb-8">
          <ComponentPreview
            title="С соцсетями"
            description="Добавь русские соцсети: ВК, Telegram, GitHub"
            code={`<Footer 
  sections={sections}
  socialLinks={
    <>
      {/* ВКонтакте */}
      <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="ВКонтакте">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.785 16.241s.288-.032.436-.194c.136-.149.132-.427.132-.427s-.02-1.304.574-1.496c.586-.19 1.336 1.26 2.131 1.817.605.423 1.064.33 1.064.33l2.137-.03s1.117-.071.588-.966c-.043-.073-.308-.662-1.587-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.841-.244-.841-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.214.263-.214.263s-.383 1.040-.894 1.924c-1.078 1.863-1.509 1.962-1.685 1.846-.409-.271-.307-1.087-.307-1.667 0-1.81.27-2.565-.525-2.761-.264-.065-.458-.108-1.133-.115-.866-.009-1.599.003-2.011.21-.275.138-.487.445-.358.463.16.022.522.1.714.365.248.342.239 1.11.239 1.11s.143 2.133-.333 2.396c-.327.181-.776-.188-1.74-1.870-.493-.865-.866-1.822-.866-1.822s-.072-.18-.2-.277c-.155-.117-.371-.154-.371-.154l-2.286.015s-.343.01-.469.162c-.112.135-.009.413-.009.413s1.797 4.289 3.831 6.453c1.867 1.986 3.986 1.854 3.986 1.854h.961z"/>
        </svg>
      </a>
      
      {/* Telegram */}
      <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Telegram">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
        </svg>
      </a>
      
      {/* GitHub */}
      <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </>
  }
/>`}
          >
            <Footer
              sections={sections}
              socialLinks={
                <>
                  {/* ВКонтакте */}
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="ВКонтакте"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.785 16.241s.288-.032.436-.194c.136-.149.132-.427.132-.427s-.02-1.304.574-1.496c.586-.19 1.336 1.26 2.131 1.817.605.423 1.064.33 1.064.33l2.137-.03s1.117-.071.588-.966c-.043-.073-.308-.662-1.587-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.841-.244-.841-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.214.263-.214.263s-.383 1.040-.894 1.924c-1.078 1.863-1.509 1.962-1.685 1.846-.409-.271-.307-1.087-.307-1.667 0-1.81.27-2.565-.525-2.761-.264-.065-.458-.108-1.133-.115-.866-.009-1.599.003-2.011.21-.275.138-.487.445-.358.463.16.022.522.1.714.365.248.342.239 1.11.239 1.11s.143 2.133-.333 2.396c-.327.181-.776-.188-1.74-1.870-.493-.865-.866-1.822-.866-1.822s-.072-.18-.2-.277c-.155-.117-.371-.154-.371-.154l-2.286.015s-.343.01-.469.162c-.112.135-.009.413-.009.413s1.797 4.289 3.831 6.453c1.867 1.986 3.986 1.854 3.986 1.854h.961z" />
                    </svg>
                  </a>

                  {/* Telegram */}
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Telegram"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
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
                  Создай компонент Footer
                </h3>
                <p className="text-gray-600">
                  Создай{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/Footer.tsx
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
                  Добавь Footer в главный layout, чтобы он был на всех страницах
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-2">
                  {`import Footer from '@/components/ui/Footer';

const sections = [
  {
    title: "Продукт",
    links: [
      { label: "Возможности", href: "/features" },
      { label: "Цены", href: "/pricing" },
    ],
  },
];

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Footer sections={sections} />
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
                  Измени цвета в компоненте Footer:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`// Фон футера:
bg-gray-900      →    bg-blue-900

// Цвет текста:
text-gray-300    →    text-gray-200

// Цвет заголовков:
text-white       →    text-blue-300`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код Footer"
            description="Скопируй весь код"
            code={footerCode}
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
