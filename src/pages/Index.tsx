import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Index = () => {
  const features = [
    {
      icon: "fa-coins",
      title: "Finance Management",
      description: "Track fees, generate invoices, and manage all financial transactions with ease.",
      color: "bg-warning/10 text-warning",
    },
    {
      icon: "fa-clock",
      title: "Attendance Tracking",
      description: "Digital attendance system with real-time reports and parent notifications.",
      color: "bg-success/10 text-success",
    },
    {
      icon: "fa-book-open",
      title: "Student Records",
      description: "Comprehensive student profiles with academic history and performance analytics.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: "fa-calendar-alt",
      title: "Timetable & Classes",
      description: "Smart scheduling for classes, exams, and events with conflict detection.",
      color: "bg-info/10 text-info",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Principal, Lincoln High School",
      content: "EduManage has transformed how we manage our school. The attendance and finance modules alone have saved us countless hours.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Administrator, Riverside Academy",
      content: "The intuitive interface made adoption seamless. Our teachers love how easy it is to track student progress.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, Greenwood Schools",
      content: "Best school management system we've used. The support team is incredibly responsive and helpful.",
      avatar: "ER",
    },
  ];

  const stats = [
    { value: "500+", label: "Schools" },
    { value: "100K+", label: "Students" },
    { value: "15K+", label: "Teachers" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
                Modern School
                <span className="text-gradient block">Management System</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Manage attendance, finance, records, and student performance in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Link to="/signup">
                  <Button size="lg" className="btn-primary text-base px-8">
                    <i className="fas fa-rocket mr-2"></i>
                    Get Started
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button size="lg" variant="outline" className="btn-outline text-base px-8">
                    <i className="fas fa-play mr-2"></i>
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-card rounded-2xl shadow-xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="stat-card">
                      <i className="fas fa-users text-primary text-2xl mb-2"></i>
                      <p className="text-2xl font-bold text-foreground">1,234</p>
                      <p className="text-sm text-muted-foreground">Total Students</p>
                    </div>
                    <div className="stat-card">
                      <i className="fas fa-chalkboard-teacher text-success text-2xl mb-2"></i>
                      <p className="text-2xl font-bold text-foreground">87</p>
                      <p className="text-sm text-muted-foreground">Teachers</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Attendance Rate</span>
                      <span className="text-sm font-bold text-success">94%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full gradient-primary rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 gradient-primary rounded-2xl opacity-20 animate-float"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-success rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Powerful Features</h2>
            <p className="section-subtitle">
              Everything you need to run your school efficiently, all in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`feature-icon ${feature.color} mb-4`}>
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Trusted by Educators</h2>
            <p className="section-subtitle">
              See what school administrators are saying about EduManage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border shadow-card"
              >
                <div className="flex items-center gap-1 text-warning mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-sm"></i>
                  ))}
                </div>
                <p className="text-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of schools already using EduManage to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 text-base px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
