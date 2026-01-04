import { NextRequest, NextResponse } from "next/server";
import { sendDemoRequestEmail, DemoRequestData } from "../../../lib/email";

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      company,
      role,
      employees,
      frameworks,
      message,
    } = body;

    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: firstName, lastName, email, and company are required",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (process.env.EMAIL_ENABLED !== "true") {
      console.log("Email disabled - Demo request received:", {
        firstName,
        lastName,
        email,
        company,
      });
      return NextResponse.json({
        success: true,
        message: "Demo request received (email notifications disabled)",
      });
    }

    const demoData: DemoRequestData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      role: role?.trim(),
      employees: employees?.trim(),
      frameworks: frameworks?.trim(),
      message: message?.trim(),
    };

    await sendDemoRequestEmail(demoData);

    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully",
    });
  } catch (error) {
    console.error("Demo request error:", error);

    return NextResponse.json(
      { error: "Failed to process demo request. Please try again later." },
      { status: 500 }
    );
  }
}
