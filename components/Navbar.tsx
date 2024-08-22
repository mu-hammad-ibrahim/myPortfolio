import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex px-2 h-[80px] items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer">
        <Image src="/Logo.png" alt="logo" width={30} height={30} />
        <span className="text-secondary-foreground text-xl font-bold">
          Mu.Ibrahim
        </span>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Link
          href="mailto:mohamed_ibrahim1999@outlook.com"
          target="_blank"
          className={buttonVariants({})}>
          Contact Me
        </Link>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
