import { NewProduction, Production } from "../types/production.type";

export async function getProductions(): Promise<Production[]> {
  const res = await fetch("/api/records/productions");

  if (!res.ok) throw new Error("Erro ao buscar apontamentos de produção");

  return res.json();
}

export async function createProduction(
  production: NewProduction
): Promise<Production> {
  const res = await fetch("/api/records/productions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(production),
  });

  if (!res.ok) throw new Error("Erro ao criar apontamento de produção");

  return res.json();
}

export async function toggleProductionStatus(id: number): Promise<Production> {
  const res = await fetch("/api/records/productions/flag", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!res.ok)
    throw new Error("Erro ao atualizar status do apontamento de produção");

  return res.json();
}
