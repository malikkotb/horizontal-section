import React from "react";

export default function TopSection() {
  return (
    <div className="w-full">
      <div className="images flex gap-5 "></div>
      <div className="body">
        <div className="flex justify-between mt-5 item">
          <h1 className="text-5xl">Horizontal Section</h1>
          <h2 className="text-3xl">With GSAP and Next.js</h2>
        </div>
        <p>Pictures by @laraaceliaa</p>
      </div>
    </div>
  );
}
