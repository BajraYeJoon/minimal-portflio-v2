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
      className="border-t-2 border-b-2 border-surface flex flex-col py-14"
      id="about"
    >
      {/* Left side - Info */}
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-2 gap-2 leading-normal">
          <CommonTitle variant="par-medium">
            Based in Bhaktapur, Nepal
            <br />
            and Working at AITC
          </CommonTitle>
          <CommonTitle variant="par-medium" align="right">
            Passionate Designer and Developer Crafting Visually Captivating
            Websites with a Touch of Modernity
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
          <div className="flex flex-col gap-28">
            <CommonTitle variant="par-extra-large">
              I thrive on the challenge of transforming ideas into creating
              better software applications and visully stunning websites that
              grows business and growth.
            </CommonTitle>
            <div className="grid grid-cols-2 gap-20 leading-none">
              <div className="flex flex-col gap-5">
                <CommonTitle variant="mainHeading">10+</CommonTitle>
                <div className="h-px bg-surface w-full" />
                <CommonTitle variant="par-small">
                  Completed Projects
                </CommonTitle>
              </div>
              <div className="flex flex-col gap-5">
                <CommonTitle variant="mainHeading">1+</CommonTitle>
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
