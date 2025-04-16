import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { generateMetadata } from "@/components/seo"

export const metadata = generateMetadata({
  title: "Terms of Service | New SynergyLab",
  description: "Our terms of service outline the rules and guidelines for using our website and services.",
  keywords: ["Terms of Service", "Terms and Conditions", "Legal", "User Agreement"],
  canonical: "/terms",
})

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Last updated: April 16, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to New SynergyLab. These Terms of Service ("Terms") govern your use of our website and services.
              By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with
              any part of the Terms, you may not access our website or use our services.
            </p>

            <h2>2. Definitions</h2>
            <p>For the purposes of these Terms:</p>
            <ul>
              <li>
                <strong>"Company", "we", "us", or "our"</strong> refers to New SynergyLab.
              </li>
              <li>
                <strong>"Website"</strong> refers to New SynergyLab's website, accessible from www.newsynergylab.com.
              </li>
              <li>
                <strong>"Services"</strong> refers to the AI and data services we provide.
              </li>
              <li>
                <strong>"You"</strong> refers to the individual accessing or using the Website and Services, or the
                company or legal entity on behalf of which such individual is accessing or using the Website and
                Services.
              </li>
              <li>
                <strong>"Content"</strong> refers to all materials found on the Website, including text, images, videos,
                audio files, and other forms of data or communication.
              </li>
            </ul>

            <h2>3. Use of Our Website and Services</h2>
            <h3>3.1 Eligibility</h3>
            <p>
              You must be at least 18 years old to use our Website and Services. By using our Website and Services, you
              represent and warrant that you meet this eligibility requirement.
            </p>

            <h3>3.2 Account Registration</h3>
            <p>
              Some parts of our Website and Services may require you to create an account. You are responsible for
              maintaining the confidentiality of your account credentials and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h3>3.3 Acceptable Use</h3>
            <p>You agree not to use the Website and Services to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute malware or other harmful code</li>
              <li>Interfere with or disrupt the Website or Services</li>
              <li>Collect or track personal information of other users</li>
              <li>Engage in any activity that could harm our reputation or business</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <h3>4.1 Our Intellectual Property</h3>
            <p>
              The Website and its original Content, features, and functionality are owned by New SynergyLab and are
              protected by international copyright, trademark, patent, trade secret, and other intellectual property
              laws.
            </p>

            <h3>4.2 License to Use</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Website and
              Services for their intended purposes in accordance with these Terms.
            </p>

            <h3>4.3 Your Content</h3>
            <p>
              You retain all rights to any content you submit, post, or display on or through the Website. By submitting
              content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt,
              publish, translate, and distribute it in any media.
            </p>

            <h2>5. Third-Party Links and Services</h2>
            <p>
              Our Website may contain links to third-party websites or services that are not owned or controlled by us.
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices of
              any third-party websites or services. You acknowledge and agree that we shall not be responsible or
              liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection
              with the use of or reliance on any such content, goods, or services available on or through any such
              websites or services.
            </p>

            <h2>6. Service Fees and Payment</h2>
            <p>
              Fees for our Services will be clearly communicated to you before you engage our Services. Payment terms
              will be specified in separate agreements or invoices. All payments are non-refundable unless otherwise
              specified in writing.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, in no event shall New SynergyLab, its directors, employees,
              partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential,
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Website or Services</li>
              <li>Any conduct or content of any third party on the Website</li>
              <li>Any content obtained from the Website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              The Website and Services are provided on an "as is" and "as available" basis without any warranties of any
              kind, either express or implied, including but not limited to, the implied warranties of merchantability,
              fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              We do not warrant that the Website will be uninterrupted or error-free, that defects will be corrected, or
              that the Website or the server that makes it available are free of viruses or other harmful components.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless New SynergyLab, its directors, employees, partners,
              agents, suppliers, and affiliates from and against any claims, liabilities, damages, judgments, awards,
              losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
              violation of these Terms or your use of the Website and Services.
            </p>

            <h2>10. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Country/State],
              without regard to its conflict of law provisions. Any legal action or proceeding arising out of or
              relating to these Terms shall be exclusively brought in the courts of [Your Country/State].
            </p>

            <h2>11. Changes to These Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change
              will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Website and Services after any revisions become effective, you agree to
              be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use
              the Website and Services.
            </p>

            <h2>12. Severability</h2>
            <p>
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and
              interpreted to accomplish the objectives of such provision to the greatest extent possible under
              applicable law, and the remaining provisions will continue in full force and effect.
            </p>

            <h2>13. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and New SynergyLab regarding your use of the
              Website and Services and supersede all prior and contemporaneous written or oral agreements between you
              and New SynergyLab.
            </p>

            <h2>14. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Email: legal@newsynergylab.com
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
