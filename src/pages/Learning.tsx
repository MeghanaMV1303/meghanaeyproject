import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Clock, 
  Star,
  ArrowLeft,
  Target,
  Users,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Learning = () => {
  const lessons = [
    {
      id: 1,
      title: "बचत की शुरुआत / Starting to Save",
      description: "छोटी मात्रा में बचत कैसे करें / How to save small amounts daily",
      progress: 75,
      duration: "15 मिनट / 15 min",
      status: "in-progress"
    },
    {
      id: 2,
      title: "बजट बनाना / Creating Budget",
      description: "घर का बजट कैसे बनाएं / How to create household budget",
      progress: 100,
      duration: "20 मिनट / 20 min",
      status: "completed"
    },
    {
      id: 3,
      title: "निवेश की समझ / Understanding Investment",
      description: "सुरक्षित निवेश के तरीके / Safe investment methods",
      progress: 0,
      duration: "25 मिनट / 25 min",
      status: "not-started"
    },
    {
      id: 4,
      title: "व्यापार योजना / Business Planning",
      description: "छोटा व्यापार शुरू करने की योजना / Small business planning",
      progress: 30,
      duration: "30 मिनट / 30 min",
      status: "in-progress"
    }
  ];

  const achievements = [
    { title: "पहला पाठ / First Lesson", earned: true },
    { title: "एक सप्ताह / One Week", earned: true },
    { title: "बचत गुरु / Savings Master", earned: false },
    { title: "निवेश शुरुआत / Investment Starter", earned: false }
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
              <BookOpen className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">सीखें / Learning Center</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">पूर्ण पाठ / Completed</p>
                  <p className="text-2xl font-bold text-success">2/4</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">कुल समय / Total Time</p>
                  <p className="text-2xl font-bold text-accent">45 मिनट / min</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">उपलब्धियां / Achievements</p>
                  <p className="text-2xl font-bold text-primary">2/4</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Lesson */}
        <Card className="shadow-soft border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <span>आज का पाठ / Today's Lesson</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                <div className="w-16 h-16 bg-gradient-success rounded-lg flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-success-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">बचत की शुरुआत / Starting to Save</h3>
                  <p className="text-muted-foreground">
                    छोटी मात्रा में बचत कैसे करें / How to save small amounts daily
                  </p>
                  <div className="mt-3 space-y-2">
                    <Progress value={75} className="h-3" />
                    <p className="text-sm text-muted-foreground">75% पूर्ण / Complete • 5 मिनट बचे / min left</p>
                  </div>
                </div>
                <Button className="px-6 py-3 h-auto">
                  <Play className="h-5 w-5 mr-2" />
                  जारी रखें / Continue
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* All Lessons */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>सभी पाठ / All Lessons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  lesson.status === 'completed' ? 'bg-gradient-success' :
                  lesson.status === 'in-progress' ? 'bg-gradient-warm' :
                  'bg-muted'
                }`}>
                  {lesson.status === 'completed' ? (
                    <CheckCircle className="h-6 w-6 text-success-foreground" />
                  ) : lesson.status === 'in-progress' ? (
                    <Play className="h-6 w-6 text-accent-foreground" />
                  ) : (
                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground">{lesson.description}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                    {lesson.progress > 0 && (
                      <div className="flex-1 max-w-24">
                        <Progress value={lesson.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                </div>
                <Button variant={lesson.status === 'completed' ? 'outline' : 'default'} size="sm">
                  {lesson.status === 'completed' ? 'फिर देखें / Review' :
                   lesson.status === 'in-progress' ? 'जारी रखें / Continue' :
                   'शुरू करें / Start'}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span>उपलब्धियां / Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-4 rounded-lg text-center ${
                  achievement.earned ? 'bg-gradient-success text-success-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <Award className={`h-8 w-8 mx-auto mb-2 ${achievement.earned ? '' : 'opacity-50'}`} />
                  <p className="text-sm font-medium">{achievement.title}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Learning;