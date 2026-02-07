import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { RootStackParamList } from "../types";

type CheckoutScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Checkout">;
};

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ navigation }) => {
  const { cart, totalAmount, clearCart } = useCart();
  const { colors } = useTheme();

  const handleCheckout = () => {
    Alert.alert("Success", "Checkout successful!", [
      {
        text: "OK",
        onPress: () => {
          clearCart();
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        },
      },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>Order Summary</Text>
      <ScrollView>
        {cart.map((item) => (
          <View
            key={item.id}
            style={[styles.row, { borderBottomColor: colors.border }]}
          >
            <Text style={[styles.itemText, { color: colors.text, flex: 2 }]}>
              {item.name} (x{item.quantity})
            </Text>
            <Text
              style={[
                styles.itemText,
                { color: colors.primary, flex: 1, textAlign: "right" },
              ]}
            >
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: colors.card }]}>
        <View style={styles.totalRow}>
          <Text style={[styles.totalLabel, { color: colors.text }]}>
            Grand Total:
          </Text>
          <Text style={[styles.totalValue, { color: colors.primary }]}>
            ${totalAmount.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.payBtn, { backgroundColor: colors.primary }]}
          onPress={handleCheckout}
        >
          <Text style={styles.btnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  itemText: { fontSize: 16 },
  footer: { marginTop: "auto", paddingTop: 20 },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  totalLabel: { fontSize: 20, fontWeight: "bold" },
  totalValue: { fontSize: 20, fontWeight: "bold" },
  payBtn: { padding: 15, borderRadius: 10, alignItems: "center" },
  btnText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default CheckoutScreen;
