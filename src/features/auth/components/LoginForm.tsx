"use client";

import Button from "@/src/shared/Button";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const { login } = useAuth();

  const onSubmit = async (data: FormData) => {
    try {
      await login(data.username, data.password);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form
      className="flex flex-col gap-4 mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="Usuário"
        {...register("username", { required: "Usuário obrigatório" })}
        className="rounded border border-gray-400 px-4 py-2"
      />
      {errors.username && (
        <span className="text-red-500 text-sm -mt-3">
          {errors.username.message}
        </span>
      )}

      <input
        type="password"
        placeholder="Senha"
        {...register("password", { required: "Senha obrigatória" })}
        className="rounded border border-gray-400 px-4 py-2"
      />
      {errors.password && (
        <span className="text-red-500 text-sm -mt-3">
          {errors.password.message}
        </span>
      )}

      <Button type="submit">Entrar</Button>
    </form>
  );
};

export default LoginForm;
