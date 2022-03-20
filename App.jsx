import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Button from './components/Button';
import About from './screens/About';
import Result from './screens/Result';

const Stack = createStackNavigator();

function HomeScreen(props) {
  const { navigation } = props;
  const [firstName1, setFirstName1] = useState('');
  const [lastName1, setLastName1] = useState('');
  const [firstName2, setFirstName2] = useState('');
  const [lastName2, setLastName2] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leadText}>
          <Text>あなたと相手の名前の霊数から相性を占います</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('About');
          }}
        >
          <Text style={styles.link}>霊数とは？</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.inputTitle}>Your Name (in ASCII)</Text>
          <View style={styles.inputBoxes}>
            <TextInput
              style={styles.inputFirst}
              value={firstName1}
              onChangeText={(text) => { setFirstName1(text); }}
              placeholder="First Name"
            />
            <TextInput
              style={styles.inputFirst}
              value={lastName1}
              onChangeText={(text) => { setLastName1(text); }}
              placeholder="Last Name"
            />
          </View>
        </View>
        <View>
          <Text style={styles.inputTitle}>Your Partner&apos;s Name (in ASCII)</Text>
          <View style={styles.inputBoxes}>
            <TextInput
              style={styles.inputFirst}
              value={firstName2}
              onChangeText={(text) => { setFirstName2(text); }}
              placeholder="First Name"
            />
            <TextInput
              style={styles.inputFirst}
              value={lastName2}
              onChangeText={(text) => { setLastName2(text); }}
              placeholder="Last Name"
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            label="相性を調べる"
            onPress={() => {
              navigation.navigate('Result', {
                f1: firstName1,
                l1: lastName1,
                f2: firstName2,
                l2: lastName2,
              });
            }}
          />
          <Button
            label="クリア"
          />
        </View>
      </View>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Gematria',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  content: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  leadText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'normal',
    lineHeight: 32,
    marginTop: 8,
  },
  inputTitle: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 8,
  },
  inputBoxes: {
    flexDirection: 'row',
  },
  inputFirst: {
    fontSize: 16,
    height: 32,
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 1,
    width: '49%',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  inputLast: {
    fontSize: 16,
    height: 32,
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 1,
    width: '49%',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  link: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 24,
    color: '#467FD3',
  },
  buttons: {
    flexDirection: 'row',
  },
});
