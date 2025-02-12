export interface Navigation {
  name: string;
  path: string;
}

export type Service =
  | 'UI/UX Design'
  | 'Web Development'
  | 'Digital Design'
  | 'Brand Identity';

export type WorkSize = 'normal' | 'large';

export interface FeaturedWork {
  title: string;
  image: string;
  services: Service[];
  link: string;
  size?: WorkSize;
}
