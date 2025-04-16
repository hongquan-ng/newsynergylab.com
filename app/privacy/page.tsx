import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { generateMetadata } from "@/components/seo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = generateMetadata({
  title: "Privacy Policy | New SynergyLab",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
  keywords: ["Privacy Policy", "GDPR", "CCPA", "LGPD", "POPIA", "Data Protection", "Cookies"],
  canonical: "/privacy",
})

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-300 mb-8">Last updated: April 16, 2025</p>

          <Tabs defaultValue="general" className="mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="gdpr">GDPR (EU)</TabsTrigger>
              <TabsTrigger value="ccpa">CCPA/CPRA (CA)</TabsTrigger>
              <TabsTrigger value="vcdpa">VCDPA (VA)</TabsTrigger>
              <TabsTrigger value="lgpd">LGPD (Brazil)</TabsTrigger>
              <TabsTrigger value="popia">POPIA (SA)</TabsTrigger>
              <TabsTrigger value="epr">ePrivacy</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="prose prose-invert prose-lg max-w-none">
              <h2>1. Introduction</h2>
              <p>
                New SynergyLab ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or use
                our services.
              </p>
              <p>
                We adhere to various data protection laws worldwide, including the General Data Protection Regulation
                (GDPR), California Consumer Privacy Act (CCPA), Virginia Consumer Data Protection Act (VCDPA), Lei Geral
                de Proteção de Dados (LGPD), Protection of Personal Information Act (POPIA), and the ePrivacy
                Regulation. By accessing or using our services, you consent to the practices described in this policy.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Data</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a consultation</li>
                <li>Apply for a job</li>
                <li>Engage with our services</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Job title</li>
                <li>Message content</li>
              </ul>

              <h3>2.2 Automatically Collected Data</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device and usage
                patterns. This includes:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages visited and time spent</li>
                <li>Date and time of access</li>
                <li>Device information</li>
              </ul>

              <h3>2.3 Cookies and Similar Technologies</h3>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities.
                These tools help us provide you with a better website experience, analyze site traffic, and understand
                where our visitors are coming from.
              </p>
              <p>We use the following types of cookies:</p>
              <ul>
                <li>
                  <strong>Essential cookies:</strong> Necessary for the website to function properly.
                </li>
                <li>
                  <strong>Analytical/performance cookies:</strong> Allow us to recognize and count visitors and see how
                  they move around our website.
                </li>
                <li>
                  <strong>Functionality cookies:</strong> Enable the website to provide enhanced functionality and
                  personalization.
                </li>
                <li>
                  <strong>Targeting cookies:</strong> Record your visit to our website, the pages you have visited, and
                  the links you have followed to deliver more relevant content.
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings and the consent banner provided on our website.
                For more information, please see our{" "}
                <Link href="/cookies" className="text-[#FF5500] hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>

              <h2>3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and respond to your inquiries</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Legal Basis for Processing</h2>
              <p>We process your personal data based on one or more of the following legal grounds:</p>
              <ul>
                <li>Your consent</li>
                <li>Performance of a contract with you</li>
                <li>Compliance with a legal obligation</li>
                <li>Protection of your vital interests or those of another person</li>
                <li>Our legitimate interests, provided they do not override your fundamental rights and freedoms</li>
              </ul>

              <h2>5. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers who perform services on our behalf</li>
                <li>Professional advisors, such as lawyers, auditors, and insurers</li>
                <li>Regulatory authorities, government agencies, and law enforcement when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
              <p>
                We do not sell your personal information to third parties. Any third parties with whom we share your
                data are obligated to maintain the confidentiality and security of your information.
              </p>
              <p>
                <strong>Hosting Provider:</strong> Our website is hosted by Vercel Inc. Vercel may collect and process
                certain personal data, such as IP addresses, browser information, and access times as part of providing
                hosting services. Vercel acts as our data processor and processes this information according to our
                instructions and their privacy policy. For more information about Vercel's data practices, please visit{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  className="text-[#FF5500] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel's Privacy Policy
                </a>
                .
              </p>

              <h2>6. International Data Transfers</h2>
              <p>
                We may transfer your personal data to countries outside your country of residence. When we do, we ensure
                appropriate safeguards are in place to protect your information, such as:
              </p>
              <ul>
                <li>Standard contractual clauses approved by relevant authorities</li>
                <li>Binding corporate rules for transfers within our group</li>
                <li>Compliance with approved codes of conduct or certification mechanisms</li>
                <li>Adequacy decisions for countries with adequate data protection laws</li>
              </ul>

              <h2>7. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of
                transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
                security.
              </p>

              <h2>8. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was
                collected, including legal, accounting, or reporting requirements. When determining the appropriate
                retention period, we consider the amount, nature, and sensitivity of the data, the potential risk of
                harm from the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorized
                use or disclosure, and applicable legal requirements.
              </p>

              <h2>9. Your Data Protection Rights</h2>
              <p>Depending on your location, you may have various rights regarding your personal data, including:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Restrict or object to processing of your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time, where processing is based on consent</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>

              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
                data from children. If you become aware that a child has provided us with personal information without
                parental consent, please contact us, and we will take steps to remove such information.
              </p>

              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your
                information.
              </p>

              <h2>12. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us at:
              </p>
              <p>
                Email: privacy@newsynergylab.com
                <br />
                Address: 123 AI Avenue, Tech District, 10001
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </TabsContent>

            <TabsContent value="gdpr" className="prose prose-invert prose-lg max-w-none">
              <h2>GDPR Compliance (European Union)</h2>
              <p>
                For individuals in the European Economic Area (EEA), we comply with the General Data Protection
                Regulation (GDPR). This section provides specific information about your rights under the GDPR and how
                we process your personal data.
              </p>

              <h3>Data Controller</h3>
              <p>
                New SynergyLab acts as a data controller for personal data collected through our website and direct
                interactions. Our contact details are provided in the "Contact Us" section of this policy.
              </p>

              <h3>Legal Basis for Processing</h3>
              <p>Under the GDPR, we process your personal data based on one or more of the following legal grounds:</p>
              <ul>
                <li>
                  <strong>Consent (Art. 6(1)(a) GDPR):</strong> When you have given explicit consent to the processing
                  of your personal data for one or more specific purposes.
                </li>
                <li>
                  <strong>Contract Performance (Art. 6(1)(b) GDPR):</strong> When processing is necessary for the
                  performance of a contract to which you are a party or to take steps at your request before entering
                  into a contract.
                </li>
                <li>
                  <strong>Legal Obligation (Art. 6(1)(c) GDPR):</strong> When processing is necessary for compliance
                  with a legal obligation to which we are subject.
                </li>
                <li>
                  <strong>Legitimate Interests (Art. 6(1)(f) GDPR):</strong> When processing is necessary for the
                  purposes of the legitimate interests pursued by us or by a third party, except where such interests
                  are overridden by your interests or fundamental rights and freedoms.
                </li>
              </ul>

              <h3>Your Rights Under GDPR</h3>
              <p>Under the GDPR, you have the following rights:</p>
              <ul>
                <li>
                  <strong>Right to Access (Art. 15 GDPR):</strong> You have the right to obtain confirmation as to
                  whether personal data concerning you is being processed, and, where that is the case, access to that
                  personal data.
                </li>
                <li>
                  <strong>Right to Rectification (Art. 16 GDPR):</strong> You have the right to obtain the rectification
                  of inaccurate personal data concerning you.
                </li>
                <li>
                  <strong>Right to Erasure (Art. 17 GDPR):</strong> You have the right to obtain the erasure of your
                  personal data in certain circumstances.
                </li>
                <li>
                  <strong>Right to Restriction of Processing (Art. 18 GDPR):</strong> You have the right to obtain
                  restriction of processing in certain circumstances.
                </li>
                <li>
                  <strong>Right to Data Portability (Art. 20 GDPR):</strong> You have the right to receive your personal
                  data in a structured, commonly used, and machine-readable format.
                </li>
                <li>
                  <strong>Right to Object (Art. 21 GDPR):</strong> You have the right to object to processing of your
                  personal data in certain circumstances.
                </li>
                <li>
                  <strong>Right to Not be Subject to Automated Decision-Making (Art. 22 GDPR):</strong> You have the
                  right not to be subject to a decision based solely on automated processing, including profiling.
                </li>
              </ul>

              <h3>Data Protection Officer</h3>
              <p>
                We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in
                relation to this privacy policy. If you have any questions about this privacy policy, including any
                requests to exercise your legal rights, please contact our DPO at:
              </p>
              <p>
                Email: dpo@newsynergylab.com
                <br />
                Address: 123 AI Avenue, Tech District, 10001
                <br />
                Phone: +1 (555) 123-4567
              </p>

              <h3>Supervisory Authority</h3>
              <p>
                If you are located in the EEA and believe that our processing of your personal data infringes data
                protection laws, you have the right to lodge a complaint with a supervisory authority in your country of
                residence, place of work, or the place of the alleged infringement.
              </p>

              <h3>International Transfers</h3>
              <p>
                When we transfer personal data outside the EEA, we ensure that appropriate safeguards are in place as
                required by the GDPR, such as Standard Contractual Clauses approved by the European Commission.
              </p>
            </TabsContent>

            <TabsContent value="ccpa" className="prose prose-invert prose-lg max-w-none">
              <h2>CCPA/CPRA Compliance (California, USA)</h2>
              <p>
                This section provides additional information for California residents under the California Consumer
                Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
              </p>

              <h3>Categories of Personal Information Collected</h3>
              <p>
                In the past 12 months, we have collected the following categories of personal information from
                consumers:
              </p>
              <ul>
                <li>
                  <strong>Identifiers:</strong> Such as name, email address, IP address, and online identifiers.
                </li>
                <li>
                  <strong>Personal information categories listed in the California Customer Records statute:</strong>{" "}
                  Such as name, contact information, and employment information.
                </li>
                <li>
                  <strong>Commercial information:</strong> Such as products or services purchased, obtained, or
                  considered.
                </li>
                <li>
                  <strong>Internet or other electronic network activity information:</strong> Such as browsing history,
                  search history, and information regarding a consumer's interaction with our website.
                </li>
                <li>
                  <strong>Professional or employment-related information:</strong> Such as current or past job history
                  or performance evaluations.
                </li>
                <li>
                  <strong>Inferences drawn from other personal information:</strong> Such as profile reflecting a
                  person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes,
                  intelligence, abilities, and aptitudes.
                </li>
              </ul>

              <h3>Sources of Personal Information</h3>
              <p>We obtain the categories of personal information listed above from the following sources:</p>
              <ul>
                <li>Directly from you when you provide it to us</li>
                <li>Automatically from your device when you use our website</li>
                <li>From service providers and business partners</li>
                <li>From publicly available sources</li>
              </ul>

              <h3>Use of Personal Information</h3>
              <p>
                We may use or disclose the personal information we collect for one or more of the business purposes
                described in the "How We Use Your Information" section of this Privacy Policy.
              </p>

              <h3>Disclosure of Personal Information</h3>
              <p>
                In the past 12 months, we have disclosed the following categories of personal information for a business
                purpose:
              </p>
              <ul>
                <li>Identifiers</li>
                <li>California Customer Records personal information categories</li>
                <li>Commercial information</li>
                <li>Internet or other electronic network activity information</li>
                <li>Professional or employment-related information</li>
              </ul>
              <p>We disclose your personal information to the following categories of third parties:</p>
              <ul>
                <li>Service providers</li>
                <li>Business partners</li>
                <li>Regulatory authorities and law enforcement</li>
              </ul>

              <h3>Sale or Sharing of Personal Information</h3>
              <p>
                In the past 12 months, we have not sold personal information. Under the CPRA, some sharing of personal
                information for targeted advertising purposes may be considered "sharing." We may share certain
                information with advertising partners for these purposes, and you have the right to opt out of this
                sharing.
              </p>

              <h3>Your Rights Under CCPA/CPRA</h3>
              <p>As a California resident, you have the following rights:</p>
              <ul>
                <li>
                  <strong>Right to Know:</strong> You have the right to request that we disclose certain information to
                  you about our collection and use of your personal information over the past 12 months.
                </li>
                <li>
                  <strong>Right to Delete:</strong> You have the right to request that we delete any of your personal
                  information that we collected from you and retained, subject to certain exceptions.
                </li>
                <li>
                  <strong>Right to Correct:</strong> You have the right to request that we correct inaccurate personal
                  information that we maintain about you.
                </li>
                <li>
                  <strong>Right to Opt-Out of Sale or Sharing:</strong> You have the right to opt-out of the sale of
                  your personal information or the sharing of your personal information for targeted advertising
                  purposes.
                </li>
                <li>
                  <strong>Right to Limit Use and Disclosure of Sensitive Personal Information:</strong> You have the
                  right to limit the use and disclosure of sensitive personal information to certain business purposes.
                </li>
                <li>
                  <strong>Right to Non-Discrimination:</strong> You have the right not to be discriminated against for
                  exercising any of your CCPA/CPRA rights.
                </li>
              </ul>

              <h3>Exercising Your Rights</h3>
              <p>
                To exercise your rights under the CCPA/CPRA, please submit a verifiable consumer request to us by
                contacting us at privacy@newsynergylab.com or by calling our toll-free number at +1 (800) 123-4567.
              </p>
              <p>
                Only you, or a person registered with the California Secretary of State that you authorize to act on
                your behalf, may make a verifiable consumer request related to your personal information.
              </p>
            </TabsContent>

            <TabsContent value="vcdpa" className="prose prose-invert prose-lg max-w-none">
              <h2>VCDPA Compliance (Virginia, USA)</h2>
              <p>
                This section provides additional information for Virginia residents under the Virginia Consumer Data
                Protection Act (VCDPA).
              </p>

              <h3>Categories of Personal Data</h3>
              <p>We collect and process the following categories of personal data:</p>
              <ul>
                <li>Identifiers (such as name, email address, IP address)</li>
                <li>Professional or employment-related information</li>
                <li>Commercial information</li>
                <li>Internet or other electronic network activity information</li>
              </ul>

              <h3>Processing Activities</h3>
              <p>We process personal data for the following purposes:</p>
              <ul>
                <li>Providing our services</li>
                <li>Responding to inquiries</li>
                <li>Marketing and advertising</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h3>Your Rights Under VCDPA</h3>
              <p>As a Virginia resident, you have the following rights:</p>
              <ul>
                <li>
                  <strong>Right to Access:</strong> You have the right to confirm whether we are processing your
                  personal data and to access such personal data.
                </li>
                <li>
                  <strong>Right to Correction:</strong> You have the right to correct inaccuracies in your personal
                  data.
                </li>
                <li>
                  <strong>Right to Deletion:</strong> You have the right to delete personal data provided by or obtained
                  about you.
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> You have the right to obtain a copy of your personal data
                  in a portable and, to the extent technically feasible, readily usable format.
                </li>
                <li>
                  <strong>Right to Opt Out:</strong> You have the right to opt out of the processing of your personal
                  data for purposes of (i) targeted advertising, (ii) the sale of personal data, or (iii) profiling in
                  furtherance of decisions that produce legal or similarly significant effects concerning you.
                </li>
              </ul>

              <h3>Exercising Your Rights</h3>
              <p>
                To exercise your rights under the VCDPA, please contact us at privacy@newsynergylab.com. We will respond
                to your request within 45 days, which may be extended by an additional 45 days when reasonably
                necessary.
              </p>
              <p>
                If we decline to take action regarding your request, we will inform you of our decision and reasoning.
                If you disagree with our decision, you may appeal by contacting us at appeals@newsynergylab.com.
              </p>
            </TabsContent>

            <TabsContent value="lgpd" className="prose prose-invert prose-lg max-w-none">
              <h2>LGPD Compliance (Brazil)</h2>
              <p>
                This section provides additional information for Brazilian residents under the Lei Geral de Proteção de
                Dados (LGPD).
              </p>

              <h3>Data Controller</h3>
              <p>
                New SynergyLab acts as the data controller (controlador de dados) for personal data collected through
                our website and services.
              </p>

              <h3>Legal Basis for Processing</h3>
              <p>Under the LGPD, we process your personal data based on one or more of the following legal bases:</p>
              <ul>
                <li>
                  <strong>Consent:</strong> When you have given specific, informed, and unambiguous consent.
                </li>
                <li>
                  <strong>Contractual Obligation:</strong> When processing is necessary to fulfill a contract with you.
                </li>
                <li>
                  <strong>Legal Obligation:</strong> When processing is necessary to comply with a legal obligation.
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> When processing is necessary for our legitimate interests or
                  those of a third party, except where such interests are overridden by your interests or fundamental
                  rights and freedoms.
                </li>
                <li>
                  <strong>Regular Exercise of Rights:</strong> When processing is necessary for the regular exercise of
                  rights in judicial, administrative, or arbitration procedures.
                </li>
              </ul>

              <h3>Your Rights Under LGPD</h3>
              <p>Under the LGPD, you have the following rights:</p>
              <ul>
                <li>
                  <strong>Confirmation of Processing:</strong> The right to obtain confirmation of whether we process
                  your personal data.
                </li>
                <li>
                  <strong>Access:</strong> The right to access your personal data.
                </li>
                <li>
                  <strong>Correction:</strong> The right to correct incomplete, inaccurate, or out-of-date data.
                </li>
                <li>
                  <strong>Anonymization, Blocking, or Deletion:</strong> The right to request anonymization, blocking,
                  or deletion of unnecessary or excessive data or data processed in non-compliance with the LGPD.
                </li>
                <li>
                  <strong>Portability:</strong> The right to data portability to another service or product provider.
                </li>
                <li>
                  <strong>Deletion:</strong> The right to delete your personal data processed with your consent.
                </li>
                <li>
                  <strong>Information on Sharing:</strong> The right to information about public and private entities
                  with which we have shared your data.
                </li>
                <li>
                  <strong>Information on Consent:</strong> The right to be informed about the possibility of not
                  providing consent and the consequences of refusal.
                </li>
                <li>
                  <strong>Revocation of Consent:</strong> The right to revoke your consent at any time.
                </li>
              </ul>

              <h3>Data Protection Officer</h3>
              <p>
                Our Data Protection Officer (Encarregado) can be contacted at dpo@newsynergylab.com for any questions or
                concerns regarding your personal data.
              </p>

              <h3>International Transfers</h3>
              <p>
                When we transfer your personal data outside of Brazil, we ensure that appropriate safeguards are in
                place as required by the LGPD, such as standard contractual clauses, adequacy decisions, or binding
                corporate rules.
              </p>

              <h3>Exercising Your Rights</h3>
              <p>
                To exercise your rights under the LGPD, please contact us at privacy@newsynergylab.com. We will respond
                to your request within 15 days.
              </p>
            </TabsContent>

            <TabsContent value="popia" className="prose prose-invert prose-lg max-w-none">
              <h2>POPIA Compliance (South Africa)</h2>
              <p>
                This section provides additional information for South African residents under the Protection of
                Personal Information Act (POPIA).
              </p>

              <h3>Responsible Party</h3>
              <p>
                New SynergyLab acts as the responsible party (as defined in POPIA) for personal information collected
                through our website and services.
              </p>

              <h3>Purpose of Processing</h3>
              <p>We process your personal information for the following purposes:</p>
              <ul>
                <li>To provide our services to you</li>
                <li>To respond to your inquiries</li>
                <li>To communicate with you about our products and services</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>For other purposes with your consent</li>
              </ul>

              <h3>Categories of Personal Information</h3>
              <p>We collect and process the following categories of personal information:</p>
              <ul>
                <li>Contact information (such as name, email address, phone number)</li>
                <li>Professional or employment-related information</li>
                <li>Device and usage information</li>
                <li>Other information you choose to provide to us</li>
              </ul>

              <h3>Recipients of Personal Information</h3>
              <p>We may share your personal information with the following categories of recipients:</p>
              <ul>
                <li>Service providers who process information on our behalf</li>
                <li>Professional advisors</li>
                <li>Regulatory authorities and law enforcement when required by law</li>
                <li>Business partners with your consent</li>
              </ul>

              <h3>Cross-Border Transfers</h3>
              <p>
                When we transfer your personal information outside of South Africa, we ensure that the recipient is
                subject to a law, binding corporate rules, or binding agreement that provides an adequate level of
                protection. We will not transfer your personal information outside of South Africa unless one of the
                conditions set out in section 72 of POPIA is met.
              </p>

              <h3>Your Rights Under POPIA</h3>
              <p>Under POPIA, you have the following rights:</p>
              <ul>
                <li>
                  <strong>Right to Access:</strong> You have the right to request confirmation of whether we hold
                  personal information about you and to access that information.
                </li>
                <li>
                  <strong>Right to Correction:</strong> You have the right to request the correction of your personal
                  information.
                </li>
                <li>
                  <strong>Right to Deletion:</strong> You have the right to request the deletion or destruction of your
                  personal information under certain circumstances.
                </li>
                <li>
                  <strong>Right to Object:</strong> You have the right to object to the processing of your personal
                  information under certain circumstances.
                </li>
                <li>
                  <strong>Right to Submit a Complaint:</strong> You have the right to submit a complaint to the
                  Information Regulator regarding the alleged interference with the protection of your personal
                  information.
                </li>
              </ul>

              <h3>Information Officer</h3>
              <p>
                Our Information Officer can be contacted at privacy@newsynergylab.com for any questions or concerns
                regarding your personal information.
              </p>

              <h3>Exercising Your Rights</h3>
              <p>
                To exercise your rights under POPIA, please contact us at privacy@newsynergylab.com. We will respond to
                your request as soon as reasonably possible, but no later than 30 days after receipt of your request.
              </p>
            </TabsContent>

            <TabsContent value="epr" className="prose prose-invert prose-lg max-w-none">
              <h2>ePrivacy Compliance (European Union)</h2>
              <p>
                This section provides additional information on our compliance with the ePrivacy Directive (ePR) and its
                implementation in EU member states.
              </p>

              <h3>Cookies and Similar Technologies</h3>
              <p>
                In accordance with the ePrivacy Directive, we obtain your consent before placing non-essential cookies
                or similar technologies on your device. Essential cookies that are strictly necessary for the
                functioning of our website do not require consent.
              </p>
              <p>Our cookie consent mechanism allows you to:</p>
              <ul>
                <li>Accept or reject different categories of cookies</li>
                <li>Change your cookie preferences at any time</li>
                <li>Withdraw your consent at any time</li>
              </ul>

              <h3>Electronic Communications</h3>
              <p>
                We only send marketing communications to you if you have given your prior consent (opt-in) or, in
                limited circumstances, if we have obtained your contact details in the context of a sale of a product or
                service and are marketing similar products or services (soft opt-in).
              </p>
              <p>
                Each marketing communication we send includes an easy way to opt out of receiving future communications,
                typically through an unsubscribe link at the bottom of the email.
              </p>

              <h3>Do Not Track Signals</h3>
              <p>
                Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your
                online activities tracked. Due to the lack of a common understanding of how to interpret these signals,
                our website does not currently respond to browser "Do Not Track" signals.
              </p>

              <h3>Third-Party Tracking</h3>
              <p>
                Our website may include third-party tracking technologies that allow third parties to collect
                information about you over time and across different websites. We obtain your consent before allowing
                third parties to use these technologies on our website, except for technologies that are strictly
                necessary for the functioning of our website.
              </p>

              <h3>Updates to ePrivacy Compliance</h3>
              <p>
                We are monitoring developments related to the proposed ePrivacy Regulation, which is intended to replace
                the ePrivacy Directive. We will update our practices and this policy as necessary to comply with any new
                requirements.
              </p>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              If you have any questions about our privacy practices or would like to exercise your rights, please
              contact us.
            </p>
            <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
