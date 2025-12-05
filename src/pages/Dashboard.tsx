import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState("dashboard");
  const navigate = useNavigate();

  const sidebarItems = [
    { id: "dashboard", icon: "fa-home", label: "Dashboard" },
    { id: "students", icon: "fa-users", label: "Students" },
    { id: "teachers", icon: "fa-chalkboard-teacher", label: "Teachers" },
    { id: "finance", icon: "fa-coins", label: "Finance" },
    { id: "attendance", icon: "fa-clock", label: "Attendance" },
    { id: "exams", icon: "fa-file-alt", label: "Exams" },
    { id: "records", icon: "fa-book-open", label: "Records" },
    { id: "notices", icon: "fa-bell", label: "Notices" },
    { id: "settings", icon: "fa-cog", label: "Settings" },
  ];

  const stats = [
    { icon: "fa-users", label: "Total Students", value: "1,234", change: "+12%", color: "text-primary bg-primary/10" },
    { icon: "fa-chalkboard-teacher", label: "Total Teachers", value: "87", change: "+3%", color: "text-success bg-success/10" },
    { icon: "fa-coins", label: "Fees Collected", value: "$45,230", change: "+18%", color: "text-warning bg-warning/10" },
    { icon: "fa-check-circle", label: "Attendance Rate", value: "94%", change: "+2%", color: "text-info bg-info/10" },
  ];

  const recentStudents = [
    { name: "Alice Johnson", class: "Grade 10-A", status: "Active", avatar: "AJ" },
    { name: "Bob Smith", class: "Grade 9-B", status: "Active", avatar: "BS" },
    { name: "Carol Davis", class: "Grade 11-C", status: "Active", avatar: "CD" },
    { name: "David Wilson", class: "Grade 8-A", status: "Absent", avatar: "DW" },
    { name: "Emma Brown", class: "Grade 12-B", status: "Active", avatar: "EB" },
  ];

  const upcomingEvents = [
    { title: "Mid-Term Exams", date: "Mar 15, 2024", type: "Exam" },
    { title: "Parent-Teacher Meeting", date: "Mar 20, 2024", type: "Meeting" },
    { title: "Sports Day", date: "Mar 25, 2024", type: "Event" },
    { title: "Science Fair", date: "Apr 5, 2024", type: "Event" },
  ];

  const quickActions = [
    { icon: "fa-user-plus", label: "Add Student", color: "bg-primary" },
    { icon: "fa-calendar-check", label: "Mark Attendance", color: "bg-success" },
    { icon: "fa-receipt", label: "Generate Invoice", color: "bg-warning" },
    { icon: "fa-bullhorn", label: "Send Notice", color: "bg-info" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-card border-r border-border transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-border">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fas fa-graduation-cap text-primary-foreground"></i>
              </div>
              {sidebarOpen && <span className="text-lg font-bold text-foreground">EduManage</span>}
            </Link>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveModule(item.id)}
                className={`w-full sidebar-item ${
                  activeModule === item.id ? "sidebar-item-active" : ""
                }`}
              >
                <i className={`fas ${item.icon} text-lg w-6`}></i>
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>

          {/* User & Logout */}
          <div className="p-4 border-t border-border">
            <div className={`flex items-center gap-3 mb-4 ${sidebarOpen ? "" : "justify-center"}`}>
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold flex-shrink-0">
                AD
              </div>
              {sidebarOpen && (
                <div className="overflow-hidden">
                  <p className="font-medium text-foreground text-sm truncate">Admin User</p>
                  <p className="text-xs text-muted-foreground truncate">admin@school.edu</p>
                </div>
              )}
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/")}
            >
              <i className="fas fa-sign-out-alt mr-2"></i>
              {sidebarOpen && "Logout"}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border">
          <div className="flex items-center justify-between px-6 h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-muted text-muted-foreground"
              >
                <i className={`fas ${sidebarOpen ? "fa-times" : "fa-bars"}`}></i>
              </button>
              <h1 className="text-xl font-semibold text-foreground capitalize">{activeModule}</h1>
            </div>
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                <i className="fas fa-search text-muted-foreground"></i>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm w-48"
                />
              </div>
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-muted text-muted-foreground">
                <i className="fas fa-bell"></i>
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="flex items-center justify-between mb-4">
                  <div className={`feature-icon ${stat.color}`}>
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <span className="text-sm text-success font-medium">{stat.change}</span>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border card-hover"
                >
                  <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center`}>
                    <i className={`fas ${action.icon} text-primary-foreground`}></i>
                  </div>
                  <span className="text-sm font-medium text-foreground">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Students */}
            <div className="bg-card rounded-xl border border-border">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="font-semibold text-foreground">Recent Students</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                          {student.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.class}</p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          student.status === "Active"
                            ? "bg-success/10 text-success"
                            : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {student.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-card rounded-xl border border-border">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="font-semibold text-foreground">Upcoming Events</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className={`fas ${
                          event.type === "Exam" ? "fa-file-alt" :
                          event.type === "Meeting" ? "fa-handshake" : "fa-calendar-alt"
                        } text-primary`}></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                        {event.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Chart Placeholder */}
          <div className="mt-6 bg-card rounded-xl border border-border p-6">
            <h2 className="font-semibold text-foreground mb-4">Weekly Attendance Overview</h2>
            <div className="h-48 flex items-end justify-between gap-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => {
                const height = [85, 92, 78, 95, 88][index];
                return (
                  <div key={day} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full gradient-primary rounded-t-lg transition-all duration-300 hover:opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-sm text-muted-foreground">{day}</span>
                    <span className="text-xs font-medium text-foreground">{height}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
