import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <section className="mt-20 flex flex-col items-center justify-center">
      <div>
        <h2 className="text-5xl text-center font-bold pb-5 text-secondary-foreground">
          Contact me
        </h2>
        <p className="text-center mx-auto text-base lg:w-9/12 text-muted-foreground px-4">
          {`I'm eager to collaborate on new projects and help bring your ideas to life. Whether you have a project in mind, need web development advice, or just want to connect, feel free to reach out`}
        </p>
      </div>
      <Button
        className="my-10 font-bold rounded-full"
        size="lg"
        asChild
        variant="outline">
        <Link href="mailto:mohamed_ibrahim1999@outlook.com" target="_blank">
          Get in Touch
        </Link>
      </Button>
    </section>
  );
};

export default Contact;
