import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notification</Text>
      </View>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationBox} />
        <View style={styles.notificationBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101F41',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    color: '#FFFFFF',
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  notificationBox: {
    width: '48%',
    height: 200,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
});

export default Notifications;