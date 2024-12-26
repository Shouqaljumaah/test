import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.card}>
      <Image
        source={{
          url: "https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Shouq Aljumaah</Text>

      <Text style={styles.title}>Civil Engineer</Text>

      <Text style={styles.bio}>
        Passionate about design, and building amazing products.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: "#888",
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
