import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface QuickStatsProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  color: string;
}

export function QuickStats({ title, value, change, icon: Icon, color }: QuickStatsProps) {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {change && (
              <p className="text-xs text-green-600 font-medium">
                {change}
              </p>
            )}
          </div>
          <div className={`rounded-xl p-3 bg-gradient-primary/10 ${color}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}