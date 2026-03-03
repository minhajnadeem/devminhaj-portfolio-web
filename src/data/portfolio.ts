/**
 * Portfolio projects derived from content/portfolio.md.
 * slug maps to public/assets/portfolio/{slug}/ for screenshots.
 */
export type ProjectType = "native" | "flutter";

export interface ProjectLink {
	label: string;
	url: string;
}

export interface PortfolioProject {
	id: string;
	name: string;
	slug: string;
	type: ProjectType;
	pitch: string;
	description: string;
	tech: string[];
	url: string;
	linkLabel: string;
	/** Optional second link (e.g. website) */
	urlSecondary?: string;
	linkLabelSecondary?: string;
	images: string[];
	roleSnippet?: string;
	achievementSnippet?: string;
	featured: boolean;
	/** e.g. "Delisted" - shown as note */
	note?: string;
	/** Detail page: key features list */
	keyFeatures?: string[];
	/** Detail page: my role bullets */
	role?: string[];
	/** Detail page: achievements bullets */
	achievements?: string[];
	/** Detail page: all links (Website, Play Store, etc.) */
	links?: ProjectLink[];
}

/** Base URL for portfolio assets (no trailing slash) */
export const PORTFOLIO_ASSETS_BASE = "/assets/portfolio";

const projects: PortfolioProject[] = [
	// —— Native Android ——
	{
		id: "twidlee",
		name: "Twidlee",
		slug: "twidlee",
		type: "native",
		pitch: "B2C platform for time-sensitive restaurant deals — reserve and redeem dine-in or carryout.",
		description:
			"A B2C platform enabling restaurants to drive revenue during off-peak hours through time-sensitive flash deals. Customers browse, reserve, and redeem offers for dine-in or carryout.",
		tech: ["Android", "Kotlin", "MVVM", "Retrofit", "Google Maps", "Firebase"],
		url: "https://play.google.com/store/apps/details?id=com.twidlee.android",
		linkLabel: "View on Play Store",
		urlSecondary: "https://twidlee.com/",
		linkLabelSecondary: "Website",
		images: ["twidlee_5.png", "twidlee_6.png"],
		roleSnippet: "Solely led Android development and ongoing maintenance.",
		achievementSnippet: "Scaled the app and successfully launched in Canada.",
		featured: true,
		keyFeatures: [
			"Time-limited deal discovery and reservation",
			"Location-based search via maps",
			"Seamless redemption flow",
		],
		role: [
			"Solely led Android development and ongoing maintenance",
			"Implemented features, resolved bugs, and integrated backend APIs",
			"Collaborated with QA, UI/UX designers, and cross-functional teams",
			"Managed Play Console, policy updates, and release cycles",
		],
		achievements: [
			"Delivered high stability through proactive bug elimination",
			"Scaled the app and successfully launched in Canada",
		],
		links: [
			{ label: "Website", url: "https://twidlee.com/" },
			{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.twidlee.android" },
		],
	},
	{
		id: "final-touch",
		name: "Final Touch",
		slug: "final_touch",
		type: "native",
		pitch: "All-in-one photo editing: filters, crop, frames, text, stickers, and more.",
		description:
			"An all-in-one photo editing utility offering filters, brightness/contrast controls, crop & resize, frames, text, stickers, callouts, borders, and more.",
		tech: ["Android", "Kotlin", "MVVM", "Photo Manipulation"],
		url: "https://play.google.com/store/apps/details?id=io.devcrew.finaltouch",
		linkLabel: "View on Play Store",
		urlSecondary: "https://devcrew.io/project/final-touch/",
		linkLabelSecondary: "Project Page",
		images: ["final_touch.png"],
		roleSnippet: "Built from scratch at Devcrew I/O; core editing capabilities and clean architecture.",
		achievementSnippet: "Launched company's first in-house product.",
		featured: true,
		keyFeatures: ["Comprehensive editing toolkit", "Intuitive interface for quick professional enhancements"],
		role: [
			"Built from scratch at Devcrew I/O",
			"Developed core editing capabilities and preserved clean architecture",
			"Partnered with QA for testing and bug fixes",
			"Handled publication and Play Console management",
		],
		achievements: [
			"Launched company's first in-house product",
			"Expanded portfolio with a high-utility consumer app",
		],
		links: [
			{ label: "Project Page", url: "https://devcrew.io/project/final-touch/" },
			{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=io.devcrew.finaltouch" },
		],
	},
	{
		id: "speedfame-tv",
		name: "Speedfame TV",
		slug: "speedfame",
		type: "native",
		pitch: "Android TV MVP for interactive advertising and content in venues.",
		description:
			"An Android TV MVP that transforms screens into interactive advertising and content platforms. Users upload images/videos via web; the app displays them live for monetization in venues.",
		tech: ["Android TV", "Jetpack Compose", "Kotlin", "MVVM", "Socket.io", "ExoPlayer"],
		url: "https://play.google.com/store/apps/details?id=com.speedfame.fr",
		linkLabel: "View on Play Store",
		images: ["speedfame_1.png", "speedfame_2 .png"],
		roleSnippet: "Developed complete app from scratch; led technical decisions and real-time integration.",
		achievementSnippet: "Delivered production TV app with live communication; mastered Jetpack Compose.",
		featured: true,
		keyFeatures: [
			"Real-time content and ad playback",
			"QR-code driven customer interaction",
			"AI-moderated publishing",
		],
		role: [
			"Developed complete app from scratch for Toptech.teams",
			"Led technical decisions and real-time integration",
			"Collaborated with QA to ensure stability and bug resolution",
			"Managed publication and Play Console",
		],
		achievements: [
			"Delivered a production TV application with live communication",
			"Mastered Jetpack Compose in a real-world context",
		],
		links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.speedfame.fr" }],
	},
	{
		id: "bbm",
		name: "Best Buy Mall (BBM)",
		slug: "bbm",
		type: "native",
		pitch: "E-commerce for local businesses — online stores, orders, delivery, live rider tracking.",
		description:
			"E-commerce solution empowering local businesses to launch online stores while providing customers with ordering, delivery, and real-time rider tracking.",
		tech: ["Android", "Java", "MVC", "Retrofit", "Room", "Google Maps", "Firebase"],
		url: "https://business.bestbuymall.pk/",
		linkLabel: "Website",
		images: ["bbm_1.png", "bbm_2.png"],
		roleSnippet: "Full development from scratch; integrated APIs, UI, and third-party SDKs.",
		achievementSnippet: "Enabled in-house startup launch in multiple cities; complete rider tracking system.",
		featured: false,
		note: "Delisted due to lack of maintenance",
		keyFeatures: ["Merchant store creation", "Order management & live tracking", "Offline-first resilience"],
		role: [
			"Full development from scratch at Emblem Technologies",
			"Integrated APIs, UI, and third-party SDKs",
			"Worked closely with cross-functional teams",
		],
		achievements: [
			"Enabled company's in-house startup launch in multiple cities",
			"Engineered complete rider tracking system",
		],
		links: [{ label: "Website", url: "https://business.bestbuymall.pk/" }],
	},
	{
		id: "beat-bully-trivia",
		name: "Beat Bully Trivia",
		slug: "beat_bully_trivia",
		type: "native",
		pitch: "Interactive football trivia with timed quizzes and video-synced answer reveals.",
		description:
			"Interactive football trivia game pitting players against legendary Steve Bull. Answer faster and correctly, with video-synced responses and engaging animations.",
		tech: ["Android", "Java", "MVP", "ExoPlayer", "Retrofit", "Firebase"],
		url: "https://www.emblemtechnologies.com/portfolio/bbt",
		linkLabel: "View portfolio",
		images: [],
		roleSnippet: "Built from scratch; designed and implemented full UI and API integration.",
		achievementSnippet: "Company's inaugural trivia title; precise video timing and animation sync.",
		featured: false,
		note: "Delisted due to non-maintenance",
		keyFeatures: ["Timed quizzes with video answer reveals", "Dynamic animations for immersion"],
		role: [
			"Built from scratch at Emblem Technologies",
			"Designed and implemented full UI and API integration",
			"Collaborated under lead direction, fixed bugs",
		],
		achievements: [
			"Company's inaugural trivia title",
			"Achieved precise video timing and animation synchronization",
		],
		links: [{ label: "Portfolio Page", url: "https://www.emblemtechnologies.com/portfolio/bbt" }],
	},
	{
		id: "momentful",
		name: "Momentful",
		slug: "momentful",
		type: "native",
		pitch: "Digital greetings cards — create and send personalized, artist-inspired cards.",
		description:
			"Digital greetings card app for instant, emotional mobile-to-mobile sharing. Users create and send personalized, artist-inspired cards via phone, WhatsApp, or email.",
		tech: ["Android", "Java", "MVC", "Custom Views & Animations", "Volley", "In-App Purchases"],
		url: "https://bemomentful.com/",
		linkLabel: "Website",
		images: [],
		roleSnippet: "Maintained and enhanced existing app; fixed features, added capabilities, integrated APIs.",
		achievementSnippet: "Delivered custom views and sophisticated animations.",
		featured: false,
		keyFeatures: ["Custom card creation & instant delivery", "Group sending and interactive replies"],
		role: [
			"Maintained and enhanced existing app at Emblem Technologies",
			"Fixed features, added new capabilities, integrated APIs",
			"Translated requirements into technical solutions",
		],
		achievements: [
			"Delivered custom views and sophisticated animations",
			"Supported emotional, eco-friendly digital gifting",
		],
		links: [{ label: "Website", url: "https://bemomentful.com/" }],
	},
	{
		id: "sf-gas-works",
		name: "SF Gas Works",
		slug: "sf_gas_works",
		type: "native",
		pitch: "Internal enterprise app for tank recertification tracking and workflows.",
		description:
			"Internal enterprise app for a gas tank company to manage daily operations, including tank recertification tracking and workflows.",
		tech: ["Android", "Kotlin", "MVVM", "Firebase", "PDF Generation"],
		url: "#",
		linkLabel: "Internal distribution only",
		images: ["sf_gas_work_4.png"],
		roleSnippet: "Developed from scratch; designed database structure and solution architecture.",
		featured: false,
		keyFeatures: ["Role-based access", "Task management & PDF reporting"],
		role: [
			"Developed from scratch for Toptech.teams",
			"Designed database structure and provided solution architecture",
			"Collaborated with project manager to align on requirements",
		],
		achievements: [],
		links: [],
	},
	{
		id: "skyview",
		name: "Skyview",
		slug: "skyview",
		type: "native",
		pitch: "Personal productivity app to organize and track daily tasks and projects.",
		description:
			"Personal productivity app for an engineer client to organize and track daily tasks and projects.",
		tech: ["Android", "Kotlin", "MVVM", "Flows", "Room"],
		url: "#",
		linkLabel: "Internal distribution only",
		images: ["skyview_3.png", "skyview_5.png"],
		roleSnippet: "Sole developer from scratch; UI and database design.",
		featured: false,
		keyFeatures: ["Task management with local persistence", "Clean, intuitive interface"],
		role: [
			"Sole developer from scratch for Toptech.teams",
			"Implemented UI and database design",
		],
		achievements: [],
		links: [],
	},
	{
		id: "whatsapp-sticker",
		name: "WhatsApp Sticker Maker",
		slug: "whatsapp_sticker",
		type: "native",
		pitch: "Create custom WhatsApp stickers — design, edit photos, export packs.",
		description:
			"Custom sticker creation tool for WhatsApp — design from scratch, edit photos, convert to stickers, or download packs.",
		tech: ["Android", "Kotlin", "MVP", "Content Provider", "Firebase"],
		url: "#",
		linkLabel: "Delisted",
		images: ["whatsapp_sticker.png"],
		roleSnippet: "Built from scratch; designed UI and engineered WhatsApp export solution.",
		featured: false,
		note: "Delisted due to non-maintenance",
		keyFeatures: ["Sticker export to WhatsApp", "Photo editing & pack management"],
		role: [
			"Built from scratch at Devcrew I/O",
			"Designed UI and engineered WhatsApp export solution",
		],
		achievements: [],
		links: [],
	},
	// —— Cross-Platform Flutter ——
	{
		id: "maxximus",
		name: "Maxximus",
		slug: "maxximus",
		type: "flutter",
		pitch: "London marketplace with AI-powered search — match with service providers via text/voice.",
		description:
			"London-based marketplace connecting users to service providers via AI-powered search. Describe needs via text/voice; AI refines with follow-ups and matches best providers.",
		tech: ["Flutter", "Dart", "Clean Architecture", "Bloc", "Stripe", "Daily.co", "OpenAI"],
		url: "https://play.google.com/store/apps/details?id=uk.maxximus.app",
		linkLabel: "View on Play Store",
		urlSecondary: "https://maxximus.uk/",
		linkLabelSecondary: "Website",
		images: [],
		roleSnippet: "End-to-end development from scratch; architectural leadership, code reviews, sprint planning.",
		achievementSnippet: "Launched scalable AI-driven platform; integrated video, KYC with fast delivery.",
		featured: true,
		keyFeatures: ["Conversational AI search", "Video calls, secure payments, KYC"],
		role: [
			"End-to-end development from scratch",
			"Architectural leadership, code reviews, sprint planning",
			"Third-party SDK and API integration",
		],
		achievements: [
			"Launched scalable AI-driven platform",
			"Integrated advanced features (video, KYC) with fast delivery",
		],
		links: [
			{ label: "Website", url: "https://maxximus.uk/" },
			{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=uk.maxximus.app" },
		],
	},
	{
		id: "badminton-famly",
		name: "Badminton Famly+",
		slug: "badminton_famly",
		type: "flutter",
		pitch: "Premium badminton training by Thomas Laybourn — video library, masterclasses, progress tracking.",
		description:
			"Premium badminton training platform by champion Thomas Laybourn — extensive video library, masterclasses, custom plan builder, progress tracking, and news.",
		tech: ["Flutter", "Dart", "GetX", "Dio", "Clean Architecture", "Firebase"],
		url: "https://play.google.com/store/apps/details?id=famly.plus",
		linkLabel: "View on Play Store",
		urlSecondary: "https://plus.badmintonfamly.com/",
		linkLabelSecondary: "Website",
		images: ["badminton.png"],
		roleSnippet: "Full development at Devcrew I/O; sprint collaboration, API integration, performance optimization.",
		achievementSnippet: "Fast, stable, responsive experience; scalable training ecosystem.",
		featured: true,
		keyFeatures: ["Personalized training plans", "Offline video access", "Masterclasses & e-learning content"],
		role: [
			"Full development at Devcrew I/O",
			"Sprint collaboration, API integration, performance optimization",
		],
		achievements: [
			"Achieved fast, stable, and responsive experience",
			"Built scalable training ecosystem",
		],
		links: [
			{ label: "Website", url: "https://plus.badmintonfamly.com/" },
			{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=famly.plus" },
		],
	},
	{
		id: "hifz-diary",
		name: "Hifz Diary",
		slug: "hifz_diary",
		type: "flutter",
		pitch: "Multi-app suite (Admin, Teacher, Parent) for global Madarsa management.",
		description:
			"Multi-app suite (Admin, Teacher, Parent) for global Madarsa management — profile creation, class/attendance tracking, progress monitoring, fee management.",
		tech: ["Flutter", "Dart", "Riverpod", "Clean Architecture", "Product Flavors", "Firebase"],
		url: "https://play.google.com/store/apps/details?id=com.diaryforhifz.hifz",
		linkLabel: "Parent app",
		urlSecondary: "https://play.google.com/store/apps/details?id=com.diaryforhifz.hifz.admin",
		linkLabelSecondary: "Admin / Teacher",
		images: ["parent.png", "parent_4.png", "admin.png", "admin_2.png", "teacher.png", "teacher_2.png"],
		roleSnippet: "Solo ownership: concept → architecture → launch; database/UI/UX design, Play Console.",
		achievementSnippet: "Record-time delivery of robust, scalable system; production-ready product.",
		featured: true,
		keyFeatures: ["Role-specific dashboards", "Real-time attendance & reports", "Fee notifications"],
		role: [
			"Solo ownership: concept → architecture → launch",
			"Database/UI/UX design, client consultancy, Play Console",
		],
		achievements: [
			"Record-time delivery of robust, scalable system",
			"High-quality, production-ready product",
		],
		links: [
			{ label: "Parent", url: "https://play.google.com/store/apps/details?id=com.diaryforhifz.hifz" },
			{ label: "Admin", url: "https://play.google.com/store/apps/details?id=com.diaryforhifz.hifz.admin" },
			{ label: "Teacher", url: "https://play.google.com/store/apps/details?id=com.diaryforhifz.teacher" },
		],
	},
	{
		id: "terragrow",
		name: "TerraGrow",
		slug: "terragrow",
		type: "flutter",
		pitch: "Farmer-focused tool for economic tracking, plot oversight, and compliance.",
		description:
			"Farmer-focused management tool for economic tracking, plot oversight, and regulatory compliance.",
		tech: ["Flutter", "Dart", "Bloc", "Dio", "Clean Architecture"],
		url: "https://play.google.com/store/apps/details?id=com.terragrow.farmersapp",
		linkLabel: "View on Play Store",
		urlSecondary: "https://www.terragrow.fr/",
		linkLabelSecondary: "Website",
		images: [],
		roleSnippet: "Solo development from scratch; UI implementation, REST integration, Play Store launch.",
		achievementSnippet: "Successful launch with excellent stability; deep Bloc expertise.",
		featured: false,
		keyFeatures: ["Plot & financial dashboards", "Compliance utilities"],
		role: [
			"Solo development from scratch for Amigo",
			"UI implementation, REST integration, Play Store launch",
		],
		achievements: [
			"Successful launch with excellent stability",
			"Gained deep Bloc expertise",
		],
		links: [
			{ label: "Website", url: "https://www.terragrow.fr/" },
			{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.terragrow.farmersapp" },
		],
	},
	{
		id: "pioneer-labs",
		name: "Pioneer Labs",
		slug: "pioneer_labs",
		type: "flutter",
		pitch: "Blood test & health check-up booking with home collection and digital reports.",
		description:
			"Convenient blood test & health check-up booking app with home sample collection, secure payments, symptom-based suggestions, and digital reports.",
		tech: ["Flutter", "Dart", "Provider", "Dio", "Stripe"],
		url: "https://play.google.com/store/apps/details?id=com.pioneercdx.labs",
		linkLabel: "View on Play Store",
		urlSecondary: "https://pioneercdxlabs.com/",
		linkLabelSecondary: "Website",
		images: ["prioneer_labs_1.png", "prioneer_labs_2.png"],
		roleSnippet: "Developed from scratch; UI design, API & Stripe integration, Play Store publication.",
		achievementSnippet: "Reliable health booking experience; mastered payment gateway integration.",
		featured: false,
		keyFeatures: [
			"Lab test & package browsing",
			"Home collection scheduling",
			"Result history & deficiency tracking",
		],
		role: [
			"Developed from scratch for iBuildSoft",
			"UI design, API & Stripe integration",
			"Team collaboration and Play Store publication",
		],
		achievements: [
			"Delivered reliable health booking experience",
			"Mastered payment gateway integration",
		],
		links: [
			{ label: "Website", url: "https://pioneercdxlabs.com/" },
			{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.pioneercdx.labs" },
		],
	},
];

export const portfolioProjects = projects;
export const featuredProjects = projects.filter((p) => p.featured);
export const nativeProjects = projects.filter((p) => p.type === "native");
export const flutterProjects = projects.filter((p) => p.type === "flutter");

export function getProjectImages(project: PortfolioProject): string[] {
	if (!project.images.length) return [];
	const base = `${PORTFOLIO_ASSETS_BASE}/${project.slug}`;
	return project.images.map((file) => `${base}/${file}`);
}

export function getProjectById(id: string): PortfolioProject | undefined {
	return portfolioProjects.find((p) => p.id === id);
}
