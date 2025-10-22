"use client";

import { useState } from "react";
import ComponentPreview from "@/components/showcase/ComponentPreview";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ModalPage() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const modalCode = `"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  illustration?: React.ReactNode;
  showCloseButton?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  illustration,
  showCloseButton = true,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {illustration && (
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-t-2xl">
            {illustration}
          </div>
        )}

        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Закрыть"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          {description && <p className="text-gray-600">{description}</p>}
        </div>

        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Modal (Модальное окно)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Всплывающие окна для важных сообщений и действий
          </p>
        </div>

        {/* Базовое модальное окно */}
        <div className="mb-8">
          <ComponentPreview
            title="Базовое модальное окно"
            description="Простое окно с заголовком и кнопками"
            code={`const [isOpen, setIsOpen] = useState(false);

<Button variant="primary" onClick={() => setIsOpen(true)}>
  Открыть модальное окно
</Button>

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Заголовок окна"
  description="Описание того, что происходит"
>
  <div className="flex gap-3 justify-center">
    <Button variant="outline" onClick={() => setIsOpen(false)}>
      Отмена
    </Button>
    <Button variant="primary" onClick={() => setIsOpen(false)}>
      Подтвердить
    </Button>
  </div>
</Modal>`}
          >
            <Button variant="primary" onClick={() => setIsOpen1(true)}>
              Открыть модальное окно
            </Button>

            <Modal
              isOpen={isOpen1}
              onClose={() => setIsOpen1(false)}
              title="Базовое модальное окно"
              description="Это простое модальное окно с заголовком и описанием"
            >
              <p className="text-gray-600 mb-4">
                Здесь может быть любое содержимое: текст, формы, изображения и другие элементы.
              </p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => setIsOpen1(false)}>
                  Отмена
                </Button>
                <Button variant="primary" onClick={() => setIsOpen1(false)}>
                  Подтвердить
                </Button>
              </div>
            </Modal>
          </ComponentPreview>
        </div>

        {/* С иллюстрацией */}
        <div className="mb-8">
          <ComponentPreview
            title="С иллюстрацией сверху"
            description="Модальное окно с градиентом и иконкой"
            code={`<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Запрос отправлен"
  description="Ваш запрос находится на рассмотрении. Мы уведомим вас, как только он будет одобрен."
  illustration={
    <div className="flex items-center justify-center h-32">
      <div className="text-7xl animate-bounce">🔐</div>
    </div>
  }
>
  <div className="flex gap-3 justify-center">
    <Button variant="outline" onClick={() => setIsOpen(false)}>
      Пропустить
    </Button>
    <Button variant="primary" onClick={() => setIsOpen(false)}>
      Далее
    </Button>
  </div>
</Modal>`}
          >
            <Button variant="primary" onClick={() => setIsOpen2(true)}>
              Открыть с иллюстрацией
            </Button>

            <Modal
              isOpen={isOpen2}
              onClose={() => setIsOpen2(false)}
              title="Запрос отправлен"
              description="Ваш запрос находится на рассмотрении. Мы уведомим вас, как только он будет одобрен."
              illustration={
                <div className="flex items-center justify-center h-32">
                  <div className="text-7xl animate-bounce">🔐</div>
                </div>
              }
            >
              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => setIsOpen2(false)}>
                  Пропустить
                </Button>
                <Button variant="primary" onClick={() => setIsOpen2(false)}>
                  Далее
                </Button>
              </div>
            </Modal>
          </ComponentPreview>
        </div>

        {/* Подтверждение удаления */}
        <div className="mb-8">
          <ComponentPreview
            title="Подтверждение удаления"
            description="Опасное действие с красной кнопкой"
            code={`<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Удалить элемент?"
  description="Это действие нельзя отменить"
>
  <div className="flex gap-3 justify-center">
    <Button variant="outline" onClick={() => setIsOpen(false)}>
      Отмена
    </Button>
    <Button variant="primary" onClick={() => setIsOpen(false)}>
      Удалить
    </Button>
  </div>
</Modal>`}
          >
            <Button variant="primary" onClick={() => setIsOpen3(true)}>
              Удалить элемент
            </Button>

            <Modal
              isOpen={isOpen3}
              onClose={() => setIsOpen3(false)}
              title="Удалить элемент?"
              description="Это действие нельзя отменить. Вы уверены?"
            >
              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => setIsOpen3(false)}>
                  Отмена
                </Button>
                <Button variant="primary" onClick={() => setIsOpen3(false)}>
                  Удалить
                </Button>
              </div>
            </Modal>
          </ComponentPreview>
        </div>

        {/* С формой */}
        <div className="mb-8">
          <ComponentPreview
            title="С формой внутри"
            description="Модальное окно с полями ввода"
            code={`const [taskName, setTaskName] = useState('');
const [taskDesc, setTaskDesc] = useState('');

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Создать задачу"
  description="Заполните информацию о новой задаче"
>
  <div className="space-y-4 mb-4">
    <Input 
      label="Название задачи"
      placeholder="Введите название"
      value={taskName}
      onChange={(e) => setTaskName(e.target.value)}
    />
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Описание
      </label>
      <textarea 
        placeholder="Введите описание"
        value={taskDesc}
        onChange={(e) => setTaskDesc(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  </div>
  <div className="flex gap-3 justify-center">
    <Button variant="outline" onClick={() => setIsOpen(false)}>
      Отмена
    </Button>
    <Button variant="primary" onClick={() => setIsOpen(false)}>
      Создать
    </Button>
  </div>
</Modal>`}
          >
            <Button variant="primary" onClick={() => setIsOpen4(true)}>
              Создать задачу
            </Button>

            <Modal
              isOpen={isOpen4}
              onClose={() => setIsOpen4(false)}
              title="Создать задачу"
              description="Заполните информацию о новой задаче"
            >
              <div className="space-y-4 mb-4">
                <Input
                  label="Название задачи"
                  placeholder="Введите название"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Описание
                  </label>
                  <textarea
                    placeholder="Введите описание"
                    value={taskDesc}
                    onChange={(e) => setTaskDesc(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => setIsOpen4(false)}>
                  Отмена
                </Button>
                <Button variant="primary" onClick={() => setIsOpen4(false)}>
                  Создать
                </Button>
              </div>
            </Modal>
          </ComponentPreview>
        </div>

        {/* Инструкция */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border-2 border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как использовать в своем проекте?
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
                <p className="text-gray-600">
                  Создай{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/Modal.tsx
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
                <p className="text-gray-600">
                  Скопируй весь код из блока ниже и вставь в свой файл
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Импортируй и используй
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-2">
                  {`import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';

export default function MyPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Открыть окно
      </Button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Заголовок"
        description="Описание"
      >
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Отмена
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Подтвердить
          </Button>
        </div>
      </Modal>
    </>
  );
}`}
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="w-full">
                <h3 className="font-semibold text-lg mb-2">
                  Настрой под свой дизайн!
                </h3>
                <p className="text-gray-600 mb-3">
                  Хочешь изменить размер или цвета? Найди в коде:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`// Размер окна:
max-w-md        →    max-w-2xl  (для большого окна)

// Цвет иллюстрации:
from-blue-600 to-blue-700  →  from-purple-600 to-purple-700

// Фон затемнения:
bg-black/50     →    bg-black/70  (темнее)

// Закругление углов:
rounded-2xl     →    rounded-3xl  (больше)`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код Modal */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код Modal"
            description="Скопируй в components/ui/Modal.tsx"
            code={modalCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз ⬇️
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  );
}
