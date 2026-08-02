import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    await resend.emails.send({
      from: "Bunjil Care <enquiries@bunjilcareservice.com.au>",
      to: ["enquiries@bunjilcareservice.com.au"],
      replyTo: email,
      subject: `🩺 New Care Enquiry - ${name}`,

      html: `
      <div style="font-family: Arial, sans-serif; background:#f4f8fb; padding:30px;">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e6eef5;">

          <div style="background:#0077b6;color:white;padding:20px;text-align:center;">
            <h2>New Patient / Care Enquiry</h2>
            <p>Bunjil Care Service Notification</p>
          </div>

          <div style="padding:20px;">

            <p><strong>Name:</strong> ${name}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Phone:</strong> ${phone}</p>

            <hr>

            <p><strong>Message</strong></p>

            <p>${message}</p>

          </div>

        </div>
      </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
