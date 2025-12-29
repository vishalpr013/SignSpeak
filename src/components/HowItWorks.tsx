import { Card, CardContent } from "@/components/ui/card";
import { Camera, Cpu, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Capture Gestures",
    description: "Allow camera access and start signing. Our system tracks hand movements and facial expressions in real-time."
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Processing",
    description: "Advanced neural networks analyze the gestures and compare them against our extensive sign language database."
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "Instant Translation",
    description: "Receive immediate text or speech output in your preferred language with contextual understanding."
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Continuous Learning",
    description: "The system improves with use, adapting to individual signing styles and regional variations."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How It <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Four simple steps to bridge the communication gap
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-border/50 bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 h-full">
                <CardContent className="p-6 space-y-4 text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-2">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm font-bold text-primary">{step.step}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-4 z-20">
                  <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
