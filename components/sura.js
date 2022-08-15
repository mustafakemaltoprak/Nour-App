import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Sura(props) {
  return (
    <View>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          props.listView(false);
          props.setAyahData([props.ayahs]);
          props.setNumber(props.number);
        }}
      >
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.arabic}>{props.arabic}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '85%',
    height: 75,
    borderRadius: 50,
    marginBottom: 25,
    marginLeft: 25,
    backgroundColor: '#2a195b',
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
    color: 'white',
    marginLeft: 25,
    marginTop: 25,
    fontSize: 20,
    fontWeight: '100',
  },
  translation: {
    marginLeft: -86,
    marginTop: 15,
    fontSize: 12.5,
    fontWeight: '100',
  },
  arabic: {
    color: 'white',
    marginLeft: 50,
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
