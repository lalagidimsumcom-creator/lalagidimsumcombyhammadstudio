export interface MenuItem {
  id: string;
  title: string;
  price: string;
  image: string;
  badge?: string;
  orderText: string;
  orderUrl: string;
}

export interface MenuTab {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  product: string;
  comment: string;
  avatar?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}
