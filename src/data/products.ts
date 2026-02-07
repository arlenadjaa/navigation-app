import { Product } from "../types";

// Default export for frameworks that treat files under /app as routes.
import React from "react";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Wireless Noise Cancelling Headphones",
    price: 299.99,
    description: "Premium sound quality with active noise cancellation.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    id: "2",
    name: "Smart Watch Series 5",
    price: 399.0,
    description: "Stay connected and track your fitness goals.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: "3",
    name: "Mechanical Gaming Keyboard",
    price: 129.5,
    description: "RGB backlit mechanical keyboard for pro gamers.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b91a91e?w=500&q=80",
  },
  {
    id: "4",
    name: "4K Action Camera",
    price: 249.0,
    description: "Capture your adventures in stunning 4K resolution.",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
  },
  {
    id: "5",
    name: "Minimalist Backpack",
    price: 89.99,
    description: "Water-resistant laptop backpack for daily commute.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
  },
];
const _ProductsRoute: React.FC = () => null;
export default _ProductsRoute;
