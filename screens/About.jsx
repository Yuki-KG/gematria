import React from 'react';
import {
  StyleSheet, View, ScrollView, Text,
} from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text style={styles.title}>霊数とは？</Text>
        </View>
        <View>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　私たちが普段何気なく使っている文字。
            言葉に”ことだま”が宿るといわれたのと同様に、文字にも霊性が宿るという説は、古今東西、いわれ続けた事実です。
            日本では、中国から伝わった漢字の画数占いが有名ですが、西洋でも同様にアルファベットによる数字占いがさかんに行われてきました。
            これはGEMATRIA《ゲマトリア》占数術と呼ばれる占い。
            では、どうして人々は、アルファベットにそのような霊性があると考えるようになったのでしょうか。
          </Text>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　地球上の人間はどんな未開の地の民族でも、必ず言葉をしゃべっています。
            しかし、その民族がすべて文字を持っているかというと、必ずしもそうではありません。
          </Text>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　文字の歴史をたどってみると、その民族の文字は必ずといっていいほど外国人によってもたらされて来たことがわかります。
            日本の文字が中国の漢字の変形であることは誰もが知っていますが、その中国の漢字ですら、さらに異国からの伝来物であるというのです。
          </Text>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　文明の発祥地であるシュメールでは、今から約5000年前に人々に文字が伝わったといわれています。
            そして、人々に文字を広めたのはオアンネスと呼ばれる高度な知識者だったといわれています。
            が、そのオアンネスは決して人々と食事を共にせず、夜になると海の中へ戻って行ったーーシュメールにはそんな神話が残されています。
          </Text>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　一方ギリシャではフェニキアの王子カドモスが持ち込んだアルファベットが、紀元前776年に開催された
            第１回の古代オリンピック大会に使用されたことが文献に残されています。
            そのフェニキアのアルファベットも元をたどると、ある船乗りが西方である人物から教わったといわれています。
            さて、その人物とは一体誰だったのでしょうか？
          </Text>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　このように、文字、アルファベットの出現の影には実に外国人や神らしき人物の影がちらついています。
            そのため、文字、特にアルファベットは事によると神が人間に遣わした暗号かも知れない、という考え方が生まれてきたのです。
          </Text>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　そこで古代ヘブライのギリシャ、およびローマでは、ある言葉のアルファベット表記をそのアルファベットに当てられた
            一定の数値に置き換えてその数字に隠されている意味を読解しようという占数術が生まれてきました。
            これが、GEMATRIA《ゲマトリア》占数術なのです。
          </Text>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　例えば、聖書の黙示録に出てくる「獣の数、６６６」も、このGEMATRIA《ゲマトリア》占数術によって解読されたもので、
            実はキリスト教を弾圧した暴君ネロを指しているということが後世になって分かってきました。
          </Text>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　さらに、楽園を意味するエデン《EDEN》やなぞの大陸アトランティス《ATLANTIS》、《U・F・O》、
            それにユートピア《UTOPIA》などが揃って霊数０であることが分かり、
            まさに、「存在するかしないかが分からない数＝０」になることが検証されたのです。
          </Text>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　このGEMATRIA《ゲマトリア》占数術を活用すれば、あなたの名前に隠された性格はもちろん、あなたと彼女の相性までがはっきりと分かってしまうのです。
          </Text>
          <Text style={styles.explanation}>
            {/* eslint-disable-next-line */}
            　このアプリを使って、あなたと彼女の名前に隠された霊数を割り出し、
            シュメールの太古から伝わるGEMATRIA《ゲマトリア》占数術で、２人の性格とこれからの運命を占ってみてください。
          </Text>
          <Text>
            {/* eslint-disable-next-line */}
            　
          </Text>
          <Text style={styles.signature}>岡野タケシ（アート・コンサルタント）</Text>
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
  explanation: {
    fontSize: 16,
    color: '#000000',
  },
  signature: {
    alignItems: 'flex-end',
  },
});
