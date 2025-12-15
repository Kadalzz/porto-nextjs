"use client"

import { motion } from "framer-motion"
import {
  FaMapMarkerAlt,
  FaBook,
  FaLanguage,
  FaGamepad,
  FaUniversity,
  FaSkiing,
  FaBuilding,
  FaTools,
} from "react-icons/fa"
import BlogPost from "@/components/BlogPost"
import ProjectTile from "@/components/ProjectTile"
import ViewAllHeader from "@/components/ViewAllHeader"
import WorkItem from "@/components/WorkItem"
import blog from "@/data/blog"
import projects from "@/data/projects"
import work from "@/data/work"

/**
 * Home component that serves as the main landing page for the portfolio.
 * This is accessed at the root URL ("/") of the application.
 */
export default function Home() {
  const getTimeSafe = (dateStr: string | undefined) => {
    const date = new Date(dateStr ?? "")
    return isNaN(date.getTime()) ? 0 : date.getTime()
  }

  return (
    <section className="px-4 max-w-4xl mx-auto">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-2"
      >
        {/* Introductory Text */}
       <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
  Hi, I'm Richard Christian S 👋
</h1>

<p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-left mb-6">
  I am an Information Systems student with a strong interest in web development. I enjoy building
  web applications and learning how systems work from both technical and business perspectives.
  Currently, I am improving my skills in Laravel, PHP, JavaScript, HTML, and CSS through academic
  projects and hands-on practice.
</p>

{/* Current Focus / MBKM Objective */}
<p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-left">
  I am currently preparing myself for the MBKM internship program as a Web Developer. My focus is on
  developing functional and maintainable web applications while gaining real-world experience in
  collaborative development environments. I am eager to learn, contribute to a team, and grow
  professionally through industry-level projects.
</p>

        {/* Quick Facts Section */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Quick & Fun Facts</h2>

          <div className="flex flex-wrap justify-center gap-3 px-4 max-w-4xl mx-auto">
            {[
  { icon: FaUniversity, label: "Information Systems Student @ UTDI" },
  { icon: FaTools, label: "Web Developer (Laravel Focused)" },
  { icon: FaLanguage, label: "English / Indonesian" },
  { icon: FaBook, label: "Learning Through Academic Projects" },
  { icon: FaBuilding, label: "Preparing for MBKM Internship" },
  { icon: FaMapMarkerAlt, label: "Yogyakarta, Indonesia" },
  { icon: FaGamepad, label: "Problem Solving Mindset" },
  { icon: FaSkiing, label: "Continuous Learning" },
].map((fact, i) => {
              const Icon = fact.icon
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800
                                    text-sm text-gray-700 dark:text-gray-300 rounded-full shadow-md transition"
                >
                  <Icon className="text-blue-500 dark:text-blue-400 text-base" />
                  <span>{fact.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Recent Work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <ViewAllHeader title="Work Experience" pageUrl="/work" itemCount={work.length} />
        <div className="grid gap-4">
          {work.slice(0, 3).map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <WorkItem {...job} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <ViewAllHeader title="Recent Projects" pageUrl="/projects" itemCount={projects.length} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.slice(0, 4).map(proj => (
            <motion.div
              key={proj.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <ProjectTile key={proj.slug} {...proj} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Blog Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 mb-12"
      >
        <ViewAllHeader title="Recent Blog Posts" pageUrl="/blog" itemCount={blog.length} />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {blog
            .slice()
            .sort((a, b) => getTimeSafe(b.date) - getTimeSafe(a.date))
            .slice(0, 3)
            .map(post => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <BlogPost {...post} />
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  )
}
