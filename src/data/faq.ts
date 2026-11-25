/** Engagement FAQ (single source for the visible FAQ and FAQPage JSON-LD). */
export interface FaqItem {
	question: string;
	answer: string;
}

export const engagementFaq: FaqItem[] = [
	{
		question: 'What technical work can you take on?',
		answer:
			'I build complete software solutions across mobile apps, websites, admin panels, backend systems, and cloud deployment. I also take focused development and technical consulting engagements. We review your requirements and dependencies to agree on the work I’ll own.',
	},
	{
		question: 'What happens in our first discussion?',
		answer:
			'We review your software requirements, user workflows, existing systems, integrations, and deployment needs. The discussion defines the technical scope and delivery approach for implementation or technical consulting.',
	},
	{
		question: 'How are scope and cost agreed?',
		answer:
			'We define the technical deliverables before estimating the build. For complex work, technical scoping covers architecture, integration dependencies, implementation milestones, and an estimate. The scope and any scoping fee are agreed before work begins.',
	},
	{
		question: 'How will I see progress?',
		answer:
			'Implementation is organized into reviewable milestones, with demonstrations of working features and connected systems. We agree on the review schedule and communication channel for the engagement.',
	},
	{
		question: 'What if requirements change?',
		answer:
			'We review the change against the agreed technical scope and discuss its effect on the estimate and delivery plan before including it in the work.',
	},
	{
		question: 'Who controls the code and accounts?',
		answer:
			'Source code handover, access to hosting and service accounts, and ownership terms are agreed as part of the engagement. We discuss these details before the build begins.',
	},
	{
		question: 'Are hosting and third-party services included?',
		answer:
			'Hosting, app-store accounts, paid APIs, and subscriptions can carry separate costs. We identify the services the software needs and agree how those costs and accounts will be handled.',
	},
	{
		question: 'What happens after delivery?',
		answer:
			'Handover and any post-deployment maintenance or support are scoped as part of the project. We agree on what is included and how ongoing technical work will be handled.',
	},
];
