"use client";
import Image from "next/image";  // Import Image from next/image
import sqlServerSvg from "@/assets/icons/sqlserver.svg";
import sqlServerSvgWhite from "@/assets/icons/sqlserverWhite.svg";
import aspDotNetSvg from "@/assets/icons/aspdotnet.svg";
import aspDotNetSvgwhite from "@/assets/icons/aspdotnetwhite.svg";
import EntityFramework from "@/assets/icons/EntityFramework.svg";
import NHibernate from "@/assets/icons/NHibernate.svg";
import xml from "@/assets/icons/xml.svg";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon | null, theme: string, slug: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  if (slug === "sqlserver" && theme === "dark") {
    return (
      <a
        title="SQL Server"
        style={{ cursor: "pointer" }}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src={sqlServerSvgWhite}
          alt="SQL Server"
          width={60}
          height={60}
          style={{ width: "60px", height: "60px" }}
        />
      </a>
    );
  }

  if (slug === "sqlserver" && theme === "light") {
    return (
      <a
        title="SQL Server"
        style={{ cursor: "pointer" }}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src={sqlServerSvg}
          alt="SQL Server"
          width={45}
          height={45}
          style={{ width: "45px", height: "45px" }}
        />
      </a>
    );
  }

  if (slug === "visualstudio") {
    return (
      <a
        title="visualstudio"
        style={{ cursor: "pointer" }}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg"
          alt="visualstudio"
          width={45}
          height={45}
          style={{ width: "45px", height: "45px" }}
        />
      </a>
    );
  }

  if (slug === "aspdotnet" && theme === "dark") {
    return (
      <a
        title="ASP.NET"
        style={{ cursor: "pointer" }}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src={aspDotNetSvgwhite}
          alt="ASP.NET"
          width={45}
          height={45}
          style={{
            width: "45px",
            height: "45px",
          }}
        />
      </a>
    );
  }
  if (slug === "aspdotnet" && theme === "light") {
    return (
      <a
        title="ASP.NET"
        style={{ cursor: "pointer" }}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src={aspDotNetSvg}
          alt="ASP.NET"
          width={45}
          height={45}
          style={{
            width: "45px",
            height: "45px",
          }}
        />
      </a>
    );
  }

  if (slug === "EntityFramework") {
    return (
      <a
        title="EntityFramework"
        style={{ cursor: "pointer" }}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src={EntityFramework}
          alt="Entity Framework Core"
          width={45}
          height={45}
          style={{
            width: "45px",
            height: "45px",
          }}
        />
      </a>
    );
  }
  if (slug === "vbdotnet") {
    return (
      <a
        title="vbdotnet"
        style={{ cursor: "pointer" }}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg"
          alt="VB.NET"
          width={45}
          height={45}
          style={{
            width: "45px",
            height: "45px",
          }}
        />
      </a>
    );
  }
  if (slug === "Canva") {
    return (
      <a
        title="Canva"
        style={{ cursor: "pointer" }}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg"
          alt="Canva"
          width={45}
          height={45}
          style={{
            width: "45px",
            height: "45px",
          }}
        />
      </a>
    );
  }
  if (slug === "NHibernate") {
    return (
      <a
        title="NHibernate"
        style={{ cursor: "pointer" }}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src={NHibernate}
          alt="Canva"
          width={45}
          height={45}
          style={{
            width: "45px",
            height: "45px",
          }}
        />
      </a>
    );
  }
  if (slug === "xml") {
    return (
      <a
        title="xml"
        style={{ cursor: "pointer" }}
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src={xml}
          alt="XML"
          width={45}
          height={45}
          style={{
            width: "45px",
            height: "45px",
          }}
        />
      </a>
    );
  }
  
  if (icon) {
    return renderSimpleIcon({
      icon,
      bgHex,
      fallbackHex,
      minContrastRatio,
      size: 45,
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault(),
      },
    });
  }

  return null;
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return iconSlugs.map((slug) => {
      const icon = data.simpleIcons[slug] || null;
      return renderCustomIcon(icon, theme || "light", slug);
    });
  }, [data, theme, iconSlugs]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
