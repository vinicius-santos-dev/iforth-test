import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Production } from "./types/production.type";

interface ProductionStore {
  productions: Production[];
  setProductions: (productions: Production[]) => void;
  addProduction: (production: Production) => void;
  updateProduction: (
    id: number,
    updatedProduction: Partial<Production>
  ) => void;
}

export const useProductionStore = create<ProductionStore>()(
  persist(
    (set) => ({
      productions: [],
      setProductions: (productions) => set({ productions }),
      addProduction: (production) =>
        set((state) => ({ productions: [...state.productions, production] })),
      updateProduction: (id, updatedProduction) =>
        set((state) => ({
          productions: state.productions.map((production) =>
            production.id === id
              ? { ...production, ...updatedProduction }
              : production
          ),
        })),
    }),
    { name: "production-storage" }
  )
);
