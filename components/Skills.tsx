import React from "react";
import { SkillsIcon } from "./Skills-Icon";

const Skills = () => {
  return (
    <section className="lg:min-h-screen py-5 mt-20 lg:mt-28">
      <div>
        <h2 className="text-5xl text-center font-bold pb-5 text-secondary-foreground">
          My Toolbox
        </h2>
        <p className="text-center text-base text-accent-foreground">
          The Skills and Technologies I Command
        </p>
      </div>

      <div className="flex items-center justify-center mt-5">
        <SkillsIcon />
      </div>
    </section>
  );
};

export default Skills;
