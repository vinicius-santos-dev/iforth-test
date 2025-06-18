"use client";

import { useAuth } from "@/src/features/auth/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface AuthGuardProps {
  children: ReactNode;
  isProtected?: boolean;
}

const AuthGuard = ({ children, isProtected = false }: AuthGuardProps) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isProtected && !user) router.replace("/login");
    if (!isProtected && user) router.replace("/products");
  }, [isProtected, user, router]);

  if ((isProtected && !user) || (!isProtected && user)) return null;

  return <>{children}</>;
};

export default AuthGuard;
