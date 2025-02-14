import CommonTitle from '~/components/common/CommonTitle';
import SectionHeader from '~/components/common/SectionHeader';
import { serviceCategories } from '~/constant/data';

export default function Services() {
  return (
    <section
      className="border-surface common-padding flex flex-col gap-20 border-b-2 py-20"
      id="services"
    >
      <SectionHeader smallHeading="Services" title="What I Do" />

      <div className="flex flex-col gap-14">
        {serviceCategories?.map((category) => (
          <div key={category?.title} className="group flex flex-col">
            <div className="bg-subtle animated-transition-colors group-hover:bg-surface mb-14 h-0.5 w-full group-hover:h-0.5" />

            <div className="flex w-full flex-nowrap items-center justify-start gap-8">
              <CommonTitle variant="service-heading" className="basis-1/2">
                {category.title}
              </CommonTitle>

              {/* Description */}
              <div className="grid basis-1/2 grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
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
