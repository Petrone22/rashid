"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import { motion, useAnimation } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  // card.addEventListener("mousemove", handleHover);
  // card.addEventListener("mouseleave", resetStyles);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      {/* <div className="bg-red-500 h-24 w-24 rounded-full flex items-center justify-center absolute top-0 left-0 z-[8000] pointer-events-none">
        .
      </div> */}
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 rotate"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
