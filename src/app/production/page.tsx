import AuthGuard from "@/src/features/auth/components/AuthGuard";
import Sidebar from "@/src/shared/sidebar/Sidebar";

const ProductionPage = () => {
  return (
    <AuthGuard isProtected>
      <Sidebar />

      <main className="py-16 px-6 flex-1">
          <h1 className="font-bold text-3xl">Apontamento de produção</h1>
        </main>
    </AuthGuard>
  );
};

export default ProductionPage;
