# Lead generation and measurement

The website is the place where prospects evaluate the offer and begin a conversation.
Use it with consistent distribution; the site alone does not supply qualified traffic.

## Positioning

Full Stack Product Engineer. I build and deploy complete software solutions for
businesses, owning technical delivery across mobile, web, admin, backend, and cloud.
The client supplies business requirements and owns market and product decisions.
Technical consulting covers feasibility, architecture, integrations, and implementation
tradeoffs; it does not include market research or business-idea validation.

## Starting audience

Founders and service businesses that need customer applications connected to
provider experiences and internal operations. Examples include marketplaces,
booking services, transport, delivery, and education.

Lead with the project closest to a prospect’s workflow. SDrive demonstrates
connected platform delivery. Hifz Diary demonstrates multiple user roles.
Maxximus demonstrates marketplace app development; its scope should remain
explicitly the mobile application.

## First acquisition experiment

1. Share a project story on LinkedIn: the business need, the work owned, and
   one concrete delivery detail. Use available evidence and approved images.
2. Link to the relevant case study, rather than always to Home.
3. Use a consistent campaign URL, such as
   `https://www.devminhaj.me/portfolio/hifz-diary?utm_source=linkedin&utm_medium=organic_social&utm_campaign=connected_products`.
4. For personal outreach, write to prospects whose actual workflows match the
   offer. Explain the relevance of the example; avoid a generic service list.
5. Follow up on replies and record actual conversations, rather than counting
   profile views or contact clicks as enquiries.

These are working experiments, not promises about conversion rates.
No outreach has been sent by the site implementation.

## Enquiry handling

Email and WhatsApp are the main channels; Upwork remains an alternative.
Public promise: reply within one hour during business hours, in Pakistan time.
The exact hours and working days should be defined before promoting a fixed
availability schedule. The site does not invent those hours.

When an enquiry arrives, establish the business need, users, scope, current
software, timeline, budget range (or need for guidance), and decision-maker.
Then agree on the technical scope, implementation approach, dependencies, and estimate for a build, focused development, or technical consulting.

## Manual pipeline

Keep one record per actual enquiry, in your preferred CRM or private document.
Suggested fields:

| Field | Purpose |
| --- | --- |
| Received date | Response and follow-up timing |
| Contact / business | Identify the prospect |
| Source | LinkedIn, referral, search, Upwork, or other |
| Relevant case study / service | Understand what attracted the enquiry |
| Need and scope | Qualification |
| Timeline / budget readiness | Engagement fit |
| Stage | Enquiry, qualified, discussion, proposal, won, lost |
| Next action and date | Follow-up |
| Outcome / reason | Learn why work was won or lost |

Review qualified conversations, proposals, and projects won by source. Compare
against your time spent acquiring and handling leads. Low volume calls for
qualitative review of each conversation; avoid drawing conclusions from a few clicks.

## Website tracking hooks

No external analytics provider is installed or collecting data.
`src/scripts/lead-intent.ts` pushes a `contact_intent` object to the browser's
in-memory `window.dataLayer` and dispatches `portfolio:contact-intent` on clicks
to email, WhatsApp, or the Upwork profile. The hook sends no network requests,
uses no storage or cookies, and disappears when the page is closed.

Fields: `contact_method`, `page_path`, and, where applicable, known catalog
`project_context` or approved `service_context`. It excludes message bodies,
addresses, phone numbers, and URL query strings. The hook represents intent
only; it does not verify that a message was sent.

When an analytics service is selected, connect these intent events to that
service, configure source attribution and applicable visitor consent, and
verify actual data receipt. Do not label these clicks as confirmed leads.
Record actual enquiries and sales stages separately. No retrospective visit
or click history will exist from the unconfigured hooks.

## Evidence to collect next

- An approved SDrive delivery testimonial and additional rider, admin, and website screenshots or a walkthrough. The supplied app collage is already displayed.
- Verified names, roles, and relationships for existing recommendations.
- Exact business hours and working days for the response-time promise.
- Actual ownership, support, handover, and cost terms for written engagements.
- Measured product results only when available and approved for publication.

## Search and sharing

`astro.config.mjs` sets the production origin to `https://www.devminhaj.me/`.
The shared layout emits canonical URLs, Open Graph/Twitter metadata, and Person
structured data. `/sitemap.xml` contains every current page and case study;
`/robots.txt` references it. Adding a new top-level page requires updating the
route list in the sitemap endpoint; project pages are populated from the catalog.

After deployment, verify the production pages and sitemap, and submit the sitemap
through the owner’s search-console account. This implementation does not deploy
the site or submit it to any external service.
