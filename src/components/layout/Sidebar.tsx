import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Users, 
  AlertTriangle, 
  BarChart3,
  Settings,
  HelpCircle
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "audits", label: "Audits", icon: FileText },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "findings", label: "Findings", icon: AlertTriangle },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "templates", label: "Templates", icon: FileText },
    { id: "users", label: "Users", icon: Users },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border h-full">
      <nav className="p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-3 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <HelpCircle className="mr-3 h-4 w-4" />
              Help
            </Button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;