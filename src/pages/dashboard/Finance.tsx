import { Button } from "@/components/ui/button";

const Finance = () => {
  const stats = [
    { icon: "fa-coins", label: "Total Revenue", value: "$125,430", change: "+18%", color: "text-success bg-success/10" },
    { icon: "fa-file-invoice-dollar", label: "Pending Fees", value: "$23,500", change: "-5%", color: "text-warning bg-warning/10" },
    { icon: "fa-money-bill-wave", label: "This Month", value: "$45,230", change: "+12%", color: "text-primary bg-primary/10" },
    { icon: "fa-receipt", label: "Total Invoices", value: "1,456", change: "+8%", color: "text-info bg-info/10" },
  ];

  const recentTransactions = [
    { id: "TXN001", student: "Alice Johnson", type: "Tuition Fee", amount: "$1,200", date: "Mar 5, 2024", status: "Completed" },
    { id: "TXN002", student: "Bob Smith", type: "Library Fee", amount: "$50", date: "Mar 4, 2024", status: "Completed" },
    { id: "TXN003", student: "Carol Davis", type: "Sports Fee", amount: "$150", date: "Mar 4, 2024", status: "Pending" },
    { id: "TXN004", student: "David Wilson", type: "Tuition Fee", amount: "$1,200", date: "Mar 3, 2024", status: "Completed" },
    { id: "TXN005", student: "Emma Brown", type: "Lab Fee", amount: "$75", date: "Mar 3, 2024", status: "Failed" },
  ];

  const feeStructure = [
    { type: "Tuition Fee", amount: "$1,200/month", students: 1234 },
    { type: "Sports Fee", amount: "$150/term", students: 890 },
    { type: "Library Fee", amount: "$50/year", students: 1200 },
    { type: "Lab Fee", amount: "$75/term", students: 650 },
    { type: "Transport Fee", amount: "$200/month", students: 456 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Finance</h2>
          <p className="text-muted-foreground">Manage fees, invoices, and transactions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <i className="fas fa-download mr-2"></i>
            Export Report
          </Button>
          <Button className="gradient-primary text-primary-foreground">
            <i className="fas fa-plus mr-2"></i>
            Create Invoice
          </Button>
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
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium text-muted-foreground">Transaction ID</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Student</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Type</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Amount</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((txn) => (
                  <tr key={txn.id} className="border-t border-border hover:bg-muted/30">
                    <td className="p-4 font-medium text-primary">{txn.id}</td>
                    <td className="p-4 text-foreground">{txn.student}</td>
                    <td className="p-4 text-muted-foreground">{txn.type}</td>
                    <td className="p-4 font-semibold text-foreground">{txn.amount}</td>
                    <td className="p-4 text-muted-foreground">{txn.date}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        txn.status === "Completed" ? "bg-success/10 text-success" :
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

        {/* Fee Structure */}
        <div className="bg-card rounded-xl border border-border">
          <div className="p-6 border-b border-border">
            <h3 className="font-semibold text-foreground">Fee Structure</h3>
          </div>
          <div className="p-6 space-y-4">
            {feeStructure.map((fee, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{fee.type}</p>
                  <p className="text-sm text-muted-foreground">{fee.students} students</p>
                </div>
                <p className="font-semibold text-primary">{fee.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Monthly Revenue</h3>
        <div className="h-48 flex items-end justify-between gap-4">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => {
            const height = [65, 78, 85, 72, 92, 88][index];
            return (
              <div key={month} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full gradient-primary rounded-t-lg transition-all duration-300 hover:opacity-80"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-sm text-muted-foreground">{month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Finance;
