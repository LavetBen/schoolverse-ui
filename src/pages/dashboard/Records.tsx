import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Records = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Records" },
    { id: "academic", label: "Academic" },
    { id: "medical", label: "Medical" },
    { id: "disciplinary", label: "Disciplinary" },
    { id: "certificates", label: "Certificates" },
  ];

  const records = [
    { id: 1, title: "Academic Transcript - Alice Johnson", type: "Academic", date: "Mar 5, 2024", status: "Active", icon: "fa-graduation-cap" },
    { id: 2, title: "Medical Report - Bob Smith", type: "Medical", date: "Mar 4, 2024", status: "Active", icon: "fa-notes-medical" },
    { id: 3, title: "Transfer Certificate - Carol Davis", type: "Certificates", date: "Mar 3, 2024", status: "Issued", icon: "fa-certificate" },
    { id: 4, title: "Conduct Report - David Wilson", type: "Disciplinary", date: "Mar 2, 2024", status: "Pending", icon: "fa-file-contract" },
    { id: 5, title: "Progress Report - Emma Brown", type: "Academic", date: "Mar 1, 2024", status: "Active", icon: "fa-chart-line" },
    { id: 6, title: "Vaccination Record - Frank Miller", type: "Medical", date: "Feb 28, 2024", status: "Active", icon: "fa-syringe" },
    { id: 7, title: "Character Certificate - Grace Lee", type: "Certificates", date: "Feb 27, 2024", status: "Issued", icon: "fa-award" },
    { id: 8, title: "Exam Results - Henry Chen", type: "Academic", date: "Feb 26, 2024", status: "Active", icon: "fa-file-alt" },
  ];

  const stats = [
    { label: "Total Records", value: "5,432", icon: "fa-folder", color: "bg-primary/10 text-primary" },
    { label: "Academic", value: "2,156", icon: "fa-graduation-cap", color: "bg-success/10 text-success" },
    { label: "Medical", value: "1,234", icon: "fa-notes-medical", color: "bg-warning/10 text-warning" },
    { label: "Certificates", value: "856", icon: "fa-certificate", color: "bg-info/10 text-info" },
  ];

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || record.type.toLowerCase() === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Records</h2>
          <p className="text-muted-foreground">Manage student and school records</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <i className="fas fa-upload mr-2"></i>
            Upload
          </Button>
          <Button className="gradient-primary text-primary-foreground">
            <i className="fas fa-plus mr-2"></i>
            New Record
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-border pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "gradient-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
        <Input
          placeholder="Search records..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Records Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecords.map((record) => (
          <div key={record.id} className="bg-card rounded-xl border border-border p-5 card-hover">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`fas ${record.icon} text-primary`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground truncate">{record.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">{record.type}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{record.date}</span>
                </div>
                <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${
                  record.status === "Active" ? "bg-success/10 text-success" :
                  record.status === "Issued" ? "bg-primary/10 text-primary" :
                  "bg-warning/10 text-warning"
                }`}>
                  {record.status}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="flex-1">
                <i className="fas fa-eye mr-2"></i>View
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <i className="fas fa-download mr-2"></i>Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Records;
