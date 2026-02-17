import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.count();

    return NextResponse.json({
      status: "ok",
      users,
    });
  } catch (error) {
    console.error("Health check failed:", error);

    return NextResponse.json(
      {
        status: "error",
        users: 0,
      },
      { status: 500 }
    );
  }
}

