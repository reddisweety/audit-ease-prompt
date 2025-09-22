import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

interface Task {
  id: string;
  title: string;
  type: "audit" | "finding" | "review";
  priority: "high" | "medium" | "low";
  dueDate: string;
  assignee: string;
  status: "pending" | "in-review" | "completed";
}

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Review Q3 Financial Controls",
    type: "audit",
    priority: "high",
    dueDate: "2024-09-23",
    assignee: "You",
    status: "pending"
  },
  {
    id: "2", 
    title: "Remediate Access Control Finding",
    type: "finding",
    priority: "high",
    dueDate: "2024-09-24",
    assignee: "IT Team",
    status: "in-review"
  },
  {
    id: "3",
    title: "Submit Compliance Report",
    type: "review",
    priority: "medium", 
    dueDate: "2024-09-26",
    assignee: "Sarah Johnson",
    status: "pending"
  },
  {
    id: "4",
    title: "Update Risk Assessment",
    type: "audit",
    priority: "low",
    dueDate: "2024-09-30",
    assignee: "Risk Team",
    status: "completed"
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-destructive/10 text-destructive";
    case "medium":
      return "bg-warning/10 text-warning";
    case "low":
      return "bg-success/10 text-success";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-success" />;
    case "in-review":
      return <Clock className="h-4 w-4 text-warning" />;
    case "pending":
      return <AlertTriangle className="h-4 w-4 text-destructive" />;
    default:
      return null;
  }
};

const UpcomingTasks = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Tasks</CardTitle>
        <Button variant="ghost" size="sm">
          View All
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                {getStatusIcon(task.status)}
                <div>
                  <p className="font-medium text-sm">{task.title}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {task.type}
                    </Badge>
                    <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{task.dueDate}</p>
                <p className="text-xs text-muted-foreground">{task.assignee}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingTasks;