import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

async function CabinList({ filter }) {
  noStore();

  const cabins = await getCabins();
  console.log(cabins);

  if (!cabins.length) return null;

  let displayedCabins;
  if (filter === "all") {
    displayedCabins = cabins;
  }
  if (filter === "small") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 9);
  }
  if (filter === "medium") {
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 10 && cabin.maxCapacity < 100,
    );
  }
  if (filter === "large") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity > 30);
  }
  return (
    <div className="grid grid-cols-2 gap-8">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
