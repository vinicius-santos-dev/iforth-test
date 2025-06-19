import { NextRequest, NextResponse } from "next/server";

import { mockProducts } from "@/src/features/products/mocks/mockProducts";

export async function PUT(req: NextRequest) {
  try {
    const { id } = await req.json();

    const product = mockProducts.find((product) => product.id === id);

    if (!product) {
      return NextResponse.json(
        { error: "Produto não encontrado" },
        { status: 404 }
      );
    }

    product.status = product.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao atualizar status: ${error}` },
      { status: 500 }
    );
  }
}
