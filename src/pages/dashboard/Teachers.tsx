import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddTeacherForm } from "@/components/dashboard/AddTeacherForm";
import { EditTeacherForm } from "@/components/dashboard/EditTeacherForm";
import { toast } from "sonner";

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<any>(null);
  const [viewingTeacher, setViewingTeacher] = useState<any>(null);

  const [teachers, setTeachers] = useState([
    { id: 1, name: "Dr. John Williams", subject: "Mathematics", department: "Science", email: "john@school.edu", phone: "+1 234-567-8901", experience: "12 years", avatar: "JW" },
    { id: 2, name: "Ms. Sarah Parker", subject: "English", department: "Languages", email: "sarah@school.edu", phone: "+1 234-567-8902", experience: "8 years", avatar: "SP" },
    { id: 3, name: "Mr. Michael Brown", subject: "Physics", department: "Science", email: "michael@school.edu", phone: "+1 234-567-8903", experience: "15 years", avatar: "MB" },
    { id: 4, name: "Mrs. Emily Davis", subject: "Chemistry", department: "Science", email: "emily@school.edu", phone: "+1 234-567-8904", experience: "10 years", avatar: "ED" },
    { id: 5, name: "Dr. Robert Taylor", subject: "Biology", department: "Science", email: "robert@school.edu", phone: "+1 234-567-8905", experience: "18 years", avatar: "RT" },
    { id: 6, name: "Ms. Jennifer Lee", subject: "History", department: "Humanities", email: "jennifer@school.edu", phone: "+1 234-567-8906", experience: "6 years", avatar: "JL" },
  ]);

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTeacher = (data: any) => {
    const newTeacher = {
      id: teachers.length + 1,
      ...data,
      avatar: data.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().substring(0, 2),
    };
    setTeachers([newTeacher, ...teachers]);
    setIsAddOpen(false);
    toast.success("Teacher added successfully");
  };

  const handleEditTeacher = (data: any) => {
    setTeachers(teachers.map(t => t.id === editingTeacher.id ? { ...t, ...data } : t));
    setEditingTeacher(null);
    toast.success("Teacher updated successfully");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Teachers</h2>
          <p className="text-muted-foreground">Manage teaching staff records</p>
        </div>

        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary text-primary-foreground">
              <i className="fas fa-plus mr-2"></i>
              Add Teacher
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Teacher</DialogTitle>
            </DialogHeader>
            <AddTeacherForm onSubmit={handleAddTeacher} onCancel={() => setIsAddOpen(false)} />
          </DialogContent>
        </Dialog>

        {/* Edit Dialog */}
        <Dialog open={!!editingTeacher} onOpenChange={(open) => !open && setEditingTeacher(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Teacher</DialogTitle>
            </DialogHeader>
            {editingTeacher && (
              <EditTeacherForm
                initialData={editingTeacher}
                onSubmit={handleEditTeacher}
                onCancel={() => setEditingTeacher(null)}
              />
            )}
          </DialogContent>
        </Dialog>

        {/* View Dialog */}
        <Dialog open={!!viewingTeacher} onOpenChange={(open) => !open && setViewingTeacher(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Teacher Details</DialogTitle>
            </DialogHeader>
            {viewingTeacher && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b pb-4">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {viewingTeacher.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{viewingTeacher.name}</h3>
                    <p className="text-muted-foreground">{viewingTeacher.subject}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Department</p>
                    <p className="font-medium">{viewingTeacher.department}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">{viewingTeacher.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{viewingTeacher.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{viewingTeacher.phone}</p>
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
            placeholder="Search by name, subject, or department..."
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

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <i className="fas fa-chalkboard-teacher text-primary"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{teachers.length}</p>
              <p className="text-sm text-muted-foreground">Total Teachers</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <i className="fas fa-flask text-success"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">32</p>
              <p className="text-sm text-muted-foreground">Science Dept</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
              <i className="fas fa-book text-warning"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">28</p>
              <p className="text-sm text-muted-foreground">Languages Dept</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
              <i className="fas fa-landmark text-info"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">27</p>
              <p className="text-sm text-muted-foreground">Humanities Dept</p>
            </div>
          </div>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <div key={teacher.id} className="bg-card rounded-xl border border-border p-6 card-hover">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {teacher.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{teacher.name}</h3>
                  <p className="text-sm text-primary">{teacher.subject}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-muted rounded-lg text-muted-foreground">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <i className="fas fa-building text-muted-foreground w-5"></i>
                <span className="text-muted-foreground">{teacher.department}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <i className="fas fa-envelope text-muted-foreground w-5"></i>
                <span className="text-muted-foreground">{teacher.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <i className="fas fa-phone text-muted-foreground w-5"></i>
                <span className="text-muted-foreground">{teacher.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <i className="fas fa-briefcase text-muted-foreground w-5"></i>
                <span className="text-muted-foreground">{teacher.experience}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => setViewingTeacher(teacher)}
              >
                <i className="fas fa-eye mr-2"></i>
                View
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => setEditingTeacher(teacher)}
              >
                <i className="fas fa-edit mr-2"></i>
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
