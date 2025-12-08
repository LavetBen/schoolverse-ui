import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/auth-provider";

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const { isAuthenticated, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        } else if (allowedRoles && user && !allowedRoles.includes(user.role)) {
            // Redirect to their appropriate dashboard if they try to access unauthorized route
            if (user.role === "admin") navigate("/admin");
            else if (user.role === "accountant") navigate("/accountant");
            else if (user.role === "teacher") navigate("/teacher");
            else if (user.role === "student") navigate("/student");
        }
    }, [isAuthenticated, user, navigate, allowedRoles]);

    if (!isAuthenticated) return null; // Or a loading spinner

    return <>{children}</>;
};

export default ProtectedRoute;
