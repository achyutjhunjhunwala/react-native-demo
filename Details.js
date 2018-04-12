import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

class Details extends React.Component {
  render() {
    const { imageUrl, numberOfLikes } = this.props.navigation.state.params;

    return (
      <View style={styles.detail}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text ellipsizeMode="tail" numberOfLines={1}>
          Likes: {numberOfLikes}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detail: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2
  }
});

export default Details;
