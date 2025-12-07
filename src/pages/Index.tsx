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
      description: "Track fees, generate invoices, and manage all financial transactions with powerful analytics.",
      color: "bg-warning/10 text-warning hover:bg-warning hover:text-warning-foreground",
    },
    {
      icon: "fa-clock",
      title: "Attendance Tracking",
      description: "Digital attendance system with real-time reports and automated parent notifications.",
      color: "bg-success/10 text-success hover:bg-success hover:text-success-foreground",
    },
    {
      icon: "fa-book-open",
      title: "Student Records",
      description: "Comprehensive student profiles with academic history and performance analytics.",
      color: "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
    },
    {
      icon: "fa-calendar-alt",
      title: "Smart Scheduling",
      description: "AI-powered scheduling for classes, exams, and events with conflict detection.",
      color: "bg-info/10 text-info hover:bg-info hover:text-info-foreground",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Principal, Lincoln High School",
      content: "NEXA has transformed how we manage our school. The intuitive interface and powerful features have saved us countless hours.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Administrator, Riverside Academy",
      content: "The best investment we've made for our school. Our teachers and parents love how seamless everything works.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, Greenwood Schools",
      content: "Exceptional platform with outstanding support. NEXA truly understands what modern schools need.",
      avatar: "ER",
    },
  ];

  const stats = [
    { value: "500+", label: "Schools", icon: "fa-school" },
    { value: "100K+", label: "Students", icon: "fa-user-graduate" },
    { value: "15K+", label: "Teachers", icon: "fa-chalkboard-teacher" },
    { value: "99.9%", label: "Uptime", icon: "fa-shield-alt" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-info/20 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 animate-fade-in">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-foreground">Trusted by 500+ Schools Worldwide</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in">
                The Future of
                <span className="block text-gradient">School Management</span>
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Transform your institution with NEXA — the all-in-one platform for attendance, finance, records, and performance management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Link to="/signup">
                  <Button size="lg" className="btn-primary text-base px-8 py-6 rounded-full group">
                    Start Free Trial
                    <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full border-2 group">
                    <i className="fas fa-play-circle mr-2"></i>
                    Watch Demo
                  </Button>
                </Link>
              </div>
              
              {/* Trust Badges */}
              <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex -space-x-3">
                  {['SJ', 'MC', 'ER', 'JD'].map((initials, i) => (
                    <div key={i} className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground text-sm font-semibold border-2 border-background">
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">4.9/5 from 2,000+ reviews</p>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="glass rounded-3xl p-6 shadow-glow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span className="ml-auto text-sm text-muted-foreground">NEXA Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-accent/50 rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-1">Total Students</p>
                      <p className="text-2xl font-bold text-foreground">12,847</p>
                      <p className="text-xs text-success mt-1"><i className="fas fa-arrow-up mr-1"></i>12% this month</p>
                    </div>
                    <div className="bg-accent/50 rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-1">Attendance Rate</p>
                      <p className="text-2xl font-bold text-foreground">94.2%</p>
                      <p className="text-xs text-success mt-1"><i className="fas fa-arrow-up mr-1"></i>3% this week</p>
                    </div>
                  </div>
                  <div className="bg-accent/50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-sm font-medium text-foreground">Weekly Performance</p>
                      <span className="text-xs text-muted-foreground">Last 7 days</span>
                    </div>
                    <div className="flex items-end gap-2 h-24">
                      {[60, 80, 45, 90, 70, 85, 95].map((h, i) => (
                        <div key={i} className="flex-1 gradient-hero rounded-t-md" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-card floating-element">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                      <i className="fas fa-check text-success"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Fees Collected</p>
                      <p className="text-xs text-muted-foreground">$45,200 today</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-6 glass rounded-2xl p-4 shadow-card floating-element" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <i className="fas fa-bell text-primary"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">New Notification</p>
                      <p className="text-xs text-muted-foreground">Parent meeting at 3PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gradient-mesh opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center card-hover">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <i className={`fas ${stat.icon} text-primary text-xl`}></i>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Powerful Features
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Everything You Need to Excel</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed to streamline every aspect of school management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-8 card-hover cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`feature-icon ${feature.color} mb-6 group-hover:scale-110`}>
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                <div className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Loved by Educators</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              See what school administrators are saying about NEXA.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 card-hover"
              >
                <div className="flex items-center gap-1 text-warning mb-6">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-foreground text-base leading-relaxed mb-8">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of schools already using NEXA to streamline their operations and enhance learning outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 text-base px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all">
                Start Free Trial
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base px-10 py-6 rounded-full">
                <i className="fas fa-calendar-alt mr-2"></i>
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
