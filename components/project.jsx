"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  ghLink,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.18 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      className="mb-3 sm:mb-8 last:mb-0 group "
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="rounded-lg bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative text-start  sm:h-[20rem]  hover:bg-gray-200 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col gap-2 h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-center sm:text-start">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 text-center sm:text-start">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto justify-center sm:justify-normal ">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="w-full flex gap-4 justify-center sm:justify-start mt-2 ml-1">
            <a className="h-full w-4" href={link} target="_blank">
              <Globe color="black" />
            </a>
            <a className="h-full w-4" target="_blank" href={ghLink}>
              <Github color="black" />
            </a>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt={"project Image"}
          quality={95}
          className="rounded-lg hidden md:block absolute top-8 -right-40 w-[30.25rem] rounded-t-lg shadow-2xl  group-even:right-[initial] group-even:-left-48 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3  group-even:group-hover:rotate-2 transition"
        />
      </section>
    </motion.div>
  );
}
