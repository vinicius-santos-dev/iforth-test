"use client";

import { DataTable } from "@/src/components/ui/data-table";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/product.type";
import { columns } from "./columns";

interface ProductTableProps {
  filter: "ACTIVE" | "INACTIVE" | "ALL";
}

export function ProductTable({ filter }: ProductTableProps) {
  const { products } = useProducts();

  const filteredProducts = products.filter((product) => {
    if (filter === "ALL") return true;

    return product.status === filter;
  });

  return (
    <div className="mt-6">
      <DataTable columns={columns} data={filteredProducts as Product[]} />
    </div>
  );
}
