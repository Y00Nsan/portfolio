import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "portfolio";
const isProjectSite = repo !== `${process.env.GITHUB_REPOSITORY_OWNER}.github.io`;
const basePath = process.env.GITHUB_ACTIONS === "true" && isProjectSite ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
