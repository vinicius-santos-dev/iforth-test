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
  },
  // {
  //   id: 3,
  //   name: "Produto X",
  //   status: "ACTIVE",
  //   minProduction: 300,
  //   maxProduction: 800,
  // },
  // {
  //   id: 4,
  //   name: "Produto Y",
  //   status: "ACTIVE",
  //   minProduction: 250,
  //   maxProduction: 500,
  // },
  // {
  //   id: 5,
  //   name: "Produto X",
  //   status: "ACTIVE",
  //   minProduction: 300,
  //   maxProduction: 800,
  // },
  // {
  //   id: 6,
  //   name: "Produto Y",
  //   status: "ACTIVE",
  //   minProduction: 250,
  //   maxProduction: 500,
  // },
  // {
  //   id: 7,
  //   name: "Produto X",
  //   status: "ACTIVE",
  //   minProduction: 300,
  //   maxProduction: 800,
  // },
  // {
  //   id: 8,
  //   name: "Produto Y",
  //   status: "ACTIVE",
  //   minProduction: 250,
  //   maxProduction: 500,
  // },
  // {
  //   id: 9,
  //   name: "Produto X",
  //   status: "ACTIVE",
  //   minProduction: 300,
  //   maxProduction: 800,
  // },
  // {
  //   id: 10,
  //   name: "Produto Y",
  //   status: "ACTIVE",
  //   minProduction: 250,
  //   maxProduction: 500,
  // },
  // {
  //   id: 11,
  //   name: "Produto X",
  //   status: "ACTIVE",
  //   minProduction: 300,
  //   maxProduction: 800,
  // },
  // {
  //   id: 12,
  //   name: "Produto Y",
  //   status: "ACTIVE",
  //   minProduction: 250,
  //   maxProduction: 500,
  // },
];

let nextId = mockProducts.length + 1;

export function getNextProductId(): number {
  return nextId++;
}
