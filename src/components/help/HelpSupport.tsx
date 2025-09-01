import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  Phone, 
  Mail, 
  MessageCircle, 
  Book, 
  Video,
  Users,
  DollarSign,
  Briefcase,
  Settings
} from "lucide-react";

const faqs = [
  {
    category: "Workers",
    icon: Users,
    questions: [
      {
        q: "How do I add a new worker?",
        a: "Go to Labour Management → Click 'Add Worker' → Fill the form with worker details like name, phone, skills, and daily wage."
      },
      {
        q: "How to update worker information?",
        a: "Find the worker in Labour Management → Click 'Edit' button → Update the information → Save changes."
      },
      {
        q: "How to mark a worker as unavailable?",
        a: "Edit the worker profile and change status to 'Working' or 'Unavailable' in the dropdown."
      }
    ]
  },
  {
    category: "Projects",
    icon: Briefcase,
    questions: [
      {
        q: "How to create a new project?",
        a: "Go to Work Management → Click 'Add Project' → Enter project details, dates, and budget → Save."
      },
      {
        q: "How to assign workers to a project?",
        a: "Open the project → Click 'Assign' button → Select workers from the list → Confirm assignment."
      },
      {
        q: "How to track project progress?",
        a: "Project progress is shown on cards. You can update it by editing the project details."
      }
    ]
  },
  {
    category: "Payments",
    icon: DollarSign,
    questions: [
      {
        q: "How to record daily payments?",
        a: "Go to Payment Management → Click 'Record Payment' → Select worker → Enter amount and date → Save."
      },
      {
        q: "How to view payment history?",
        a: "Check the Recent Payments section on Dashboard or go to Payment Management for detailed history."
      },
      {
        q: "How to generate payment reports?",
        a: "Go to Reports section → Select payment reports → Choose date range → View or download report."
      }
    ]
  }
];

export default function HelpSupport() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Help & Support</h2>
        <p className="text-muted-foreground">
          Find answers to common questions and get support
        </p>
      </div>

      {/* Quick Contact */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover-scale">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold">Call Support</h3>
            <p className="text-sm text-muted-foreground">
              Get instant help from our support team
            </p>
            <Button variant="outline" className="w-full">
              +91 9876543210
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover-scale">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">
              Quick assistance via WhatsApp
            </p>
            <Button variant="outline" className="w-full">
              Chat Now
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover-scale">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto">
              <Mail className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold">Email Support</h3>
            <p className="text-sm text-muted-foreground">
              Send us your questions via email
            </p>
            <Button variant="outline" className="w-full">
              support@labourmanager.com
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Video Tutorials */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-primary" />
            Video Tutorials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <Button variant="outline" className="h-16 flex flex-col items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">Managing Workers</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center gap-2">
              <Briefcase className="h-5 w-5" />
              <span className="text-sm">Project Setup</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center gap-2">
              <DollarSign className="h-5 w-5" />
              <span className="text-sm">Payment Recording</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center gap-2">
              <Settings className="h-5 w-5" />
              <span className="text-sm">System Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* FAQs */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center">Frequently Asked Questions</h3>
        
        {faqs.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.category} className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  {category.category}
                  <Badge variant="secondary">{category.questions.length} FAQs</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((faq, index) => (
                  <div key={index} className="border-l-4 border-primary/20 pl-4 space-y-2">
                    <h4 className="font-medium text-foreground">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* System Info */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            System Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Version:</span>
            <span className="font-medium">1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Last Updated:</span>
            <span className="font-medium">March 2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Support Team:</span>
            <span className="font-medium">Available 24/7</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}