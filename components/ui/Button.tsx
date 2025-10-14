// ============================================
// КОМПОНЕНТ: КНОПКА (Button)
// ============================================
// Универсальная кнопка с разными стилями
// ============================================

interface ButtonProps {
  children: React.ReactNode; // Текст кнопки
  variant?: "primary" | "secondary" | "danger"; // Стиль кнопки
  size?: "sm" | "md" | "lg"; // Размер кнопки
  onClick?: () => void; // Что делать при клике
  disabled?: boolean; // Неактивная кнопка?
}

export default function Button({
  children,
  variant = "primary", // По умолчанию primary
  size = "md", // По умолчанию средний размер
  onClick,
  disabled = false,
}: ButtonProps) {
  // ============================================
  // НАСТРОЙ ЦВЕТА ПОД СВОЙ ДИЗАЙН!
  // ============================================
  const colors = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    // 💡 Хочешь зеленую? Замени blue на green

    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    // 💡 Можешь сделать серой: bg-slate-200

    danger: "bg-red-500 hover:bg-red-600 text-white",
    // 💡 Или оранжевой: bg-orange-500
  };

  // ============================================
  // НАСТРОЙ РАЗМЕРЫ
  // ============================================
  const sizes = {
    sm: "px-3 py-1.5 text-sm", // Маленькая
    md: "px-5 py-2.5 text-base", // Средняя
    lg: "px-6 py-3 text-lg", // Большая
  };

  // ============================================
  // БАЗОВЫЕ СТИЛИ
  // ============================================
  const baseStyles =
    "font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md";

  // Стиль для неактивной кнопки
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed hover:scale-100"
    : "hover:scale-105 active:scale-95";

  return (
    <button
      className={`${baseStyles} ${colors[variant]} ${sizes[size]} ${disabledStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// ============================================
// КАК ИСПОЛЬЗОВАТЬ?
// ============================================
//
// 1. Импортируй компонент:
//    import Button from '@/components/ui/Button';
//
// 2. Используй в своем коде:
//    <Button variant="primary" size="md">
//      Нажми меня!
//    </Button>
//
// 3. Варианты:
//    <Button variant="primary">Синяя кнопка</Button>
//    <Button variant="secondary">Серая кнопка</Button>
//    <Button variant="danger">Красная кнопка</Button>
//
// 4. Размеры:
//    <Button size="sm">Маленькая</Button>
//    <Button size="md">Средняя</Button>
//    <Button size="lg">Большая</Button>
//
// 5. С действием:
//    <Button onClick={() => alert('Привет!')}>
//      Нажми меня
//    </Button>
//
// 6. Неактивная:
//    <Button disabled>Не работает</Button>
//
// ============================================
