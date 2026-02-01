"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Download } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../../contexts/theme-context"
import Navigation from "../../components/navigation"

export default function Experience() {
  const { theme } = useTheme()

  const experience = [
    {
      title: "Software Engineer (AI/ML Engineer)",
      company: "Hewlett Packard Enterprise (HPE)",
      location: "Bengaluru, India",
      duration: "Sep 2023 - Aug 2025",
      achievements: [
        "Built an enterprise RAG system on HPE GreenLake infrastructure, utilizing GPT-4 and LangChain to enable semantic search and automated insight synthesis across unstructured financial repositories for 200+ users",
        "Reduced model hallucinations by 38% through systematic prompt engineering and fine-tuning of GPT-3.5 Turbo on domain-specific datasets and hyperparameter optimization",
        "Engineered a high-performance retrieval layer using a hybrid FAISS and Pinecone architecture, increasing search accuracy by 35% across a 50K+ document corpus",
        "Streamlined financial audits by implementing multi-agent orchestration via LangGraph, utilizing query decomposition to reduce manual research time by 60%",
        "Integrated Power BI with Prometheus & Grafana using MS Fabric to visualize LLM usage and performance metrics for stakeholders",
        "Collaborated with cross-functional teams to set evaluation benchmarks, using quantization and inference-parameter tuning to meet production accuracy and latency standards"],
    },
    {
      title: "Software Engineer Intern",
      company: "Hewlett Packard Enterprise (HPE)",
      location: "Bengaluru, India",
      duration: "Mar 2023 - Aug 2023",
      achievements: [
        "Developed a financial dashboard using React and FastAPI to visualize transaction health, implementing REST APIs to integrate automated fraud-risk alerts directly into the analyst workflow",
        "Constructed Python-based pipelines to automate log parsing and anomaly detection, containerizing services via Docker and Kubernetes to streamline deployments across Azure AKS",
        "Maintained detailed technical documentation of experimental results, methodologies, and codebases, presenting findings to senior engineers to guide project roadmaps",
      ],
    },
    {
      title: "AI/ML Core Member",
      company: "SSN Coding Club",
      location: "Chennai, India",
      duration: "Jun 2022 - Feb 2023",
      achievements: [
        "Taught machine learning fundamentals to 50+ students through weekly workshops, covering supervised learning, neural networks, and practical applications using Python, scikit-learn, and TensorFlow",
        "Organized coding competitions and hackathons focused on AI/ML challenges, guiding students through problem-solving approaches"
      ],
    },
  ]

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <Navigation currentPage="Experience" />

      {/* Experience Section */}
      <section className="py-12 sm:py-16 px-4 bg-white dark:bg-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Professional Experience</h1>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="border-gray-200 dark:border-purple-800/30">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <CardTitle className="flex items-center text-base sm:text-lg">
                        <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600 dark:text-purple-400" />
                        {exp.title}
                      </CardTitle>
                      <p className="text-base sm:text-lg font-medium mt-1 text-gray-600 dark:text-gray-300">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{exp.location}</p>
                    </div>
                    <Badge variant="outline" className="text-xs sm:text-sm">{exp.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 dark:text-purple-400 mr-2 mt-1 text-sm">•</span>
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-justify">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button variant="outline" size="lg" className="text-sm sm:text-base">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
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