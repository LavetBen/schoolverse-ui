export interface SidebarItem {
    id: string;
    icon: string;
    label: string;
    path: string;
}

export const adminNav: SidebarItem[] = [
    { id: "dashboard", icon: "fa-home", label: "Dashboard", path: "/admin" },
    { id: "students", icon: "fa-users", label: "Students", path: "/admin/students" },
    { id: "teachers", icon: "fa-chalkboard-teacher", label: "Teachers", path: "/admin/teachers" },
    { id: "finance", icon: "fa-coins", label: "Finance", path: "/admin/finance" },
    { id: "attendance", icon: "fa-clock", label: "Attendance", path: "/admin/attendance" },
    { id: "exams", icon: "fa-file-alt", label: "Exams", path: "/admin/exams" },
    { id: "records", icon: "fa-book-open", label: "Records", path: "/admin/records" },
    { id: "notices", icon: "fa-bell", label: "Notices", path: "/admin/notices" },
    { id: "settings", icon: "fa-cog", label: "Settings", path: "/admin/settings" },
];

export const accountantNav: SidebarItem[] = [
    { id: "dashboard", icon: "fa-home", label: "Dashboard", path: "/accountant" },
    { id: "finance", icon: "fa-coins", label: "Finance", path: "/accountant/finance" },
    { id: "records", icon: "fa-book-open", label: "Records", path: "/accountant/records" },
    { id: "settings", icon: "fa-cog", label: "Settings", path: "/accountant/settings" },
];

export const teacherNav: SidebarItem[] = [
    { id: "dashboard", icon: "fa-home", label: "Dashboard", path: "/teacher" },
    { id: "students", icon: "fa-users", label: "Students", path: "/teacher/students" },
    { id: "attendance", icon: "fa-clock", label: "Attendance", path: "/teacher/attendance" },
    { id: "exams", icon: "fa-file-alt", label: "Exams", path: "/teacher/exams" },
    { id: "notices", icon: "fa-bell", label: "Notices", path: "/teacher/notices" },
];

export const studentNav: SidebarItem[] = [
    { id: "profile", icon: "fa-id-card", label: "My Profile", path: "/student" },
    { id: "results", icon: "fa-poll", label: "My Results", path: "/student/results" },
    { id: "fees", icon: "fa-money-bill-wave", label: "My Fees", path: "/student/fees" },
    { id: "attendance", icon: "fa-clock", label: "My Attendance", path: "/student/attendance" },
    { id: "exams", icon: "fa-file-alt", label: "My Exams", path: "/student/exams" },
    { id: "notices", icon: "fa-bell", label: "Notices", path: "/student/notices" },
];
