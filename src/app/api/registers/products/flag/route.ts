import { mockDb } from "@/src/lib/mockDb";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const { id } = await req.json();

    const updatedProduct = mockDb.toggleStatus(id);
    if (!updatedProduct) {
      return NextResponse.json(
        { error: "Produto não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao atualizar status, ${error}` },
      { status: 500 }
    );
  }
}
