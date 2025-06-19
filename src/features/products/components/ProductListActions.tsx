"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import Button from "@/src/shared/Button";
import Link from "next/link";

interface ProductListActionsProps {
  statusFilter: "ACTIVE" | "INACTIVE" | "ALL";
  onStatusFilterChange: (value: "ACTIVE" | "INACTIVE" | "ALL") => void;
}

const ProductListActions = ({
  statusFilter,
  onStatusFilterChange,
}: ProductListActionsProps) => {
  return (
    <div className="flex justify-end gap-4">
      <Select value={statusFilter} onValueChange={onStatusFilterChange}>
        <SelectTrigger>
          <SelectValue placeholder="Situação" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ACTIVE">ATIVO</SelectItem>
          <SelectItem value="INACTIVE">INATIVO</SelectItem>
          <SelectItem value="ALL">TODOS</SelectItem>
        </SelectContent>
      </Select>

      <Link href="/products/new-product">
        <Button>Adicionar</Button>
      </Link>
    </div>
  );
};

export default ProductListActions;
