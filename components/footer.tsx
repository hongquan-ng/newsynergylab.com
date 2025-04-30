import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#000814] py-12 border-t border-[#FF5500]/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 flex justify-between items-center relative">
          <div>
            <div className="flex items-center gap-2">
                <img className="relative z-10 flex items-center justify-center h-full font-bold" src="/logo-combined.svg" alt="New Synergy Lab" />
            </div>
            <p className="text-[#FF5500]">
                We Transform Businesses With AI-Native Solutions.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                <li>
                    <Link href="/about" className="hover:text-[#FF5500]">
                    About Us
                    </Link>
                </li>
                <li>
                    <Link href="/team" className="hover:text-[#FF5500]">
                    Our Team
                    </Link>
                </li>
                <li>
                    <Link href="/news" className="hover:text-[#FF5500]">
                    News
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-[#FF5500]">
                    Contact
                    </Link>
                </li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                <li>
                    <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF5500]"
                    >
                    Twitter
                    </a>
                </li>
                <li>
                    <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF5500]"
                    >
                    LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5500]">
                    GitHub
                    </a>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-[#FF5500]">
                    Email Us
                    </Link>
                </li>
                </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-[#FF5500]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 New Synergy Lab. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-[#FF5500] text-sm">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-[#FF5500] text-sm">
              Cookie Policy
            </Link>
            <Link href="/gdpr" className="text-gray-400 hover:text-[#FF5500] text-sm">
              GDPR
            </Link>
            <Link href="/data-request" className="text-gray-400 hover:text-[#FF5500] text-sm">
              Data Request
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
