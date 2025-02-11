export interface NavItem {
  name: string;
  path: string;
}

export interface Navigation {
  main: NavItem[];
  features: NavItem[];
  support: NavItem[];
}
