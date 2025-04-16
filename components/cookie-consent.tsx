"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X, ChevronDown, ChevronUp, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

interface CookieCategory {
  id: string
  name: string
  description: string
  required: boolean
  default: boolean
  cookies: {
    name: string
    purpose: string
    duration: string
    provider: string
  }[]
}

const cookieCategories: CookieCategory[] = [
  {
    id: "essential",
    name: "Essential",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    required: true,
    default: true,
    cookies: [
      {
        name: "session_id",
        purpose: "Maintains your session state",
        duration: "Session",
        provider: "New SynergyLab",
      },
      {
        name: "csrf_token",
        purpose: "Prevents cross-site request forgery",
        duration: "Session",
        provider: "New SynergyLab",
      },
      {
        name: "cookieConsent",
        purpose: "Stores your cookie consent preferences",
        duration: "1 year",
        provider: "New SynergyLab",
      },
    ],
  },
  {
    id: "analytics",
    name: "Analytics",
    description:
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
    required: false,
    default: false,
    cookies: [
      {
        name: "_ga",
        purpose: "Distinguishes users for Google Analytics",
        duration: "2 years",
        provider: "Google",
      },
      {
        name: "_gid",
        purpose: "Distinguishes users for Google Analytics",
        duration: "24 hours",
        provider: "Google",
      },
      {
        name: "_gat",
        purpose: "Throttles request rate for Google Analytics",
        duration: "1 minute",
        provider: "Google",
      },
    ],
  },
  {
    id: "functional",
    name: "Functional",
    description: "These cookies enable the website to provide enhanced functionality and personalization.",
    required: false,
    default: false,
    cookies: [
      {
        name: "language",
        purpose: "Remembers your preferred language",
        duration: "1 year",
        provider: "New SynergyLab",
      },
      {
        name: "theme",
        purpose: "Remembers your preferred theme (light/dark)",
        duration: "1 year",
        provider: "New SynergyLab",
      },
    ],
  },
  {
    id: "targeting",
    name: "Targeting/Advertising",
    description:
      "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
    required: false,
    default: false,
    cookies: [
      {
        name: "_fbp",
        purpose: "Used by Facebook to deliver advertisements",
        duration: "3 months",
        provider: "Facebook",
      },
      {
        name: "_gcl_au",
        purpose: "Used by Google AdSense to experiment with advertisement efficiency",
        duration: "3 months",
        provider: "Google",
      },
    ],
  },
]

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState("cookie-notice")
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // Initialize preferences from cookie categories
    const initialPreferences: Record<string, boolean> = {}
    cookieCategories.forEach((category) => {
      initialPreferences[category.id] = category.default
    })
    setPreferences(initialPreferences)

    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const toggleCategory = (categoryId: string) => {
    if (cookieCategories.find((cat) => cat.id === categoryId)?.required) {
      return // Can't toggle required categories
    }
    setPreferences((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  const toggleCategoryExpand = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  const savePreferences = () => {
    const consentData = {
      version: "1.0",
      date: new Date().toISOString(),
      preferences,
    }
    localStorage.setItem("cookieConsent", JSON.stringify(consentData))
    setShowConsent(false)
    setShowPreferences(false)
    // Here you would initialize cookies based on preferences
  }

  const acceptAll = () => {
    const allPreferences: Record<string, boolean> = {}
    cookieCategories.forEach((category) => {
      allPreferences[category.id] = true
    })
    setPreferences(allPreferences)
    const consentData = {
      version: "1.0",
      date: new Date().toISOString(),
      preferences: allPreferences,
    }
    localStorage.setItem("cookieConsent", JSON.stringify(consentData))
    setShowConsent(false)
    // Here you would initialize all cookies/tracking
  }

  const acceptEssential = () => {
    const essentialPreferences: Record<string, boolean> = {}
    cookieCategories.forEach((category) => {
      essentialPreferences[category.id] = category.required
    })
    setPreferences(essentialPreferences)
    const consentData = {
      version: "1.0",
      date: new Date().toISOString(),
      preferences: essentialPreferences,
    }
    localStorage.setItem("cookieConsent", JSON.stringify(consentData))
    setShowConsent(false)
    // Here you would initialize only essential cookies
  }

  const openPreferences = () => {
    setShowPreferences(true)
  }

  if (!showConsent && !showPreferences) return null

  if (showPreferences) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-[#000814] border border-[#FF5500]/30 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#FF5500]/30 flex justify-between items-center">
            <h2 className="text-xl font-bold">Privacy Preferences Center</h2>
            <button
              onClick={() => setShowPreferences(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Close preferences"
            >
              <X size={20} />
            </button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
            <div className="border-b border-[#FF5500]/30">
              <TabsList className="bg-transparent border-b-0 p-0">
                <TabsTrigger
                  value="cookie-notice"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#FF5500] data-[state=active]:shadow-none rounded-none px-4 py-2"
                >
                  Cookie Notice
                </TabsTrigger>
                <TabsTrigger
                  value="cookie-settings"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#FF5500] data-[state=active]:shadow-none rounded-none px-4 py-2"
                >
                  Cookie Settings
                </TabsTrigger>
                <TabsTrigger
                  value="privacy-regulations"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#FF5500] data-[state=active]:shadow-none rounded-none px-4 py-2"
                >
                  Privacy Regulations
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <TabsContent value="cookie-notice" className="mt-0 h-full">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Cookie Notice</h3>
                  <p>
                    This website uses cookies to enhance your browsing experience, serve personalized content, and
                    analyze our traffic. Cookies are small text files that are stored on your device when you visit a
                    website.
                  </p>
                  <div>
                    <p>We categorize cookies as follows:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        <strong>Essential cookies:</strong> Necessary for the website to function properly. These cannot
                        be disabled.
                      </li>
                      <li>
                        <strong>Analytics cookies:</strong> Help us understand how visitors interact with our website.
                      </li>
                      <li>
                        <strong>Functional cookies:</strong> Enable enhanced functionality and personalization.
                      </li>
                      <li>
                        <strong>Targeting/Advertising cookies:</strong> Used to deliver relevant ads and track campaign
                        performance.
                      </li>
                    </ul>
                  </div>
                  <p>
                    You can adjust your cookie preferences at any time. For more information about the cookies we use,
                    please see our{" "}
                    <Link href="/cookies" className="text-[#FF5500] hover:underline">
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="cookie-settings" className="mt-0 h-full">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Cookie Settings</h3>
                  <p className="text-sm text-gray-400">
                    Manage your cookie preferences below. Essential cookies cannot be disabled as they are necessary for
                    the website to function properly.
                  </p>

                  <div className="space-y-4">
                    {cookieCategories.map((category) => (
                      <div key={category.id} className="border border-[#FF5500]/20 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between p-4 bg-[#000c28]">
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{category.name}</h4>
                              <div className="flex items-center">
                                {category.required && (
                                  <span className="text-xs bg-[#FF5500]/20 text-[#FF5500] px-2 py-1 rounded mr-2">
                                    Required
                                  </span>
                                )}
                                <Switch
                                  id={`switch-${category.id}`}
                                  checked={preferences[category.id] || category.required}
                                  onCheckedChange={() => toggleCategory(category.id)}
                                  disabled={category.required}
                                />
                              </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                          </div>
                          <button
                            onClick={() => toggleCategoryExpand(category.id)}
                            className="ml-4 text-gray-400 hover:text-white"
                            aria-label={expandedCategories[category.id] ? "Collapse details" : "Expand details"}
                          >
                            {expandedCategories[category.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                        </div>

                        {expandedCategories[category.id] && (
                          <div className="p-4 bg-[#000814] border-t border-[#FF5500]/20">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-[#FF5500]/20">
                                  <th className="text-left py-2 px-2">Name</th>
                                  <th className="text-left py-2 px-2">Provider</th>
                                  <th className="text-left py-2 px-2">Purpose</th>
                                  <th className="text-left py-2 px-2">Expiry</th>
                                </tr>
                              </thead>
                              <tbody>
                                {category.cookies.map((cookie) => (
                                  <tr key={cookie.name} className="border-b border-[#FF5500]/10">
                                    <td className="py-2 px-2">{cookie.name}</td>
                                    <td className="py-2 px-2">{cookie.provider}</td>
                                    <td className="py-2 px-2">{cookie.purpose}</td>
                                    <td className="py-2 px-2">{cookie.duration}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="privacy-regulations" className="mt-0 h-full">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Privacy Regulations</h3>
                  <p className="text-sm text-gray-400">
                    We comply with various privacy regulations worldwide. Below is information about your rights under
                    these regulations.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium flex items-center">
                        <span className="bg-[#FF5500]/20 text-[#FF5500] p-1 rounded mr-2">
                          <Info size={16} />
                        </span>
                        GDPR (European Union)
                      </h4>
                      <p className="text-sm mt-1">
                        Under the General Data Protection Regulation, you have rights to access, rectify, erase,
                        restrict processing, object to processing, and port your data. For more information, visit our{" "}
                        <Link href="/gdpr" className="text-[#FF5500] hover:underline">
                          GDPR page
                        </Link>
                        .
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium flex items-center">
                        <span className="bg-[#FF5500]/20 text-[#FF5500] p-1 rounded mr-2">
                          <Info size={16} />
                        </span>
                        CCPA/CPRA (California, USA)
                      </h4>
                      <p className="text-sm mt-1">
                        California residents have the right to know what personal information is collected, to delete
                        personal information, to opt-out of the sale of personal information, and to non-discrimination
                        for exercising these rights.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium flex items-center">
                        <span className="bg-[#FF5500]/20 text-[#FF5500] p-1 rounded mr-2">
                          <Info size={16} />
                        </span>
                        VCDPA (Virginia, USA)
                      </h4>
                      <p className="text-sm mt-1">
                        Virginia residents have the right to access, correct, delete their personal data, obtain a copy
                        of their data, and opt out of targeted advertising and data sales.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium flex items-center">
                        <span className="bg-[#FF5500]/20 text-[#FF5500] p-1 rounded mr-2">
                          <Info size={16} />
                        </span>
                        LGPD (Brazil)
                      </h4>
                      <p className="text-sm mt-1">
                        Under Brazil's Lei Geral de Proteção de Dados, you have rights to confirmation of processing,
                        access, correction, anonymization, portability, deletion, and information about sharing.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium flex items-center">
                        <span className="bg-[#FF5500]/20 text-[#FF5500] p-1 rounded mr-2">
                          <Info size={16} />
                        </span>
                        POPIA (South Africa)
                      </h4>
                      <p className="text-sm mt-1">
                        The Protection of Personal Information Act gives you the right to be notified when your data is
                        collected, to access your data, to correct or delete your data, and to object to processing.
                      </p>
                    </div>
                  </div>

                  <p className="text-sm mt-4">
                    To exercise any of these rights, please contact our Data Protection Officer at
                    dpo@newsynergylab.com.
                  </p>
                </div>
              </TabsContent>
            </div>

            <div className="p-4 border-t border-[#FF5500]/30 flex flex-wrap justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:border-gray-400"
                onClick={acceptEssential}
              >
                Essential Only
              </Button>
              <Button size="sm" className="bg-[#FF5500] hover:bg-[#FF7733]" onClick={savePreferences}>
                Save Preferences
              </Button>
              <Button size="sm" className="bg-[#FF5500] hover:bg-[#FF7733]" onClick={acceptAll}>
                Accept All
              </Button>
            </div>
          </Tabs>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#000814] border-t border-[#FF5500]/30 p-4 md:p-6 shadow-lg animate-slide-up">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold mb-2">Privacy Notice</h3>
              <button
                onClick={() => setShowConsent(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close cookie consent"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              We use cookies and similar technologies to enhance your experience, analyze traffic, and for ad
              personalization and measurement. By clicking "Accept All", you consent to our use of cookies as described
              in our{" "}
              <Link href="/privacy" className="text-[#FF5500] hover:underline">
                Privacy Policy
              </Link>
              . We comply with various privacy regulations including GDPR, CCPA/CPRA, VCDPA, LGPD, and POPIA.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:border-gray-400"
              onClick={openPreferences}
            >
              Manage Preferences
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500]/10"
              onClick={acceptEssential}
            >
              Essential Only
            </Button>
            <Button size="sm" className="bg-[#FF5500] hover:bg-[#FF7733]" onClick={acceptAll}>
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
