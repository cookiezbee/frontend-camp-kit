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
        <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm p-8">
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
        <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm p-8">
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
        <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm p-8">
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
        <div className="bg-white rounded-2xl shadow-lg p-8">
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

        {/* Важное */}
        <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-900 mb-3">
            ⚠️ Важно помнить!
          </h3>
          <ul className="space-y-2 text-red-800">
            <li>• Всегда пиши <code className="bg-white px-1 rounded">&#39;cyrillic&#39;</code> — без этого русские буквы не работают</li>
            <li>• Если в названии шрифта пробел (Open Sans) — замени на подчёркивание (Open_Sans)</li>
            <li>• Не используй больше 2-3 шрифтов — сайт будет долго грузиться</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
