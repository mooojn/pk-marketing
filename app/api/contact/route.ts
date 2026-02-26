import { NextResponse } from "next/server";

type ContactPayload = {
  formType?: "hero" | "contact";
  source?: string;
  email?: string;
  website?: string;
  fullName?: string;
  phoneNumber?: string;
  selectedPackage?: string;
  budget?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "info@adzomarketing.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Adzo Marketing <onboarding@resend.dev>";

    const formType = body.formType || "contact";
    const source = body.source || (formType === "hero" ? "Hero Form" : "Contact Form");

    let subject = `New ${source} Submission`;
    let html = "";
    let text = "";

    if (formType === "hero") {
      subject = "New Hero Lead Submission";
      html = `
        <h2>New Hero Lead</h2>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Email:</strong> ${body.email || "N/A"}</p>
        <p><strong>Website:</strong> ${body.website || "N/A"}</p>
      `;
      text = `New Hero Lead\nSource: ${source}\nEmail: ${body.email || "N/A"}\nWebsite: ${body.website || "N/A"}`;
    } else {
      subject = "New Contact Form Submission";
      html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Full Name:</strong> ${body.fullName || "N/A"}</p>
        <p><strong>Phone:</strong> ${body.phoneNumber || "N/A"}</p>
        <p><strong>Package:</strong> ${body.selectedPackage || "N/A"}</p>
        <p><strong>Budget:</strong> ${body.budget || "N/A"}</p>
      `;
      text = `New Contact Form Submission\nSource: ${source}\nFull Name: ${body.fullName || "N/A"}\nPhone: ${body.phoneNumber || "N/A"}\nPackage: ${body.selectedPackage || "N/A"}\nBudget: ${body.budget || "N/A"}`;
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        html,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      return NextResponse.json({ error: `Resend failed: ${errorBody}` }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
