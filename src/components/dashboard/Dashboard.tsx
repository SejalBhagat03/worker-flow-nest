import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, DollarSign, Clock, TrendingUp, UserCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { QuickStats } from "@/components/common/QuickStats";
import { ActionButton } from "@/components/common/ActionButton";

const stats = [
  {
    title: "Total Workers",
    value: "248",
    change: "+12%",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Active Projects",
    value: "18",
    change: "+3",
    icon: Briefcase,
    color: "text-green-600"
  },
  {
    title: "Monthly Payments",
    value: "₹2,45,680",
    change: "+8%",
    icon: DollarSign,
    color: "text-orange-600"
  },
  {
    title: "Working Today",
    value: "186",
    change: "75%",
    icon: UserCheck,
    color: "text-purple-600"
  }
];

const recentProjects = [
  { name: "Construction Site A", progress: 85, status: "On Track", workers: 45, deadline: "5 days left" },
  { name: "Road Maintenance", progress: 60, status: "Delayed", workers: 22, deadline: "Overdue" },
  { name: "Building Renovation", progress: 95, status: "Almost Done", workers: 18, deadline: "2 days left" },
  { name: "Garden Development", progress: 30, status: "Started", workers: 12, deadline: "45 days left" }
];

const recentPayments = [
  { worker: "Rajesh Kumar", amount: "₹1,250", date: "Today", status: "Paid" },
  { worker: "Amit Singh", amount: "₹1,100", date: "Today", status: "Paid" },
  { worker: "Suresh Yadav", amount: "₹1,350", date: "Yesterday", status: "Paid" },
  { worker: "Ravi Sharma", amount: "₹1,200", date: "Yesterday", status: "Pending" }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <QuickStats
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Projects */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Recent Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{project.name}</span>
                    <span className="text-muted-foreground">{project.workers} workers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={project.progress} className="flex-1" />
                    <span className="text-sm font-medium w-12">{project.progress}%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={`font-medium ${
                      project.status === 'On Track' ? 'text-green-600' :
                      project.status === 'Delayed' ? 'text-red-600' :
                      project.status === 'Almost Done' ? 'text-blue-600' :
                      'text-orange-600'
                    }`}>
                      {project.status}
                    </span>
                    <span className={`text-xs ${
                      project.deadline === 'Overdue' ? 'text-red-600 font-medium' : 'text-muted-foreground'
                    }`}>
                      {project.deadline}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Payments */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Recent Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPayments.map((payment, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{payment.worker}</p>
                    <p className="text-sm text-muted-foreground">{payment.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{payment.amount}</p>
                    <p className={`text-sm ${
                      payment.status === 'Paid' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      {payment.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-soft animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <ActionButton icon={Users} label="Add Worker" />
            <ActionButton icon={Briefcase} label="New Project" />
            <ActionButton icon={DollarSign} label="Record Payment" />
            <ActionButton icon={Clock} label="Track Time" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}