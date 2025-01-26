import { NavbarItem } from "@/types/navbar";
import { v4 as uuid } from "uuid";

export const navbarData: NavbarItem[] = [
  {
    id: uuid(),
    title: "Features",
    href: "#features",
    external: false,
  },
  {
    id: uuid(),
    title: "About",
    href: "#about",
    external: false,
  },
  {
    id: uuid(),
    title: "Portfolio",
    href: "#portfolio",
    external: false,
  },
  {
    id: uuid(),
    title: "Pricing",
    href: "#pricing",
    external: false,
  },
  {
    id: uuid(),
    title: "Разработка",
    submenu: [
      {
        id: uuid(),
        title: "Bitrix",
        href: "/",
        external: false,
      },
      {
        id: uuid(),
        title: "AmoCRM",
        href: "/docs",
        external: false,
      },
      {
        id: uuid(),
        title: "1C",
        href: "/support",
        external: false,
      },
      {
        id: uuid(),
        title: "Telegram bot",
        href: "/blog",
        external: false,
      },
      {
        id: uuid(),
        title: "Telegram miniApp",
        href: "/auth/signin",
        external: false,
      },
      {
        id: uuid(),
        title: "Sign up",
        href: "/auth/signup",
        external: false,
      },
      {
        id: uuid(),
        title: "Error 404",
        href: "/error",
        external: false,
      },
    ],
  },
  {
    id: uuid(),
    title: "Консалтинг",
    submenu: [
      {
        id: uuid(),
        title: "Аудит IT",
        href: "/",
        external: false,
      },
      {
        id: uuid(),
        title: "Анализ IT решений",
        href: "/docs",
        external: false,
      }
    ],
  },
];
