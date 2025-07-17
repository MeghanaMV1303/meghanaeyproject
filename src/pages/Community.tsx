import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share, 
  ArrowLeft,
  Trophy,
  Calendar,
  MapPin,
  Star,
  TrendingUp,
  Handshake
} from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  const successStories = [
    {
      name: "सुनीता देवी / Sunita Devi",
      location: "बिहार / Bihar",
      business: "सिलाई केंद्र / Tailoring Center",
      savings: "₹25,000",
      timeframe: "8 महीने / 8 months",
      image: "/placeholder.svg",
      story: "मैंने छोटी सी शुरुआत से अपना सिलाई का काम बढ़ाया / I grew my tailoring business from small beginnings"
    },
    {
      name: "रीता शर्मा / Rita Sharma",
      location: "उत्तर प्रदेश / UP",
      business: "डेयरी व्यापार / Dairy Business",
      savings: "₹18,000",
      timeframe: "6 महीने / 6 months",
      image: "/placeholder.svg",
      story: "डेयरी से अच्छी आमदनी हो रही है / Dairy business is giving good income"
    }
  ];

  const mentors = [
    {
      name: "प्रिया गुप्ता / Priya Gupta",
      expertise: "व्यापार सलाहकार / Business Advisor",
      experience: "12 साल का अनुभव / 12 years experience",
      helped: "500+ महिलाएं / women",
      rating: 4.9,
      image: "/placeholder.svg"
    },
    {
      name: "अनिता सिंह / Anita Singh",
      expertise: "वित्तीय सलाहकार / Financial Advisor",
      experience: "8 साल का अनुभव / 8 years experience",
      helped: "300+ महिलाएं / women",
      rating: 4.8,
      image: "/placeholder.svg"
    }
  ];

  const discussions = [
    {
      author: "माला देवी / Mala Devi",
      title: "छोटे व्यापार के लिए लोन कैसे मिलेगा? / How to get loan for small business?",
      replies: 12,
      likes: 8,
      time: "2 घंटे पहले / 2 hours ago",
      category: "व्यापार / Business"
    },
    {
      author: "गीता पटेल / Geeta Patel",
      title: "सब्जी का व्यापार शुरू करना चाहती हूं / Want to start vegetable business",
      replies: 18,
      likes: 15,
      time: "5 घंटे पहले / 5 hours ago",
      category: "शुरुआत / Getting Started"
    },
    {
      author: "कमला शर्मा / Kamala Sharma",
      title: "बचत खाते में कितना ब्याज मिलता है? / What interest rate in savings account?",
      replies: 7,
      likes: 5,
      time: "1 दिन पहले / 1 day ago",
      category: "बचत / Savings"
    }
  ];

  const upcomingEvents = [
    {
      title: "महिला उद्यमी मेला / Women Entrepreneur Fair",
      date: "15 जनवरी / January 15",
      time: "10:00 AM",
      location: "स्थानीय समुदायिक केंद्र / Local Community Center",
      attendees: 45
    },
    {
      title: "वित्तीय साक्षरता कार्यशाला / Financial Literacy Workshop",
      date: "20 जनवरी / January 20",
      time: "2:00 PM",
      location: "ऑनलाइन / Online",
      attendees: 120
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
              <Users className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">समुदाय / Community</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">सदस्य / Members</p>
                  <p className="text-2xl font-bold text-primary">2,847</p>
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
                  <p className="text-sm text-muted-foreground">सफल कहानियां / Success Stories</p>
                  <p className="text-2xl font-bold text-success">156</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">मेंटर्स / Mentors</p>
                  <p className="text-2xl font-bold text-accent">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-danger rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-destructive-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">चर्चाएं / Discussions</p>
                  <p className="text-2xl font-bold text-destructive">89</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>सफलता की कहानियां / Success Stories</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {successStories.map((story, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={story.image} />
                    <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{story.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {story.location}
                        </p>
                      </div>
                      <Badge variant="secondary">{story.business}</Badge>
                    </div>
                    <p className="mt-2 text-muted-foreground">{story.story}</p>
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="text-sm">
                        <span className="font-medium text-success">{story.savings}</span>
                        <span className="text-muted-foreground"> बचत / savings</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {story.timeframe}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              और कहानियां देखें / View More Stories
            </Button>
          </CardContent>
        </Card>

        {/* Mentors & Discussions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mentors */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span>मेंटर्स / Mentors</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mentors.map((mentor, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={mentor.image} />
                    <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground">{mentor.expertise}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-muted-foreground">{mentor.experience}</span>
                      <span className="text-xs text-success">{mentor.helped}</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs ml-1">{mentor.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm">
                    मिलें / Connect
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Active Discussions */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>सक्रिय चर्चाएं / Active Discussions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {discussions.map((discussion, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{discussion.category}</Badge>
                    <span className="text-xs text-muted-foreground">{discussion.time}</span>
                  </div>
                  <h3 className="font-medium text-sm mb-1">{discussion.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">द्वारा / by {discussion.author}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      {discussion.replies} उत्तर / replies
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {discussion.likes}
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                नई चर्चा शुरू करें / Start New Discussion
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>आगामी कार्यक्रम / Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <span>{event.date} • {event.time}</span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </span>
                    <span>{event.attendees} भाग लेने वाले / attendees</span>
                  </div>
                </div>
                <Button>
                  रजिस्टर करें / Register
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;