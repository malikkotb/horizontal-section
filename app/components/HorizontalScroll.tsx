"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cards } from "./cards";
import { Card } from "./Card";
export default function HorizontalSCroll() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ // will return progress of scrolling vertically on the section
    target: targetRef,
  });

  // takes motionValue, array of values to map FROM, array of values to map TO, 
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]) // apply this on div which is to be animated

  return (
    // height of 300vh to have lots of room for scrolling
    // position: realtive, so the inner element can be sticky to it
    <section ref={targetRef} className=" h-[300vh] bg-neutral-900">
      {/* we can follow our viewport as we scroll further down, by setting position sticky and top-0
        => when we scroll, the below div stays in view until we reach the bottom of the outer component */}
      <div className="h-screen sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x: x}} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}
