import { Code2, Target, Lightbulb, Users, Rocket, Book } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
              <Code2 className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            О проекте Code Bricks
          </h1>
          <p className="text-xl text-gray-600">
            Библиотека готовых компонентов для быстрого старта в веб-разработке
          </p>
        </div>

        {/* Что это? */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Что такое Code Bricks?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Code Bricks — это коллекция готовых React компонентов для Next.js, 
                которые можно просто скопировать и использовать в своих проектах. 
              </p>
            </div>
          </div>
        </section>

        {/* Как использовать? */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Book className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Как использовать?
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Выбери компонент</h3>
                <p className="text-gray-600">Открой нужный компонент из меню</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Скопируй код</h3>
                <p className="text-gray-600">Нажми кнопку &#34;Копировать&#34; под примером</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Вставь в свой проект</h3>
                <p className="text-gray-600">Создай файл компонента и вставь код</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Настрой под себя</h3>
                <p className="text-gray-600">Измени цвета, размеры и стили</p>
              </div>
            </div>
          </div>
        </section>

        {/* Технологии */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Rocket className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Технологии
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">⚛️</span>
              <div>
                <p className="font-semibold text-gray-900">React 19</p>
                <p className="text-sm text-gray-600">Библиотека для UI</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">▲</span>
              <div>
                <p className="font-semibold text-gray-900">Next.js 15</p>
                <p className="text-sm text-gray-600">React фреймворк</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">🔷</span>
              <div>
                <p className="font-semibold text-gray-900">TypeScript</p>
                <p className="text-sm text-gray-600">Типизация кода</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">🎨</span>
              <div>
                <p className="font-semibold text-gray-900">Tailwind CSS v4</p>
                <p className="text-sm text-gray-600">Стилизация</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Готов начать?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Выбери компонент и начни создавать свой проект прямо сейчас!
          </p>
          <a 
            href="/components/button"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            Смотреть компоненты
          </a>
        </div>

      </div>
    </div>
  );
}
