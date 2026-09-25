const config2 = {
        showDate: true,
        showContext: true,
        showDesc: true,
        showIg: true,
        showChapterTitle: true
};
/*
{
        chapter: ,
        title: '', artist: '',
        context: '', desc: '',
        date: '', ytId: '', start: 0, end: 0,
        lyrics:``,
        lyrics_rom:``,
        lyrics_cn:``,
        trans_source_cn:``,
        lyrics_en:``,
        trans_source_en:``,
}
*/
const chapters2 = [
        {
                id: null,
                title: 'Chapter Undefined',
                subtitle: 'Year Undefined'
        },
        {
                id: -1,
                title: 'Chapter -01',
                subtitle: '< 2020'
        },
        {
                id: 0,
                title: 'Chapter 00',
                subtitle: '> 2020'
        },
        {
                id: 1,
                title: 'Chapter 01',
                subtitle: '2023'
        },
        {
                id: 2,
                title: 'Chapter 02',
                subtitle: '2024'
        },
        {
                id: 3,
                title: 'Chapter 03',
                subtitle: '2025'
        },
        {
                id: 4,
                title: 'Chapter 04',
                subtitle: '2026'
        }
];

const tracks2 = [
        //Chapter -1
        {
                chapter: -1,
                title: 'Faded',
                artist: 'Alan Walker',
                context: '',
                desc: '',
                date: '',
                ytId: '60ItHLz5WEA', start: 0,
                lyrics: ``,
        },
        {
                chapter: -1,
                title: 'Monkey Dance',
                artist: 'Tones and I',
                context: '',
                desc: '',
                date: '',
                ytId: 'q0hyYWKXF0Q',
                start: 0,
                lyrics: `They say, oh my God I see the way you shine
Take your hand, my dear, and place them both in mine
You know you stopped me dead while I was passing by
And now I beg to see you dance just one more time
Ooh, I see you, see you, see you every time
And oh my I, I, I like your style
You, you make me, make me, make me wanna cry
And now I beg to see you dance just one more time
So they say
"Dance for me, dance for me, dance for me, oh-oh
I've never seen anybody do the things you do before"
They say, "Move for me, move for me, move for me, ay-ay
And when you're done, I'll make you do it all again"
I said, "Oh my God I see you walking by
Take my hands, my dear, and look me in my eyes"
Just like a monkey, I've been dancing my whole life
But you just beg to see me dance just one more time
Ooh, I see you, see you, see you every time
And oh my I, I, I like your style
You, you make me, make me, make me wanna cry
And now I beg to see you dance just one more time
So they say
"Dance for me, dance for me, dance for me, oh-oh
I've never seen anybody do the things you do before"
They say, "Move for me, move for me, move for me, ay-ay
And when you're done, I'll make you do it all again"
They say
"Dance for me, dance for me, dance for me, oh-oh, oh-oh, oh-oh
I've never seen anybody do the things you do before"
They say, "Move for me, move for me, move for me, ay-ay
And when you're done, I'll make you do it all again"
Ooh
Whoa-oh, whoa-oh, oh
Ooh
Ah, ah, ah
They say
"Dance for me, dance for me, dance for me, oh-oh
I've never seen anybody do the things you do before
They say, "Move for me, move for me, move for me, ay-ay
And when you're done, I'll make you do it all again"
They say
"Dance for me, dance for me, dance for me, oh-oh, oh-oh, oh-oh
I've never seen anybody do the things you do before"
They say, "Move for me, move for me, move for me, ay-ay
And when you're done, I'll make you do it all again
All again"
        `,
                lyrics_zh: `
        `,
                trans_source_zh: ''
        },
        //Chapter 00
        {
                chapter: 0,
                title: 'It\'s Not Like I Like You!! (Instrumental)',
                artist: 'Static-P',
                context: '',
                desc: '',
                date: 'MAY 2021',
                ytId: '9UPo46mU4fE',
                start: 0,
                lyrics: `Instrumental - No Lyrics`,
        },
        {
                chapter: 0,
                title: 'Toxic',
                artist: 'BoyWithUke',
                context: '',
                desc: '',
                date: '',
                ytId: 'Mvaosumc4hU',
                start: 0,
                lyrics: `All my friends are toxic, all ambitionless
So rude and always negative
I need new friends, but it's not that quick and easy
Oh, I'm drowning, let me breathe
I'm better off all by myself
Though I'm feeling kinda empty without somebody else
Oh, I hear you crying out for help
But you never showed for me when I was ringing your cellphone
Oh, you don't know how it feels to be alone
Baby, oh, I'll make you know, I'll make you know, oh
I'm drowning, let me breathe
I'm drowning, let me breathe
I'm drowning, let me breathe
I'm drowning, let me breathe
But life is immaculate, backin' it up a bit
Countin' my hours and knocking on wood
Avoiding my opposites, chewin' on chocolate
Had a bit limited time, but I should
Be good for a minute, don't want to admit it
I'm running on seconds, I'm rigid, I'm screwed
Don't know what to do, I'm thinking of you
I'm drinking up bottles and bottles of booze
I'm better off all by myself
Though I'm feeling kinda empty without somebody else
Oh, I hear you crying out for help
But you never showed for me when I was ringing your cellphone
Oh, you don't know how it feels to be alone
Baby, oh, I'll make you know, I'll make you know, oh
I fell into your river
That's where you told me lies
You said that I'd feel better
But this is where good guys die
You took my pride away, but
You cannot take my light
I'll find another way out
But now you're takin' my light
Don't you see how I
I'm better off all by myself
Though I'm feeling kinda empty without somebody else
Oh, I hear you crying out for help
But you never showed for me when I was ringing your cellphone
Oh, you don't know how it feels to be alone
Baby, oh, I'll make you know, I'll make you know, oh
I'm better off all by myself
Though I'm feeling kinda empty without somebody else
Oh, I hear you crying out for help
But you never showed for me when I was ringin' your cellphone
Oh, you don't know how it feels to be alone
Baby, oh, I'll make you know, I'll make you know, oh
        `,
                lyrics_zh: `
        `,
                trans_source_zh: ''
        },
        // Chapter 01
        {
                chapter: 1,
                title: '',
                artist: '',
                context: '',
                desc: '',
                date: '',
                ytId: '',
                start: 0,
                lyrics: `
        `,
                lyrics_rom: `
        `,
                lyrics_zh: `
        `,
                trans_source_zh: ''
        },
        //Chapter 02
        {
                chapter: 2,
                title: 'Take the Journey',
                artist: 'HOYO-MiX',
                context: '',
                desc: '',
                date: 'FEB 2024',
                ytId: 'JBxqC7XuecM',
                start: 0,
                lyrics: `
        `,
        },
        {
                chapter: 2,
                title: 'Interstellar Journey',
                artist: 'HOYO-MiX',
                context: '',
                desc: '',
                date: 'FEB 2024',
                ytId: '0OA9bAZcMXk',
                start: 0,
                lyrics: `
        `,
        },
        {
                chapter: 2,
                title: '星间旅行',
                artist: 'HOYO-MiX',
                context: '',
                desc: '',
                date: 'FEB 2024',
                ytId: 'wy6GdDlurms',
                start: 0,
                lyrics: `
        `,
        },
        {
                chapter: 2,
                title: 'Your Color',
                artist: 'HOYO-MiX',
                context: '',
                desc: '',
                date: 'JUL 2024',
                ytId: '-tHYCYgEX2I',
                start: 0,
                lyrics: `Instrumental - No Lyrics`,
        },
        {
                chapter: 2,
                title: 'Tout est bien qui finit bien',
                artist: 'HOYO-MiX',
                context: '',
                desc: '',
                date: 'JUL 2024',
                ytId: 'my-z6URjvy4',
                start: 0,
                lyrics: `Instrumental - No Lyrics`,
        },
        {
                chapter: 2,
                title: '身後',
                artist: '張惠妹',
                context: '',
                desc: '',
                date: 'AUG 2024',
                ytId: '4V3hxNyiwaA',
                start: 0,
                lyrics: `我 喜歡看你孩子般走在前頭
像第一次發現世界的探索
告訴我 鮮豔的顏色好多

你 改不掉突然停下來回過頭
想再一次習慣性確認什麼
像是要牽手 或是一起走
直到風景褪色的時候

你身後 會有我
守護你看見盡頭的背後
那片天空 等著另一端新的生活

能不能答應我
臨別時候或許你就先走
徒留感傷就請你留給我
讓我面對你往後的寂寞

能不能答應我
分開時候放心回頭看我
讓我明白牽掛著你的手
鬆開後還能忍住淚向你告別揮手

記得你愛過 你要記得你愛過
記得你曾經走過 記得繼續向前走
記得我眼中 見過你停留
你的身影一直在我的世界裡駐守

能不能答應我
臨別時你或許就先走
徒留的感傷都留給我
讓我面對你往後的寂寞

能不能答應我
分開時候放心回頭看我
讓我明白牽掛著你的手
鬆開後能拭去淚向你告別揮手

別急著答應我
難過的話現在不要說
好好享受安寧的溫柔

能不能答應我
再見時候就別再認出我
別讓我承受牽過的你的手
再重逢已換作你向我告別揮手`,
        },
        //Chapter 03
        {
                chapter: 3,
                title: 'フォニイ',
                artist: 'Fussy Eaters',
                context: '',
                desc: '',
                date: 'APR 2025',
                ytId: 'BKSOApu_TAg',
                start: 0,
                lyrics: ``,
        },
        {
                chapter: 3,
                title: 'マインドブランド',
                artist: '25時、ナイトコードで。',
                context: '',
                desc: '',
                date: 'APR 2025',
                ytId: '59wGGyaxvtg',
                start: 0,
                lyrics: ``
        },
        {
                chapter: 3,
                title: 'Journey',
                artist: 'DECO*27',
                context: '',
                desc: '',
                date: 'APR 2025',
                ytId: 'BTekXS9d-no',
                start: 0,
                lyrics: `
        `,
        },
        {
                chapter: 3,
                title: 'そこに在る、光',
                artist: '25時、ナイトコードで。',
                context: 'Movie - 劇場版プロジェクトセカイ 壊れたセカイと歌えないミク',
                desc: '',
                date: 'APR 2025',
                ytId: 'WkGgD_RF5V8', start: 0,
                lyrics: ``,
        },
        {
                chapter: 3,
                title: 'ファイアダンス',
                artist: 'Vivid BAD SQUAD',
                context: 'Movie - 劇場版プロジェクトセカイ 壊れたセカイと歌えないミク',
                desc: '',
                date: 'APR 2025',
                ytId: 'Zqs0lEADyFo', start: 0,
                lyrics: ``,
        },
        {
                chapter: 3,
                title: 'ぼくのかみさま',
                artist: 'ワンダーランズ×ショウタイム',
                context: '',
                desc: '',
                date: 'MAY 2025',
                ytId: 'aNS1lu_PkpQ',
                start: 0,
                lyrics: ``
        },
        {
                chapter: 3,
                title: 'スマイル*シンフォニー',
                artist: 'ワンダーランズ×ショウタイム',
                context: 'Movie - 劇場版プロジェクトセカイ 壊れたセカイと歌えないミク',
                desc: '',
                date: 'MAY 2025',
                ytId: '91O6VohptEo',
                start: 0,
                lyrics: ``
        },
        {
                chapter: 3,
                title: 'SToRY',
                artist: 'Leo/need',
                context: 'Movie - 劇場版プロジェクトセカイ 壊れたセカイと歌えないミク',
                desc: '',
                date: 'MAY 2025',
                ytId: '9fnQklaziX4',
                start: 0,
                lyrics: ``
        },
        {
                chapter: 3,
                title: 'にっこり^^調査隊のテーマ',
                artist: 'ワンダーランズ×ショウタイム',
                context: '',
                desc: '',
                date: 'JUN 2025',
                ytId: 'FvnoqCn6YOY',
                start: 0,
                lyrics: ``
        },
        {
                chapter: 3,
                title: '混沌ブギ',
                artist: 'jon-YAKITORY',
                context: '',
                desc: '',
                date: 'JUN 2025',
                ytId: '1Swg-aBO9eY',
                start: 0,
                lyrics: `純情？なにそれ 愛情？なにそれ
美味しいの？ねぇ
美味しいのって なあ
乱暴ダメダメ 感情捨て去り
いっせーので ぶっ飛ぶだけ

混沌ブギウギ ハッピー特盛
ドンビーシャイだ ドンビーシャイだもう
段々堕ちてく IQクソワロ
いっせーので 死ぬまで踊れ

完全体の山田
無関心なんてありえない
三千体の桑田の方がいいかな

わがままばかりじゃ落ち着かない
冷や汗が出すぎて気持ち悪い
当たり前のことも手につかない
もうなんて言ったらいい？ばかりで

世間体とか投げ出したい
狂った様に泣き出したい
思うがまま生きて消えていきたいな

純情？なにそれ 愛情？なにそれ
美味しいの？ねぇ
美味しいのって なあ
乱暴ダメダメ 感情捨て去り
いっせーので ぶっ飛ぶだけ

混沌ブギウギ ハッピー特盛
ドンビーシャイだ ドンビーシャイだもう
段々堕ちてく IQクソワロ
いっせーので 死ぬまで踊れ

ワンツーまさかり 三四 刈り取り
もういいんだって もういいんだってもう
ハッピーおかわり Give meトキメキ
いっせーので さあ 飛び込め

本能ブギウギ 混沌特盛
もういいんだって もういいんだってもう
最低 奴等のLike a ミステリ
いっせーので ぶっ飛ぶだけ

混沌ブギウギ ハッピー特盛
ドンビーシャイだ ドンビーシャイだもう
段々堕ちてく 人生クソワロ
いっせーので 死ぬまで踊れ

もういいや全部全部ほら
忘れてしまおう
簡単なことじゃないが
我々なら出来るだろう
なあ？ Get Down`
        },
        {
                chapter: 3,
                title: 'オルターエゴ',
                artist: 'Vivid BAD SQUAD',
                context: '',
                desc: '',
                date: 'AUG 2026',
                ytId: 'y_lZimJsdjU',
                start: 0,
                lyrics: `現在時刻午前4時
有象無象にもう飽き飽きだよ
存在 形なんて
もはやミュータントさ

白に黒に馴染めず
曖の昧な色して
息を吸って 息を吐いて
死んでるようなものだな

実際音頼りにぎりぎり生きていた

もうどうなっていいんだって
恐れなんかは全くないって
沈む夕日が最後は地平に
堕ちてゆくことだけ知ってる

それでもいい お前だけは
灰になって消えてくれ
静かに狂ったその姿に
呑み込まれてしまう前に

零でも果てでもない
無数の目 頭の中
ぐだぐだうだうだああうるせえな

人間なんて辞めちまえ
アダムとイヴが犯した罪の実
善も悪も同じ
つくりものなんだよ

後ろの正面で
誰か教えてくれたんだ
何者にもなりたかった
何者にもなれないから

本当はもう気づいている
許される日がこないことなんて
咲いた花弁が最期は地上に
堕ち塵になって風に舞ってく

それでもいい お前だけは
哀に犯され消えてくれ
偽り纏ったその笑顔に
呑み込まれてしまう前に

色即是空の世
無数の手 頭の中
ぐだぐだうだうだああうるせえな

孤独抱え期待なんてされなかった少年
裏切られて傷を負った未成熟な少女も
あぁそうか僕のことだったね

君も僕で君も僕
一人には戻れないんだよ

笑ってみせてくれ

それでもいい お前だけは
青さに溺れて消えてくれ
悲しみに満ちたその瞳に
呑み込まれてしまう前に

零で割れ世界を
嗄れた唄口ずさんで
フィナーレの音が鳴り響いてる

最期の日 僕によく似た
お前の生きた証を
奪って壊して祈って焼べるよ
今日でもう終わりなんだ

灰に咲け 全てが
朽ち果ててしまう前に
笑顔を浮かべてお辞儀をしましょう

きみがすきなうた ながれはじけた`,
                lyrics_rom: `genzai jikoku gozen yoji
uzoumuzou ni mou akiaki da yo
sonzai katachi nante
mohaya myuutanto sa

shiro ni kuro ni najimezu
ai no mai na iro shite
iki wo sutte iki wo haite
shinderu you na mono da na

jissai oto tayori ni girigiri ikite ita

mou dou natte iin datte
osore nanka wa mattakunai tte
shizumu yuuhi ga saigo wa chihei ni
ochite yuku koto dake shitteru

soredemo ii omae dake wa
hai ni natte kiete kure
shizuka ni kurutta sono sugata ni
nomikomarete shimau mae ni

zero demo hate demo nai
musuu no me atama no naka
gudaguda udauda aa urusee na

ningen nante yamechimae
adamu to ibu ga okashita tsumi no mi
zen mo aku mo onaji
tsukurimono nanda yo

ushiro no shoumen de
dareka oshiete kuretan da
nanimono ni mo naritakatta
nanimono ni mo narenai kara

hontou wa mou kizuite iru
yurusareru hi ga konai koto nante
saita kaben ga saigo wa chijou ni
ochi chiri ni natte kaze ni matteku

soredemo ii omae dake wa
ai ni okasare kiete kure
itsuwari matotta sono egao ni
nomikomarete shimau mae ni

shikisokuzekuu no yo
musuu no te atama no naka
gudaguda udauda aa urusee na

kodoku kakae kitai nante sarenakatta shounen
uragirarete kizu wo otta miseijuku na shoujo mo
aa souka boku no koto datta ne

kimi mo boku de kimi mo boku
hitori ni wa modorenain da yo

waratte misete kure

soredemo ii omae dake wa
aosa ni oborete kiete kure
kanashimi ni michita sono hitomi ni
nomikomarete shimau mae ni

zero de ware sekai wo
shagareta uta kuchizusande
finaare no oto ga narihibiiteru

saigo no hi boku ni yoku nita
omae no ikita akashi wo
ubatte kowashite inotte kuberu yo
kyou de mou owari nanda

hai ni sake subete ga
kuchihatete shimau mae ni
egao wo ukabete ojigi wo shimashou

kimi ga suki na uta nagare hajiketa`,
                lyrics_zh: `
        `,
                trans_source_zh: '',
                lyrics_en: `The present time is 4 AM,
I'm sick and tired of everyone.
The shape of my existence
Has already mutated.

Without being graded into black or white,
My colors become vague.
Inhale, then exhale,
It's almost as if I'm dead.

But in reality, if one listens, I'm just about alive.

I say that I don't care what happens anymore,
That I don't have single drop of fear.
But the only thing I know is that the end will be
The evening sun sinking below the horizon.

But that's fine, just if you'd
Turn to ash and disappear,
Before we're swallowed by
That figure that quietly went insane.

With neither a zero or an end,
The countless eyes in my head
They blabber, going on and on and on. Oh just shut up.

How about you just quit being human?
The moral of Adam and Eve and the sin they committed,
Is that good and evil are
Just man-made fabrications.

Someone once told me that
Standing right behind me.
I wanted to make something of myself,
Exactly because I can't do just that.

The truth is I already know that
The day I'm forgiven will never come.
The final moments of a bloomed petal are when it falls
To the ground to become dirt, whirling in the wind.

But that's fine, just if you'd
Get broken by sorrow and disappear.
Before we're swallowed by
That smile coated with lies.

A world where matter is void,
The countless hands in my head.
They blabber, going on and on and on. Oh just shut up.

Both the boy carrying loneliness who wasn't allowed to hope,
And the naïve girl who was betrayed and had to bear the wounds,
Oh, I see. They were both me.

You are me, and you are also me.
I can't go back to being on my own.

Please show me a smile.

But it's fine, just if you'd
Drown in the blue and disappear.
Before we're swallowed by
Those eyes filled with pain.

At zero, I hum a hoarse song
About the broken world.
And the sound of the finale rings out.

The day before death, I'll take the proof
Of your existence, so similar to mine.
I'll steal it away, destroy it, then pray, and burn it.
This all ends today, after all.

Blooming from the ash,
Before everything crumbles away,
Give me a smile and let's bow a greeting.

That song you liked so much streamed out.`,
                trans_source_en: `Project SEKAI Fandom Wiki | Translate by Anonymous and Migu39`,
        },
        {
                chapter: 3,
                title: 'てらてら',
                artist: 'Leo/need',
                context: '', desc: '',
                date: 'SEP 2025', ytId: 'diDsFjpV8yw', start: 0,
                lyrics: ``,
        },
        {
                chapter: 3,
                title: 'Mr. Showtime',
                artist: 'ワンダーランズ×ショウタイム',
                context: '', desc: '',
                date: 'SEP 2025', ytId: 'jSL3Q2BHtH4', start: 0,
                lyrics: ``,
        },
        {
                chapter: 3,
                title: 'サイバーパンクデッドボーイ',
                artist: 'ワンダーランズ×ショウタイム',
                context: '', desc: '',
                date: 'SEP 2025', ytId: 'TxOA6VGGxgU', start: 0,
                lyrics: ``,
        },
        {
                chapter: 3,
                title: 'すれすれ',
                artist: 'Leo/need',
                context: '',
                desc: '',
                date: 'SEP 2025',
                ytId: 'Dn1ym4Z416A',
                start: 0,
                lyrics: `[00:24.84]ああすれば良かった
[00:27.79]こう言えば良かった
[00:30.26]良かったかなんて別に
[00:33.12]わからないけど
[00:35.35]
[00:35.83]後悔なんてしたくない
[00:38.23]でもどうでもよくもしたくない
[00:41.24]ちょうどいいところ
[00:43.31]こころ収まらなくて
[00:46.10]
[00:47.02]答え合わせをさせてよ
[00:49.90]何がいけなかったですか
[00:52.78]試すようなこと したくないのに
[00:55.78]確かめたくなっちゃって
[00:57.79]
[00:58.49]僕たちは どうして
[01:01.02]すぐ間違えて しまうんだろう
[01:03.80]大切の優先順位
[01:06.63]わかんなくなる
[01:08.81]
[01:09.76]涙を拭いて 歩いた
[01:12.44]あのときの 選択を
[01:15.23]疑いたくなんてなかった
[01:17.69]何してんだろう
[01:20.16]
[01:20.77]バカみたいだなぁ
[01:23.53]
[01:31.80]このままで良いのかなって
[01:34.14]良いわけがないのにね
[01:37.11]ねぇそれなりって どれくらい?
[01:39.03]普通なんて? 言われても
[01:40.45]取れない 不安だけ 苦痛に なんだよ
[01:42.43]
[01:43.10]君はいつもこんなに 近くにいんのに
[01:45.62]なんでこんな遠くに 感じるんだろう
[01:48.59]こころの場所なんて それぞれなのに
[01:51.69]おんなじを求めちゃって
[01:53.55]
[01:54.25]思い通り いかない
[01:56.88]そんなのは 当たり前と
[01:59.66]何でもない ような顔して
[02:02.19]笑わないでよ
[02:04.48]
[02:05.34]涙こらえて 隠した
[02:08.05]君の痛みを 話して
[02:10.73]何にもできずにただ待って
[02:13.26]すれ違うのは
[02:15.66]
[02:16.23]もうイヤだよ
[02:19.17]
[02:29.84]撫でようとして 傷を広げて
[02:32.50]知れば知るほど わかんなくなってく
[02:36.03]こころってほんと すれすれなんだ
[02:39.15]触れそうで触れなくて
[02:41.44]
[02:42.22]僕たちは どうして
[02:44.33]すぐ間違えて しまうんだろう
[02:47.37]
[02:49.87]答えのない 感情に
[02:52.70]理由を つけたがるんだよ
[02:55.48]あぁ すれば こう すればって
[02:57.93]わかんなくなる
[03:00.62]
[03:01.11]涙を拭いて 歩いた
[03:03.87]あのときの 選択を
[03:06.62]痛みに変えてしまったんだ
[03:09.12]何してんだろう
[03:11.42]
[03:12.09]とらわれてさ
[03:14.75]バカみたいだなぁ`,
        },
        {
                chapter: 3,
                title: '六兆年と一夜物語',
                artist: 'Leo/need',
                context: '', desc: '',
                date: 'OCT 2025', ytId: 'uDgikBUvIlQ', start: 0,
                lyrics: ``,
        },
        {
                chapter: 3,
                title: 'のだ',
                artist: '大漠波新',
                context: '',
                desc: '',
                date: 'OCT 2025',
                ytId: 'vY8iwpN3GXQ',
                start: 0,
                lyrics: `
        `,
        },
        {
                chapter: 3,
                title: '初嵐',
                artist: 'DECO*27',
                context: '',
                desc: '',
                date: 'NOV 2025',
                ytId: 'L7BxD7HHWl4',
                start: 0,
                lyrics: `
        `,
        },
        {
                chapter: 3,
                title: '夜もすがら君想ふ',
                artist: 'Leo/need',
                context: '',
                desc: '',
                date: 'NOV 2025',
                ytId: 'M39eT_tbtjI',
                start: 0,
                lyrics: `
        `,
        },
        {
                chapter: 3,
                title: '乙女解剖',
                artist: '25時、ナイトコードで。',
                context: '',
                desc: '',
                date: 'NOV 2025',
                ytId: 'JluOv0KD9Wc',
                start: 0,
                lyrics: `
        `,
        },
        //Chapter 4
        {
                chapter: 4,
                title: 'ロキ',
                artist: 'Leo/need',
                context: '',
                desc: '',
                date: 'FEB 2026',
                ytId: 'V-7cDTePL8E',
                start: 0,
                lyrics: ``
        },
        {
                chapter: 4,
                title: 'だれかの心臓になれたなら',
                artist: 'ユリイ・カノン / 月詠み',
                context: '',
                desc: '',
                date: 'MAR 2026',
                ytId: 'hZFBTnzKa54',
                start: 0,
                lyrics: `[00:00.72]「こんな世界」と嘆くだれかの
[00:04.28]生きる理由になれるでしょうか
[00:07.66]これは僕が　いま君に贈る
[00:10.85]最初で最期の愛の言葉だ
[00:14.48]
[00:28.70]街も人も歪み出した　化け物だと気付いたんだ
[00:34.49]欲動に巣食った愚かさも　全てがこの目に映る
[00:40.45]
[00:41.34]シアトリカルに手の上で誰も彼も踊らされる
[00:47.69]生まれた意味だって知らぬまま
[00:51.11]形骸化した夢は錆びついてしまった
[00:54.34]
[00:54.62]「愛をください」
[00:56.39]きっとだれもがそう願った
[00:57.87]「愛をください」
[00:58.78]そっと震えた手を取って
[01:01.06]「愛をください」
[01:02.27]心を抉る　醜いくらいに美しい愛を
[01:07.40]
[01:07.61]「こんな世界」と嘆くだれかの
[01:10.67]生きる理由になれるでしょうか
[01:14.10]いつか終わると気付いた日から
[01:17.24]死へと秒を読む心臓だ
[01:20.74]
[01:21.09]ねえ　このまま雨に溺れて
[01:23.94]藍に融けたって構わないから
[01:27.19]どうか　どうか　またあの日のように
[01:30.51]傘を差し出し笑ってみせてよ
[01:33.92]
[01:47.57]もしも夢が覚めなければ姿を変えずにいられた？
[01:53.93]解けた指から消える温度
[01:57.06]血を廻らせるのはだれの思い出？
[02:00.26]
[02:00.52]雨に濡れた廃線
[02:01.22]煤けた病棟　並んだ送電塔
[02:03.55]夕暮れのバス停　止まったままの観覧車
[02:06.82]机に咲く花　君の声も
[02:09.02]何もかも最初から無かったみたい
[02:14.24]
[02:15.13]死にたい僕は今日も息をして
[02:18.64]生きたい君は明日を見失って
[02:21.94]なのに　どうして悲しいのだろう
[02:25.21]いずれ死するのが人間だ
[02:28.71]
[02:29.07]永遠なんてないけど
[02:31.90]思い通りの日々じゃないけど
[02:35.12]脆く弱い糸に繋がれた
[02:38.51]次の夜明けがまた訪れる
[02:41.72]
[02:42.02]どんな世界も君がいるなら
[02:45.16]生きていたいって思えたんだよ
[02:48.35]僕の地獄で君はいつでも絶えず鼓動する心臓だ
[02:55.10]
[02:55.53]いつしか君がくれたように
[03:01.87]僕も、
[03:02.79]だれかの心臓になれたなら
        `,
                lyrics_zh: `
        `,
                trans_source_zh: ''
        },
        {
                chapter: 4,
                title: 'Realiti Insan',
                artist: 'Santeekee',
                context: 'Aprilla Series',
                desc: '',
                date: 'SEP 2026',
                ytId: 'IooV6ilL6YA',
                start: 0,
                lyrics: `Ku layangkan segala anganku
Ku lepaskan semua khayalan jiwaku
Berpijak di bumi yang satu
Memandang tinggi di langit biru
Satu janji di dalam hati
Satu mimpi yang akan ku raih
Harapanku dalam hidup ini
Ku ingin menggapai cita dan cinta
Ini bukanlah satu mimpi
Atau ilusi dalam jiwa yang sunyi
Ini adalah realiti
Keyakinan insan yang penuh visi
Satu janji di dalam hati
Satu mimpi yang akan ku raih
Harapanku dalam hidup ini
Ku ingin menggapai cita dan cinta

Satu, satu mimpi
Di dalam hidupku ini
Satu, satu janji
Yang ku gapai pasti
Satu, satu mimpi
Di dalam hidupku ini
Satu, satu janji
Yang ku gapai pasti

Ini bukanlah satu mimpi
Atau ilusi dalam jiwa yang sunyi
Ini adalah realiti
Keyakinan insan yang penuh visi
Satu janji di dalam hati
Satu mimpi yang akan ku raih
Harapanku dalam hidup ini
Ku ingin menggapai cita dan cinta

Satu, satu mimpi
Di dalam hidupku ini
Satu, satu janji
Yang ku gapai pasti
Satu, satu mimpi
Di dalam hidupku ini
Satu, satu janji
Yang ku gapai pasti
Satu, satu mimpi
Di dalam hidupku ini
Satu, satu janji
Yang ku gapai pasti

Satu, satu mimpi
Di dalam hidupku ini
Satu, satu janji
Yang ku gapai pasti
        `,
                lyrics_zh: `
        `,
                trans_source_zh: ''
        },
];

// Universal aliases for accessibility and namespace safety
window.tracks2 = tracks2;
window.chapters2 = chapters2;
window.config2 = config2;
