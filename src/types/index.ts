export interface Product {
  id: string;
  name: string;
  price: number;
  image: string; // URL for the image
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

export type ThemeType = "light" | "dark";

export interface ThemeColors {
  background: string;
  text: string;
  card: string;
  primary: string;
  border: string;
}
