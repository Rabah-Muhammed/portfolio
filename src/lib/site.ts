const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (rawUrl || "http://localhost:3000").replace(/\/+$/, "");

export const siteName = "Muhammed Rabah M";
