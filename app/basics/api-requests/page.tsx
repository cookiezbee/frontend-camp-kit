/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import ComponentPreview from "@/components/showcase/ComponentPreview";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function APIRequestsPage() {
  // GET запрос
  const [getResult, setGetResult] = useState<any>(null);
  const [getLoading, setGetLoading] = useState(false);

  // POST запрос
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postResult, setPostResult] = useState<any>(null);
  const [postLoading, setPostLoading] = useState(false);

  // PUT запрос
  const [putId, setPutId] = useState("1");
  const [putTitle, setPutTitle] = useState("");
  const [putResult, setPutResult] = useState<any>(null);
  const [putLoading, setPutLoading] = useState(false);

  // DELETE запрос
  const [deleteId, setDeleteId] = useState("1");
  const [deleteResult, setDeleteResult] = useState<any>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // GET - получение данных
  const handleGet = async () => {
    setGetLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      setGetResult(data);
    } catch (error) {
      setGetResult({ error: "Ошибка при загрузке данных" });
    } finally {
      setGetLoading(false);
    }
  };

  // POST - создание данных
  const handlePost = async () => {
    setPostLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
            userId: 1,
          }),
        }
      );
      const data = await response.json();
      setPostResult(data);
    } catch (error) {
      setPostResult({ error: "Ошибка при создании" });
    } finally {
      setPostLoading(false);
    }
  };

  // PUT - обновление данных
  const handlePut = async () => {
    setPutLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${putId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: putId,
            title: putTitle,
            body: "Updated body",
            userId: 1,
          }),
        }
      );
      const data = await response.json();
      setPutResult(data);
    } catch (error) {
      setPutResult({ error: "Ошибка при обновлении" });
    } finally {
      setPutLoading(false);
    }
  };

  // DELETE - удаление данных
  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${deleteId}`,
        {
          method: "DELETE",
        }
      );
      setDeleteResult({ success: true, message: "Удалено успешно!" });
    } catch (error) {
      setDeleteResult({ error: "Ошибка при удалении" });
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🌐 API Запросы
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Научись отправлять GET, POST, PUT и DELETE запросы на сервер
          </p>
        </div>

        {/* Что такое API */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Что такое API запросы?
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>API (Application Programming Interface)</strong> — это способ общения фронтенда с сервером (бэкендом). 
            Фронтенд отправляет запрос → сервер обрабатывает → возвращает ответ.
          </p>

          <div className="bg-blue-50 rounded border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-900">
              <strong>💡 Зачем нужно:</strong> Получать данные с сервера (список товаров), отправлять формы (регистрация), обновлять данные (редактирование профиля), удалять записи.
            </p>
          </div>

          <h3 className="font-bold text-gray-900 mb-3 text-xl">4 основных типа запросов:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>GET</strong> — получить данные (прочитать)</li>
            <li><strong>POST</strong> — создать данные (добавить новое)</li>
            <li><strong>PUT</strong> — обновить данные (изменить существующее)</li>
            <li><strong>DELETE</strong> — удалить данные</li>
          </ul>
        </section>

        {/* GET запрос */}
        <div className="mb-8">
          <ComponentPreview
            title="GET - Получение данных"
            description="Запроси данные с сервера. Нажми кнопку, чтобы получить пост №1"
            code={`const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);

const handleGet = async () => {
  setLoading(true);
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    setLoading(false);
  }
};

<Button onClick={handleGet} disabled={loading}>
  {loading ? 'Загрузка...' : 'Получить данные'}
</Button>

{data && (
  <div>
    <h3>{data.title}</h3>
    <p>{data.body}</p>
  </div>
)}`}
          >
            <div className="w-full space-y-4">
              <Button
                variant="primary"
                size="md"
                onClick={handleGet}
                disabled={getLoading}
              >
                {getLoading ? "Загрузка..." : "Получить данные (GET)"}
              </Button>

              {getResult && (
                <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Результат:</h3>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                    {JSON.stringify(getResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </ComponentPreview>
        </div>

        {/* POST запрос */}
        <div className="mb-8">
          <ComponentPreview
            title="POST - Создание данных"
            description="Отправь данные на сервер для создания нового поста"
            code={`const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [result, setResult] = useState(null);

const handlePost = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
    }
  );
  const data = await response.json();
  setResult(data);
};

<Input 
  placeholder="Заголовок"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
<Input 
  placeholder="Текст"
  value={body}
  onChange={(e) => setBody(e.target.value)}
/>
<Button onClick={handlePost}>
  Создать (POST)
</Button>`}
          >
            <div className="w-full space-y-4">
              <Input
                placeholder="Заголовок поста"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
              <Input
                placeholder="Текст поста"
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
              />
              <Button
                variant="primary"
                size="md"
                onClick={handlePost}
                disabled={postLoading || !postTitle || !postBody}
              >
                {postLoading ? "Отправка..." : "Создать (POST)"}
              </Button>

              {postResult && (
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">
                    ✅ Создано успешно!
                  </h3>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                    {JSON.stringify(postResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </ComponentPreview>
        </div>

        {/* PUT запрос */}
        <div className="mb-8">
          <ComponentPreview
            title="PUT - Обновление данных"
            description="Обнови существующие данные на сервере"
            code={`const [id, setId] = useState('1');
const [title, setTitle] = useState('');
const [result, setResult] = useState(null);

const handlePut = async () => {
  const response = await fetch(
    \`https://jsonplaceholder.typicode.com/posts/\${id}\`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        title: title,
        body: 'Updated body',
        userId: 1,
      }),
    }
  );
  const data = await response.json();
  setResult(data);
};

<Input 
  placeholder="ID поста"
  value={id}
  onChange={(e) => setId(e.target.value)}
/>
<Input 
  placeholder="Новый заголовок"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
<Button onClick={handlePut}>
  Обновить (PUT)
</Button>`}
          >
            <div className="w-full space-y-4">
              <Input
                placeholder="ID поста (например: 1)"
                value={putId}
                onChange={(e) => setPutId(e.target.value)}
              />
              <Input
                placeholder="Новый заголовок"
                value={putTitle}
                onChange={(e) => setPutTitle(e.target.value)}
              />
              <Button
                variant="secondary"
                size="md"
                onClick={handlePut}
                disabled={putLoading || !putId || !putTitle}
              >
                {putLoading ? "Обновление..." : "Обновить (PUT)"}
              </Button>

              {putResult && (
                <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
                  <h3 className="font-bold text-yellow-900 mb-2">
                    ✏️ Обновлено успешно!
                  </h3>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                    {JSON.stringify(putResult, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </ComponentPreview>
        </div>

        {/* DELETE запрос */}
        <div className="mb-8">
          <ComponentPreview
            title="DELETE - Удаление данных"
            description="Удали запись с сервера по ID"
            code={`const [id, setId] = useState('1');
const [result, setResult] = useState(null);

const handleDelete = async () => {
  const response = await fetch(
    \`https://jsonplaceholder.typicode.com/posts/\${id}\`,
    {
      method: 'DELETE',
    }
  );
  setResult({ success: true, message: 'Удалено!' });
};

<Input 
  placeholder="ID поста"
  value={id}
  onChange={(e) => setId(e.target.value)}
/>
<Button onClick={handleDelete}>
  Удалить (DELETE)
</Button>`}
          >
            <div className="w-full space-y-4">
              <Input
                placeholder="ID поста для удаления (например: 1)"
                value={deleteId}
                onChange={(e) => setDeleteId(e.target.value)}
              />
              <Button
                variant="outline"
                size="md"
                onClick={handleDelete}
                disabled={deleteLoading || !deleteId}
              >
                {deleteLoading ? "Удаление..." : "Удалить (DELETE)"}
              </Button>

              {deleteResult && (
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                  <h3 className="font-bold text-red-900 mb-2">
                    🗑️ Удалено успешно!
                  </h3>
                  <p className="text-red-700">{deleteResult.message}</p>
                </div>
              )}
            </div>
          </ComponentPreview>
        </div>

        {/* Обработка ошибок */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Обработка ошибок
          </h2>

          <p className="text-gray-600 mb-6">
            Всегда оборачивай API запросы в <code className="bg-gray-100 px-2 py-1 rounded text-sm">try/catch</code> для обработки ошибок:
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`try {
  const response = await fetch('https://api.example.com/data');
  
  // Проверяем статус ответа
  if (!response.ok) {
    throw new Error('Ошибка сервера');
  }
  
  const data = await response.json();
  console.log(data);
  
} catch (error) {
  console.error('Ошибка:', error);
  alert('Не удалось загрузить данные');
}`}
          </pre>
        </section>

        {/* Важные моменты */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Важные моменты
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 mb-2">⏳ Async/Await</h3>
              <p className="text-gray-700 text-sm">
                Всегда используй <code className="bg-gray-100 px-1 rounded">async/await</code> для API запросов, 
                чтобы дождаться ответа от сервера.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 mb-2">📋 Content-Type</h3>
              <p className="text-gray-700 text-sm">
                При отправке данных (POST, PUT) указывай заголовок{" "}
                <code className="bg-gray-100 px-1 rounded">&#39;Content-Type&#39;: &#39;application/json&#39;</code>
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 mb-2">🔄 Loading состояние</h3>
              <p className="text-gray-700 text-sm">
                Показывай пользователю индикатор загрузки, пока идёт запрос.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 mb-2">⚠️ Обработка ошибок</h3>
              <p className="text-gray-700 text-sm">
                Всегда обрабатывай ошибки через <code className="bg-gray-100 px-1 rounded">try/catch</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Полный пример */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Полный пример компонента с API
          </h2>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      
      if (!response.ok) {
        throw new Error('Ошибка сервера');
      }
      
      const result = await response.json();
      setData(result);
      
    } catch (err) {
      setError(err.message);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={fetchData} disabled={loading}>
        {loading ? 'Загрузка...' : 'Загрузить данные'}
      </Button>

      {error && (
        <p className="text-red-500">Ошибка: {error}</p>
      )}

      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}`}
          </pre>
        </section>

        {/* Тестовый API */}
        <section className="mt-12 bg-blue-50 rounded-2xl shadow-lg p-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            📚 Тестовый API для практики
          </h2>

          <p className="text-gray-700 mb-4">
            Для тестирования используется <strong>JSONPlaceholder</strong> — бесплатный API для обучения:
          </p>

          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="text-gray-700 font-mono text-sm">
              https://jsonplaceholder.typicode.com
            </p>
          </div>

          <p className="text-gray-700 mb-4">
            <strong>Доступные эндпоинты:</strong>
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">/posts</code> — статьи</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">/users</code> — пользователи</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">/comments</code> — комментарии</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">/todos</code> — задачи</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
