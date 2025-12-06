import { Button } from "@/components/ui/button";

const Notices = () => {
  const notices = [
    {
      id: 1,
      title: "School Closed for Spring Break",
      content: "School will remain closed from March 25th to April 1st for Spring Break. Classes resume on April 2nd, 2024.",
      date: "Mar 6, 2024",
      author: "Principal Office",
      priority: "High",
      category: "Holiday",
    },
    {
      id: 2,
      title: "Annual Sports Day Announcement",
      content: "The Annual Sports Day will be held on March 25th, 2024. All students are encouraged to participate in various sports activities.",
      date: "Mar 5, 2024",
      author: "Sports Department",
      priority: "Medium",
      category: "Event",
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting Schedule",
      content: "PTM for all classes will be conducted on March 20th from 9 AM to 2 PM. Parents are requested to attend.",
      date: "Mar 4, 2024",
      author: "Academic Office",
      priority: "High",
      category: "Meeting",
    },
    {
      id: 4,
      title: "Mid-Term Examination Schedule",
      content: "Mid-term examinations will begin from March 15th. Detailed schedule has been shared with class teachers.",
      date: "Mar 3, 2024",
      author: "Examination Cell",
      priority: "High",
      category: "Exam",
    },
    {
      id: 5,
      title: "Library Book Return Reminder",
      content: "All students are reminded to return borrowed library books by March 10th to avoid late fees.",
      date: "Mar 2, 2024",
      author: "Library",
      priority: "Low",
      category: "Reminder",
    },
  ];

  const categories = [
    { name: "All", count: 45 },
    { name: "Holiday", count: 8 },
    { name: "Event", count: 12 },
    { name: "Meeting", count: 10 },
    { name: "Exam", count: 9 },
    { name: "Reminder", count: 6 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Notices</h2>
          <p className="text-muted-foreground">School announcements and notifications</p>
        </div>
        <Button className="gradient-primary text-primary-foreground">
          <i className="fas fa-plus mr-2"></i>
          Create Notice
        </Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl border border-border p-4">
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    cat.name === "All" ? "bg-primary/10 text-primary" : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  <span className="font-medium">{cat.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    cat.name === "All" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-card rounded-xl border border-border p-4 mt-4">
            <h3 className="font-semibold text-foreground mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">This Week</span>
                <span className="font-semibold text-foreground">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">This Month</span>
                <span className="font-semibold text-foreground">45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">High Priority</span>
                <span className="font-semibold text-destructive">8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notices List */}
        <div className="lg:col-span-3 space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  notice.priority === "High" ? "bg-destructive/10" :
                  notice.priority === "Medium" ? "bg-warning/10" : "bg-success/10"
                }`}>
                  <i className={`fas ${
                    notice.category === "Holiday" ? "fa-calendar-alt" :
                    notice.category === "Event" ? "fa-calendar-check" :
                    notice.category === "Meeting" ? "fa-users" :
                    notice.category === "Exam" ? "fa-file-alt" : "fa-bell"
                  } ${
                    notice.priority === "High" ? "text-destructive" :
                    notice.priority === "Medium" ? "text-warning" : "text-success"
                  }`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{notice.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{notice.content}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${
                      notice.priority === "High" ? "bg-destructive/10 text-destructive" :
                      notice.priority === "Medium" ? "bg-warning/10 text-warning" :
                      "bg-success/10 text-success"
                    }`}>
                      {notice.priority}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      <i className="fas fa-user mr-1"></i>{notice.author}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      <i className="fas fa-calendar mr-1"></i>{notice.date}
                    </span>
                    <span className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground">
                      {notice.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
