/**
 * Skills data derived from content/skills.md.
 * Used for the "Skills at a glance" section on the portfolio page.
 */
export interface SkillCategory {
	category: string;
	items: string[];
}

export const skillsIntro =
	"Specializing in scalable mobile solutions with modern architecture, AI integrations, and full product ownership.";

export const skillCategories: SkillCategory[] = [
	{
		category: "Mobile Development Core",
		items: [
			"Flutter (Dart)",
			"Native Android (Kotlin & Java)",
			"Android TV",
			"Cross-Platform Development",
		],
	},
	{
		category: "Architecture & Best Practices",
		items: [
			"Clean Architecture",
			"MVVM / MVP / MVC",
			"SOLID Principles",
			"State Management: Bloc • Riverpod • GetX • Provider",
			"Offline-First Apps",
		],
	},
	{
		category: "Tools & Libraries",
		items: [
			"API Clients: Retrofit • Dio",
			"Firebase (Auth, Firestore, FCM, etc.)",
			"Google Maps & Places API",
			"Jetpack Compose",
			"ExoPlayer",
			"Stripe SDK",
			"OpenAI APIs / AI Integrations",
		],
	},
	{
		category: "Third-Party & Integrations",
		items: [
			"Payments: Stripe",
			"Video Calls: Daily.co",
			"KYC: Persona",
			"Real-time: Socket.io",
			"Photo Manipulation",
			"PDF Generation",
		],
	},
	{
		category: "Process & Leadership",
		items: [
			"Solo Product Ownership (idea → launch & maintenance)",
			"Architecture Decisions & Code Reviews",
			"Sprint Planning / Daily Standups",
			"Client Communication & Consultancy",
			"Google Play Console Management",
		],
	},
];
