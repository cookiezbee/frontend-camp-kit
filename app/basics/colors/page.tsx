/* eslint-disable react/no-unescaped-entities */
export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Цвета и стили
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Научись менять цвета, фоны и стили компонентов с помощью Tailwind CSS
          </p>
        </div>

        {/* Фоновые цвета */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Фоновые цвета
          </h2>
          <p className="text-gray-600 mb-6">
            Используй класс <code className="bg-gray-100 px-2 py-1 rounded text-sm">bg-[цвет]-[оттенок]</code> для изменения фона элемента
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-500 p-6 rounded-lg text-white">
                <p className="text-2xl font-bold mb-2">bg-blue-500</p>
                <code className="text-sm bg-white text-blue-600 px-2 py-1 rounded">
                className="bg-blue-500"
                </code>
            </div>
            <div className="bg-green-500 p-6 rounded-lg text-white">
                <p className="text-2xl font-bold mb-2">bg-green-500</p>
                <code className="text-sm bg-white text-green-600 px-2 py-1 rounded">
                className="bg-green-500"
                </code>
            </div>
            <div className="bg-purple-500 p-6 rounded-lg text-white">
                <p className="text-2xl font-bold mb-2">bg-purple-500</p>
                <code className="text-sm bg-white text-purple-600 px-2 py-1 rounded">
                className="bg-purple-500"
                </code>
            </div>
            </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-3">Доступные цвета:</h3>
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white border-2 border-gray-300 px-3 py-1 rounded text-gray-900 text-sm">white</span>
                <span className="bg-black px-3 py-1 rounded text-white text-sm">black</span>
                <span className="bg-gray-500 px-3 py-1 rounded text-white text-sm">gray</span>
                <span className="bg-red-500 px-3 py-1 rounded text-white text-sm">red</span>
                <span className="bg-orange-500 px-3 py-1 rounded text-white text-sm">orange</span>
                <span className="bg-yellow-500 px-3 py-1 rounded text-white text-sm">yellow</span>
                <span className="bg-green-500 px-3 py-1 rounded text-white text-sm">green</span>
                <span className="bg-teal-500 px-3 py-1 rounded text-white text-sm">teal</span>
                <span className="bg-blue-500 px-3 py-1 rounded text-white text-sm">blue</span>
                <span className="bg-indigo-500 px-3 py-1 rounded text-white text-sm">indigo</span>
                <span className="bg-purple-500 px-3 py-1 rounded text-white text-sm">purple</span>
                <span className="bg-pink-500 px-3 py-1 rounded text-white text-sm">pink</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-3">Оттенки (от светлого к тёмному):</h3>
            <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 border border-gray-300 px-3 py-1 rounded text-gray-700 text-sm">50</span>
                <span className="bg-blue-100 px-3 py-1 rounded text-gray-700 text-sm">100</span>
                <span className="bg-blue-200 px-3 py-1 rounded text-gray-700 text-sm">200</span>
                <span className="bg-blue-300 px-3 py-1 rounded text-gray-700 text-sm">300</span>
                <span className="bg-blue-400 px-3 py-1 rounded text-white text-sm">400</span>
                <span className="bg-blue-500 px-3 py-1 rounded text-white text-sm">500</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-white text-sm">600</span>
                <span className="bg-blue-700 px-3 py-1 rounded text-white text-sm">700</span>
                <span className="bg-blue-800 px-3 py-1 rounded text-white text-sm">800</span>
                <span className="bg-blue-900 px-3 py-1 rounded text-white text-sm">900</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">
                💡 <strong>white</strong> и <strong>black</strong> не имеют оттенков (50-900), это абсолютные цвета.
            </p>
            </div>

          <div className="mt-6 bg-blue-50 rounded border-l-4 border-blue-500 p-4">
            <p className="text-blue-900">
              <strong>💡 Совет:</strong> 500 — средний оттенок, чаще всего используется. 50-200 — светлые оттенки для фонов. 700-900 — тёмные для акцентов.
            </p>
          </div>
        </section>

        {/* Цвет текста */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Цвет текста
          </h2>
          <p className="text-gray-600 mb-6">
            Используй класс <code className="bg-gray-100 px-2 py-1 rounded text-sm">text-[цвет]-[оттенок]</code>
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<p className="text-blue-600">Синий текст</p>
<h1 className="text-red-500">Красный заголовок</h1>`}
          </pre>
        </section>

        {/* Границы (borders) */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Границы (Borders)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-blue-500 p-6 rounded-lg">
              <p className="font-bold mb-2">Цветная граница</p>
              <code className="text-sm">border-2 border-blue-500</code>
            </div>
            <div className="border-4 border-red-500 p-6 rounded-lg">
              <p className="font-bold mb-2">Толстая граница</p>
              <code className="text-sm">border-4 border-red-500</code>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`// Добавить границу
className="border-2 border-gray-300"

// Изменить цвет
className="border-2 border-blue-500"

// Изменить толщину
className="border-4 border-blue-500"`}
          </pre>
        </section>

        {/* Скругление углов */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Скругление углов
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-500 p-6 text-white text-center">
              <p className="font-bold mb-2">Без скругления</p>
              <code className="text-xs">rounded-none</code>
            </div>
            <div className="bg-blue-500 p-6 rounded text-white text-center">
              <p className="font-bold mb-2">Немного</p>
              <code className="text-xs">rounded</code>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg text-white text-center">
              <p className="font-bold mb-2">Средне</p>
              <code className="text-xs">rounded-lg</code>
            </div>
            <div className="bg-blue-500 p-6 rounded-full text-white text-center">
              <p className="font-bold mb-2">Круг</p>
              <code className="text-xs">rounded-full</code>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`className="rounded"      // Маленькое скругление
className="rounded-lg"   // Среднее
className="rounded-xl"   // Большое
className="rounded-full" // Полный круг`}
          </pre>
        </section>

        {/* Тени */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Тени (Shadow)
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div className="shadow-sm bg-white border border-gray-200 p-4 rounded-lg text-center">
              <p className="font-bold text-sm">shadow-sm</p>
            </div>
            <div className="shadow bg-white p-4 rounded-lg text-center">
              <p className="font-bold text-sm">shadow</p>
            </div>
            <div className="shadow-md bg-white p-4 rounded-lg text-center">
              <p className="font-bold text-sm">shadow-md</p>
            </div>
            <div className="shadow-lg bg-white p-4 rounded-lg text-center">
              <p className="font-bold text-sm">shadow-lg</p>
            </div>
            <div className="shadow-xl bg-white p-4 rounded-lg text-center">
              <p className="font-bold text-sm">shadow-xl</p>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`className="shadow"     // Обычная тень
className="shadow-lg"  // Большая тень
className="shadow-xl"  // Очень большая`}
          </pre>
        </section>

        {/* Прозрачность */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Прозрачность
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            <div className="text-center">
              <div className="bg-blue-500 opacity-100 h-20 rounded-lg mb-2"></div>
              <code className="text-xs">opacity-100</code>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 opacity-75 h-20 rounded-lg mb-2"></div>
              <code className="text-xs">opacity-75</code>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 opacity-50 h-20 rounded-lg mb-2"></div>
              <code className="text-xs">opacity-50</code>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 opacity-25 h-20 rounded-lg mb-2"></div>
              <code className="text-xs">opacity-25</code>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 opacity-10 h-20 rounded-lg mb-2"></div>
              <code className="text-xs">opacity-10</code>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 opacity-0 border-2 border-gray-300 h-20 rounded-lg mb-2"></div>
              <code className="text-xs">opacity-0</code>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`className="opacity-50"  // 50% прозрачности
className="opacity-0"   // Полностью прозрачно
className="opacity-100" // Полностью видимо

// Для фонов:
className="bg-black bg-opacity-50"`}
          </pre>
        </section>

        {/* Градиенты */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Градиенты
          </h2>

          <div className="space-y-4 mb-6">
            <div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-20 rounded-lg mb-2"></div>
              <code className="text-sm">bg-gradient-to-r from-blue-500 to-purple-500</code>
            </div>

            <div>
              <div className="bg-gradient-to-b from-green-400 to-blue-500 h-20 rounded-lg mb-2"></div>
              <code className="text-sm">bg-gradient-to-b from-green-400 to-blue-500</code>
            </div>

            <div>
              <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 h-20 rounded-lg mb-2"></div>
              <code className="text-sm">bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500</code>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`// Направления:
bg-gradient-to-r   // Слева направо →
bg-gradient-to-l   // Справа налево ←
bg-gradient-to-t   // Снизу вверх ↑
bg-gradient-to-b   // Сверху вниз ↓
bg-gradient-to-br  // По диагонали ↘

// Цвета:
from-[цвет]  // Начальный цвет
via-[цвет]   // Промежуточный (опционально)
to-[цвет]    // Конечный цвет`}
          </pre>
        </section>

        {/* Как применить к компонентам */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как применить к компонентам
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Изменить цвет кнопки:</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`// Было:
<Button variant="primary">Кнопка</Button>

// Стало (красная кнопка):
<Button className="bg-red-500 hover:bg-red-600">
  Кнопка
</Button>`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">Изменить фон карточки:</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`// Было:
<Card>...</Card>

// Стало (синий фон):
<Card className="bg-blue-50 border-blue-200">
  ...
</Card>`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">Изменить цвет текста:</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`// Было:
<h1 className="text-gray-900">Заголовок</h1>

// Стало:
<h1 className="text-purple-600">Заголовок</h1>`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}