import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import heroBackground from '@/assets/hero-bg.jpg';
import shillongImage from '@/assets/shillong.jpg';

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={shillongImage}
      bgImageSrc={heroBackground}
      title="Discover Your Next Adventure"
      date="WanderWave"
      scrollToExpand="Scroll to Explore"
      textBlend
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">
          Unforgettable Travel Experiences
        </h2>
        <p className="text-lg mb-8 text-muted-foreground">
          Explore the breathtaking landscapes of Northeast India with WanderWave. 
          From the misty hills of Meghalaya to the vibrant valleys of Arunachal, 
          we craft personalized journeys that create memories of a lifetime.
        </p>
        <p className="text-lg text-muted-foreground">
          Let us guide you through hidden trails, cultural experiences, and 
          adventures that will stay with you forever. Your perfect trip starts here.
        </p>
      </div>
    </ScrollExpandMedia>
  );
};

export default Hero;
