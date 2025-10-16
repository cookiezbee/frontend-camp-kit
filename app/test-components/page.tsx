"use client";

import Button from "@/components/ui/test";

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
                <Button variant="primary" disabled>Primary</Button>
                <Button variant="secondary" disabled>Secondary</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}