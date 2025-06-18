import AuthGuard from "@/src/features/auth/components/AuthGuard";
import Sidebar from "@/src/shared/sidebar/Sidebar";

const ProductionPage = () => {
  return (
    <AuthGuard isProtected>
      <Sidebar />
    </AuthGuard>
  );
};

export default ProductionPage;
