import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CardsListItem = ({ title, color }) => (
    <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles[color]}>{color}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    red: {
        color: 'red'
    },
    blue: {
        color: 'blue'
    },
    yellow: {
        color: 'yellow'
    },
    green: {
        color: 'green'
    },
    black: {
        color: 'black'
    }
  });
  

export default CardsListItem;