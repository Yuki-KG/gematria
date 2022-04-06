import { shape, string } from 'prop-types';
import React from 'react';
import {
  StyleSheet, View, ScrollView, Text,
} from 'react-native';
import { getReisuu, getSeikaku, getAisho } from '../functions';

export default function Result(props) {
  const { route } = props;
  const {
    f1, l1, f2, l2,
  } = route.params;

  const fullName1 = f1 + l1;
  const fullName2 = f2 + l2;
  const reisuu1 = getReisuu(fullName1);
  const reisuu2 = getReisuu(fullName2);

  const seikaku = getSeikaku(reisuu1);
  const aisho = getAisho(reisuu1, reisuu2);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text style={styles.title}>結果</Text>
        </View>
        <View>
          <Text style={styles.you}>{`あなた (${f1} ${l1}) の霊数: ${reisuu1}`}</Text>
          <Text style={styles.yourmate}>{`相手 (${f2} ${l2}) の霊数: ${reisuu2}`}</Text>
        </View>
        <View>
          <Text style={styles.section}>名前の霊数が教える基本的なあなたの性格</Text>
          <Text style={styles.subsection}>{`霊数${reisuu1}: ${seikaku.title}`}</Text>
          <Text style={styles.description}>{`${seikaku.description}`}</Text>
        </View>
        <View style={styles.aisho}>
          <Text style={styles.section}>あなたと相手の名前の霊数の相性</Text>
          <Text style={styles.subsection}>{`霊数${reisuu1}と霊数${reisuu2}との相性`}</Text>
          <Text style={styles.description}>{`${aisho}`}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

Result.propTypes = {
  route: shape({
    params: shape({
      f1: string,
      l1: string,
      f2: string,
      l2: string,
    }),
  }).isRequired,
};

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
  aisho: {
    paddingBottom: 64,
  },
});
