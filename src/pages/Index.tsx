import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import AuditList from "@/components/audit/AuditList";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "audits":
        return <AuditList />;
      case "schedule":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Schedule Management</h2>
            <p className="text-muted-foreground">Coming soon - Schedule audits and manage calendar</p>
          </div>
        );
      case "findings":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Findings Management</h2>
            <p className="text-muted-foreground">Coming soon - Track and resolve audit findings</p>
          </div>
        );
      case "reports":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Reports & Analytics</h2>
            <p className="text-muted-foreground">Coming soon - Generate comprehensive audit reports</p>
          </div>
        );
      case "templates":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Audit Templates</h2>
            <p className="text-muted-foreground">Coming soon - Create and manage audit templates</p>
          </div>
        );
      case "users":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">User Management</h2>
            <p className="text-muted-foreground">Coming soon - Manage users and permissions</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </div>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  );
};

export default Index;
