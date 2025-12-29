import { Card, CardContent } from "@/components/ui/card";
import { Camera, Zap, Globe, Brain, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Real-Time Recognition",
    description: "Instant sign language detection through your camera with advanced computer vision technology.",
    gradient: "from-primary/10 to-primary/5"
  },
  {
    icon: Brain,
    title: "AI-Powered Accuracy",
    description: "Machine learning models trained on millions of gestures for precise interpretation.",
    gradient: "from-secondary/10 to-secondary/5"
  },
  {
    icon: Globe,
    title: "Multiple Languages",
    description: "Support for ASL, BSL, JSL, and 50+ sign language systems worldwide.",
    gradient: "from-accent/10 to-accent/5"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second translation speeds for natural, fluid conversations.",
    gradient: "from-primary/10 to-secondary/5"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens locally on your device. Your conversations stay private.",
    gradient: "from-secondary/10 to-primary/5"
  },
  {
    icon: Users,
    title: "Learning Tools",
    description: "Interactive lessons and practice modes to help you learn sign language.",
    gradient: "from-accent/10 to-primary/5"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Powerful Features for
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Advanced technology meets intuitive design to make sign language accessible to all
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
