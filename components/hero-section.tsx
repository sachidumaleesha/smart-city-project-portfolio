import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Download, Calendar, BarChart3 } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden px-5 md:px-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="container relative mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Calendar className="h-3 w-3 mr-1" />
                2025 Research Project
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Smart City
                <span className="text-primary"> Innovation</span>
                <br />
                Research Initiative
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Exploring sustainable urban development through IoT integration, data analytics, and citizen engagement
                platforms for next-generation smart cities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explore Research
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Months</div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <div className="text-2xl font-bold">06</div>
                <div className="text-sm text-muted-foreground">Researchers</div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <div className="text-2xl font-bold">01</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border bg-muted">
              <Image
                src="/assets/banner/banner1.png"
                alt="Smart City Research Visualization"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">98% Efficiency</div>
                  <div className="text-sm text-muted-foreground">Energy Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
