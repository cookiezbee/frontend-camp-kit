// ============================================
// КОМПОНЕНТ: КАРТОЧКА (Card)
// ============================================
// Универсальная карточка для товаров, постов,
// профилей и любого другого контента
// ============================================

interface CardProps {
  title: string;                    // Заголовок карточки
  description?: string;             // Описание (необязательно)
  image?: string;                   // Картинка (необязательно)
  imageMode?: 'cover' | 'contain';
  badge?: string;                   // Значок (необязательно)
  buttonText?: string;              // Текст кнопки (необязательно)
  onButtonClick?: () => void;       // Что делать при клике на кнопку
  children?: React.ReactNode;       // Дополнительный контент
}

export default function Card({ 
  title, 
  description, 
  image,
  imageMode = 'cover',
  badge,
  buttonText,
  onButtonClick,
  children 
}: CardProps) {

  // ============================================
  // НАСТРОЙ ЦВЕТА И СТИЛИ!
  // ============================================
  const styles = {
    card: "bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100",
    // Можешь изменить: rounded-xl → rounded-2xl (больше скругление)
    // Или добавить: hover:scale-105 (увеличение при наведении)
    
    imageContainer: "relative w-full h-48 overflow-hidden bg-gray-100",
    // Измени высоту: h-48 → h-64 (выше) или h-40 (ниже)
    
    image: `w-full h-full ${imageMode === 'cover' ? 'object-cover' : 'object-contain'}`,
    
    badge: "absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold",
    // Цвет значка: bg-blue-500 → bg-red-500 (красный)
    
    content: "p-6",
    // Больше отступов: p-6 → p-8
    
    title: "text-xl font-bold text-gray-900 mb-2",
    // Размер заголовка: text-xl → text-2xl (больше)
    
    description: "text-gray-600 mb-4",
    // Цвет текста: text-gray-600 → text-gray-700 (темнее)
    
    button: "w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors font-medium"
    // Измени цвет кнопки: bg-blue-500 → bg-green-500
  };

  return (
    <div className={styles.card}>
      {/* Картинка (если есть) */}
      {image && (
        <div className={styles.imageContainer}>
          <img 
            src={image} 
            alt={title} 
            className={styles.image}
          />
          {/* Значок поверх картинки */}
          {badge && (
            <span className={styles.badge}>
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Контент карточки */}
      <div className={styles.content}>
        {/* Заголовок */}
        <h3 className={styles.title}>
          {title}
        </h3>

        {/* Описание */}
        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}

        {/* Дополнительный контент */}
        {children}

        {/* Кнопка (если нужна) */}
        {buttonText && (
          <button 
            onClick={onButtonClick}
            className={styles.button}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================
// КАК ИСПОЛЬЗОВАТЬ?
// ============================================
//
// 1. Простая карточка:
//    <Card 
//      title="Заголовок"
//      description="Описание карточки"
//    />
//
// 2. С картинкой:
//    <Card 
//      title="Крутой продукт"
//      description="Описание продукта"
//      image="/images/product.jpg"
//    />
//
// 3. С кнопкой:
//    <Card 
//      title="Статья"
//      description="Интересная статья"
//      buttonText="Читать"
//      onButtonClick={() => alert('Клик!')}
//    />
//
// 4. Со значком:
//    <Card 
//      title="Акция"
//      image="/images/sale.jpg"
//      badge="Скидка 50%"
//    />
//
// 5. Сетка карточек:
//    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//      <Card title="Карточка 1" />
//      <Card title="Карточка 2" />
//      <Card title="Карточка 3" />
//    </div>
//
// 6. С обрезкой (по умолчанию):
//    <Card 
//      image="/images/photo.jpg"
//      title="Заголовок"
//    />
//
// 7. БЕЗ обрезки (показать всё):
//    <Card 
//      image="/images/photo.jpg"
//      imageMode="contain"
//      title="Заголовок"
//    />
//
// ============================================