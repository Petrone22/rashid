"use client";
import React from "react";
import SectionHeading from "./section-heading";
import Project from "@/components/project";
import { projectsData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SectionHeading>My Projects</SectionHeading>

      <div className="flex flex-col " initial={{ opacity: 0, y: 100 }}>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
