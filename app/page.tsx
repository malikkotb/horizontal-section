import HorizontalScroll from "./components/HorizontalScroll";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";

export default function Home() {
  return (
    <main className="flex flex-col mb-12 w-full ">
      <TopSection />
      <HorizontalScroll />
      <BottomSection />
    </main>
  );
}
