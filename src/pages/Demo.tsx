import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Demo = () => {
  const modules = [
    {
      icon: "fa-tachometer-alt",
      title: "Dashboard Overview",
      description: "Get a quick snapshot of your school's key metrics",
      preview: [
        { label: "Total Students", value: "1,234" },
        { label: "Teachers", value: "87" },
        { label: "Classes", value: "45" },
      ],
    },
    {
      icon: "fa-coins",
      title: "Finance Module",
      description: "Track fees, payments, and generate financial reports",
      preview: [
        { label: "Fees Collected", value: "$45,230" },
        { label: "Pending", value: "$8,750" },
        { label: "This Month", value: "$12,400" },
      ],
    },
    {
      icon: "fa-clock",
      title: "Attendance System",
      description: "Real-time attendance tracking with parent notifications",
      preview: [
        { label: "Present Today", value: "1,156" },
        { label: "Absent", value: "78" },
        { label: "Rate", value: "93.7%" },
      ],
    },
    {
      icon: "fa-book-open",
      title: "Student Records",
      description: "Complete student profiles and academic history",
      preview: [
        { label: "Active Records", value: "1,234" },
        { label: "New Admissions", value: "45" },
        { label: "Graduates", value: "320" },
      ],
    },
    {
      icon: "fa-chart-bar",
      title: "Exams & Grades",
      description: "Create exams, grade papers, and generate report cards",
      preview: [
        { label: "Upcoming Exams", value: "12" },
        { label: "Results Published", value: "8" },
        { label: "Avg. Pass Rate", value: "89%" },
      ],
    },
    {
      icon: "fa-bell",
      title: "Notifications",
      description: "Send announcements and alerts to parents and staff",
      preview: [
        { label: "Sent Today", value: "156" },
        { label: "Scheduled", value: "23" },
        { label: "Templates", value: "18" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Explore <span className="text-gradient">EduManage</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Preview the modules and features you'll have access to once you create an account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/login">
              <Button size="lg" variant="outline" className="btn-outline text-base px-8">
                <i className="fas fa-sign-in-alt mr-2"></i>
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" className="btn-primary text-base px-8">
                <i className="fas fa-user-plus mr-2"></i>
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modules Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Modules You'll Access</h2>
            <p className="section-subtitle">
              A preview of what's waiting for you inside the dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden card-hover"
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="feature-icon bg-primary/10 text-primary">
                      <i className={`fas ${module.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{module.title}</h3>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-muted/30">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Sample Data</p>
                  <div className="grid grid-cols-3 gap-4">
                    {module.preview.map((item, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-lg font-bold text-foreground">{item.value}</p>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Preview */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Interactive Dashboard</h2>
              <p className="text-muted-foreground mb-6">
                Experience a clean, intuitive interface designed for educators. Navigate through modules, access reports, and manage your school with ease.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Quick access to all modules from sidebar",
                  "Real-time data updates and notifications",
                  "Customizable dashboard widgets",
                  "Mobile-responsive design",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-success"></i>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/signup">
                <Button className="btn-primary">
                  <i className="fas fa-rocket mr-2"></i>
                  Try It Free
                </Button>
              </Link>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span className="text-sm text-muted-foreground ml-2">EduManage Dashboard</span>
              </div>
              <div className="flex gap-4">
                {/* Mini Sidebar */}
                <div className="w-16 bg-muted/50 rounded-lg p-3 space-y-3">
                  {["fa-home", "fa-users", "fa-coins", "fa-clock", "fa-chart-bar", "fa-cog"].map((icon, idx) => (
                    <div
                      key={idx}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        idx === 0 ? "gradient-primary text-primary-foreground" : "bg-card text-muted-foreground"
                      }`}
                    >
                      <i className={`fas ${icon} text-sm`}></i>
                    </div>
                  ))}
                </div>
                {/* Content Area */}
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Students</p>
                      <p className="text-xl font-bold text-foreground">1,234</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Teachers</p>
                      <p className="text-xl font-bold text-foreground">87</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-muted-foreground">Attendance Rate</span>
                      <span className="text-xs font-medium text-success">94%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-full w-[94%] gradient-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-2">Recent Activity</p>
                    <div className="space-y-2">
                      {["Fee payment received", "Attendance marked", "Exam scheduled"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Experience It Live?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Create your free account and start exploring all features today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 text-base px-8">
                Create Free Account
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
