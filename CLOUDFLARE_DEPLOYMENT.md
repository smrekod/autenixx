# Cloudflare Pages Deployment Guide

## Build Configuration

In your Cloudflare Pages dashboard, use these settings:

### Build Settings

- **Build command**: `npm run build:cloudflare`
- **Build output directory**: `.vercel/output/static`
- **Deploy command**: (leave empty - Cloudflare Pages will auto-deploy after build)
  - OR use: `npx wrangler pages deploy .vercel/output/static --project-name=autenix-website`
- **Root directory**: (leave empty or set to your project root)

### Environment Variables

Add these environment variables in Cloudflare Pages:

| Variable        | Value                  | Description                       |
| --------------- | ---------------------- | --------------------------------- |
| `EMAIL_ENABLED` | `true`                 | Enable email sending              |
| `SMTP_HOST`     | `smtp.gmail.com`       | Gmail SMTP server                 |
| `SMTP_PORT`     | `587`                  | SMTP port (587 for TLS)           |
| `SMTP_USER`     | `your-email@gmail.com` | Your Gmail address                |
| `SMTP_PASSWORD` | `your-app-password`    | Gmail App Password (see below)    |
| `FROM_EMAIL`    | `noreply@autenix.com`  | Sender email address              |
| `FROM_NAME`     | `Autenix Security`     | Sender name                       |
| `SUPPORT_EMAIL` | `support@autenix.com`  | Where to receive form submissions |
| `NODE_ENV`      | `production`           | Environment                       |

## Gmail Setup

### Creating a Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Select **Security**
3. Under "How you sign in to Google," select **2-Step Verification** (you must enable this first)
4. At the bottom, select **App passwords**
5. Select **Mail** and **Other (Custom name)**
6. Name it "Autenix Website" or similar
7. Click **Generate**
8. Copy the 16-character password (no spaces)
9. Use this password as your `SMTP_PASSWORD`

**Important**:

- Keep this password secure
- Don't share it in your repository
- Use Cloudflare's environment variables (they're encrypted)

## Email Functionality

The contact forms will:

- ✅ Send notification emails to your `SUPPORT_EMAIL` with form details
- ✅ Send confirmation emails to users who submit forms
- ✅ Work in Cloudflare's Edge Runtime using `worker-mailer`
- ✅ Support Gmail SMTP (and other SMTP providers)

## Testing Locally

1. Copy `.env.example` to `.env.local`
2. Fill in your Gmail credentials
3. Run `npm run dev`
4. Test the contact forms at:
   - `/contact` - Contact form
   - `/demo` - Demo request form

## Deployment Steps

1. **Connect Repository**

   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Connect your Git repository

2. **Configure Build**

   - Set build command: `npm run build:cloudflare`
   - Set build output: `.vercel/output/static`

3. **Add Environment Variables**

   - Go to Settings → Environment Variables
   - Add all variables listed above
   - Make sure to select "Production" environment

4. **Deploy**
   - Click "Save and Deploy"
   - Wait for build to complete (usually 2-3 minutes)

## Troubleshooting

### Emails not sending?

1. **Check environment variables**: Make sure `EMAIL_ENABLED=true` in Cloudflare
2. **Verify Gmail App Password**: Make sure you're using an App Password, not your regular password
3. **Check logs**: In Cloudflare Pages → Deployment → Functions logs
4. **Test SMTP credentials**: Try sending a test email from another tool first

### Build failing?

1. **Check Node version**: Make sure Cloudflare is using Node.js 20+
2. **Clear cache**: In Cloudflare Pages → Settings → Clear build cache
3. **Check dependencies**: Run `npm install` locally to verify

### Forms submitting but no emails?

1. **Check `EMAIL_ENABLED`**: Must be set to `"true"` (string, not boolean)
2. **Check SMTP settings**: Verify host, port, username, and password
3. **Check spam folder**: Confirmation emails might be in spam
4. **Gmail security**: Make sure 2-Step Verification is enabled and App Password is created

## Alternative SMTP Providers

If you don't want to use Gmail, you can use other SMTP providers:

### SendGrid

- `SMTP_HOST=smtp.sendgrid.net`
- `SMTP_PORT=587`
- Get API key from SendGrid dashboard

### Mailgun

- `SMTP_HOST=smtp.mailgun.org`
- `SMTP_PORT=587`
- Get credentials from Mailgun dashboard

### AWS SES

- `SMTP_HOST=email-smtp.us-east-1.amazonaws.com`
- `SMTP_PORT=587`
- Get SMTP credentials from AWS SES console

## Support

For issues or questions:

- Check Cloudflare Pages documentation: https://developers.cloudflare.com/pages/
- Check worker-mailer documentation: https://github.com/zou-yu/worker-mailer
