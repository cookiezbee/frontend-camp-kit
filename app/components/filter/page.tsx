"use client";

import ComponentPreview from "@/components/showcase/ComponentPreview";
import Filter, { FilterState } from "@/components/ui/Filter";
import { useState } from "react";

export default function FilterPage() {
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 10000],
    sortBy: "popular",
  });

  const filterCode = `"use client";

import { useState } from "react";
import Checkbox from "@/components/ui/Checkbox";
import Radio from "@/components/ui/RadioButton";

interface FilterProps {
  onFilterChange?: (filters: FilterState) => void;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  sortBy: string;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState("popular");

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter((c) => c !== category);

    setSelectedCategories(newCategories);

    if (onFilterChange) {
      onFilterChange({
        categories: newCategories,
        priceRange,
        sortBy,
      });
    }
  };

  const handlePriceChange = (type: "min" | "max", value: number) => {
    const newPriceRange: [number, number] =
      type === "min" ? [value, priceRange[1]] : [priceRange[0], value];

    setPriceRange(newPriceRange);

    if (onFilterChange) {
      onFilterChange({
        categories: selectedCategories,
        priceRange: newPriceRange,
        sortBy,
      });
    }
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);

    if (onFilterChange) {
      onFilterChange({
        categories: selectedCategories,
        priceRange,
        sortBy: value,
      });
    }
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 10000]);
    setSortBy("popular");

    if (onFilterChange) {
      onFilterChange({
        categories: [],
        priceRange: [0, 10000],
        sortBy: "popular",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      {/* Заголовок */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-xl font-bold text-gray-900">Фильтры</h2>
        <button
          onClick={resetFilters}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Сбросить
        </button>
      </div>

      {/* Категории (Checkbox) */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Категория</h3>
        <div className="space-y-2">
          <Checkbox
            label="Электроника"
            checked={selectedCategories.includes("electronics")}
            onChange={(checked) => handleCategoryChange("electronics", checked)}
          />
          <Checkbox
            label="Одежда"
            checked={selectedCategories.includes("clothing")}
            onChange={(checked) => handleCategoryChange("clothing", checked)}
          />
          <Checkbox
            label="Книги"
            checked={selectedCategories.includes("books")}
            onChange={(checked) => handleCategoryChange("books", checked)}
          />
          <Checkbox
            label="Спорт"
            checked={selectedCategories.includes("sports")}
            onChange={(checked) => handleCategoryChange("sports", checked)}
          />
          <Checkbox
            label="Дом и сад"
            checked={selectedCategories.includes("home")}
            onChange={(checked) => handleCategoryChange("home", checked)}
          />
        </div>
      </div>

      {/* Ценовой диапазон */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Цена (₽)
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-1">От</label>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  handlePriceChange("min", Number(e.target.value))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-1">До</label>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  handlePriceChange("max", Number(e.target.value))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
              />
            </div>
          </div>
          <div className="relative pt-1">
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange[1]}
              onChange={(e) =>
                handlePriceChange("max", Number(e.target.value))
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Сортировка (Radio) */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Сортировка
        </h3>
        <div className="space-y-2">
          <Radio
            name="sort"
            label="Популярные"
            value="popular"
            checked={sortBy === "popular"}
            onChange={() => handleSortChange("popular")}
          />
          <Radio
            name="sort"
            label="Сначала дешевые"
            value="price-asc"
            checked={sortBy === "price-asc"}
            onChange={() => handleSortChange("price-asc")}
          />
          <Radio
            name="sort"
            label="Сначала дорогие"
            value="price-desc"
            checked={sortBy === "price-desc"}
            onChange={() => handleSortChange("price-desc")}
          />
          <Radio
            name="sort"
            label="Новинки"
            value="newest"
            checked={sortBy === "newest"}
            onChange={() => handleSortChange("newest")}
          />
          <Radio
            name="sort"
            label="По рейтингу"
            value="rating"
            checked={sortBy === "rating"}
            onChange={() => handleSortChange("rating")}
          />
        </div>
      </div>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Filter (Фильтр товаров)
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Компонент для фильтрации товаров с чекбоксами, ценовым диапазоном и
            сортировкой
          </p>
        </div>

        {/* Базовый фильтр */}
        <div className="mb-8">
          <ComponentPreview
            title="Базовый фильтр"
            description="Полный фильтр с категориями, ценой и сортировкой"
            code={`<Filter />`}
          >
            <div className="max-w-md">
              <Filter />
            </div>
          </ComponentPreview>
        </div>

        {/* Фильтр с обработчиком */}
        <div className="mb-8">
          <ComponentPreview
            title="Фильтр с отслеживанием изменений"
            description="Фильтр передаёт данные в родительский компонент"
            code={`const [activeFilters, setActiveFilters] = useState({
  categories: [],
  priceRange: [0, 10000],
  sortBy: "popular",
});

<Filter onFilterChange={(filters) => setActiveFilters(filters)} />

// Активные фильтры:
console.log(activeFilters);`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Filter
                onFilterChange={(filters) => setActiveFilters(filters)}
              />
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Активные фильтры:
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Категории:
                    </p>
                    <p className="text-sm text-gray-600">
                      {activeFilters.categories.length > 0
                        ? activeFilters.categories.join(", ")
                        : "Не выбраны"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Цена:
                    </p>
                    <p className="text-sm text-gray-600">
                      {activeFilters.priceRange[0]} ₽ -{" "}
                      {activeFilters.priceRange[1]} ₽
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Сортировка:
                    </p>
                    <p className="text-sm text-gray-600">
                      {activeFilters.sortBy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ComponentPreview>
        </div>

        {/* Инструкция */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border-2 border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Как использовать?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Создай компонент Filter
                </h3>
                <p className="text-gray-600">
                  Создай{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    components/ui/Filter.tsx
                  </code>{" "}
                  и скопируй код
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Используй на странице с товарами
                </h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`"use client";

import Filter from "@/components/ui/Filter";
import { useState } from "react";

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 10000],
    sortBy: "popular",
  });

  // Фильтрация товаров на основе filters
  const filteredProducts = products.filter((product) => {
    // Фильтр по категории
    if (filters.categories.length > 0 && 
        !filters.categories.includes(product.category)) {
      return false;
    }

    // Фильтр по цене
    if (product.price < filters.priceRange[0] || 
        product.price > filters.priceRange[1]) {
      return false;
    }

    return true;
  });

  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Фильтр слева */}
      <div className="col-span-1">
        <Filter onFilterChange={setFilters} />
      </div>

      {/* Товары справа */}
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}`}
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Настрой под свои категории
                </h3>
                <p className="text-gray-600 mb-3">
                  В компоненте Filter замени категории на свои:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                  {`<Checkbox
  label="Электроника"
  checked={selectedCategories.includes("electronics")}
  onChange={(checked) => handleCategoryChange("electronics", checked)}
/>
<Checkbox
  label="Одежда"
  checked={selectedCategories.includes("clothing")}
  onChange={(checked) => handleCategoryChange("clothing", checked)}
/>`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Как работает */}
        <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Что включает фильтр?
          </h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">
                1. Категории (Checkbox)
              </p>
              <p>Множественный выбор категорий через чекбоксы</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                2. Ценовой диапазон
              </p>
              <p>Два input (от/до) + слайдер для выбора максимальной цены</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                3. Сортировка (Radio)
              </p>
              <p>
                Единственный выбор: популярные, по цене, новинки, по рейтингу
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">4. Кнопка сброса</p>
              <p>Очищает все фильтры одним кликом</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                5. Callback onFilterChange
              </p>
              <p>Передаёт текущее состояние фильтров в родительский компонент</p>
            </div>
          </div>
        </div>

        {/* Полный код */}
        <div className="mt-12">
          <ComponentPreview
            title="Полный код Filter"
            description="Скопируй в components/ui/Filter.tsx"
            code={filterCode}
          >
            <div className="text-center text-gray-500 py-8">
              ⬇️ Прокрути вниз, чтобы скопировать код ⬇️
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  );
}
