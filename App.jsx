import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.appBarTitle}>Gematria</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.leadText}>
          <Text>あなたと相手の名前の霊数から相性を占います</Text>
        </View>
        <View>
          <Text style={styles.link}>霊数とは？</Text>
        </View>
        <View>
          <Text style={styles.inputTitle}>あなたの名前（ローマ字）</Text>
          <View>
            <TextInput style={styles.inputFirst} value="ファーストネーム" />
            <TextInput style={styles.inputLast} value="姓" />
          </View>
        </View>
        <View>
          <Text style={styles.inputTitle}>相手の名前（ローマ字）</Text>
          <View style={styles.inputBoxes}>
            <TextInput style={styles.inputFirst} value="ファーストネーム" />
            <TextInput style={styles.inputLast} value="姓" />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>相性を調べる</Text>
        </View>
      </View>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
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
  inputFirst: {
    fontSize: 16,
    height: 32,
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 1,
    alignItems: 'flex-start',
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
    position: 'absolute',
    right: 0,
    width: '49%',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
  link: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 24,
    color: '#467FD3',
  },
});
