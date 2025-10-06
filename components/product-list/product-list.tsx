'use client';

import { trpc } from '@/utils/trpc';
import { useCategoryStore } from '@/store/category';
import { useViewStore } from '@/store/view';
import { Spinner } from '@heroui/spinner';
import { Pagination } from '@heroui/pagination';
import { Card, CardHeader, CardBody } from '@heroui/card';
import { skipToken } from '@tanstack/react-query';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@heroui/table';
import { useEffect } from 'react';
import { usePaginationStore } from '@/store/per-page';
import Image from 'next/image';

type Product = {
  title: string;
  price: string;
  description: string;
  product_link: string;
  image_url: string;
  characteristics: Record<string, string>;
};

type ProductRow = {
  key: string;
  title: string;
  price: string;
  description: string;
};

type Column = {
  key: keyof ProductRow;
  label: string;
};

export default function ProductList() {
  const { selected } = useCategoryStore();
  const { isTableView } = useViewStore();
  const { page, perPage, setPage, resetPage } = usePaginationStore();

  const { data = [], isLoading } = trpc.product.byCategory.useQuery(
    selected ? { category: selected } : skipToken
  );

  useEffect(() => {
    resetPage();
  }, [selected]);

  if (!selected) return null;
  if (isLoading) return <Spinner />;

  const totalPages = Math.ceil(data.length / perPage);
  const paginated = data.slice((page - 1) * perPage, page * perPage);

  if (isTableView) {
    const columns: Column[] = [
      { key: 'title', label: 'PRODUCT' },
      { key: 'price', label: 'PRICE' },
      { key: 'description', label: 'DESCRIPTION' },
    ];

    const rows: ProductRow[] = paginated.map((product: Product, index: number) => ({
      key: String(index),
      title: product.title,
      price: product.price,
      description: product.description,
    }));

    return (
      <>
        <Table aria-label="Product table">
          <TableHeader columns={columns}>
            {(column: Column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item: ProductRow) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey as keyof ProductRow)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Pagination
          initialPage={page}
          total={totalPages}
          onChange={setPage}
          showControls
          className="mt-6"
        />
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((product: Product) => (
          <Card key={product.title} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{product.price}</p>
              <small className="text-default-500">{selected}</small>
              <h4 className="font-bold text-large">{product.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt={product.title}
                className="object-cover rounded-xl"
                src={product.image_url}
                width={270}
                height={180}
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <Pagination
        initialPage={page}
        total={totalPages}
        onChange={setPage}
        showControls
        className="mt-6 flex justify-center"
      />
    </>
  );
}
