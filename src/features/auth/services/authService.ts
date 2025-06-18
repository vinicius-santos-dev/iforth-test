import { User } from "../types/user.type";

export async function loginRequest(
  username: string,
  password: string
): Promise<User> {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Credenciais inválidas");

  return res.json();
}
