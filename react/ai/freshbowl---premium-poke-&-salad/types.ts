export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  MENU = 'menu',
  FRANCHISE = 'franchise',
  CONTACT = 'contact'
}