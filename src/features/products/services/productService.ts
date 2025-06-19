import { Product } from "../types/product.type";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("/api/registers/products");

  if (!res.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return res.json();
}

export async function createProduct(product: Product): Promise<Product> {
  const res = await fetch("/api/registers/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!res.ok) throw new Error("Erro ao criar produto");

  return res.json();
}

export async function toggleProductStatus(id: number): Promise<Product> {
  const res = await fetch("api/registers/products/flag", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!res.ok) throw new Error("Erro ao atualizar status do produto");

  return res.json();
}
