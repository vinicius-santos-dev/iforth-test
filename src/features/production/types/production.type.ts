export type ProductionStatus = "ACTIVE" | "INACTIVE";
export type NewProduction = Omit<Production, "id">;

export interface Production {
  id: number;
  productId: number;
  quantity: number;
  status: ProductionStatus;
  justification?: string;
}
