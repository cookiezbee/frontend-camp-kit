// ============================================
// КОМПОНЕНТ: СЧЁТЧИК (Counter)
// ============================================
// Интерактивный счётчик с кнопками + и -
// Твой первый компонент с состоянием (useState)!
// ============================================

'use client';
import { useState } from 'react';

interface CounterProps {
  initialValue?: number;    // Начальное значение (необязательно)
  min?: number;             // Минимальное значение (необязательно)
  max?: number;             // Максимальное значение (необязательно)
  step?: number;            // Шаг изменения (необязательно)
}

export default function Counter({ 
  initialValue = 0,
  min,
  max,
  step = 1
}: CounterProps) {
  
  // ============================================
  // СОСТОЯНИЕ (STATE) - ВАЖНО!
  // ============================================
  // useState - это React хук для хранения данных
  // count - текущее значение
  // setCount - функция для изменения значения
  const [count, setCount] = useState(initialValue);

  // ============================================
  // НАСТРОЙ ЦВЕТА И СТИЛИ!
  // ============================================
  const styles = {
    container: "flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border border-gray-200",
    // Измени: gap-4 → gap-6 (больше расстояние между элементами)
    
    button: "w-12 h-12 rounded-lg font-bold text-xl transition-all hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
    // Размер кнопок: w-12 h-12 → w-14 h-14 (больше)
    
    decreaseButton: "bg-red-500 hover:bg-red-600 text-white",
    // Цвет кнопки минус: bg-red-500 → bg-orange-500
    
    increaseButton: "bg-green-500 hover:bg-green-600 text-white",
    // Цвет кнопки плюс: bg-green-500 → bg-blue-500
    
    display: "text-3xl font-bold text-gray-900 min-w-[80px] text-center",
    // Размер числа: text-3xl → text-4xl (больше)
  };

  // ============================================
  // ФУНКЦИИ ДЛЯ ИЗМЕНЕНИЯ СЧЁТЧИКА
  // ============================================
  
  // Увеличить счётчик
  const increment = () => {
    setCount(prevCount => {
      const newCount = prevCount + step;
      // Проверяем максимум
      if (max !== undefined && newCount > max) return prevCount;
      return newCount;
    });
  };

  // Уменьшить счётчик
  const decrement = () => {
    setCount(prevCount => {
      const newCount = prevCount - step;
      // Проверяем минимум
      if (min !== undefined && newCount < min) return prevCount;
      return newCount;
    });
  };

  // Проверяем, достигли ли лимитов
  const isMinReached = min !== undefined && count <= min;
  const isMaxReached = max !== undefined && count >= max;

  return (
    <div className={styles.container}>
      {/* Кнопка МИНУС */}
      <button
        onClick={decrement}
        disabled={isMinReached}
        className={`${styles.button} ${styles.decreaseButton}`}
      >
        −
      </button>

      {/* СЧЁТЧИК */}
      <div className={styles.display}>
        {count}
      </div>

      {/* Кнопка ПЛЮС */}
      <button
        onClick={increment}
        disabled={isMaxReached}
        className={`${styles.button} ${styles.increaseButton}`}
      >
        +
      </button>
    </div>
  );
}

// ============================================
// КАК ИСПОЛЬЗОВАТЬ?
// ============================================
//
// 1. Базовый счётчик:
//    <Counter />
//
// 2. С начальным значением:
//    <Counter initialValue={10} />
//
// 3. С ограничениями (минимум и максимум):
//    <Counter min={0} max={10} />
//
// 4. С шагом:
//    <Counter step={5} />
//    (будет считать: 0, 5, 10, 15...)
//
// 5. Полный пример:
//    <Counter 
//      initialValue={5}
//      min={0}
//      max={20}
//      step={2}
//    />
//
// ============================================
// ЧТО ТАКОЕ useState?
// ============================================
//
// useState - это способ "запомнить" данные в React
// 
// const [count, setCount] = useState(0);
//        ↑       ↑              ↑
//     значение  функция    начальное
//               изменения  значение
//
// Когда вызываешь setCount(5), React:
// 1. Обновляет значение count на 5
// 2. Перерисовывает компонент с новым значением
//
// Это МАГИЯ React!
//
// ============================================