import Link from 'next/link';
import { Code2, Zap, Heart } from 'lucide-react';

export default function Home() {
  const featuredComponents = [
    { name: 'Button', path: '/components/button', icon: '🔘', description: 'Универсальная кнопка' },
    { name: 'Card', path: '/components/card', icon: '🎴', description: 'Карточка контента' },
    { name: 'Hero', path: '/components/hero', icon: '🎯', description: 'Главная секция' },
    { name: 'Counter', path: '/components/counter', icon: '🔢', description: 'Интерактивный счетчик' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero секция */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
              <Code2 className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Code Bricks
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Конструктор компонентов для школьников
          </p>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Готовые React компоненты, которые можно копировать и настраивать под свой проект. 
            Создавай крутые сайты, как из кубиков Lego!
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/components/button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Смотреть компоненты
            </Link>
            <Link 
              href="/about"
              className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 border-2 border-gray-200"
            >
              О проекте
            </Link>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Быстрый старт
              </h3>
              <p className="text-gray-600">
                Копируй готовый код и сразу используй в своем проекте. Не нужно писать с нуля!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Легко настроить
              </h3>
              <p className="text-gray-600">
                Каждый компонент с комментариями - измени цвета, размеры и стили под свой дизайн!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Просто и понятно
              </h3>
              <p className="text-gray-600">
                Понятные примеры, простые объяснения. Создано специально для обучения!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные компоненты */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Популярные компоненты
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredComponents.map((component) => (
              <Link
                key={component.path}
                href={component.path}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 transition-all group"
              >
                <div className="text-4xl mb-3">{component.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {component.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {component.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/components/button"
              className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              Смотреть все компоненты →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}