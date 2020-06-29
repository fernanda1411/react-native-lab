import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import CardsListItem from './CardsListItem';
import { CARDS } from '../data/cards';

export default function CardsList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CARDS}
        renderItem={({ item }) => <CardsListItem title={item.title} color={item.color}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
});
