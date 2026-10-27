// ここに70件分のデータを入れます。
// file  : images フォルダに入れる画像ファイル名（例: item01.jpg）
// name  : 作品の名前
// story : 制作秘話・コメント
//
// name と story を1件ずつ埋めてください。画像をまだ入れていない行は
// file を空のままにしておくと「？」のシルエットで表示されます。

const items = [
  {
    file: "item01.jpg",
    name: "月灯りパンプキンショコラサンド",
    story: "プロンプト通りにしたら、キャラクター画像が消えて普通のパッケージになってしまった最初の作品です"
  },
  {
    file: "item02.jpg",
    name: "承認済スタンプサブレ",
    story: "せっかくなので総務で使うものをと考えました。"
  },
  {
    file: "item03.jpg",
    name: "ひとこと付箋ラングドシャ",
    story: "今度は付箋をモチーフに作っていただいた3品目です"
  },
  {
    file: "item04.jpg",
    name: "書類整理のチョコウエハース",
    story: "机の上の書類がお菓子なら、すぐに片付くのに…そんな気持ちで作りました🤣"
  },
  {
    file: "item05.jpg",
    name: "くるくる議事録ロール",
    story: "議事録がモチーフです。5作目もパッケージの形が同じで変化が欲しくなってきました。"
  },
  {
    file: "item06.jpg",
    name: "とっておき限定　花まりマラカスボンボン",
    story: "ひとやすみ記事で変身した姿をシークレットにしようかと思い制作しました。「とっておきのお菓子を作ってください」と伝えた所、名前が「とっておき限定」になりました。違う、そうじゃない🤣"
  },
  {
    file: "item07.jpg",
    name: "くるくる議事録ロール　メープルバタークッキー",
    story: "何度もしているから、省略しても作ってくれるかな？と感じて、画像だけハロウィンにして、指示を省略しました。\n出てきたのは同じ議事録のお菓子…微妙にパッケージも違うので載せることにしました。"
  },
  {
    file: "item08.jpg",
    name: "私らしく進む　ひとこと付箋ラングドシャ",
    story: "マラカスGETの画像をもとにしたお菓子です。最初は議事録ロールでした。流石に議事録3個はいりません🤣付箋は出ましたが、カラー付箋なので採用することにしました。"
  },
  {
    file: "item09.jpg",
    name: "月灯り稲穂の琥珀糖",
    story: "秋ラノベ祭り参加でできたワンシーンがキラキラで、今まで出ていないお菓子を作ってもらいました。\n記事で使用した画像を入れようとここから1つ目の暴走が始まります。1つ目のシークレットお菓子です"
  },
  {
    file: "item10.jpg",
    name: "漆黒カヌレ",
    story: "闇落ちプロンプトをもとに、必殺技を合わせた記事の画像です。食べたらnoteの残業が確定します。"
  },
  {
    file: "item11.jpg",
    name: "黒糖きなこ　揚げせんべい",
    story: "敗北記事、必殺技プロンプトから生まれた1枚。\n最初はフィナンシェでした。「斬禍閃」というパッケージでした。\n「AIさん、文字が違います」と伝えたら、「斬福一閃」という大福になりました。修正を諦めて、最初から伝え直してできた一品です🤣"
  },
  {
    file: "item12.jpg",
    name: "花しおりマドレーヌ",
    story: "何も苦労せずにできた一品。欲を言うとAIさんの髪はそんなに長くないです。パッケージも最初の時の画像に引っ張られています。"
  },
  {
    file: "item13.jpg",
    name: "ブールドネージュ",
    story: "王子ごっこの記事のお菓子です。\n一発でできた記念の一品です。"
  },
  {
    file: "item14.jpg",
    name: "うちの子スタイルバウム",
    story: "コバンさんの記事でできたお菓子です。\nAIさん、良い感じに作ってくれました。"
  },
  {
    file: "item15.jpg",
    name: "ひみつのたね　プラリネタルト",
    story: "コバンさんの記事でできたお菓子です。登場したのも予想外でしたので、2つ目のシークレットにしました。\n最初に作った分は綿毛の本数か寂しかったので、増やしてもらいました。"
  },
  {
    file: "item16.jpg",
    name: "夕桜ほうじ茶最中",
    story: "敗北記事が遅れた時に投稿したワンシーンです。\n和菓子でお気に入りの1つです。"
  },
  {
    file: "item17.jpg",
    name: "校閲封印　マカロン",
    story: "闇落ちプロンプトからできたお菓子です。\n最初の一枚は暗くてハロウィンよりも違う世界になったので、少し明るくしていただきました。"
  },
  {
    file: "item18.jpg",
    name: "祝福強制　ミルフィーユ",
    story: "アイルさんの闇落ちプロンプトからできた一品です。\n食べると祝福される素敵な一品になりました。"
  },
  {
    file: "item19.jpg",
    name: "うちの子🌱スイーツコレクション",
    story: "コバンさんの記事の1枚です。\nスタイルバウムを作ろうとして、食べているシーンになってしまいました。\nこれも可愛いので3つ目のシークレットになりました。"
  },
  {
    file: "item20.jpg",
    name: "隠す気がない大型クリップ",
    story: "ここから次の暴走が始まります。\n不思議なお菓子を作ろうとしました。\n最初の提案はシークレットクリップ。\n袋を開けるまで中身が見えないという説明です。\n確かに個包装はわからない。ですがパッケージに思いっきり中身が描かれています🤣"
  },
  {
    file: "item21.jpg",
    name: "",
    story: ""
  },
  {
    file: "item22.jpg",
    name: "",
    story: ""
  },
  {
    file: "item23.jpg",
    name: "",
    story: ""
  },
  {
    file: "item24.jpg",
    name: "",
    story: ""
  },
  {
    file: "item25.jpg",
    name: "",
    story: ""
  },
  {
    file: "item26.jpg",
    name: "",
    story: ""
  },
  {
    file: "item27.jpg",
    name: "",
    story: ""
  },
  {
    file: "item28.jpg",
    name: "",
    story: ""
  },
  {
    file: "item29.jpg",
    name: "",
    story: ""
  },
  {
    file: "item30.jpg",
    name: "",
    story: ""
  },
  {
    file: "item31.jpg",
    name: "",
    story: ""
  },
  {
    file: "item32.jpg",
    name: "",
    story: ""
  },
  {
    file: "item33.jpg",
    name: "",
    story: ""
  },
  {
    file: "item34.jpg",
    name: "",
    story: ""
  },
  {
    file: "item35.jpg",
    name: "",
    story: ""
  },
  {
    file: "item36.jpg",
    name: "",
    story: ""
  },
  {
    file: "item37.jpg",
    name: "",
    story: ""
  },
  {
    file: "item38.jpg",
    name: "",
    story: ""
  },
  {
    file: "item39.jpg",
    name: "",
    story: ""
  },
  {
    file: "item40.jpg",
    name: "",
    story: ""
  },
  {
    file: "item41.jpg",
    name: "",
    story: ""
  },
  {
    file: "item42.jpg",
    name: "",
    story: ""
  },
  {
    file: "item43.jpg",
    name: "",
    story: ""
  },
  {
    file: "item44.jpg",
    name: "",
    story: ""
  },
  {
    file: "item45.jpg",
    name: "",
    story: ""
  },
  {
    file: "item46.jpg",
    name: "",
    story: ""
  },
  {
    file: "item47.jpg",
    name: "",
    story: ""
  },
  {
    file: "item48.jpg",
    name: "",
    story: ""
  },
  {
    file: "item49.jpg",
    name: "",
    story: ""
  },
  {
    file: "item50.jpg",
    name: "",
    story: ""
  },
  {
    file: "item51.jpg",
    name: "",
    story: ""
  },
  {
    file: "item52.jpg",
    name: "",
    story: ""
  },
  {
    file: "item53.jpg",
    name: "",
    story: ""
  },
  {
    file: "item54.jpg",
    name: "",
    story: ""
  },
  {
    file: "item55.jpg",
    name: "",
    story: ""
  },
  {
    file: "item56.jpg",
    name: "",
    story: ""
  },
  {
    file: "item57.jpg",
    name: "",
    story: ""
  },
  {
    file: "item58.jpg",
    name: "",
    story: ""
  },
  {
    file: "item59.jpg",
    name: "",
    story: ""
  },
  {
    file: "item60.jpg",
    name: "",
    story: ""
  },
  {
    file: "item61.jpg",
    name: "",
    story: ""
  },
  {
    file: "item62.jpg",
    name: "",
    story: ""
  },
  {
    file: "item63.jpg",
    name: "",
    story: ""
  },
  {
    file: "item64.jpg",
    name: "",
    story: ""
  },
  {
    file: "item65.jpg",
    name: "",
    story: ""
  },
  {
    file: "item66.jpg",
    name: "",
    story: ""
  },
  {
    file: "item67.jpg",
    name: "",
    story: ""
  },
  {
    file: "item68.jpg",
    name: "",
    story: ""
  },
  {
    file: "item69.jpg",
    name: "",
    story: ""
  },
  {
    file: "item70.jpg",
    name: "",
    story: ""
  }
];
