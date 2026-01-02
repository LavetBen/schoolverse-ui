import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { AddStaffForm } from "@/components/dashboard/AddStaffForm";
import { EditStaffForm } from "@/components/dashboard/EditStaffForm";
import { toast } from "sonner";
import { staffService, Staff as StaffType } from "@/services/staff.service";

const Staff = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editingStaff, setEditingStaff] = useState<StaffType | null>(null);
    const [staffList, setStaffList] = useState<StaffType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {
        try {
            const data = await staffService.getAllStaff();
            setStaffList(data);
        } catch (error) {
            console.error("Failed to fetch staff", error);
            toast.error("Failed to fetch staff list");
        }
    };

    const filteredStaff = staffList.filter(staff =>
        (staff.firstName?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
        (staff.lastName?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
        (staff.role?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
        (staff.department?.toLowerCase() || "").includes(searchTerm.toLowerCase())
    );

    const handleAddStaff = async (data: any) => {
        setIsLoading(true);
        try {
            await staffService.addStaff(data);
            toast.success("Staff added successfully");
            setIsAddOpen(false);
            fetchStaff();
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to add staff");
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditStaff = async (data: any) => {
        if (!editingStaff) return;
        setIsLoading(true);
        try {
            await staffService.updateStaff(editingStaff.id, data);
            toast.success("Staff updated successfully");
            setEditingStaff(null);
            fetchStaff();
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to update staff");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteStaff = async (id: number) => {
        if (window.confirm("Are you sure you want to delete this staff member?")) {
            try {
                // await staffService.deleteStaff(id); // Uncomment when delete API is active
                // For now, optimistically update UI or show toast
                // toast.info("Delete functionality requires backend implementation");

                // Assuming endpoint exists or just for demo:
                await staffService.deleteStaff(id);
                toast.success("Staff deleted");
                fetchStaff();
            } catch (error) {
                toast.error("Failed to delete staff");
            }
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">Staff Members</h2>
                    <p className="text-muted-foreground">Manage support staff and other employees</p>
                </div>

                <Dialog open={!!editingStaff} onOpenChange={(open) => !open && setEditingStaff(null)}>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle>Edit Staff Member</DialogTitle>
                        </DialogHeader>
                        {editingStaff && (
                            <EditStaffForm
                                initialData={editingStaff}
                                onSubmit={handleEditStaff}
                                onCancel={() => setEditingStaff(null)}
                                isLoading={isLoading}
                            />
                        )}
                    </DialogContent>
                </Dialog>

                <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                    <DialogTrigger asChild>
                        <Button className="gradient-primary text-primary-foreground">
                            <i className="fas fa-plus mr-2"></i>
                            Add Staff
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle>Add New Staff</DialogTitle>
                        </DialogHeader>
                        <AddStaffForm onSubmit={handleAddStaff} onCancel={() => setIsAddOpen(false)} isLoading={isLoading} />
                    </DialogContent>
                </Dialog>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
                    <Input
                        placeholder="Search by name, role, or department..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Button variant="outline">
                    <i className="fas fa-filter mr-2"></i>
                    Filter
                </Button>
            </div>

            {/* Staff Grid/Table */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/50">
                            <tr>
                                <th className="text-left p-4 font-medium text-muted-foreground">Name</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">Role</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">Department</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">Phone</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">Email</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStaff.map((staff) => (
                                <tr key={staff.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                                    <td className="p-4">
                                        <span className="font-medium text-foreground">{staff.firstName} {staff.lastName}</span>
                                    </td>
                                    <td className="p-4 text-muted-foreground">{staff.role}</td>
                                    <td className="p-4 text-muted-foreground">{staff.department}</td>
                                    <td className="p-4 text-muted-foreground">{staff.phone}</td>
                                    <td className="p-4 text-muted-foreground">{staff.email}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-primary transition-colors"
                                                onClick={() => setEditingStaff(staff)}
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button
                                                className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-destructive transition-colors"
                                                onClick={() => handleDeleteStaff(staff.id)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredStaff.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="p-8 text-center text-muted-foreground">
                                        No staff members found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Staff;
