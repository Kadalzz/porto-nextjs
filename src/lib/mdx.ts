import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'

export async function parseMDX(content: string) {
  return serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })
}
