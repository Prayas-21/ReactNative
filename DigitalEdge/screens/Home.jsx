import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useCart } from "./CartContext"; 

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products?limit=20")
      .then((res) => res.json())
      .then((json) => setProducts(json.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleToggleWishlist = (productId) => {
    // wishlist toggle logic
    console.log(`Toggled wishlist for product ${productId}`);
  };

  const handlePressProduct = (item) => {
    navigation.navigate('ProductDetails', { product: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePressProduct(item)}>
      <View style={styles.productCard}>
        <View style={styles.productCardTop}>
          <Image
            style={styles.productImage}
            source={{ uri: item.image }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.productCardBottom}>
          <View style={styles.productDetails}>
            <Text numberOfLines={2} style={styles.productTitle}>{item.title}</Text>
          </View>
          <View style={styles.productCart}>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Text style={styles.addToCartButton}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleToggleWishlist(item.id)}>
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0e6ff",
  },
  productCard: {
    borderWidth: 0.7,
    backgroundColor: "white",
    borderColor: "#EEEEEE",
    paddingVertical: 12,
    height: 350,
    marginHorizontal: "8%",
    marginVertical: "3%",
    borderRadius: 10,
    borderWidth: 2,
  },
  productCardTop: {
    flex: 2,
    justifyContent: "center",
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  productCardBottom: {
    flex: 1,
    padding: "2%",
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 15,
    marginTop: 8,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: "2%",
    color: "#333",
  },
  productCart: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  productCardBtn: {
    width: "50%",
    height: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 15,
  },
  addToCartButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#7F50DE",
    backgroundColor: "#f0e6ff",
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 9,
    width: 100,
    marginRight: 60,
    marginLeft: 60,
  },
});
