import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"
import { pageParams } from "@/lib/types"
import AnimatedArticle from "@/components/AnimatedArticle"

export async function generateStaticParams() {
  const projectDir = path.join(process.cwd(), "src", "data", "projects")
  const files = fs.readdirSync(projectDir)
  return files.map(file => ({
    slug: file.replace(/\.mdx$/, "")
  }))
}

export default async function ProjectPage({ params }: { params: pageParams }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), "src", "data", "projects", `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return notFound()

  const source = fs.readFileSync(filePath, "utf-8")

  const { content, frontmatter } = await compileMDX({
    source,
    options: { parseFrontmatter: true }
  })

  return (
    <AnimatedArticle>
      <h1>{frontmatter.title}</h1>
      <div>{content}</div>
    </AnimatedArticle>
  )
}
