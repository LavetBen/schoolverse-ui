import { useState } from "react";
import { Button } from "@/components/ui/button";

const Attendance = () => {
  const [selectedDate] = useState("2024-03-06");
  const [selectedClass, setSelectedClass] = useState("All Classes");

  const classes = ["All Classes", "Grade 8-A", "Grade 9-A", "Grade 9-B", "Grade 10-A", "Grade 11-A", "Grade 12-A"];

  const attendanceData = [
    { id: 1, name: "Alice Johnson", class: "Grade 10-A", rollNo: "2024001", status: "Present", time: "8:15 AM" },
    { id: 2, name: "Bob Smith", class: "Grade 9-B", rollNo: "2024002", status: "Present", time: "8:10 AM" },
    { id: 3, name: "Carol Davis", class: "Grade 11-C", rollNo: "2024003", status: "Absent", time: "-" },
    { id: 4, name: "David Wilson", class: "Grade 8-A", rollNo: "2024004", status: "Late", time: "9:05 AM" },
    { id: 5, name: "Emma Brown", class: "Grade 12-B", rollNo: "2024005", status: "Present", time: "8:00 AM" },
    { id: 6, name: "Frank Miller", class: "Grade 10-A", rollNo: "2024006", status: "Present", time: "8:12 AM" },
    { id: 7, name: "Grace Lee", class: "Grade 9-C", rollNo: "2024007", status: "Absent", time: "-" },
    { id: 8, name: "Henry Chen", class: "Grade 11-A", rollNo: "2024008", status: "Present", time: "8:08 AM" },
  ];

  const stats = [
    { label: "Present", value: "1,150", percentage: "93%", color: "text-success bg-success/10" },
    { label: "Absent", value: "54", percentage: "4%", color: "text-destructive bg-destructive/10" },
    { label: "Late", value: "30", percentage: "3%", color: "text-warning bg-warning/10" },
    { label: "On Leave", value: "12", percentage: "1%", color: "text-info bg-info/10" },
  ];

  const filteredData = selectedClass === "All Classes" 
    ? attendanceData 
    : attendanceData.filter(s => s.class === selectedClass);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Attendance</h2>
          <p className="text-muted-foreground">Track and manage daily attendance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <i className="fas fa-download mr-2"></i>
            Export
          </Button>
          <Button className="gradient-primary text-primary-foreground">
            <i className="fas fa-check-circle mr-2"></i>
            Mark Attendance
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color}`}>
                <span className="font-bold text-lg">{stat.percentage}</span>
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
          <i className="fas fa-calendar text-muted-foreground"></i>
          <input
            type="date"
            value={selectedDate}
            className="bg-transparent border-none outline-none text-foreground"
          />
        </div>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="bg-card border border-border rounded-lg px-4 py-2 text-foreground outline-none"
        >
          {classes.map((cls) => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
      </div>

      {/* Attendance Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium text-muted-foreground">Student</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Roll No</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Class</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Time</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((student) => (
                <tr key={student.id} className="border-t border-border hover:bg-muted/30">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                        {student.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="font-medium text-foreground">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{student.rollNo}</td>
                  <td className="p-4 text-muted-foreground">{student.class}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      student.status === "Present" ? "bg-success/10 text-success" :
                      student.status === "Absent" ? "bg-destructive/10 text-destructive" :
                      "bg-warning/10 text-warning"
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">{student.time}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <button className="p-2 hover:bg-success/10 rounded-lg text-success transition-colors" title="Present">
                        <i className="fas fa-check"></i>
                      </button>
                      <button className="p-2 hover:bg-destructive/10 rounded-lg text-destructive transition-colors" title="Absent">
                        <i className="fas fa-times"></i>
                      </button>
                      <button className="p-2 hover:bg-warning/10 rounded-lg text-warning transition-colors" title="Late">
                        <i className="fas fa-clock"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Weekly Attendance Trend</h3>
        <div className="h-48 flex items-end justify-between gap-4">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => {
            const height = [94, 92, 96, 91, 95][index];
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
    </div>
  );
};

export default Attendance;
