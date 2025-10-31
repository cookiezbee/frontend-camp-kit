"use client";

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
}
