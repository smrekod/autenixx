// Dynamic imports for email - use nodemailer locally, worker-mailer in Cloudflare
let nodemailer: any = null;
let WorkerMailer: any = null;

export interface DemoRequestData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role?: string;
  employees?: string;
  frameworks?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

// Check if we're running in Cloudflare Workers environment
function isCloudflareWorkers() {
  // Check for Cloudflare-specific globals
  try {
    return (
      typeof globalThis !== "undefined" &&
      (globalThis.caches !== undefined ||
        typeof globalThis.navigator === "undefined" ||
        process.env.CF_PAGES === "1" ||
        process.env.CF_PAGES_BRANCH)
    );
  } catch {
    return false;
  }
}

// Unified email sending function that works with both nodemailer and worker-mailer
async function sendEmail(
  mailer: any,
  options: {
    from: { name: string; email: string };
    to: { email: string };
    subject: string;
    html: string;
    reply?: { email: string };
  }
) {
  const isCloudflare = isCloudflareWorkers();

  if (isCloudflare) {
    // worker-mailer API
    return await mailer.send({
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      reply: options.reply,
    });
  } else {
    // nodemailer API
    return await mailer.sendMail({
      from: `"${options.from.name}" <${options.from.email}>`,
      to: options.to.email,
      subject: options.subject,
      html: options.html,
      replyTo: options.reply?.email,
    });
  }
}

// Create mailer instance - uses nodemailer locally, worker-mailer in Cloudflare
async function getMailer() {
  if (process.env.EMAIL_ENABLED !== "true") {
    return null;
  }

  const isCloudflare = isCloudflareWorkers();

  // Use worker-mailer in Cloudflare Workers
  if (isCloudflare) {
    if (!WorkerMailer) {
      try {
        const module = await import("worker-mailer");
        WorkerMailer = module.WorkerMailer;
      } catch (e) {
        console.error("Failed to load worker-mailer:", e);
        return null;
      }
    }

    return await WorkerMailer.connect({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      credentials: {
        username: process.env.SMTP_USER || "",
        password: process.env.SMTP_PASSWORD || "",
      },
      authType: "plain",
    });
  }

  // Use nodemailer for local development
  if (!nodemailer) {
    try {
      nodemailer = await import("nodemailer");
    } catch (e) {
      console.error("Failed to load nodemailer:", e);
      return null;
    }
  }

  return nodemailer.default.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASSWORD || "",
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });
}

const frameworkLabels: Record<string, string> = {
  soc2: "SOC 2",
  iso27001: "ISO 27001",
  hipaa: "HIPAA",
  pci: "PCI-DSS",
  gdpr: "GDPR",
  multiple: "Multiple Frameworks",
};

export async function sendDemoRequestEmail(data: DemoRequestData) {
  const frameworkLabel = data.frameworks
    ? frameworkLabels[data.frameworks] || data.frameworks
    : "Not specified";

  const internalEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <tr>
            <td style="background: linear-gradient(135deg, #0066FF 0%, #0052cc 100%); padding: 32px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Demo Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 24px;">
                    <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #18181b; border-bottom: 2px solid #e4e4e7; padding-bottom: 8px;">Contact Information</h2>
                    <table width="100%" cellpadding="8" cellspacing="0" style="background-color: #fafafa; border-radius: 8px;">
                      <tr>
                        <td style="color: #71717a; width: 140px; font-size: 14px;">Name</td>
                        <td style="color: #18181b; font-weight: 500; font-size: 14px;">${
                          data.firstName
                        } ${data.lastName}</td>
                      </tr>
                      <tr>
                        <td style="color: #71717a; font-size: 14px;">Email</td>
                        <td style="font-size: 14px;"><a href="mailto:${
                          data.email
                        }" style="color: #0066FF; text-decoration: none;">${
    data.email
  }</a></td>
                      </tr>
                      <tr>
                        <td style="color: #71717a; font-size: 14px;">Company</td>
                        <td style="color: #18181b; font-weight: 500; font-size: 14px;">${
                          data.company
                        }</td>
                      </tr>
                      ${
                        data.role
                          ? `<tr><td style="color: #71717a; font-size: 14px;">Job Title</td><td style="color: #18181b; font-size: 14px;">${data.role}</td></tr>`
                          : ""
                      }
                      ${
                        data.employees
                          ? `<tr><td style="color: #71717a; font-size: 14px;">Company Size</td><td style="color: #18181b; font-size: 14px;">${data.employees} employees</td></tr>`
                          : ""
                      }
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 24px;">
                    <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #18181b; border-bottom: 2px solid #e4e4e7; padding-bottom: 8px;">Compliance Interest</h2>
                    <table width="100%" cellpadding="8" cellspacing="0" style="background-color: #fafafa; border-radius: 8px;">
                      <tr>
                        <td style="color: #71717a; width: 140px; font-size: 14px;">Framework</td>
                        <td style="font-size: 14px;"><span style="background-color: #0066FF; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500;">${frameworkLabel}</span></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${
                  data.message
                    ? `
                <tr>
                  <td>
                    <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #18181b; border-bottom: 2px solid #e4e4e7; padding-bottom: 8px;">Message</h2>
                    <div style="background-color: #fafafa; border-radius: 8px; padding: 16px; color: #3f3f46; font-size: 14px; line-height: 1.6;">${data.message.replace(
                      /\n/g,
                      "<br>"
                    )}</div>
                  </td>
                </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #fafafa; padding: 20px 32px; text-align: center; border-top: 1px solid #e4e4e7;">
              <p style="margin: 0; color: #71717a; font-size: 12px;">This is an automated notification from Autenix Demo Request System</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const confirmationEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <tr>
            <td style="background: linear-gradient(135deg, #0066FF 0%, #0052cc 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0 0 8px 0; font-size: 28px; font-weight: 700;">Autenix</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Compliance Automation Platform</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 24px; color: #18181b;">Thank you, ${
                data.firstName
              }!</h2>
              <p style="color: #52525b; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                We've received your demo request and are excited to show you how Autenix can transform your compliance journey.
              </p>
              <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #0066FF;">
                <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #0066FF;">What happens next?</h3>
                <ul style="margin: 0; padding-left: 20px; color: #374151; font-size: 14px; line-height: 1.8;">
                  <li>Our team will review your request within 24 hours</li>
                  <li>A compliance expert will reach out to schedule your demo</li>
                  <li>We'll prepare a personalized walkthrough based on your needs</li>
                </ul>
              </div>
              <p style="color: #52525b; font-size: 14px; line-height: 1.6; margin: 0 0 24px 0;">
                In the meantime, feel free to explore our resources or reach out if you have any questions.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://autenix.co" style="display: inline-block; background: linear-gradient(135deg, #0066FF 0%, #0052cc 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">Visit Our Website</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #fafafa; padding: 24px 32px; text-align: center; border-top: 1px solid #e4e4e7;">
              <p style="margin: 0 0 8px 0; color: #71717a; font-size: 13px;">Questions? Contact us at <a href="mailto:${
                process.env.SUPPORT_EMAIL || "support@autenix.co"
              }" style="color: #0066FF; text-decoration: none;">${
    process.env.SUPPORT_EMAIL || "support@autenix.co"
  }</a></p>
              <p style="margin: 0; color: #a1a1aa; font-size: 12px;">© ${new Date().getFullYear()} Autenix. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const mailer = await getMailer();
  if (!mailer) {
    throw new Error("Email mailer not available");
  }

  const fromEmail =
    process.env.FROM_EMAIL || process.env.SMTP_USER || "noreply@autenix.co";
  const fromName = process.env.FROM_NAME || "Autenix Security";

  const isCloudflare = isCloudflareWorkers();

  // Send internal notification email
  const internalEmail = isCloudflare
    ? await mailer.send({
        from: { name: fromName, email: fromEmail },
        to: { email: process.env.SUPPORT_EMAIL || "support@autenix.co" },
        subject: `New Demo Request: ${data.firstName} ${data.lastName} from ${data.company}`,
        html: internalEmailHtml,
        reply: { email: data.email },
      })
    : await mailer.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: process.env.SUPPORT_EMAIL || "support@autenix.co",
        subject: `New Demo Request: ${data.firstName} ${data.lastName} from ${data.company}`,
        html: internalEmailHtml,
        replyTo: data.email,
      });

  // Send confirmation email to user
  const confirmationEmail = isCloudflare
    ? await mailer.send({
        from: { name: fromName, email: fromEmail },
        to: { email: data.email },
        subject: "Your Autenix Demo Request Confirmation",
        html: confirmationEmailHtml,
      })
    : await mailer.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: data.email,
        subject: "Your Autenix Demo Request Confirmation",
        html: confirmationEmailHtml,
      });

  return { internalEmail, confirmationEmail };
}

export async function sendContactFormEmail(data: ContactFormData) {
  const subjectLabels: Record<string, string> = {
    sales: "Sales Inquiry",
    support: "Support Question",
    partnership: "Partnership",
    other: "Other Inquiry",
  };

  const recipientEmails: Record<string, string> = {
    sales: "sales@autenix.co",
    support: process.env.SUPPORT_EMAIL || "support@autenix.co",
    partnership: "partners@autenix.co",
    other: "info@autenix.co",
  };

  const subjectLabel = subjectLabels[data.subject] || data.subject;
  const recipientEmail = recipientEmails[data.subject] || "info@autenix.co";

  const internalEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <tr>
            <td style="background: linear-gradient(135deg, #0066FF 0%, #0052cc 100%); padding: 32px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 24px;">
                    <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #18181b; border-bottom: 2px solid #e4e4e7; padding-bottom: 8px;">Contact Information</h2>
                    <table width="100%" cellpadding="8" cellspacing="0" style="background-color: #fafafa; border-radius: 8px;">
                      <tr>
                        <td style="color: #71717a; width: 140px; font-size: 14px;">Name</td>
                        <td style="color: #18181b; font-weight: 500; font-size: 14px;">${
                          data.name
                        }</td>
                      </tr>
                      <tr>
                        <td style="color: #71717a; font-size: 14px;">Email</td>
                        <td style="font-size: 14px;"><a href="mailto:${
                          data.email
                        }" style="color: #0066FF; text-decoration: none;">${
    data.email
  }</a></td>
                      </tr>
                      ${
                        data.company
                          ? `<tr><td style="color: #71717a; font-size: 14px;">Company</td><td style="color: #18181b; font-weight: 500; font-size: 14px;">${data.company}</td></tr>`
                          : ""
                      }
                      <tr>
                        <td style="color: #71717a; font-size: 14px;">Subject</td>
                        <td style="font-size: 14px;"><span style="background-color: #0066FF; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500;">${subjectLabel}</span></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #18181b; border-bottom: 2px solid #e4e4e7; padding-bottom: 8px;">Message</h2>
                    <div style="background-color: #fafafa; border-radius: 8px; padding: 16px; color: #3f3f46; font-size: 14px; line-height: 1.6;">${data.message.replace(
                      /\n/g,
                      "<br>"
                    )}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #fafafa; padding: 20px 32px; text-align: center; border-top: 1px solid #e4e4e7;">
              <p style="margin: 0; color: #71717a; font-size: 12px;">This is an automated notification from Autenix Contact Form</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const confirmationEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <tr>
            <td style="background: linear-gradient(135deg, #0066FF 0%, #0052cc 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0 0 8px 0; font-size: 28px; font-weight: 700;">Autenix</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Compliance Automation Platform</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 24px; color: #18181b;">Thank you for contacting us, ${
                data.name.split(" ")[0]
              }!</h2>
              <p style="color: #52525b; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                We've received your message and will get back to you as soon as possible. Our team typically responds within 24 hours.
              </p>
              <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #0066FF;">
                <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #0066FF;">What happens next?</h3>
                <ul style="margin: 0; padding-left: 20px; color: #374151; font-size: 14px; line-height: 1.8;">
                  <li>Our team will review your message</li>
                  <li>We'll respond to your inquiry within 24 hours</li>
                  <li>If urgent, feel free to reach out directly</li>
                </ul>
              </div>
              <p style="color: #52525b; font-size: 14px; line-height: 1.6; margin: 0 0 24px 0;">
                In the meantime, feel free to explore our resources or check out our documentation.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://autenix.co" style="display: inline-block; background: linear-gradient(135deg, #0066FF 0%, #0052cc 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">Visit Our Website</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #fafafa; padding: 24px 32px; text-align: center; border-top: 1px solid #e4e4e7;">
              <p style="margin: 0 0 8px 0; color: #71717a; font-size: 13px;">Questions? Contact us at <a href="mailto:${
                process.env.SUPPORT_EMAIL || "support@autenix.co"
              }" style="color: #0066FF; text-decoration: none;">${
    process.env.SUPPORT_EMAIL || "support@autenix.co"
  }</a></p>
              <p style="margin: 0; color: #a1a1aa; font-size: 12px;">© ${new Date().getFullYear()} Autenix. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const mailer = await getMailer();
  if (!mailer) {
    throw new Error("Email mailer not available");
  }

  const fromEmail =
    process.env.FROM_EMAIL || process.env.SMTP_USER || "noreply@autenix.co";
  const fromName = process.env.FROM_NAME || "Autenix Security";

  const isCloudflare = isCloudflareWorkers();

  // Send internal notification email
  const internalEmail = isCloudflare
    ? await mailer.send({
        from: { name: fromName, email: fromEmail },
        to: { email: recipientEmail },
        subject: `New Contact Form: ${subjectLabel} from ${data.name}${
          data.company ? ` at ${data.company}` : ""
        }`,
        html: internalEmailHtml,
        reply: { email: data.email },
      })
    : await mailer.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: recipientEmail,
        subject: `New Contact Form: ${subjectLabel} from ${data.name}${
          data.company ? ` at ${data.company}` : ""
        }`,
        html: internalEmailHtml,
        replyTo: data.email,
      });

  // Send confirmation email to user
  const confirmationEmail = isCloudflare
    ? await mailer.send({
        from: { name: fromName, email: fromEmail },
        to: { email: data.email },
        subject: "Thank you for contacting Autenix",
        html: confirmationEmailHtml,
      })
    : await mailer.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: data.email,
        subject: "Thank you for contacting Autenix",
        html: confirmationEmailHtml,
      });

  return { internalEmail, confirmationEmail };
}

export async function verifyEmailConnection() {
  try {
    const mailer = await getMailer();
    if (!mailer) {
      return false;
    }
    // worker-mailer doesn't have a verify method, so we just check if it's created
    return true;
  } catch {
    return false;
  }
}
