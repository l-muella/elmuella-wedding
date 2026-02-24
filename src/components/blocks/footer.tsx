"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export function Footer() {
  const pathname = usePathname();
  const isMenuPage = pathname === "/menu";
  const navigation = [
    { name: "Our Story", href: "/#feature-modern-teams" },
    { name: "Venue", href: "/venue" },
    { name: "Accommodation", href: "/accommodation" },
    { name: "Gift", href: "/gift" },
    { name: "Wedding Planners", href: "/wedding-planners" },
    { name: "People", href: "/people" },
    { name: "Nanny Service", href: "/nanny-service" },
  ];

  {
    /* const social = [
    { name: "Xwitter", href: "https://x.com/ausrobdev" },
    { name: "LinkedIn", href: "#" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }]; */
  }

  return (
    <footer className="flex flex-col items-center gap-14 pt-20 pb-0 lg:pt-20">
      {!isMenuPage && (
        <div className="container space-y-3 text-center">
          <h2 className="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl">
            Kindly confirm your menu choice
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance"></p>
          <div>
            <Button size="lg" className="mt-4" asChild>
              <a href="/menu">Select Menu</a>
            </Button>
          </div>
        </div>
      )}

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {/*
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
          */}
        </ul>
        {/*
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        */}
      </nav>

      <div className="container text-center">
        <span className="font-cormorant pb-8 text-4xl font-bold tracking-wide md:text-5xl lg:text-6xl">
          P | L
        </span>
      </div>
    </footer>
  );
}
