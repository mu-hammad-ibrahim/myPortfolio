"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { buttonVariants } from "./ui/button";

export type ItemType = {
  title: string;
  date: string;
  info: string;
  images: string[];
  techs: string[];
  github?: string;
  website?: string;
};

const ProjectCard = ({ item }: { item: ItemType }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[310px] bg-accent rounded-md overflow-hidden border-4 border-border flex flex-col shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="relative w-full h-44 overflow-hidden">
        {/* First Image */}
        <Image
          src={item.images[0]}
          alt="project"
          fill
          className={`transition-transform duration-500 ease-in-out ${
            isHovered ? "-translate-x-full" : "translate-x-0"
          }`}
        />
        {/* Second Image (Sliding in) */}
        <Image
          src={item.images[1]}
          alt="project"
          fill
          className={`absolute top-0 left-0 transition-transform duration-500 ease-in-out ${
            isHovered ? "translate-x-0" : "translate-x-full"
          }`}
        />
      </div>
      <div className="px-2 py-1 flex flex-col flex-1 justify-between">
        <div className="space-y-1">
          <h3 className="text-secondary-foreground text-base font-medium">
            {item.title}
          </h3>
          <p className="text-accent-foreground text-xs">{item.date}</p>
          <p className="text-muted-foreground text-xs">{item.info}</p>
        </div>
        <div className="mt-auto">
          <div className="mt-7 flex flex-wrap gap-1">
            {item.techs?.map((tech, i) => (
              <div
                key={i}
                className="bg-foreground text-background capitalize font-semibold py-0 px-1 rounded-md text-[10px]">
                {tech}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 my-4">
            {item.github && (
              <Link
                href={item.github}
                target="_blank"
                className={buttonVariants({
                  className:
                    "flex items-center gap-2 px-2 font-semibold rounded-md text-[10px] py-1 h-6",
                })}>
                <FaGithub />
                Source
              </Link>
            )}
            {item.website && (
              <Link
                href={item.website}
                target="_blank"
                className={buttonVariants({
                  className:
                    "flex items-center gap-2 px-2 font-semibold rounded-md text-[10px] py-1 h-6",
                })}>
                <FaGlobe />
                Website
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
