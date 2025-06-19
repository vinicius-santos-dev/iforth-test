import { useEffect } from "react";
import {
  createProduct as createProductRequest,
  getProducts,
  toggleProductStatus as toggleProductStatusRequest,
} from "../services/productService";
import { useProductStore } from "../store";
import { Product } from "../types/product.type";

export function useProducts() {
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);
  const addProduct = useProductStore((state) => state.addProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (products.length === 0) {
          const response = await getProducts();
          setProducts(response);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    fetchProducts();
  }, [products.length, setProducts]);

  const createProduct = async (product: Product) => {
    try {
      const newProduct = await createProductRequest(product);
      addProduct(newProduct);
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      throw error;
    }
  };

  const toggleStatus = async (id: number) => {
    try {
      const updatedProduct = await toggleProductStatusRequest(id);
      updateProduct(id, { status: updatedProduct.status });
    } catch (error) {
      console.error("Erro ao atualizar status do produto:", error);
      throw error;
    }
  };

  return {
    products,
    createProduct,
    toggleStatus,
  };
}
