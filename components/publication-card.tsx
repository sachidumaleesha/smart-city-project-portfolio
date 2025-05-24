import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Download, FileText, Users, Github } from "lucide-react"

interface PublicationProps {
  title: string
  journal: string
  year: string
  type: "paper" | "conference" | "code"
  description: string
  actions: Array<{
    label: string
    icon: "external" | "download" | "github"
  }>
}

export function PublicationCard({ title, journal, year, type, description, actions }: PublicationProps) {
  const getTypeIcon = () => {
    switch (type) {
      case "paper":
        return <FileText className="h-3 w-3 mr-1" />
      case "conference":
        return <Users className="h-3 w-3 mr-1" />
      case "code":
        return <Github className="h-3 w-3 mr-1" />
    }
  }

  const getActionIcon = (iconType: string) => {
    switch (iconType) {
      case "external":
        return <ExternalLink className="h-3 w-3 mr-1" />
      case "download":
        return <Download className="h-3 w-3 mr-1" />
      case "github":
        return <Github className="h-3 w-3 mr-1" />
    }
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>
              {journal} • {year}
            </CardDescription>
          </div>
          <Badge variant="secondary">
            {getTypeIcon()}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex gap-2">
          {actions.map((action, index) => (
            <Button key={index} size="sm" variant="outline">
              {getActionIcon(action.icon)}
              {action.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
