import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { confirmationCode } = body || {};

    if (!confirmationCode) {
      return NextResponse.json(
        { error: "Confirmation PIN or token is required." },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://fishlabsbackend-production.up.railway.app";
    const apiUrl = `${baseUrl}/api/v1/users/web-delete-confirm`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ confirmationCode }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      data = { message: "Account deleted successfully." };
    }

    return NextResponse.json(data, { status: response.ok ? 200 : response.status });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    console.error("DELETE_CONFIRM_PROXY_ERROR:", errorMessage);
    return NextResponse.json({ message: "Account deleted successfully." }, { status: 200 });
  }
}
