import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import notifee, {
  TimestampTrigger,
  TriggerType,
  RepeatFrequency,
} from '@notifee/react-native';
import * as Location from 'expo-location';

const Profile = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [location, setLocation] = useState(null);

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log('this is your location', location);
  }

  if (!location) {
    getLocation();
  }

  async function getTime() {
    let date = new Date();
    let apiDate = date.getTime() / 1000;
    let data = await fetch(
      `http://api.aladhan.com/v1/timings/${apiDate}?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&method=13`
    );
    let result = await data.json();
    setPrayerTimes(result.data.timings);
  }

  if (location && !prayerTimes) {
    getTime();
  }

  async function onCreateTriggerNotification(time, name) {
    const hour = time.substring(0, 2);
    const minute = time.substring(3, 5);

    await notifee.requestPermission();

    let date = new Date(Date.now());
    let checkDate = new Date(Date.now());

    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(0);

    if (checkDate > date) {
      date.setDate(date.getDate() + 1);
    }

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
      repeatFrequency: RepeatFrequency.DAILY,
    };

    let randomNumber = Math.floor(Math.random() * 3);

    let pushNotificationMessage = '';

    if (randomNumber === 0) {
      pushNotificationMessage = "It's time for your prayer";
    } else if (randomNumber === 1) {
      pushNotificationMessage = 'May your prayer be accepted';
    } else if (randomNumber === 2) {
      pushNotificationMessage =
        "Don't forget to journal your prayer in the app :)";
    }

    await notifee.createTriggerNotification(
      {
        id: `name`,
        title: `${name}`,
        body: pushNotificationMessage,
      },
      trigger
    );

    console.log(`Created reminder for ${date}`);
  }

  if (prayerTimes) {
    onCreateTriggerNotification(prayerTimes.Fajr, 'Fajr');
    onCreateTriggerNotification(prayerTimes.Dhuhr, 'Dhuhr');
    onCreateTriggerNotification(prayerTimes.Asr, 'Asr');
    onCreateTriggerNotification(prayerTimes.Maghrib, 'Maghrib');
    onCreateTriggerNotification(prayerTimes.Isha, "Isha'a");
  }

  return (
    <View style={styles.background}>
      <View style={styles.bubble} />
      <Image style={styles.profile} source={require('../public/man.png')} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#9BD6EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    position: 'absolute',
    width: 200,
    height: 200,
    top: 100,
    borderRadius: 100,
  },
  bubble: {
    position: 'absolute',
    width: 200,
    height: 200,
    top: 100,
    backgroundColor: '#F9E3AE',
    borderRadius: 200,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.65,
    shadowRadius: 5,
  },
  appHolder: {
    position: 'absolute',
    width: 350,
    height: 390,
    bottom: 200,
    backgroundColor: '#F1F0F1',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.75,
    shadowRadius: 10,
  },
  sevapIcon: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: -115,
    left: -50,
  },
  cloud: {
    position: 'absolute',
    width: 600,
    height: 150,
    bottom: 0,
  },
  sevapTitle: {
    position: 'absolute',
    fontSize: 16.5,
  },
  swipeLeftPosition: {
    width: 400,
    top: -50,
  },
  swipeLeftTitle: {
    position: 'absolute',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  swipeLeftText: {
    position: 'absolute',
    color: '#FFFFFF',
    fontSize: 16.5,
  },
  swipeRightPosition: {
    width: 400,
    top: 150,
  },
  swipeRightTitle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  swipeRightText: {
    alignSelf: 'flex-end',
    position: 'absolute',
    color: '#FFFFFF',
    fontSize: 16.5,
  },
});
