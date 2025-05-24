import { Badge } from "@/components/ui/badge"
import { PublicationCard } from "./publication-card"

export function PublicationsSection() {
  const publications = [
    {
      title: "Smart City IoT Framework: A Comprehensive Approach",
      journal: "Journal of Urban Technology",
      year: "2024",
      type: "paper" as const,
      description:
        "A detailed analysis of our IoT integration framework for smart city infrastructure, including implementation guidelines and performance metrics.",
      actions: [
        { label: "View Paper", icon: "external" as const },
        { label: "Download PDF", icon: "download" as const },
      ],
    },
    {
      title: "Sustainable Urban Energy Management Systems",
      journal: "International Conference on Smart Cities",
      year: "2024",
      type: "conference" as const,
      description:
        "Presentation of our energy optimization algorithms and their real-world implementation in urban environments.",
      actions: [
        { label: "View Slides", icon: "external" as const },
        { label: "Source Code", icon: "github" as const },
      ],
    },
    {
      title: "Open Source Smart City Toolkit",
      journal: "GitHub Repository",
      year: "Continuously Updated",
      type: "code" as const,
      description:
        "Complete open-source toolkit including sensor configurations, data processing pipelines, and visualization dashboards.",
      actions: [
        { label: "View Repository", icon: "github" as const },
        { label: "Documentation", icon: "download" as const },
      ],
    },
    {
      title: "Citizen Engagement in Smart City Development",
      journal: "Urban Studies Quarterly",
      year: "2024",
      type: "paper" as const,
      description:
        "Analysis of citizen participation models and their impact on smart city initiative success rates and community satisfaction.",
      actions: [
        { label: "View Paper", icon: "external" as const },
        { label: "Download PDF", icon: "download" as const },
      ],
    },
  ]

  return (
    <section id="publications" className="py-20 bg-muted/30 px-5 md:px-0">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline">Publications & Resources</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">Research Output</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Peer-reviewed publications, conference presentations, and open-source resources from our research
            initiative.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((publication, index) => (
            <PublicationCard key={index} {...publication} />
          ))}
        </div>
      </div>
    </section>
  )
}
