"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function AIHelperPage() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const systemPrompt = `Ты — опытный веб-разработчик и наставник, который помогает начинающим разработчикам создавать их ОДНОСТРАНИЧНЫЙ веб-проект на Next.js, React и Tailwind CSS.

ВАЖНО:
- Объясняй простым языком, избегай сложных терминов
- Давай короткие, понятные ответы с примерами кода
- Всегда показывай ВЕСЬ код файла, а не фрагменты
- Используй только компоненты из их проекта (Button, Input, Card, Modal, Badge и т.д.)
- Напоминай про правильную структуру проекта
- Поощряй и поддерживай, даже если вопрос простой

СТЕК ТЕХНОЛОГИЙ:
- Next.js 14+ (App Router)
- React
- TypeScript
- Tailwind CSS

СТРУКТУРА ОДНОСТРАНИЧНОГО САЙТА:
- app/page.tsx — ОДНА главная страница со всеми секциями
- components/ui/ — базовые компоненты (Button, Input, Modal, Card, Badge)
- components/sections/ — секции страницы (Hero, Features, Contact, Footer)

Весь сайт размещается на ОДНОЙ странице app/page.tsx. Навигация работает через прокрутку к секциям.

Помогай создавать чистый, читаемый код и объясняй, почему делается именно так.`;

  const prompts = [
    {
      id: "component",
      title: "Создать новый компонент",
      description: "Попроси создать компонент для твоего сайта",
      prompt: `${systemPrompt}

ЗАДАЧА: Помоги мне создать компонент [название компонента].

Что нужно:
- [Опиши, что должен делать компонент]
- [Какие props он должен принимать]
- [Как он должен выглядеть]

Создай полный код компонента с использованием Tailwind CSS и TypeScript.`,
    },
    {
      id: "section",
      title: "Создать секцию",
      description: "Попроси создать секцию для твоей страницы",
      prompt: `${systemPrompt}

ЗАДАЧА: Помоги мне создать секцию [название секции] для одностраничного сайта.

Что должно быть в секции:
- [Опиши разделы секции]
- [Какие компоненты использовать]
- [Какой контент показывать]

Создай полный код секции используя компоненты из components/ui/.`,
    },
    {
      id: "fix",
      title: "Исправить ошибку",
      description: "Покажи ошибку, получи решение",
      prompt: `${systemPrompt}

ПРОБЛЕМА: У меня не работает [опиши что не работает].

Ошибка:
[Вставь текст ошибки из консоли]

Мой код:
\`\`\`tsx
[Вставь свой код]
\`\`\`

Помоги исправить эту ошибку. Объясни, в чем проблема и дай правильный код.`,
    },
    {
      id: "feature",
      title: "Добавить функционал",
      description: "Добавь новую возможность в свой проект",
      prompt: `${systemPrompt}

ЗАДАЧА: Хочу добавить функционал: [опиши что хочешь добавить].

Текущий код:
\`\`\`tsx
[Вставь код компонента, куда хочешь добавить функционал]
\`\`\`

Помоги добавить этот функционал. Покажи весь обновленный код компонента.`,
    },
    {
      id: "styling",
      title: "Улучшить дизайн",
      description: "Сделай компонент красивее",
      prompt: `${systemPrompt}

ЗАДАЧА: Хочу улучшить дизайн [название компонента].

Текущий код:
\`\`\`tsx
[Вставь код компонента]
\`\`\`

Что хочу изменить:
- [Опиши желаемые изменения]

Помоги улучшить дизайн используя Tailwind CSS. Покажи обновленный код.`,
    },
    {
      id: "explain",
      title: "Объяснить код",
      description: "Разберись, как работает код",
      prompt: `${systemPrompt}

ВОПРОС: Не понимаю, как работает этот код:

\`\`\`tsx
[Вставь непонятный код]
\`\`\`

Объясни простыми словами:
- Что делает этот код?
- Как он работает?
- Зачем нужна каждая часть?`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">AI Помощник</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовые промпты для DeepSeek, которые помогут тебе создать твой
            проект
          </p>
        </div>

        {/* Что это? */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как это работает?
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>DeepSeek</strong> — это нейросеть, которая может помочь тебе
            написать код, исправить ошибки или объяснить сложные моменты.
          </p>
          <p className="text-gray-600 mb-6">
            Чтобы она работала эффективно, нужно дать ей{" "}
            <strong>контекст</strong> — объяснить, кто ты, над чем работаешь и
            какие инструменты используешь.
          </p>

          <div className="bg-blue-50 rounded border-l-4 border-blue-500 p-4">
            <p className="font-semibold text-blue-900 mb-2">
              ⚡ Быстрый старт:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-blue-800 text-sm">
              <li>Выбери нужный промпт ниже</li>
              <li>Скопируй его кнопкой &#34;Копировать&#34;</li>
              <li>
                Вставь в{" "}
                <a
                  href="https://chat.deepseek.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  DeepSeek
                </a>
              </li>
              <li>Заполни [квадратные скобки] своими данными</li>
              <li>Получи готовое решение!</li>
            </ol>
          </div>
        </section>

        {/* Базовый промпт */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Базовый промпт (обязательно!)
          </h2>
          <p className="text-gray-600 mb-6">
            Начни ЛЮБОЙ разговор с DeepSeek с этого промпта. Он задаёт контекст
            твоего проекта.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
            {systemPrompt}
          </pre>

          <Button
            variant="primary"
            size="md"
            onClick={() => copyToClipboard(systemPrompt, "system")}
          >
            {copiedPrompt === "system" ? "✓ Скопировано!" : "📋 Копировать"}
          </Button>

          <div className="mt-6 bg-blue-50 rounded border-l-4 border-blue-500 p-4">
            <p className="text-blue-900">
              <strong>💡 Совет:</strong> Скопируй этот промпт и начни с него
              каждый новый чат с DeepSeek. После него задавай свой вопрос!
            </p>
          </div>
        </section>

        {/* Готовые промпты */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Готовые промпты для разных задач
          </h2>

          <div className="space-y-4">
            {prompts.map((promptItem) => (
              <div
                key={promptItem.id}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {promptItem.title}
                </h3>
                <p className="text-gray-600 mb-4">{promptItem.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(promptItem.prompt, promptItem.id)
                  }
                >
                  {copiedPrompt === promptItem.id
                    ? "✓ Скопировано!"
                    : "📋 Копировать промпт"}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Советы */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Советы по работе с DeepSeek
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                <span className="text-green-500">✓</span>
                Делай так:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">•</span>
                  <span>Будь конкретным в описании задачи</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">•</span>
                  <span>Показывай весь код файла, а не фрагменты</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 flex-shrink-0">•</span>
                  <span>Проси объяснить непонятные места</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
                <span className="text-red-500">✗</span>
                Не делай так:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>Не копируй код не понимая его</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>Не забывай начинать с базового промпта</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 flex-shrink-0">•</span>
                  <span>Не бойся переспросить, если непонятно</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
