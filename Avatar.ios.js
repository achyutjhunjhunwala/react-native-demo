import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

class Avatar extends React.Component {
  render() {
    const { fallbackText, avatarColor, imageUrl, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[styles.circle, { backgroundColor: avatarColor }]}
          onLayout={this._onLayout}
        >
          {imageUrl && (
            <Image style={styles.image} source={{ uri: imageUrl }} />
          )}
          {!imageUrl && (
            <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
              {fallbackText}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 3,
    justifyContent: "center",
    alignItems: "center",
    margin: 2
  },
  text: {
    color: "white",
    fontSize: 34
  },
  image: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 3,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Avatar;
