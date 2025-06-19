export type ProductStatus = "ACTIVE" | "INACTIVE";

export interface Product {
  id: number;
  name: string;
  status: ProductStatus;
  minProduction: number;
  maxProduction: number;
}