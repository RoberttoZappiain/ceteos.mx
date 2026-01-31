export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  rating?: number;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Category {
  id: number;
  name: string;
  iconClass?: string;
  href?: string;
}