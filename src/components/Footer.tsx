import Link from "next/link"
import { FaEnvelope, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer
      className="mt-4 py-6 text-center text-sm text-gray-500 px-4 border-t
                 dark:border-gray-800 border-gray-300 dark:bg-black"
      id="footerPortfolio"
    >
      <div className="flex justify-center gap-6 mb-2 text-lg">
        {/* Email */}
        <Link
          href="mailto:richard.christian23@students.ac.id"
          aria-label="Email"
          className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
        >
          <FaEnvelope />
        </Link>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/6282142388292"
          target="_blank"
          aria-label="WhatsApp"
          className="hover:text-green-500 transition-transform hover:scale-125 duration-200"
        >
          <FaWhatsapp />
        </Link>
      </div>

      <p className="text-xs sm:text-sm">
        © {new Date().getFullYear()} Richard Christian. All rights reserved.
      </p>
    </footer>
  )
}
