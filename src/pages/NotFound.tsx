import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NotFound = () => {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
            <i className="fas fa-exclamation-triangle text-primary-foreground text-5xl"></i>
          </div>
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="btn-primary">
              <i className="fas fa-home mr-2"></i>
              Go Home
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline">
              <i className="fas fa-tachometer-alt mr-2"></i>
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
