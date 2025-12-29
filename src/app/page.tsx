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
  FaFileDownload,
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
  <h2 className="text-3xl font-bold mb-4">Quick Facts</h2>

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
]
.map((fact, i) => {
      const Icon = fact.icon
      return (
        <div
  key={i}
  className="flex items-center gap-2 px-4 py-2 bg-[repeating-linear-gradient(135deg,#e5e7eb_0,#e5e7eb_1px,transparent_1px,transparent_6px)] dark:bg-[repeating-linear-gradient(135deg,#1f2937_0,#1f2937_1px,transparent_1px,transparent_6px)] text-sm text-gray-700 dark:text-gray-300 rounded-full shadow-md transition"
>
  <Icon className="text-blue-500 dark:text-blue-400 text-base" />
  <span>{fact.label}</span>
</div>

      )
    })}
  </div>

  {/* Download CV Button */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="mt-8"
  >
    <a
      href="https://drive.google.com/file/d/11o81aa463ir3ZMx_FJNw5caSIZoCCRPO/view"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <FaFileDownload className="text-xl" />
      <span>Download My CV</span>
    </a>
  </motion.div>
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
    </section>
  )
}
