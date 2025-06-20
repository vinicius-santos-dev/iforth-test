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
import { useProductStore } from "../../products/store";

interface ProductionListActionsProps {
  statusFilter: "ACTIVE" | "INACTIVE" | "ALL";
  onStatusFilterChange: (value: "ACTIVE" | "INACTIVE" | "ALL") => void;
  productFilter: number | "ALL";
  onProductFilterChange: (value: number | "ALL") => void;
}

const ProductionListActions = ({
  statusFilter,
  onStatusFilterChange,
  productFilter,
  onProductFilterChange,
}: ProductionListActionsProps) => {
  const products = useProductStore((state) => state.products);

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

      <Select
        value={String(productFilter)}
        onValueChange={(value) => {
          const parsed = value === "ALL" ? "ALL" : Number(value);
          onProductFilterChange(parsed);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Produto" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">TODOS</SelectItem>
          {products.map((product) => (
            <SelectItem key={product.id} value={String(product.id)}>
              {product.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Link href="/production/new-production">
        <Button>Apontar</Button>
      </Link>
    </div>
  );
};

export default ProductionListActions;
