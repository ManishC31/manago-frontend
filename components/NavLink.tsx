"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type * as React from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NavLinkCompatProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> &
  LinkProps & {
    href: LinkProps["href"];
  };

interface NavLinkPropsWithClasses extends NavLinkCompatProps {
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkPropsWithClasses>(
  ({ className, activeClassName, exact, href, ...props }, ref) => {
    const pathname = usePathname();

    const hrefPath = typeof href === "string" ? href : href.pathname;
    const isActive = hrefPath
      ? exact
        ? pathname === hrefPath
        : pathname === hrefPath || pathname?.startsWith(`${hrefPath}/`)
      : false;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
