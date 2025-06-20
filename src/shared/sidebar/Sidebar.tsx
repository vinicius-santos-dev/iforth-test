"use client";

import { useAuth } from "@/src/features/auth/hooks/useAuth";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className="w-72 h-screen flex flex-col p-4 border-r">
      <h2 className="font-bold text-3xl">Menu principal</h2>

      <nav className="mt-6 flex flex-col gap-6 flex-grow">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Apontamentos</p>
          <SidebarLink href="/production">Apontamento de Produção</SidebarLink>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">Cadastros</p>
          <SidebarLink href="/products">Cadastro de Produto</SidebarLink>
        </div>
      </nav>

      <div>
        <button
          onClick={logout}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-700 transition-colors cursor-pointer"
        >
          Sair
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
