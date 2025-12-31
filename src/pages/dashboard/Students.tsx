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
import { AddStudentForm } from "@/components/dashboard/AddStudentForm";
import { EditStudentForm } from "@/components/dashboard/EditStudentForm";
import { toast } from "sonner";
import { studentService } from "@/services/student.service";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<any>(null);
  const [viewingStudent, setViewingStudent] = useState<any>(null);

  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await studentService.getAllStudents();
      const enrichedData = data.map((student: any) => ({
        ...student,
        rollNo: student.rollNo || "N/A",
        class: student.class || "N/A",
        status: student.status || "Active",
        avatar: (student.firstName?.[0] || "") + (student.lastName?.[0] || "") || "ST",
        name: `${student.firstName || ""} ${student.lastName || ""}`.trim() || student.username
      }));
      setStudents(enrichedData);
    } catch (error) {
      console.error("Failed to fetch students", error);
      toast.error("Failed to fetch students list");
    }
  };

  const filteredStudents = students.filter(student =>
    (student.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    (student.class?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    (student.rollNo?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  );

  const [isLoading, setIsLoading] = useState(false);

  // ... (keep existing state)

  const handleAddStudent = async (data: any) => {
    setIsLoading(true);
    try {
      await studentService.addStudent(data);
      toast.success("Student added successfully");
      setIsAddOpen(false);
      fetchStudents();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to add student");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditStudent = (data: any) => {
    setStudents(students.map(s => s.id === editingStudent.id ? { ...s, ...data } : s));
    setEditingStudent(null);
    toast.success("Student updated successfully");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Students</h2>
          <p className="text-muted-foreground">Manage all student records</p>
        </div>

        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary text-primary-foreground">
              <i className="fas fa-plus mr-2"></i>
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
            </DialogHeader>
            <AddStudentForm onSubmit={handleAddStudent} onCancel={() => setIsAddOpen(false)} isLoading={isLoading} />
          </DialogContent>
        </Dialog>

        {/* Edit Dialog */}
        <Dialog open={!!editingStudent} onOpenChange={(open) => !open && setEditingStudent(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Student</DialogTitle>
            </DialogHeader>
            {editingStudent && (
              <EditStudentForm
                initialData={editingStudent}
                onSubmit={handleEditStudent}
                onCancel={() => setEditingStudent(null)}
              />
            )}
          </DialogContent>
        </Dialog>

        {/* View Dialog */}
        <Dialog open={!!viewingStudent} onOpenChange={(open) => !open && setViewingStudent(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Student Details</DialogTitle>
            </DialogHeader>
            {viewingStudent && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {viewingStudent.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{viewingStudent.name}</h3>
                    <p className="text-muted-foreground">{viewingStudent.rollNo}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Class</p>
                    <p className="font-medium">{viewingStudent.class}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${viewingStudent.status === "Active" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                      {viewingStudent.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{viewingStudent.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{viewingStudent.phone}</p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
          <Input
            placeholder="Search by name, class, or roll number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <i className="fas fa-filter mr-2"></i>
          Filter
        </Button>
        <Button variant="outline">
          <i className="fas fa-download mr-2"></i>
          Export
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <i className="fas fa-users text-primary"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{students.length}</p>
              <p className="text-sm text-muted-foreground">Total Students</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <i className="fas fa-user-check text-success"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{students.filter(s => s.status === 'Active').length}</p>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
              <i className="fas fa-user-clock text-warning"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">42</p>
              <p className="text-sm text-muted-foreground">New This Month</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
              <i className="fas fa-graduation-cap text-info"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Graduated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium text-muted-foreground">Student</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Roll No</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Class</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Email</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Phone</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                        {student.avatar}
                      </div>
                      <span className="font-medium text-foreground">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{student.rollNo}</td>
                  <td className="p-4 text-muted-foreground">{student.class}</td>
                  <td className="p-4 text-muted-foreground">{student.email}</td>
                  <td className="p-4 text-muted-foreground">{student.phone}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${student.status === "Active"
                      ? "bg-success/10 text-success"
                      : "bg-destructive/10 text-destructive"
                      }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setViewingStudent(student)}
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button
                        className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setEditingStudent(student)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-destructive transition-colors"
                        onClick={() => {
                          if (window.confirm("Are you sure you want to delete this student?")) {
                            setStudents(students.filter(s => s.id !== student.id));
                            toast.success("Student deleted");
                          }
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-border">
          <p className="text-sm text-muted-foreground">Showing 1-{filteredStudents.length} of {students.length} students</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <i className="fas fa-chevron-left"></i>
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">
              <i className="fas fa-chevron-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
