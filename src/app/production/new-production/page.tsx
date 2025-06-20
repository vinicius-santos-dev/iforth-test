import AuthGuard from "@/src/features/auth/components/AuthGuard";
import CreateProductionForm from "@/src/features/production/components/CreateProductionForm";
import Sidebar from "@/src/shared/sidebar/Sidebar";
import Link from "next/link";

const NewProductionPage = () => {
  return (
    <AuthGuard isProtected>
      <div className="flex h-screen">
        <Sidebar />

        <main className="py-16 px-6 flex-1">
          <div className="font-bold text-3xl flex gap-3">
            <Link href="/production">
              <p>Apontamento de Produção</p>
            </Link>

            <span>&gt;</span>

            <p>Adicionar</p>
          </div>

          <CreateProductionForm />
        </main>
      </div>
    </AuthGuard>
  );
};

export default NewProductionPage;
