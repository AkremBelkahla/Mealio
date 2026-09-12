import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remote host serving the menu data provider's dish and category photos.
    remotePatterns: [new URL("https://www.themealdb.com/images/**")],
  },
};

export default nextConfig;
