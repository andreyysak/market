'use client'

import { useSearchStore } from "@/store/search"
import { normalizeProduct } from "@/utils/normalizeProduct";
import { trpc } from "@/utils/trpc";
import { Card } from "@heroui/card";
import { Spinner } from "@heroui/spinner";
import { skipToken } from "@tanstack/react-query";


export default function SearchResult() {
  const { query } = useSearchStore()
  const { data = [], isLoading } = trpc.product.search.useQuery(
    query.length >= 2 ? { query } : skipToken
  );

  console.log(data)

  if (!query) return null;
  if (isLoading) return <Spinner variant="wave" size="lg" className="flex justify-center mt-10" />;

  const normalized = data.map(normalizeProduct);

  return (
    <div className="absolute z-10 mt-2 w-full max-h-[300px] overflow-y-auto bg-white dark:bg-black rounded-lg shadow-lg border border-default-200">
      <div className="grid grid-cols-1 gap-2 p-2">
        {normalized.map((product, index) => (
          <Card
            key={`${product.product_link}-${index}`}
            className="p-2 flex flex-row items-center justify-between cursor-pointer"
          >
            <img src={product.image_url} alt={product.title} className="h-12 w-12 object-cover rounded-md" />
            <h4 className="font-bold text-sm truncate max-w-[60%]">{product.title}</h4>
            <p className="text-xs text-default-500">{product.price}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}