import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  Wallet, 
  Plus, 
  Minus,
  ArrowLeft,
  PieChart,
  TrendingUp,
  TrendingDown,
  Target,
  Home,
  ShoppingCart,
  Car,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Budget = () => {
  const [monthlyIncome, setMonthlyIncome] = useState("15000");
  
  const budgetCategories = [
    {
      name: "घर का खर्च / Household",
      icon: Home,
      budgeted: 8000,
      spent: 7200,
      color: "bg-gradient-primary"
    },
    {
      name: "खाना / Food",
      icon: ShoppingCart,
      budgeted: 4000,
      spent: 3800,
      color: "bg-gradient-success"
    },
    {
      name: "यातायात / Transport",
      icon: Car,
      budgeted: 1500,
      spent: 1200,
      color: "bg-gradient-warm"
    },
    {
      name: "स्वास्थ्य / Health",
      icon: Heart,
      budgeted: 1000,
      spent: 500,
      color: "bg-gradient-danger"
    }
  ];

  const totalBudgeted = budgetCategories.reduce((sum, cat) => sum + cat.budgeted, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const savings = parseInt(monthlyIncome) - totalSpent;

  const recentTransactions = [
    { date: "आज / Today", description: "किराना / Groceries", amount: -450, category: "खाना / Food" },
    { date: "कल / Yesterday", description: "बस का किराया / Bus Fare", amount: -25, category: "यातायात / Transport" },
    { date: "2 दिन पहले / 2 days ago", description: "दवाई / Medicine", amount: -200, category: "स्वास्थ्य / Health" },
    { date: "3 दिन पहले / 3 days ago", description: "बिजली का बिल / Electricity", amount: -800, category: "घर का खर्च / Household" }
  ];

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
              <Wallet className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">बजट / Budget Manager</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Budget Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">आय / Income</p>
                  <p className="text-xl font-bold text-primary">₹{monthlyIncome}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-danger rounded-full flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-destructive-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">खर्च / Expenses</p>
                  <p className="text-xl font-bold text-destructive">₹{totalSpent}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">बचत / Savings</p>
                  <p className="text-xl font-bold text-success">₹{savings}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                  <PieChart className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">बजट का उपयोग / Budget Used</p>
                  <p className="text-xl font-bold text-accent">{Math.round((totalSpent/totalBudgeted) * 100)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Income Setting */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>मासिक आय / Monthly Income</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <Label htmlFor="income">आपकी मासिक आय / Your Monthly Income (₹)</Label>
                <Input
                  id="income"
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button>अपडेट करें / Update</Button>
            </div>
          </CardContent>
        </Card>

        {/* Budget Categories */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>बजट श्रेणियां / Budget Categories</span>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                नई श्रेणी / Add Category
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {budgetCategories.map((category, index) => {
              const percentage = (category.spent / category.budgeted) * 100;
              const isOverBudget = category.spent > category.budgeted;
              
              return (
                <div key={index} className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          ₹{category.spent} / ₹{category.budgeted}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${isOverBudget ? 'text-destructive' : 'text-success'}`}>
                        ₹{category.budgeted - category.spent} {isOverBudget ? 'अधिक / Over' : 'बचे / Left'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {percentage.toFixed(1)}% उपयोग / Used
                      </p>
                    </div>
                  </div>
                  <Progress 
                    value={Math.min(percentage, 100)} 
                    className={`h-3 ${isOverBudget ? '[&>div]:bg-destructive' : ''}`}
                  />
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Minus className="h-4 w-4 mr-1" />
                      खर्च जोड़ें / Add Expense
                    </Button>
                    <Button variant="outline" size="sm">
                      संपादित करें / Edit
                    </Button>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>हाल के लेनदेन / Recent Transactions</span>
              <Button variant="outline" size="sm">
                सभी देखें / View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date} • {transaction.category}</p>
                  </div>
                  <p className={`font-medium ${transaction.amount < 0 ? 'text-destructive' : 'text-success'}`}>
                    {transaction.amount < 0 ? '-' : '+'}₹{Math.abs(transaction.amount)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button className="h-16 text-lg">
            <Plus className="h-6 w-6 mr-2" />
            खर्च जोड़ें / Add Expense
          </Button>
          <Button variant="outline" className="h-16 text-lg">
            <Target className="h-6 w-6 mr-2" />
            बजट लक्ष्य सेट करें / Set Budget Goal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Budget;