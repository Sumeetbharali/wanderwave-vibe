import { Shield, DollarSign, HeadphonesIcon, Award, Globe, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Curated Experiences",
    description: "Handpicked destinations and authentic local experiences",
  },
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "Competitive pricing with transparent costs and no hidden fees",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer service for a worry-free journey",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Travel insurance and safety protocols for peace of mind",
  },
  {
    icon: Globe,
    title: "Expert Guides",
    description: "Local experts who know every hidden gem and story",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Supporting local communities and sustainable tourism",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose WanderWave
          </h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for unforgettable travel experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-full p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-smooth border border-border/50">
                  {/* Icon */}
                  <div className="mb-6 inline-flex">
                    <div className="p-4 rounded-xl gradient-ocean group-hover:scale-110 transition-smooth">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
