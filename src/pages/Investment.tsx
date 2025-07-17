import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  ArrowLeft,
  PiggyBank,
  Shield,
  Target,
  AlertTriangle,
  CheckCircle,
  Info,
  BarChart3,
  Calculator,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

const Investment = () => {
  const investmentOptions = [
    {
      name: "सावधि जमा / Fixed Deposit",
      returns: "6-7%",
      risk: "बहुत कम / Very Low",
      duration: "1-5 साल / years",
      minAmount: "₹1,000",
      description: "सबसे सुरक्षित निवेश / Safest investment option",
      riskLevel: 1,
      color: "bg-gradient-success"
    },
    {
      name: "सार्वजनिक भविष्य निधि / PPF",
      returns: "7-8%",
      risk: "कम / Low",
      duration: "15 साल / years",
      minAmount: "₹500",
      description: "कर छूट के साथ / With tax benefits",
      riskLevel: 1,
      color: "bg-gradient-primary"
    },
    {
      name: "राष्ट्रीय बचत पत्र / NSC",
      returns: "6.8%",
      risk: "कम / Low",
      duration: "5 साल / years",
      minAmount: "₹1,000",
      description: "सरकारी गारंटी / Government guaranteed",
      riskLevel: 1,
      color: "bg-gradient-warm"
    },
    {
      name: "मासिक आय योजना / MIS",
      returns: "6.6%",
      risk: "कम / Low",
      duration: "5 साल / years",
      minAmount: "₹1,000",
      description: "मासिक आय / Monthly income",
      riskLevel: 2,
      color: "bg-gradient-success"
    }
  ];

  const riskFactors = [
    {
      factor: "मुद्रास्फीति जोखिम / Inflation Risk",
      description: "आपके पैसे की खरीदारी शक्ति कम हो सकती है / Your money's buying power may decrease",
      severity: "मध्यम / Medium"
    },
    {
      factor: "तरलता जोखिम / Liquidity Risk",
      description: "जरूरत के समय पैसे नहीं निकाल सकते / Cannot withdraw money when needed",
      severity: "कम / Low"
    },
    {
      factor: "ब्याज दर जोखिम / Interest Rate Risk",
      description: "ब्याज दरों में बदलाव / Changes in interest rates",
      severity: "कम / Low"
    }
  ];

  const myInvestments = [
    {
      name: "सावधि जमा / Fixed Deposit",
      amount: "₹10,000",
      returns: "₹2,100",
      duration: "3 साल / 3 years",
      maturity: "मार्च 2026 / March 2026",
      status: "सक्रिय / Active"
    },
    {
      name: "बचत खाता / Savings Account",
      amount: "₹2,450",
      returns: "₹98",
      duration: "चालू / Ongoing",
      maturity: "N/A",
      status: "सक्रिय / Active"
    }
  ];

  const tips = [
    {
      title: "छोटी शुरुआत करें / Start Small",
      description: "महीने में ₹500 से शुरू करें / Start with ₹500 per month"
    },
    {
      title: "नियमित निवेश / Regular Investment",
      description: "हर महीने निर्धारित राशि जमा करें / Deposit fixed amount every month"
    },
    {
      title: "जोखिम समझें / Understand Risk",
      description: "ज्यादा रिटर्न = ज्यादा जोखिम / Higher returns = Higher risk"
    },
    {
      title: "लंबी अवधि / Long Term",
      description: "कम से कम 5 साल के लिए निवेश करें / Invest for at least 5 years"
    }
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
              <TrendingUp className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">निवेश / Investment</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Investment Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <PiggyBank className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">कुल निवेश / Total Investment</p>
                  <p className="text-2xl font-bold text-primary">₹12,450</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">अनुमानित रिटर्न / Expected Returns</p>
                  <p className="text-2xl font-bold text-success">₹2,198</p>
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
                  <p className="text-sm text-muted-foreground">औसत रिटर्न / Average Return</p>
                  <p className="text-2xl font-bold text-accent">6.2%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <Card className="shadow-soft border-amber-200 bg-amber-50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-1" />
              <div>
                <h3 className="font-medium text-amber-800">महत्वपूर्ण सूचना / Important Notice</h3>
                <p className="text-sm text-amber-700 mt-1">
                  निवेश से पहले सलाह लें। केवल वही पैसा निवेश करें जिसकी तुरंत जरूरत नहीं है। / 
                  Take advice before investing. Only invest money you don't need immediately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* My Current Investments */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>मेरे निवेश / My Investments</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {myInvestments.map((investment, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium">{investment.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      अवधि / Duration: {investment.duration}
                    </p>
                  </div>
                  <Badge variant="secondary">{investment.status}</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">निवेश / Investment</p>
                    <p className="font-medium text-primary">{investment.amount}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">रिटर्न / Returns</p>
                    <p className="font-medium text-success">{investment.returns}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">परिपक्वता / Maturity</p>
                    <p className="font-medium">{investment.maturity}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Investment Options */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>निवेश विकल्प / Investment Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {investmentOptions.map((option, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center`}>
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{option.name}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                  <Badge variant={option.riskLevel === 1 ? "secondary" : "outline"}>
                    {option.risk}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">रिटर्न / Returns</p>
                    <p className="font-medium text-success">{option.returns}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">अवधि / Duration</p>
                    <p className="font-medium">{option.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">न्यूनतम राशि / Min Amount</p>
                    <p className="font-medium">{option.minAmount}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <div
                          key={star}
                          className={`w-2 h-2 rounded-full ${
                            star <= option.riskLevel ? 'bg-amber-400' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">जोखिम / Risk</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button size="sm">
                    निवेश करें / Invest Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calculator className="h-4 w-4 mr-2" />
                    कैलकुलेटर / Calculator
                  </Button>
                  <Button variant="outline" size="sm">
                    <Info className="h-4 w-4 mr-2" />
                    विवरण / Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Risk Factors */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <span>जोखिम कारक / Risk Factors</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {riskFactors.map((risk, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium">{risk.factor}</h3>
                    <Badge variant="outline">{risk.severity}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{risk.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Investment Tips */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>निवेश सुझाव / Investment Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <CheckCircle className="h-5 w-5 text-success mt-1" />
                  <div>
                    <h3 className="font-medium">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button className="h-16 text-lg">
            <TrendingUp className="h-6 w-6 mr-2" />
            निवेश शुरू करें / Start Investing
          </Button>
          <Button variant="outline" className="h-16 text-lg">
            <Calculator className="h-6 w-6 mr-2" />
            निवेश कैलकुलेटर / Investment Calculator
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Investment;