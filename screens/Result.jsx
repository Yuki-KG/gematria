import React from 'react';
import {
  StyleSheet, View, ScrollView, Text,
} from 'react-native';

export default function Result() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text style={styles.title}>結果</Text>
        </View>
        <View>
          <Text style={styles.you}>あなた (Masayuki Kawagishi) の霊数: 3</Text>
          <Text style={styles.yourmate}>相手 (Chiharu Seino) の霊数: 4</Text>
        </View>
        <View>
          <Text style={styles.section}>名前の霊数が教える基本的なあなたの性格</Text>
          <Text style={styles.subsection}>霊数3: 夢見がちな傷つきやすい善人</Text>
          <Text style={styles.description}>
            保守的で良心的。すぐに「道徳」や「戒律」を口にするかと思うと「愛」「平和」を説いてまわるカルチャー型の人です。
          </Text>
        </View>
        <View>
          <Text style={styles.section}>あなたと相手の名前の霊数の相性</Text>
          <Text style={styles.subsection}>霊数3と霊数4との相性</Text>
          <Text style={styles.description}>めちゃめちゃ合います！！！</Text>
        </View>
      </ScrollView>
    </View>
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
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  you: {
    fontSize: 16,
    color: '#6060FF',
  },
  yourmate: {
    fontSize: 16,
    color: '#FF6060',
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 12,
    marginBottom: 8,
  },
  subsection: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0080FF',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000000',
  },
});
