import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarTitle}>Gematria</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#467FD3',
    width: '100%',
    height: 104,
    justifyContent: 'flex-end',
  },
  appBarInner: {
    alignItems: 'center',
  },
  appBarTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 8,
  },
});
