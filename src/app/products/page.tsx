import AuthGuard from "@/src/features/auth/components/AuthGuard";
import Sidebar from "@/src/shared/sidebar/Sidebar";

const ProductsPage = () => {
  return (
    <AuthGuard isProtected>
      <Sidebar />
    </AuthGuard>
  );
};

export default ProductsPage;
