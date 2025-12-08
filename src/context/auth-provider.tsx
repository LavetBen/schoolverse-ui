import { createContext, useContext, useEffect, useState } from "react";

type UserRole = "admin" | "accountant" | "teacher" | "student";

interface User {
    name: string;
    email: string;
    role: UserRole;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (path: string) => void;
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

    const login = (path: string) => {
        // Determine details based on path/simulation
        let role: UserRole = "student";
        let name = "Student User";

        if (path.includes("admin")) {
            role = "admin";
            name = "Admin User";
        } else if (path.includes("accountant")) {
            role = "accountant";
            name = "Accountant User";
        } else if (path.includes("teacher")) {
            role = "teacher";
            name = "Teacher User";
        }

        const newUser: User = {
            name,
            email: `${role}@school.edu`,
            role,
        };

        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem("schoolverse_user", JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("schoolverse_user");
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
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
