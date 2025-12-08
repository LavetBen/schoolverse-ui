import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const AccountantHome = () => {
    const { toast } = useToast();
    const [taxDialogOpen, setTaxDialogOpen] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isSending, setIsSending] = useState(false);

    // Tax Calculator State
    const [revenueInput, setRevenueInput] = useState("125430");
    const [taxRateInput, setTaxRateInput] = useState("15");

    const revenue = parseFloat(revenueInput) || 0;
    const taxRate = parseFloat(taxRateInput) / 100 || 0;
    const estimatedTax = revenue * taxRate;

    const stats = [
        { icon: "fa-coins", label: "Total Revenue", value: "$125,430", change: "+18%", color: "text-success bg-success/10" },
        { icon: "fa-file-invoice-dollar", label: "Pending Fees", value: "$23,500", change: "-5%", color: "text-warning bg-warning/10" },
        { icon: "fa-money-bill-wave", label: "Monthly Expenses", value: "$12,230", change: "+2%", color: "text-destructive bg-destructive/10" },
        { icon: "fa-receipt", label: "Paid Invoices", value: "1,456", change: "+8%", color: "text-info bg-info/10" },
    ];

    const recentTransactions = [
        { id: "TXN001", student: "Alice Johnson", type: "Tuition Fee", amount: "$1,200", date: "Mar 5, 2024", status: "Completed" },
        { id: "TXN002", student: "Bob Smith", type: "Library Fee", amount: "$50", date: "Mar 4, 2024", status: "Completed" },
        { id: "TXN003", student: "Carol Davis", type: "Sports Fee", amount: "$150", date: "Mar 4, 2024", status: "Pending" },
        { id: "TXN004", student: "David Wilson", type: "Tuition Fee", amount: "$1,200", date: "Mar 3, 2024", status: "Completed" },
    ];

    const handleGenerateReport = () => {
        setIsGenerating(true);
        setTimeout(() => {
            const doc = new jsPDF();

            // Title
            doc.setFontSize(20);
            doc.text("Financial Report", 14, 22);
            doc.setFontSize(11);
            doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);

            // Stats Overview
            doc.setFontSize(14);
            doc.text("Overview", 14, 45);

            const statsData = stats.map(s => [s.label, s.value, s.change]);
            autoTable(doc, {
                startY: 50,
                head: [['Metric', 'Value', 'Change']],
                body: statsData,
            });

            // Recent Transactions
            // @ts-ignore
            const finalY = doc.lastAutoTable.finalY || 50;
            doc.text("Recent Transactions", 14, finalY + 15);

            const txnData = recentTransactions.map(t => [t.id, t.student, t.type, t.amount, t.status]);
            autoTable(doc, {
                startY: finalY + 20,
                head: [['ID', 'Student', 'Type', 'Amount', 'Status']],
                body: txnData,
            });

            doc.save("financial_report.pdf");

            setIsGenerating(false);
            toast({
                title: "Report Generated",
                description: "Financial summary has been downloaded successfully.",
            });
        }, 1000);
    };

    const handleSendReminders = () => {
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            toast({
                title: "Reminders Sent",
                description: "Payment reminders sent to 15 students with pending fees.",
            });
        }, 2000);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">Accountant Overview</h2>
                    <p className="text-muted-foreground">Welcome back, here's your financial summary.</p>
                </div>
                <div className="flex gap-3">
                    <Link to="/accountant/finance">
                        <Button className="gradient-primary text-primary-foreground">
                            <i className="fas fa-plus mr-2"></i>
                            New Invoice
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`feature-icon ${stat.color}`}>
                                <i className={`fas ${stat.icon}`}></i>
                            </div>
                            <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Transactions */}
                <div className="lg:col-span-2 bg-card rounded-xl border border-border">
                    <div className="flex items-center justify-between p-6 border-b border-border">
                        <h3 className="font-semibold text-foreground">Recent Transactions</h3>
                        <Link to="/accountant/finance">
                            <Button variant="ghost" size="sm" className="text-primary">
                                View All
                            </Button>
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-muted/50">
                                <tr>
                                    <th className="text-left p-4 font-medium text-muted-foreground">ID</th>
                                    <th className="text-left p-4 font-medium text-muted-foreground">Student</th>
                                    <th className="text-left p-4 font-medium text-muted-foreground">Amount</th>
                                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTransactions.map((txn) => (
                                    <tr key={txn.id} className="border-t border-border hover:bg-muted/30">
                                        <td className="p-4 font-medium text-primary">{txn.id}</td>
                                        <td className="p-4 text-foreground">{txn.student}</td>
                                        <td className="p-4 font-semibold text-foreground">{txn.amount}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${txn.status === "Completed" ? "bg-success/10 text-success" :
                                                txn.status === "Pending" ? "bg-warning/10 text-warning" :
                                                    "bg-destructive/10 text-destructive"
                                                }`}>
                                                {txn.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
                    <div className="space-y-4">
                        <Button
                            variant="outline"
                            className="w-full justify-start h-auto p-4"
                            onClick={handleGenerateReport}
                            disabled={isGenerating}
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                {isGenerating ? <i className="fas fa-spinner fa-spin text-primary"></i> : <i className="fas fa-file-invoice text-primary"></i>}
                            </div>
                            <div className="text-left">
                                <p className="font-medium text-foreground">Generate Report</p>
                                <p className="text-xs text-muted-foreground">Download financial summary</p>
                            </div>
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full justify-start h-auto p-4"
                            onClick={handleSendReminders}
                            disabled={isSending}
                        >
                            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center mr-4">
                                {isSending ? <i className="fas fa-spinner fa-spin text-warning"></i> : <i className="fas fa-exclamation-circle text-warning"></i>}
                            </div>
                            <div className="text-left">
                                <p className="font-medium text-foreground">Send Reminders</p>
                                <p className="text-xs text-muted-foreground">Notify for pending fees</p>
                            </div>
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full justify-start h-auto p-4"
                            onClick={() => setTaxDialogOpen(true)}
                        >
                            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mr-4">
                                <i className="fas fa-calculator text-success"></i>
                            </div>
                            <div className="text-left">
                                <p className="font-medium text-foreground">Calculate Tax</p>
                                <p className="text-xs text-muted-foreground">Estimate tax obligations</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>

            <Dialog open={taxDialogOpen} onOpenChange={setTaxDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Tax Estimation</DialogTitle>
                        <DialogDescription>
                            Estimated tax calculations based on current revenue.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="revenue">Total Revenue ($)</Label>
                            <Input
                                id="revenue"
                                type="number"
                                value={revenueInput}
                                onChange={(e) => setRevenueInput(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="taxRate">Tax Rate (%)</Label>
                            <Input
                                id="taxRate"
                                type="number"
                                value={taxRateInput}
                                onChange={(e) => setTaxRateInput(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t mt-4">
                            <span className="font-bold text-foreground">Estimated Tax</span>
                            <span className="font-bold text-destructive text-xl">${estimatedTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AccountantHome;
