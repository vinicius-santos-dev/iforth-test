import { Product } from "@/src/features/products/types/product.type";

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
}

export const mockDb = new MockDatabase();