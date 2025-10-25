"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import LoginForm from "@/components/ui/LoginForm";
import RegisterForm from "@/components/ui/RegisterForm";
import ContactForm from "@/components/ui/ContactForm";
import SubscribeForm from "@/components/ui/SubscribeForm";

export default function FormsPage() {
  const loginFormCode = `"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";

interface LoginFormProps {
  onSubmit?: (data: { email: string; password: string; remember: boolean }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password, remember });
    } else {
      alert(\`Вход:\\nEmail: \${email}\\nЗапомнить: \${remember ? "Да" : "Нет"}\`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <Input
        type="email"
        label="Email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        type="password"
        label="Пароль"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Checkbox
        label="Запомнить меня"
        checked={remember}
        onChange={setRemember}
      />

      <Button variant="primary" size="md" fullWidth>
        Войти
      </Button>

      <p className="text-center text-sm text-gray-600">
        <a href="#" className="text-blue-500 hover:underline">
          Забыли пароль?
        </a>
      </p>
    </form>
  );
}`;

  const registerFormCode = `"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";

interface RegisterFormProps {
  onSubmit?: (data: {
    name: string;
    email: string;
    password: string;
    agree: boolean;
  }) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, email, password, agree });
    } else {
      alert(\`Регистрация:\\nИмя: \${name}\\nEmail: \${email}\`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <Input
        label="Имя"
        placeholder="Иван Петров"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Input
        type="email"
        label="Email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        type="password"
        label="Пароль"
        placeholder="Минимум 8 символов"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Checkbox
        label="Я согласен с условиями использования"
        checked={agree}
        onChange={setAgree}
      />

      <Button variant="primary" size="md" fullWidth disabled={!agree}>
        Зарегистрироваться
      </Button>
    </form>
  );
}`;

  const contactFormCode = `"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface ContactFormProps {
  onSubmit?: (data: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, email, message });
    } else {
      alert(
        \`Отправлено:\\nИмя: \${name}\\nEmail: \${email}\\nСообщение: \${message}\`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <Input
        label="Ваше имя"
        placeholder="Иван"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Input
        type="email"
        label="Email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Сообщение <span className="text-red-500">*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Напишите ваше сообщение..."
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg 
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none
            transition-all"
        />
      </div>

      <Button variant="primary" size="md" fullWidth>
        Отправить
      </Button>
    </form>
  );
}`;

  const subscribeFormCode = `"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface SubscribeFormProps {
  onSubmit?: (email: string) => void;
}

export default function SubscribeForm({ onSubmit }: SubscribeFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    } else {
      alert(\`Подписка оформлена для: \${email}\`);
    }
    setEmail(""); // Очищаем поле после отправки
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <Input
        type="email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Button variant="primary" size="md" fullWidth>
        Подписаться
      </Button>
    </form>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Формы (Forms)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовые компоненты форм для регистрации, входа, обратной связи и подписки
          </p>
        </div>

        {/* Форма входа */}
        <div className="mb-8">
          <ComponentPreview
            title="LoginForm - Форма входа"
            description="Готовая форма для входа в аккаунт"
            code={`import LoginForm from '@/components/forms/LoginForm';

<LoginForm 
  onSubmit={(data) => {
    console.log('Данные входа:', data);
  }}
/>`}
          >
            <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Вход
              </h3>
              <LoginForm />
            </div>
          </ComponentPreview>
        </div>

        {/* Форма регистрации */}
        <div className="mb-8">
          <ComponentPreview
            title="RegisterForm - Форма регистрации"
            description="Готовая форма для регистрации нового пользователя"
            code={`import RegisterForm from '@/components/forms/RegisterForm';

<RegisterForm 
  onSubmit={(data) => {
    console.log('Данные регистрации:', data);
  }}
/>`}
          >
            <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Регистрация
              </h3>
              <RegisterForm />
            </div>
          </ComponentPreview>
        </div>

        {/* Форма связаться с нами */}
        <div className="mb-8">
          <ComponentPreview
            title="ContactForm - Форма обратной связи"
            description="Готовая форма для отправки сообщения"
            code={`import ContactForm from '@/components/forms/ContactForm';

<ContactForm 
  onSubmit={(data) => {
    console.log('Данные сообщения:', data);
  }}
/>`}
          >
            <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Связаться с нами
              </h3>
              <ContactForm />
            </div>
          </ComponentPreview>
        </div>

        {/* Форма подписки */}
        <div className="mb-8">
          <ComponentPreview
            title="SubscribeForm - Форма подписки"
            description="Готовая форма для подписки на рассылку"
            code={`import SubscribeForm from '@/components/forms/SubscribeForm';

<SubscribeForm 
  onSubmit={(email) => {
    console.log('Email для подписки:', email);
  }}
/>`}
          >
            <div className="w-full max-w-md mx-auto bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                📧 Подписка на новости
              </h3>
              <p className="text-gray-700 text-center mb-4">
                Подпишитесь на нашу рассылку и получайте последние новости!
              </p>
              <SubscribeForm />
            </div>
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
                  Создай папку для форм
                </h3>
                <p className="text-gray-600 mb-2">
                  Создай папку{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/forms/
                  </code>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Создай файлы компонентов
                </h3>
                <p className="text-gray-600">
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    LoginForm.tsx
                  </code>
                  ,{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    RegisterForm.tsx
                  </code>
                  ,{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    ContactForm.tsx
                  </code>
                  ,{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    SubscribeForm.tsx
                  </code>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Скопируй код</h3>
                <p className="text-gray-600">
                  Скопируй код каждой формы из блоков ниже
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Импортируй и используй
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mt-2">
                  {`import LoginForm from '@/components/forms/LoginForm';

export default function MyPage() {
  const handleLogin = (data) => {
    console.log('Вход:', data);
    // Здесь отправка на сервер
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Полный код LoginForm */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код LoginForm"
            description="Скопируй в components/forms/LoginForm.tsx"
            code={loginFormCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз ⬇️
            </div>
          </ComponentPreview>
        </div>

        {/* Полный код RegisterForm */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код RegisterForm"
            description="Скопируй в components/forms/RegisterForm.tsx"
            code={registerFormCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз ⬇️
            </div>
          </ComponentPreview>
        </div>

        {/* Полный код ContactForm */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код ContactForm"
            description="Скопируй в components/forms/ContactForm.tsx"
            code={contactFormCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз ⬇️
            </div>
          </ComponentPreview>
        </div>

        {/* Полный код SubscribeForm */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код SubscribeForm"
            description="Скопируй в components/forms/SubscribeForm.tsx"
            code={subscribeFormCode}
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
