import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CartProvider } from "./app/context/CartContext";
import { ThemeProvider } from "./app/context/ThemeContext";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <CartProvider>
          <AppNavigator />
        </CartProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
