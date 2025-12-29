import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 lg:p-16 shadow-[var(--shadow-elegant)] border border-border/50">
            <div className="text-center space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready to Break Down
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Communication Barriers?
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of users making communication accessible for everyone. 
                Start translating sign language today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button variant="hero" size="lg" className="group">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="w-4 h-4" />
                  Contact Sales
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground pt-4">
                No credit card required • Free forever • Premium features available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
