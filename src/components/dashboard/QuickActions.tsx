import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Calendar, Users, AlertTriangle, BarChart3 } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      id: "new-audit",
      title: "New Audit",
      description: "Create a new audit",
      icon: Plus,
      color: "bg-primary text-primary-foreground"
    },
    {
      id: "new-template",
      title: "New Template", 
      description: "Create audit template",
      icon: FileText,
      color: "bg-secondary text-secondary-foreground"
    },
    {
      id: "schedule",
      title: "Schedule Audit",
      description: "Schedule upcoming audit",
      icon: Calendar,
      color: "bg-info/10 text-info"
    },
    {
      id: "findings",
      title: "View Findings",
      description: "Review open findings",
      icon: AlertTriangle,
      color: "bg-warning/10 text-warning"
    },
    {
      id: "reports",
      title: "Generate Report",
      description: "Create audit report",
      icon: BarChart3,
      color: "bg-success/10 text-success"
    },
    {
      id: "users",
      title: "Manage Users",
      description: "Add or edit users",
      icon: Users,
      color: "bg-muted text-muted-foreground"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                variant="outline"
                className="h-auto p-4 flex-col items-start text-left space-y-2 hover:bg-muted/50"
              >
                <div className={`p-2 rounded-md ${action.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">{action.title}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;