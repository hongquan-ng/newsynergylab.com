"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DataRequestPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    requestType: "",
    requestDetails: "",
    verificationMethod: "",
    agreeToTerms: false,
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormState((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Validate form
    if (
      !formState.firstName ||
      !formState.lastName ||
      !formState.email ||
      !formState.country ||
      !formState.requestType ||
      !formState.agreeToTerms
    ) {
      setFormStatus("error")
      setErrorMessage("Please fill in all required fields.")
      return
    }

    // Simulate API call
    try {
      // In a real application, you would send the form data to your server
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormStatus("success")
    } catch (error) {
      setFormStatus("error")
      setErrorMessage("An error occurred while submitting your request. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000510] to-[#000c28] text-white">
      <div className="container mx-auto px-4 py-20">
        <Button variant="ghost" className="text-gray-400 hover:text-white mb-8" asChild>
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Data Subject Request Form</h1>

          {formStatus === "success" ? (
            <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Request Submitted Successfully</h2>
              <p className="mb-6">
                Thank you for submitting your data subject request. We have received your request and will process it
                according to the applicable data protection laws. You will receive a confirmation email shortly.
              </p>
              <p className="mb-6">
                Your reference number is: <span className="font-bold">DSR-{Math.floor(Math.random() * 10000)}</span>
              </p>
              <Button className="bg-[#FF5500] hover:bg-[#FF7733] text-white" asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStatus === "error" && (
                <Alert variant="destructive">
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}

              <div className="bg-[#000c28] p-6 rounded-lg border border-[#FF5500]/20 space-y-6">
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleChange}
                      className="bg-[#000814] border-[#FF5500]/30"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleChange}
                      className="bg-[#000814] border-[#FF5500]/30"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-[#000814] border-[#FF5500]/30"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country of Residence *</Label>
                  <Select value={formState.country} onValueChange={(value) => handleSelectChange("country", value)}>
                    <SelectTrigger className="bg-[#000814] border-[#FF5500]/30">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eu">European Union (GDPR)</SelectItem>
                      <SelectItem value="uk">United Kingdom (UK GDPR)</SelectItem>
                      <SelectItem value="us-ca">United States - California (CCPA/CPRA)</SelectItem>
                      <SelectItem value="us-va">United States - Virginia (VCDPA)</SelectItem>
                      <SelectItem value="br">Brazil (LGPD)</SelectItem>
                      <SelectItem value="za">South Africa (POPIA)</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-[#000c28] p-6 rounded-lg border border-[#FF5500]/20 space-y-6">
                <h2 className="text-xl font-bold mb-4">Request Details</h2>

                <div className="space-y-4">
                  <Label>Type of Request *</Label>
                  <RadioGroup
                    value={formState.requestType}
                    onValueChange={(value) => handleRadioChange("requestType", value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="access" id="access" />
                      <Label htmlFor="access" className="cursor-pointer">
                        Access my data
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rectify" id="rectify" />
                      <Label htmlFor="rectify" className="cursor-pointer">
                        Rectify my data
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delete" id="delete" />
                      <Label htmlFor="delete" className="cursor-pointer">
                        Delete my data
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="restrict" id="restrict" />
                      <Label htmlFor="restrict" className="cursor-pointer">
                        Restrict processing of my data
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="portability" id="portability" />
                      <Label htmlFor="portability" className="cursor-pointer">
                        Data portability request
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="object" id="object" />
                      <Label htmlFor="object" className="cursor-pointer">
                        Object to processing
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="withdraw" id="withdraw" />
                      <Label htmlFor="withdraw" className="cursor-pointer">
                        Withdraw consent
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="cursor-pointer">
                        Other request
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requestDetails">Additional Details</Label>
                  <Textarea
                    id="requestDetails"
                    name="requestDetails"
                    value={formState.requestDetails}
                    onChange={handleChange}
                    className="bg-[#000814] border-[#FF5500]/30 min-h-[100px]"
                    placeholder="Please provide any additional details about your request..."
                  />
                </div>
              </div>

              <div className="bg-[#000c28] p-6 rounded-lg border border-[#FF5500]/20 space-y-6">
                <h2 className="text-xl font-bold mb-4">Verification</h2>
                <p className="text-sm text-gray-400 mb-4">
                  To protect your privacy, we need to verify your identity before processing your request. Please select
                  your preferred verification method:
                </p>

                <div className="space-y-4">
                  <Label>Verification Method *</Label>
                  <RadioGroup
                    value={formState.verificationMethod}
                    onValueChange={(value) => handleRadioChange("verificationMethod", value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-verification" />
                      <Label htmlFor="email-verification" className="cursor-pointer">
                        Email verification
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="document" id="document-verification" />
                      <Label htmlFor="document-verification" className="cursor-pointer">
                        Document verification (ID card, passport)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="bg-[#000c28] p-6 rounded-lg border border-[#FF5500]/20 space-y-6">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formState.agreeToTerms}
                    onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked === true)}
                    className="mt-1"
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I confirm that the information provided is accurate and that I am the data subject or authorized to
                    act on behalf of the data subject. I understand that it may be necessary to confirm my identity to
                    process this request. *
                  </Label>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#FF5500] hover:bg-[#FF7733] text-white"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Submitting..." : "Submit Request"}
                </Button>
              </div>
            </form>
          )}

          <div className="mt-8 p-4 bg-[#000c28]/50 border border-[#FF5500]/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Privacy Notice</h3>
            <p className="text-sm text-gray-300">
              The information you provide in this form will be used solely for the purpose of responding to your data
              subject request. We will retain this information for as long as necessary to process your request and to
              comply with our legal obligations. For more information about how we process your personal data, please
              see our{" "}
              <Link href="/privacy" className="text-[#FF5500] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
