"use client";

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
        `Отправлено:\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`
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
}
