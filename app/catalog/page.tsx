'use client'

import { siteConfig } from "@/config/site";
import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        color="danger"
        className="max-w-xs"
        items={siteConfig.catalogItems}
        label="Category"
        placeholder="Select a category"
        onChange={handleSelectionChange}
      >
        {(item) => (
          <SelectItem key={item.href} textValue={item.title} onClick={() => setSelectedCategory(item.title)}>
            {item.title}
          </SelectItem>
        )}
      </Select>
    </div>
  );
}
