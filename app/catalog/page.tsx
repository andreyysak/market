import SelectCategory from "@/components/catalog/select";
import PerPageInput from "@/components/catalog/perpage-input";
import SwitchView from "@/components/catalog/switch-view";

export default function CatalogPage() {
  return (
    <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap gap-4">
      <SelectCategory />
      <PerPageInput />
      <SwitchView />      
    </div>
  );
}
