import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { studentNav } from "@/config/navigation";
import Attendance from "@/pages/dashboard/Attendance";
import Exams from "@/pages/dashboard/Exams";
import Notices from "@/pages/dashboard/Notices";
import StudentResults from "@/pages/dashboard/StudentResults";
import StudentFees from "@/pages/dashboard/StudentFees";
import StudentProfile from "@/pages/dashboard/StudentProfile";

const StudentDashboard = () => {
    return (
        <DashboardLayout navItems={studentNav} userRole="Student">
            <Routes>
                <Route path="/" element={<StudentProfile />} />
                <Route path="/results" element={<StudentResults />} />
                <Route path="/fees" element={<StudentFees />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/exams" element={<Exams />} />
                <Route path="/notices" element={<Notices />} />
            </Routes>
        </DashboardLayout>
    );
};

export default StudentDashboard;
