import products from "@/assets/data/products";
import ProductItem from "@/src/components/ProductItem";
import { FlatList, View } from "react-native";

export const defaultPizzaImage = products[0].image;

export default function ProductScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item: product }) => (
          <ProductItem key={product.id} product={product} />
        )}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      ></FlatList>
    </View>
  );
}
