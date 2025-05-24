import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function MethodologySection() {
  const methodologySteps = [
    {
      number: 1,
      title: "Data Collection & Analysis",
      description:
        "Comprehensive data gathering from IoT sensors, citizen surveys, and municipal databases to establish baseline metrics and identify optimization opportunities.",
    },
    {
      number: 2,
      title: "Prototype Development",
      description:
        "Building and testing scalable prototypes for smart infrastructure components, including sensor networks, data processing systems, and user interfaces.",
    },
    {
      number: 3,
      title: "Field Testing & Validation",
      description:
        "Real-world deployment in controlled environments to validate effectiveness, measure performance metrics, and gather user feedback for iterative improvements.",
    },
    {
      number: 4,
      title: "Impact Assessment",
      description:
        "Comprehensive evaluation of environmental, economic, and social impacts to ensure sustainable and beneficial outcomes for urban communities.",
    },
  ]

  return (
    <section id="methodology" className="py-20 px-5 md:px-0">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline">Research Methodology</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">Our Approach</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive methodology combining quantitative analysis, field studies, and collaborative stakeholder
            engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              {methodologySteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/assets/banner/banner2.png"
              alt="Research Methodology Diagram"
              width={600}
              height={500}
              className="w-full h-auto rounded-xl border"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
