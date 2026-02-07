import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { RootStackParamList } from "../types";

type CartScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Cart">;
};

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { cart, updateQuantity, totalAmount } = useCart();
  const { colors } = useTheme();

  if (cart.length === 0) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text, fontSize: 18 }}>
          Your cart is empty.
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.item,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <Image source={{ uri: item.image }} style={styles.thumb} />
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text style={[styles.title, { color: colors.text }]}>
                {item.name}
              </Text>
              <Text style={[styles.price, { color: colors.primary }]}>
                ${(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
            <View style={styles.controls}>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, "decrement")}
                style={styles.ctrlBtn}
              >
                <Text style={styles.ctrlText}>-</Text>
              </TouchableOpacity>
              <Text style={[styles.qty, { color: colors.text }]}>
                {item.quantity}
              </Text>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, "increment")}
                style={styles.ctrlBtn}
              >
                <Text style={styles.ctrlText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View
        style={[
          styles.footer,
          { backgroundColor: colors.card, borderTopColor: colors.border },
        ]}
      >
        <Text style={[styles.total, { color: colors.text }]}>
          Total: ${totalAmount.toFixed(2)}
        </Text>
        <TouchableOpacity
          style={[styles.checkoutBtn, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate("Checkout")}
        >
          <Text style={styles.btnText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  item: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
  },
  thumb: { width: 50, height: 50, borderRadius: 5 },
  title: { fontSize: 14, fontWeight: "bold" },
  price: { fontSize: 14, marginTop: 4 },
  controls: { flexDirection: "row", alignItems: "center" },
  ctrlBtn: {
    width: 30,
    height: 30,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  ctrlText: { fontSize: 18, fontWeight: "bold" },
  qty: { marginHorizontal: 10, fontSize: 16 },
  footer: { padding: 20, borderTopWidth: 1 },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "right",
  },
  checkoutBtn: { padding: 15, borderRadius: 10, alignItems: "center" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default CartScreen;
