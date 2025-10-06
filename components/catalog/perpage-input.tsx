'use client'

import { usePaginationStore } from "@/store/per-page";
import { NumberInput } from "@heroui/number-input";

export default function PerPageInput() {
  const { perPage, setPerPage } = usePaginationStore()

  return (
    <NumberInput
      isRequired
      color="danger"
      className="max-w-xs"
      value={perPage}
      onValueChange={(value) => setPerPage(value)}
      label="Products per page"
      placeholder="Enter the amount"
    />
  )
}