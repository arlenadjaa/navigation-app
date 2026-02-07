import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { Product } from "../types";

type Props = {
  product: Product;
  onPress?: () => void;
};

const ProductItem: React.FC<Props> = ({ product, onPress }) => {
  const { addToCart } = useCart();
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { borderColor: colors.border }]}
    >
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.name, { color: colors.text }]}>
          {product.name}
        </Text>
        <Text style={[styles.price, { color: colors.text }]}>
          ${product.price.toFixed(2)}
        </Text>
        <Pressable
          onPress={() => addToCart(product)}
          style={[styles.button, { backgroundColor: colors.primary }]}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default ProductItem;
