export default function PlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            План обучения Frontend
          </h1>
        </div>

        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            День 2: Знакомство и старт
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                10:00-11:00 Введение в Frontend
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Что такое frontend: живые примеры сайтов</li>
                <li>Компоненты как Lego: разбор интерфейсов популярных сайтов</li>
                <li>Показ готовых компонентов-заготовок</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                11:00-12:00 Структура веб-страницы
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Header (Шапка): логотип, меню навигации, кнопки</li>
                <li>Hero (Главный баннер): большой заголовок, описание, призыв к действию</li>
                <li>Content (Контент): секции с текстом, изображениями, карточками</li>
                <li>Footer (Подвал): контакты, ссылки на соцсети, копирайт</li>
                <li>Показываем примеры на реальных сайтах и разбираем структуру</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                12:00-13:00 Настройка среды разработки
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Создание первого Next.js проекта</li>
                <li>Запуск проекта</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            День 3: Основы Next.js и компоненты
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                10:00-11:00 Теория: Компоненты и JSX
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Что такое компонент: создание простой кнопки</li>
                <li>JSX и фигурные скобки {'{}'} для вставки JavaScript</li>
                <li>Props: передача данных в компоненты</li>
                <li>Live-coding примеров</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                11:00-12:30 Практика: Создание компонентов
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Модификация готового компонента Button</li>
                <li>Создание компонента Hero (главная секция)</li>
                <li>Работа с Tailwind CSS классами</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                12:30-13:00 Командная синхронизация <span className="text-sm text-gray-500">(по возможности)</span>
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Встреча с дизайнерами</li>
                <li>Обсуждение цветов, шрифтов, стиля проекта</li>
                <li>План работы на следующий день</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                15:00-16:00 Самостоятельная работа
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Доработка компонентов</li>
                <li>Изучение документации Next.js <span className="text-sm text-gray-500">(по возможности)</span></li>
                <li>Индивидуальные консультации с наставником</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            День 4: Компоненты и интерактивность
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                10:00-10:30 Структура одностраничного сайта
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Секции как отдельные компоненты</li>
                <li>Каждая секция — это отдельный файл компонента</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                10:30-11:00 Якоря и плавная прокрутка
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Добавляем id к секциям, создаем меню с ссылками и добавляем плавную прокрутку</li>
                <li>Практика: делаем рабочее меню навигации</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                11:00-11:30 useState: управление состоянием
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Объясняем: useState — это «память» компонента</li>
                <li>Рассматриваем примеры</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                11:30-12:30 Модальные окна
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Создаем компонент Modal</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                12:30-13:00 Командная работа
              </h3>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                15:00-16:00 useEffect и динамические эффекты
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Объясняем useEffect</li>
                <li>Пример: Анимация появления элементов при скролле</li>
                <li>Практика: добавляем эффекты появления к карточкам <span className="text-sm text-gray-500">(например за доп баллы)</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-orange-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            День 5-6: Работа над проектами
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-3">
                10:00-13:00 Разработка проектов
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Верстка компонентов по макетам</li>
                <li>Сборка всех секций в единую страницу</li>
                <li>Добавление интерактивности (формы, модалки, анимации)</li>
                <li>Мини-презентация прогресса</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-3">
                15:00-16:00 Консультации и отладка
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Решение проблем с кодом</li>
                <li>Оптимизация и рефакторинг</li>
                <li>Советы по улучшению проектов</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">
                🏆 В один из дней 15:00-16:00 «Frontend Battle» (дополнительные баллы)
              </h4>
              <ul className="list-disc list-inside space-y-1 text-yellow-700 ml-4">
                <li>Задание 1: Карточка товара за 15 минут</li>
                <li>Задание 2: Анимация при наведении за 10 минут</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <h4 className="font-semibold text-blue-800 mb-2">
                🧠 В один из дней 15:00-16:00 «Code Quiz» (дополнительные баллы)
              </h4>
              <ul className="list-disc list-inside space-y-1 text-blue-700 ml-4">
                <li>Викторина по frontend</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            День 7: Финальная доработка
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                10:00-13:00 Финальная доработка
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Доведение проектов до завершения</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            День 8: Презентация и награждение
          </h2>

          <div className="space-y-4">
            <p className="text-lg">
              Финальный день! Презентация проектов и подведение итогов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
