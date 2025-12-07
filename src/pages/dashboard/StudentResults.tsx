import { Button } from "@/components/ui/button";

const StudentResults = () => {
    const results = [
        { id: 1, subject: "Mathematics", marks: 95, total: 100, grade: "A+", points: 4.0 },
        { id: 2, subject: "Physics", marks: 88, total: 100, grade: "A", points: 3.8 },
        { id: 3, subject: "Chemistry", marks: 92, total: 100, grade: "A+", points: 4.0 },
        { id: 4, subject: "English", marks: 85, total: 100, grade: "A", points: 3.7 },
        { id: 5, subject: "Computer Science", marks: 98, total: 100, grade: "A+", points: 4.0 },
        { id: 6, subject: "History", marks: 78, total: 100, grade: "B+", points: 3.3 },
    ];

    const totalMarks = results.reduce((sum, item) => sum + item.marks, 0);
    const maxMarks = results.reduce((sum, item) => sum + item.total, 0);
    const percentage = ((totalMarks / maxMarks) * 100).toFixed(2);
    const gpa = (results.reduce((sum, item) => sum + item.points, 0) / results.length).toFixed(2);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">My Results</h2>
                    <p className="text-muted-foreground">Term 1 - Academic Year 2024-2025</p>
                </div>
                <Button variant="outline">
                    <i className="fas fa-download mr-2"></i>
                    Download Report
                </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-card rounded-xl border border-border p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <i className="fas fa-chart-line text-primary"></i>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-foreground">{percentage}%</p>
                            <p className="text-sm text-muted-foreground">Overall Percentage</p>
                        </div>
                    </div>
                </div>
                <div className="bg-card rounded-xl border border-border p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                            <i className="fas fa-star text-success"></i>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-foreground">{gpa}</p>
                            <p className="text-sm text-muted-foreground">GPA</p>
                        </div>
                    </div>
                </div>
                <div className="bg-card rounded-xl border border-border p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
                            <i className="fas fa-award text-info"></i>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-foreground">Pass</p>
                            <p className="text-sm text-muted-foreground">Final Result</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Table */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-foreground">Subject Wise Breakdown</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/50">
                            <tr>
                                <th className="text-left p-4 font-medium text-muted-foreground">Subject</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">Marks Obtained</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">Total Marks</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">Grade</th>
                                <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result) => (
                                <tr key={result.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                                    <td className="p-4 font-medium text-foreground">{result.subject}</td>
                                    <td className="p-4 text-muted-foreground">{result.marks}</td>
                                    <td className="p-4 text-muted-foreground">{result.total}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${result.grade.startsWith("A")
                                                ? "bg-success/10 text-success"
                                                : result.grade.startsWith("B")
                                                    ? "bg-info/10 text-info"
                                                    : "bg-warning/10 text-warning"
                                            }`}>
                                            {result.grade}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm text-success font-medium">
                                            <i className="fas fa-check-circle mr-1"></i>
                                            Passed
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentResults;
