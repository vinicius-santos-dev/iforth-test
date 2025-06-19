"use client";

import { Product } from "@/src/features/products/types/product.type";
import { ColumnDef } from "@tanstack/react-table";


export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <span className="font-medium">{String(row.original.id).padStart(2, "0")}</span>
    ),
  },
  {
    id: "actions",
    header: "AÇÕES",
    cell: () => <p>...</p>,
  },
  {
    accessorKey: "status",
    header: "SITUAÇÃO",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div className={`text-sm inline-flex p-2 rounded  ${status === "ACTIVE" ? "bg-blue-500" : "text-red-500"}`}>
          {status === "ACTIVE" ? "ATIVO" : "INATIVO"}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "PRODUTO",
  },
  {
    id: "productionRange",
    header: "PADRÃO PRODUÇÃO",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="text-sm">
          <span className="mr-2">Mín.: {product.minProduction}</span>
          <span>Máx.: {product.maxProduction}</span>
        </div>
      );
    },
  },
];