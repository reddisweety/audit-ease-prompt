import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User, ExternalLink } from "lucide-react";

interface Audit {
  id: string;
  title: string;
  type: string;
  status: "completed" | "in-progress" | "scheduled" | "overdue";
  date: string;
  location: string;
  auditor: string;
  findings: number;
}

const mockAudits: Audit[] = [
  {
    id: "1",
    title: "Q3 Financial Compliance Review",
    type: "Financial",
    status: "completed",
    date: "2024-09-15",
    location: "New York Office",
    auditor: "Sarah Johnson",
    findings: 3
  },
  {
    id: "2",
    title: "ISO 27001 Security Assessment", 
    type: "Security",
    status: "in-progress",
    date: "2024-09-20",
    location: "Remote",
    auditor: "Michael Chen",
    findings: 7
  },
  {
    id: "3",
    title: "GDPR Compliance Check",
    type: "Privacy",
    status: "scheduled",
    date: "2024-09-25",
    location: "London Office",
    auditor: "Emma Davis",
    findings: 0
  },
  {
    id: "4",
    title: "SOX Controls Testing",
    type: "Financial", 
    status: "overdue",
    date: "2024-09-10",
    location: "Chicago Office",
    auditor: "Robert Wilson",
    findings: 12
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-success/10 text-success hover:bg-success/20";
    case "in-progress":
      return "bg-info/10 text-info hover:bg-info/20";
    case "scheduled":
      return "bg-warning/10 text-warning hover:bg-warning/20";
    case "overdue":
      return "bg-destructive/10 text-destructive hover:bg-destructive/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const RecentAudits = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Audits</CardTitle>
        <Button variant="ghost" size="sm">
          View All
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAudits.map((audit) => (
            <div key={audit.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{audit.title}</h4>
                  <Badge className={getStatusColor(audit.status)}>
                    {audit.status.replace("-", " ")}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {audit.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3" />
                    {audit.location}
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    {audit.auditor}
                  </div>
                  {audit.findings > 0 && (
                    <div className="text-warning">
                      {audit.findings} findings
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAudits;