import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { generateMetadata } from "@/components/seo"

export const metadata = generateMetadata({
  title: "Cookie Policy | New SynergyLab",
  description: "Information about how we use cookies on our website and how you can manage them.",
  keywords: ["Cookie Policy", "Cookies", "Website Tracking", "EU Cookie Law"],
  canonical: "/cookies",
})

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white">
      <div className="container mx-auto px-4 py-20">
        <Button variant="ghost" className="text-gray-400 hover:text-white mb-8" asChild>
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Last updated: April 16, 2025</p>

            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to the website owners.
              Cookies help provide a better and more personalized user experience.
            </p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core functionality such as
              security, network management, and account access. You may disable these by changing your browser settings,
              but this may affect how the website functions.
            </p>
            <table className="w-full border-collapse my-4">
              <thead>
                <tr>
                  <th className="border border-gray-600 px-4 py-2 text-left">Cookie Name</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">session_id</td>
                  <td className="border border-gray-600 px-4 py-2">Maintains your session state</td>
                  <td className="border border-gray-600 px-4 py-2">Session</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">csrf_token</td>
                  <td className="border border-gray-600 px-4 py-2">Prevents cross-site request forgery</td>
                  <td className="border border-gray-600 px-4 py-2">Session</td>
                </tr>
              </tbody>
            </table>

            <h3>Analytics Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance
              of our site. They help us know which pages are the most and least popular and see how visitors move around
              the site.
            </p>
            <table className="w-full border-collapse my-4">
              <thead>
                <tr>
                  <th className="border border-gray-600 px-4 py-2 text-left">Cookie Name</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">_ga</td>
                  <td className="border border-gray-600 px-4 py-2">Google Analytics - Distinguishes users</td>
                  <td className="border border-gray-600 px-4 py-2">2 years</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">_gid</td>
                  <td className="border border-gray-600 px-4 py-2">Google Analytics - Distinguishes users</td>
                  <td className="border border-gray-600 px-4 py-2">24 hours</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">_gat</td>
                  <td className="border border-gray-600 px-4 py-2">Google Analytics - Throttles request rate</td>
                  <td className="border border-gray-600 px-4 py-2">1 minute</td>
                </tr>
              </tbody>
            </table>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by
              us or by third-party providers whose services we have added to our pages.
            </p>
            <table className="w-full border-collapse my-4">
              <thead>
                <tr>
                  <th className="border border-gray-600 px-4 py-2 text-left">Cookie Name</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">language</td>
                  <td className="border border-gray-600 px-4 py-2">Remembers your preferred language</td>
                  <td className="border border-gray-600 px-4 py-2">1 year</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">theme</td>
                  <td className="border border-gray-600 px-4 py-2">Remembers your preferred theme (light/dark)</td>
                  <td className="border border-gray-600 px-4 py-2">1 year</td>
                </tr>
              </tbody>
            </table>

            <h3>Targeting/Advertising Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners. They may be used by those companies
              to build a profile of your interests and show you relevant advertisements on other sites.
            </p>
            <table className="w-full border-collapse my-4">
              <thead>
                <tr>
                  <th className="border border-gray-600 px-4 py-2 text-left">Cookie Name</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">_fbp</td>
                  <td className="border border-gray-600 px-4 py-2">Facebook - Used to deliver advertisements</td>
                  <td className="border border-gray-600 px-4 py-2">3 months</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">_gcl_au</td>
                  <td className="border border-gray-600 px-4 py-2">Google AdSense - Stores ad click information</td>
                  <td className="border border-gray-600 px-4 py-2">3 months</td>
                </tr>
              </tbody>
            </table>

            <h2>How to Manage Cookies</h2>
            <p>
              You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies
              can impact your user experience and parts of our website might no longer be fully accessible.
            </p>

            <h3>Browser Controls</h3>
            <p>
              Most browsers allow you to view, manage, delete and block cookies for a website. Be aware that if you
              delete all cookies then any preferences you have set will be lost, including the ability to opt-out from
              cookies as this function itself requires placement of an opt-out cookie on your device.
            </p>

            <h3>Managing Analytics Cookies</h3>
            <p>
              You can opt-out of tracking by Google Analytics by using the Google Analytics Opt-out Browser Add-on:
              https://tools.google.com/dlpage/gaoptout
            </p>

            <h3>Managing Advertising Cookies</h3>
            <p>You can manage advertising cookies by visiting the following sites:</p>
            <ul>
              <li>
                <a
                  href="https://www.youronlinechoices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF5500]"
                >
                  Your Online Choices
                </a>
              </li>
              <li>
                <a
                  href="https://optout.networkadvertising.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF5500]"
                >
                  Network Advertising Initiative
                </a>
              </li>
              <li>
                <a
                  href="https://optout.aboutads.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF5500]"
                >
                  Digital Advertising Alliance
                </a>
              </li>
            </ul>

            <h2>Cookie Consent</h2>
            <p>
              When you first visit our website, you will be shown a cookie banner requesting your consent to set
              non-essential cookies. You can change your cookie preferences at any time by clicking on the "Cookie
              Preferences" link in the footer of our website.
            </p>

            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
              business practices. Any changes will be posted on this page and, where appropriate, notified to you by
              email or via a notice on our website.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at:</p>
            <p>
              Email: privacy@newsynergylab.com
              <br />
              Address: 123 AI Avenue, Tech District, 10001
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
