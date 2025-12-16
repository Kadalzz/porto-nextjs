import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import type { NextConfig } from "next"

// Plugins dideklarasikan di luar untuk serializable
const remarkPlugins = [remarkGfm]
const rehypePlugins: any[] = []

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins,
    rehypePlugins
  }
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: { turbo: false } // nonaktifkan Turbopack agar build Vercel sama dengan lokal
}

export default withMDX(nextConfig)
