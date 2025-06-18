import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (
      username === "iforth.development.test" &&
      password === "famosaSenha123"
    ) {
      return NextResponse.json({ name: username }, { status: 200 });
    }
    return NextResponse.json(
      { error: "Credenciais inválidas" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao tentar logar, ${error}` },
      { status: 500 }
    );
  }
}
