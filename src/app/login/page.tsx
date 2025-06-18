import LoginForm from "@/src/features/auth/components/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/iforth-logo.png"
        alt="iForth Logo"
        height={300}
        width={300}
      />

      <LoginForm />
    </div>
  );
};

export default LoginPage;
