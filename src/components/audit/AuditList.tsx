import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Plus, 
  Calendar,
  MapPin,
  User,
  FileText,
  AlertTriangle
} from "lucide-react";

interface Audit {
  id: string;
  title: string;
  type: string;
  status: "completed" | "in-progress" | "scheduled" | "overdue";
  date: string;
  location: string;
  auditor: string;
  findings: number;
  progress?: number;
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
    findings: 3,
    progress: 100
  },
  {
    id: "2",
    title: "ISO 27001 Security Assessment", 
    type: "Security",
    status: "in-progress",
    date: "2024-09-20",
    location: "Remote",
    auditor: "Michael Chen",
    findings: 7,
    progress: 65
  },
  {
    id: "3",
    title: "GDPR Compliance Check",
    type: "Privacy",
    status: "scheduled",
    date: "2024-09-25",
    location: "London Office",
    auditor: "Emma Davis",
    findings: 0,
    progress: 0
  },
  {
    id: "4",
    title: "SOX Controls Testing",
    type: "Financial", 
    status: "overdue",
    date: "2024-09-10",
    location: "Chicago Office",
    auditor: "Robert Wilson",
    findings: 12,
    progress: 45
  },
  {
    id: "5",
    title: "Environmental Impact Assessment",
    type: "Environmental",
    status: "completed",
    date: "2024-09-12",
    location: "Manufacturing Plant",
    auditor: "Lisa Anderson",
    findings: 2,
    progress: 100
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

const AuditList = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Audits</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Audit
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Audits</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search audits..." 
                  className="pl-8 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockAudits.map((audit) => (
              <div key={audit.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold">{audit.title}</h3>
                      <Badge variant="outline">{audit.type}</Badge>
                      <Badge className={getStatusColor(audit.status)}>
                        {audit.status.replace("-", " ")}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {audit.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        {audit.location}
                      </div>
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        {audit.auditor}
                      </div>
                    </div>

                    {audit.status === "in-progress" && (
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{audit.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${audit.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {audit.findings > 0 && (
                      <div className="flex items-center text-sm">
                        <AlertTriangle className="mr-2 h-4 w-4 text-warning" />
                        <span className="text-warning font-medium">
                          {audit.findings} finding{audit.findings !== 1 ? 's' : ''} identified
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditList;