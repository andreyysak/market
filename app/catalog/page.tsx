'use client'

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Select, SelectItem } from "@heroui/select";
import { NumberInput } from "@heroui/number-input";
import { Switch } from "@heroui/switch"
import { cn } from "@heroui/theme";

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [perPage, setPerPage] = useState<number>(10)

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value);

  const handleChangePerPage = (value: number) => setPerPage(value);

  return (
    <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap gap-4">
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

      <Switch
        classNames={{
          base: cn(
            "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
            "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
            "data-[selected=true]:border-primary",
          ),
          wrapper: "p-0 h-4 overflow-visible",
          thumb: cn(
            "w-6 h-6 border-2 shadow-lg",
            "group-data-[hover=true]:border-primary",
            "group-data-[selected=true]:ms-6",
            "group-data-[pressed=true]:w-7",
            "group-data-pressed:group-data-selected:ms-4",
          ),
        }}
      >
        <div className="flex flex-col gap-1">
          <p className="text-medium">Toggle product view</p>
        </div>
      </Switch>
    </div>
  );
}
