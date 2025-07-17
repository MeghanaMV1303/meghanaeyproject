import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  ArrowLeft,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  PiggyBank,
  Calculator,
  Edit,
  Share
} from "lucide-react";
import { Link } from "react-router-dom";

const ViewPlan = () => {
  const goalDetails = {
    name: "डेयरी व्यापार / Dairy Business",
    targetAmount: 15000,
    currentSavings: 2450,
    monthlyTarget: 1250,
    timeRemaining: "10 महीने / 10 months",
    startDate: "जनवरी 2024 / January 2024",
    targetDate: "दिसंबर 2024 / December 2024",
    category: "व्यापार / Business"
  };

  const milestones = [
    {
      amount: 3750,
      title: "25% लक्ष्य / 25% Goal",
      description: "प्राथमिक उपकरण / Basic equipment",
      status: "pending",
      expectedDate: "फरवरी 2024 / Feb 2024"
    },
    {
      amount: 7500,
      title: "50% लक्ष्य / 50% Goal", 
      description: "पशु खरीदना / Animal purchase",
      status: "pending",
      expectedDate: "मई 2024 / May 2024"
    },
    {
      amount: 11250,
      title: "75% लक्ष्य / 75% Goal",
      description: "अतिरिक्त सुविधाएं / Additional facilities",
      status: "pending",
      expectedDate: "अगस्त 2024 / Aug 2024"
    },
    {
      amount: 15000,
      title: "100% लक्ष्य / 100% Goal",
      description: "व्यापार शुरू / Business launch",
      status: "pending",
      expectedDate: "दिसंबर 2024 / Dec 2024"
    }
  ];

  const monthlyBreakdown = [
    { month: "जनवरी / January", planned: 1250, actual: 1200, status: "completed" },
    { month: "फरवरी / February", planned: 1250, actual: 1250, status: "completed" },
    { month: "मार्च / March", planned: 1250, actual: 0, status: "current" },
    { month: "अप्रैल / April", planned: 1250, actual: 0, status: "upcoming" },
    { month: "मई / May", planned: 1250, actual: 0, status: "upcoming" },
    { month: "जून / June", planned: 1250, actual: 0, status: "upcoming" }
  ];

  const tips = [
    {
      title: "मासिक लक्ष्य को छोटे हिस्सों में बांटें / Break monthly goal into smaller parts",
      description: "₹1,250 को 4 सप्ताह में बांटें = ₹312 प्रति सप्ताह / Divide ₹1,250 into 4 weeks = ₹312 per week"
    },
    {
      title: "दैनिक बचत की आदत बनाएं / Create daily saving habit", 
      description: "रोज ₹42 बचाएं या वैकल्पिक दिनों में ₹84 / Save ₹42 daily or ₹84 on alternate days"
    },
    {
      title: "अतिरिक्त आय के अवसर खोजें / Look for additional income opportunities",
      description: "सिलाई, खाना बनाना, या अन्य कौशल का उपयोग / Use skills like sewing, cooking, or others"
    }
  ];

  const progressPercentage = (goalDetails.currentSavings / goalDetails.targetAmount) * 100;

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                वापस / Back
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">योजना विवरण / Plan Details</h1>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              संपादित करें / Edit
            </Button>
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              साझा करें / Share
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Goal Overview */}
        <Card className="shadow-soft border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">{goalDetails.name}</CardTitle>
              <Badge variant="secondary">{goalDetails.category}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-3xl font-bold text-primary">₹{goalDetails.currentSavings}</p>
                  <p className="text-muted-foreground">₹{goalDetails.targetAmount} में से / out of</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-success">{progressPercentage.toFixed(1)}%</p>
                  <p className="text-muted-foreground">पूर्ण / Complete</p>
                </div>
              </div>
              <Progress value={progressPercentage} className="h-4" />
              <p className="text-center text-sm text-muted-foreground">
                ₹{goalDetails.targetAmount - goalDetails.currentSavings} और बचाना है / more to save
              </p>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">लक्ष्य तिथि / Target Date</p>
                <p className="text-sm text-muted-foreground">{goalDetails.targetDate}</p>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <TrendingUp className="h-6 w-6 mx-auto mb-2 text-success" />
                <p className="font-medium">मासिक लक्ष्य / Monthly Target</p>
                <p className="text-sm text-muted-foreground">₹{goalDetails.monthlyTarget}</p>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Clock className="h-6 w-6 mx-auto mb-2 text-accent" />
                <p className="font-medium">समय बचा / Time Left</p>
                <p className="text-sm text-muted-foreground">{goalDetails.timeRemaining}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>मील के पत्थर / Milestones</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {milestones.map((milestone, index) => {
              const isAchieved = goalDetails.currentSavings >= milestone.amount;
              const isCurrent = !isAchieved && goalDetails.currentSavings >= (milestones[index-1]?.amount || 0);
              
              return (
                <div key={index} className={`p-4 border rounded-lg ${
                  isAchieved ? 'bg-success/10 border-success/20' : 
                  isCurrent ? 'bg-primary/10 border-primary/20' : 
                  'bg-muted/20'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isAchieved ? 'bg-success text-success-foreground' :
                        isCurrent ? 'bg-primary text-primary-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {isAchieved ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <span className="text-sm font-bold">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">₹{milestone.amount}</p>
                      <p className="text-xs text-muted-foreground">{milestone.expectedDate}</p>
                    </div>
                  </div>
                  {isCurrent && (
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>प्रगति / Progress</span>
                        <span>₹{goalDetails.currentSavings - (milestones[index-1]?.amount || 0)} / ₹{milestone.amount - (milestones[index-1]?.amount || 0)}</span>
                      </div>
                      <Progress 
                        value={((goalDetails.currentSavings - (milestones[index-1]?.amount || 0)) / (milestone.amount - (milestones[index-1]?.amount || 0))) * 100} 
                        className="h-2" 
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Monthly Breakdown */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>मासिक विवरण / Monthly Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {monthlyBreakdown.map((month, index) => (
              <div key={index} className={`flex items-center justify-between p-3 border rounded-lg ${
                month.status === 'completed' ? 'bg-success/10 border-success/20' :
                month.status === 'current' ? 'bg-primary/10 border-primary/20' :
                'bg-muted/20'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    month.status === 'completed' ? 'bg-success text-success-foreground' :
                    month.status === 'current' ? 'bg-primary text-primary-foreground' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {month.status === 'completed' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : month.status === 'current' ? (
                      <Clock className="h-4 w-4" />
                    ) : (
                      <PiggyBank className="h-4 w-4" />
                    )}
                  </div>
                  <span className="font-medium">{month.month}</span>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    ₹{month.actual} / ₹{month.planned}
                  </p>
                  {month.status === 'completed' && (
                    <Badge variant="secondary" className="text-xs">
                      {month.actual >= month.planned ? 'पूर्ण / Complete' : 'अधूरा / Incomplete'}
                    </Badge>
                  )}
                  {month.status === 'current' && (
                    <Badge variant="default" className="text-xs">
                      चालू / Current
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Success Tips */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>सफलता के सुझाव / Success Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tips.map((tip, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                <h3 className="font-medium mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/add-savings">
            <Button className="w-full h-16 text-lg">
              <PiggyBank className="h-6 w-6 mr-2" />
              बचत जोड़ें / Add Savings
            </Button>
          </Link>
          <Button variant="outline" className="h-16 text-lg">
            <Calculator className="h-6 w-6 mr-2" />
            योजना संशोधित करें / Modify Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewPlan;