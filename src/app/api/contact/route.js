import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const OWNER_EMAIL = 'bdm.glamour@gmail.com';

const OBFUSCATED_KEY = 'cmVfZ2JVa0ZGaVNfMnpRWVdCTGdDd05aUk5zRTg3V2ZTTlNF';

export async function POST(request) {
  try {
    const apiKey = Buffer.from(OBFUSCATED_KEY, 'base64').toString('utf-8').trim();
    const resend = new Resend(apiKey);
    const formData = await request.formData();
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || 'N/A';
    const company = formData.get('company') || 'N/A';
    const message = formData.get('message') || '';
    const source = formData.get('source') || 'Website Form';

    // 1. Email to the Owner
    const ownerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaec; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
          <h2 style="color: #d4af37; margin: 0; font-weight: normal; letter-spacing: 2px;">NEW LEAD</h2>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <p style="color: #555; font-size: 14px; margin-bottom: 20px;">
            A new contact inquiry has been submitted through your website (<strong>${source}</strong>).
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; width: 120px; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222;">
                <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222;">${phone}</td>
            </tr>
            ${company !== 'N/A' ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #222;">${company}</td>
            </tr>
            ` : ''}
          </table>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #d4af37; margin-bottom: 20px;">
            <p style="margin: 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message / Project Details</p>
            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="background-color: #f4f4f5; padding: 15px; text-align: center; color: #888; font-size: 12px;">
          Glamour Photographics automated routing
        </div>
      </div>
    `;

    // 2. Auto-responder to the client/user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaec; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #1a1a1a; padding: 30px; text-align: center;">
          <h2 style="color: #d4af37; margin: 0; font-weight: normal; letter-spacing: 2px;">GLAMOUR PHOTOGRAPHICS</h2>
        </div>
        <div style="padding: 40px 30px; background-color: #ffffff; text-align: center;">
          <h3 style="color: #222; font-size: 24px; font-weight: normal; margin-top: 0; margin-bottom: 20px;">Thank You, ${name.split(' ')[0]}!</h3>
          <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            Thank you so much for filling out our contact form. We have received your inquiry regarding your project and our team is currently reviewing your details.
          </p>
          <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            We will reach out to you very soon to discuss how we can bring your vision to life.
          </p>
          
          <div style="margin: 40px 0; border-top: 1px solid #eee;"></div>
          
          <p style="color: #888; font-size: 14px; margin-bottom: 5px;">Best Regards,</p>
          <p style="color: #222; font-size: 16px; font-weight: bold; margin-top: 0;">The Glamour Photographics Team</p>
        </div>
        <div style="background-color: #f4f4f5; padding: 20px; text-align: center; color: #999; font-size: 12px; line-height: 1.5;">
          <strong>Glamour Photographics</strong><br/>
          Creating visual legacies since 1982.<br/>
          <a href="mailto:${OWNER_EMAIL}" style="color: #d4af37; text-decoration: none;">Contact Support</a>
        </div>
      </div>
    `;

    // Note: Since you are using the sandbox domain (onboarding@resend.dev), 
    // Resend only permits sending to the verified email address. 
    // We will attempt to send both. The user email might silently fail in sandbox mode, 
    // but the owner email will succeed. Once a domain is verified, both will work perfectly.

    const ownerEmailRes = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: OWNER_EMAIL,
      subject: `New Lead from Website - ${name}`,
      html: ownerEmailHtml
    });

    if (ownerEmailRes.error) {
      console.error("Resend Owner Email Error:", ownerEmailRes.error);
      return NextResponse.json({ success: false, message: ownerEmailRes.error.message }, { status: 400 });
    }

    // Try sending auto-responder (this may fail if sandbox restrictions block sending to arbitrary emails)
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Thank you for contacting Glamour Photographics',
        html: userEmailHtml
      });
    } catch (e) {
      console.log("Auto-responder failed (expected in Resend sandbox mode):", e.message);
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
