'use client'

import { NumberInput } from "@heroui/number-input";
import { usePerPageStore } from "@/store/per-page";

export default function PerPageInput() {
  const { perPage, setPerPage } = usePerPageStore()

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