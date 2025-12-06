import { Button } from "@/components/ui/button";

const Exams = () => {
  const upcomingExams = [
    { id: 1, name: "Mid-Term Mathematics", class: "Grade 10", date: "Mar 15, 2024", time: "9:00 AM - 12:00 PM", status: "Scheduled" },
    { id: 2, name: "Physics Practical", class: "Grade 11", date: "Mar 18, 2024", time: "2:00 PM - 4:00 PM", status: "Scheduled" },
    { id: 3, name: "English Literature", class: "Grade 9", date: "Mar 20, 2024", time: "9:00 AM - 11:00 AM", status: "Scheduled" },
    { id: 4, name: "Chemistry Lab Test", class: "Grade 12", date: "Mar 22, 2024", time: "10:00 AM - 1:00 PM", status: "Draft" },
  ];

  const recentResults = [
    { exam: "Unit Test - Biology", class: "Grade 10-A", avgScore: "78%", topScore: "98%", passRate: "92%" },
    { exam: "Quiz - History", class: "Grade 9-B", avgScore: "82%", topScore: "100%", passRate: "95%" },
    { exam: "Assignment - Math", class: "Grade 11-C", avgScore: "75%", topScore: "95%", passRate: "88%" },
    { exam: "Mid-Term - English", class: "Grade 8-A", avgScore: "80%", topScore: "97%", passRate: "94%" },
  ];

  const examTypes = [
    { type: "Unit Tests", count: 24, icon: "fa-file-alt", color: "bg-primary/10 text-primary" },
    { type: "Mid-Terms", count: 8, icon: "fa-calendar-check", color: "bg-success/10 text-success" },
    { type: "Finals", count: 4, icon: "fa-trophy", color: "bg-warning/10 text-warning" },
    { type: "Practicals", count: 16, icon: "fa-flask", color: "bg-info/10 text-info" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Exams</h2>
          <p className="text-muted-foreground">Schedule and manage examinations</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <i className="fas fa-chart-bar mr-2"></i>
            View Results
          </Button>
          <Button className="gradient-primary text-primary-foreground">
            <i className="fas fa-plus mr-2"></i>
            Schedule Exam
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {examTypes.map((type, index) => (
          <div key={index} className="bg-card rounded-xl border border-border p-4 card-hover">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${type.color}`}>
                <i className={`fas ${type.icon} text-xl`}></i>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{type.count}</p>
                <p className="text-sm text-muted-foreground">{type.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Exams */}
        <div className="bg-card rounded-xl border border-border">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h3 className="font-semibold text-foreground">Upcoming Exams</h3>
            <Button variant="ghost" size="sm" className="text-primary">View All</Button>
          </div>
          <div className="p-6 space-y-4">
            {upcomingExams.map((exam) => (
              <div key={exam.id} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-file-alt text-primary"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-medium text-foreground">{exam.name}</h4>
                      <p className="text-sm text-muted-foreground">{exam.class}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${
                      exam.status === "Scheduled" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                    }`}>
                      {exam.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span><i className="fas fa-calendar mr-1"></i>{exam.date}</span>
                    <span><i className="fas fa-clock mr-1"></i>{exam.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Results */}
        <div className="bg-card rounded-xl border border-border">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h3 className="font-semibold text-foreground">Recent Results</h3>
            <Button variant="ghost" size="sm" className="text-primary">View All</Button>
          </div>
          <div className="p-6 space-y-4">
            {recentResults.map((result, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-foreground">{result.exam}</h4>
                    <p className="text-sm text-muted-foreground">{result.class}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-2 bg-card rounded-lg">
                    <p className="text-lg font-bold text-primary">{result.avgScore}</p>
                    <p className="text-xs text-muted-foreground">Avg Score</p>
                  </div>
                  <div className="text-center p-2 bg-card rounded-lg">
                    <p className="text-lg font-bold text-success">{result.topScore}</p>
                    <p className="text-xs text-muted-foreground">Top Score</p>
                  </div>
                  <div className="text-center p-2 bg-card rounded-lg">
                    <p className="text-lg font-bold text-warning">{result.passRate}</p>
                    <p className="text-xs text-muted-foreground">Pass Rate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exam Calendar */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">March 2024 Exam Schedule</h3>
        <div className="grid grid-cols-7 gap-2 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2 font-medium text-muted-foreground text-sm">{day}</div>
          ))}
          {Array.from({ length: 31 }, (_, i) => {
            const day = i + 1;
            const hasExam = [15, 18, 20, 22].includes(day);
            return (
              <div
                key={day}
                className={`p-3 rounded-lg text-sm ${
                  hasExam 
                    ? "gradient-primary text-primary-foreground font-medium" 
                    : "hover:bg-muted cursor-pointer text-foreground"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Exams;
