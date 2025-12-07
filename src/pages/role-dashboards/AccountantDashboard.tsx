import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { accountantNav } from "@/config/navigation";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import Finance from "@/pages/dashboard/Finance";
import Records from "@/pages/dashboard/Records";
import Settings from "@/pages/dashboard/Settings";

const AccountantDashboard = () => {
    return (
        <DashboardLayout navItems={accountantNav} userRole="Accountant">
            <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/records" element={<Records />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </DashboardLayout>
    );
};

export default AccountantDashboard;
