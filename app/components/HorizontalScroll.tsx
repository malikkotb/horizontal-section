"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "./Card";
import Picture1 from "../../public/1.jpg";
import Picture2 from "../../public/2.jpg";
import Picture3 from "../../public/3.jpg";
import Picture4 from "../../public/4.jpg";
import Picture5 from "../../public/5.jpg";
import Picture6 from "../../public/6.jpg";
import Picture7 from "../../public/7.jpg";
import Picture11 from "../../public/11.jpg";

import Image from "next/image";

const images = [
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture6,
  Picture7,
];

export default function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // will return progress of scrolling vertically on the section
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // takes motionValue, array of values to map FROM, array of values to map TO,
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  return (
    // height of 300vh to have lots of room for scrolling
    // position: realtive, so the inner element can be sticky to it
    <section ref={targetRef} className=" h-[300vh]">
      {/* we can follow our viewport as we scroll further down, by setting position sticky and top-0
        => when we scroll, the below div stays in view until we reach the bottom of the outer component */}
      <div className="h-[80vh] pt-[10vh] sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x: x }} className="flex gap-24">
          <div className="intro w-[80vw] h-full flex flex-col flex-shrink-0">
            <div className="flex gap-5 whitespace-normal">
              <h2 className="text-[40px] m-0 w-full whitespace-nowrap">
                Lorem ipsum
              </h2>
              <p>
                Sed neque purus, imperdiet eu purus sit amet, hendrerit semper
                quam. Praesent elementum, nisl sit amet tincidunt tincidunt, ex
                tortor cursus lorem, non tempus purus libero et metus.
              </p>
            </div>
            <div className="relative h-[70vh] w-[80vw] overflow-hidden">
              <Image
                src={Picture1} // static Image source
                alt="Description"
                placeholder="blur"
                fill
              />
            </div>
          </div>
          <div className="flex gap-5">
            <Card key={2} image={Picture2} />
            <Card key={3} image={Picture3} />
          </div>
          <div className="h-[75vh] w-[30vw] flex items-center justify-center flex-shrink-0">
            <p>
              Aliquam metus lacus, efficitur sit amet ligula a, vehicula
              eleifend dolor. Pellentesque vulputate consectetur lectus, sit
              amet pellentesque leo congue ut. Vivamus turpis est, mollis et
              elit eget, venenatis dictum nisl. Suspendisse sit amet erat vel
              ipsum elementum mattis. In vel sagittis velit.
            </p>
          </div>
          <div className="flex gap-12 w-[60vw] flex-shrink-0">
            <div className="relative h-[30%] w-[40%] overflow-hidden">
              <Image
                src={Picture4} // static Image source
                alt="Description"
                placeholder="blur"
                fill
              />
            </div>
            <div className="relative h-[full] w-[40%] overflow-hidden">
              <Image
                src={Picture5} // static Image source
                alt="Description"
                placeholder="blur"
                fill
              />
            </div>
          </div>

          {/* {images.map((Image, index) => (
            <Card key={index} image={Image} />
          ))} */}
        </motion.div>
      </div>
    </section>
  );
}
