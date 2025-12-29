import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import signHello from "@/assets/sign-hello.jpg";
import signHelp from "@/assets/sign-help.jpg";

const examples = [
  {
    sign: signHello,
    word: "Hello",
    description: "Waving hand near the face"
  },
  {
    sign: signHelp,
    word: "Help",
    description: "Fist on open palm"
  }
];

const TranslationDemo = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            See It In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch how our AI instantly translates sign language gestures into text
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {examples.map((example, index) => (
            <Card key={index} className="border-border/50 bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center gap-6 p-8">
                  <div className="flex-1 space-y-3">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-4 flex items-center justify-center">
                      <img 
                        src={example.sign} 
                        alt={`Sign language gesture for ${example.word}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      {example.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        "{example.word}"
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Translated Text
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TranslationDemo;
