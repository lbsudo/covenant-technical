"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { usePathname } from 'next/navigation'

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { baseButton } from "./primitives";


import { Logo } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <NextUINavbar maxWidth="xl" shouldHideOnScroll position="sticky">
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <Logo />
        </NextLink>
      </NavbarBrand>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden md:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={`${pathname === item.href ? 'text-purple-500 data-[active=true]:font-medium hover:underline hover:underline-white hover:drop-shadow-[0_8px_8px_rgba(93,63,211,1)] ' : 'data-[active=true]:font-medium hover:underline hover:underline-white hover:drop-shadow-[0_8px_8px_rgba(93,63,211,1)]'
                  }`}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link href="/contact">
            <Button
              color="secondary"
              className={baseButton({ color: 'primary' })}
              variant="ghost"
            >
              CONTACT
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === siteConfig.navMenuItems.length - 1
                    ? "primary"
                    : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
