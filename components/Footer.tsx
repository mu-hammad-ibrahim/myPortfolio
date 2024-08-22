import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";

const Footer = () => {
  return (
    <section className="flex flex-col mt-5 py-5 border-t-2 border-border">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between my-10 mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src="/Logo.png" alt="logo" width={30} height={30} />
            <span className="text-secondary-foreground text-xl font-bold">
            Mu.Ibrahim
            </span>
          </div>
          <p className="text-muted-foreground text-base pb-2">
            <span className="dot"></span> {`I'm currently available for work.`}
          </p>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex gap-5">
            <Link href="https://github.com/Muhammad-Ibrahim-Dev" target="_blank">
              <FaGithub
                className="text-accent-foreground cursor-pointer"
                size={28}
              />
            </Link>
            <Link href="https://www.facebook.com/Muhammed.ibrahim1999" target="_blank">
              <FaFacebook
                className="text-accent-foreground cursor-pointer"
                size={28}
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
                size={28}
              />
            </Link>
            <Link href="mailto:mohamed_ibrahim1999@outlook.com" target="_blank">
              <SiMicrosoftoutlook
                className="text-accent-foreground cursor-pointer"
                size={28}
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-muted-foreground">
        Copyright © 2024 Muhammad Ibrahim. All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
