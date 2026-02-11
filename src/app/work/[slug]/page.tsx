import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypeHighlight from "rehype-highlight"
import remark_gfm from "remark-gfm"
import AnimatedArticle from "@/components/AnimatedArticle"
import BackToPageButton from "@/components/BackToPageButton"
import { Timeline, TimelineItem } from "@/components/mdx/Timeline"
import work from "@/data/work"
import { techToIcon } from "@/lib/devIcons"
import { pageParams } from "@/lib/types"

/**
 * Generate static parameters for the work item pages to be pre-rendered.
 */
export async function generateStaticParams() {
  return work.map(item => ({
    slug: item.slug,
  }))
}

/**
 * WorkItemPage component that renders a single work item based on the slug.
 */
export default async function WorkItemPage(props: { params: pageParams }) {
  const { slug } = await props.params
  const post = work.find(w => w.slug === slug)
  if (!post) return notFound()

  const filePath = path.join(process.cwd(), "src", "data", "work", `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return notFound()
  }

  const mdxSource = fs.readFileSync(filePath, "utf-8")

  const { content, frontmatter } = await compileMDX<{
    name: string
    description: string
    websiteUrl?: string
    techStack: string[]
  }>({
    source: mdxSource,
    components: {
      Timeline,
      TimelineItem,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remark_gfm],
        rehypePlugins: [rehypeHighlight],
      },
    },
  })

  return (
    <AnimatedArticle>
      <BackToPageButton pageUrl="/work" />
      <h1 className="text-4xl font-bold mb-2">{frontmatter.name}</h1>
      <p className="text-lg text-gray-600 mb-6">{frontmatter.description}</p>

      {frontmatter.websiteUrl && (
        <div className="mb-6">
          <a
            href={frontmatter.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Visit Website
          </a>
        </div>
      )}

      <h2 className="text-xl font-semibold mb-6">Tech Stack</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        {frontmatter.techStack?.map(techName => (
          <div
            key={techName}
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
          >
            {techToIcon(techName)}
            <span>{techName}</span>
          </div>
        ))}
      </div>
      <div className="max-w-5xl prose dark:prose-invert">{content}</div>
    </AnimatedArticle>
  )
}
