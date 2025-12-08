import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/auth-provider";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();

  const handleLogin = async (path: string) => {
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      login(path);
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: `You have successfully logged in as ${path.split("/")[1]}.`,
      });
      navigate(path);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin("/admin"); // Default to admin if form submitted directly
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
            <i className="fas fa-bolt text-primary-foreground text-xl"></i>
          </div>
          <span className="text-2xl font-bold text-foreground">NEXA</span>
        </Link>

        {/* Login Card */}
        <div className="bg-card rounded-2xl border border-border shadow-xl p-8 animate-scale-in">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input-field pl-11"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input-field pl-11 pr-11"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                <span className="text-sm text-muted-foreground">Remember me</span>
              </label>
              <Link to="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            {/* Role Selection (Simulation) */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-foreground">
                Select Role to Simulate Login
              </label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  onClick={() => handleLogin("/admin")}
                  className="w-full"
                  variant="outline"
                  disabled={isLoading}
                >
                  <i className="fas fa-user-shield mr-2"></i>
                  Admin
                </Button>
                <Button
                  type="button"
                  onClick={() => handleLogin("/accountant")}
                  className="w-full"
                  variant="outline"
                  disabled={isLoading}
                >
                  <i className="fas fa-calculator mr-2"></i>
                  Accountant
                </Button>
                <Button
                  type="button"
                  onClick={() => handleLogin("/teacher")}
                  className="w-full"
                  variant="outline"
                  disabled={isLoading}
                >
                  <i className="fas fa-chalkboard-teacher mr-2"></i>
                  Teacher
                </Button>
                <Button
                  type="button"
                  onClick={() => handleLogin("/student")}
                  className="w-full"
                  variant="outline"
                  disabled={isLoading}
                >
                  <i className="fas fa-user-graduate mr-2"></i>
                  Student
                </Button>
              </div>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-sm text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <i className="fab fa-google mr-2 text-destructive"></i>
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <i className="fab fa-microsoft mr-2 text-primary"></i>
              Microsoft
            </Button>
          </div>

          {/* Signup Link */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
