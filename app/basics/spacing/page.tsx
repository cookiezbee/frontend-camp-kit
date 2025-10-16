/* eslint-disable react/no-unescaped-entities */
export default function SpacingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Отступы и размеры
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Научись управлять пространством на странице с помощью Tailwind CSS
          </p>
        </div>

        {/* Padding (внутренние отступы) */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Padding — внутренние отступы
          </h2>
          <p className="text-gray-600 mb-6">
            Padding создаёт пространство <strong>внутри</strong> элемента (между границей и контентом)
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-blue-500 rounded-lg">
              <div className="bg-blue-100 p-8">
                <div className="bg-white p-4 rounded">
                  Контент с padding
                </div>
              </div>
              <code className="block text-center py-2 text-sm">p-8</code>
            </div>
            <div className="border-2 border-green-500 rounded-lg">
              <div className="bg-green-100 p-2">
                <div className="bg-white p-4 rounded">
                  Контент с padding
                </div>
              </div>
              <code className="block text-center py-2 text-sm">p-2</code>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Все стороны сразу:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-blue-500 p-2 rounded text-white text-center text-sm">p-2</div>
              <div className="bg-blue-500 p-4 rounded text-white text-center text-sm">p-4</div>
              <div className="bg-blue-500 p-6 rounded text-white text-center text-sm">p-6</div>
              <div className="bg-blue-500 p-8 rounded text-white text-center text-sm">p-8</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-3">Отдельные стороны:</h3>
            <div className="space-y-3">
              <div>
                <code className="font-mono text-sm mr-3">pt-4</code>
                <span className="text-gray-600">— отступ сверху (top)</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">pb-4</code>
                <span className="text-gray-600">— отступ снизу (bottom)</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">pl-4</code>
                <span className="text-gray-600">— отступ слева (left)</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">pr-4</code>
                <span className="text-gray-600">— отступ справа (right)</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">px-4</code>
                <span className="text-gray-600">— отступ слева и справа (horizontal)</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">py-4</code>
                <span className="text-gray-600">— отступ сверху и снизу (vertical)</span>
              </div>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm mt-6">
{`<div className="p-4">Отступ со всех сторон</div>
<div className="px-6 py-3">Горизонтальный 6, вертикальный 3</div>
<div className="pt-8">Отступ только сверху</div>`}
          </pre>
        </section>

        {/* Margin (внешние отступы) */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Margin — внешние отступы
          </h2>
          <p className="text-gray-600 mb-6">
            Margin создаёт пространство <strong>снаружи</strong> элемента (отодвигает от других элементов)
          </p>

          <div className="bg-gray-100 p-8 rounded-lg mb-6">
            <div className="bg-blue-500 text-white p-4 rounded mb-4">
              Элемент 1
            </div>
            <div className="bg-green-500 text-white p-4 rounded mt-8">
              Элемент 2 с mt-8
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-3">Синтаксис (такой же как у padding):</h3>
            <div className="space-y-3">
              <div>
                <code className="font-mono text-sm mr-3">m-4</code>
                <span className="text-gray-600">— отступ со всех сторон</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">mt-4</code>
                <span className="text-gray-600">— отступ сверху</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">mb-4</code>
                <span className="text-gray-600">— отступ снизу</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">ml-4</code>
                <span className="text-gray-600">— отступ слева</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">mr-4</code>
                <span className="text-gray-600">— отступ справа</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">mx-4</code>
                <span className="text-gray-600">— отступ слева и справа</span>
              </div>
              <div>
                <code className="font-mono text-sm mr-3">my-4</code>
                <span className="text-gray-600">— отступ сверху и снизу</span>
              </div>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm mt-6">
{`<div className="mt-8">Отступ сверху</div>
<div className="mx-auto">Центрирование по горизонтали</div>
<div className="mb-4">Отступ снизу</div>`}
          </pre>
        </section>

        {/* Шкала размеров */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Шкала размеров
          </h2>
          <p className="text-gray-600 mb-6">
            В Tailwind используется числовая система: <code className="bg-gray-100 px-2 py-1 rounded">1 = 0.25rem = 4px</code>
          </p>

          <div className="space-y-3 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-4">
              <code className="w-16 font-mono text-sm">0</code>
              <div className="bg-blue-500 h-8" style={{width: '0px'}}></div>
              <span className="text-gray-600">0px</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="w-16 font-mono text-sm">1</code>
              <div className="bg-blue-500 h-8 w-1"></div>
              <span className="text-gray-600">4px</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="w-16 font-mono text-sm">2</code>
              <div className="bg-blue-500 h-8 w-2"></div>
              <span className="text-gray-600">8px</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="w-16 font-mono text-sm">4</code>
              <div className="bg-blue-500 h-8 w-4"></div>
              <span className="text-gray-600">16px</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="w-16 font-mono text-sm">6</code>
              <div className="bg-blue-500 h-8 w-6"></div>
              <span className="text-gray-600">24px</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="w-16 font-mono text-sm">8</code>
              <div className="bg-blue-500 h-8 w-8"></div>
              <span className="text-gray-600">32px</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="w-16 font-mono text-sm">12</code>
              <div className="bg-blue-500 h-8 w-12"></div>
              <span className="text-gray-600">48px</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="w-16 font-mono text-sm">16</code>
              <div className="bg-blue-500 h-8 w-16"></div>
              <span className="text-gray-600">64px</span>
            </div>
          </div>

          <div className="mt-6 rounded bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-blue-900">
              <strong>💡 Совет:</strong> Используй чётные числа (2, 4, 6, 8) — они создают более гармоничный дизайн
            </p>
          </div>
        </section>

        {/* Gap (промежутки) */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Gap — промежутки между элементами
          </h2>
          <p className="text-gray-600 mb-6">
            Используется для flexbox и grid — создаёт одинаковые отступы между всеми элементами
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="font-bold mb-3">gap-2 (8px)</p>
              <div className="flex gap-2">
                <div className="bg-blue-500 p-4 rounded text-white flex-1">1</div>
                <div className="bg-blue-500 p-4 rounded text-white flex-1">2</div>
                <div className="bg-blue-500 p-4 rounded text-white flex-1">3</div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3">gap-6 (24px)</p>
              <div className="flex gap-6">
                <div className="bg-green-500 p-4 rounded text-white flex-1">1</div>
                <div className="bg-green-500 p-4 rounded text-white flex-1">2</div>
                <div className="bg-green-500 p-4 rounded text-white flex-1">3</div>
              </div>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`<div className="flex gap-4">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</div>

<div className="grid grid-cols-3 gap-6">
  <div>Карточка 1</div>
  <div>Карточка 2</div>
  <div>Карточка 3</div>
</div>`}
          </pre>
        </section>

        {/* Width (ширина) */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Width — ширина элемента
          </h2>

          <div className="space-y-4 mb-6">
            <div>
              <code className="font-mono text-sm mb-2 block">w-32 (128px)</code>
              <div className="w-32 bg-blue-500 h-12 rounded"></div>
            </div>
            <div>
              <code className="font-mono text-sm mb-2 block">w-64 (256px)</code>
              <div className="w-64 bg-green-500 h-12 rounded"></div>
            </div>
            <div>
              <code className="font-mono text-sm mb-2 block">w-full (100%)</code>
              <div className="w-full bg-purple-500 h-12 rounded"></div>
            </div>
            <div>
              <code className="font-mono text-sm mb-2 block">w-1/2 (50%)</code>
              <div className="w-1/2 bg-orange-500 h-12 rounded"></div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-3">Популярные значения:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div><code className="font-mono">w-auto</code> — автоматическая ширина</div>
              <div><code className="font-mono">w-full</code> — 100% ширины</div>
              <div><code className="font-mono">w-screen</code> — ширина экрана</div>
              <div><code className="font-mono">w-1/2</code> — 50%</div>
              <div><code className="font-mono">w-1/3</code> — 33.33%</div>
              <div><code className="font-mono">w-2/3</code> — 66.66%</div>
              <div><code className="font-mono">w-1/4</code> — 25%</div>
              <div><code className="font-mono">w-3/4</code> — 75%</div>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm mt-6">
{`<div className="w-full">Во всю ширину</div>
<div className="w-1/2">Половина ширины</div>
<div className="w-64">Фиксированная ширина 256px</div>`}
          </pre>
        </section>

        {/* Height (высота) */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Height — высота элемента
          </h2>

          <div className="flex gap-4 mb-6">
            <div>
              <code className="font-mono text-sm mb-2 block">h-12</code>
              <div className="w-24 bg-blue-500 h-12 rounded"></div>
            </div>
            <div>
              <code className="font-mono text-sm mb-2 block">h-24</code>
              <div className="w-24 bg-green-500 h-24 rounded"></div>
            </div>
            <div>
              <code className="font-mono text-sm mb-2 block">h-32</code>
              <div className="w-24 bg-purple-500 h-32 rounded"></div>
            </div>
            <div>
              <code className="font-mono text-sm mb-2 block">h-48</code>
              <div className="w-24 bg-orange-500 h-48 rounded"></div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-3">Специальные значения:</h3>
            <div className="space-y-2 text-sm">
              <div><code className="font-mono">h-screen</code> — высота всего экрана</div>
              <div><code className="font-mono">h-full</code> — 100% высоты родителя</div>
              <div><code className="font-mono">h-auto</code> — автоматическая высота</div>
              <div><code className="font-mono">min-h-screen</code> — минимум высота экрана</div>
              <div><code className="font-mono">max-h-96</code> — максимум 384px</div>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm mt-6">
{`<div className="h-screen">На всю высоту экрана</div>
<div className="h-64">Высота 256px</div>
<div className="min-h-screen">Минимум на весь экран</div>`}
          </pre>
        </section>

        {/* Max-width (максимальная ширина) */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Max-width — ограничение ширины контейнера
          </h2>
          <p className="text-gray-600 mb-6">
            Используется для создания читаемых контейнеров (чтобы текст не растягивался на весь экран)
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-100 p-4 rounded">
              <div className="max-w-md bg-blue-500 text-white p-4 rounded mx-auto">
                <code className="block mb-2">max-w-md (448px)</code>
                Контейнер с ограниченной шириной
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <div className="max-w-4xl bg-green-500 text-white p-4 rounded mx-auto">
                <code className="block mb-2">max-w-4xl (896px)</code>
                Широкий контейнер
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-3">Популярные размеры:</h3>
            <div className="space-y-2 text-sm">
              <div><code className="font-mono">max-w-sm</code> — 384px (узкий)</div>
              <div><code className="font-mono">max-w-md</code> — 448px (средний)</div>
              <div><code className="font-mono">max-w-lg</code> — 512px</div>
              <div><code className="font-mono">max-w-xl</code> — 576px</div>
              <div><code className="font-mono">max-w-2xl</code> — 672px</div>
              <div><code className="font-mono">max-w-4xl</code> — 896px</div>
              <div><code className="font-mono">max-w-6xl</code> — 1152px</div>
              <div><code className="font-mono">max-w-7xl</code> — 1280px (самый популярный)</div>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm mt-6">
{`<div className="max-w-7xl mx-auto">
  Контейнер с максимальной шириной 1280px
  по центру экрана (mx-auto)
</div>`}
          </pre>
        </section>

        {/* Центрирование */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Центрирование элементов
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Центрирование по горизонтали:</h3>
              <div className="bg-gray-100 p-4 rounded mb-3">
                <div className="w-64 bg-blue-500 text-white p-4 rounded mx-auto text-center">
                  mx-auto
                </div>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`<div className="w-64 mx-auto">
  Блок по центру
</div>`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">Центрирование по вертикали и горизонтали:</h3>
              <div className="bg-gray-100 p-4 rounded mb-3 h-64 flex items-center justify-center">
                <div className="bg-green-500 text-white p-6 rounded">
                  По центру экрана
                </div>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`<div className="flex items-center justify-center h-screen">
  <div>По центру экрана</div>
</div>`}
              </pre>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}