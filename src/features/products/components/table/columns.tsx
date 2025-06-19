"use client";

import { Product } from "@/src/features/products/types/product.type";
import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/src/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";
import { useProducts } from "../../hooks/useProducts";


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
    cell: ({ row }) => {
      const { toggleStatus } = useProducts();
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded hover:bg-gray-100 border focus:outline-none">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => toggleStatus(product.id)}>
              Alterar situação
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  },
  {
    accessorKey: "status",
    header: "SITUAÇÃO",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div className={`text-sm inline-flex p-2 rounded  ${status === "ACTIVE" ? "bg-blue-500" : "bg-red-500"}`}>
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