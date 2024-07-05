import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, StatusBar, Platform } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCart } from './CartContext'; 

const Tab = createBottomTabNavigator();

export default function ProductDetails({ route }) {
  const { product } = route.params;
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setIsAddedToCart(true);
    console.log(`Added product ${product.id} to cart`);
  };

  const handleToggleWishlist = () => {
    console.log(`Toggled wishlist for product ${product.id}`);
  };

  // Generate fake reviews (for demonstration purposes)
  const reviews = [
    { id: '1', user: 'John Doe', rating: 4, comment: 'Great product, fast delivery!' },
    { id: '2', user: 'Jane Smith', rating: 5, comment: 'Excellent quality and price.' },
    { id: '3', user: 'Alex Johnson', rating: 3, comment: 'Good product, but packaging could be better.' },
  ];

  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <View style={styles.reviewHeader}>
        <FontAwesome name="user-circle-o" size={24} color="#7F50DE" style={{ marginRight: 8 }} />
        <Text style={styles.reviewUser}>{item.user}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={16} color="#FFD700" style={{ marginRight: 4 }} />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.reviewComment}>{item.comment}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        style={styles.container}
        data={[product]} // Use an array since FlatList expects an array of items
        keyExtractor={(item) => item.id.toString()} // Assuming product.id is a number
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.ratingContainer}>
              <AntDesign name="star" size={16} color="#FFD700" style={{ marginRight: 4 }} />
              <AntDesign name="star" size={16} color="#FFD700" style={{ marginRight: 4 }} />
              <AntDesign name="star" size={16} color="#FFD700" style={{ marginRight: 4 }} />
              <AntDesign name="star" size={16} color="#FFD700" style={{ marginRight: 4 }} />
              <AntDesign name="staro" size={16} color="#FFD700" style={{ marginRight: 4 }} />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleAddToCart} disabled={isAddedToCart}>
                <Text style={styles.buttonText}>{isAddedToCart ? 'Added to Cart' : 'Add to Cart'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.wishlistButton} onPress={handleToggleWishlist}>
                <AntDesign name="hearto" size={24} color="red" />
              </TouchableOpacity>
            </View>

            {/* Reviews Section */}
            <View style={styles.reviewsContainer}>
              <Text style={styles.reviewsTitle}>Customer Reviews</Text>
              <FlatList
                data={reviews}
                renderItem={renderReviewItem}
                keyExtractor={item => item.id}
                style={styles.reviewList}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0e6ff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0e6ff',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 30,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#666',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#7F50DE',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7F50DE',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  wishlistButton: {
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  reviewsContainer: {
    marginTop: 30,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  reviewList: {
    marginTop: 10,
  },
  reviewItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: '#FFD700',
  },
  reviewComment: {
    fontSize: 14,
    color: '#666',
  },
});
