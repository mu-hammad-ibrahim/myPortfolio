import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
const bg = () => {
  return (
    <div>
      <DotPattern
        width={50}
        height={50}
        cx={10}
        cy={50}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="[--color:#3366ff] pointer-events-none relative -z-[2] mx-auto h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background" />
    </div>
  );
};

export default bg;
