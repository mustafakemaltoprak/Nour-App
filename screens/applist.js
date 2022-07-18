import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import AppListItem from '../components/appListItem';

export default function Applist(props) {
  return (
    <View style={styles.background}>
      <View style={styles.listHolder}>
        <ScrollView
          style={styles.list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <AppListItem
            path={require('../public/sevap-compressed.png')}
            title={'Free Good Deed'}
            swipe={props.swipe}
          />
          <AppListItem
            path={require('../public/hadith-compressed.png')}
            title={'Hadith of The Day'}
          />
          <AppListItem
            path={require('../public/book-compressed.png')}
            title={'Quran'}
          />
          <AppListItem
            path={require('../public/leader-compress.png')}
            title={'Leaderboard'}
          />
          <AppListItem
            path={require('../public/praying-compressed.png')}
            title={'Prayer'}
          />
          <AppListItem
            path={require('../public/map-compressed.png')}
            title={'Qibla Direction'}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#9BD6EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHolder: {
    top: -30,
    height: 625,
    width: 350,
  },
  cloud: {
    position: 'absolute',
    width: 600,
    height: 150,
    bottom: 0,
    right: -100,
  },
});
