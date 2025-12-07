import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: "fa-user" },
    { id: "school", label: "School Info", icon: "fa-school" },
    { id: "notifications", label: "Notifications", icon: "fa-bell" },
    { id: "security", label: "Security", icon: "fa-shield-alt" },
    { id: "appearance", label: "Appearance", icon: "fa-palette" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Settings</h2>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl border border-border p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-muted-foreground"
                    }`}
                >
                  <i className={`fas ${tab.icon} w-5`}></i>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          {activeTab === "profile" && (
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">Profile Settings</h3>

              {/* Avatar */}
              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-border">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-semibold">
                  AD
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    <i className="fas fa-camera mr-2"></i>Change Photo
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">JPG, PNG or GIF. Max 2MB</p>
                </div>
              </div>

              {/* Form */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input defaultValue="Admin" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input defaultValue="User" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input defaultValue="admin@school.edu" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input defaultValue="+1 234-567-8900" type="tel" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-foreground mb-2 block">Bio</label>
                  <textarea
                    className="w-full min-h-[100px] px-3 py-2 bg-background border border-input rounded-lg text-foreground"
                    defaultValue="School administrator with 10+ years of experience in educational management."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-border">
                <Button variant="outline">Cancel</Button>
                <Button className="gradient-primary text-primary-foreground">Save Changes</Button>
              </div>
            </div>
          )}

          {activeTab === "school" && (
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">School Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-foreground mb-2 block">School Name</label>
                  <Input defaultValue="Springfield International School" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Established Year</label>
                  <Input defaultValue="1995" type="number" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">School Code</label>
                  <Input defaultValue="SIS-2024" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-foreground mb-2 block">Address</label>
                  <Input defaultValue="123 Education Street, Springfield, ST 12345" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Contact Email</label>
                  <Input defaultValue="info@springfieldschool.edu" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Contact Phone</label>
                  <Input defaultValue="+1 234-567-8900" type="tel" />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-border">
                <Button variant="outline">Cancel</Button>
                <Button className="gradient-primary text-primary-foreground">Save Changes</Button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">Notification Preferences</h3>
              <div className="space-y-6">
                {[
                  { title: "Email Notifications", desc: "Receive notifications via email" },
                  { title: "SMS Alerts", desc: "Receive important alerts via SMS" },
                  { title: "Push Notifications", desc: "Receive browser push notifications" },
                  { title: "Attendance Alerts", desc: "Get notified about student attendance" },
                  { title: "Fee Reminders", desc: "Receive fee payment reminders" },
                  { title: "Exam Updates", desc: "Get notified about exam schedules" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch defaultChecked={index < 3} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">Security Settings</h3>

              <div className="space-y-6">
                {/* Change Password */}
                <div className="pb-6 border-b border-border">
                  <h4 className="font-medium text-foreground mb-4">Change Password</h4>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Current Password</label>
                      <Input type="password" placeholder="Enter current password" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">New Password</label>
                      <Input type="password" placeholder="Enter new password" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Confirm Password</label>
                      <Input type="password" placeholder="Confirm new password" />
                    </div>
                    <Button className="gradient-primary text-primary-foreground">Update Password</Button>
                  </div>
                </div>

                {/* Two-Factor Auth */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>

                {/* Login History */}
                <div className="pt-6 border-t border-border">
                  <h4 className="font-medium text-foreground mb-4">Recent Login Activity</h4>
                  <div className="space-y-3">
                    {[
                      { device: "Chrome on Windows", location: "Springfield, ST", time: "2 minutes ago", current: true },
                      { device: "Safari on iPhone", location: "Springfield, ST", time: "1 hour ago", current: false },
                      { device: "Firefox on Mac", location: "Springfield, ST", time: "Yesterday", current: false },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <i className="fas fa-desktop text-muted-foreground"></i>
                          <div>
                            <p className="font-medium text-foreground text-sm">{session.device}</p>
                            <p className="text-xs text-muted-foreground">{session.location} • {session.time}</p>
                          </div>
                        </div>
                        {session.current && (
                          <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">Current</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">Appearance Settings</h3>

              <div className="space-y-6">
                {/* Theme */}
                <div className="pb-6 border-b border-border">
                  <h4 className="font-medium text-foreground mb-4">Theme</h4>
                  <div className="grid grid-cols-3 gap-4 max-w-md">
                    {[
                      { name: "Light", icon: "fa-sun" },
                      { name: "Dark", icon: "fa-moon" },
                      { name: "System", icon: "fa-laptop" },
                    ].map((t) => (
                      <button
                        key={t.name}
                        onClick={() => setTheme(t.name.toLowerCase() as "light" | "dark" | "system")}
                        className={`p-4 rounded-lg border-2 text-center transition-colors ${theme === t.name.toLowerCase()
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                          }`}
                      >
                        <i className={`fas ${t.icon} text-xl mb-2 ${theme === t.name.toLowerCase() ? "text-primary" : "text-muted-foreground"}`}></i>
                        <p className="text-sm font-medium text-foreground">{t.name}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Collapsed Sidebar</p>
                    <p className="text-sm text-muted-foreground">Start with sidebar collapsed</p>
                  </div>
                  <Switch />
                </div>

                {/* Compact Mode */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Compact Mode</p>
                    <p className="text-sm text-muted-foreground">Reduce spacing for more content</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
