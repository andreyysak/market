'use client'

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Select, SelectItem } from "@heroui/select";
import { NumberInput } from "@heroui/number-input";

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [perPage, setPerPage] = useState<number>(10)

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value);

  const handleChangePerPage = (value: number) => setPerPage(value);

  return (
    <div className="flex justify-between w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        color="primary"
        className="max-w-xs"
        items={siteConfig.catalogItems}
        label="Category"
        placeholder="Select a category"
        value={selectedCategory || undefined}
        onChange={handleSelectionChange}
      >
        {(item) => (
          <SelectItem key={item.href} textValue={item.title} onClick={() => setSelectedCategory(item.title)}>
            {item.title}
          </SelectItem>
        )}
      </Select>

      <NumberInput
        isRequired
        color="danger"
        className="max-w-xs"
        value={perPage}
        onValueChange={handleChangePerPage}
        label="Products per page"
        placeholder="Enter the amount"
      />
    </div>
  );
}
