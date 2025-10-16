"use client";

export default function FontsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Как подключить шрифты
          </h1>
          <p className="text-xl text-gray-600">
            Пошаговая инструкция с примерами
          </p>
        </div>

        {/* Шаг 1 */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-white shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Выбери шрифт
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 text-lg">
              Зайди на{" "}
              <a 
                href="https://fonts.google.com" 
                target="_blank"
                className="text-blue-600 hover:underline font-semibold"
              >
                fonts.google.com
              </a>
              {" "}и посмотри, какой шрифт тебе нравится
            </p>

            <p className="text-gray-700 text-lg">
              <strong>Просто запомни название!</strong> Например: &#34;Inter&#34;
            </p>
          </div>
        </div>

        {/* Шаг 2 */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-white shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Подключи ко всему сайту
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="text-amber-900">
                <strong>📁 Открой файл:</strong> <code className="bg-white px-2 py-1 rounded">app/layout.tsx</code>
              </p>
            </div>

            <div>
              <p className="text-gray-700 text-lg mb-3">
                <strong>Шаг 2.1:</strong> В самом начале файла добавь:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic']
});`}
              </pre>
              <p className="text-gray-600 text-sm mt-2">
                👆 Замени &#34;Inter&#34; на название твоего шрифта
              </p>
            </div>

            <div>
              <p className="text-gray-700 text-lg mb-3">
                <strong>Шаг 2.2:</strong> Найди строку с <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;body&gt;</code> и добавь туда класс:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<body className={inter.className}>
  {children}
</body>`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-green-900">
                <strong>✅ Готово!</strong> Теперь весь сайт использует этот шрифт
              </p>
            </div>
          </div>
        </div>

        {/* Шаг 3 */}
        <div className="mb-8 rounded-2xl overflow-hidden bg-white shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Подключи к кнопке
            </h2>
          </div>

          <p className="text-gray-600 mb-4">
            Если хочешь отдельный шрифт только для кнопок:
          </p>

          <div className="space-y-6">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="text-amber-900">
                <strong>📁 Открой файл:</strong> <code className="bg-white px-2 py-1 rounded">components/ui/Button.tsx</code>
              </p>
            </div>

            <div>
              <p className="text-gray-700 text-lg mb-3">
                <strong>Шаг 3.1:</strong> В самом начале файла добавь:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'] 
});`}
              </pre>
              <p className="text-gray-600 text-sm mt-2">
                👆 Здесь можешь выбрать другой шрифт, например Montserrat
              </p>
            </div>

            <div>
              <p className="text-gray-700 text-lg mb-3">
                <strong>Шаг 3.2:</strong> В className кнопки добавь:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`className={\`\${baseStyles} \${widthStyle} \${colors[variant]} \${sizes[size]} \${montserrat.className}\`}`}
              </pre>
              <p className="text-gray-600 text-sm mt-2">
                👆 Просто добавь <code className="bg-gray-100 px-1 rounded">{`\${montserrat.className}`}</code> в конец строки className
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-green-900">
                <strong>✅ Готово!</strong> Теперь все кнопки используют другой шрифт
              </p>
            </div>
          </div>
        </div>

        {/* Готовые примеры */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Готовые коды для популярных шрифтов
          </h2>

          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold mb-2">Inter</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
{`import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin', 'cyrillic'] });`}
              </pre>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold mb-2">Roboto</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
{`import { Roboto } from 'next/font/google';
const roboto = Roboto({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700']
});`}
              </pre>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold mb-2">Montserrat</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
{`import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });`}
              </pre>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold mb-2">Open Sans</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
{`import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] });`}
              </pre>
              <p className="text-gray-600 text-sm mt-2">
                ⚠️ Обрати внимание: тут подчёркивание Open_Sans, а не пробел!
              </p>
            </div>
          </div>
        </div>

        {/* Настройка параметров шрифтов */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Параметры шрифтов
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Толщина шрифта (weight)</h3>
              <p className="text-gray-600 mb-4">
                Если хочешь использовать жирный или тонкий текст, укажи weight:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        {`import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700']  // 400 = обычный, 700 = жирный
});

// Или все варианты:
const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800']
});`}
              </pre>
              <p className="text-gray-600 text-sm mt-3">
                💡 <strong>Совет:</strong> Не используй все веса — выбери 2-3, чтобы сайт быстрее грузился
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Курсив (italic)</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        {`const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  style: ['normal', 'italic']  // Добавит курсив
});`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Display режим</h3>
              <p className="text-gray-600 mb-4">
                Как показывать шрифт до загрузки:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        {`const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap'  // Покажет системный шрифт, пока грузится
});`}
              </pre>
            </div>
          </div>
        </div>

        {/* Использование в компонентах */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как использовать в компонентах
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Добавить в любой компонент</h3>
              <p className="text-gray-600 mb-4">
                Если хочешь использовать шрифт только в одном компоненте:
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        {`// components/Hero.tsx
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'] 
});

export default function Hero() {
  return (
    <div className={montserrat.className}>
      <h1>Этот текст с Montserrat</h1>
    </div>
  );
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Использовать только для заголовков</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        {`import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin', 'cyrillic'] 
});

export default function Page() {
  return (
    <div>
      <h1 className={playfair.className}>
        Красивый заголовок
      </h1>
      <p>Обычный текст с шрифтом из layout.tsx</p>
    </div>
  );
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">3. Комбинировать несколько шрифтов</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        {`import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });
const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export default function Card() {
  return (
    <div>
      <h2 className={montserrat.className}>Заголовок карточки</h2>
      <p className={inter.className}>Описание карточки</p>
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Классы Tailwind для шрифтов */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Классы Tailwind для работы со шрифтами
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Размер текста</h3>
              <div className="space-y-2">
                <p className="text-xs">text-xs — Очень маленький (12px)</p>
                <p className="text-sm">text-sm — Маленький (14px)</p>
                <p className="text-base">text-base — Обычный (16px)</p>
                <p className="text-lg">text-lg — Средний (18px)</p>
                <p className="text-xl">text-xl — Большой (20px)</p>
                <p className="text-2xl">text-2xl — Очень большой (24px)</p>
                <p className="text-4xl">text-4xl — Огромный (36px)</p>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-4">
        {`<h1 className="text-4xl">Большой заголовок</h1>
<p className="text-base">Обычный текст</p>
<span className="text-sm">Маленький текст</span>`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Толщина текста</h3>
              <div className="space-y-2">
                <p className="font-light">font-light — Тонкий</p>
                <p className="font-normal">font-normal — Обычный</p>
                <p className="font-medium">font-medium — Средний</p>
                <p className="font-semibold">font-semibold — Полужирный</p>
                <p className="font-bold">font-bold — Жирный</p>
                <p className="font-extrabold">font-extrabold — Очень жирный</p>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-4">
        {`<h1 className="font-bold">Жирный заголовок</h1>
<p className="font-normal">Обычный текст</p>`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Межстрочный интервал</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="leading-tight">
                    leading-tight — Узкий интервал. Текст располагается плотно. Подходит для заголовков.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="leading-normal">
                    leading-normal — Обычный интервал. Стандартное расстояние между строками.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="leading-relaxed">
                    leading-relaxed — Свободный интервал. Текст читается легче. Хорошо для параграфов.
                  </p>
                </div>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-4">
        {`<p className="leading-tight">Плотный текст</p>
<p className="leading-relaxed">Свободный текст</p>`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Выравнивание</h3>
              <div className="space-y-3 border border-gray-200 rounded-lg p-4">
                <p className="text-left">text-left — По левому краю</p>
                <p className="text-center">text-center — По центру</p>
                <p className="text-right">text-right — По правому краю</p>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-4">
        {`<h1 className="text-center">Заголовок по центру</h1>
<p className="text-left">Текст слева</p>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Комбинации */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Примеры комбинаций
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Заголовок Hero секции
              </h3>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                className=&quot;text-3xl font-bold text-gray-900&quot;
              </code>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <p className="text-base font-normal text-gray-600 leading-relaxed">
                Обычный параграф текста с хорошей читаемостью. Используется для основного контента страницы.
              </p>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded mt-2 inline-block">
                className=&quot;text-base font-normal text-gray-600 leading-relaxed&quot;
              </code>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                Метка или категория
              </p>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded mt-2 inline-block">
                className=&quot;text-sm font-medium text-blue-600 uppercase tracking-wide&quot;
              </code>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
