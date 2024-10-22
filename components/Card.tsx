import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Card = () => {
  return (
    <div className="perspective-1000">
      <div className="relative w-[280px] h-[350px] transform-style-preserve-3d transition-transform-600 cursor-pointer hover:rotate-y-180">
        {/* <!-- Front Side --> */}
        <div className="absolute w-full h-full rounded-[20px] shadow-lg backface-hidden overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/Muhammad Ibrahim.png"
              alt="Muhammad Ibrahim"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* <!-- Back Side --> */}
        <div className="absolute w-full h-full rounded-[20px] bg-accent shadow-lg transform rotate-y-180 backface-hidden flex flex-col items-center p-[20px]">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-ring">
            <Image
              src="/Muhammad Ibrahim.png"
              alt="Muhammad Ibrahim"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center my-5">
            <h2 className="text-[1.3em] font-semibold text-accent-foreground leading-[1.2em]">
            Muhammad Ibrahim
              <span className="text-[0.75em] font-medium opacity-80 block mt-1">
              .Net Full Stack developer
              </span>
            </h2>
          </div>
          <div className="flex gap-5">
            <Link href="https://github.com/Muhammad-Ibrahim-Dev" target="_blank">
              <FaGithub
                className="text-accent-foreground cursor-pointer"
                size={25}
              />
            </Link>
            <Link href="https://www.facebook.com/Muhammed.ibrahim1999" target="_blank">
              <FaFacebook
                className="text-accent-foreground cursor-pointer"
                size={25}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammed-ibrahim99/"
              target="_blank">
              <FaLinkedin
                className="text-accent-foreground cursor-pointer"
                size={25}
              />
            </Link>
            <Link
              href="https://wa.me/+201272068067?text=Hello%20Muhammad"
              target="_blank"
              rel="noopener noreferrer">
              <FaWhatsapp
                className="text-accent-foreground cursor-pointer"
                size={25}
              />
            </Link>
            <Link href="mailto:mohamed_ibrahim1999@outlook.com" target="_blank">
              <SiMicrosoftoutlook
                className="text-accent-foreground cursor-pointer"
                size={25}
              />
            </Link>
          </div>
          <div className="flex gap-3 mt-8">
            <Button className="text-accent-foreground" asChild>
              <Link href="mailto:mohamed_ibrahim1999@outlook.com" target="_blank">
                Hire me
              </Link>
            </Button>
            <a
              href="/Muhammad Ibrahim - .NET Developer.pdf"
              download="Muhammad Ibrahim"
              className={buttonVariants({
                className: "text-accent-foreground",
                variant: "outline",
              })}>
              My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
