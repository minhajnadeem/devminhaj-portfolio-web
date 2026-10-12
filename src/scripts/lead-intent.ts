// Intent only: a contact-link click does not establish that an enquiry was sent.
// No analytics provider or network request is configured here.
type LeadIntent = {
  event: 'contact_intent';
  contact_method: 'email' | 'whatsapp' | 'upwork';
  page_path: string;
  project_context?: string;
  service_context?: string;
};
type AnalyticsWindow = Window & { dataLayer?: unknown[] };

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>('a[href]');
  if (!link) return;
  const url = new URL(link.href, window.location.origin);
  const method = url.protocol === 'mailto:' ? 'email'
    : url.hostname === 'wa.me' ? 'whatsapp'
    : url.hostname === 'www.upwork.com' && url.pathname.startsWith('/freelancers/') ? 'upwork'
    : null;
  if (!method) return;
  const contactContext = document.querySelector<HTMLElement>('[data-contact-context]');
  const detail: LeadIntent = {
    event: 'contact_intent',
    contact_method: method,
    page_path: window.location.pathname,
    ...(contactContext?.dataset.project ? { project_context: contactContext.dataset.project } : {}),
    ...(contactContext?.dataset.service ? { service_context: contactContext.dataset.service } : {}),
  };
  const targetWindow = window as AnalyticsWindow;
  (targetWindow.dataLayer ??= []).push(detail);
  window.dispatchEvent(new CustomEvent('portfolio:contact-intent', { detail }));
});
