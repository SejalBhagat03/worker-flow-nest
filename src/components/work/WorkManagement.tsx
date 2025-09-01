import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Calendar,
  MapPin, 
  Users,
  Clock,
  Filter,
  Briefcase
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockProjects = [
  {
    id: 1,
    name: "Construction Site A",
    description: "Multi-story building construction project",
    location: "Sector 62, Noida",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    progress: 85,
    status: "In Progress",
    priority: "High",
    assignedWorkers: 45,
    budget: 2500000,
    spent: 2125000
  },
  {
    id: 2,
    name: "Road Maintenance",
    description: "Main road repair and maintenance work",
    location: "Delhi-Gurgaon Highway",
    startDate: "2024-02-01",
    endDate: "2024-04-15",
    progress: 60,
    status: "Delayed",
    priority: "Medium",
    assignedWorkers: 22,
    budget: 800000,
    spent: 520000
  },
  {
    id: 3,
    name: "Building Renovation",
    description: "Complete renovation of office building",
    location: "Connaught Place, Delhi",
    startDate: "2024-01-10",
    endDate: "2024-03-20",
    progress: 95,
    status: "Almost Done",
    priority: "High",
    assignedWorkers: 18,
    budget: 1200000,
    spent: 1140000
  },
  {
    id: 4,
    name: "Garden Development",
    description: "Landscaping and garden development project",
    location: "Cyber City, Gurgaon",
    startDate: "2024-03-01",
    endDate: "2024-05-30",
    progress: 30,
    status: "Started",
    priority: "Low",
    assignedWorkers: 12,
    budget: 500000,
    spent: 150000
  }
];

export default function WorkManagement() {
  const [projects, setProjects] = useState(mockProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || project.status.toLowerCase().replace(" ", "") === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAddProject = () => {
    toast({
      title: "Project Added",
      description: "New project has been created successfully.",
    });
    setIsAddDialogOpen(false);
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({
      title: "Project Removed",
      description: "Project has been removed from the system.",
      variant: "destructive"
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Delayed": return "bg-red-100 text-red-800";
      case "Almost Done": return "bg-green-100 text-green-800";
      case "Started": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Work Management</h2>
          <p className="text-muted-foreground">Track and manage all your projects</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="projectName">Project Name</Label>
                <Input id="projectName" placeholder="Enter project name" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Project description" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Project location" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" type="date" />
                </div>
              </div>
              <div>
                <Label htmlFor="budget">Budget (₹)</Label>
                <Input id="budget" type="number" placeholder="1000000" />
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleAddProject} className="w-full">
                Create Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="inprogress">In Progress</SelectItem>
                  <SelectItem value="delayed">Delayed</SelectItem>
                  <SelectItem value="almostdone">Almost Done</SelectItem>
                  <SelectItem value="started">Started</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <Badge className={getPriorityColor(project.priority)}>
                    {project.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {project.location}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{project.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{project.endDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{project.assignedWorkers} workers assigned</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Budget</span>
                  <span className="font-medium">₹{project.budget.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Spent</span>
                  <span className={`font-medium ${
                    (project.spent / project.budget) > 0.9 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    ₹{project.spent.toLocaleString()}
                  </span>
                </div>
                <Progress 
                  value={(project.spent / project.budget) * 100} 
                  className="h-2"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-1" />
                  Assign
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDeleteProject(project.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-muted-foreground">
              <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No projects found matching your criteria.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}