export type ProductStatus = "ACTIVE" | "INACTIVE";
export type NewProduct = Omit<Product, "id">;
export interface Product {
  id: number;
  name: string;
  status: ProductStatus;
  minProduction: number;
  maxProduction: number;
}