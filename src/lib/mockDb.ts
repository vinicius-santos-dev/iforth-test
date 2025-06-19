import { Product } from "@/src/features/products/types/product.type";
import { Production } from "../features/production/types/production.type";

class MockDatabase {
  private products: Product[] = [
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
  ];

  private nextId = this.products.length + 1;

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  add(data: Omit<Product, "id">): Product {
    const newProduct: Product = {
      id: this.nextId++,
      ...data,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  toggleStatus(id: number): Product | undefined {
    const product = this.getById(id);

    if (!product) return;

    product.status = product.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";

    return product;
  }

  private productions: Production[] = [
    {
      id: 1,
      productId: 1,
      quantity: 500,
      status: "ACTIVE",
    },
    {
      id: 2,
      productId: 1,
      quantity: 290,
      status: "ACTIVE",
    }
  ]

  private nextProductionId = this.productions.length + 1;

  getAllProductions(): Production[] {
    return this.productions;
  }

  addProduction(data: Omit<Production, "id">): Production {
    const newProduction: Production = {
      id: this.nextProductionId++,
      ...data,
    };

    this.productions.push(newProduction);
    return newProduction;
  }

  toggleProductionStatus(id: number): Production | undefined {
    const prod = this.productions.find((production) => production.id === id);
    
    if (!prod) return;

    prod.status = prod.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
    
    return prod;
  }
}

export const mockDb = new MockDatabase();