# Vercel Deployment Guide

## Environment Variables

Add these environment variables in your Vercel project settings:

**Project Settings → Environment Variables**

| Variable | Value | Environment |
|----------|-------|-------------|
| `EMAIL_ENABLED` | `true` | Production |
| `SMTP_HOST` | `smtp.gmail.com` | Production |
| `SMTP_PORT` | `587` | Production |
| `SMTP_USER` | `noreply@autenix.co` | Production |
| `SMTP_PASSWORD` | `urcl ujhh oajc ivyu` | Production |
| `SMTP_TLS` | `true` | Production |
| `FROM_EMAIL` | `noreply@autenix.com` | Production |
| `FROM_NAME` | `Autenix Security` | Production |
| `SUPPORT_EMAIL` | `support@autenix.com` | Production |

## Quick Setup Steps

1. **Connect Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository

2. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add each variable from the table above
   - Make sure to select "Production" environment

3. **Deploy**
   - Vercel will automatically build and deploy

## Email Functionality

The demo request form will:
- Send a notification email to `support@autenix.com` with all form details
- Send a confirmation email to the user who submitted the request

## Testing

To test locally before deploying:
```bash
npm run dev
```

The `.env.local` file is already configured for local testing.

## Disabling Email

Set `EMAIL_ENABLED=false` to disable email sending (form submissions will still be logged to console).

