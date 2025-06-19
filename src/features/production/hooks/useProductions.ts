import { useEffect } from "react";
import {
  createProduction as createProductionRequest,
  getProductions,
  toggleProductionStatus as toggleProductionStatusRequest,
} from "../services/productionService";
import { useProductionStore } from "../store";
import { NewProduction } from "../types/production.type";

export function useProductions() {
  const productions = useProductionStore((state) => state.productions);
  const setProductions = useProductionStore((state) => state.setProductions);
  const addProduction = useProductionStore((state) => state.addProduction);
  const updateProduction = useProductionStore(
    (state) => state.updateProduction
  );

  useEffect(() => {
    const fetchProductions = async () => {
      try {
        if (productions.length === 0) {
          const response = await getProductions();
          setProductions(response);
        }
      } catch (error) {
        console.error("Erro ao carregar apontamentos de produção:", error);
      }
    };

    fetchProductions();
  }, [productions.length, setProductions]);

  const createProduction = async (production: NewProduction) => {
    try {
      const newProduction = await createProductionRequest(production);
      addProduction(newProduction);
    } catch (error) {
      console.error("Erro ao criar apontamento de produção:", error);
      throw error;
    }
  };

  const toggleStatus = async (id: number) => {
    try {
      const updatedProduction = await toggleProductionStatusRequest(id);
      updateProduction(id, { status: updatedProduction.status });
    } catch (error) {
      console.error(
        "Erro ao atualizar status do apontamento de produção:",
        error
      );
      throw error;
    }
  };

  return {
    productions,
    createProduction,
    toggleStatus,
  };
}
