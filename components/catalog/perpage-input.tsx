'use client'

import { useState } from "react";
import { NumberInput } from "@heroui/number-input";

export default function PerPageInput() {
  const [perPage, setPerPage] = useState<number>(10)

  const handleChangePerPage = (value: number) => setPerPage(value);

  return (
    <NumberInput
      isRequired
      color="danger"
      className="max-w-xs"
      value={perPage}
      onValueChange={handleChangePerPage}
      label="Products per page"
      placeholder="Enter the amount"
    />
  )
}