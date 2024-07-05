import products from "@/assets/data/products";
import { Text, View } from "@/src/components/Themed";
import Button from "@/src/components/Button";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";

const sizes = ["S", "M", "L", "XL"];

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("M");

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  const handleAddToCart = () => {
    alert("Hello");
  };

  return (
    <>
      <Stack.Screen options={{ title: `${product.name}` }} />
      <View style={styles.container}>
        <Image source={{ uri: product.image! }} style={styles.image} />

        <Text>Select size</Text>
        <View style={styles.sizes}>
          {sizes.map((size) => (
            <Pressable
              onPress={() => setSelectedSize(size)}
              key={size}
              style={[
                styles.size,
                {
                  backgroundColor:
                    selectedSize === size ? "gainsboro" : "white",
                },
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  {
                    color: selectedSize === size ? "black" : "gray",
                  },
                ]}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.price}>${product.price}</Text>
        <Button onPress={handleAddToCart} text="Add to cart"></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
