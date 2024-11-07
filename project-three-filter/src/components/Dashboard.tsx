// Dashboard.js
import Sidebar from "./Sidebar";
import ProjectTable from "./ProjectTable";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar with responsive toggle */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex-1 bg-gray-900 overflow-y-auto">
        {/* Toggle button for mobile */}
        <div className="sm:hidden p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white"
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
        <ProjectTable />
      </div>
    </div>
  );
};

export default Dashboard;
