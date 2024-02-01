import HorizontalScroll from "./components/HorizontalScroll";
import { ThickArrowDownIcon, ThickArrowUpIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          <ThickArrowDownIcon
            style={{ height: "45px", width: "45px" }}
            className="bouncing-icon"
          />
        </span>
      </div>
      <HorizontalScroll />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          <ThickArrowUpIcon
            style={{ height: "45px", width: "45px" }}
            className="bouncing-icon"
          />
        </span>
      </div>
    </main>
  );
}
