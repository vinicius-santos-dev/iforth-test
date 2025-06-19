"use client";

import { DataTable } from "@/src/components/ui/data-table";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/product.type";
import { columns } from "./columns";

export function ProductTable() {
  const { products } = useProducts();

  return (
    <div className="mt-6">
      <DataTable columns={columns} data={products as Product[]} />
    </div>
  );
}
