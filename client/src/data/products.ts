// This file serves as a static data backup and type reference
// The actual data is served from the backend API

import type { Product, Category } from "@/lib/types";

export const sampleProducts: Product[] = [
  {
    id: 1,
    name: "10% Vitamin C Face Serum",
    slug: "vitamin-c-face-serum",
    description: "A powerful antioxidant serum that brightens skin and reduces signs of aging with 10% stable Vitamin C.",
    shortDescription: "Glowing, Brighter Skin in 5 Days",
    price: "545",
    category: "skincare",
    subcategory: "serums",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    rating: "4.6",
    reviewCount: 2847,
    inStock: true,
    featured: true,
    bestseller: true,
    newLaunch: false,
    saleOffer: "B1G1FREE",
    size: "30ml",
    ingredients: ["Vitamin C", "Hyaluronic Acid", "Niacinamide"],
    benefits: ["Brightens skin", "Reduces dark spots", "Anti-aging"],
    howToUse: "Apply 2-3 drops to clean face in the morning. Follow with moisturizer and sunscreen.",
    tags: ["antioxidant", "brightening", "vitamin-c"]
  },
  // Add more sample products as needed...
];

export const sampleCategories: Category[] = [
  {
    id: 1,
    name: "Skincare",
    slug: "skincare",
    description: "Transform your skin with our scientifically-formulated skincare collection",
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    productCount: 8
  },
  {
    id: 2,
    name: "Haircare",
    slug: "haircare", 
    description: "Nourish and strengthen your hair with our comprehensive range",
    imageUrl: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    productCount: 6
  },
  {
    id: 3,
    name: "Makeup",
    slug: "makeup",
    description: "Express your unique style with our premium makeup collection",
    imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    productCount: 6
  },
  {
    id: 4,
    name: "Body Care",
    slug: "bodycare",
    description: "Pamper your skin with our luxurious body care collection",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    productCount: 4
  }
];
