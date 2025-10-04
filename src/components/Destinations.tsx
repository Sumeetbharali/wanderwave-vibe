import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import shillongImg from "@/assets/shillong.jpg";
import arunachalImg from "@/assets/arunachal.jpg";
import nagalandImg from "@/assets/nagaland.jpg";
import assamImg from "@/assets/assam.jpg";
import meghalayaImg from "@/assets/meghalaya.jpg";
import manipurImg from "@/assets/manipur.jpg";

const destinations = [
  {
    name: "Shillong, Meghalaya",
    description: "Scotland of the East with stunning waterfalls",
    price: "₹12,999",
    image: shillongImg,
  },
  {
    name: "Tawang, Arunachal Pradesh",
    description: "Mystical monasteries in the Himalayas",
    price: "₹18,999",
    image: arunachalImg,
  },
  {
    name: "Kohima, Nagaland",
    description: "Rich tribal culture and heritage",
    price: "₹14,999",
    image: nagalandImg,
  },
  {
    name: "Kaziranga, Assam",
    description: "Wildlife sanctuary with one-horned rhinos",
    price: "₹11,999",
    image: assamImg,
  },
  {
    name: "Living Root Bridges, Meghalaya",
    description: "Nature's architectural marvels",
    price: "₹13,499",
    image: meghalayaImg,
  },
  {
    name: "Loktak Lake, Manipur",
    description: "Floating paradise with unique phumdis",
    price: "₹15,999",
    image: manipurImg,
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Top Destinations
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the breathtaking beauty of North East India's hidden gems
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="group cursor-pointer animate-fade-in-up shadow-card hover:shadow-elevated transition-smooth rounded-2xl overflow-hidden bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm font-medium">North East India</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      Starting from
                    </span>
                    <p className="text-2xl font-bold text-primary">
                      {destination.price}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
