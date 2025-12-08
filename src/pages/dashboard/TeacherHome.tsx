import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TeacherHome = () => {
    const stats = [
        { icon: "fa-user-graduate", label: "My Students", value: "45", change: "Class 10-A", color: "text-primary bg-primary/10" },
        { icon: "fa-clipboard-check", label: "Attendance Today", value: "92%", change: "+2%", color: "text-success bg-success/10" },
        { icon: "fa-book-open", label: "Classes Today", value: "5", change: "Remaining: 3", color: "text-info bg-info/10" },
        { icon: "fa-clock", label: "Next Class", value: "10:00 AM", change: "Maths - 10B", color: "text-warning bg-warning/10" },
    ];

    const todayClasses = [
        { time: "08:00 AM", subject: "Mathematics", class: "Grade 10-A", room: "Room 101", status: "Completed" },
        { time: "09:00 AM", subject: "Physics", class: "Grade 11-B", room: "Lab 2", status: "Completed" },
        { time: "10:00 AM", subject: "Mathematics", class: "Grade 10-B", room: "Room 102", status: "Upcoming" },
        { time: "11:30 AM", subject: "Physics", class: "Grade 12-A", room: "Lab 1", status: "Upcoming" },
        { time: "02:00 PM", subject: "Consultation", class: "Staff Room", room: "-", status: "Upcoming" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">Teacher Dashboard</h2>
                    <p className="text-muted-foreground">Manage your classes and students.</p>
                </div>
                <div className="flex gap-3">
                    <Link to="/teacher/attendance">
                        <Button className="gradient-primary text-primary-foreground">
                            <i className="fas fa-check-square mr-2"></i>
                            Take Attendance
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`feature-icon ${stat.color}`}>
                                <i className={`fas ${stat.icon}`}></i>
                            </div>
                            <span className="text-sm font-medium text-muted-foreground">
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Today's Schedule */}
                <div className="lg:col-span-2 bg-card rounded-xl border border-border">
                    <div className="flex items-center justify-between p-6 border-b border-border">
                        <h3 className="font-semibold text-foreground">Today's Schedule</h3>
                        <Button variant="ghost" size="sm" className="text-primary">
                            View Calendar
                        </Button>
                    </div>
                    <div className="p-6 space-y-4">
                        {todayClasses.map((cls, index) => (
                            <div key={index} className="flex items-center p-4 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                                <div className="w-20 text-center border-r border-border pr-4 mr-4">
                                    <p className="font-bold text-foreground">{cls.time}</p>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-foreground text-lg">{cls.subject}</h4>
                                    <div className="flex items-center text-sm text-muted-foreground gap-3 mt-1">
                                        <span><i className="fas fa-users mr-1"></i> {cls.class}</span>
                                        <span><i className="fas fa-map-marker-alt mr-1"></i> {cls.room}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${cls.status === "Completed" ? "bg-success/10 text-success" : "bg-primary/10 text-primary"
                                        }`}>
                                        {cls.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Notices */}
                <div className="space-y-6">
                    <div className="bg-card rounded-xl border border-border p-6">
                        <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-auto flex-col p-4">
                                <i className="fas fa-upload text-xl text-primary mb-2"></i>
                                <span className="text-sm">Upload Marks</span>
                            </Button>
                            <Button variant="outline" className="h-auto flex-col p-4">
                                <i className="fas fa-bullhorn text-xl text-warning mb-2"></i>
                                <span className="text-sm">Send Notice</span>
                            </Button>
                            <Button variant="outline" className="h-auto flex-col p-4">
                                <i className="fas fa-tasks text-xl text-info mb-2"></i>
                                <span className="text-sm">Assignments</span>
                            </Button>
                            <Button variant="outline" className="h-auto flex-col p-4">
                                <i className="fas fa-calendar-alt text-xl text-success mb-2"></i>
                                <span className="text-sm">Leave Request</span>
                            </Button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 p-6">
                        <h3 className="font-semibold text-foreground mb-2">Next Exam</h3>
                        <p className="text-2xl font-bold text-primary mb-1">Mathematics</p>
                        <p className="text-muted-foreground mb-4">Grade 10 • In 3 days</p>
                        <Button className="w-full bg-primary text-primary-foreground">Prepare Resources</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherHome;
