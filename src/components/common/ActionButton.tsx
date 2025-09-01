import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function ActionButton({ icon: Icon, label, onClick, disabled }: ActionButtonProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      className="flex flex-col items-center gap-3 h-20 p-4 bg-gradient-subtle hover:bg-primary/5 transition-all duration-300 hover-scale"
    >
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </Button>
  );
}