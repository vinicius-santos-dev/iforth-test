import { useRouter } from "next/navigation";
import { loginRequest } from "../services/authService";
import { useAuthStore } from "../store";

export function useAuth() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const loginStore = useAuthStore((state) => state.login);

  const login = async (username: string, password: string) => {
    try {
      const user = await loginRequest(username, password);
      loginStore(user);
      router.push("/products");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  return {
    user,
    login,
  };
}
