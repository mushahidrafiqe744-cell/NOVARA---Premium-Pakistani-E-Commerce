export interface Product {
  id: string;
  name: string;
  category: 'Fashion' | 'Beauty' | 'Electronics' | 'Home & Living' | 'Accessories' | 'Sports' | 'Watches' | 'Lifestyle';
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage: string;
  badge?: string;
  isFlashDeal?: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  stockCount: number;
  soldCount?: number;
  description: string;
  colors?: string[];
  sizes?: string[];
  brand: string;
}

export interface Category {
  id: string;
  name: string;
  productCount: string;
  image: string;
  span?: string; // For masonry layout grid spanning
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  logoText: string;
  image: string;
}

export interface Review {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  productName: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface TrendingCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}
