import type { NextConfig } from "next";

// Derive the image host from the menu data provider base URL so the provider
// stays configurable through the environment and is never hardcoded here.
const menuImageHost = (() => {
  try {
    return process.env.MENU_API_BASE_URL
      ? new URL(process.env.MENU_API_BASE_URL).hostname
      : "";
  } catch {
    return "";
  }
})();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: menuImageHost
      ? [{ protocol: "https", hostname: menuImageHost, pathname: "/images/**" }]
      : [],
  },
};

export default nextConfig;
