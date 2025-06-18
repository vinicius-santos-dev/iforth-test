"use client";

import AuthGuard from "@/src/features/auth/components/AuthGuard";
import LoginForm from "@/src/features/auth/components/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <AuthGuard>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          src="/iforth-logo.png"
          alt="iForth Logo"
          height={300}
          width={300}
        />
        <LoginForm />
      </div>
    </AuthGuard>
  );
};

export default LoginPage;
