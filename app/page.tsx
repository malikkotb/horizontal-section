import HorizontalSCroll from "./components/HorizontalScroll";

export default function Home() {
  return (
    <main className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll Down
        </span>
      </div>
      <HorizontalSCroll />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll Up
        </span>
      </div>
    </main>
  );
}
