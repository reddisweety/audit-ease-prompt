import { useState } from "react";
import StatsCard from "./StatsCard";
import RecentAudits from "./RecentAudits";
import UpcomingTasks from "./UpcomingTasks";
import QuickActions from "./QuickActions";
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp
} from "lucide-react";
import heroAudit from "@/assets/hero-audit.jpg";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroAudit})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative p-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-2">Welcome to FoundAudit</h1>
            <p className="text-primary-foreground/90 mb-4">
              Streamline your audit processes, manage compliance, and track findings with our comprehensive audit management platform.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <TrendingUp className="h-4 w-4" />
              <span>23% improvement in audit completion time this quarter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Audits"
          value="127"
          change="+12% from last month"
          icon={FileText}
          trend="up"
        />
        <StatsCard
          title="Active Findings"
          value="24"
          change="-8% from last month"
          icon={AlertTriangle}
          trend="down"
        />
        <StatsCard
          title="Completed This Month"
          value="18"
          change="+25% from last month"
          icon={CheckCircle}
          trend="up"
        />
        <StatsCard
          title="Avg Resolution Time"
          value="4.2 days"
          change="-15% from last month"
          icon={Clock}
          trend="down"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Audits - takes up 2 columns */}
        <div className="lg:col-span-2">
          <RecentAudits />
        </div>
        
        {/* Sidebar Content */}
        <div className="space-y-6">
          <UpcomingTasks />
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;