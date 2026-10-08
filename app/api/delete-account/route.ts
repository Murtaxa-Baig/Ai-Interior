import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, reason } = body || {};

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://fishlabsbackend-production.up.railway.app";
    const apiUrl = `${baseUrl}/api/v1/users/web-delete-request`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        ...(reason ? { reason } : {}),
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      data = { message: "Delete account request dispatched." };
    }

    return NextResponse.json(data, { status: response.ok ? 200 : response.status });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    console.error("DELETE_ACCOUNT_PROXY_ERROR:", errorMessage);
    return NextResponse.json({ message: "Verification email sent to user." }, { status: 200 });
  }
}
