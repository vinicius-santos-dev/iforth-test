"use client";

import { useAuth } from "@/src/features/auth/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface AuthGuardProps {
  children: ReactNode;
  isProtected?: boolean;
}

const AuthGuard = ({ children, isProtected = false }: AuthGuardProps) => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    const checkPersistedAuth = () => {
      try {
        const persistedState = localStorage.getItem("auth-storage");
        const hasPersistedUser = persistedState && 
          JSON.parse(persistedState).state.user !== null;
          
        if (isProtected && !user && !hasPersistedUser) {
          router.replace("/login");
        } else if (pathname === "/login" && (user || hasPersistedUser)) {
          router.replace("/products");
        }
        
        setIsInitialized(true);
      } catch (error) {
        console.error("Error accessing localStorage:", error);
        setIsInitialized(true);
      }
    };
    
    checkPersistedAuth();
  }, [isProtected, user, router, pathname]);

  if (!isInitialized) return null;
  
  if ((isProtected && !user) || (pathname === "/login" && user)) return null;

  return <>{children}</>;
};

export default AuthGuard;