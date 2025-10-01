'use client'

import { Switch } from "@heroui/switch";
import { cn } from "@heroui/theme";
import { useState } from "react";

export default function SwitchView() {
  const [isTableView, setIsTableView] = useState(false); // false = grid, true = table

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => setIsTableView(e.target.checked)

  return (
    <Switch
      isSelected={isTableView}
      onChange={handleSwitchChange}
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
        <p className="text-tiny text-default-400">
          {isTableView
            ? "View products in a structured table format for quick comparison and sorting."
            : "Explore products in a visual grid layout with rich cards and imagery."}
        </p>
      </div>
    </Switch>
  );
}
