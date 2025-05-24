import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Users, Calendar, Download } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-5 md:px-0">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline">Get in Touch</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">Contact Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaboration, have questions about our research, or want to learn more? We'd love to hear
            from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Research Inquiries</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">research@smartcity.edu</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Github className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">github.com/smartcity-research</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-4">Collaboration</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">partnerships@smartcity.edu</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Industry Partnerships</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Download Research Brief
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
