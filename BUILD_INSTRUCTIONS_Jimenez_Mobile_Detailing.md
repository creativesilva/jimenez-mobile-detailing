# Codex Build Instructions — Jimenez Mobile Detailing Website

## Project Goal

Build a premium, modern, mobile-first website for **Jimenez Mobile Detailing**, a top-tier mobile auto detailing service based in the **Paso Robles area**.

The site should feel simple, high-end, fast, and intuitive. The primary user journey is:

1. Visitor lands on the site.
2. Visitor immediately understands the service is mobile detailing.
3. Visitor reviews detailing packages.
4. Visitor taps or scrolls to the booking form.
5. Visitor submits a cleaning request.
6. Request is sent through EmailJS to `creativesilva1@gmail.com` for testing.

No shopping cart. No checkout. No payment flow.

---

## Brand Assets

Use the official logo already provided locally by the project owner.

Suggested project location:

```txt
assets/logo/JIMENEZ_Logo.svg
```

The current local source appears to be:

```txt
Downloads/Jimenez_Mobile_Detailing/JIMENEZ_Logo.svg
```

Do not use AI-generated logo PNGs. Use the official SVG logo.

---

## Brand Direction

Create a premium auto-detailing brand experience with a dark, modern, high-contrast interface.

### Required Colors

```css
--black: #050505;
--orange: #e2531b;
--gray: #6d6d6d;
```

### Recommended Accent Color

Use a bright cyan/blue accent sparingly for premium shine/detailing energy:

```css
--accent: #28d8ff;
```

### Supporting Colors

```css
--white: #ffffff;
--soft-white: #f5f5f2;
--dark-card: #111111;
--border: rgba(255,255,255,0.12);
```

### Gradient Usage

Use gradients where they improve the premium feel:

- Hero background glow
- CTA buttons
- Service package highlights
- Subtle section dividers
- Review cards or accent borders

Example:

```css
background: radial-gradient(circle at top right, rgba(226,83,27,0.32), transparent 34%),
            radial-gradient(circle at bottom left, rgba(40,216,255,0.16), transparent 28%),
            #050505;
```

Avoid gradients on text unless subtle and highly readable.

---

## Typography

Use Google Fonts.

### Primary Font

Use **Saira Condensed** or **Rajdhani** for strong automotive headings.

Recommended:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Saira+Condensed:wght@500;600;700;800;900&display=swap" rel="stylesheet">
```

### Font Usage

- `JIMENEZ` / major headings: `Saira Condensed`, uppercase, bold, wide tracking.
- Body and form text: `Inter`.
- Buttons: `Inter`, uppercase or semi-uppercase, strong weight.

---

## Technical Stack

Build as a static, GitHub Pages-friendly project.

Recommended implementation:

- Vite
- React
- TypeScript
- Plain CSS or CSS modules
- EmailJS for form submission

No backend required.

The website must deploy cleanly to GitHub Pages.

---

## Required Pages / Sections

This can be a single-page website with anchored sections.

### 1. Header

Mobile-first sticky header.

Must include:

- Logo
- Simple nav links:
  - Services
  - Gallery
  - Reviews
  - Book
- Tap-to-call button on mobile:
  - `tel:8055914562`

Header should collapse nicely on mobile. Avoid clutter.

---

### 2. Hero Section

Purpose: instantly communicate premium mobile detailing.

Content direction:

```txt
Premium Mobile Auto Detailing
We come to you in the Paso Robles area.
```

Recommended CTA buttons:

- `Book a Detail`
- `Text 805-591-4562`

Hero should include:

- Official logo
- Strong dark background
- Orange glow/accent
- Optional hero vehicle/detailing photo placeholder
- Trust-style microcopy:
  - Fully mobile
  - Interior & exterior
  - Request-based scheduling
  - Serving Paso Robles area

Do not overcomplicate the hero.

---

### 3. Services / Packages Section

This is the most important content section besides the booking form.

Use clean package cards. Each package should have:

- Package name
- Short description
- Placeholder starting price
- Included services
- CTA to select package in booking form

Use the client’s current package structure from the screenshot.

#### Package 1 — Essential Detail

Placeholder price:

```txt
Starting at $95
```

Includes:

- Exterior wash
- Wheels & tires
- Interior vacuum
- Interior wipe down
- Windows

Description:

```txt
A clean refresh for vehicles that need a solid maintenance detail.
```

#### Package 2 — Signature Detail

Placeholder price:

```txt
Starting at $165
```

Includes:

- Everything in Essential Detail
- Door jambs
- Wheel wells
- Interior protection
- Floor mat cleaning

Description:

```txt
A deeper clean with added protection and attention to commonly missed areas.
```

Mark this as the recommended package.

#### Package 3 — Complete Detail

Placeholder price:

```txt
Starting at $245
```

Includes:

- Exterior wash
- Wheels & tires
- Wheel wells
- Spray ceramic sealant
- Trim dressing
- Door jambs
- Deep vacuum
- Interior plastics cleaned & protected
- Windows

Description:

```txt
The full-service detail for vehicles needing a premium inside-and-out reset.
```

#### Add-ons

Create a separate add-ons card or accordion:

- Heavy dirt / mud
- Excessive pet hair removal
- Water spot treatment
- Decontamination
- Ceramic spray protection
- Carpet / seat shampoo
- Leather conditioning

Include note:

```txt
Final pricing may vary based on vehicle size, condition, and selected add-ons.
```

---

### 4. Gallery Section

Use Instagram/client images once available.

For now, create image placeholders using:

```txt
assets/images/
```

Recommended filenames:

```txt
assets/images/detail-01.jpg
assets/images/detail-02.jpg
assets/images/detail-03.jpg
assets/images/detail-04.jpg
assets/images/before-after-01.jpg
assets/images/before-after-02.jpg
```

If images are missing, show tasteful placeholder cards with labels like:

```txt
Before & After Coming Soon
Interior Detail
Exterior Wash
Wheel & Tire Detail
```

Do not let broken images appear.

Gallery style:

- Modern card grid
- Rounded corners
- Dark overlay captions
- Optional before/after layout
- Mobile swipe-friendly grid

---

### 5. Reviews Section

Client does not have Google Business yet, but will soon.

Add a placeholder Google review section.

Content:

```txt
Google Reviews Coming Soon
Jimenez Mobile Detailing is preparing its Google Business profile. Check back soon for verified customer reviews.
```

Include three placeholder review cards clearly marked as placeholders or hidden behind “coming soon” styling.

Do not fabricate real customer reviews.

---

### 6. Booking Form Section

This is the key conversion feature.

The form should be polished, simple, and easy to complete on iOS and Android.

Required fields:

- Full name
- Mobile number for text reply
- Vehicle year
- Vehicle make
- Vehicle model
- Package dropdown
- Preferred cleaning date
- Optional notes
- Add-ons checkboxes
- Consent checkbox:
  - `I understand this date is a request and is not guaranteed until confirmed by Jimenez Mobile Detailing.`

Package dropdown options:

```txt
Essential Detail
Signature Detail
Complete Detail
Not sure — help me choose
```

Preferred date:

- Use native date input for mobile reliability.
- Label it clearly:
  - `Preferred cleaning date`
- Helper text:
  - `This is a requested date only. Jimenez Mobile Detailing will text you to confirm availability.`

Submit button:

```txt
Request My Detail
```

Success state:

```txt
Thanks — your request was sent. Jimenez Mobile Detailing will text you back to confirm availability.
```

Error state:

```txt
Something went wrong. Please text 805-591-4562 directly or try again.
```

Also include a secondary direct CTA:

```txt
Prefer to text? Tap here: 805-591-4562
```

Use:

```html
<a href="sms:8055914562">Text 805-591-4562</a>
```

and/or:

```html
<a href="tel:8055914562">Call 805-591-4562</a>
```

---

## EmailJS Integration

Use EmailJS, not `mailto:`.

Install:

```bash
npm install @emailjs/browser
```

Use environment variables:

```env
VITE_EMAILJS_SERVICE_ID=REPLACE_ME
VITE_EMAILJS_TEMPLATE_ID=REPLACE_ME
VITE_EMAILJS_PUBLIC_KEY=REPLACE_ME
```

Test recipient for now:

```txt
creativesilva1@gmail.com
```

Later, replace with the client’s Gmail inside the EmailJS template/settings.

### EmailJS Template Fields

Configure the EmailJS template to receive these variables:

```txt
from_name
phone
vehicle_year
vehicle_make
vehicle_model
selected_package
preferred_date
addons
notes
reply_to
```

Suggested email subject:

```txt
New Detail Request — {{selected_package}} — {{vehicle_make}} {{vehicle_model}}
```

Suggested email body:

```txt
New Jimenez Mobile Detailing request:

Name: {{from_name}}
Phone: {{phone}}

Vehicle:
{{vehicle_year}} {{vehicle_make}} {{vehicle_model}}

Requested Package:
{{selected_package}}

Requested Date:
{{preferred_date}}

Add-ons:
{{addons}}

Notes:
{{notes}}

Reminder:
Requested date is not guaranteed until confirmed.
```

### Frontend Behavior

When submitting:

- Disable submit button.
- Show loading text:
  - `Sending request...`
- Validate required fields before calling EmailJS.
- On success, reset form.
- On error, show friendly fallback message with text/call CTA.
- Never expose private keys. EmailJS public key is okay to expose as intended.

---

## UX Requirements

The UI must feel premium and intuitive.

Important requirements:

- Strong visual hierarchy
- No clutter
- Large tap targets
- Smooth scrolling to booking form
- Mobile-first spacing
- Form labels always visible
- No hidden mystery interactions
- No required account creation
- No shopping cart
- No payment prompt
- No confusing scheduling language

The booking date must be framed as a request, not a guaranteed appointment.

Use plain language.

Avoid phrases like:

```txt
Checkout
Cart
Purchase
Reserve Now
Guaranteed Appointment
```

Use phrases like:

```txt
Request a Detail
Preferred Date
Text to Confirm
Mobile Service
```

---

## Responsive Requirements

Must work well on:

- iPhone Safari
- Android Chrome
- Small mobile screens
- Tablets
- Desktop

Recommended breakpoints:

```css
480px
768px
1024px
1200px
```

Mobile priorities:

- Sticky CTA or visible booking button
- Single-column package cards
- Large form fields
- No tiny text
- No horizontal scrolling
- Avoid hover-only behavior

---

## Accessibility Requirements

- Use semantic HTML.
- Every form field needs a visible label.
- Use sufficient color contrast.
- Buttons need focus states.
- Images need alt text.
- Do not rely on color alone for key messages.
- Form errors should be text-based and visible.

---

## SEO / Metadata

Add metadata for local service visibility.

Suggested title:

```txt
Jimenez Mobile Detailing | Mobile Auto Detailing in Paso Robles
```

Suggested description:

```txt
Jimenez Mobile Detailing provides mobile interior and exterior auto detailing in the Paso Robles area. Request a detail and get a text confirmation.
```

Suggested keywords:

```txt
mobile detailing Paso Robles, auto detailing Paso Robles, car detailing North County, Jimenez Mobile Detailing
```

Add Open Graph metadata:

```html
<meta property="og:title" content="Jimenez Mobile Detailing">
<meta property="og:description" content="Premium mobile auto detailing in the Paso Robles area.">
<meta property="og:type" content="website">
<meta property="og:image" content="/assets/logo/JIMENEZ_Logo.svg">
```

---

## Suggested File Structure

```txt
jimenez-mobile-detailing/
├── index.html
├── package.json
├── vite.config.ts
├── .env.example
├── README.md
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   ├── data/
│   │   └── packages.ts
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Gallery.tsx
│       ├── Reviews.tsx
│       ├── BookingForm.tsx
│       └── Footer.tsx
└── public/
    └── assets/
        ├── logo/
        │   └── JIMENEZ_Logo.svg
        └── images/
            ├── detail-01.jpg
            ├── detail-02.jpg
            ├── detail-03.jpg
            ├── detail-04.jpg
            ├── before-after-01.jpg
            └── before-after-02.jpg
```

---

## Content Details

### Business Name

```txt
Jimenez Mobile Detailing
```

### Service Area

```txt
Paso Robles Area
```

### Phone

```txt
805-591-4562
```

Use phone links:

```html
tel:8055914562
sms:8055914562
```

### Instagram

```txt
https://www.instagram.com/jimenez_mobile_detailing/
```

Add Instagram link in footer and optional gallery CTA.

---

## Visual Reference

Use this site only as a general reference for structure and service clarity:

```txt
https://www.firmdetailing.com/
```

Do not copy the visual style directly.

Make Jimenez Mobile Detailing:

- Simpler
- More modern
- More mobile-focused
- Darker and more premium
- Easier to book
- Less corporate
- More local and direct

---

## Final QA Checklist

Before completion, verify:

- Logo loads correctly.
- No broken image icons appear.
- Booking form sends through EmailJS.
- Submission email includes all fields.
- Date language says request only, not guaranteed.
- Phone links work on mobile.
- Package dropdown works.
- Package CTA buttons preselect the right package.
- Site is responsive on iPhone-size screens.
- Site works on GitHub Pages.
- No cart or checkout language exists.
- Placeholder pricing is clearly adjustable.
- Google reviews section says coming soon and does not invent real reviews.

---

## Deployment Notes

For GitHub Pages with Vite, configure `vite.config.ts` based on the repository name.

Example:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jimenez-mobile-detailing/',
})
```

If deploying to a custom domain later, update `base` accordingly.

---

## Important Implementation Notes for Codex

Prioritize polish and simplicity over feature count.

The finished site should feel like a premium local detailing brand with a very easy mobile booking flow.

Keep interactions obvious:

- Buttons should look tappable.
- Cards should be readable.
- Form should feel short even though it collects required details.
- The package selection should guide the user, not overwhelm them.
- The visitor should always know the next step.

Do not add features that were not requested, especially ecommerce, checkout, carts, login, or complex scheduling systems.
