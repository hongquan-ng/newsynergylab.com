import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { generateMetadata } from "@/components/seo"

export const metadata = generateMetadata({
  title: "GDPR Compliance | New SynergyLab",
  description: "Information about our GDPR compliance and your rights under the General Data Protection Regulation.",
  keywords: ["GDPR", "Data Protection", "Privacy Rights", "EU Compliance"],
  canonical: "/gdpr",
})

export default function GdprPage() {
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
          <h1 className="text-4xl font-bold mb-8">GDPR Compliance</h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <p>Last updated: April 16, 2025</p>

            <h2>Our Commitment to GDPR Compliance</h2>
            <p>
              At New SynergyLab, we are committed to ensuring the privacy and protection of your personal data in
              compliance with the General Data Protection Regulation (GDPR). This page outlines our approach to GDPR
              compliance and provides information about your rights under this regulation.
            </p>

            <h2>What is GDPR?</h2>
            <p>
              The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for
              all individuals within the European Union and the European Economic Area. It addresses the export of
              personal data outside the EU and EEA areas and gives control to individuals over their personal data.
            </p>

            <h2>Our Role Under GDPR</h2>
            <p>Depending on the context, New SynergyLab may act as either a data controller or a data processor:</p>
            <ul>
              <li>
                <strong>As a data controller:</strong> We determine the purposes and means of processing personal data
                collected through our website and direct interactions with clients and prospects.
              </li>
              <li>
                <strong>As a data processor:</strong> When providing services to our clients, we may process personal
                data on behalf of our clients according to their instructions.
              </li>
            </ul>

            <h2>Your Rights Under GDPR</h2>
            <p>Under the GDPR, you have the following rights:</p>

            <h3>1. Right to Access</h3>
            <p>
              You have the right to request a copy of the personal data we hold about you and to check that we are
              lawfully processing it.
            </p>

            <h3>2. Right to Rectification</h3>
            <p>
              You have the right to request that incomplete or inaccurate personal data we hold about you be corrected
              or completed.
            </p>

            <h3>3. Right to Erasure (Right to be Forgotten)</h3>
            <p>
              You have the right to request the deletion of your personal data in certain circumstances, such as when
              the data is no longer necessary for the purposes for which it was collected.
            </p>

            <h3>4. Right to Restriction of Processing</h3>
            <p>
              You have the right to request that we restrict the processing of your personal data in certain
              circumstances, such as when you contest the accuracy of the data.
            </p>

            <h3>5. Right to Data Portability</h3>
            <p>
              You have the right to receive the personal data you have provided to us in a structured, commonly used,
              and machine-readable format, and to transmit this data to another controller.
            </p>

            <h3>6. Right to Object</h3>
            <p>
              You have the right to object to the processing of your personal data in certain circumstances, including
              for direct marketing purposes or when processing is based on our legitimate interests.
            </p>

            <h3>7. Rights Related to Automated Decision Making and Profiling</h3>
            <p>
              You have the right not to be subject to a decision based solely on automated processing, including
              profiling, which produces legal effects concerning you or similarly significantly affects you.
            </p>

            <h2>How to Exercise Your Rights</h2>
            <p>
              To exercise any of these rights, please contact our Data Protection Officer at dpo@newsynergylab.com. We
              will respond to your request within one month. This period may be extended by two further months where
              necessary, taking into account the complexity and number of requests.
            </p>

            <h2>Data Protection Officer</h2>
            <p>
              We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in relation
              to this privacy notice. If you have any questions about this privacy notice, including any requests to
              exercise your legal rights, please contact our DPO at:
            </p>
            <p>
              Email: dpo@newsynergylab.com
              <br />
              Address: 123 AI Avenue, Tech District, 10001
              <br />
              Phone: +1 (555) 123-4567
            </p>

            <h2>Data Protection Impact Assessments</h2>
            <p>
              We conduct Data Protection Impact Assessments (DPIAs) when implementing new technologies or when
              processing is likely to result in a high risk to the rights and freedoms of individuals.
            </p>

            <h2>Data Breach Notification</h2>
            <p>
              In the event of a personal data breach, we will notify the relevant supervisory authority within 72 hours
              of becoming aware of the breach, where feasible. If the breach is likely to result in a high risk to your
              rights and freedoms, we will also notify you without undue delay.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              When we transfer personal data outside the European Economic Area (EEA), we ensure that appropriate
              safeguards are in place to protect your data, such as Standard Contractual Clauses approved by the
              European Commission.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our GDPR compliance or wish to exercise your rights, please contact us at:
            </p>
            <p>
              Email: dpo@newsynergylab.com
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
