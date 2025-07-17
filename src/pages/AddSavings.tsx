import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Coins, 
  ArrowLeft,
  PiggyBank,
  Calendar,
  Tag,
  FileText,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddSavings = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const categories = [
    "दैनिक बचत / Daily Savings",
    "व्यापार के लिए / For Business",
    "आपातकाल / Emergency",
    "त्योहार / Festival",
    "बच्चों की शिक्षा / Children's Education",
    "स्वास्थ्य / Health",
    "अन्य / Other"
  ];

  const quickAmounts = [50, 100, 200, 500, 1000];

  const recentSavings = [
    { date: "आज / Today", amount: 100, category: "दैनिक बचत / Daily Savings", description: "दैनिक बचत / Daily savings" },
    { date: "कल / Yesterday", amount: 200, category: "व्यापार के लिए / For Business", description: "डेयरी व्यापार के लिए / For dairy business" },
    { date: "2 दिन पहले / 2 days ago", amount: 150, category: "आपातकाल / Emergency", description: "आपातकालीन फंड / Emergency fund" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ amount, category, description, date });
  };

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
              <Coins className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">बचत जोड़ें / Add Savings</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Success Message */}
        <Card className="shadow-soft border-success/20 bg-success/5">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-success" />
              <div>
                <h3 className="font-medium text-success">बहुत बढ़िया! / Excellent!</h3>
                <p className="text-sm text-success/80">
                  हर छोटी बचत आपको अपने लक्ष्य के करीब लाती है / Every small saving brings you closer to your goal
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Add Savings Form */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PiggyBank className="h-5 w-5 text-primary" />
              <span>आज की बचत / Today's Savings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Section */}
              <div className="space-y-3">
                <Label htmlFor="amount" className="text-base">
                  राशि / Amount (₹)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-2xl h-16 text-center"
                />
                
                {/* Quick Amount Buttons */}
                <div className="flex flex-wrap gap-2">
                  <p className="text-sm text-muted-foreground w-full mb-2">
                    त्वरित राशि / Quick amounts:
                  </p>
                  {quickAmounts.map((quickAmount) => (
                    <Button
                      key={quickAmount}
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setAmount(quickAmount.toString())}
                    >
                      ₹{quickAmount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Category Section */}
              <div className="space-y-3">
                <Label className="text-base flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  श्रेणी / Category
                </Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="श्रेणी चुनें / Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Section */}
              <div className="space-y-3">
                <Label htmlFor="date" className="text-base flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  दिनांक / Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Description Section */}
              <div className="space-y-3">
                <Label htmlFor="description" className="text-base flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  विवरण / Description (वैकल्पिक / Optional)
                </Label>
                <Textarea
                  id="description"
                  placeholder="इस बचत के बारे में कुछ लिखें / Write something about this savings"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-20"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full h-14 text-lg">
                <Coins className="h-6 w-6 mr-2" />
                बचत जोड़ें / Add Savings
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Goal Progress */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>लक्ष्य की प्रगति / Goal Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">₹2,450 / ₹15,000</h3>
              <p className="text-muted-foreground">डेयरी व्यापार के लिए / For Dairy Business</p>
            </div>
            
            <div className="w-full bg-muted rounded-full h-6">
              <div 
                className="bg-gradient-primary h-6 rounded-full transition-all duration-500"
                style={{ width: `${(2450/15000) * 100}%` }}
              />
            </div>
            
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>16.3% पूर्ण / Complete</span>
              <span>₹12,550 बाकी / Remaining</span>
            </div>

            {amount && (
              <div className="p-3 bg-gradient-success/10 rounded-lg border border-success/20">
                <p className="text-sm text-success-foreground">
                  इस बचत के बाद आपकी कुल बचत: ₹{2450 + parseInt(amount || "0")} / 
                  After this savings, your total will be: ₹{2450 + parseInt(amount || "0")}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Savings */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>हाल की बचत / Recent Savings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentSavings.map((saving, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">₹{saving.amount}</p>
                  <p className="text-sm text-muted-foreground">{saving.category}</p>
                  <p className="text-xs text-muted-foreground">{saving.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{saving.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="shadow-soft bg-gradient-warm/10">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <PiggyBank className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-medium text-accent-foreground">बचत की युक्ति / Savings Tip</h3>
                <p className="text-sm text-accent-foreground/80 mt-1">
                  नियमित छोटी बचत बड़ी बचत से बेहतर होती है। रोज ₹50 भी जोड़ें तो महीने में ₹1500 हो जाएगा! /
                  Regular small savings are better than large savings. Even ₹50 daily becomes ₹1500 per month!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddSavings;