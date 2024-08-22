import { Data } from "@/lib/Data";
import ProjectCard, { ItemType } from "./ProjectCard";

const Projects = () => {
  const data = Data;
  return (
    <section className="min-h-screen mb-44 py-5 mt-20 lg:mt-28">
      <div className="mb-20">
        <h2 className="text-5xl text-center font-bold pb-5 text-secondary-foreground">
          Showcasing My Journey
        </h2>
        <p className="text-center text-base text-accent-foreground">
          A Portfolio of Innovative Web Solutions
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {data.map((item: ItemType, index: number) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
