import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  specialization: string
  image?: string
}

export function TeamMemberCard({ name, role, specialization, image }: TeamMemberProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          <div className="relative w-24 h-24 mx-auto">
            <Image
              src={image || "/placeholder.svg?height=96&width=96"}
              alt={name}
              width={96}
              height={96}
              className="rounded-full border-4 border-background shadow-lg"
              priority
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-muted-foreground">{role}</p>
            <p className="text-sm text-muted-foreground mt-2">{specialization}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
