import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Plus, 
  Search, 
  Calendar,
  DollarSign, 
  Download,
  Filter,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockPayments = [
  {
    id: 1,
    workerName: "Rajesh Kumar",
    amount: 1250,
    date: "2024-01-20",
    status: "Paid",
    paymentMethod: "Cash",
    workDescription: "Masonry work - Day 5",
    project: "Construction Site A"
  },
  {
    id: 2,
    workerName: "Amit Singh",
    amount: 1100,
    date: "2024-01-20",
    status: "Paid",
    paymentMethod: "Bank Transfer",
    workDescription: "Electrical work - Day 3",
    project: "Building Renovation"
  },
  {
    id: 3,
    workerName: "Suresh Yadav",
    amount: 1350,
    date: "2024-01-19",
    status: "Paid",
    paymentMethod: "Cash",
    workDescription: "Plumbing work - Day 7",
    project: "Construction Site A"
  },
  {
    id: 4,
    workerName: "Ravi Sharma",
    amount: 1200,
    date: "2024-01-19",
    status: "Pending",
    paymentMethod: "Cash",
    workDescription: "Painting work - Day 2",
    project: "Road Maintenance"
  },
  {
    id: 5,
    workerName: "Mohit Gupta",
    amount: 950,
    date: "2024-01-18",
    status: "Overdue",
    paymentMethod: "Bank Transfer",
    workDescription: "Cleaning work - Day 1",
    project: "Garden Development"
  }
];

const paymentStats = {
  totalPaid: 156750,
  totalPending: 23400,
  totalOverdue: 8950,
  paymentsThisMonth: 89
};

export default function PaymentManagement() {
  const [payments, setPayments] = useState(mockPayments);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.workerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || payment.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAddPayment = () => {
    toast({
      title: "Payment Recorded",
      description: "Payment has been recorded successfully.",
    });
    setIsAddDialogOpen(false);
  };

  const handleMarkAsPaid = (id: number) => {
    setPayments(payments.map(p => 
      p.id === id ? { ...p, status: "Paid" } : p
    ));
    toast({
      title: "Payment Updated",
      description: "Payment status has been updated to paid.",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Pending": return <Clock className="h-4 w-4 text-orange-600" />;
      case "Overdue": return <AlertCircle className="h-4 w-4 text-red-600" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid": return "bg-green-100 text-green-800";
      case "Pending": return "bg-orange-100 text-orange-800";
      case "Overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Payment Management</h2>
          <p className="text-muted-foreground">Track and manage worker payments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Record Payment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Record New Payment</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="worker">Select Worker</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose worker" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rajesh">Rajesh Kumar</SelectItem>
                      <SelectItem value="amit">Amit Singh</SelectItem>
                      <SelectItem value="suresh">Suresh Yadav</SelectItem>
                      <SelectItem value="ravi">Ravi Sharma</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="amount">Amount (₹)</Label>
                  <Input id="amount" type="number" placeholder="1250" />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="project">Project</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">Construction Site A</SelectItem>
                      <SelectItem value="road">Road Maintenance</SelectItem>
                      <SelectItem value="building">Building Renovation</SelectItem>
                      <SelectItem value="garden">Garden Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="method">Payment Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="transfer">Bank Transfer</SelectItem>
                      <SelectItem value="upi">UPI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="description">Work Description</Label>
                  <Input id="description" placeholder="e.g., Masonry work - Day 5" />
                </div>
                <Button onClick={handleAddPayment} className="w-full">
                  Record Payment
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Paid</p>
                <p className="text-2xl font-bold text-green-600">₹{paymentStats.totalPaid.toLocaleString()}</p>
              </div>
              <div className="rounded-full p-3 bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-orange-600">₹{paymentStats.totalPending.toLocaleString()}</p>
              </div>
              <div className="rounded-full p-3 bg-orange-100">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overdue</p>
                <p className="text-2xl font-bold text-red-600">₹{paymentStats.totalOverdue.toLocaleString()}</p>
              </div>
              <div className="rounded-full p-3 bg-red-100">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">{paymentStats.paymentsThisMonth}</p>
                <p className="text-xs text-muted-foreground">payments</p>
              </div>
              <div className="rounded-full p-3 bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search payments by worker or project..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-32">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Worker</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{payment.workerName}</div>
                      <div className="text-sm text-muted-foreground">{payment.workDescription}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">₹{payment.amount}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {payment.date}
                    </div>
                  </TableCell>
                  <TableCell>{payment.project}</TableCell>
                  <TableCell>{payment.paymentMethod}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(payment.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(payment.status)}
                        {payment.status}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {payment.status !== "Paid" && (
                      <Button 
                        size="sm" 
                        onClick={() => handleMarkAsPaid(payment.id)}
                        className="h-8"
                      >
                        Mark Paid
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}