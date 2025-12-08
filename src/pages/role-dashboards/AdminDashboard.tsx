import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { adminNav } from "@/config/navigation";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import Students from "@/pages/dashboard/Students";
import Teachers from "@/pages/dashboard/Teachers";
import Finance from "@/pages/dashboard/Finance";
import Attendance from "@/pages/dashboard/Attendance";
import Exams from "@/pages/dashboard/Exams";
import Records from "@/pages/dashboard/Records";
import Notices from "@/pages/dashboard/Notices";
import Settings from "@/pages/dashboard/Settings";

const AdminDashboard = () => {
    return (
        <DashboardLayout navItems={adminNav}>
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

export default AdminDashboard;
