import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/components/dashboard/Dashboard";
import LabourManagement from "@/components/labour/LabourManagement";
import WorkManagement from "@/components/work/WorkManagement";
import PaymentManagement from "@/components/payments/PaymentManagement";
import Reports from "@/components/reports/Reports";
import HelpSupport from "@/components/help/HelpSupport";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "labour":
        return <LabourManagement />;
      case "work":
        return <WorkManagement />;
      case "payments":
        return <PaymentManagement />;
      case "reports":
        return <Reports />;
      case "help":
        return <HelpSupport />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default Index;
