import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Avatar = ({ count, avatarColor, imageUrl }) => (
  <View style={[styles.circle, { backgroundColor: avatarColor }]}>
    <Image style={styles.image} source={{ uri: imageUrl }} />
    <Text style={styles.text} ellipsizeMode="head" numberOfLines={1}>
      {count}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  circle: {
    height: 100,
    width: 100,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 34
  },
  image: {
    width: 150,
    height: 150
  }
});

export default Avatar;
