"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Production } from "../../types/production.type";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

import { useProductStore } from "@/src/features/products/store";
import { cn } from "@/src/lib/utils";
import { MoreHorizontal } from "lucide-react";
import { useProductions } from "../../hooks/useProductions";

export const columns: ColumnDef<Production>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <span className="font-medium">
        {String(row.original.id).padStart(2, "0")}
      </span>
    ),
  },
  {
    id: "actions",
    header: "AÇÕES",
    cell: ({ row }) => {
      const { toggleStatus } = useProductions();
      const production = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded hover:bg-gray-100 border focus:outline-none">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => toggleStatus(production.id)}>
              Alterar situação
            </DropdownMenuItem>

            {production.justification && (
              <DropdownMenuItem>Ver justificativa</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "status",
    header: "SITUAÇÃO",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div
          className={`text-sm inline-flex p-2 rounded ${
            status === "ACTIVE" ? "bg-blue-500" : "bg-red-500"
          }`}
        >
          {status === "ACTIVE" ? "ATIVO" : "INATIVO"}
        </div>
      );
    },
  },
  {
    accessorKey: "productId",
    header: "PRODUTO",
    cell: ({ row }) => {
      const productId = row.original.productId;
      const products = useProductStore((state) => state.products);
      const product = products.find((product) => product.id === productId);

      return <span>{product?.name ?? "Produto não encontrado"}</span>;
    },
  },
  {
    accessorKey: "quantity",
    header: "PRODUÇÃO",
    cell: ({ row }) => {
      const { quantity, productId } = row.original;
      const products = useProductStore((state) => state.products);
      const product = products.find((product) => product.id === productId);

      const isOutOfRange =
        product &&
        (quantity < product.minProduction || quantity > product.maxProduction);
      return (
        <span
          className={cn("px-2 py-1 rounded", {
            "border border-red-500": isOutOfRange,
          })}
        >
          {quantity} m²
        </span>
      );
    },
  },
];
