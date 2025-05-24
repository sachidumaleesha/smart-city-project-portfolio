import { Badge } from "@/components/ui/badge"
import { TeamMemberCard } from "./team-member-card"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Palliyaguru P.N.A",
      role: "Leader",
      specialization: "Faculty of Computing",
      imageUrl: "/assets/team/nipun.png",
    },
    {
      name: "Maleesha K.L.D.D.S",
      role: "Member",
      specialization: "Faculty of Computing",
      imageUrl: "/assets/team/diwan.jpg",
    },
    {
      name: "Nadeeshan I.U.N",
      role: "Member",
      specialization: "Faculty of Computing",
      imageUrl: "/assets/team/nipuna.jpg",
    },
    {
      name: "Doranegoda D.A.K.S.M",
      role: "Member",
      specialization: "Faculty of Computing",
      imageUrl: "/assets/team/kusal.png",
    },
    {
      name: "Wishalya Tissera",
      role: "Supervisor",
      specialization: "Faculty of Computing",
      imageUrl: "/assets/team/wishalya.jpeg",
    },
    {
      name: "Hansi De Silva",
      role: "Co-Supervisor",
      specialization: "Faculty of Computing",
      imageUrl: "/assets/team/hansi.jpg",
    },
  ]

  return (
    <section id="team" className="py-20 px-5 md:px-0">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline">Research Team</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Researchers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A multidisciplinary team of experts in urban planning, technology, and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} name={member.name} role={member.role} specialization={member.specialization} image={member.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  )
}
