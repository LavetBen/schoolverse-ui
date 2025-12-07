import { Button } from "@/components/ui/button";

const StudentFees = () => {
    const feeStructure = [
        { id: 1, type: "Tuition Fee", amount: 5000, dueDate: "2024-01-15", status: "Paid" },
        { id: 2, type: "Library Fee", amount: 500, dueDate: "2024-01-15", status: "Paid" },
        { id: 3, type: "Lab Fee", amount: 1000, dueDate: "2024-01-15", status: "Paid" },
        { id: 4, type: "Transport Fee", amount: 2000, dueDate: "2024-02-15", status: "Pending" },
        { id: 5, type: "Extra Curricular", amount: 300, dueDate: "2024-02-15", status: "Pending" },
    ];

    const paymentHistory = [
        { id: 1, date: "2024-01-10", receipt: "RCP-001", amount: 6500, mode: "Online Transfer" },
        { id: 2, date: "2023-12-05", receipt: "RCP-002", amount: 500, mode: "Cash" },
    ];

    const totalDue = feeStructure
        .filter(fee => fee.status === "Pending")
        .reduce((sum, fee) => sum + fee.amount, 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">Fees & Payments</h2>
                    <p className="text-muted-foreground">Manage your fee payments and history</p>
                </div>
                <Button className="gradient-primary text-primary-foreground">
                    <i className="fas fa-credit-card mr-2"></i>
                    Pay Online
                </Button>
            </div>

            {/* Due Amount Card */}
            <div className="bg-card rounded-xl border border-destructive/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                        <i className="fas fa-exclamation-circle text-destructive text-xl"></i>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Total Pending Amount</p>
                        <h3 className="text-3xl font-bold text-destructive">${totalDue.toLocaleString()}</h3>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm text-muted-foreground">Next Due Date</p>
                    <p className="font-semibold text-foreground">Feb 15, 2024</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Fee Structure */}
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                    <div className="p-4 border-b border-border">
                        <h3 className="font-semibold text-foreground">Current Fee Structure</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-muted/50">
                                <tr>
                                    <th className="text-left p-4 font-medium text-muted-foreground">Type</th>
                                    <th className="text-left p-4 font-medium text-muted-foreground">Amount</th>
                                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feeStructure.map((fee) => (
                                    <tr key={fee.id} className="border-t border-border">
                                        <td className="p-4 font-medium text-foreground">{fee.type}</td>
                                        <td className="p-4 text-muted-foreground">${fee.amount}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${fee.status === "Paid"
                                                    ? "bg-success/10 text-success"
                                                    : "bg-warning/10 text-warning"
                                                }`}>
                                                {fee.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Payment History */}
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                    <div className="p-4 border-b border-border">
                        <h3 className="font-semibold text-foreground">Recent Payments</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-muted/50">
                                <tr>
                                    <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
                                    <th className="text-left p-4 font-medium text-muted-foreground">Receipt</th>
                                    <th className="text-left p-4 font-medium text-muted-foreground">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentHistory.map((payment) => (
                                    <tr key={payment.id} className="border-t border-border">
                                        <td className="p-4 text-muted-foreground">{payment.date}</td>
                                        <td className="p-4 text-primary font-medium">{payment.receipt}</td>
                                        <td className="p-4 text-foreground font-medium">${payment.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentFees;
