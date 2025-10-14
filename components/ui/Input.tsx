// ============================================
// КОМПОНЕНТ: ПОЛЕ ВВОДА (Input)
// ============================================
// Универсальное поле ввода для форм
// Поддерживает разные типы: text, email, password и т.д.
// ============================================

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;           // Подсказка в поле
  label?: string;                 // Подпись над полем
  value?: string;                 // Значение
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;                 // Текст ошибки
  disabled?: boolean;             // Неактивное поле
  required?: boolean;             // Обязательное поле
}

export default function Input({ 
  type = 'text',
  placeholder,
  label,
  value,
  onChange,
  error,
  disabled = false,
  required = false
}: InputProps) {

  // ============================================
  // НАСТРОЙ ЦВЕТА И СТИЛИ!
  // ============================================
  const styles = {
    container: "w-full",
    
    label: "block text-sm font-medium text-gray-700 mb-2",
    // Цвет подписи: text-gray-700 → text-gray-900 (темнее)
    
    input: `w-full px-4 py-2 border rounded-lg transition-all
      ${error 
        ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200' 
        : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
      }
      ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
      outline-none`,
    // Цвет границы: border-gray-300 → border-gray-400 (темнее)
    // Цвет фокуса: focus:border-blue-500 → focus:border-green-500
    
    error: "mt-1 text-sm text-red-600",
    // Цвет ошибки: text-red-600 → text-red-500 (светлее)
    
    required: "text-red-500 ml-1"
  };

  return (
    <div className={styles.container}>
      {/* Подпись (label) */}
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      {/* Поле ввода */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={styles.input}
      />

      {/* Текст ошибки */}
      {error && (
        <p className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}

// ============================================
// КАК ИСПОЛЬЗОВАТЬ?
// ============================================
//
// 1. Простое поле:
//    <Input placeholder="Введите имя" />
//
// 2. С подписью:
//    <Input 
//      label="Имя"
//      placeholder="Введите ваше имя"
//    />
//
// 3. Email:
//    <Input 
//      type="email"
//      label="Email"
//      placeholder="example@mail.com"
//    />
//
// 4. Пароль:
//    <Input 
//      type="password"
//      label="Пароль"
//      placeholder="Введите пароль"
//    />
//
// 5. С обработкой изменений:
//    const [name, setName] = useState('');
//    
//    <Input 
//      value={name}
//      onChange={(e) => setName(e.target.value)}
//    />
//
// 6. С ошибкой:
//    <Input 
//      label="Email"
//      error="Некорректный email"
//    />
//
// 7. Обязательное поле:
//    <Input 
//      label="Имя"
//      required
//    />
//
// ============================================