import AuthGuard from "@/src/features/auth/components/AuthGuard";
import CreateProductForm from "@/src/features/products/components/CreateProductForm";
import Sidebar from "@/src/shared/sidebar/Sidebar";
import Link from "next/link";

const NewProductPage = () => {
  return (
    <AuthGuard isProtected>
      <div className="flex h-screen">
        <Sidebar />

        <main className="py-16 px-6 flex-1">
          <div className="font-bold text-3xl flex gap-3">
            <Link href="/products">
              <p>Cadastro de produtos</p>
            </Link>

            <span>&gt;</span>

            <p>Adicionar</p>
          </div>

          <CreateProductForm />
        </main>
      </div>
    </AuthGuard>
  );
};

export default NewProductPage;
