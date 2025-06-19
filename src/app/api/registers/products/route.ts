import { mockDb } from "@/src/lib/mockDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(mockDb.getAll());
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newProduct = mockDb.add(body);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao criar produto ${error}` },
      { status: 500 }
    );
  }
}
