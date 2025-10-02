'use client';

import { Select, SelectItem } from '@heroui/select';
import { trpc } from '@/utils/trpc';
import { useCategoryStore } from '@/store/category';

type CategoryOption = {
  id: string;
  title: string;
};

export default function SelectCategory() {
  const { selected, setSelected } = useCategoryStore();
  const { data = [], isLoading } = trpc.product.list.useQuery();

  if (isLoading) return <p>Loading categories...</p>;

  const categoryOptions: CategoryOption[] = data.map((c) => ({
    id: c.category,
    title: c.category,
  }));

  return (
    <Select
      color="primary"
      className="max-w-xs"
      label="Category"
      placeholder="Select a category"
      items={categoryOptions}
      selectedKeys={selected ? new Set([selected]) : undefined}
      onSelectionChange={(keys) => {
        const key = Array.from(keys)[0];
        if (typeof key === 'string') setSelected(key);
      }}
    >
      {(item) => (
        <SelectItem key={item.id} textValue={item.title} className='capitalize'>
          {item.title}
        </SelectItem>
      )}
    </Select>
  );
}
