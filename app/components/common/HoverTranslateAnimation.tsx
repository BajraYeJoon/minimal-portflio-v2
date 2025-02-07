const HoverTranslateAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="group relative overflow-hidden w-full text-center">
      <span className="inline-block text-sm md:text-base font-medium transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="inline-block text-sm md:text-base font-medium absolute top-0 left-0 w-full transition-transform duration-300 translate-y-full group-hover:translate-y-0">
        {children}
      </span>
    </div>
  );
};

export default HoverTranslateAnimation;
