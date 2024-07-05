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
import { useCart } from "./CartContext"; 

export default function Explore() {
  const [product, setProduct] = useState([]);
  // const [Wishlist, setWishlist] = useState([]);
  // const [Cart, setCart] = useState([]);
  const [isTwoColumnView, setIsTwoColumnView] = useState(false); // New state variable

  
  
  const { addToCart } = useCart(); // for cart
  // Add to cart button logic
  

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products?limit=20")
      .then((res) => res.json())
      .then((json) => setProduct(json.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleToggleWishlist = (productId) => {
    // wishlist toggle logic
    console.log(`Toggled wishlist for product ${productId}`);
  };

 

  const renderItem = ({ item }) => (
    <View style={isTwoColumnView ? styles.productCardTwoColumn : styles.productCard}>
      <View style={styles.productCardTop}>
        <Image
          style={styles.productImage}
          source={{ uri: item.image }}
          resizeMode="contain"
        />  
      </View>
      <View style={styles.productCardBottom}>
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
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
  );

  return (
    <View style={styles.container}>
      {/* Toggle button */}
      <TouchableOpacity
        onPress={() => setIsTwoColumnView(!isTwoColumnView)}
        style={styles.toggleButton}
      >
        <Text style={styles.toggleButtonText}>
          {isTwoColumnView ? "Switch to Single Column" : "Switch to Two Columns"}
        </Text>
      </TouchableOpacity>

      {/* Product list */}
      <FlatList
        data={product}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={isTwoColumnView ? 2 : 1} // Set the number of columns based on view mode
        key={isTwoColumnView ? "twoColumn" : "oneColumn"} // Change key to force re-render
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
    flex: 1,
    borderWidth: 0.7,
    backgroundColor: "white",
    borderColor: "#EEEEEE",
    paddingVertical: 12,
    height: 350,
    marginHorizontal: "4%", // Adjusted for better spacing
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
    justifyContent: "space-between", // Adjusted for better layout
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
  },
  toggleButton: {
    alignSelf: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#7F50DE",
    borderRadius: 8,
  },
  toggleButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  productCardTwoColumn: {
    flex: 1,
    borderWidth: 0.7,
    backgroundColor: "white",
    borderColor: "#EEEEEE",
    paddingVertical: 12,
    height: 350,
    margin: "2%", // Adjusted for better spacing
    borderRadius: 10,
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
