import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import AuthGuard from "@/src/features/auth/components/AuthGuard";
import { ProductTable } from "@/src/features/products/components/table/ProductTable";
import Button from "@/src/shared/Button";
import Sidebar from "@/src/shared/sidebar/Sidebar";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <AuthGuard isProtected>
      <div className="flex h-screen">
        <Sidebar />

        <main className="py-16 px-6 flex-1">
          <h1 className="font-bold text-3xl">Cadastro de produtos</h1>

          <div className="flex justify-end gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Situação" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">ATIVO</SelectItem>
                <SelectItem value="inactive">INATIVO</SelectItem>
                <SelectItem value="all">TODOS</SelectItem>
              </SelectContent>
            </Select>

            <Link href="/products/new-product">
              <Button>Adicionar</Button>
            </Link>
          </div>

          <ProductTable />
        </main>
      </div>
    </AuthGuard>
  );
};

export default ProductsPage;
