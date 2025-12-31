import { createContext, useContext, useEffect, useState } from "react";
import { authService, RegisterRequest } from "@/services/auth.service";

type UserRole = "admin" | "accountant" | "teacher" | "student";

export interface User {
    name: string;
    email: string;
    role: UserRole;
    token?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    register: (data: RegisterRequest) => Promise<string>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        // Check for stored user on mount
        const storedUser = localStorage.getItem("schoolverse_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const data = await authService.login(username, password);
            // Map backend response to User interface
            // Backend returns roles as string[] but frontend expects UserRole (single string)
            // We'll take the first role for now or map accordingly.
            // Assumption: User has one primary role for the UI context
            let primaryRole: UserRole = "student";
            if (data.role) {
                const roleStr = data.role.toLowerCase();
                if (roleStr === "admin" || roleStr === "role_admin") primaryRole = "admin";
                else if (roleStr === "accountant" || roleStr === "role_accountant") primaryRole = "accountant";
                else if (roleStr === "teacher" || roleStr === "role_teacher") primaryRole = "teacher";
                else if (roleStr === "student" || roleStr === "role_student") primaryRole = "student";
            }

            const newUser: User = {
                name: data.username,
                email: data.email,
                role: primaryRole,
                token: data.token
            };

            setUser(newUser);
            setIsAuthenticated(true);
            localStorage.setItem("schoolverse_user", JSON.stringify(newUser));
        } catch (error) {
            console.error("Login failed", error);
            throw error;
        }
    };

    const register = async (registerData: RegisterRequest) => {
        return authService.register(registerData);
    }

    const logout = () => {
        authService.logout();
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
