"use client";

import Button from "@/src/shared/Button";
import Modal from "@/src/shared/Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useProducts } from "../../products/hooks/useProducts";
import { Product } from "../../products/types/product.type";
import { useProductions } from "../hooks/useProductions";
import ProductCombobox from "./ProductCombobox";

type FormData = {
  productId: number;
  quantity: number;
  justification?: string;
};

const CreateProductionForm = () => {
  const router = useRouter();
  const { products } = useProducts();
  const { createProduction } = useProductions();

  const activeProducts = products.filter(
    (product) => product.status === "ACTIVE"
  );

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showJustificationModal, setShowJustificationModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const quantity = watch("quantity");

  const isOutOfRange =
    selectedProduct &&
    (quantity < selectedProduct.minProduction ||
      quantity > selectedProduct.maxProduction);

  const onSubmit = async (data: FormData) => {
    if (isOutOfRange && !data.justification) {
      setShowJustificationModal(true);
      return;
    }
    setShowConfirmModal(true);
  };

  const handleConfirm = async () => {
    const data = getValues();

    try {
      await createProduction({
        productId: data.productId,
        quantity: data.quantity,
        justification: data.justification,
        status: "ACTIVE",
      });

      router.push("/production");
    } catch (error) {
      console.error("Erro ao criar apontamento:", error);
    }
  };

  return (
    <>
      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <ProductCombobox
              options={activeProducts.map((p) => ({
                label: p.name,
                value: p.name,
                id: p.id,
              }))}
              value={String(watch("productId"))}
              onChange={(selectedName) => {
                const selected = activeProducts.find(
                  (p) => p.name === selectedName
                );
                if (!selected) return;
                setSelectedProduct(selected);
                setValue("productId", selected.id);
              }}
            />
          </div>

          <div className="col-span-2">
            <input
              type="number"
              placeholder="Quantidade produzida (m²)"
              {...register("quantity", {
                required: "Informe a quantidade",
                min: {
                  value: 1,
                  message: "A quantidade deve ser maior que 0",
                },
              })}
              className={`w-full px-4 py-2 border rounded ${
                isOutOfRange ? "border-red-500" : "border-black"
              }`}
            />

            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>
        </div>

        <Button type="submit" className="w-full">
          Salvar
        </Button>
      </form>

      <Modal
        open={showJustificationModal}
        title="Justificativa obrigatória"
        description="Para quantidades fora do intervalo permitido, é necessário fornecer uma justificativa."
        showInput
        inputPlaceholder="Insira a justificativa"
        onConfirm={(value) => {
          setValue("justification", value);
          setShowJustificationModal(false);
          setShowConfirmModal(true);
        }}
        preventClose
        onCancel={() => {}}
      />

      <Modal
        open={showConfirmModal}
        title="Confirmar apontamento"
        description="Tem certeza que deseja criar o apontamento de produção?"
        onCancel={() => setShowConfirmModal(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default CreateProductionForm;
