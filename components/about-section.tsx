import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Award } from "lucide-react"

export function AboutSection() {
  const aboutCards = [
    {
      icon: Target,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Research Objectives",
      description: "Developing scalable IoT solutions for urban infrastructure monitoring and optimization.",
      items: [
        "Energy efficiency optimization",
        "Traffic flow management",
        "Waste management systems",
        "Citizen engagement platforms",
      ],
    },
    {
      icon: Lightbulb,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Innovation Focus",
      description: "Pioneering sustainable technologies for next-generation urban environments.",
      items: ["AI-powered analytics", "Blockchain integration", "Edge computing solutions", "Renewable energy systems"],
    },
    {
      icon: Award,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Expected Impact",
      description: "Measurable improvements in urban sustainability and quality of life.",
      items: [
        "30% energy reduction",
        "25% traffic optimization",
        "40% waste reduction",
        "Enhanced citizen satisfaction",
      ],
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30 px-5 md:px-0">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline">About the Project</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">Transforming Urban Living</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our research focuses on developing innovative solutions for smart city infrastructure, combining
            cutting-edge technology with sustainable urban planning principles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg ${card.iconBg} flex items-center justify-center mb-4`}>
                  <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                </div>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
