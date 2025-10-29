"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";

export default function PagesNavigationPage() {
  const createPageExample = `// Файл: app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          О нас
        </h1>
        <p className="text-xl text-gray-600">
          Здесь текст о вашей компании...
        </p>
      </div>
    </div>
  );
}`;

  const navLinksExample = `// Файл с навигацией (например, components/Header.tsx)

const navLinks = [
  { name: "Главная", href: "/" },
  { name: "О нас", href: "/about" },
  { name: "Услуги", href: "/services" },
  { name: "Контакты", href: "/contact" },
];`;

  const addNewLinkExample = `// БЫЛО:
const navLinks = [
  { name: "Главная", href: "/" },
  { name: "О нас", href: "/about" },
];

// СТАЛО:
const navLinks = [
  { name: "Главная", href: "/" },
  { name: "О нас", href: "/about" },
  { name: "Портфолио", href: "/portfolio" },  // ← ДОБАВИЛИ
];`;

  const folderStructureExample = `app/
├── page.tsx              → Главная (/)
├── about/
│   └── page.tsx          → О нас (/about)
├── services/
│   └── page.tsx          → Услуги (/services)
├── contact/
│   └── page.tsx          → Контакты (/contact)
└── portfolio/
    └── page.tsx          → Портфолио (/portfolio)`;

  const contactPageExample = `export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Контакты
        </h1>
        
        <div className="space-y-4 text-lg">
          <p className="flex items-center gap-3">
            <span>📧</span>
            <span>Email: info@site.ru</span>
          </p>
          
          <p className="flex items-center gap-3">
            <span>📱</span>
            <span>Телефон: +7 999 123-45-67</span>
          </p>
          
          <p className="flex items-center gap-3">
            <span>📍</span>
            <span>Адрес: Москва, ул. Ленина 1</span>
          </p>
        </div>
      </div>
    </div>
  );
}`;

  const servicesPageExample = `import Card from '@/components/ui/Card';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          Наши услуги
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Мы предлагаем лучшие решения для вашего бизнеса
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Разработка сайтов"
            description="Создаём современные сайты"
            buttonText="Подробнее"
          />
          <Card
            title="Дизайн"
            description="Уникальный дизайн для вас"
            buttonText="Подробнее"
          />
          <Card
            title="SEO продвижение"
            description="Выводим в топ поисковых систем"
            buttonText="Подробнее"
          />
        </div>
      </div>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Создание страниц и навигация
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Как создавать новые страницы в проекте и добавлять их в меню
          </p>
        </div>

        {/* Что такое страницы */}
        <div className="mb-12 p-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Что такое страницы?
          </h2>
          <p className="text-gray-700 mb-4">
            Страница — это отдельный раздел сайта с уникальным адресом (URL).
          </p>
          <div className="bg-white p-6 rounded-lg space-y-3">
            <p className="flex items-center gap-3">
              <span className="font-mono text-blue-600">site.ru/</span>
              <span>→ Главная страница</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-mono text-blue-600">site.ru/about</span>
              <span>→ Страница &#34;О нас&#34;</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-mono text-blue-600">site.ru/services</span>
              <span>→ Страница &#34;Услуги&#34;</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="font-mono text-blue-600">site.ru/contact</span>
              <span>→ Страница &#34;Контакты&#34;</span>
            </p>
          </div>
          <p className="text-gray-700 mt-4">
            В Next.js каждая страница = папка внутри{" "}
            <code className="bg-white px-2 py-1 rounded">app/</code> + файл{" "}
            <code className="bg-white px-2 py-1 rounded">page.tsx</code>
          </p>
        </div>

        {/* Структура папок */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как работает структура папок
          </h2>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-6">
            <p className="text-amber-900 font-semibold">
              💡 Главное правило: Название папки = адрес в браузере
            </p>
          </div>

          <ComponentPreview
            title="Структура папок проекта"
            description="Так выглядит типичный проект с несколькими страницами"
            code={folderStructureExample}
          >
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm">
              <pre>{folderStructureExample}</pre>
            </div>
          </ComponentPreview>
        </div>

        {/* Пошаговая инструкция */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Пошаговая инструкция: Создание новой страницы
          </h2>

          <div className="space-y-8">
            {/* Шаг 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Создай новую папку в app/
                </h3>
                <p className="text-gray-700 mb-4">
                  Название папки — это адрес страницы. Используй только
                  английские буквы, маленькими, без пробелов.
                </p>

                <div className="bg-green-50 border border-green-300 p-4 rounded-lg mb-3">
                  <p className="text-green-900 font-semibold mb-2">
                    ✅ Правильно:
                  </p>
                  <div className="font-mono text-sm space-y-1 text-green-800">
                    <p>app/about/</p>
                    <p>app/services/</p>
                    <p>app/my-portfolio/</p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-300 p-4 rounded-lg">
                  <p className="text-red-900 font-semibold mb-2">
                    ❌ Неправильно:
                  </p>
                  <div className="font-mono text-sm space-y-1 text-red-800">
                    <p>app/О нас/ (русские буквы)</p>
                    <p>app/My Services/ (пробелы, заглавные)</p>
                    <p>app/about.tsx (это файл, а не папка)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Шаг 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Создай файл page.tsx внутри папки
                </h3>
                <p className="text-gray-700 mb-4">
                  Внутри каждой папки ОБЯЗАТЕЛЬНО должен быть файл{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    page.tsx
                  </code>
                </p>

                <ComponentPreview
                  title="Шаблон страницы"
                  description="Скопируй этот код для новой страницы"
                  code={createPageExample}
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">О нас</h2>
                    <p className="text-gray-600">
                      Здесь текст о вашей компании...
                    </p>
                  </div>
                </ComponentPreview>

                <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <p className="text-purple-900">
                    <strong>💡 Совет:</strong> Измени &#34;AboutPage&#34; и
                    &#34;О нас&#34; на название своей страницы
                  </p>
                </div>
              </div>
            </div>

            {/* Шаг 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Добавь страницу в навигацию
                </h3>
                <p className="text-gray-700 mb-4">
                  Чтобы кнопка появилась в шапке, добавь её в массив{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    navLinks
                  </code>
                </p>

                <ComponentPreview
                  title="Добавление в navLinks"
                  description="Найди этот массив в файле с навигацией (Header.tsx или подобный)"
                  code={addNewLinkExample}
                >
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">ДО:</p>
                      <div className="flex gap-2 p-4 bg-gray-100 rounded">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">
                          Главная
                        </button>
                        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
                          О нас
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">ПОСЛЕ:</p>
                      <div className="flex gap-2 p-4 bg-gray-100 rounded">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">
                          Главная
                        </button>
                        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
                          О нас
                        </button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded">
                          Портфолио ✨
                        </button>
                      </div>
                    </div>
                  </div>
                </ComponentPreview>
              </div>
            </div>

            {/* Шаг 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Проверь результат
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <p className="text-gray-700">Сохрани все файлы (Ctrl+S)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <p className="text-gray-700">
                      Открой браузер →{" "}
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        localhost:3000/about
                      </code>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <p className="text-gray-700">
                      Проверь, что кнопка появилась в шапке
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <p className="text-gray-700">
                      Кликни на кнопку — должна открыться твоя страница
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Примеры готовых страниц */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Примеры готовых страниц
          </h2>
          <p className="text-gray-700 mb-8">
            Копируй эти шаблоны для быстрого старта
          </p>

          <div className="space-y-8">
            {/* Пример 1: Контакты */}
            <ComponentPreview
              title='Страница "Контакты"'
              description="app/contact/page.tsx — простая страница с контактной информацией"
              code={contactPageExample}
            >
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                <h2 className="text-4xl font-bold mb-6">Контакты</h2>
                <div className="space-y-3 text-lg">
                  <p className="flex items-center gap-3">
                    <span>📧</span>
                    <span>Email: info@site.ru</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span>📱</span>
                    <span>Телефон: +7 999 123-45-67</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span>📍</span>
                    <span>Адрес: Москва, ул. Ленина 1</span>
                  </p>
                </div>
              </div>
            </ComponentPreview>

            {/* Пример 2: Услуги */}
            <ComponentPreview
              title='Страница "Услуги"'
              description="app/services/page.tsx — страница с карточками услуг"
              code={servicesPageExample}
            >
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-3">
                  Наши услуги
                </h2>
                <p className="text-gray-600 text-center mb-8">
                  Мы предлагаем лучшие решения для вашего бизнеса
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <h3 className="font-bold mb-2">Разработка сайтов</h3>
                    <p className="text-sm text-gray-600">
                      Создаём современные сайты
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <h3 className="font-bold mb-2">Дизайн</h3>
                    <p className="text-sm text-gray-600">
                      Уникальный дизайн для вас
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <h3 className="font-bold mb-2">SEO продвижение</h3>
                    <p className="text-sm text-gray-600">
                      Выводим в топ поисковых систем
                    </p>
                  </div>
                </div>
              </div>
            </ComponentPreview>
          </div>
        </div>

        {/* Частые ошибки */}
        <div className="mb-12 bg-red-50 border-l-4 border-red-500 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-6">
            ⚠️ Частые ошибки
          </h2>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-red-900 mb-2">
                ❌ Файл называется не &#34;page.tsx&#34;
              </p>
              <p className="text-gray-700 text-sm">
                Должно быть ТОЧНО{" "}
                <code className="bg-gray-100 px-1 rounded">page.tsx</code>, не
                &#34;about.tsx&#34; или &#34;index.tsx&#34;
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-red-900 mb-2">
                ❌ Папка с русскими буквами или пробелами
              </p>
              <p className="text-gray-700 text-sm">
                Используй только английские: &#34;about&#34;, а не
                &#34;о-нас&#34;. Вместо пробелов — дефис: &#34;my-services&#34;
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-red-900 mb-2">
                ❌ Забыл добавить в navLinks
              </p>
              <p className="text-gray-700 text-sm">
                Страница создана, но в меню не появилась → проверь массив
                navLinks, добавь новый объект
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold text-red-900 mb-2">
                ❌ Неправильный href
              </p>
              <p className="text-gray-700 text-sm">
                Если папка называется &#34;about&#34;, то href должен быть
                &#34;/about&#34;, а не &#34;/about.tsx&#34; или
                &#34;/about/&#34;
              </p>
            </div>
          </div>
        </div>

        {/* Как работает href */}
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            💡 Как работает href?
          </h2>
          <p className="text-purple-800 mb-6">
            Название папки = адрес в браузере = значение href
          </p>

          <div className="space-y-3 text-purple-800">
            <div className="bg-white p-3 rounded flex items-center justify-between">
              <code className="font-mono">href=&#34;/home&#34;</code>
              <span>→</span>
              <span>app/page.tsx</span>
              <span>→</span>
              <span className="font-semibold">Главная страница</span>
            </div>

            <div className="bg-white p-3 rounded flex items-center justify-between">
              <code className="font-mono">href=&#34;/about&#34;</code>
              <span>→</span>
              <span>app/about/page.tsx</span>
              <span>→</span>
              <span className="font-semibold">Страница О нас</span>
            </div>

            <div className="bg-white p-3 rounded flex items-center justify-between">
              <code className="font-mono">href=&#34;/services&#34;</code>
              <span>→</span>
              <span>app/services/page.tsx</span>
              <span>→</span>
              <span className="font-semibold">Страница Услуги</span>
            </div>

            <div className="bg-white p-3 rounded flex items-center justify-between">
              <code className="font-mono">href=&#34;/contact&#34;</code>
              <span>→</span>
              <span>app/contact/page.tsx</span>
              <span>→</span>
              <span className="font-semibold">Страница Контакты</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
