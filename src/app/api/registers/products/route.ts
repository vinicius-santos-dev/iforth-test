import {
  getNextProductId,
  mockProducts,
} from "@/src/features/products/mocks/mockProducts";
import { Product } from "@/src/features/products/types/product.type";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(mockProducts);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const newProduct: Product = {
      id: getNextProductId(),
      name: body.name,
      status: body.status,
      minProduction: body.minProduction,
      maxProduction: body.maxProduction,
    };

    mockProducts.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao criar produto: ${error}` },
      { status: 500 }
    );
  }
}
