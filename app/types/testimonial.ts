export interface TestimonialProps {
  number: string;
  quote: string;
  index: number;
  isFirst: boolean;
  author: {
    name: string;
    company: string;
    position: string;
    image: string;
  };
}
