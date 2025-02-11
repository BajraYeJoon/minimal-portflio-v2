import CommonTitle from '../components/common/CommonTitle';

export function Hero() {
  return (
    <section className="min-h-[70vh] pt-[180px] pb-[80px] justify-center">
      <div className="flex flex-col gap-2 *:uppercase *:leading-[9rem]">
        <CommonTitle variant="mainHeading">Hi, I'm Binaya</CommonTitle>
        <CommonTitle variant="mainHeading">Bajracharya</CommonTitle>
        <CommonTitle variant="mainHeading">Frontend Developer</CommonTitle>
      </div>
    </section>
  );
}
