"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../../contexts/theme-context"
import Navigation from "../../components/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const { theme } = useTheme()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon!",
      })
      reset()
    } catch (error) {
      toast.error("Failed to send message", {
        description: error instanceof Error ? error.message : "Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`min-h-screen flex flex-col ${theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <Navigation currentPage="Contact" />

      {/* Contact Section */}
      <section className="py-8 sm:py-12 px-4 flex-1 min-h-[calc(100vh-40px)] bg-white dark:bg-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Let's Connect</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                I'm always interested in discussing new opportunities, innovative projects, or just having a
                conversation about technology. Feel free to reach out!
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <a href="mailto:dheeraajpinjala@gmail.com" className="text-blue-600 hover:text-blue-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors text-sm sm:text-base break-all">
                      dheeraajpinjala@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Location</p>
                    <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Boston, Massachusetts</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Connect with me</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  <a href="https://linkedin.com/in/dheeraaj-pinjala" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-blue-600 dark:bg-purple-600 text-white rounded-full hover:bg-blue-700 dark:hover:bg-purple-700 transition-colors">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a href="https://github.com/Dheeraaj-8" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-green-600 dark:bg-purple-600 text-white rounded-full hover:bg-green-700 dark:hover:bg-purple-700 transition-colors">
                    <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a href="mailto:dheeraajpinjala@gmail.com" className="p-2 sm:p-3 bg-gray-800 dark:bg-purple-600 text-white rounded-full hover:bg-gray-900 dark:hover:bg-purple-700 transition-colors">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-gray-200 dark:border-purple-800/30">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Send a Message</CardTitle>
                <CardDescription className="text-sm sm:text-base">I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="text-sm sm:text-base"
                      {...register("name")}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="text-sm sm:text-base"
                      {...register("email")}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="text-sm sm:text-base"
                      {...register("subject")}
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className="text-sm sm:text-base"
                      {...register("message")}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-sm sm:text-base bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 border-t border-gray-200 dark:border-purple-800/30 bg-gray-50 dark:bg-card">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-lg sm:text-2xl text-gray-800 dark:text-gray-200 tracking-wide text-center sm:text-left">
            By Dheeraaj Pinjala
          </p>
          <Link href="/contact" className="text-lg sm:text-2xl text-blue-600 hover:text-blue-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors tracking-wide text-center sm:text-right">
            Connect with me
          </Link>
        </div>
      </footer>
    </div>
  )
}