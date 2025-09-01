import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  DollarSign,
  Users,
  Briefcase,
  PieChart
} from "lucide-react";

const monthlyExpenses = [
  { month: "Jan", amount: 245680 },
  { month: "Feb", amount: 189340 },
  { month: "Mar", amount: 312450 },
  { month: "Apr", amount: 278920 },
  { month: "May", amount: 334120 },
  { month: "Jun", amount: 289560 }
];

const projectExpenses = [
  { project: "Construction Site A", spent: 2125000, budget: 2500000, percentage: 85 },
  { project: "Building Renovation", spent: 1140000, budget: 1200000, percentage: 95 },
  { project: "Road Maintenance", spent: 520000, budget: 800000, percentage: 65 },
  { project: "Garden Development", spent: 150000, budget: 500000, percentage: 30 }
];

const workerPerformance = [
  { name: "Rajesh Kumar", daysWorked: 28, totalEarnings: 14000, rating: 4.8 },
  { name: "Amit Singh", daysWorked: 25, totalEarnings: 11250, rating: 4.2 },
  { name: "Suresh Yadav", daysWorked: 30, totalEarnings: 16500, rating: 4.9 },
  { name: "Ravi Sharma", daysWorked: 22, totalEarnings: 8800, rating: 4.0 }
];

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Reports & Analytics</h2>
          <p className="text-muted-foreground">Track performance and analyze data</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-32">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">₹18,45,670</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12% from last month
                </p>
              </div>
              <div className="rounded-full p-3 bg-green-100">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Projects Completed</p>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-blue-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +3 this month
                </p>
              </div>
              <div className="rounded-full p-3 bg-blue-100">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Workers</p>
                <p className="text-2xl font-bold">186</p>
                <p className="text-xs text-purple-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  75% utilization
                </p>
              </div>
              <div className="rounded-full p-3 bg-purple-100">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Efficiency Rate</p>
                <p className="text-2xl font-bold">92%</p>
                <p className="text-xs text-orange-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +5% improvement
                </p>
              </div>
              <div className="rounded-full p-3 bg-orange-100">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Monthly Expenses Chart */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Monthly Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyExpenses.map((month, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium w-12">{month.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${(month.amount / 350000) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium w-20 text-right">
                    ₹{(month.amount / 1000).toFixed(0)}K
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Budget vs Spent */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-primary" />
              Project Budget Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectExpenses.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{project.project}</span>
                    <Badge variant={project.percentage > 90 ? "destructive" : project.percentage > 70 ? "default" : "secondary"}>
                      {project.percentage}%
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Spent: ₹{(project.spent / 100000).toFixed(1)}L</span>
                      <span>Budget: ₹{(project.budget / 100000).toFixed(1)}L</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          project.percentage > 90 ? 'bg-red-500' : 
                          project.percentage > 70 ? 'bg-orange-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${project.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Worker Performance */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Top Performing Workers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workerPerformance.map((worker, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{worker.name}</h4>
                  <Badge variant="outline">{worker.rating} ⭐</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Days Worked:</span>
                    <span className="font-medium">{worker.daysWorked}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Earnings:</span>
                    <span className="font-medium">₹{worker.totalEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg/Day:</span>
                    <span className="font-medium">₹{(worker.totalEarnings / worker.daysWorked).toFixed(0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Analytics */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Work Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Construction</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Maintenance</span>
                <span className="text-sm font-medium">25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Renovation</span>
                <span className="text-sm font-medium">20%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Others</span>
                <span className="text-sm font-medium">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Cash</span>
                <span className="text-sm font-medium">60%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Bank Transfer</span>
                <span className="text-sm font-medium">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">UPI</span>
                <span className="text-sm font-medium">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Attendance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-green-600">87%</div>
              <p className="text-sm text-muted-foreground">Average monthly attendance</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>This Week</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Last Week</span>
                  <span className="font-medium">85%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}