import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Coins, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Users, 
  Star,
  ArrowRight,
  PiggyBank,
  Wallet,
  Trophy,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface FinancialDashboardProps {
  userName: string;
}

export function FinancialDashboard({ userName }: FinancialDashboardProps) {
  const [isHindi, setIsHindi] = useState(true);

  const toggleLanguage = () => {
    setIsHindi(!isHindi);
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Star className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SaktiSangini</h1>
              <p className="text-sm text-muted-foreground">आर्थिक सशक्तिकरण</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={toggleLanguage}>
            <Globe className="h-4 w-4 mr-2" />
            {isHindi ? "English" : "हिंदी"}
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-warm rounded-xl p-6 text-accent-foreground shadow-warm">
          <h2 className="text-2xl font-bold mb-2">नमस्ते {userName}! 🙏</h2>
          <p className="text-lg opacity-90">आज आपकी आर्थिक यात्रा जारी रखते हैं</p>
          <p className="text-sm opacity-80 mt-1">Continue your financial journey today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center">
                  <PiggyBank className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">कुल बचत / Total Savings</p>
                  <p className="text-2xl font-bold text-success">₹2,450</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">लक्ष्य / Goal Progress</p>
                  <p className="text-2xl font-bold text-accent">68%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">सीखे गए पाठ / Lessons</p>
                  <p className="text-2xl font-bold text-primary">12/20</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goals Section */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>आपका लक्ष्य / Your Goal: Dairy Business</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>डेयरी व्यवसाय के लिए / For Dairy Business</span>
                <span>₹2,450 / ₹15,000</span>
              </div>
              <Progress value={16.3} className="h-3" />
            </div>
            <div className="flex space-x-3">
              <Link to="/add-savings">
                <Button variant="warm" size="sm">
                  <Coins className="h-4 w-4" />
                  {isHindi ? "बचत जोड़ें" : "Add Savings"}
                </Button>
              </Link>
              <Link to="/view-plan">
                <Button variant="outline" size="sm">
                  {isHindi ? "योजना देखें" : "View Plan"}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/learning">
            <Button variant="large" className="h-20 flex-col space-y-2 p-4 w-full">
              <BookOpen className="h-6 w-6" />
              <span className="text-sm">{isHindi ? "सीखें" : "Learn"}</span>
            </Button>
          </Link>
          
          <Link to="/budget">
            <Button variant="success" className="h-20 flex-col space-y-2 p-4 w-full">
              <Wallet className="h-6 w-6" />
              <span className="text-sm">{isHindi ? "बजट" : "Budget"}</span>
            </Button>
          </Link>
          
          <Link to="/community">
            <Button variant="warm" className="h-20 flex-col space-y-2 p-4 w-full">
              <Users className="h-6 w-6" />
              <span className="text-sm">{isHindi ? "समुदाय" : "Community"}</span>
            </Button>
          </Link>
          
          <Link to="/investment">
            <Button variant="outline" className="h-20 flex-col space-y-2 p-4 w-full">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">{isHindi ? "निवेश" : "Invest"}</span>
            </Button>
          </Link>
        </div>

        {/* Learning Progress */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>आज का पाठ / Today's Lesson</span>
              </div>
              <Button variant="ghost" size="sm">
                सभी देखें / View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
              <div className="w-16 h-16 bg-gradient-success rounded-lg flex items-center justify-center">
                <PiggyBank className="h-8 w-8 text-success-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">बचत की शुरुआत / Starting to Save</h3>
                <p className="text-sm text-muted-foreground">
                  छोटी मात्रा में बचत कैसे करें / How to save small amounts daily
                </p>
                <div className="mt-2">
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">75% पूर्ण / Complete</p>
                </div>
              </div>
              <Button variant="warm">
                जारी रखें / Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}