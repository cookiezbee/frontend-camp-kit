"use client";

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
      alert(`Подписка оформлена для: ${email}`);
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
}
