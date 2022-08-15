import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function AppListItem(props) {

  return (
    <View>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => 
        props.navigation ? props.navigation.navigate("Sevap") : props.modal(true)}
      >
        <Image style={styles.logo} source={props.path} />
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 341,
    height: 90,
    borderRadius: 50,
    marginBottom: 35,
    backgroundColor: "white",
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  logo: {
    width: 75,
    height: 75,
    marginLeft: 15,
  },
  title: {
    marginLeft: 12.5,
    fontSize: 20,
    fontWeight: '100',
  },
});
