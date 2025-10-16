export default function ResourcesPage() {
  const categories = [
    {
      title: "Документация",
      icon: "",
      color: "blue",
      resources: [
        {
          name: "MDN Web Docs",
          description: "Полная документация по HTML, CSS и JavaScript",
          url: "https://developer.mozilla.org/ru/",
          level: "Все уровни"
        },
        {
          name: "React Documentation",
          description: "Официальная документация React на русском",
          url: "https://ru.react.dev/",
          level: "Средний"
        },
        {
          name: "Next.js Documentation",
          description: "Документация фреймворка Next.js",
          url: "https://nextjs.org/docs",
          level: "Средний"
        },
        {
          name: "Tailwind CSS",
          description: "Полная документация по Tailwind",
          url: "https://tailwindcss.com/docs",
          level: "Все уровни"
        },
        {
          name: "TypeScript Handbook",
          description: "Руководство по TypeScript",
          url: "https://www.typescriptlang.org/docs/",
          level: "Продвинутый"
        }
      ]
    },
    {
      title: "Дизайн и UI",
      icon: "",
      color: "purple",
      resources: [
        {
          name: "Figma",
          description: "Бесплатный инструмент для дизайна интерфейсов",
          url: "https://www.figma.com/",
          level: "Все уровни"
        },
        {
          name: "Dribbble",
          description: "Вдохновение от лучших дизайнеров мира",
          url: "https://dribbble.com/",
          level: "Все уровни"
        },
        {
          name: "Behance",
          description: "Портфолио дизайнеров и креативщиков",
          url: "https://www.behance.net/",
          level: "Все уровни"
        },
        {
          name: "Awwwards",
          description: "Лучшие веб-дизайны со всего мира",
          url: "https://www.awwwards.com/",
          level: "Продвинутый"
        },
        {
          name: "UI Design Daily",
          description: "Бесплатные UI элементы каждый день",
          url: "https://www.uidesigndaily.com/",
          level: "Все уровни"
        }
      ]
    },
    {
      title: "Цвета",
      icon: "",
      color: "pink",
      resources: [
        {
          name: "Coolors",
          description: "Генератор цветовых палитр",
          url: "https://coolors.co/",
          level: "Все уровни"
        },
        {
          name: "Color Hunt",
          description: "Красивые готовые палитры",
          url: "https://colorhunt.co/",
          level: "Все уровни"
        },
        {
          name: "Adobe Color",
          description: "Профессиональный инструмент для работы с цветом",
          url: "https://color.adobe.com/",
          level: "Средний"
        },
        {
          name: "Colormind",
          description: "AI-генератор цветовых схем",
          url: "http://colormind.io/",
          level: "Все уровни"
        },
        {
          name: "Tailwind Colors",
          description: "Вся палитра Tailwind",
          url: "https://tailwindcss.com/docs/customizing-colors",
          level: "Все уровни"
        },
      ]
    },
    {
      title: "Шрифты",
      icon: "",
      color: "green",
      resources: [
        {
          name: "Google Fonts",
          description: "Бесплатные шрифты от Google",
          url: "https://fonts.google.com/",
          level: "Все уровни"
        },
        {
          name: "Font Pair",
          description: "Идеальные пары шрифтов",
          url: "https://www.fontpair.co/",
          level: "Все уровни"
        },
        {
          name: "Font Squirrel",
          description: "Коммерческие бесплатные шрифты",
          url: "https://www.fontsquirrel.com/",
          level: "Все уровни"
        }
      ]
    },
    {
      title: "Изображения и иконки",
      icon: "",
      color: "orange",
      resources: [
        {
          name: "Freepik",
          description: "Бесплатные фотографии высокого качества",
          url: "https://ru.freepik.com/photos",
          level: "Все уровни"
        },
        {
          name: "Lucide Icons",
          description: "Красивые иконки для React",
          url: "https://lucide.dev/",
          level: "Все уровни"
        },
        {
          name: "Heroicons",
          description: "SVG иконки от создателей Tailwind",
          url: "https://heroicons.com/",
          level: "Все уровни"
        },
        {
          name: "Iconify",
          description: "150,000+ иконок в одном месте",
          url: "https://icon-sets.iconify.design/",
          level: "Все уровни"
        },
        {
          name: "unDraw",
          description: "Бесплатные SVG иллюстрации",
          url: "https://undraw.co/",
          level: "Все уровни"
        }
      ]
    },
    {
      title: "Инструменты разработки",
      icon: "",
      color: "red",
      resources: [
        {
          name: "VS Code",
          description: "Лучший редактор кода",
          url: "https://code.visualstudio.com/",
          level: "Все уровни"
        },
        {
          name: "GitHub",
          description: "Хостинг кода и совместная работа",
          url: "https://github.com/",
          level: "Все уровни"
        },
        {
          name: "Vercel",
          description: "Деплой Next.js за минуту",
          url: "https://vercel.com/",
          level: "Средний"
        },
        {
          name: "npm",
          description: "Менеджер пакетов для JavaScript",
          url: "https://www.npmjs.com/",
          level: "Средний"
        }
      ]
    },
    {
      title: "Интерактивные игры и тренажеры",
      icon: "",
      color: "lime",
      resources: [
        {
          name: "Flexbox Froggy",
          description: "Игра для изучения Flexbox — помоги лягушкам добраться до листьев",
          url: "https://flexboxfroggy.com/#ru",
          level: "Начальный"
        },
        {
          name: "Grid Garden",
          description: "Игра для изучения CSS Grid — выращивай морковки",
          url: "https://cssgridgarden.com/#ru",
          level: "Начальный"
        },
        {
          name: "CSS Diner",
          description: "Изучай CSS селекторы через игру про ресторан",
          url: "https://flukeout.github.io/",
          level: "Начальный"
        },
        {
          name: "CSS Tricks: Flexbox Guide",
          description: "Полное визуальное руководство по Flexbox",
          url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
          level: "Все уровни"
        },
        {
          name: "CSS Tricks: Grid Guide",
          description: "Полное визуальное руководство по CSS Grid",
          url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
          level: "Все уровни"
        },
        {
          name: "Flexbox Defense",
          description: "Tower Defense игра на Flexbox — защищай башню",
          url: "http://www.flexboxdefense.com/",
          level: "Средний"
        },
        {
          name: "Grid by Example",
          description: "Примеры и паттерны CSS Grid",
          url: "https://gridbyexample.com/",
          level: "Средний"
        },
        {
          name: "Typing Club",
          description: "Тренажер слепой печати",
          url: "https://www.typingclub.com/",
          level: "Все уровни"
        },
        {
          name: "Learn Git Branching",
          description: "Интерактивное изучение Git",
          url: "https://learngitbranching.js.org/?locale=ru_RU",
          level: "Средний"
        },
        {
          name: "SQL Murder Mystery",
          description: "Детективная игра для изучения SQL",
          url: "https://mystery.knightlab.com/",
          level: "Средний"
        }
      ]
    },
    {
      title: "Генераторы и утилиты",
      icon: "",
      color: "yellow",
      resources: [
        {
          name: "CSS Gradient",
          description: "Генератор градиентов",
          url: "https://cssgradient.io/",
          level: "Все уровни"
        },
        {
          name: "Get Waves",
          description: "Генератор SVG волн",
          url: "https://getwaves.io/",
          level: "Все уровни"
        },
        {
          name: "Haikei",
          description: "Генератор SVG фонов",
          url: "https://haikei.app/",
          level: "Все уровни"
        },
        {
          name: "TinyPNG",
          description: "Сжатие изображений",
          url: "https://tinypng.com/",
          level: "Все уровни"
        },
        {
          name: "Can I Use",
          description: "Поддержка CSS/HTML в браузерах",
          url: "https://caniuse.com/",
          level: "Средний"
        }
      ]
    }
  ];

  const colorMap: { [key: string]: { bg: string; border: string; text: string; hover: string } } = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600", hover: "hover:bg-blue-100" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600", hover: "hover:bg-purple-100" },
    pink: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-600", hover: "hover:bg-pink-100" },
    green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-600", hover: "hover:bg-green-100" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-600", hover: "hover:bg-orange-100" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-600", hover: "hover:bg-indigo-100" },
    red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-600", hover: "hover:bg-red-100" },
    yellow: { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-600", hover: "hover:bg-yellow-100" },
    teal: { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-600", hover: "hover:bg-teal-100" },
    cyan: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-600", hover: "hover:bg-cyan-100" },
    lime: { bg: "bg-lime-50", border: "border-lime-200", text: "text-lime-600", hover: "hover:bg-lime-100" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Полезные материалы
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подборка лучших ресурсов для изучения веб-разработки. Все ссылки проверены и актуальны!
          </p>
        </div>

        {categories.map((category, index) => {
          const colors = colorMap[category.color];
          const isLast = index === categories.length - 1;
          return (
            <div key={category.title} className={isLast ? "mb-0" : "mb-12"}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 ${colors.hover} transition-all duration-200 hover:shadow-lg hover:scale-105`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={`text-lg font-bold ${colors.text}`}>
                        {resource.name}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-white rounded-full text-gray-600 font-medium">
                        {resource.level}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <span>🔗</span>
                      <span className="truncate">{resource.url.replace('https://', '').replace('http://', '')}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
