import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export function ExperienceCard({ title, company, duration, description, technologies }: ExperienceCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{company} | {duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 mb-4">
          {description.map((item, index) => (
            <li key={index} className="text-muted-foreground">{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}