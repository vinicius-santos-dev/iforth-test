import { Product } from "../types/product.type";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Produto X",
    status: "ACTIVE",
    minProduction: 300,
    maxProduction: 800,
  },
  {
    id: 2,
    name: "Produto Y",
    status: "ACTIVE",
    minProduction: 250,
    maxProduction: 500,
  }
];

let nextId = mockProducts.length + 1;

export function getNextProductId(): number {
  return nextId++;
}
