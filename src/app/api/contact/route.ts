import { NextRequest, NextResponse } from "next/server";
import { sendContactFormEmail, ContactFormData } from "../../../lib/email";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, lastName, email, company, subject, message } = body;

    if (!name || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, last name, email, subject, and message are required",
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
      console.log("Email disabled - Contact form submission received:", {
        name,
        lastName,
        email,
        company,
        subject,
      });
      return NextResponse.json({
        success: true,
        message: "Contact form submitted (email notifications disabled)",
      });
    }

    const contactData: ContactFormData = {
      name: name.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    await sendContactFormEmail(contactData);

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to process contact form. Please try again later." },
      { status: 500 }
    );
  }
}
