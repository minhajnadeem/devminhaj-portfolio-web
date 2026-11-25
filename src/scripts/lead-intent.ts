// Intent only: a contact-link click does not establish that an enquiry was sent.
// This script sends nothing itself: it pushes to dataLayer and, only when the optional
// Plausible snippet is enabled (PUBLIC_PLAUSIBLE_DOMAIN), forwards the intent as a custom event.
type LeadIntent = {
	event: "contact_intent";
	contact_method: "email" | "whatsapp" | "upwork";
	page_path: string;
	project_context?: string;
	service_context?: string;
};
type AnalyticsWindow = Window & {
	dataLayer?: unknown[];
	plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
};

document.addEventListener("click", (event) => {
	if (!(event.target instanceof Element)) return;
	const link = event.target.closest<HTMLAnchorElement>("a[href]");
	if (!link) return;
	const url = new URL(link.href, window.location.origin);
	const method =
		url.protocol === "mailto:"
			? "email"
			: url.hostname === "wa.me"
				? "whatsapp"
				: url.hostname === "www.upwork.com" && url.pathname.startsWith("/freelancers/")
					? "upwork"
					: null;
	if (!method) return;
	const contactContext = document.querySelector<HTMLElement>("[data-contact-context]");
	const detail: LeadIntent = {
		event: "contact_intent",
		contact_method: method,
		page_path: window.location.pathname,
		...(contactContext?.dataset.project ? { project_context: contactContext.dataset.project } : {}),
		...(contactContext?.dataset.service ? { service_context: contactContext.dataset.service } : {}),
	};
	const targetWindow = window as AnalyticsWindow;
	(targetWindow.dataLayer ??= []).push(detail);
	targetWindow.plausible?.("Contact intent", {
		props: {
			method,
			page: detail.page_path,
			...(detail.project_context ? { project: detail.project_context } : {}),
			...(detail.service_context ? { service: detail.service_context } : {}),
		},
	});
	window.dispatchEvent(new CustomEvent("portfolio:contact-intent", { detail }));
});
