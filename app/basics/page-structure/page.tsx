"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function PageStructurePage() {
  const centerSectionCode = `<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
  <div className="text-center">
    <h1 className="text-6xl font-bold text-gray-900 mb-6">
      Заголовок
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Подзаголовок
    </p>
    <Button variant="primary" size="lg">
      Кнопка
    </Button>
  </div>
</section>`;

  const threeCardsCode = `<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Заголовок секции
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        title="Карточка 1"
        description="Описание"
        buttonText="Подробнее"
      />
      <Card
        title="Карточка 2"
        description="Описание"
        buttonText="Подробнее"
      />
      <Card
        title="Карточка 3"
        description="Описание"
        buttonText="Подробнее"
      />
    </div>
  </div>
</section>`;

  const twoCardsCode = `<section className="py-20 px-4 bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Заголовок
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card
        title="Карточка 1"
        description="Описание"
        buttonText="Подробнее"
      />
      <Card
        title="Карточка 2"
        description="Описание"
        buttonText="Подробнее"
      />
    </div>
  </div>
</section>`;

  const twoColumnsCode = `<section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Левая колонка */}
      <div>
        <h2 className="text-4xl font-bold mb-6">
          Заголовок
        </h2>
        <p className="text-gray-600 mb-6">
          Текст описания. Можно написать несколько предложений.
        </p>
        <Button variant="primary">
          Кнопка
        </Button>
      </div>
      
      {/* Правая колонка */}
      <div>
        <img 
          src="/images/photo.jpg" 
          alt="Описание" 
          className="rounded-2xl shadow-lg w-full"
        />
      </div>
    </div>
  </div>
</section>`;

  const fullPageCode = `import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div>
      {/* Секция 1 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Привет!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Это моя первая страница
          </p>
          <Button variant="primary" size="lg">
            Начать
          </Button>
        </div>
      </section>

      {/* Секция 2 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Наши услуги
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Услуга 1" description="Описание" buttonText="Подробнее" />
            <Card title="Услуга 2" description="Описание" buttonText="Подробнее" />
            <Card title="Услуга 3" description="Описание" buttonText="Подробнее" />
          </div>
        </div>
      </section>
    </div>
  );
}`;

  const backgroundImageCode = `<section 
  className="min-h-screen flex items-center justify-center px-4 relative"
  style={{
    backgroundImage: 'url(/images/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Затемнение */}
  <div className="absolute inset-0 bg-black/50"></div>
  
  {/* Контент поверх затемнения */}
  <div className="relative text-center text-white">
    <h1 className="text-6xl font-bold mb-6">
      Заголовок на фоне
    </h1>
    <p className="text-xl mb-8">
      Текст виден благодаря затемнению
    </p>
    <Button variant="primary" size="lg">
      Кнопка
    </Button>
  </div>
</section>`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Как собрать страницу
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готовые шаблоны секций — просто копируй и меняй контент
          </p>
        </div>

        {/* Что такое секция */}
        <div className="mb-12 p-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Что такое секция?
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Секция</strong> — это один большой блок на странице.
            Например:
          </p>
          <div className="bg-white p-6 rounded-lg">
            <div className="space-y-3">
              <div className="border-2 border-blue-300 p-4 rounded bg-blue-50">
                <p className="font-bold">
                  Секция 1: Заголовок + Кнопка по центру
                </p>
              </div>
              <div className="border-2 border-green-300 p-4 rounded bg-green-50">
                <p className="font-bold">Секция 2: Три карточки в ряд</p>
              </div>
              <div className="border-2 border-purple-300 p-4 rounded bg-purple-50">
                <p className="font-bold">
                  Секция 3: Текст слева, картинка справа
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Страница = несколько секций друг под другом. Каждая секция
            начинается с{" "}
            <code className="bg-white px-2 py-1 rounded">&lt;section&gt;</code>
          </p>
        </div>

        {/* Базовая структура */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Базовая структура секции
          </h2>
          <p className="text-gray-700 mb-4">
            Любая секция состоит из трёх частей:
          </p>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg text-sm mb-4">
            <pre>{`<section className="py-20 px-4 bg-white">
  {/* 1. Контейнер для ширины */}
  <div className="max-w-6xl mx-auto">
    
    {/* 2. Заголовок секции */}
    <h2 className="text-4xl font-bold text-center mb-12">
      Заголовок
    </h2>
    
    {/* 3. Контент секции (карточки, текст, кнопки...) */}
    <div>
      Твой контент здесь
    </div>
    
  </div>
</section>`}</pre>
          </div>
          <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-500">
            <p className="text-amber-900">
              <strong>💡 Важно:</strong> Всегда используй{" "}
              <code className="bg-white px-1 rounded">max-w-6xl mx-auto</code> —
              это центрирует контент
            </p>
          </div>
        </div>

        {/* Шаблон 1 */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Готовые шаблоны секций
          </h2>
          <ComponentPreview
            title="Шаблон 1: Заголовок + Кнопка по центру"
            description="Идеально для первого экрана (Hero). Всё по центру экрана"
            code={centerSectionCode}
          >
            <div className="w-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Заголовок</h2>
                <p className="text-gray-600 mb-6">Подзаголовок</p>
                <Button variant="primary" size="lg">
                  Кнопка
                </Button>
              </div>
            </div>
          </ComponentPreview>
        </div>

        {/* Шаблон 2 */}
        <div className="mb-8">
          <ComponentPreview
            title="Шаблон 2: Три карточки в ряд"
            description="Для товаров, услуг, портфолио. На мобильных будет одна под другой"
            code={threeCardsCode}
          >
            <div className="w-full bg-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-8">
                Заголовок секции
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <Card
                  title="Карточка 1"
                  description="Описание"
                  buttonText="Подробнее"
                />
                <Card
                  title="Карточка 2"
                  description="Описание"
                  buttonText="Подробнее"
                />
                <Card
                  title="Карточка 3"
                  description="Описание"
                  buttonText="Подробнее"
                />
              </div>
            </div>
          </ComponentPreview>
        </div>

        {/* Шаблон 3 */}
        <div className="mb-8">
          <ComponentPreview
            title="Шаблон 3: Две карточки в ряд"
            description="Когда нужно показать 2 варианта, 2 тарифа или 2 категории"
            code={twoCardsCode}
          >
            <div className="w-full bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-8">Заголовок</h2>
              <div className="grid grid-cols-2 gap-4">
                <Card
                  title="Карточка 1"
                  description="Описание"
                  buttonText="Подробнее"
                />
                <Card
                  title="Карточка 2"
                  description="Описание"
                  buttonText="Подробнее"
                />
              </div>
            </div>
          </ComponentPreview>
        </div>

        {/* Шаблон 4 */}
        <div className="mb-8">
          <ComponentPreview
            title="Шаблон 4: Текст слева, картинка справа"
            description="Для разделов 'О нас', 'Как это работает', описания продукта"
            code={twoColumnsCode}
          >
            <div className="w-full bg-white p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Заголовок</h3>
                  <p className="text-gray-600 mb-4">Текст описания...</p>
                  <Button variant="primary">Кнопка</Button>
                </div>
                <div className="bg-gray-200 h-48 rounded-2xl flex items-center justify-center text-gray-500">
                  Картинка
                </div>
              </div>
            </div>
          </ComponentPreview>
        </div>

        {/* Как собрать страницу */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как собрать полную страницу?
          </h2>
          <div className="space-y-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <p className="text-gray-700">
                  Создай файл{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    app/page.tsx
                  </code>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <p className="text-gray-700">
                  Скопируй несколько шаблонов секций (выше)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <p className="text-gray-700">
                  Вставь их друг под другом внутри{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    &lt;div&gt;
                  </code>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <p className="text-gray-700">
                  Измени тексты, картинки, цвета фонов
                </p>
              </div>
            </div>
          </div>

          <ComponentPreview
            title="Пример: Полная страница из 2 секций"
            description="Скопируй этот код — получишь готовую страницу!"
            code={fullPageCode}
          >
            <div className="w-full space-y-1 border-2 border-gray-300 rounded-lg overflow-hidden">
              {/* Визуал секции 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 text-center">
                <h2 className="text-3xl font-bold mb-3">Привет!</h2>
                <p className="text-gray-600 mb-4">Это моя первая страница</p>
                <Button variant="primary" size="lg">
                  Начать
                </Button>
              </div>

              {/* Визуал секции 2 */}
              <div className="bg-white p-12">
                <h2 className="text-2xl font-bold text-center mb-8">
                  Наши услуги
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <Card
                    title="Услуга 1"
                    description="Описание"
                    buttonText="Подробнее"
                  />
                  <Card
                    title="Услуга 2"
                    description="Описание"
                    buttonText="Подробнее"
                  />
                  <Card
                    title="Услуга 3"
                    description="Описание"
                    buttonText="Подробнее"
                  />
                </div>
              </div>
            </div>
          </ComponentPreview>
        </div>

        {/* Советы */}
        <div className="space-y-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              Полезные советы
            </h3>
            <ul className="space-y-2 text-green-800">
              <li>
                • <strong>Отступы секций:</strong> используй{" "}
                <code className="bg-white px-1 rounded">py-20</code> сверху и
                снизу
              </li>
              <li>
                • <strong>Отступы по бокам:</strong>{" "}
                <code className="bg-white px-1 rounded">px-4</code> обязательно
                для мобильных
              </li>
            </ul>
          </div>

          {/* Как добавить фоновое изображение */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Как добавить фоновое изображение
            </h3>
            <p className="text-gray-700 mb-4">
              Чтобы сделать картинку фоном секции:
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Шаг 1: Положи картинку в папку public
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-mono text-sm">
                    public/images/background.jpg
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Шаг 2: Используй style с backgroundImage
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`<section 
className="min-h-screen flex items-center justify-center px-4"
style={{
    backgroundImage: 'url(/images/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}}
>
<div className="text-center text-white">
    <h1 className="text-6xl font-bold mb-6">
    Заголовок на фоне
    </h1>
    <Button variant="primary">
    Кнопка
    </Button>
</div>
</section>`}
                </pre>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Шаг 3: Добавь затемнение (опционально)
                </p>
                <p className="text-gray-600 mb-3">
                  Если текст плохо видно на фоне, добавь тёмный слой:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`<section 
className="min-h-screen flex items-center justify-center px-4 relative"
style={{
    backgroundImage: 'url(/images/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}}
>
{/* Затемнение */}
<div className="absolute inset-0 bg-black/50"></div>

{/* Контент поверх затемнения */}
<div className="relative text-center text-white">
    <h1 className="text-6xl font-bold mb-6">
    Заголовок
    </h1>
    <Button variant="primary">
    Кнопка
    </Button>
</div>
</section>`}
                </pre>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <p className="text-amber-900">
                  <strong>💡 Совет:</strong> Для затемнения меняй{" "}
                  <code className="bg-white px-1 rounded">bg-black/50</code>
                  (50 = 50% затемнения). Можно поставить 30, 40, 60, 70
                </p>
              </div>
              {/* Пример с реальным визуалом */}
            <div className="mt-6">
                <ComponentPreview
                title="Пример: Секция с фоновым изображением"
                description="Так выглядит секция с картинкой на фоне и затемнением"
                code={backgroundImageCode}
                >
                <div 
                    className="w-full min-h-[400px] flex items-center justify-center relative rounded-lg overflow-hidden"
                    style={{
                    backgroundImage: 'url(/images/background.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    {/* Затемнение */}
                    <div className="absolute inset-0 bg-black/50"></div>
                    
                    {/* Контент */}
                    <div className="relative text-center text-white px-4">
                    <h2 className="text-4xl font-bold mb-4">
                        Заголовок на фоне
                    </h2>
                    <p className="text-lg mb-6">
                        Текст виден благодаря затемнению
                    </p>
                    <Button variant="primary" size="lg">
                        Кнопка
                    </Button>
                    </div>
                </div>
                </ComponentPreview>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
