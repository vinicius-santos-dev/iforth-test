import { mockDb } from "@/src/lib/mockDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(mockDb.getAllProductions());
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newProduction = mockDb.addProduction(body);
    return NextResponse.json(newProduction, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao criar apontamento: ${error}` },
      { status: 500 }
    );
  }
}