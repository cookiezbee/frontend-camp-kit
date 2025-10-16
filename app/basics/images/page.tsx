export default function ImagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Работа с изображениями
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Научись добавлять картинки на сайт и правильно их оформлять
          </p>
        </div>

        {/* Куда класть картинки */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Куда класть изображения
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
            <p className="text-yellow-900 font-bold mb-2">
              ⚠️ Важно! Все картинки должны быть в папке public/
            </p>
            <p className="text-yellow-800">
              Next.js ищет изображения только в этой папке
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Правильная структура:</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`твой-проект/
├── app/
├── components/
└── public/           ← ЗДЕСЬ хранятся картинки
    └── images/       ← Создай эту папку
        ├── logo.png
        ├── hero.jpg
        └── photo.jpg`}
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-900">
              <strong>💡 Совет:</strong> Называй файлы на английском без пробелов: <code className="bg-white px-2 py-1 rounded">my-photo.jpg</code>, а не <code className="bg-white px-2 py-1 rounded">моё фото.jpg</code>
            </p>
          </div>
        </section>

        {/* Как добавить картинку */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как добавить картинку на страницу
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Простой способ (тег img):</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm mb-4">
{`<img 
  src="/images/photo.jpg" 
  alt="Описание картинки"
  className="w-full rounded-lg"
/>`}
              </pre>
              <p className="text-gray-600">
                <strong>src="/images/photo.jpg"</strong> — путь начинается с / (от папки public)<br/>
                <strong>alt="..."</strong> — описание картинки (обязательно!)<br/>
                <strong>className</strong> — стили для картинки
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h4 className="font-bold text-green-800 mb-3">Пример:</h4>
              <div className="bg-white p-4 rounded-lg mb-3">
                <img 
                  src="/images/example.jpg"
                  alt="Пример картинки"
                  className="w-full rounded-lg"
                />
              </div>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm">
{`<img 
  src="/images/example.jpg" 
  alt="Пример картинки"
  className="w-full rounded-lg"
/>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Размеры картинок */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Управление размером
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Ширина:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm mb-2 font-mono">w-32 (128px)</p>
                  <img 
                    src="/images/photo.jpg"
                    alt="128px"
                    className="w-32 rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm mb-2 font-mono">w-64 (256px)</p>
                  <img 
                    src="/images/photo.jpg"
                    alt="256px"
                    className="w-64 rounded-lg"
                  />
                </div>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`<img src="/images/photo.jpg" className="w-32" />  // 128px
<img src="/images/photo.jpg" className="w-64" />  // 256px
<img src="/images/photo.jpg" className="w-full" /> // 100% ширины`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Высота:</h3>
              <div className="flex gap-4 mb-4">
                <img 
                  src="/images/photo.jpg"
                  alt="100px"
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <img 
                  src="/images/photo.jpg"
                  alt="150px"
                  className="h-32 w-24 rounded-lg object-cover"
                />
                <img 
                  src="/images/photo.jpg"
                  alt="200px"
                  className="h-48 w-24 rounded-lg object-cover"
                />
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`<img src="/images/photo.jpg" className="h-24" />  // 96px
<img src="/images/photo.jpg" className="h-32" />  // 128px
<img src="/images/photo.jpg" className="h-48" />  // 192px`}
              </pre>
            </div>
          </div>
        </section>

        {/* Object-fit */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как картинка заполняет пространство
          </h2>
          <p className="text-gray-600 mb-6">
            Используй <code className="bg-gray-100 px-2 py-1 rounded">object-fit</code> чтобы контролировать поведение картинки
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">object-cover (обрезает)</h3>
              <div className="h-48 overflow-hidden rounded-lg border-2 border-gray-300">
                <img 
                  src="/images/photo.jpg"
                  alt="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">Заполняет всё пространство, обрезая лишнее</p>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 inline-block">object-cover</code>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">object-contain (вписывает)</h3>
              <div className="h-48 bg-gray-100 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                <img 
                  src="/images/photo.jpg"
                  alt="contain"
                  className="h-full object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">Показывает всю картинку целиком</p>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 inline-block">object-contain</code>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm mt-6">
{`// Обрезает по краям, но заполняет всё пространство
<img src="/images/photo.jpg" className="w-full h-64 object-cover" />

// Показывает всю картинку, может быть пустое место
<img src="/images/photo.jpg" className="w-full h-64 object-contain" />`}
          </pre>
        </section>

        {/* Скругление и стили */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Скругление и стили
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <img 
                src="/images/photo.jpg"
                alt="rounded"
                className="w-full rounded mb-2"
              />
              <code className="text-xs">rounded</code>
            </div>
            <div className="text-center">
              <img 
                src="/images/photo.jpg"
                alt="rounded-lg"
                className="w-full rounded-lg mb-2"
              />
              <code className="text-xs">rounded-lg</code>
            </div>
            <div className="text-center">
              <img 
                src="/images/photo.jpg"
                alt="rounded-full"
                className="w-full rounded-full mb-2"
              />
              <code className="text-xs">rounded-full</code>
            </div>
            <div className="text-center">
              <img 
                src="/images/photo.jpg"
                alt="shadow"
                className="w-full rounded-lg shadow-xl mb-2"
              />
              <code className="text-xs">shadow-xl</code>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`<img src="/images/photo.jpg" className="rounded" />       // Чуть скруглено
<img src="/images/photo.jpg" className="rounded-lg" />    // Средне
<img src="/images/photo.jpg" className="rounded-full" />  // Круг
<img src="/images/photo.jpg" className="shadow-lg" />     // С тенью`}
          </pre>
        </section>

        {/* Фоновые изображения */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Фоновые изображения
          </h2>
          <p className="text-gray-600 mb-6">
            Когда нужно поместить текст поверх картинки
          </p>

          <div className="mb-6">
            <div 
              className="h-64 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: "url('/images/background.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-white text-center">
                <h3 className="text-4xl font-bold mb-2">Текст поверх картинки</h3>
                <p className="text-lg">С затемнением для читаемости</p>
              </div>
            </div>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
{`<div 
  className="h-64 rounded-lg flex items-center justify-center relative"
  style={{
    backgroundImage: "url('/images/background.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Затемнение */}
  <div className="absolute inset-0 bg-black/50"></div>
  
  {/* Контент */}
  <div className="relative z-10 text-white text-center">
    <h1 className="text-4xl font-bold">Заголовок</h1>
    <p>Текст поверх картинки</p>
  </div>
</div>`}
          </pre>
        </section>

        {/* Оптимизация */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Оптимизация изображений
          </h2>

          <div className="space-y-4 mb-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-900">
                <strong>❌ Плохо:</strong> Загружать огромные фото (5 МБ) — сайт будет медленным
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-green-900">
                <strong>✅ Хорошо:</strong> Сжимать картинки до 100-300 КБ
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-3">Инструменты для сжатия:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">🔗</span>
                <a href="https://tinypng.com" target="_blank" className="text-blue-600 hover:underline">
                  TinyPNG
                </a>
                <span className="text-gray-600 text-sm">— сжимает без потери качества</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">🔗</span>
                <a href="https://squoosh.app" target="_blank" className="text-blue-600 hover:underline">
                  Squoosh
                </a>
                <span className="text-gray-600 text-sm">— от Google, работает в браузере</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-900">
              <strong>💡 Рекомендация:</strong> Используй формат <strong>WebP</strong> — он весит меньше JPG при том же качестве
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}