import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SidebarItem } from "@/config/navigation";
import { useAuth } from "@/context/auth-provider";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface DashboardLayoutProps {
  children: React.ReactNode;
  navItems: SidebarItem[];
}

const DashboardLayout = ({ children, navItems }: { children: React.ReactNode; navItems: SidebarItem[] }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getPageTitle = () => {
    const currentItem = navItems.find(item => item.path === location.pathname);
    return currentItem?.label || "Dashboard";
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-card border-r border-border transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-border">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-bolt text-primary-foreground"></i>
              </div>
              {sidebarOpen && <span className="text-xl font-bold text-gradient">NEXA</span>}
            </Link>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`w-full sidebar-item ${location.pathname === item.path ? "sidebar-item-active" : ""
                  }`}
              >
                <i className={`fas ${item.icon} text-lg w-6`}></i>
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>

          {/* User & Logout */}
          <div className="p-4 border-t border-border">
            <div className={`flex items-center gap-3 mb-4 ${sidebarOpen ? "" : "justify-center"}`}>
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold flex-shrink-0">
                {user?.name.substring(0, 2).toUpperCase()}
              </div>
              {sidebarOpen && (
                <div className="overflow-hidden">
                  <p className="font-medium text-foreground text-sm truncate">{user?.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                </div>
              )}
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleLogout}
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
              <h1 className="text-xl font-semibold text-foreground">{getPageTitle()}</h1>
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

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
