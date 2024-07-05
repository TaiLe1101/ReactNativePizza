import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../types";
import Colors from "../constants/Colors";
import { Link } from "expo-router";

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Link
      href={{
        pathname: "/Product/[id]",
        params: { id: product.id },
      }}
      asChild
    >
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image! }}
          style={styles.image}
          resizeMode="contain"
        ></Image>

        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
