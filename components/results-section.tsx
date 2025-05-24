import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ResultsSection() {
  const keyMetrics = [
    { value: "32%", label: "Energy Savings", subtitle: "Compared to baseline", color: "text-green-600" },
    { value: "28%", label: "Traffic Reduction", subtitle: "Peak hour optimization", color: "text-blue-600" },
    { value: "45%", label: "Waste Efficiency", subtitle: "Collection optimization", color: "text-purple-600" },
    { value: "89%", label: "Citizen Satisfaction", subtitle: "User feedback score", color: "text-orange-600" },
  ]

  const environmentalMetrics = [
    { label: "CO₂ Emissions Reduction", value: "24%" },
    { label: "Water Usage Optimization", value: "18%" },
    { label: "Air Quality Improvement", value: "15%" },
    { label: "Noise Pollution Reduction", value: "22%" },
  ]

  const economicMetrics = [
    { label: "Operational Cost Savings", value: "$2.4M" },
    { label: "Infrastructure Efficiency", value: "35%" },
    { label: "Maintenance Reduction", value: "28%" },
    { label: "ROI Timeline", value: "3.2 years" },
  ]

  return (
    <section id="results" className="py-20 bg-muted/30 px-5 md:px-0">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline">Key Results</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">Research Findings</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Significant improvements across all measured parameters demonstrate the effectiveness of our smart city
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Environmental Impact</CardTitle>
              <CardDescription>Measurable improvements in urban sustainability metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {environmentalMetrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{metric.label}</span>
                    <span className="font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Economic Benefits</CardTitle>
              <CardDescription>Cost savings and economic impact analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {economicMetrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{metric.label}</span>
                    <span className="font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
