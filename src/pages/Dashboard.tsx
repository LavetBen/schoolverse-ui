import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import Students from "./dashboard/Students";
import Teachers from "./dashboard/Teachers";
import Finance from "./dashboard/Finance";
import Attendance from "./dashboard/Attendance";
import Exams from "./dashboard/Exams";
import Records from "./dashboard/Records";
import Notices from "./dashboard/Notices";
import Settings from "./dashboard/Settings";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/records" element={<Records />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
