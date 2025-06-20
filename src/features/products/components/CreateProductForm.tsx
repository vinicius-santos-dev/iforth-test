"use client";

import Button from "@/src/shared/Button";
import Modal from "@/src/shared/Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useProducts } from "../hooks/useProducts";

type FormData = {
  product: string;
  minProduction: number;
  maxProduction: number;
};

const CreateProductForm = () => {
  const { createProduct } = useProducts();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const minProduction = watch("minProduction");

  const validateMaxProduction = (value: number) => {
    if (!minProduction || !value) return true;

    return (
      Number(value) >= Number(minProduction) ||
      "A produção máxima deve ser maior ou igual à mínima"
    );
  };

  const handleValidation = (data: FormData) => {
    setFormData(data);
    setOpen(true);
  };

  const handleConfirm = async () => {
    if (!formData) return;

    try {
      await createProduct({
        name: formData.product,
        status: "ACTIVE",
        minProduction: Number(formData.minProduction),
        maxProduction: Number(formData.maxProduction),
      });

      router.push("/products");
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };

  return (
    <>
      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={handleSubmit(handleValidation)}
      >
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Produto"
              {...register("product", {
                required: "Insira o nome do produto",
              })}
              className="rounded border border-gray-400 px-4 py-2 w-full focus:outline-black"
            />

            {errors.product && (
              <p className="mt-1 text-sm text-red-500">
                {errors.product.message}
              </p>
            )}
          </div>

          <div className="col-span-1">
            <input
              type="number"
              placeholder="Produção Mín."
              {...register("minProduction", {
                required: "Insira a quantidade mínima de produção",
                min: {
                  value: 0,
                  message: "O valor mínimo deve ser maior ou igual a zero",
                },
              })}
              className="rounded border border-gray-400 px-4 py-2 w-full focus:outline-black"
            />

            {errors.minProduction && (
              <p className="mt-1 text-sm text-red-500">
                {errors.minProduction.message}
              </p>
            )}
          </div>

          <div className="col-span-1">
            <input
              type="number"
              placeholder="Produção Máx."
              {...register("maxProduction", {
                required: "Insira a quantidade máxima de produção",
                min: {
                  value: 0,
                  message: "O valor mínimo deve ser maior ou igual a zero",
                },
                validate: validateMaxProduction,
              })}
              className="rounded border border-gray-400 px-4 py-2 w-full focus:outline-black"
            />

            {errors.maxProduction && (
              <p className="mt-1 text-sm text-red-500">
                {errors.maxProduction.message}
              </p>
            )}
          </div>
        </div>

        <Button type="submit" className="w-full">
          Salvar
        </Button>
      </form>

      <Modal
        open={open}
        title="Confirmar criação"
        description="Tem certeza que deseja cadastrar este produto?"
        onCancel={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default CreateProductForm;
