/* eslint-disable react/no-unescaped-entities */
"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Card from "@/components/ui/Card";

export default function CardPage() {
  const cardCode = `import Button from './Button';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  imageMode?: 'cover' | 'contain';
  imagePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'left-top' | 'right-top';
  badge?: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary';
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

export default function Card({ 
  title, 
  description, 
  image,
  imageMode = 'cover',
  imagePosition = 'center',
  badge,
  buttonText,
  buttonVariant = 'primary',
  onButtonClick,
  children 
}: CardProps) {

  const styles = {
    card: "bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100",
    imageContainer: "relative w-full h-48 overflow-hidden bg-gray-100",
    image: \`w-full h-full \${imageMode === 'cover' ? 'object-cover' : 'object-contain'} object-\${imagePosition}\`,
    badge: "absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold",
    content: "p-6",
    title: "text-xl font-bold text-gray-900 mb-2",
    description: "text-gray-600 mb-4",
  };

  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {children}
        {buttonText && (
          <Button 
            variant={buttonVariant}
            onClick={onButtonClick}
            size="md"
            fullWidth
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Card (Карточка)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Универсальная карточка для товаров, постов, профилей и любого
            контента.
          </p>
        </div>

        {/* Базовая карточка */}
        <div className="mb-8">
          <ComponentPreview
            title="Базовая карточка"
            description="Простая карточка с заголовком и описанием"
            code={`<Card 
  title="Заголовок карточки"
  description="Это описание карточки. Здесь может быть любой текст."
/>`}
          >
            <div className="w-full max-w-sm">
              <Card
                title="Заголовок карточки"
                description="Это описание карточки. Здесь может быть любой текст."
              />
            </div>
          </ComponentPreview>
        </div>

        {/* С картинкой */}
        <div className="mb-8">
          <ComponentPreview
            title="Карточка с картинкой"
            description="Добавь изображение для визуальности"
            code={`<Card 
  title="Красивая природа"
  description="Живописные пейзажи и удивительные места"
  image="/images/nature.jpg"
/>`}
          >
            <div className="w-full max-w-sm">
              <Card
                title="Красивая природа"
                description="Живописные пейзажи и удивительные места"
                image="/images/nature.jpg"
              />
            </div>
          </ComponentPreview>
        </div>

        {/* С кнопкой */}
        <div className="mb-8">
          <ComponentPreview
            title="Карточка с кнопкой"
            description="Добавь действие при клике"
            code={`<Card 
  title="Интересная статья"
  description="Узнай больше о веб-разработке"
  image="/images/code.jpg"
  buttonText="Читать далее"
  onButtonClick={() => alert('Переход к статье')}
/>`}
          >
            <div className="w-full max-w-sm">
              <Card
                title="Интересная статья"
                description="Узнай больше о веб-разработке"
                image="/images/code.jpg"
                buttonText="Читать далее"
                onButtonClick={() => alert("Переход к статье")}
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Со значком */}
        <div className="mb-8">
          <ComponentPreview
            title="Карточка со значком"
            description="Добавь значок для акций, новинок или важной информации"
            code={`<Card 
  title="Специальное предложение"
  description="Успей купить со скидкой!"
  image="/images/iphones.jpg"
  badge="Скидка 50%"
  buttonText="Купить"
/>`}
          >
            <div className="w-full max-w-sm">
              <Card
                title="Специальное предложение"
                description="Успей купить со скидкой!"
                image="/images/iphones.jpg"
                badge="Скидка 50%"
                buttonText="Купить"
              />
            </div>
          </ComponentPreview>
        </div>

        {/* БЕЗ обрезки изображения */}
        <div className="mb-8">
        <ComponentPreview
            title="Изображение БЕЗ обрезки"
            description="Используй imageMode='contain' чтобы показать всё изображение целиком"
            code={`<Card 
        title="Продукт полностью"
        description="Изображение не обрезается, видно всё целиком"
        image="/images/coffee.jpg"
        imageMode="contain"
        buttonText="Купить"
        />`}
        >
            <div className="w-full max-w-sm">
            <Card
                title="Продукт полностью"
                description="Изображение не обрезается, видно всё целиком"
                image="/images/coffee.jpg"
                imageMode="contain"
                buttonText="Купить"
            />
            </div>
        </ComponentPreview>
        </div>

        {/* Сравнение */}
        <div className="mb-8">
        <ComponentPreview
            title="Сравнение: cover vs contain"
            description="Слева - с обрезкой (cover), справа - без обрезки (contain)"
            code={`<div className="grid grid-cols-2 gap-6">
        <Card 
            title="С обрезкой"
            image="/images/coffee.jpg"
            imageMode="cover"
        />
        <Card 
            title="Без обрезки"
            image="/images/coffee.jpg"
            imageMode="contain"
        />
        </div>`}
        >
            <div className="w-full grid grid-cols-2 gap-6">
            <Card
                title="С обрезкой"
                image="/images/coffee.jpg"
                imageMode="cover"
            />
            <Card
                title="Без обрезки"
                image="/images/coffee.jpg"
                imageMode="contain"
            />
            </div>
        </ComponentPreview>
        </div>

        {/* Примечание про края */}
        <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            Совет: Как убрать серые края?
        </h3>
        <p className="text-gray-700 mb-3">
            Когда используешь <code className="bg-white px-2 py-1 rounded text-sm font-mono">imageMode="contain"</code>, 
            могут появиться серые края, если пропорции изображения не совпадают с высотой контейнера.
        </p>
        <p className="text-gray-700 mb-3">
            <strong>Чтобы убрать края:</strong> Замени <code className="bg-white px-2 py-1 rounded text-sm font-mono">h-48</code> на <code className="bg-white px-2 py-1 rounded text-sm font-mono">h-auto</code> в строке <code className="bg-white px-2 py-1 rounded text-sm font-mono">imageContainer</code>
        </p>
        <div className="bg-white p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
        {`// Было:
        imageContainer: "relative w-full h-48 overflow-hidden bg-gray-100"

// Стало:
        imageContainer: "relative w-full h-auto overflow-hidden bg-gray-100"`}
            </pre>
        </div>
        <p className="text-gray-600 text-sm mt-3">
            ⚠️ Внимание: После этого карточки будут разной высоты в зависимости от пропорций изображений
        </p>
        </div>

        {/* Позиционирование изображения при обрезке */}
        <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            Совет: Как показать нужную часть изображения?
          </h3>
          <p className="text-gray-700 mb-3">
            Когда используешь <code className="bg-white px-2 py-1 rounded text-sm font-mono">imageMode="cover"</code>, 
            изображение обрезается по центру. Но что если нужно показать верх, низ или другую часть?
          </p>
          
          <p className="text-gray-700 mb-3">
            <strong>Решение:</strong> Используй prop <code className="bg-white px-2 py-1 rounded text-sm font-mono">imagePosition</code>
          </p>
          
          <div className="bg-white p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
              {`<Card 
  image="/images/photo.jpg"
  imageMode="cover"
  imagePosition="top"  // ← показать верх изображения
/>

<Card 
  image="/images/photo.jpg"
  imageMode="cover"
  imagePosition="bottom"  // ← показать низ изображения
/>`}
            </pre>
          </div>

          <p className="text-gray-700 mb-3 font-semibold">Доступные позиции:</p>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white p-3 rounded border border-gray-200">
              <code className="text-blue-600 font-mono text-sm">imagePosition="top"</code>
              <p className="text-gray-600 text-sm mt-1">Показать верх изображения</p>
            </div>
            
            <div className="bg-white p-3 rounded border border-gray-200">
              <code className="text-blue-600 font-mono text-sm">imagePosition="bottom"</code>
              <p className="text-gray-600 text-sm mt-1">Показать низ изображения</p>
            </div>
            
            <div className="bg-white p-3 rounded border border-gray-200">
              <code className="text-blue-600 font-mono text-sm">imagePosition="left"</code>
              <p className="text-gray-600 text-sm mt-1">Показать левую часть</p>
            </div>
            
            <div className="bg-white p-3 rounded border border-gray-200">
              <code className="text-blue-600 font-mono text-sm">imagePosition="right"</code>
              <p className="text-gray-600 text-sm mt-1">Показать правую часть</p>
            </div>
            
            <div className="bg-white p-3 rounded border border-gray-200">
              <code className="text-blue-600 font-mono text-sm">imagePosition="center"</code>
              <p className="text-gray-600 text-sm mt-1">По центру (по умолчанию)</p>
            </div>
            
            <div className="bg-white p-3 rounded border border-gray-200">
              <code className="text-blue-600 font-mono text-sm">imagePosition="left-top"</code>
              <p className="text-gray-600 text-sm mt-1">Верхний левый угол</p>
            </div>
          </div>
        </div>

        {/* Сетка карточек */}
        <div className="mb-8">
          <ComponentPreview
            title="Сетка карточек"
            description="Создай красивую галерею из нескольких карточек"
            code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Card 
    title="Карточка 1"
    description="Первая карточка"
    image="/images/oreo.jpg"
  />
  <Card 
    title="Карточка 2"
    description="Вторая карточка"
    image="/images/oreo.jpg"
  />
  <Card 
    title="Карточка 3"
    description="Третья карточка"
    image="/images/oreo.jpg"
  />
</div>`}
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                title="Карточка 1"
                description="Первая карточка"
                image="/images/oreo.jpg"
              />
              <Card
                title="Карточка 2"
                description="Вторая карточка"
                image="/images/oreo.jpg"
              />
              <Card
                title="Карточка 3"
                description="Третья карточка"
                image="/images/oreo.jpg"
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Пояснение про сетки */}
        <div className="mb-8 p-6 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            📐 Как настроить количество карточек в строке?
          </h3>
          
          <p className="text-gray-700 mb-4">
            Используй классы Tailwind <code className="bg-white px-2 py-1 rounded text-sm font-mono">grid-cols-*</code> для управления сеткой:
          </p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">2 карточки в ряд:</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
        {`<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<Card title="Карточка 1" />
<Card title="Карточка 2" />
        </div>`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">3 карточки в ряд (как в примере):</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
        {`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<Card title="Карточка 1" />
<Card title="Карточка 2" />
<Card title="Карточка 3" />
        </div>`}
              </pre>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">4 карточки в ряд:</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
        {`<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<Card title="Карточка 1" />
<Card title="Карточка 2" />
<Card title="Карточка 3" />
<Card title="Карточка 4" />
        </div>`}
              </pre>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <p className="text-blue-900 font-semibold mb-2">🔍 Разбор классов:</p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex gap-2">
                <code className="bg-white px-2 py-1 rounded font-mono text-xs flex-shrink-0">grid</code>
                <span>— включает CSS Grid</span>
              </li>
              <li className="flex gap-2">
                <code className="bg-white px-2 py-1 rounded font-mono text-xs flex-shrink-0">grid-cols-1</code>
                <span>— 1 карточка в строке на мобильных</span>
              </li>
              <li className="flex gap-2">
                <code className="bg-white px-2 py-1 rounded font-mono text-xs flex-shrink-0">md:grid-cols-3</code>
                <span>— 3 карточки в строке на планшетах и больше</span>
              </li>
              <li className="flex gap-2">
                <code className="bg-white px-2 py-1 rounded font-mono text-xs flex-shrink-0">gap-6</code>
                <span>— отступ между карточками (24px)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Инструкция */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border-2 border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            Как использовать?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Создай файл компонента
                </h3>
                <p className="text-gray-600 mb-2">
                  Создай файл{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/Card.tsx
                  </code>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Скопируй код</h3>
                <p className="text-gray-600">Скопируй весь код из блока ниже</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Используй в проекте
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-2">
                  {`import Card from '@/components/ui/Card';

<Card 
  title="Мой заголовок"
  description="Описание"
  image="/images/photo.jpg"
  buttonText="Кликни"
/>`}
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Где хранить картинки?
                </h3>
                <p className="text-gray-600 mb-2">
                  Помести картинки в папку{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    public/images/
                  </code>
                </p>
                <p className="text-gray-600">
                  Используй:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    image="/images/photo.jpg"
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код компонента Card"
            description="Скопируй весь этот код в файл components/ui/Card.tsx"
            code={cardCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз, чтобы увидеть полный код ⬇️
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  );
}
