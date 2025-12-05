import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Features = () => {
  const modules = [
    {
      icon: "fa-coins",
      title: "Finance Management",
      color: "bg-warning/10 text-warning border-warning/20",
      features: [
        "Automated fee collection and invoicing",
        "Multiple payment gateway integration",
        "Expense tracking and budgeting",
        "Financial reports and analytics",
        "Salary management for staff",
        "Scholarship and discount management",
      ],
    },
    {
      icon: "fa-clock",
      title: "Attendance Tracking",
      color: "bg-success/10 text-success border-success/20",
      features: [
        "Real-time digital attendance",
        "Biometric and RFID integration",
        "Automatic parent notifications",
        "Leave management system",
        "Attendance analytics dashboard",
        "Monthly and yearly reports",
      ],
    },
    {
      icon: "fa-book-open",
      title: "Student Records",
      color: "bg-primary/10 text-primary border-primary/20",
      features: [
        "Complete student profiles",
        "Academic history tracking",
        "Performance analytics",
        "Document management",
        "Health records storage",
        "Parent communication portal",
      ],
    },
    {
      icon: "fa-bell",
      title: "Notifications & Alerts",
      color: "bg-destructive/10 text-destructive border-destructive/20",
      features: [
        "Push notifications",
        "Email and SMS alerts",
        "Event reminders",
        "Emergency broadcasts",
        "Custom notification rules",
        "Multi-channel delivery",
      ],
    },
    {
      icon: "fa-calendar-alt",
      title: "Timetable & Classes",
      color: "bg-info/10 text-info border-info/20",
      features: [
        "Smart class scheduling",
        "Teacher assignment",
        "Room allocation",
        "Conflict detection",
        "Exam scheduling",
        "Substitution management",
      ],
    },
    {
      icon: "fa-chart-line",
      title: "Exams & Grades",
      color: "bg-accent text-accent-foreground border-accent",
      features: [
        "Online exam creation",
        "Automatic grading",
        "Grade book management",
        "Report card generation",
        "Performance analytics",
        "Parent grade access",
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
            Powerful <span className="text-gradient">Features</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Discover all the tools and modules that make EduManage the complete school management solution.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden card-hover"
              >
                <div className={`p-6 ${module.color.split(" ")[0]} border-b ${module.color.split(" ")[2]}`}>
                  <div className="flex items-center gap-4">
                    <div className={`feature-icon ${module.color}`}>
                      <i className={`fas ${module.icon}`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {module.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm">
                        <i className="fas fa-check text-success"></i>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Seamless Integrations</h2>
              <p className="text-muted-foreground mb-8">
                EduManage connects with the tools you already use, making it easy to get started without disrupting your workflow.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Google Workspace", "Microsoft 365", "Zoom", "Stripe", "PayPal", "Twilio"].map((integration, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
                    <i className="fas fa-plug text-primary"></i>
                    <span className="font-medium text-foreground">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <div className="text-center">
                <i className="fas fa-shield-alt text-6xl text-primary mb-4"></i>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Enterprise Security</h3>
                <p className="text-muted-foreground mb-6">
                  Your data is protected with industry-leading security measures including encryption, regular backups, and compliance with education data regulations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">SSL Encrypted</span>
                  <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm">GDPR Compliant</span>
                  <span className="px-3 py-1 bg-info/10 text-info rounded-full text-sm">Daily Backups</span>
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
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Try all features free for 30 days. No credit card required.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 text-base px-8">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
