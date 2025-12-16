import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import type { NextConfig } from "next"

const remarkPlugins = [remarkGfm]
const rehypePlugins: any[] = []

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: { remarkPlugins, rehypePlugins }
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  output: "export" // wajib untuk static export Netlify
}

export default withMDX(nextConfig)
