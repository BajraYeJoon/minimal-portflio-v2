import { Button } from '~/components/common/Button';
import CommonTitle from '~/components/common/CommonTitle';
import SectionHeader from '~/components/common/SectionHeader';

const GRID_IMAGES = [
  '/public/assets/asset 0.jpeg',
  '/public/assets/asset 1.jpeg',
  '/public/assets/asset 2.jpeg',
  '/public/assets/asset 3.jpeg',
  '/public/assets/asset 4.jpeg',
  '/public/assets/asset 5.jpeg',
  '/public/assets/asset 6.jpeg',
  '/public/assets/asset 7.jpeg',
  '/public/assets/asset 8.jpeg',
];

export default function AboutMeProjectReveal() {
  return (
    <section
      className="border-t-2 border-b-2 border-surface flex flex-col  py-24"
      id="about"
    >
      {/* Left side - Info */}
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-2 gap-2">
          <CommonTitle variant="par-large" className="text-surface">
            Based in San Francisco
            <br />
            and Working Worldwide.
          </CommonTitle>
          <CommonTitle variant="par-medium" className="text-surface text-right">
            Passionate Designer and Developer Crafting Visually Captivating
            Websites with No-Code Solutions
          </CommonTitle>
        </div>

        {/* Right side - Image Grid */}
        <div className="grid grid-cols-3 gap-4">
          {GRID_IMAGES.map((imagePath, i) => (
            <div
              key={`grid-image-${imagePath}`}
              className="aspect-[4/3] bg-subtle rounded-md overflow-hidden"
            >
              <img
                src={imagePath}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8">
          <SectionHeader smallHeading="About Me" />
          <div className="flex flex-col gap-32">
            <CommonTitle variant="par-extra-large">
              I collaborate with global clients to Cultivate Compelling and
              Immersive Digital Experiences Through The Realms of Design and
              Development
            </CommonTitle>
            <div className="grid grid-cols-2 gap-20">
              <div className="flex flex-col gap-5">
                <CommonTitle variant="mainHeading">120+</CommonTitle>
                <div className="h-px bg-surface w-full" />
                <CommonTitle variant="par-small">
                  Completed Projects
                </CommonTitle>
              </div>
              <div className="flex flex-col gap-5">
                <CommonTitle variant="mainHeading">8+</CommonTitle>
                <div className="h-px bg-surface w-full" />
                <CommonTitle variant="par-small">
                  Years of Experience
                </CommonTitle>
              </div>
            </div>
            {/* Button */}
            <Button href="/about">More About Me</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
