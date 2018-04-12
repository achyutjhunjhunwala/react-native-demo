import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Text,
  YellowBox,
  ScrollView,
  Modal
} from "react-native";

import Avatar from "./Avatar";

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated"
]);

export default class Home extends React.Component {
  state = {
    images: null,
    isLoading: true
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async() => {
    const response = await fetch("https://callstagram-api.now.sh/api");
    const { data } = await response.json();

    this.setState({
      isLoading: false,
      images: data
    });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {!isLoading && (
          <FlatList
            data={images}
            keyExtractor={item => item.id}
            onRefresh={() => {}}
            numColumns={"3"}
            refreshing={false}
            ListEmptyComponent={<Text>The list is empty</Text>}
            renderItem={({ item }) => (
              <Avatar
                imageUrl={item.imageUrl}
                fallbackText={"AJ"}
                onPress={() => this.props.navigation.push("Details", item)}
              />
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center"
  }
});
