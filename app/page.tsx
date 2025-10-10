import Search from "@/components/home/search";
import SearchResult from "@/components/home/search-result";

export default function Home() {
  return (
    <div className="relative">
      <Search />
      <SearchResult />
    </div>
  );
}
