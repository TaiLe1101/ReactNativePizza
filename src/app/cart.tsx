import { View, Text, FlatList } from "react-native";
import { useCart } from "../hooks/useCart";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

function CartScreen() {
  const { items, total } = useCart();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <CartListItem key={item.id} cartItem={item} />
        )}
        contentContainerStyle={{ gap: 10 }}
      />

      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
        Total: ${total}
      </Text>

      <Button text="Checkout" />
    </View>
  );
}

export default CartScreen;
