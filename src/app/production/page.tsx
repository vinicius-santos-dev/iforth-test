"use client";

import AuthGuard from "@/src/features/auth/components/AuthGuard";
import ProductionListActions from "@/src/features/production/components/ProductionListActions";
import ProductionTable from "@/src/features/production/components/table/ProductionTable";
import Sidebar from "@/src/shared/sidebar/Sidebar";
import { useState } from "react";

const ProductionPage = () => {
  const [statusFilter, setStatusFilter] = useState<
    "ACTIVE" | "INACTIVE" | "ALL"
  >("ALL");
  const [productFilter, setProductFilter] = useState<number | "ALL">("ALL");

  return (
    <AuthGuard isProtected>
      <div className="flex h-screen">
        <Sidebar />

        <main className="py-16 px-6 flex-1">
          <h1 className="font-bold text-3xl">Apontamento de Produção</h1>

          <ProductionListActions
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            productFilter={productFilter}
            onProductFilterChange={setProductFilter}
          />

          <ProductionTable statusFilter={statusFilter} productFilter={productFilter}  />
        </main>
      </div>
    </AuthGuard>
  );
};

export default ProductionPage;
