'use client'

import { Select, SelectItem } from "@heroui/select";
import { siteConfig } from "@/config/site";
import { useState } from "react";

export default function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value);

  
  return (
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
  )
}