"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Github } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../../contexts/theme-context"
import Navigation from "../../components/navigation"

export default function Projects() {
  const { theme } = useTheme()

  const projects = [
   
    {
      title: "Multi-Agent AI Researcher System",
      duration: "Personal Project",
      techStack: ["Python", "AgenticAI", "RAG", "FastAPI", "React"],
      description: "Built an AI research assistant using multiple specialized agents to search academic databases via APIs, synthesize papers and generate literature reviews, while providing research-related contextual answers through a chat interface.",
      impact: "Multi-agent coordination, academic database integration",
      github: "https://github.com/dheeraajpinjala/AI-Research-Assistant",
      tags: ["#AgenticAI", "#RAG", "#ResearchAssistant"],
    },
    {
      title: "Custom Claude GitOps MCP Server",
      duration: "Personal Project",
      techStack: ["Python", "MCP", "Git", "Claude", "FastAPI"],
      description: "Enabled autonomous GitOps workflows for Claude by building a custom MCP server using a JSON-RPC communication implementation, automating Git CLI workflows and GitHub API integrations for end-to-end repository provisioning and code deployment",
      impact: "MCP Server for Autonomous GitOps invocation",
      github: "https://github.com/dheeraajpinjala/Claude-Gitops-Assistant",
      tags: ["#GitOps", "#AgenticAI", "#MCPServer", "#DeveloperAutomation"],
    },
    {
      title: "Indian LegalGPT",
      duration: "Personal Project",
      techStack: ["Python", "ChromaDB", "Groq", "Mistral-7B", "React", "FastAPI"],
      description: "Created a bilingual (Hindi/English) legal information chatbot using RAG with ChromaDB for document retrieval and Groq/Mistral-7B for inference, supporting language toggle and accurate contextually relevant responses.",
      impact: "Bilingual legal support with RAG implementation",
      github: "https://github.com/dheeraajpinjala/Indian-LegalGPT",
      tags: ["#RAG", "#VectorDB", "#AIchatbot"],
    },
    {
      title: "KAMBAZ Application",
      duration: "Academic Project",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      description: "Built a NU Canvas-inspired learning management system using MERN stack with Redux state management, RESTful APIs, JWT authentication, and MongoDB database design, supporting course creation, assignment workflows, and multi-role user management.",
      impact: "Full-stack LMS with multi-role user management",
      github: "https://github.com/dheeraajpinjala/kambaz-next-js",
      tags: ["#MERN", "#FullStack", "#LMS"],
    },
    {
      title: "Google Calendar",
      duration: "Academic Project",
      techStack: ["Java", "Java Swing", "JUnit", "MVC"],
      description: "Developed a calendar application in Java using MVC architecture with three interfaces (headless, interactive, Swing GUI), implementing Singleton and Command design patterns to support multiple calendars, timezone-aware scheduling, event copying, and Google Calendar-compatible exports.",
      impact: "MVC architecture with 3 interfaces, multiple design patterns",
      github: "#",
      tags: ["#Java", "#DesignPatterns", "#MVC"],
    },
    {
      title: "Credit Score Analysis using Machine Learning",
      duration: "Academic Project",
      techStack: ["Python", "Google Colab", "TensorFlow", "Seaborn"],
      description: "Implemented a multi-class credit risk model classifying high- and low-risk creditors, achieving 98.6% prediction accuracy by leveraging stacked ensemble techniques and addressing class imbalance with CTGAN, SMOTE, and bootstrapping.",
      impact: "98.6% accuracy achieved with ensemble methods",
      github: "https://github.com/dheeraajpinjala/Credit-Score-Analysis-using-Machine-Learning",
      tags: ["#MachineLearning", "#DataScience", "#Analytics"],
    },
  ]

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <Navigation currentPage="Projects" />

      {/* Projects Section */}
      <section className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Featured Projects</h1>
          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-gray-200 dark:border-purple-800/30">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                      <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-justify">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">
                    Impact: {project.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
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