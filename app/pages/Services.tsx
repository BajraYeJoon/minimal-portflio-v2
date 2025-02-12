import CommonTitle from '~/components/common/CommonTitle';
import SectionHeader from '~/components/common/SectionHeader';
import { serviceCategories } from '~/constant/data';

export default function Services() {
  return (
    <section
      className="border-b-2 border-surface flex flex-col gap-20 py-20"
      id="services"
    >
      <SectionHeader smallHeading="Services" title="What I Do" />

      <div className="flex flex-col gap-14">
        {serviceCategories?.map((category) => (
          <div key={category?.title} className="flex group flex-col">
            <div className="h-0.5 group-hover:h-0.5 w-full bg-subtle animated-transition-colors group-hover:bg-surface mb-14" />

            <div className="flex gap-8  w-full flex-nowrap items-center justify-start">
              <CommonTitle variant="service-heading" className="basis-1/2">
                {category.title}
              </CommonTitle>

              {/* Description */}
              <div className="grid grid-cols-1 basis-1/2 md:grid-cols-2 gap-x-10 gap-y-4">
                <div className="flex flex-col gap-1">
                  {category?.services?.slice(0, 3)?.map((service) => (
                    <CommonTitle
                      key={service}
                      variant="par-small"
                      className="text-muted group-hover:text-surface animated-transition-colors"
                    >
                      {service}
                    </CommonTitle>
                  ))}
                </div>

                <div className="flex flex-col gap-1">
                  {category?.services?.slice(3)?.map((service) => (
                    <CommonTitle
                      key={service}
                      variant="par-small"
                      className="text-muted group-hover:text-surface animated-transition-colors"
                    >
                      {service}
                    </CommonTitle>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
