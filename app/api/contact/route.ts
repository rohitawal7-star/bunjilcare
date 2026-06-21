import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `🩺 New Care Enquiry - ${name}`,
      
        html: `
        <div style="font-family: Arial, sans-serif; background:#f4f8fb; padding:30px;">
          
          <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e6eef5;">
            
            <!-- Header -->
            <div style="background:#0077b6;color:white;padding:20px;text-align:center;">
              <h2 style="margin:0;font-size:20px;">New Patient / Care Enquiry</h2>
              <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">
                Bunjil Care Service Notification
              </p>
            </div>
      
            <!-- Body -->
            <div style="padding:20px;color:#333;">
      
              <h3 style="margin-bottom:15px;color:#0077b6;">Contact Details</h3>
      
              <table style="width:100%;font-size:14px;">
                <tr>
                  <td style="padding:8px 0;"><strong>Name</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;"><strong>Email</strong></td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;"><strong>Phone</strong></td>
                  <td>${phone}</td>
                </tr>
              </table>
      
              <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
      
              <h3 style="color:#0077b6;">Message</h3>
      
              <div style="background:#f8fbff;padding:15px;border-radius:8px;font-size:14px;line-height:1.6;">
                ${message}
              </div>
      
            </div>
      
            <!-- Footer -->
            <div style="background:#f1f7fb;padding:15px;text-align:center;font-size:12px;color:#666;">
              This message was submitted via your website contact form.
            </div>
      
          </div>
        </div>
        `,
      });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Mail Error:", error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}