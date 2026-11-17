export interface StandardCaseStudy {
	category: string;
	businessNeed: string;
	scope: string;
	responsibility: string;
	solution: string;
	outcome: string;
}

export const standardCaseStudies: Record<string, StandardCaseStudy> = {
	vbay: {
		category: "Websites & commerce",
		businessNeed:
			"VBay needed an online storefront where customers could browse its products and contact the business to place an order.",
		scope: "Static ecommerce website development and deployment",
		responsibility:
			"I built the website using React, Next.js, and Astro, and deployed it on Vercel at vbay.pk.",
		solution:
			"The website presents a product catalog and detail pages across mobile and desktop layouts. Customers move from browsing to a WhatsApp conversation to confirm their order; checkout is handled in chat.",
		outcome:
			"Delivered the live static ecommerce storefront with product browsing and direct WhatsApp ordering.",
	},
	twidlee: {
		category: "Marketplaces & services",
		businessNeed:
			"Restaurants need a way to offer time-sensitive deals during quieter periods, while customers need to discover, reserve, and redeem those offers.",
		scope: "Android development and ongoing maintenance",
		responsibility:
			"I led the Android work, integrating backend APIs and working with QA and UI/UX collaborators. My scope also included feature delivery, bug fixes, and Play Console releases.",
		solution:
			"The Android experience connects location-based deal discovery with reservation and redemption. Kotlin, MVVM, and Retrofit supported the app implementation.",
		outcome: "Delivered and maintained the Android app, supporting its launch in Canada.",
	},
	"final-touch": {
		category: "Consumer products",
		businessNeed:
			"People need to make a range of photo adjustments in one mobile workflow, from basic corrections to text, frames, and stickers.",
		scope: "Android app built from scratch at Devcrew I/O",
		responsibility:
			"I developed the Android app and its core editing capabilities, collaborated with QA, and handled publication and Play Console management.",
		solution:
			"The editing toolkit brings image adjustments, crop and resize, and decorative tools into a single application, implemented with Kotlin and MVVM.",
		outcome: "Delivered and published the company’s first in-house product.",
	},
	"speedfame-tv": {
		category: "Business operations",
		businessNeed:
			"Venues need to display content and advertising on TV screens, connected to material uploaded through a web experience.",
		scope: "Android TV app and real-time integration",
		responsibility:
			"I built the TV application from scratch for Toptech.teams, owned app-level technical decisions, integrated real-time communication, and worked with QA and Play Console releases.",
		solution:
			"Socket.io connects the TV app to live updates, while ExoPlayer handles media playback. My delivery scope was the Android TV application within the wider publishing platform.",
		outcome: "Delivered a production Android TV application with real-time content communication.",
	},
	bbm: {
		category: "Marketplaces & services",
		businessNeed:
			"Local businesses need online ordering and delivery tools, while customers need visibility into their orders and the rider’s location.",
		scope: "Android development at Emblem Technologies",
		responsibility:
			"I built Android functionality from scratch, integrated APIs and third-party SDKs, and collaborated with cross-functional teams. This work was part of the wider Best Buy Mall product.",
		solution:
			"The mobile implementation supports ordering and live rider tracking, combining backend integration with Google Maps and local persistence.",
		outcome:
			"Delivered Android functionality for the company’s in-house startup, including a rider tracking system, supporting launches in multiple cities.",
	},
	"beat-bully-trivia": {
		category: "Consumer products",
		businessNeed:
			"A football trivia experience needs to keep questions, player answers, timed gameplay, and video reveals in sync.",
		scope: "Android development within the Emblem team",
		responsibility:
			"I built the Android app from scratch, implemented UI and API integration, and collaborated under lead direction on delivery and bug fixes.",
		solution:
			"Timed quizzes and video-synchronized answer reveals create the core gameplay experience. ExoPlayer and custom animations support that interaction.",
		outcome:
			"Delivered the company’s inaugural trivia title, including synchronized video playback and gameplay animations.",
	},
	momentful: {
		category: "Consumer products",
		businessNeed:
			"A digital greetings product needs to make personalized cards easy to create and share through mobile channels.",
		scope: "Maintenance and enhancement of an existing Android app",
		responsibility:
			"At Emblem Technologies, I worked on the existing application, fixing features, adding capabilities, and integrating APIs. My responsibility was enhancement and maintenance of the Android experience.",
		solution:
			"Custom views and animations support card creation and interactive presentation, alongside integrations for the app’s existing services.",
		outcome:
			"Delivered updates to the existing app, including custom views, animations, and API integrations.",
	},
	"sf-gas-works": {
		category: "Business operations",
		businessNeed:
			"A gas tank business needs an internal tool for daily operational work, including tank recertification tracking and reporting.",
		scope: "Android app, database design, and solution architecture",
		responsibility:
			"I developed the application from scratch for Toptech.teams, designed the database structure, and worked with the project manager to align the implementation with requirements.",
		solution:
			"The app connects role-based access, task management, and PDF reporting with operational workflows. Kotlin, MVVM, and Firebase underpin the implementation.",
		outcome:
			"Delivered an internal Android operational tool with database structure, role-based access, and reporting capabilities.",
	},
	skyview: {
		category: "Business operations",
		businessNeed:
			"An engineer client needed a personal tool to organize daily tasks and projects with information stored locally.",
		scope: "Sole Android developer, including UI and database design",
		responsibility:
			"I built the app from scratch for Toptech.teams and owned the Android interface and database implementation.",
		solution:
			"A task-management interface combines local persistence with Room. Kotlin Flows support the application’s data handling.",
		outcome:
			"Delivered a purpose-built Android productivity application with local task persistence.",
	},
	"whatsapp-sticker": {
		category: "Consumer products",
		businessNeed:
			"People need to create and edit sticker artwork, organize packs, and export those packs into WhatsApp.",
		scope: "Android app and WhatsApp export integration",
		responsibility:
			"I built the app from scratch at Devcrew I/O, designed its interface, and engineered the export integration.",
		solution:
			"The product connects photo editing and pack management to WhatsApp export through Android’s content-provider integration.",
		outcome:
			"Delivered an Android sticker-making application with photo editing, pack management, and WhatsApp export.",
	},
	maxximus: {
		category: "Marketplaces & services",
		businessNeed:
			"A London marketplace needs to connect customers with service providers, including conversational discovery and the interactions around a service engagement.",
		scope: "Flutter app development and architectural leadership",
		responsibility:
			"I developed the Flutter application from scratch, led app architecture, contributed code reviews and sprint planning, and integrated third-party SDKs and APIs. This case study covers my mobile-app responsibility within the marketplace.",
		solution:
			"The app integrates conversational AI search, video calls, payments, and KYC workflows. Flutter, Bloc, and Clean Architecture organize the mobile implementation.",
		outcome:
			"Delivered the Flutter marketplace app with AI search and integrations for video, payments, and identity verification.",
	},
	"badminton-famly": {
		category: "Consumer products",
		businessNeed:
			"Badminton players need access to training videos, masterclasses, and tools for building plans and tracking progress.",
		scope: "Flutter development at Devcrew I/O",
		responsibility:
			"I developed the Flutter application, collaborated in sprints, integrated APIs, and worked on performance improvements.",
		solution:
			"The mobile experience brings training content, personalized plans, and offline video access together, using Flutter and GetX with API and Firebase integrations.",
		outcome:
			"Delivered the Flutter training experience, including API integrations and performance work.",
	},
	"hifz-diary": {
		category: "Business operations",
		businessNeed:
			"Madarsa owners, teachers, and parents need connected tools for attendance, student progress, and fee management, with experiences suited to each role.",
		scope: "Solo ownership from concept through app launch",
		responsibility:
			"I owned the multi-app delivery, including architecture, database and UI/UX design, technical client consultancy, and Play Console publication.",
		solution:
			"Role-specific Flutter apps share a product foundation using Riverpod, Clean Architecture, product flavors, and Firebase. The suite brings attendance, reports, and fee notifications into connected experiences.",
		outcome: "Delivered the Owner, Teacher, and Parent app suite from concept through publication.",
	},
	terragrow: {
		category: "Business operations",
		businessNeed:
			"Farmers need a mobile tool for tracking financial information, overseeing plots, and accessing compliance-related utilities.",
		scope: "Solo Flutter app development for Amigo",
		responsibility:
			"I built the mobile application from scratch, implemented the interface, integrated REST APIs, and handled the Play Store launch. My scope was the Flutter application.",
		solution:
			"Plot and financial dashboards connect to backend information through REST integrations. Flutter, Bloc, and Dio support the app’s implementation.",
		outcome:
			"Developed and launched the Flutter app with plot dashboards, financial information, and compliance utilities.",
	},
	"pioneer-labs": {
		category: "Marketplaces & services",
		businessNeed:
			"Customers need to browse laboratory tests, book home sample collection, pay, and access their digital reports in one mobile experience.",
		scope: "Flutter app development for iBuildSoft",
		responsibility:
			"I built the application from scratch, worked on UI design, integrated APIs and Stripe, collaborated with the team, and handled Play Store publication.",
		solution:
			"The mobile journey connects test and package browsing, collection scheduling, payments, and result history through the app’s service integrations.",
		outcome:
			"Delivered and published the Flutter booking app with API and Stripe payment integration.",
	},
};
