/**
 * Social & professional links (single source of truth).
 * Used by Footer, Contact, and FloatingFollowBar.
 */
export const socialLinks = {
	linkedin: "https://www.linkedin.com/in/minhaj-nadeem/",
	github: "https://github.com/minhajnadeem",
	medium: "https://medium.com/@minhaj.lib",
	youtube: "https://www.youtube.com/@devminhaj_me",
	instagram: "https://www.instagram.com/devminhaj/",
	upwork: "https://www.upwork.com/freelancers/~019ebe3add760ee109?s=996364627857502209",
	stackoverflow: "https://stackoverflow.com/users/7076057/minhaj-nadeem",
} as const;

export type SocialKey = keyof typeof socialLinks;
