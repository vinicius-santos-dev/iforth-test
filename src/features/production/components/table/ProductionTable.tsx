"use client";

import { DataTable } from "@/src/components/ui/data-table";
import { useProductions } from "../../hooks/useProductions";
import { Production } from "../../types/production.type";
import { columns } from "./columns";

interface ProductionTableProps {
  statusFilter: "ACTIVE" | "INACTIVE" | "ALL";
  productFilter: number | "ALL";
}

const ProductionTable = ({
  statusFilter,
  productFilter,
}: ProductionTableProps) => {
  const { productions } = useProductions();

  const filteredProductions = productions.filter((production) => {
    const statusMatches =
      statusFilter === "ALL" || production.status === statusFilter;

    const productMatches =
      productFilter === "ALL" || production.productId === productFilter;

    return statusMatches && productMatches;
  });

  return (
    <div className="mt-6">
      <DataTable columns={columns} data={filteredProductions as Production[]} />
    </div>
  );
};

export default ProductionTable;
