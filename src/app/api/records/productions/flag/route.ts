import { mockDb } from "@/src/lib/mockDb";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const { id } = await req.json();

    const updatedProduction = mockDb.toggleProductionStatus(id);
    if (!updatedProduction) {
      return NextResponse.json(
        { error: "Apontamento não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProduction);
  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao atualizar status, ${error}` },
      { status: 500 }
    );
  }
}