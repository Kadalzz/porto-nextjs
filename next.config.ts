import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import type { NextConfig } from "next"

// Buat plugins di luar objek options
const remarkPlugins = [remarkGfm]
const rehypePlugins: any[] = []

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // Hanya kirim plain object
    remarkPlugins,
    rehypePlugins,
  },
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

// Merge MDX config dengan Next.js config
export default withMDX(nextConfig)
