import { Button } from "@/components/ui/button";

const StudentProfile = () => {
    // Mock Student Data
    const student = {
        name: "Alex Morgan",
        rollNo: "2024001",
        class: "Grade 10-A",
        dob: "2008-05-15",
        gender: "Male",
        bloodGroup: "O+",
        email: "alex.morgan@school.edu",
        phone: "+1 234-567-8901",
        address: "123 Maple Street, Springfield, IL 62704",
        guardian: {
            name: "Sarah Morgan",
            relation: "Mother",
            occupation: "Doctor",
            phone: "+1 234-567-8900",
            email: "sarah.morgan@email.com",
        },
        academic: {
            admissionDate: "2020-08-01",
            previousSchool: "Springfield Elementary",
            attendance: "95%",
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">My Profile</h2>
                    <p className="text-muted-foreground">Manage your personal information</p>
                </div>
                <Button>
                    <i className="fas fa-edit mr-2"></i>
                    Edit Profile
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                    <div className="bg-card rounded-xl border border-border p-6 text-center h-full">
                        <div className="w-32 h-32 mx-auto gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground mb-4">
                            {student.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{student.name}</h3>
                        <p className="text-muted-foreground mb-4">{student.class} | {student.rollNo}</p>

                        <div className="flex justify-center gap-2 mb-6">
                            <span className="px-3 py-1 bg-success/10 text-success rounded-full text-xs font-medium">Active</span>
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Student</span>
                        </div>

                        <div className="space-y-4 text-left pt-4 border-t border-border">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Admission Date</span>
                                <span className="font-medium">{student.academic.admissionDate}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Attendance</span>
                                <span className="font-medium text-success">{student.academic.attendance}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-card rounded-xl border border-border p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <i className="fas fa-user text-primary"></i>
                            Personal Information
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Date of Birth</label>
                                <p className="text-foreground font-medium">{student.dob}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Gender</label>
                                <p className="text-foreground font-medium">{student.gender}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Blood Group</label>
                                <p className="text-foreground font-medium">{student.bloodGroup}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Previous School</label>
                                <p className="text-foreground font-medium">{student.academic.previousSchool}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-card rounded-xl border border-border p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <i className="fas fa-address-book text-primary"></i>
                            Contact Information
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Email Address</label>
                                <p className="text-foreground font-medium">{student.email}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Phone Number</label>
                                <p className="text-foreground font-medium">{student.phone}</p>
                            </div>
                            <div className="col-span-1 sm:col-span-2 space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Residential Address</label>
                                <p className="text-foreground font-medium">{student.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Guardian Information */}
                    <div className="bg-card rounded-xl border border-border p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <i className="fas fa-users text-primary"></i>
                            Guardian Information
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Guardian Name</label>
                                <p className="text-foreground font-medium">{student.guardian.name}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Relationship</label>
                                <p className="text-foreground font-medium">{student.guardian.relation}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Occupation</label>
                                <p className="text-foreground font-medium">{student.guardian.occupation}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-muted-foreground uppercase font-medium">Guardian Phone</label>
                                <p className="text-foreground font-medium">{student.guardian.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
