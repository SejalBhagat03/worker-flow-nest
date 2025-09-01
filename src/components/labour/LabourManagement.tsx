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
  Phone, 
  MapPin, 
  Star,
  Filter,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockLabourers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    phone: "+91 9876543210",
    dailyWage: 500,
    skills: ["Masonry", "Painting"],
    location: "Delhi",
    rating: 4.5,
    status: "Available",
    experience: "5 years"
  },
  {
    id: 2,
    name: "Amit Singh",
    phone: "+91 9876543211",
    dailyWage: 450,
    skills: ["Carpentry", "Electrical"],
    location: "Noida",
    rating: 4.2,
    status: "Working",
    experience: "3 years"
  },
  {
    id: 3,
    name: "Suresh Yadav",
    phone: "+91 9876543212",
    dailyWage: 550,
    skills: ["Plumbing", "Welding"],
    location: "Gurgaon",
    rating: 4.8,
    status: "Available",
    experience: "7 years"
  },
  {
    id: 4,
    name: "Ravi Sharma",
    phone: "+91 9876543213",
    dailyWage: 400,
    skills: ["Painting", "Cleaning"],
    location: "Delhi",
    rating: 4.0,
    status: "Working",
    experience: "2 years"
  }
];

export default function LabourManagement() {
  const [labourers, setLabourers] = useState(mockLabourers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  const filteredLabourers = labourers.filter(labourer => {
    const matchesSearch = labourer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         labourer.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = filterStatus === "all" || labourer.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAddLabourer = () => {
    toast({
      title: "Worker Added",
      description: "New worker has been added successfully.",
    });
    setIsAddDialogOpen(false);
  };

  const handleDeleteLabourer = (id: number) => {
    setLabourers(labourers.filter(l => l.id !== id));
    toast({
      title: "Worker Removed",
      description: "Worker has been removed from the system.",
      variant: "destructive"
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Labour Management</h2>
          <p className="text-muted-foreground">Manage your workforce efficiently</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Worker
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Worker</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter worker name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+91 9876543210" />
              </div>
              <div>
                <Label htmlFor="wage">Daily Wage (₹)</Label>
                <Input id="wage" type="number" placeholder="500" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter location" />
              </div>
              <div>
                <Label htmlFor="skills">Skills</Label>
                <Input id="skills" placeholder="Masonry, Painting, etc." />
              </div>
              <div>
                <Label htmlFor="experience">Experience</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1-2 years</SelectItem>
                    <SelectItem value="3">3-4 years</SelectItem>
                    <SelectItem value="5">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleAddLabourer} className="w-full">
                Add Worker
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
                placeholder="Search workers by name or skills..."
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
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="working">Working</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workers Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredLabourers.map((labourer) => (
          <Card key={labourer.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{labourer.name}</CardTitle>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">{labourer.rating}</span>
                  </div>
                </div>
                <Badge 
                  variant={labourer.status === "Available" ? "default" : "secondary"}
                  className={labourer.status === "Available" ? "bg-green-100 text-green-800" : ""}
                >
                  {labourer.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                {labourer.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {labourer.location}
              </div>
              <div>
                <p className="text-sm font-medium">Daily Wage: ₹{labourer.dailyWage}</p>
                <p className="text-sm text-muted-foreground">Experience: {labourer.experience}</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {labourer.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDeleteLabourer(labourer.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredLabourers.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-muted-foreground">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No workers found matching your criteria.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}