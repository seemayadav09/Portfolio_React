import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SkillCardProps {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export function SkillCard({ name, level, icon }: SkillCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="text-primary">{icon}</div>
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span className="font-medium">{name}</span>
              <span className="text-muted-foreground">{level}%</span>
            </div>
            <Progress value={level} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}