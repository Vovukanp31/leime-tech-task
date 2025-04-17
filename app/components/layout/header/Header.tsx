"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import Image from "next/image";

export default function App() {
  const menuItems = [
    {
      title: "Memes table",
      path: "/memes-table",
    },
    {
      title: "Memes list",
      path: "/memes",
    },
  ];

  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Link href="/">
            <div className="flex items-center gap-2 rounded-sm bg-gray-100 px-2 text-blue-700">
              <Image
                src="/assets/main/icons/main-logo.png"
                alt="Main logo"
                width={40}
                height={40}
              />
              <p className="font-bold text-inherit">MEMELIB</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand>
          <Link href="/">
            <div className="flex items-center gap-2 rounded-sm bg-gray-100 px-2 text-blue-700">
              <Image
                src="/assets/main/icons/main-logo.png"
                alt="Main logo"
                width={40}
                height={40}
              />
              <p className="font-bold text-inherit">MEMELIB</p>
            </div>
          </Link>
        </NavbarBrand>

        <div className="h-full w-[1px] bg-slate-300"></div>

        {menuItems.map((item, i) => (
          <NavbarItem key={`${item.title}-${i}`}>
            <Link color="foreground" size="lg" href={item.path}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, i) => (
          <NavbarMenuItem key={`${item.title}-${i}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.path}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
