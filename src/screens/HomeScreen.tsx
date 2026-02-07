import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
    Button,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { PRODUCTS } from "../data/products";
import { RootStackParamList } from "../types";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { colors, theme, toggleTheme } = useTheme();
  const { addToCart } = useCart();

  const renderProduct = ({ item }: { item: (typeof PRODUCTS)[0] }) => (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
        <Text style={[styles.price, { color: colors.primary }]}>
          ${item.price.toFixed(2)}
        </Text>
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: colors.primary }]}
          onPress={() => addToCart(item)}
        >
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Button title={`Mode: ${theme.toUpperCase()}`} onPress={toggleTheme} />
        <Button
          title="Go to Cart"
          onPress={() => navigation.navigate("Cart")}
        />
      </View>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  list: { paddingBottom: 20 },
  card: {
    flexDirection: "row",
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    elevation: 2,
    padding: 10,
  },
  image: { width: 80, height: 80, borderRadius: 8 },
  details: { flex: 1, marginLeft: 10, justifyContent: "space-between" },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 16, fontWeight: "600" },
  addButton: {
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  btnText: { color: "#FFF", fontWeight: "bold", fontSize: 12 },
});

export default HomeScreen;
