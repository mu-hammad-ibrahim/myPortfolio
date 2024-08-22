"use client";

import { useTheme } from "next-themes";
import Card from "./Card";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-5 mt-20">
      <div className="mb-10">
        <h2 className="text-5xl text-center font-bold pb-5 text-secondary-foreground">
          Who am I ?
        </h2>
        <p className="text-center text-base text-accent-foreground">
          A Journey in Web Development: My Passion and Expertise
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="flex flex-col gap-4">
          <p className="text-base text-justify text-muted-foreground px-4">
            {`My name is Muhammad Ibrahim, I am a .NET Developer with over a year of experience in designing, developing, and implementing ERP systems. Graduated from the Faculty of Computers and Information, Department of Computer Science, with a solid foundation in .NET and SQL Server. Proficient in Entity Framework Core and skilled at debugging and resolving business logic errors. Experienced in database reverse engineering using .NET Core Power Tools.`}
            {`Thrilled to share that my work in ERP systems development has consistently demonstrated my dedication and technical prowess. I played a key role in collaborating with cross-functional teams to deliver high-quality software solutions, ensuring seamless integration and functionality. My commitment to continuous learning and adapting to the latest industry trends has been instrumental in my professional growth.`}
            {`Eager to leverage my experience and skills to contribute to innovative projects and drive technological advancements. Let's connect and explore opportunities to create impactful software solutions together!`}
          </p>
         
        </div>
        <Card />
      </div>
    </section>
  );
};

export default About;
