import { Product, Category, Brand, Review, TrendingCard } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'fashion',
    name: 'Fashion',
    productCount: '1,420+ Items',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    productCount: '650+ Items',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    productCount: '340+ Items',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'home',
    name: 'Home & Living',
    productCount: '890+ Items',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    productCount: '520+ Items',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'watches',
    name: 'Watches',
    productCount: '210+ Items',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
    span: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    productCount: '480+ Items',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Wireless Pro Active Noise Cancelling Headphones',
    category: 'Electronics',
    price: 7999,
    oldPrice: 11999,
    discount: 33,
    rating: 4.9,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
    badge: 'FLASH SALE',
    isFlashDeal: true,
    stockCount: 7,
    soldCount: 93,
    description: 'Immersive spatial audio, 40-hour battery life, and ultra-soft memory foam ear cushions crafted for luxury listening.',
    colors: ['Midnight Black', 'Platinum Silver', 'Rose Gold'],
    brand: 'VERTEX'
  },
  {
    id: 'prod-2',
    name: 'Chronos Sapphire Minimalist Automatic Watch',
    category: 'Watches',
    price: 18499,
    oldPrice: 24999,
    discount: 26,
    rating: 5.0,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
    badge: '#1 BEST SELLER',
    isBestSeller: true,
    stockCount: 12,
    soldCount: 215,
    description: 'Swiss movement encased in surgical-grade stainless steel with scratch-resistant sapphire crystal glass.',
    colors: ['Silver / Charcoal', 'Rose Gold / Black', 'All Matte Black'],
    brand: 'NOVA'
  },
  {
    id: 'prod-3',
    name: 'Luminous Silk Glow Foundation & Primer Set',
    category: 'Beauty',
    price: 4299,
    oldPrice: 5999,
    discount: 28,
    rating: 4.8,
    reviewsCount: 512,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    badge: 'NEW',
    isNewArrival: true,
    stockCount: 24,
    soldCount: 180,
    description: 'Weightless hydrating formula that delivers an airbrushed, second-skin radiance that lasts 16 hours.',
    colors: ['Ivory 01', 'Beige 02', 'Sand 03', 'Honey 04'],
    brand: 'LUMI'
  },
  {
    id: 'prod-4',
    name: 'Oversized Raw Silk Tailored Blazer',
    category: 'Fashion',
    price: 12500,
    oldPrice: 16000,
    discount: 22,
    rating: 4.7,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    badge: 'TRENDING',
    isNewArrival: true,
    stockCount: 5,
    soldCount: 64,
    description: 'Impeccably draped structured blazer crafted from pure Pakistani raw silk with horn buttons.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Charcoal Gray', 'Ivory Cream', 'Deep Espresso'],
    brand: 'AUREL'
  },
  {
    id: 'prod-5',
    name: 'AeroGlide Ultra Lightweight Running Sneakers',
    category: 'Sports',
    price: 9899,
    oldPrice: 13999,
    discount: 29,
    rating: 4.9,
    reviewsCount: 230,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    badge: 'FLASH SALE',
    isFlashDeal: true,
    stockCount: 9,
    soldCount: 310,
    description: 'Engineered knit upper with responsive carbon-infused foam cushioning for gravity-defying comfort.',
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: ['Pure White', 'Obsidian Black', 'Slate Grey'],
    brand: 'ORBIT'
  },
  {
    id: 'prod-6',
    name: 'Minimalist Ceramic Pour-Over Coffee Set',
    category: 'Home & Living',
    price: 5499,
    oldPrice: 7500,
    discount: 27,
    rating: 4.8,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop',
    badge: 'POPULAR',
    stockCount: 15,
    soldCount: 142,
    description: 'Hand-glazed matte ceramic dripper, server, and double-wall glass mugs for the ultimate artisanal morning ritual.',
    brand: 'ELARA'
  },
  {
    id: 'prod-7',
    name: 'Horizon Smart Fitness & Sleep Tracker Ring',
    category: 'Electronics',
    price: 14999,
    oldPrice: 19999,
    discount: 25,
    rating: 4.9,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop',
    badge: '#2 BEST SELLER',
    isBestSeller: true,
    stockCount: 8,
    soldCount: 270,
    description: 'Titanium biometric ring monitoring heart rate variability, sleep stages, and body temperature 24/7.',
    sizes: ['Size 8', 'Size 9', 'Size 10', 'Size 11'],
    colors: ['Titanium Silver', 'Stealth Black', 'Brushed Gold'],
    brand: 'VERTEX'
  },
  {
    id: 'prod-8',
    name: 'Handcrafted Genuine Leather Tote Bag',
    category: 'Accessories',
    price: 11200,
    oldPrice: 15000,
    discount: 25,
    rating: 4.8,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
    badge: 'NEW',
    isNewArrival: true,
    stockCount: 11,
    soldCount: 155,
    description: 'Full-grain Italian calfskin leather with brass hardware, laptop compartment, and structured silhouette.',
    colors: ['Cognac Brown', 'Jet Black', 'Taupe'],
    brand: 'AUREL'
  },
  {
    id: 'prod-9',
    name: 'Aromatherapy Ultrasonic Marble Diffuser',
    category: 'Home & Living',
    price: 6800,
    oldPrice: 8999,
    discount: 24,
    rating: 4.9,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
    badge: 'FLASH SALE',
    isFlashDeal: true,
    stockCount: 6,
    soldCount: 190,
    description: 'Real white marble ultrasonic diffuser with warm ambient LED light modes for ultimate sanctuary ambiance.',
    brand: 'ELARA'
  },
  {
    id: 'prod-10',
    name: 'Ultra-HD 4K Action Camera with Gimbal',
    category: 'Electronics',
    price: 24999,
    oldPrice: 32000,
    discount: 22,
    rating: 4.7,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    badge: 'HOT',
    stockCount: 4,
    soldCount: 88,
    description: 'Capture cinematic 4K 120fps video with horizon-level stabilization and waterproof casing up to 15m.',
    brand: 'VERTEX'
  },
  {
    id: 'prod-11',
    name: 'Matte Liquid Velvet Lipstick Collection (Box of 4)',
    category: 'Beauty',
    price: 3499,
    oldPrice: 4999,
    discount: 30,
    rating: 4.9,
    reviewsCount: 420,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    badge: 'BEST VALUE',
    stockCount: 19,
    soldCount: 380,
    description: 'Transfer-proof, highly pigmented nude shades enriched with vitamin E and jojoba oil.',
    brand: 'LUMI'
  },
  {
    id: 'prod-12',
    name: 'Titanium Aviator Polarized Sunglasses',
    category: 'Accessories',
    price: 5999,
    oldPrice: 8500,
    discount: 29,
    rating: 4.8,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop',
    badge: 'TRENDING',
    isNewArrival: true,
    stockCount: 14,
    soldCount: 162,
    description: 'Ultra-lightweight Japanese titanium frames with anti-reflective polarized gradient lenses.',
    colors: ['Gold / Brown', 'Gunmetal / Grey'],
    brand: 'ORBIT'
  }
];

export const BRANDS: Brand[] = [
  { id: 'b1', name: 'NOVA', tagline: 'Precision Horology', logoText: 'NOVA', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400&auto=format&fit=crop' },
  { id: 'b2', name: 'AUREL', tagline: 'Luxury Apparel', logoText: 'AUREL', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&auto=format&fit=crop' },
  { id: 'b3', name: 'VERTEX', tagline: 'Acoustic & Tech', logoText: 'VERTEX', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop' },
  { id: 'b4', name: 'LUMI', tagline: 'Clean Beauty', logoText: 'LUMI', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop' },
  { id: 'b5', name: 'ORBIT', tagline: 'Active Lifestyle', logoText: 'ORBIT', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop' },
  { id: 'b6', name: 'ELARA', tagline: 'Modern Living', logoText: 'ELARA', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop' }
];

export const TRENDING_CARDS: TrendingCard[] = [
  {
    id: 't1',
    title: 'Tech Essentials',
    subtitle: 'Smart products for smarter living.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    category: 'Electronics'
  },
  {
    id: 't2',
    title: 'Everyday Style',
    subtitle: 'Upgrade your wardrobe with tailored silhouettes.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    category: 'Fashion'
  },
  {
    id: 't3',
    title: 'Beauty Rituals',
    subtitle: 'Your daily self-care essentials, elevated.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    category: 'Beauty'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    customerName: 'Ayesha Khan',
    location: 'Lahore, Pakistan',
    rating: 5,
    comment: 'The packaging and product quality of the Chronos watch blew me away. Delivery was exceptionally fast within 48 hours!',
    date: '2 days ago',
    productName: 'Chronos Sapphire Minimalist Automatic Watch',
    verified: true
  },
  {
    id: 'r2',
    customerName: 'Hamza Malik',
    location: 'Karachi, Pakistan',
    rating: 5,
    comment: 'Wireless Pro headphones have phenomenal active noise cancellation. NOVARA’s customer support on WhatsApp was super helpful.',
    date: '1 week ago',
    productName: 'Wireless Pro Active Noise Cancelling Headphones',
    verified: true
  },
  {
    id: 'r3',
    customerName: 'Zainab Tariq',
    location: 'Islamabad, Pakistan',
    rating: 5,
    comment: 'Finally a luxury Pakistani brand that delivers international quality standards. The silk blazer fits like a bespoke dream!',
    date: '3 days ago',
    productName: 'Oversized Raw Silk Tailored Blazer',
    verified: true
  },
  {
    id: 'r4',
    customerName: 'Usman Farooq',
    location: 'Faisalabad, Pakistan',
    rating: 5,
    comment: 'Ordered the AeroGlide sneakers. Extremely comfortable for daily jogs and sleek aesthetic. Will definitely order again.',
    date: '2 weeks ago',
    productName: 'AeroGlide Ultra Lightweight Running Sneakers',
    verified: true
  }
];

export const INSTAGRAM_PHOTOS = [
  { id: 'i1', url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop', likes: '1.4k' },
  { id: 'i2', url: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600&auto=format&fit=crop', likes: '2.1k' },
  { id: 'i3', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop', likes: '1.8k' },
  { id: 'i4', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop', likes: '980' },
  { id: 'i5', url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop', likes: '3.4k' },
  { id: 'i6', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop', likes: '1.6k' }
];

export const POPULAR_SEARCHES = [
  'Smart Watch', 'Sneakers', 'Perfume', 'Headphones', 'Skincare', 'Blazer', 'Tote Bag', 'Earrings'
];
