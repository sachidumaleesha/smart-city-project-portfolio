import { Separator } from "@/components/ui/separator"
import { Lightbulb } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const footerSections = [
    {
      title: "Research",
      links: [
        { label: "Methodology", href: "#" },
        { label: "Results", href: "#" },
        { label: "Publications", href: "#" },
        { label: "Data Sets", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Source Code", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Tutorials", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", href: "#" },
        { label: "Partnerships", href: "#" },
        { label: "News", href: "#" },
        { label: "Events", href: "#" },
      ],
    },
  ]

  return (
    <footer className="border-t bg-muted/30 px-5 md:px-0">
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-3 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Lightbulb className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">SmartCity Research</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Advancing urban sustainability through innovative technology and collaborative research.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 SmartCity Research Initiative. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
