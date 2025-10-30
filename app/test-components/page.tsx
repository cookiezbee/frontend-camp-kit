"use client";

import Button from "@/components/ui/Button";
import Header from "@/components/ui/test";

import Image from "next/image";

export default function TestComponentsPage() {

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Тестовая зона
          </h3>

          {/* ТЕСТИРУЙ ЗДЕСЬ */}
          <div className="space-y-6">
            <div>
              <div className="flex gap-4 flex-wrap items-center">
                <Header 
  logo={
    <div className="flex items-center gap-2">
      <div className="text-3xl">🚀</div>
      <span className="text-xl font-bold text-gray-900">MyApp</span>
    </div>
  }
  navigation={[
    { type: "link", label: "Главная", href: "/" },
    { 
      type: "dropdown",
      label: "Услуги",
      items: [
        { type: "link", label: (
      <div className="flex items-center gap-2">
        <Image 
      src="/icons/check.svg" 
      alt="Logo" 
      width={40} 
      height={40}
    />
        <span>Главная</span>
      </div>
    ), href: "/services/web" },
        { type: "link", label: "Дизайн", href: "/services/design" },
      ]
    },
  ]}
  actions={
    <>
      <Button variant="secondary" size="sm">Войти</Button>
      <Button variant="primary" size="sm">Регистрация</Button>
    </>
  }
/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}