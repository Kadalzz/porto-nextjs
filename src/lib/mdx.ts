import { serialize } from "next-mdx-remote/serialize"
import remarkGfm from "remark-gfm"

export async function parseMDX(content: string) {
  return await serialize(content, { remarkPlugins: [remarkGfm] })
}
