/* eslint-disable react/no-unescaped-entities */
'use client';

import ComponentPreview from '@/components/showcase/ComponentPreview';
import Counter from '@/components/ui/Counter';

export default function CounterPage() {
  
  const counterCode = `'use client';
import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

export default function Counter({ 
  initialValue = 0,
  min,
  max,
  step = 1
}: CounterProps) {
  
  const [count, setCount] = useState(initialValue);

  const styles = {
    container: "flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border border-gray-200",
    button: "w-12 h-12 rounded-lg font-bold text-xl transition-all hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
    decreaseButton: "bg-red-500 hover:bg-red-600 text-white",
    increaseButton: "bg-green-500 hover:bg-green-600 text-white",
    display: "text-3xl font-bold text-gray-900 min-w-[80px] text-center",
  };

  const increment = () => {
    setCount(prevCount => {
      const newCount = prevCount + step;
      if (max !== undefined && newCount > max) return prevCount;
      return newCount;
    });
  };

  const decrement = () => {
    setCount(prevCount => {
      const newCount = prevCount - step;
      if (min !== undefined && newCount < min) return prevCount;
      return newCount;
    });
  };

  const isMinReached = min !== undefined && count <= min;
  const isMaxReached = max !== undefined && count >= max;

  return (
    <div className={styles.container}>
      <button
        onClick={decrement}
        disabled={isMinReached}
        className={\`\${styles.button} \${styles.decreaseButton}\`}
      >
        −
      </button>

      <div className={styles.display}>
        {count}
      </div>

      <button
        onClick={increment}
        disabled={isMaxReached}
        className={\`\${styles.button} \${styles.increaseButton}\`}
      >
        +
      </button>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Counter (Счётчик)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Учись работать с состоянием (useState) 
            и создавать компоненты, которые реагируют на действия пользователя.
          </p>
        </div>

        {/* Базовый счётчик */}
        <div className="mb-8">
          <ComponentPreview
            title="Базовый счётчик"
            description="Простой счётчик без ограничений"
            code={`<Counter />`}
          >
            <Counter />
          </ComponentPreview>
        </div>

        {/* С начальным значением */}
        <div className="mb-8">
          <ComponentPreview
            title="С начальным значением"
            description="Счётчик начинается с указанного числа"
            code={`<Counter initialValue={10} />`}
          >
            <Counter initialValue={10} />
          </ComponentPreview>
        </div>

        {/* С ограничениями */}
        <div className="mb-8">
          <ComponentPreview
            title="С ограничениями (минимум и максимум)"
            description="Счётчик не может выйти за указанные пределы"
            code={`<Counter 
  initialValue={5}
  min={0}
  max={10}
/>`}
          >
            <Counter 
              initialValue={5}
              min={0}
              max={10}
            />
          </ComponentPreview>
        </div>

        {/* С шагом */}
        <div className="mb-8">
          <ComponentPreview
            title="С шагом изменения"
            description="Счётчик увеличивается/уменьшается на указанное число"
            code={`<Counter 
  initialValue={0}
  step={5}
/>`}
          >
            <Counter 
              initialValue={0}
              step={5}
            />
          </ComponentPreview>
        </div>

        {/* Примеры использования */}
        <div className="mb-8">
          <ComponentPreview
            title="Практические примеры"
            description="Где можно использовать счётчик?"
            code={`<div>
  <p className="mb-2">Количество товаров:</p>
  <Counter initialValue={1} min={1} max={99} />
</div>

<div>
  <p className="mb-2">Возраст:</p>
  <Counter initialValue={18} min={0} max={120} />
</div>

<div>
  <p className="mb-2">Оценка (0-5):</p>
  <Counter initialValue={3} min={0} max={5} />
</div>`}
          >
            <div>
              <div className="mb-6">
                <p className="mb-2 text-gray-700 font-medium">Количество товаров:</p>
                <Counter initialValue={1} min={1} max={99} />
              </div>
              
              <div className="mb-6">
                <p className="mb-2 text-gray-700 font-medium">Возраст:</p>
                <Counter initialValue={18} min={0} max={120} />
              </div>
              
              <div>
                <p className="mb-2 text-gray-700 font-medium">Оценка (0-5):</p>
                <Counter initialValue={3} min={0} max={5} />
              </div>
            </div>
          </ComponentPreview>
        </div>

        {/* Блок про useState */}
        <div className="mb-8 p-8 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Что такое useState?
          </h3>
          <p className="text-gray-700 mb-4">
            <code className="bg-white px-2 py-1 rounded font-mono text-sm">useState</code> — это React хук, 
            который позволяет компоненту "запоминать" данные.
          </p>
          
          <div className="bg-white p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
{`const [count, setCount] = useState(0);
       ↑       ↑              ↑
    значение  функция    начальное
              изменения  значение`}
            </pre>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>
              <strong className="text-gray-900">count</strong> — текущее значение (например, 5)
            </p>
            <p>
              <strong className="text-gray-900">setCount</strong> — функция для изменения значения
            </p>
            <p>
              <strong className="text-gray-900">useState(0)</strong> — начальное значение (0)
            </p>
          </div>

          <div className="mt-4 p-4 bg-purple-100 rounded-lg">
            <p className="text-sm text-gray-800">
              <strong>Важно:</strong> Когда вызываешь <code className="bg-white px-2 py-1 rounded">setCount(10)</code>, 
              React автоматически обновляет компонент с новым значением. Это магия React!
            </p>
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
                <h3 className="font-semibold text-lg mb-2">Создай файл компонента</h3>
                <p className="text-gray-600 mb-2">
                  Создай файл <code className="bg-gray-100 px-2 py-1 rounded text-sm">components/ui/Counter.tsx</code>
                </p>
                <p className="text-sm text-amber-600 flex items-center gap-1">
                  ⚠️ Не забудь добавить <code className="bg-amber-100 px-2 py-1 rounded">'use client'</code> в начале файла!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Импортируй useState</h3>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto mt-2">
{`'use client';
import { useState } from 'react';`}
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Скопируй код</h3>
                <p className="text-gray-600">
                  Скопируй весь код из блока ниже
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Используй в проекте</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-2">
{`import Counter from '@/components/ui/Counter';

<Counter 
  initialValue={0}
  min={0}
  max={100}
  step={1}
/>`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код компонента Counter"
            description="Скопируй весь этот код в файл components/ui/Counter.tsx"
            code={counterCode}
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