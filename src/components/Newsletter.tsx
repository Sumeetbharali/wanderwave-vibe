import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest travel deals and tips.",
      });
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-ocean opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          {/* Icon */}
          <div className="inline-flex mb-6">
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Travel Inspiration
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for exclusive deals, travel tips, and
            destination guides delivered to your inbox.
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-elevated">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 px-6 py-4 rounded-xl outline-none border border-white/20 focus:border-white/40 transition-smooth"
                required
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="whitespace-nowrap"
              >
                Subscribe
                <Send size={18} className="ml-2" />
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join 10,000+ travelers getting weekly inspiration
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
