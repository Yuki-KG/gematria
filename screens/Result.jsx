import { shape, string } from 'prop-types';
import React from 'react';
import {
  StyleSheet, View, ScrollView, Text,
} from 'react-native';

export default function Result(props) {
  const { route } = props;
  const {
    f1, l1, f2, l2,
  } = route.params;

  function getNumberFromLetter(letter) {
    switch (letter) {
      case 'A':
        return 1;
      case 'a':
        return 1;
      case 'B':
        return 2;
      case 'b':
        return 2;
      case 'C':
        return 3;
      case 'c':
        return 3;
      case 'D':
        return 4;
      case 'd':
        return 4;
      case 'E':
        return 5;
      case 'e':
        return 5;
      case 'F':
        return 6;
      case 'f':
        return 6;
      case 'G':
        return 7;
      case 'g':
        return 7;
      case 'H':
        return 8;
      case 'h':
        return 8;
      case 'I':
        return 9;
      case 'i':
        return 9;
      case 'J':
        return 10;
      case 'j':
        return 10;
      case 'K':
        return 11;
      case 'k':
        return 11;
      case 'L':
        return 12;
      case 'l':
        return 12;
      case 'M':
        return 13;
      case 'm':
        return 13;
      case 'N':
        return 14;
      case 'n':
        return 14;
      case 'O':
        return 15;
      case 'o':
        return 15;
      case 'P':
        return 16;
      case 'p':
        return 16;
      case 'Q':
        return 17;
      case 'q':
        return 17;
      case 'R':
        return 18;
      case 'r':
        return 18;
      case 'S':
        return 19;
      case 's':
        return 19;
      case 'T':
        return 20;
      case 't':
        return 20;
      case 'U':
        return 21;
      case 'u':
        return 21;
      case 'V':
        return 22;
      case 'v':
        return 22;
      case 'W':
        return 23;
      case 'w':
        return 23;
      case 'X':
        return 24;
      case 'x':
        return 24;
      case 'Y':
        return 25;
      case 'y':
        return 25;
      case 'Z':
        return 26;
      case 'z':
        return 26;
      default:
        return 0;
    }
  }

  function isEven(x) {
    if (x % 2 === 0) {
      return true;
    }
    return false;
  }

  function getReisuu(char) {
    const chars = char.length;
    let leftNumber = 0; let middleNumber = 0; let rightNumber = 0;
    let letter = '';

    if (isEven(chars)) {
      for (let i = 0; i < chars / 2 - 1; i += 1) {
        letter = char.substr(i, 1);
        leftNumber += getNumberFromLetter(letter);
      }
      const firstMiddleLetter = char.substr(chars / 2 - 1, 1);
      const secondMiddleLetter = char.substr(chars / 2, 1);
      middleNumber = getNumberFromLetter(firstMiddleLetter)
        + getNumberFromLetter(secondMiddleLetter);
      for (let i = chars / 2 + 1; i < chars; i += 1) {
        letter = char.substr(i, 1);
        rightNumber += getNumberFromLetter(letter);
      }
    } else {
      for (let i = 0; i < Math.floor(chars / 2); i += 1) {
        letter = char.substr(i, 1);
        leftNumber += getNumberFromLetter(letter);
      }
      const middleLetter = char.substr(Math.floor(chars / 2), 1);
      middleNumber = getNumberFromLetter(middleLetter);
      for (let i = Math.floor(chars / 2) + 1; i < chars; i += 1) {
        letter = char.substr(i, 1);
        rightNumber += getNumberFromLetter(letter);
      }
    }

    let ret = Math.abs(Math.abs(leftNumber - rightNumber) - middleNumber);

    while (ret >= 10) {
      const hundreds = Math.floor(ret / 100);
      const tens = Math.floor((ret - 100 * hundreds) / 10);
      const ones = ret - 100 * hundreds - 10 * tens;
      ret = hundreds + tens + ones;
    }
    return ret;
  }

  function getSeikaku(reisuu) {
    let seikakuValues = ['', '', ''];
    const seikakuRow = ['', '', '', '', '', '', '', '', '', ''];
    seikakuRow[0] = "0,本心を見せない２面性の持ち主,　明るいけれど、なかなか本心を見せない人です。０には生と死の二面性があり、楽天と絶望が交互に表れます。無欲無心で超然としているように見えても、突然、爆発的なエネルギーを発揮して周りの人を驚かせることがあります。恋をしても一途に打ち込むことはなく、また徹底的にフラれても不死鳥のように再生します。";
    seikakuRow[1] = "1,プライドの高さが独裁的に変貌,　尊大で誇り高き王者のよう。「我こそ、ナンバー１」と思っている人です。創造力や指導力を発揮して人々の信頼を集める面もありますが、反面、自己主張が過ぎて独断的になり、さらに口うるさくなったり怒りっぽくなって嫌われることも。恋には限りなく所有欲の強さが表れますからＳＥＸ面は自制心が強い方です。";
    seikakuRow[2] = "2,シニカルで高い協調性の持ち主,　人当たりはソフト。しかしなかなかの皮肉屋で「ああいえばこういう」反対意見の持ち主です。２が暗示するものは「分裂」「対立」「葛藤」で、秩序に反抗的。しかし「月」「夜」に象徴されるように「秘密」を大切にし、不思議と協調性を生み出します。また熱中・陶酔派で、恋は純潔性、処女性を重視。ＳＥＸはエンジョイ型です。";
    seikakuRow[3] = "3,夢見がちな傷つきやすい善人,　保守的で良心的。すぐに「道徳」や「戒律」を口にするかと思うと「愛」「平和」を説いてまわるカルチャー型の人です。さらに最も夢多き人であれもしたい、これもしたいと計画を立てます。集中力もあり冒険心も大。そのために犠牲を受けることも多いでしょう。恋は「自分なしでは相手はダメになる」と片思いの傾向があります。";
    seikakuRow[4] = "4,秩序を保った高バランス人間,　流行に敏感。多様な生き方ができる高バランス感覚人間。４は４本の柱とか東西南北のように「秩序ある配置」を暗示し、柔軟な対応力を持つことを示します。また、商才を大いに発揮し、正義感や友情にも厚い人です。落とし穴は直感に頼り過ぎて、失敗を招くこと。恋は純潔志向。セックスはコミュニケーションを重視します。";
    seikakuRow[5] = "5,恋は盲目！ 楽天的な理想論者,　少々空想的・楽天的部分の多い人です。５は星型を現し、この持ち主は特に「夢」「希望」「理想」を大切にします。また、論理を組立てるのが大好き。しかしこの理論も空想の部分が大きすぎて空中分解することがあります。でも、復原力は早く、バランスを保つのが上手。意見の衝突を起こしやすいのが欠点。恋には盲目です。";
    seikakuRow[6] = "6,几帳面で努力家の完全主義者,　神経質なほどの完璧主義者です。さらに、一方を見ると、他が見えなくなる傾向があります。よくいえば誠実ですが、悪くいえば強情。でも努力と几帳面さがモットーです。行動力と積極性を合わせ持っているためピンチにも強く、極めて野心的ですが、利己的で支配欲も強い。恋は感情過多で自分がリードしたがります。";
    seikakuRow[7] = "7,最も大切なのは精神的な成長,　７は神の「恵み」や「メッセンジャー」を現す数。「７つの封印」「７つの霊」「７つの星」「７つの燈台」など聖書にはおびただしい数の７が登場し、精神を誘導する一面を暗示しています。生活面では「親切」がモットー。反面プライドと野心も大。また、暴力性を表すことも。恋愛はデリケートな一体感を求める傾向にあります。";
    seikakuRow[8] = "8,自由奔放。明るくノンキな情熱家,　８は∞（無限大）に通じ、永遠願望の象徴です。人生は何回でもやり直しがきく、とノンキに考える人。モットーは情熱と繁栄。明るく、にぎやかであることを好みますが、反面、ワザと騒ぎを起こしたり、ライバルを作って競いたがる傾向もあり、異性を誘惑するなどのスキャンダラスな面も。自由奔放な恋を好みます。";
    seikakuRow[9] = "9,永遠の心理を追求する哲学者,　神秘的なかげりが人目を魅きつけます。社交性があり、華麗な面が目立ちますが、どこかに不安定で自己充足に追われている様子が伺えます。もともと９は完全な男性の数で、「真理の追求」を指す数字。破滅や返送も示しますが、同時に「再生」と「思いがけぬ幸運」も表します。恋は精神的なものを求める傾向にあります。";
    seikakuValues = seikakuRow[reisuu].split(',');
    return {
      title: seikakuValues[1],
      description: seikakuValues[2],
    };
  }

  function getAisho(r1, r2) {
    const aisho = [['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']];
    const msg = [];
    msg.push("　どちらかというと女性同士の同性愛にも似た相性。仲はすごくよく、静かな交際を続けるにはよいのですが、活気が生まれる関係ではありません。またお互い無邪気で隠し事や秘密は持てない関係。ただし相手が自分に無断で行動したり、あるいは恋人を作ったりすると嫉妬する。また、２人で同時に否定的な思いを抱くと絶望に陥りやすい。");
    msg.push("　０で不明だったものが、初めて「誕生」するのが１。この相性は霊数１の人が霊数０の人を引っ張るパターンです。そこに創造や統一が生まれるのですが、土台を支える底力は霊数０の人。つまり、霊数０の人が女房役に回ることで、この相性はとてもよくなります。逆になると霊数１の人は孤独に陥り、逃げ出すしか方法がなくなります。");
    msg.push("　どちらも女性的な気分になりやすい２人です。表面は笑顔を見せながら、穏やかな関係が続くはず。でも２人の陶酔が覚めるとガタピシと音を立てることになり、お互いに不愉快な思いをしそうです。つまり自己主張がやがて口論に発展するという具合。でも、そのことで永久に別れるということはなく、再び笑顔と穏やかな交際が続きます。");
    msg.push("　激しく求め合うこともあり、また単なる通行人のように無視し合ってしまうこともある相性。お互いに自分を甘く見せたがらず、始めから強く自己主張をして衝突します。相手を傷つけることもあれば自分が傷つくことも。根本的にはお互いはまるで他人。ただ、最も強い他人が必要な時に求め合うことに。ギブ・アンド・テイクの関係です。");
    msg.push("　身内同士のような気安さが表れる関係です。霊数４の人のスマートな柔軟性と霊数０の人のバイタリティと底力がお互いを魅きつけます。気軽にデイトしたり、飲んで会話を楽しめる相手です。行動パターンとしては、霊数０の人が４の人にアドバイスを贈るのがベスト。しかし２人が同時に精神的に落ち込むと、脱出に時間がかかりそう。");
    msg.push("　考え方はまるで違うのに兄弟のように仲がいい相性です。しかし、追いかけるのはいつでも霊数０の人。霊数５の人は追われるか待ち伏せをして驚かせます。ひとつ所に留まるのが苦手なカップルですから旅行やスポーツなどで行動を共にしながら会話を楽しむのがベター。霊数５の人の情報が霊数０の人に突然の幸福をもたらすことも。");
    msg.push("　霊数０の人の甘えすぎか、霊数６の人がしつこいのか……霊数６の人は霊数０の人が気になって仕方がないはず。そのくせ２人の強情さと批判精神がしょっちゅう衝突を生み出す関係です。周囲の人も「あの２人はどうなってるの？」と疑問におもう間柄。でも２人は解決の場を他に見つけるのが上手く、結局は仲直りできる間柄です。");
    msg.push("　霊数７の人が親切でやったことも霊数０の人には何だか恩きせがましくて素直に受け入れることができません。それが原因でお互いの自己主張が強まり、一歩も引かないゾ、という緊張した関係に。２人の和解のために霊数７の人は努力を惜しみません。霊数０の人が折れることで２人の仲は安定。霊数７の人がリードするカップルです。");
    msg.push("　面倒見のよい霊数８の人が先輩の立場になる関係。あまり側でベッタリしすぎると嫌われますが、情熱家であり冒険心も大きい霊数８の人は、アドバイスを受けるには最適の人。このカップルはあまり争うことはありませんが、自己主張を通して相手を引っ張る指導性を発揮し合うこともありません。２人で立てる大きな計画は実行不可能。");
    msg.push("　何となく親しみを感じる相手。例えるならば壁を取り外した後の東西ドイツ。思想的にはまるで違うのに、食べる物の好みや映画、音楽の志向が良く合うといった２人です。２人の違いは、霊数０の人が実生活での現実性に優れているのに対し、霊数９の人が理想を追求し精神性を重視する点、お互いに自分にない面を補い合える間柄です。");
    msg.push("　このカップルは争いの絶えない間柄です。理由は、お互いにイニシアチブを奪い合い、自分がリーダーとして目立とうとするため。時には相手を罵倒することもありますが、第三者に対してのチームワークは天下一品。２人が組んで仕事をすれば、活力も倍増し、見事な二人三脚ぶりを発揮します。ただし、欲張りすぎると大失敗も。");
    msg.push("　秩序と美を求め合う円満な間柄です。ハーモニーのとれた相性ですが、霊数２の人は行動する前に考え込んでしまう面があるので、霊数１の人が少々口うるさいくらいのバイタリティで後押しをする必要があるかもしれません。霊数２の人は一時的には霊数１の人のゴリ押しに反発しますが、その時には「ゴメンね」の一言を忘れないように。");
    msg.push("　霊数３の人は一見クールに見えますが信仰心が厚く保守的で、執着心の強い人。その点をよく理解し、尊敬を示すことで霊数３の人の信頼を得ることが最も大切です。それさえ得られれば霊数１の人の知恵と生命力、イキイキとした意見が霊数３の人をグイグイ引っ張っていける間柄に。２人とも不正に対して激怒する性格なので要注意。");
    msg.push("　誰にでも、どうも気に入らない相手というのがあるが、この組合せがそれ。理由は下らないことが多く、例えば霊数１の人がある計画を推し進めようとすると、霊数４の人が「まだいろいろ手を加える必要がある」などといって腰を上げたがらないなど。しかし、これで頭に来てしまってはダメ。お互いの「間」を理解することが大切。");
    msg.push("　霊数１の人が霊数５の人に気を配る関係。どちらかといえばワンマン気質の霊数１の人が、霊数５の人にだけは手を貸してしまいます。霊数５の人は妙にオットリしていたり、突然姿を消したり、つかみどころがなく、霊数１の人はイライラ。とくに霊数５の人が女性の場合、男性は「他に男がいるのではないか」と心配のかけられ通しに。");
    msg.push("　とんでもない光雲が舞い込むかもしれない。つまりハプニングが起こる可能性のある組合せ。普段はお互い、全く気にならない相手で、恋人同士といっても頻繁にデイトするでもなく、ケンカもしない間柄。しかし、仕事の上でこの２人が組むと大ヒットを飛ばすことも可能に。ただしお互いに麻薬の誘惑には十分な注意が必要。");
    msg.push("　霊数７の人が寛大さをいいことに霊数１の人が相手を勝手に振り回す関係です。霊数１の人の命令に相手が素直に従っているうちはいいのですが、必ず２人の意見が衝突する時が来るはず。それは霊数７の人が霊数１の人に「誠実さ」を要求しているためです。ただし、基本的な相性が良いため、ケンカをしても仲直りは非常に早い２人です。");
    msg.push("　霊数１の人が霊数８の人の行動にハラハラさせられる間柄です。霊数８の人は明るいのですが激情型で何を起こすか分からない人。霊数１の人はまるで正反対の性格で、こんな相手に対して興味だけでなくある種の尊敬の感情を抱くようになります。難しい相性ですが、霊数１の人が相手を泳がせきれれば幸せになれる２人です。");
    msg.push("　霊数９の人は理想主義者。心は温かいのですが、プライドを傷つけるような言動は禁物です。どちらかというと霊数１の人の方が陽性でワンマン体質、一方霊数９の人は陰性で神経質です。霊数９の人の気持ちを霊数１の人がしっかりと理解してリードしていくのがベターでしょう。また霊数９の人が嫉妬深さをあまり見せない方が吉。");
    msg.push("　同じ霊数の持ち主で相性は悪くありません。が、２人して秘密を抱えてしまうと疑心暗鬼の状態になり身動きが取れなくなります。とくに何かを研究するとか、ある仕事に夢中になっている限りは、このカップルは非常にうまくいく組合せです。ただし、２人が同時にトラブルに巻き込まれると、立ち直りが遅いので恨み言やケガには要注意。");
    msg.push("　相性は吉。兄弟愛のような感情が育つこともある間柄です。霊数３の人は、今どき珍しいぐらい大きな夢を見ている真面目な人。霊数２の人は相手のそんな部分に魅きつけられます。この組合せは、霊数２の人が霊数３の人に頼りがちですが、時には霊数２の人もアドバイスを。霊数２の人の気持ちに陰りが生じない限り混乱のない２人です。");
    msg.push("　ケンカをするわけでもなく、仲も悪くないのですが、お互い本心で話をしたがらない２人です。霊数２の人には秘密が多すぎますし、霊数４の人はなかなか態度が煮え切りません。そこで何かを始めようとする時には、２人だけで始めるのではなく、信頼できる年配の人の意見を参考にするべきです。また連鎖的に落ち込む危険があるので要注意。");
    msg.push("　正反対の性格です。お互いの意見を尊重した上で、ひとつの目的に向かって団結力と協調性が発揮できる場合に限って相性は悪くありません。この場合には多少のケンカは２人の関係を活性化させます。万が一、落ち込んでもこのカップルなら立ち直りも早い。ただ、霊数５の人の不満が爆発すると口論が絶えなくなり収拾のつかない結果に。");
    msg.push("　霊数２の人が霊数６の人の面倒をみる関係です。霊数２にとって霊数６の人は誠実な人で、愛と安定を求めているように思える相手。霊数６の人を援助するような行動を取ると円満な間柄になります。ただしこのカップルは、親密になりすぎるとなぜか円満さに欠けてザラザラした関係に陥りやすい。自分勝手にならない注意が必要です。");
    msg.push("　変化の多い相性です。幸運と不幸が次々に起こる、つまりハプニングの起こりやすい組合せです。このカップルは、例えれば、霊数７の人の考え出したアイデアを霊数２の人が夢中になって宣伝するような関係。結果は大成功か大失敗のどちらかです。お互いに善良さをむき出しにできる相手ですがどこかにライバル関係が残ります。");
    msg.push("　お互いに純粋で、あまりにも燃え上がりやすいため、悲恋物語を作りやすい相性です。そのキーポイントは、霊数２の人の甘え過ぎ、あるいは誘い過ぎ。「甘えた覚えはないし、相手も自由意思で近づいてきたはずだ」と思っていても、霊数８の人は、その誘いに乗って、恋愛に夢中になり過ぎ、疲労困憊し、２人の関係は破綻します。");
    msg.push("　このカップルが交代で自動車の運転をすると、ハラハラのしどおし。信号無視やスピード違反などはしょっちゅう。お互いに勝手気まま、相手に対する配慮が足りないためです。２人は例えれば「花と鉢」のような関係。どちらかが花を咲かせるためには、もう一方がジッと我慢を強いられることに。その点が合意できれば楽しいカップルに。");
    msg.push("　何かに奉仕する場合とか、特殊なカルチャーに夢中になる場合だと２人の呼吸はピッタリ。見事に気が合うように見えます。しかし、日常生活の場では、お互いのクールさや権利の主張が多すぎて不満がいっぱいになりやすい組合せです。よほどの自己犠牲と工夫がないと常に衝突を繰り返すことに。精神疲労を招きやすいカップルです。");
    msg.push("　霊数３の人が愛と奉仕を惜しまなければ円満に行く相性です。霊数４の人は秩序だった物の考え方ができる人で、商才もあり、何よりも流行に敏感な感性を持っている人。ただし、不足しがちな行動力や指導力を霊数３の人が補うことによって強力な組合せになります。ただし霊数４の人が主導権を握ろうとすると恋愛は終わってしまいます。");
    msg.push("　男性的なライバル関係に鳴る２人です。友情は感じても、ビジネスライクな関係に終わりがちです。お互いに利害が一致している時には、目標に向けて見事に協力し合うことができるのですが、一旦反目すれば、秘密の内に相手を出し抜こうとする意識が芽生えます。そういう意味でお互いに自己中心的。デイトも割り勘で仕事感覚の２人です。");
    msg.push("　２人の出会いからしてチグハグが起こりそうな組合せ。これは２人の時間の観念が違うため。どうしてもテンポが合わず、デイトでも場所を間違えたり、時間を間違えたり……。お互いが自分にとって重要でない、という思い込みのためか相手に対する真剣さが不足しています。ただ、つき合いが長くなれば相手の良さを認識できる２人です。");
    msg.push("　霊数７の人の魅力に霊数３の人は強く魅きつけられるパターンです。霊数３の人にとって相手は“神のメッセンジャー“のようで、世にも珍しい才能の持ち主。霊数３の人は相手のためにできるだけのことをしてあげたい、と献身的な態度に出ます。ただしこの関係は、霊数３の人によほどの実力がないと疲労がたまり、長続きしません。");
    msg.push("　霊数８の人は進歩的。霊数３の人にとってこれは非常に魅力的に映ります。また反対に霊数８の人は、霊数３の人の真面目さ、純粋さに魅きつけられるようになります。が、２人にはまったく接点がなく、デイトをしても不協和音に終わるのは必至。霊数８の人の方から別れ話が持ち上がることになります。悪い噂が立たないように要注意。");
    msg.push("　霊数３の人が暴君に変身する組合せです。相手に対して平気でアレコレと命令を下していきます。元々理想・プライドの高い霊数９の人がこれを許しているのは、霊数３の人に対して絶大な信頼感を持っているためです。従って、霊数３の人がその信頼感を裏切るような行為をした途端、２人の関係は崩れ、立場は入れ代わることに。");
    msg.push("　女子学生のルームメイトのように、整理、秩序、規則などをキチンと守り、お互いのプライバシーには立ち入りません。それぞれが自由と孤独を楽しむ関係です。２人で何かアイデアを出し合ったり、事業を始めようとしても、恐らくうまくは行かないはず。お互いが独立しているためケンカは少ないですが、同時に落ち込むと回復は困難。");
    msg.push("　臨機応変な動きをするのには好都合なカップルです。特に一緒に商売を始めるような場合には、霊数４の人の流行を商売に結びつける才能と、霊数５の人の優れたチャレンジ精神と困難な壁を突破する行動力が最高の組合せになるはず。特に霊数４の人に、相手に合わせる心の余裕があれば、相性は吉。ただし、睡眠不足は口論の元。");
    msg.push("　合理的に物事を運ぶカップルです。うまくやっていける間柄、といっても心の底から信頼し合う関係ではありません。２人の関係がビジネスライクに進んでいる間はいいのですが、情が絡んだり、酒を飲んでグチをいうようになるとギクシャクし出します。霊数４の人の流行感覚と霊数６の人の行動力を合わせた協力態勢を作ることが大切。");
    msg.push("　突っ張り合ってしまいそうなカップルです。霊数７の人は優しくて親切ですし、何かと知恵と情報を集めて霊数４の人をリードしようと試みますが、霊数４の人にはうっとうしい限り。お互いのプラス面とマイナス面が上手に噛み合わないことが多い組合せです。霊数４の人がイラついていると、霊数７の人が独裁的になることも。");
    msg.push("　女性の同性愛のような雰囲気が出やすいカップルです。この組合せでは、霊数４の人が一方的に優しくしたり、いろいろ面倒をみたり、プレゼントをしたりすることに。霊数８の人は我がままのし放題で、何かというと霊数４の人に頼ることになり、霊数４の人は心身共に消耗するばかり。円満さを持続するには２人の立場を逆にする努力を。");
    msg.push("　流行に敏感で現実主義者の霊数４の人に対して、霊数９の人は理想派。一見、水と油だが仲は良い。でも、めったにデイトすることのないカップルです。一つのドラマのヒーローとヒロインになることは少ない組合せです。２人はまるで考え方の違うライバル関係。例え一緒にいても、お互いに相手を説得するのが面倒くさくなる場合が多い。");
    msg.push("　外見は均衡と調和を保って仲良しに見えるが、どちらも刺激に反応しやすく、逆に危険だと判断すると、相手を先手攻撃することがある。というわけで、この２人は決してゆったりとしていない。動⇨バランス⇨定着という３つのパターンを繰り返すことが多いために、この間が合わないと２人の間に不満や口論が起こりやすい。");
    msg.push("　お互いに勝手位に行動し合い、議論もするが、欠点を探して非難し合うようなことはない。むしろお互いのプラス面、マイナス面をカバーし合うことができる組合せです。従って、共に生命力にあふれ、社交性を示し、仕事はしやすい相手。特に霊数６の人の積極性や野心、あるいは財テク能力を霊数５の人が運用できればベストカップルに。");
    msg.push("　どちらも男性的な気質マル出しで、ぶつかり合うライバル関係の２人です。しかしあくまでも競い合うのであって、悪くてもケンカや絶交というところまでは発展しません。ただ胃互いに意地の張り合いがあって一度こじれると自分から折れることができません。できれば別々の仕事を持って、時々会うようにしたほうがベターです。");
    msg.push("　霊数５の人が霊数８の人を追いかけている間はうまくいきません。明るく華やかな雰囲気を持つ霊数８の人を自由に泳がせることができれば円満な関係が築けます。さらにこのことによって霊数５の人は話題が豊富になり、知的なユーモアがあふれ文化性もアップ。魅力が倍増します。ただ、不倫やスキャンダラスな関係はダメ。");
    msg.push("　霊数９の人に主導権を譲り、イラつかせないように注意することが必要です。お互いに張り合うと、関係は悪化。霊数９の人の理想の高さ、社交性の豊かさ、少々嫉妬深いが好奇心の強い所などを霊数５の人が認識した上で、霊数５の人が女房役に回るとうまく行くはず。手綱を緩めすぎると霊数９の人の我がままな面が浮上します。");
    msg.push("　安定しにくい組合せです。というのも、霊数が同じためお互いに相手の腹の中が見え過ぎて、返ってお互いに隠し事を持ち、策略を巡らすことが増えるため。また、どちらもトラブルが生じると酒やギャンブルなどの快楽的な遊びで気を紛らそうとするのも問題です。目的を一つにして共同で仕事をすると素晴らしい協力関係を発揮します。");
    msg.push("　霊数６の人が繊細で、完全主義者であるのに対し、霊数７の人は至極大雑把。ただし、純粋でプライドの高さは霊数６の人以上です。この組合せはお互いに相手を尊敬し合う面があり、なかなかいい相性。しかもこのカップルはうちと外で顔を使い分けることが可能。お互いの立場を入れ換えることで、双方のプライドが満たされることに。");
    msg.push("　一度ならず、二度、三度とお互いが相性について迷いや戸惑いが生じやすい組合せ。お互いに相手を理解するには観念だけではダメ。霊数６の人の誠実さと粘り強さ、霊数８の人の情熱や競争心など、具体的な行動を通して、自分にないものを持っている相手の良さに気付くことが大切です。ただ相手にあまり多くを望み過ぎると亀裂が。");
    msg.push("　霊数９の人は厳格で強情な相手。これを上手く手なずけられるのは自分をおいて他にいない、と霊数６の人はひたすら思って作戦を立てるとよいでしょう。それには２人で一緒に参加できる社会活動が効果的。知恵を出し合って、共同事業として開花させるのもいい。さらに霊数９の人の理想を実現できれば最高。最高に円満なカップル。");
    msg.push("　芸術家的カップル。自分たちの考え方だけが最高で、他の人たちを軽蔑するような一面があります。回りの人からみれば、自分たちのことしか考えないイヤミなカップル。２人の合意で行動すると、２倍の幸運が転がり込むこともありますが、逆に最悪の事態を招くことも。さらに利害が対立すると徹底して相手を叩きのめす醜い面を出すことも。");
    msg.push("　霊数８の人は非現実的な理想主義者で勝手きまま。明るいけれど激しい気性を持ち合わせ、それでいて慈悲深い面も。霊数７の人はこんな霊数８の人を黙って見ていられず、ついつい手を貸してしまうことになります。喜怒哀楽が激しく精神的に不安定な霊数８の人を霊数７の人の親切心が放っておけない間柄です。不倫には注意を。");
    msg.push("　ないものねだりが生じやすい関係です。２人ともどちらかというと精神性の強いもの同士で、精神性の競い合いではお互いに一歩も譲らない強引さを示します。さらにそれが高じて、物質面でもお互いに持ち家とか株の多少を競い合うようにも。このカップルは根っからのライバル。ただ苦境に立たされると、助け合う優しさを発揮します。");
    msg.push("　黙っていてもお互いの考えていることがツーカーで分かってしまう双生児のような相互理解がある組合せです。２人でいるだけで何となく豊かさを感じる相手。ただ、お互いに権力意識が強く、一見、独立心も旺盛に見えるが、内面はひ弱で、偏見が多きくなるのが、このカップルの落とし穴。激情や向こう見ずの行動には注意が必要。");
    msg.push("　お互い強く魅かれ合っているのになぜか自分からはいい出しにくい間柄。じっと相手が来てくれるのを待つことが多くなります。霊数８の人は、賑やかな現実派。霊数９の人はソフトな芸術家。冒険心と好奇心は五分五分です。お互いのプラス面とマイナス面を上手に補い合い、相性はかなりいい。ただ、不倫と嫉妬にだけは要注意。");
    msg.push("　会った当初は非常に気が合いますが、時間が経つにつれてシラけてしまう間柄です。同じ霊数のため、まったく分身を見る思いで感動することもありますが、２人の間に新鮮さは期待できません。また、お互い議論派で、例えば川を渡るのに舟の用意よりも川幅の計測をするような２人です。確かに仲はいいのですが、活路が開けない２人です。");
    let count = 0;

    for (let i = 0; i <= 9; i += 1) {
      for (let j = 0; j <= 9; j += 1) {
        if (i <= j) {
          aisho[i][j] = msg[count];
          count += 1;
        } else {
          aisho[i][j] = aisho[j][i];
        }
      }
    }
    return aisho[r1][r2];
  }

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
        <View>
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
});
