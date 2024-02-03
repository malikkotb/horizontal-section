import React from "react";

export default function TopSection() {
  return (
    <div className="w-full">
      <div className="images flex gap-5 ">
        <div className="image1 w-[30%] min-w-[600px] h-[800px] bg-red-300"></div>
        <div className="image2 w-[70%] bg-blue-300"></div>
      </div>
      <div className="body">
        <div className="flex justify-between mt-5 item">
          <h1 className="text-7xl">Horizontal Section</h1>
          <h2 className="text-4xl">With Framer Motion and Next.js</h2>
        </div>
        <p>Pictures by @laraaceliaa</p>
      </div>
    </div>
  );
}
