"use client";

import AuthGuard from "@/src/features/auth/components/AuthGuard";
import ProductListActions from "@/src/features/products/components/ProductListActions";
import { ProductTable } from "@/src/features/products/components/table/ProductTable";
import Sidebar from "@/src/shared/sidebar/Sidebar";
import { useState } from "react";

const ProductsPage = () => {
  const [statusFilter, setStatusFilter] = useState<
    "ACTIVE" | "INACTIVE" | "ALL"
  >("ALL");

  return (
    <AuthGuard isProtected>
      <div className="flex h-screen">
        <Sidebar />

        <main className="py-16 px-6 flex-1">
          <h1 className="font-bold text-3xl">Cadastro de produtos</h1>

          <ProductListActions
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
          />

          <ProductTable filter={statusFilter} />
        </main>
      </div>
    </AuthGuard>
  );
};

export default ProductsPage;
