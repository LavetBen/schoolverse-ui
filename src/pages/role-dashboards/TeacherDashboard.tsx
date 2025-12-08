import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { teacherNav } from "@/config/navigation";
import TeacherHome from "@/pages/dashboard/TeacherHome";
import Students from "@/pages/dashboard/Students";
import Attendance from "@/pages/dashboard/Attendance";
import Exams from "@/pages/dashboard/Exams";
import Notices from "@/pages/dashboard/Notices";

const TeacherDashboard = () => {
    return (
        <DashboardLayout navItems={teacherNav}>
            <Routes>
                <Route path="/" element={<TeacherHome />} />
                <Route path="/students" element={<Students />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/exams" element={<Exams />} />
                <Route path="/notices" element={<Notices />} />
            </Routes>
        </DashboardLayout>
    );
};

export default TeacherDashboard;
