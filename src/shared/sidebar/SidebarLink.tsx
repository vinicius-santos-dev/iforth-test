"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SidebarLinkProps {
  href: string;
  children: ReactNode;
}

const SidebarLink = ({ href, children }: SidebarLinkProps) => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path);

  return (
    <Link
      href={href}
      className={`px-4 py-2 border rounded text-center transition-colors
        ${
          isActive(href)
            ? "bg-black text-white hover:bg-black/80"
            : "hover:bg-gray-200"
        }`}
    >
      {children}
    </Link>
  );
};

export default SidebarLink;
