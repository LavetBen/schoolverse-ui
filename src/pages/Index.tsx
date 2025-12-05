import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import heroBg from "@/assets/hero-bg.jpg";

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
      <section 
        className="relative min-h-[90vh] flex items-center pt-16"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 animate-fade-in">
              <i className="fas fa-graduation-cap text-primary-foreground"></i>
              <span className="text-sm font-medium text-primary-foreground">Trusted by 500+ Schools</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
              Modern School
              <span className="block text-primary">Management System</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Manage attendance, finance, records, and student performance in one powerful platform. Streamline your school operations today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link to="/signup">
                <Button size="lg" className="btn-primary text-base px-8 py-6">
                  <i className="fas fa-rocket mr-2"></i>
                  Get Started Free
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6">
                  <i className="fas fa-play-circle mr-2"></i>
                  Watch Demo
                </Button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-center sm:text-left">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">100K+</p>
                <p className="text-sm text-primary-foreground/70">Students Managed</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">15K+</p>
                <p className="text-sm text-primary-foreground/70">Active Teachers</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">99.9%</p>
                <p className="text-sm text-primary-foreground/70">Uptime</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-primary-foreground/50 text-2xl"></i>
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
