/* eslint-disable react/no-unescaped-entities */
export default function GalleryPage() {
  const websites = [
    {
      title: "Vercel",
      url: "https://vercel.com",
      description: "Геометрические фигуры, интерактивный фон, минимализм",
      tags: ["Геометрия", "Интерактив", "Монохром"],
    },
    {
      title: "Framer",
      url: "https://www.framer.com",
      description: "Анимированные элементы, плавные переходы между секциями",
      tags: ["Анимации", "Переходы", "Интерактив"],
    },
    {
      title: "Stripe",
      url: "https://stripe.com",
      description: "Градиентная сетка, 3D иллюстрации, анимации на скролл",
      tags: ["Градиенты", "3D", "Scroll"],
    },
    {
      title: "Lenis Scroll",
      url: "https://lenis.studiofreight.com",
      description: "Демо плавного скролла с крутыми эффектами",
      tags: ["Scroll", "Smooth", "Демо"],
    },
    {
      title: "Awwwards",
      url: "https://www.awwwards.com",
      description: "Сайты-победители с инновационным дизайном",
      tags: ["Награды", "Инновации", "Галерея"],
    },
    {
      title: "Apple",
      url: "https://www.apple.com",
      description: "Видео-фоны, крупная типографика, премиум качество",
      tags: ["Видео", "Типографика", "Премиум"]
    },
    {
      title: "Figma",
      url: "https://www.figma.com",
      description: "Яркие градиенты, 3D элементы, интерактивные демо",
      tags: ["Градиенты", "3D", "Дизайн"]
    },
    {
      title: "Webflow",
      url: "https://webflow.com",
      description: "Параллакс эффекты, анимации, яркие цвета",
      tags: ["Параллакс", "Анимации", "Яркость"]
    },
    {
      title: "GitHub",
      url: "https://github.com",
      description: "Анимированная сетка, тёмная тема, hover-эффекты",
      tags: ["Тёмная", "Анимации", "Сетка"]
    },
    {
      title: "Notion",
      url: "https://www.notion.so",
      description: "Простота, иллюстрации, плавные анимации",
      tags: ["Иллюстрации", "Простота", "Анимации"]
    },
    {
      title: "Dribbble",
      url: "https://dribbble.com",
      description: "Сетка работ, hover-эффекты, розовые акценты",
      tags: ["Сетка", "Hover", "Портфолио"]
    },
    {
      title: "Behance",
      url: "https://www.behance.net",
      description: "Крупные изображения, галерея проектов",
      tags: ["Галерея", "Изображения", "Adobe"]
    },
    {
      title: "Tailwind CSS",
      url: "https://tailwindcss.com",
      description: "Градиентный фон, идеальная документация",
      tags: ["Документация", "Градиенты", "Код"]
    },
    {
      title: "Next.js",
      url: "https://nextjs.org",
      description: "Монохром, примеры кода, анимированные кнопки",
      tags: ["Монохром", "Код", "Кнопки"]
    },
    {
      title: "Cuberto",
      url: "https://cuberto.com",
      description: "Креативное агентство с безумными анимациями",
      tags: ["Агентство", "Анимации", "Креатив"],
    },
    {
      title: "Tilda",
      url: "https://tilda.cc/ru/",
      description: "Конструктор с красивыми примерами лендингов",
      tags: ["Конструктор", "Примеры", "Лендинги"]
    },
    {
      title: "Wokine",
      url: "https://wokine.com",
      description: "Плавные 3D переходы, курсор с трейлом, современный UI",
      tags: ["3D", "Курсор", "Переходы"],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Примеры крутых сайтов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные сайты с wow-эффектами, 3D анимациями и инновационным дизайном
          </p>
        </div>

        {/* Сетка сайтов */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((site) => (
            <a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {site.title}
                  </h3>
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {site.description}
                </p>

                {/* Теги */}
                <div className="flex flex-wrap gap-2">
                  {site.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Как использовать */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Что смотреть на этих сайтах
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold text-gray-800 mb-2">Анимации</h3>
              <p className="text-gray-600 text-sm">
                Как элементы появляются при скролле? Какие переходы между секциями?
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-bold text-gray-800 mb-2">Цвета и эффекты</h3>
              <p className="text-gray-600 text-sm">
                Градиенты, 3D элементы, интерактивные фоны — что делает сайт живым?
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🖱️</div>
              <h3 className="font-bold text-gray-800 mb-2">Интерактив</h3>
              <p className="text-gray-600 text-sm">
                Что происходит при наведении? Как реагируют кнопки и карточки?
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
