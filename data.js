const config = {
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
const tracks = [
    //Chapter -1
    {
        chapter: -1,
        title: '青春修炼手册', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'C8o_SLoyy44', start: 0,
    },
    {
        chapter: -1,
        title: '大梦想家', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'B03RJGMch-c', start: 0,
    },
    {
        chapter: -1,
        title: '宠爱', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'td3em3qn1BU', start: 0,
    },
    {
        chapter: -1,
        title: '魔法城堡', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'oH0ydhFHsWg', start: 0,
    },
    {
        chapter: -1,
        title: '幸运符号', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'a-yvFsicYrQ', start: 0,
    },
    {
        chapter: -1,
        title: '加油! AMIGO', artist: 'TFBOYS',
        context: '', desc: '',
        date: '', ytId: 'u8M_udtlDxU', start: 0,
    },
    {
        chapter: -1,
        title: '来自天堂的魔鬼', artist: 'GEM邓紫棋',
        context: '', desc: '',
        date: '', ytId: 'FWtbGkpdoP4', start: 0,
    },
    {
        chapter: -1,
        title: '三生三世', artist: '张杰',
        context: '《三生三世十里桃花》片头曲', desc: '',
        date: '', ytId: 'wdtEWS2D9xo', start: 0,
        lyrics: `
            [00:29.83]握不紧那段过往
            [00:33.24]冥灭了结魄光芒
            [00:36.69]那一滴离别的泪
            [00:40.24]灼烧着我的胸膛
            [00:43.75]爱在天地中流转
            [00:47.27]一颗心为谁奔忙
            [00:50.78]四海八荒身在何方
            [00:54.38]岁月该如何安放
            [00:57.98]听风声在沙沙作响
            [01:01.28]敲打着谁的愁肠
            [01:04.84]思念在一瞬间生长
            [01:08.44]才忘了夜多漫长
            [01:11.95]掌心的泪握到滚烫
            [01:15.15]只愿为你三生痴狂
            [01:19.11]落花满天又闻琴香
            [01:22.61]与你天地间徜徉
            [01:26.11]如果爱太荒凉我陪你梦一场
            [01:29.66]赎回你所有泪光
            [01:33.21]这一路有多远这三世有多长
            [01:36.66]执手到地老天荒
            [01:40.22]风凄凄雾茫茫雨滚滚雪漫漫
            [01:43.72]一步步都陪你同往
            [01:47.36]牵着手别惊慌管明天会怎样
            [01:50.76]哪怕注定流浪哪怕海角天涯
            [02:26.20]听风声在沙沙作响
            [02:29.63]敲打着谁的愁肠
            [02:33.09]思念在一瞬间生长
            [02:36.59]才忘了夜多漫长
            [02:40.20]掌心的泪握到滚烫
            [02:43.43]只愿为你三生痴狂
            [02:47.30]落花满天又闻琴香
            [02:50.85]与你天地间徜徉
            [02:54.33]如果爱太荒凉我陪你梦一场
            [02:58.14]赎回你所有泪光
            [03:01.39]这一路有多远这三世有多长
            [03:04.85]执手到地老天荒
            [03:08.41]风凄凄雾茫茫雨滚滚雪漫漫
            [03:11.97]一步步都陪你同往
            [03:15.47]牵着手别惊慌管明天会怎样
            [03:18.97]哪怕注定流浪
            [03:22.59]手牢牢不放爱念念不忘
            [03:26.23]人生何须多辉煌
            [03:29.60]浮华的终成空执着的都随风
            [03:33.21]情路何须多跌宕
            [03:36.58]要遇多少风浪心不再摇晃
            [03:40.32]一起细数这过往
            [03:43.02]陪你等风停了雾散了
            [03:45.50]雨住了雪化了
            [03:47.19]再遇见绝美月光
            [03:50.55]还有我在你身旁`
    },
    {
        chapter: -1,
        title: 'Monster', artist: 'Katie Sky',
        context: '', desc: '',
        date: '', ytId: '_Rh3dTb1KYE', start: 0,
        lyrics: `
            [00:00.06]I see your monsters, I see your pain
            [00:05.67]Tell me your problems, I'll chase them away
            [00:11.19]I'll be your lighthouse, I'll make it okay
            [00:16.36]When I see your monsters, I'll stand there so brave
            [00:21.07]And chase them all away
            [00:24.51]
            [00:27.54]In the dark we, we
            [00:29.92]We stand apart we, we
            [00:32.99]Never see that the things that we need are staring right at us
            [00:38.41]You just want to hide, hide, hide
            [00:41.23]Never show your smile, smile
            [00:43.83]Stand alone when you need someone, it's the hardest thing of all
            [00:48.42]That you see are the bad, bad, bad
            [00:52.40]Memories, take your time and you'll find me
            [00:57.56]
            [00:57.57]I see your monsters, I see your pain
            [01:02.92]Tell me your problems, I'll chase them away
            [01:08.36]I'll be your lighthouse, I'll make it okay
            [01:13.57]When I see your monsters, I'll stand there so brave
            [01:18.32]And chase them all away
            [01:21.73]
            [01:22.11]I could see the sky, sky, sky
            [01:24.81]Beautiful tonight, night
            [01:27.43]When you breathe, why can't you see that the clouds are in your head?
            [01:33.01]I will stay there, there, there
            [01:35.70]No need to fear, fear
            [01:38.30]And when you need to talk it out with someone you can trust
            [01:42.90]What you see are the bad, bad, bad
            [01:46.92]Memories, take your time and you'll find me
            [01:52.05]
            [01:52.06]I see your monsters, I see your pain
            [01:57.48]Tell me your problems, I'll chase them away
            [02:02.90]I'll be your lighthouse, I'll make it okay
            [02:08.07]When I see your monsters, I'll stand there so brave
            [02:12.86]And chase them all away
            [02:18.30]I'll chase them all away
            [02:24.18]
            [02:27.47]You've got the chance to see the light
            [02:32.91]Even in the darkest night
            [02:38.30]And I will be here like you were for me
            [02:44.51]So just let me in
            [02:47.44]
            [02:48.96]'Cause I see your monsters, I see your pain
            [02:54.83]Tell me your problems, I'll chase them away
            [03:00.24]I'll be your lighthouse, I'll make it okay
            [03:05.33]When I see your monsters, I'll stand there so brave
            [03:10.47]
            [03:11.17]I see your monsters, I see your pain
            [03:16.60]Tell me your problems, I'll chase them away
            [03:22.01]I'll be your lighthouse, I'll make it okay (I'll make it okay)
            [03:27.23]When I see your monsters, I'll stand there so brave
            [03:31.95]And chase them all away
            [03:35.07]`
    },
    //Chapter 0
    {
        chapter: 0,
        title: 'Counting Stars', artist: 'OneRepublic',
        context: '', desc: '',
        date: '', ytId: 'hT_nvWreIhg', start: 0,
        lyrics: `
            [00:00.29]Lately I've been I've been losing sleep
            [00:04.99]Dreaming about the things that we could be
            [00:08.89]But baby I've been I've been praying hard
            [00:13.86]Said no more counting dollars
            [00:15.86]We'll be counting stars
            [00:18.78]Yeah we'll be counting stars
            [00:37.55]I see this life like a swinging vine
            [00:40.17]Swing my heart across the line
            [00:42.08]In my face is flashing signs
            [00:44.07]Seek it out and ye' shall find
            [00:45.97]Old but I'm not that old
            [00:48.01]Young but I'm not that bold
            [00:49.93]And I don't think the world is sold
            [00:52.00]I'm just doing what we're told
            [00:54.53]I I I I feel something so right
            [00:58.73]Doing the wrong thing
            [01:02.18]I I I I feel something so wrong
            [01:06.53]Doing the right thing
            [01:09.95]I couldn't lie couldn't lie couldn't lie
            [01:13.70]Everything that kills me makes me feel alive
            [01:17.66]Lately I've been I've been losing sleep
            [01:21.43]Dreaming about the things we could be
            [01:25.25]But baby I've been I've been praying hard
            [01:29.26]Said no more counting dollars
            [01:31.21]We'll be counting stars
            [01:33.34]Lately I've been I've been losing sleep
            [01:37.22]Dreaming about the things we could be
            [01:41.14]But baby I've been I've been praying hard
            [01:45.06]Said no more counting dollars
            [01:47.02]We'll be we'll be counting stars
            [01:56.25]I feel the love and I feel it burn
            [01:58.95]Down this river every turn
            [02:00.83]Hope is our four-letter word
            [02:02.72]Make that money watch it burn
            [02:04.64]Old but I'm not that old
            [02:06.84]Young but I'm not that bold
            [02:08.63]And I don't think the world is sold
            [02:10.53]I'm just doing what we're told
            [02:12.94]I I I I feel something so wrong
            [02:17.34]Doing the right thing
            [02:20.78]I could lie could lie could lie
            [02:24.57]Everything that drowns me makes me wanna fly
            [02:28.40]Lately I've been I've been losing sleep
            [02:32.31]Dreaming about the things we could be
            [02:36.10]But baby I've been I've been praying hard
            [02:40.09]Said no more counting dollars
            [02:42.11]We'll be counting stars
            [02:44.22]Lately I've been I've been losing sleep
            [02:48.21]Dreaming about the things we could be
            [02:51.90]But baby I've been I've been praying hard
            [02:55.83]Said no more counting dollars
            [02:57.65]We'll be we'll be counting stars
            [03:03.92]Take that money
            [03:04.52]Watch it burn
            [03:05.35]Sink in the river
            [03:06.38]The lessons I've learned
            [03:07.55]Take that money
            [03:08.23]Watch it burn
            [03:09.42]Sink in the river
            [03:10.39]The lessons I've learned
            [03:11.51]Take that money
            [03:12.33]Watch it burn
            [03:13.36]Sink in the river
            [03:14.35]The lessons I've learned
            [03:15.52]Take that money
            [03:16.41]Watch it burn
            [03:17.34]Sink in the river
            [03:18.33]The lessons I've learned
            [03:19.48]Everything that kills me
            [03:25.36]Makes me feel alive
            [03:26.56]Lately I've been I've been losing sleep
            [03:30.26]Dreaming about the things we could be
            [03:34.12]But baby I've been I've been praying hard
            [03:38.13]Said no more counting dollars
            [03:40.04]We'll be counting stars
            [03:41.98]Lately I've been I've been losing sleep
            [03:46.16]Dreaming about the things we could be
            [03:50.01]But baby I've been I've been praying hard
            [03:54.02]Said no more counting dollars
            [03:55.96]We'll be we'll be counting stars
            [03:58.57]Take that money
            [03:59.12]Watch it burn
            [03:59.61]Sink in the river
            [04:00.31]The lessons I've learned
            [04:01.73]Take that money
            [04:02.53]Watch it burn
            [04:03.47]Sink in the river
            [04:04.50]The lessons I've learned
            [04:05.68]Take that money
            [04:06.38]Watch it burn
            [04:07.18]Sink in the river
            [04:08.49]The lessons I've learned
            [04:09.33]Take that money
            [04:10.38]Watch it burn
            [04:11.16]Sink in the river
            [04:12.10]The lessons I've learned
`
    },
    {
        chapter: 0,
        title: "烟火里的尘埃", artist: "华晨宇",
        context: "", desc: "",
        date: "", ytId: "yJfRHVmTiLs", start: 0,
        lyrics: `[00:05.343]看着飞舞的尘埃掉下来
[00:15.610]没人发现它存在
[00:18.861]多自由自在
[00:24.045]可世界都爱热热闹闹
[00:27.847]
[00:27.857]容不下我百无聊赖
[00:32.361]
[00:34.931]不应该一个人发呆
[00:45.428]只有我守着安静的沙漠
[00:50.086]等待着花开
[00:55.846]只有我看着别人的快乐
[01:00.674]竟然会感慨
[01:06.249]就让我听着天大的道理
[01:10.820]不愿意明白
[01:16.226]有什么是应该不应该
[01:48.010]我的心里住着一个
[01:50.868]苍老的小孩
[01:57.678]如果世界听不明白
[02:01.324]对影子表白
[02:06.105]是不是只有我还在问
[02:09.657]为什么明天更精彩
[02:17.051]烟火里找不到童真的残骸
[02:27.211]只有我守着安静的沙漠
[02:31.671]等待着花开
[02:37.030]只有我看着别人的快乐
[02:41.653]竟然会感慨
[02:47.188]就让我听着天大的道理
[02:51.751]不愿意明白
[02:57.429]只有我就是我
[03:02.208]好奇怪还在感慨
[03:13.962]风阵阵吹过来为何不回来
[03:23.955]风一去不回来悲不悲哀
[03:34.138]麻木得那么快应不应该
[03:44.230]能不能慢下来
[03:49.590]笑得开怀哭得坦率
[03:54.738]为何表情要让这世界安排
[03:59.880]我就是我我只是我
[04:04.329]只是一场烟火散落的尘埃
[04:21.973]风阵阵吹过来
[04:32.303]风一去不回来
[04:52.353]能不能慢下来
[04:57.455]`
    },
    {
        chapter: 0,
        title: '我管你', artist: '华晨宇',
        context: '', desc: '',
        date: '', ytId: 'HhBKaTSpp5A', start: 0,
        lyrics: `[00:17.92]我不大接受
[00:20.50]什么被委屈别还手
[00:23.04]我不太能够
[00:25.68]顺应所谓的大潮流
[00:28.12]噢噢噢噢噢噢噢噢噢
[00:33.29]噢噢噢噢噢噢噢噢噢
[00:38.47]花臂或刺头
[00:41.31]应该没说明我所有
[00:44.12]我不找借口
[00:46.61]懂的人自然能看透
[00:48.99]噢噢噢噢噢噢噢噢噢
[00:54.06]噢噢噢噢噢噢噢噢噢
[00:59.84]没想辩解太多
[01:02.93]别用外表解说我
[01:10.49]误解不愿反驳
[01:13.13]我拒绝只谈如果
[01:21.51]我管你的感受
[01:23.03]噢噢噢噢噢噢噢噢噢
[01:26.38]我管你的感受
[01:28.00]噢噢噢噢噢噢噢噢噢
[01:31.76]我管你的感受
[01:33.28]噢噢噢噢噢噢噢噢噢
[01:36.94]我管你的感受
[01:38.56]噢噢噢噢噢噢噢噢噢
[01:43.74]管你什么想法
[01:46.48]我是我自己的表达
[01:49.12]管你什么看法
[01:51.81]我的世界我来浮夸
[01:54.26]噢噢噢噢
[01:57.11]我管你说得多复杂
[01:59.39]噢噢噢噢
[02:02.24]我不要被谁给教化
[02:04.62]管你什么说法
[02:07.32]当我是傻或是笑话
[02:09.96]管你什么办法
[02:12.49]别幻想我沦落倒下
[02:15.13]噢噢噢噢噢噢噢噢噢
[02:20.20]噢噢噢噢噢噢噢噢噢
[02:26.11]太多选择背后
[02:28.70]绝望像没有出口
[02:36.59]不如握紧拳头
[02:39.23]这就是我的所有
[02:47.48]我管你的感受
[02:49.05]噢噢噢噢噢噢噢
[02:52.76]我管你的感受
[02:54.28]噢噢噢噢噢噢噢
[02:57.78]我管你的感受
[02:59.40]噢噢噢噢噢噢噢
[03:03.06]我管你的感受
[03:04.63]噢噢噢噢噢噢噢
[03:09.81]管你多怪罪
[03:12.60]你没资格评头论足
[03:15.14]管你自以为
[03:18.08]你的意见我真不在乎
[03:21.34]噢噢噢噢噢噢噢噢噢
[03:25.54]噢噢噢噢噢噢噢噢噢
[03:41.08]管你什么想法
[03:43.92]我是我自己的表达
[03:46.56]管你什么看法
[03:49.14]我的世界我来浮夸
[03:51.84]噢噢噢噢
[03:54.48]我管你说得多复杂
[03:56.96]噢噢噢噢
[03:59.70]我不要被谁给教化
[04:02.13]管你什么说法
[04:04.72]当我是傻或是笑话
[04:07.35]管你什么办法
[04:09.99]别幻想我沦落倒下
[04:12.58]噢噢噢噢噢噢噢噢噢
[04:17.55]噢噢噢噢噢噢噢噢噢`
    },
    {
        chapter: 0,
        title: '国王与乞丐', artist: '华晨宇/杨宗纬',
        context: '', desc: '',
        date: '', ytId: 'XiyEwRlyKl4', start: 0,
        lyrics: `[00:24.10] 怎么了 怎么了
[00:28.25] 一份爱失去了光泽
[00:31.38] 面对面 背对背
[00:34.60] 反复挣扎怎么都痛
[00:38.01] 以为爱坚固像石头
[00:41.32] 谁知一秒钟就碎落
[00:44.69] 难道心痛都要不断打磨
[00:49.14] 抱紧你的我比国王富有

[00:57.43] 曾多么快乐
[01:01.48] 失去你的我比乞丐落魄
[01:10.64] 痛多么深刻

[01:16.98] 噢 喔 噢 喔
[01:22.13] 噢 喔 噢 喔
[01:27.16] 谁哭着谁笑着
[01:33.05] 一人分饰两个角色
[01:36.30] 越执迷越折磨
[01:39.60] 回忆还在煽风点火
[01:43.10] 明知往前就会坠落
[01:46.17] 抱着遗憾重返寂寞
[01:49.43] 爱到最后究竟还剩什么

[01:54.88] 抱紧你的我比国王富有
[02:02.66] 曾多么快乐
[02:07.41] 失去你的我比乞丐落魄
[02:15.43] 痛多么深刻

[02:23.30] 当一切 结束了 安静了 过去了
[02:28.77] 为什么 还拥有 一万个 舍不得
[02:35.34] 喔 喔

[02:48.07] 谁又能感受
[02:53.73] 回忆里的我比国王富有
[03:01.04] 奢侈的快乐
[03:06.76] 失去你以后比乞丐落魄
[03:17.05] 心痛如刀割

[03:24.23] 怀念那时你安静陪着我
[03:28.48] 噢 噢
[03:30.77] 柔软时光里最美的挥霍
[03:36.87] 喔 喔
[03:40.54] 爱有多快乐
[03:44.89] 痛有多深刻
[03:51.51] 痛有多深刻
`
    },
    {
        chapter: 0,
        title: '拆弹专家', artist: '华晨宇',
        context: '', desc: '',
        date: '', ytId: 'RSrcXNK2SYc', start: 0,
        lyrics: `[00:08.742]Hell No
[00:10.848]空气就快要爆炸
[00:13.493]Hell No
[00:15.690]时间就快要爆炸
[00:17.990]Hell No
[00:19.840]身体就快要爆炸
[00:22.640]Hell No
[00:24.821]快给我拆弹专家
[00:28.000]
[00:31.817]生活是一颗炸弹
[00:34.317]装在我脑袋
[00:36.677]我还没想明白
[00:39.076]该怎么拆开
[00:40.976]每一天心里七上八下
[00:45.493]不如让它赶快爆炸WOW~WOW~
[00:58.492]拜托来一束火花
[01:03.841]Hell No
[01:05.641]空气就快要爆炸
[01:08.441]Hell No
[01:10.292]时间就快要爆炸
[01:12.943]Hell No
[01:14.793]身体就快要爆炸
[01:17.493]Hell No
[01:19.824]快给我拆弹专家
[02:21.820]
[01:31.520]GUCCI PRADA
[01:33.329]穿着要足够浮夸
[01:35.580]才能够表现自己的身价
[01:38.059]算了吧
[01:39.359]看着你声音沙哑的
[01:42.560]娱乐大家但
[01:44.660]心中的炸弹快要爆炸
[01:49.578]Hell No
[01:51.429]空气就快要爆炸
[01:54.079]Hell No
[01:55.980]时间就快要爆炸
[01:58.632]Hell No
[02:00.532]身体就快要爆炸
[02:03.910]Hell No
[02:05.410]快给我拆弹专家WOW~~~
[02:08.000]
[02:26.210]Hell No
[02:28.060]空气就快要爆炸
[02:30.710]Hell No
[02:32.560]时间就快要爆炸
[02:35.261]Hell No
[02:37.220]身体就快要爆炸
[02:39.826]Hell No
[02:42.610]快给我拆弹专家`
    },
    {
        chapter: 0,
        title: '与火星的孩子对话', artist: '华晨宇',
        context: '', desc: '',
        date: '', ytId: 'FK1C78KnQwU', start: 0,
        lyrics: `[00:33.539]我 看着爱笑
[00:36.739]却还有些失落和悲伤
[00:41.406]那些失落 那些悲伤 也在我心里
[00:49.440]我 看着自信
[00:52.691]却还有些退缩和逃避
[00:57.317]那些退缩 那些逃避 请你别在意
[01:05.457]我 看着努力
[01:09.250]却还有些拒绝和懒惰
[01:13.134]那些拒绝 那些懒惰 其实没关系
[01:21.264]我 看着坚强
[01:24.982]却还有些脆弱和疑惑
[01:29.232]那些脆弱 那些疑惑 有它的意义
[01:37.080]那些感受慢慢被阻碍
[01:45.147]我摸不到那痛苦
[01:53.331]我 看着坚持
[01:56.913]却还有些放弃和冷漠
[02:01.229]那些放弃 那些冷漠 要做你自己
[02:09.246]我 看着勇敢
[02:12.897]却还有些害怕和怯懦
[02:17.195]那些害怕 那些怯懦 我们在这里
[02:24.977]那些光芒渐渐被掩盖
[02:32.911]我猜不透下一幕
[02:42.101]每当我还相信 好的结局
[02:49.905]有个声音在说 可笑的是我
[02:57.691]每当我还愿意 伸手靠近
[03:05.708]有块阴影拽着我
[03:14.705]别再拽着我
[03:23.394]我想再次用力解脱
[03:34.298]我 虽然不说
[03:37.944]至少有你在这陪着我
[03:42.166]你就是你 最好的你 是我的唯一
[03:49.896]我 不再沉默
[03:53.712]因为有你选择理解我
[03:58.482]你就是你 最好的你 没人能代替
[04:05.970]那些美好终于被青睐
[04:13.871]我等到了这礼物
[04:22.826]我 有时难过
[04:27.149]却还有些快乐和骄傲
[04:32.783]那些快乐 那些骄傲 全都属于你
[04:40.875]我 有时孤独
[04:46.187]却还有些抚慰和感动
[04:50.470]那些抚慰 那些感动 因为我爱你
[04:58.653]这个结局是我的期待
[05:07.919]我会一直为你祝福`
    },
    {
        chapter: 0,
        title: '沙漠骆驼', artist: '展展与罗罗',
        context: '', desc: '',
        date: '', ytId: 'BYgh1-JgTnY', start: 0,
        lyrics: `
            [00:26.11]我要穿越这片沙漠
            [00:28.00]找寻真的自我
            [00:30.24]身边只有一匹骆驼陪我
            [00:34.66]这片风儿吹过
            [00:36.77]那片云儿飘过
            [00:38.91]突然之间出现爱的小河
            [00:43.22]我跨上沙漠之舟
            [00:45.45]背上烟斗和沙漏
            [00:47.64]手里还握著一壶烈酒
            [00:51.97]漫长古道悠悠
            [00:54.20]说不尽喜怒哀愁
            [00:56.37]只有那骆驼奔忙依旧
            [01:00.68]什么鬼魅传说
            [01:02.79]什么魑魅魍魉妖魔
            [01:04.99]只有那鹭鹰在幽幽的高歌
            [01:09.51]漫天黄沙掠过
            [01:11.66]走遍每个角落
            [01:13.83]行走在无尽的苍茫星河
            [01:18.11]白天黑夜交错
            [01:20.30]如此妖娆婀娜
            [01:22.57]蹉跎著岁月又蹉跎了自我
            [01:27.07]前方迷途太多
            [01:29.05]坚持才能洒脱
            [01:31.16]走出黑暗就能逍遥又快活
            [01:37.66]
            [01:48.57]我寻找沙漠绿洲
            [01:50.60]出现海市蜃楼
            [01:52.74]我仿佛看到她在那里等候
            [01:57.12]想起了她的温柔
            [01:59.32]滚烫着我的胸口
            [02:01.53]迷失在昨夜的那壶老酒
            [02:06.08]我穿上大头皮鞋
            [02:08.06]跨过凛冽荒野
            [02:10.20]我仿佛穿越到另一个世界
            [02:14.67]阿拉丁神灯要倾斜
            [02:16.80]天堂地狱已然重叠
            [02:18.93]突然之间飞来一只蝴蝶
            [02:23.10]什么鬼魅传说
            [02:25.40]什么魑魅魍魉妖魔
            [02:27.58]只有那鹭鹰在幽幽的高歌
            [02:32.06]漫天黄沙掠过
            [02:34.23]走遍每个角落
            [02:36.32]行走在无尽的苍茫星河
            [02:40.72]白天黑夜交错
            [02:42.83]如此妖娆婀娜
            [02:45.05]蹉跎著岁月又蹉跎了自我
            [02:49.39]前方迷途太多
            [02:51.61]坚持才能洒脱
            [02:53.67]走出黑暗就能逍遥又快活
            [03:00.60]
            [03:46.57]我已坠入在这神奇的国度
            [03:50.69]驼铃相伴走向圣堂之路
            [03:54.85]原谅我曾经恍惚陷入迷途
            [03:58.84]遮住了眼眸
            [04:00.99]湮没了意图
            [04:03.38]怎能被这样征服
            [04:12.53]什么鬼魅传说
            [04:14.49]什么魑魅魍魉妖魔
            [04:16.70]只有那鹭鹰在幽幽的高歌
            [04:21.01]漫天黄沙掠过
            [04:23.20]走遍每个角落
            [04:25.46]行走在无尽的苍茫星河
            [04:29.67]白天黑夜交错
            [04:31.90]如此妖娆婀娜
            [04:34.19]蹉跎著岁月又蹉跎了自我
            [04:38.62]前方迷途太多
            [04:40.60]坚持才能洒脱
            [04:42.83]走出黑暗就能逍遥又快活
            [04:47.60]梦里回到最初
            [04:49.41]浪潮起起伏伏
            [04:51.50]徬徨著未来又徬徨著孤独
            [04:56.05]漫长人生旅途
            [04:58.10]花开花落无数
            [05:00.41]沸腾的时光怎能被荒芜
            [05:04.97]清晨又到日暮
            [05:06.89]天边飞鸟群逐
            [05:09.40]摇曳著苍穹又描摹著黄土
            [05:13.88]东方鱼肚白出
            [05:15.94]烈日绽放吐露
            [05:18.01]放下尘浮我已踏上归途
`
    },
    {
        chapter: 0,
        title: '想见你想见你想见你', artist: '八三夭',
        context: '', desc: '',
        date: '2019', ytId: '4iRupuNet3Q', start: 0,
        lyrics: `
[00:18.82] 当爱情遗落成遗迹
[00:22.98] 用象形刻划成回忆
[00:26.56] 想念几个世纪 才是刻骨铭心
[00:33.36] 若能回到冰河时期
[00:37.52] 多想把你抱紧处理
[00:41.28] 你的笑多疗癒 让人生也甦醒
[00:46.92] 失去你的风景 像座废墟 像失落文明
[00:54.34] 能否 一场奇蹟 一线生机
[00:59.04] 能不能 有再一次 相遇
[01:05.56] 想见你 只想见你 未来过去 我只想见你
[01:13.10] 穿越了 千个万个 时间线里 人海里相依
[01:20.48] 用尽了 逻辑心机 推理爱情 最难解的谜
[01:27.32] 会不会 妳也和我一样 在等待一句 我愿意
[01:43.88] 任时光更迭了四季
[01:47.80] 任宇宙物换或星移
[01:51.30] 永远不退流行 是青涩的真心
[01:57.02] 未来 先进科技 无法模拟 你拥抱暖意
[02:04.48] 如果 另个时空 另个身体 能不能 换另一种 结局
[02:15.58] 想见你 只想见你 未来过去 我只想见你
[02:22.98] 穿越了 千个万个 时间线里 人海里相依
[02:30.64] 用尽了 逻辑心机 推理爱情 最难解的谜
[02:37.62] 会不会 妳也和我一样 在等待一句 我愿意
[02:46.32] 想见你 每个朝夕 想见你 每个表情
[02:49.80] 想穿越 每个平行 在未来 和过去 紧紧相依
[02:53.56] 想follow 每则IG 不错过 你的蹤迹
[02:57.24] 会不会 你也一样 等待著那句 我愿意
[03:00.30] 想见你 只想见你 未来过去 我只想见你
[03:07.44] 穿越了 千个万个 时间线里 人海里相依
[03:14.70] 用尽了 逻辑心机 推理爱情 最难解的谜
[03:21.58] 会不会 妳也和我一样 在等待一句 我愿意
[03:30.52] 想见你 每个朝夕 想见你 每个表情
[03:34.14] 想穿越 每个平行 在未来 和过去 紧紧相依
[03:37.94] 想follow 每则IG 不错过 你的蹤迹
[03:41.58] 会不会 你也一样 等待著那句 我愿意
[03:45.20] 想见你 每个朝夕 想见你 每个表情
[03:48.76] 想穿越 每个平行 在未来 和过去 紧紧相依
[03:52.56] 想follow 每则IG 不错过 你的蹤迹
[03:56.16] 会不会 你也一样 等待著那句 我愿意
`
    },
    {
        chapter: 0,
        title: '你的答案', artist: '阿冗',
        context: '', desc: '',
        date: '', ytId: 'Tziswp8xQ_4', start: 0,
        lyrics: `
            [00:25.29]也许世界就这样
            [00:28.59]我也还在路上
            [00:31.13]没有人能诉说
            [00:36.05]也许我只能沉默
            [00:39.24]眼泪湿润眼眶
            [00:41.90]可又不甘懦弱
            [00:45.55]低着头 期待白昼
            [00:50.71]接受所有的嘲讽
            [00:56.57]向着风 拥抱彩虹
            [01:01.75]勇敢的向前走
            [01:06.29]黎明的那道光
            [01:08.55]会越过黑暗
            [01:11.37]打破一切恐惧我能
            [01:14.29]找到答案
            [01:17.37]哪怕要逆着光
            [01:19.62]就驱散黑暗
            [01:22.28]丢弃所有的负担
            [01:25.30]不再孤单
            [01:28.29]不再孤单
            [01:31.97]
            [01:38.92]也许世界就这样
            [01:41.99]我也还在路上
            [01:44.99]没有人能诉说
            [01:49.49]也许我只能沉默
            [01:52.22]眼泪湿润眼眶
            [01:55.01]可又不甘懦弱
            [01:58.95]低着头 期待白昼
            [02:04.60]接受所有的嘲讽
            [02:10.25]向着风 拥抱彩虹
            [02:15.83]勇敢的向前走
            [02:20.47]黎明的那道光
            [02:22.14]会越过黑暗
            [02:25.01]打破一切恐惧我能
            [02:28.08]找到答案
            [02:31.05]哪怕要逆着光
            [02:33.08]就驱散黑暗
            [02:36.01]丢弃所有的负担
            [02:38.86]不再孤单
            [02:41.88]不再孤单
            [02:50.38]黎明的那道光
            [02:51.97]会越过黑暗
            [02:54.71]打破一切恐惧我能
            [02:57.81]找到答案
            [03:00.75]哪怕要逆着光
            [03:02.95]就驱散黑暗
            [03:05.66]有一万种的力量
            [03:08.64]淹没孤单
            [03:11.57]不再孤单
            [03:14.41]也许世界就这样
            [03:17.75]我也还在路上
            [03:20.60]没有人能诉说
            [03:25.55]也许我只能沉默
            [03:28.82]眼泪湿润眼眶
            [03:31.49]可又不甘懦弱
`
    },
    {
        chapter: 0,
        title: 'Alone', artist: 'Alan Walker',
        context: '', desc: '',
        date: '2022', ytId: '1-xGerv5FOk', start: 0,
        lyrics: `
            [00:04.07]Lost in your mind
            [00:10.94]I wanna know
            [00:13.33]Am I losing my mind?
            [00:20.79]Never let me go
            [00:22.92]If this night is not forever
            [00:26.38]At least we are together
            [00:28.84]I know I'm not alone
            [00:31.14]I know I'm not alone
            [00:34.11]Anywhere, whenever
            [00:36.24]Apart, but still together
            [00:38.78]I know I'm not alone
            [00:41.06]I know I'm not alone
            [00:51.10]I know I'm not alone
            [01:00.77]I know I'm not alone
            [01:06.32]Unconscious mind
            [01:12.85]I'm wide awake
            [01:15.77]Wanna feel one last time
            [01:22.85]Take my pain away
            [01:24.93]
            [01:34.99]If this night is not forever
            [01:38.50]At least we are together
            [01:41.06]I know I'm not alone
            [01:43.45]I know I'm not alone
            [01:46.10]Anywhere, whenever
            [01:48.60]Apart, but still together
            [01:51.01]I know I'm not alone
            [01:53.39]I know I'm not alone
            [02:03.06]I know I'm not alone
            [02:12.69]I know I'm not alone
            [02:17.24]I'm not alone, I'm not alone, I'm not alone
            [02:23.48]I know I'm not alone
            [02:28.02]I'm not alone, I'm not alone, I'm not alone
            [02:32.97]I know I'm not alone
`
    },
    {
        chapter: 0,
        title: 'Haggstrom', artist: 'C418',
        context: 'Game - Minecraft', desc: '',
        date: '', ytId: 'laZusNy8QiY', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 0,
        title: '一路生花', artist: '温奕心',
        context: '中秋晚会', desc: '',
        date: 'SEP 2022', ytId: '-RDocB1x-70', start: 0,
        lyrics: `                
            [00:22.25]海上的晚霞像年少的画
            [00:26.60]铺在天空等海鸥衔走它
            [00:30.31]
            [00:32.20]遥远的帆任风浪拍打
            [00:36.55]为梦再痛也不会害怕
            [00:40.65]
            [00:42.38]远走的风沙去谁的天涯
            [00:46.60]春天可曾在哪里见过他
            [00:50.57]
            [00:52.30]时间的手抚过了脸颊
            [00:56.59]他们谁都沉默不说话
            [01:00.68]
            [01:03.54]我希望许过的愿望一路生花
            [01:08.59]护送那时的梦抵挡过风沙
            [01:14.04]
            [01:14.28]指尖的樱花如诗写谁的韶华
            [01:19.21]疯狂的热爱夹带着文雅
            [01:23.88]我希望许过的愿望一路生花
            [01:28.68]将那雨中的人藏在屋檐下
            [01:33.54]岁月在冲刷逆流沧桑的喧哗
            [01:38.41]安静的夜晚你在想谁吗
            [01:44.35]
            [02:07.16]远走的风沙去谁的天涯
            [02:11.45]春天可曾在哪里见过他
            [02:15.61]
            [02:17.08]时间的手抚过了脸颊
            [02:21.24]他们谁都沉默不说话
            [02:25.66]
            [02:29.44]我希望许过的愿望一路生花
            [02:34.17]护送那时的梦抵挡过风沙
            [02:39.04]指尖的樱花如诗写谁的韶华
            [02:43.96]疯狂的热爱夹带着文雅
            [02:49.10]我希望许过的愿望一路生花
            [02:54.05]将那雨中的人藏在屋檐下
            [02:58.85]岁月在冲刷逆流沧桑的喧哗
            [03:03.58]安静的夜晚你在想谁吗
            [03:09.19]我希望许过的愿望一路生花
            [03:14.30]护送那时的梦抵挡过风沙
            [03:18.97]指尖的樱花如诗写谁的韶华
            [03:24.15]疯狂的热爱夹带着文雅
            [03:29.02]我希望许过的愿望
            [03:33.82]将那雨中的人藏在屋檐下
            [03:39.19]岁月在冲刷逆流沧桑的喧哗
            [03:44.06]安静的夜晚你在想谁吗
            [03:49.11]安静的夜晚你在想谁吗
            [03:58.52]
`
    },
    // Chapter 1
    {
        chapter: 1,
        title: 'Payphone', artist: 'Maroon 5 ft. Wiz Khalifa',
        context: '', desc: '',
        date: 'MAR 2023', ytId: 'KRaWnd3LJfs', start: 0,
        lyrics: `
            [00:39.52]I'm at a payphone trying to call home
            [00:44.01]All of my change I spent on you
            [00:48.18]Where have the times gone?
            [00:50.52]Baby, it's all wrong
            [00:52.71]Where are the plans we made for two?
            [00:57.37]Yeah I, I know it's hard to remember
            [01:00.69]The people we used to be
            [01:02.84]It's even harder to picture
            [01:05.06]That you're not here next to me
            [01:07.21]You say it's too late to make it
            [01:09.37]But is it too late to try?
            [01:11.55]And in our time that you wasted
            [01:13.46]All of our bridges burned down
            [01:16.15]I've wasted my nights
            [01:18.24]You turned out the lights
            [01:20.43]Now I'm paralyzed
            [01:22.58]Still stuck in that time
            [01:24.84]When we called it love
            [01:26.95]But even the sun sets in paradise
            [01:31.94]I'm at a payphone trying to call home
            [01:36.31]All of my change I spent on you
            [01:40.55]Where have the times gone?
            [01:42.88]Baby, it's all wrong
            [01:45.04]Where are the plans we made for two?
            [01:49.08]If happy ever after did exist
            [01:53.67]I would still be holding you like this
            [01:58.10]All those fairytales are full of shit
            [02:02.42]One more fuckin' love song, I'll be sick
            [02:06.59]Oh, you turned your back on tomorrow
            [02:10.50]'Cause you forgot yesterday
            [02:12.68]I gave you my love to borrow
            [02:14.80]But you just gave it away
            [02:17.08]You can't expect me to be fine
            [02:19.16]I don't expect you to care (Care)
            [02:21.41]I know I've said it before but
            [02:23.27]All of our bridges burned down
            [02:25.99]I've wasted my nights
            [02:28.15]You turned out the lights
            [02:30.24]Now I'm paralyzed
            [02:32.43]Still stuck in that time
            [02:34.61]When we called it love
            [02:36.84]But even the sun sets in paradise
            [02:41.73]I'm at a payphone trying to call home
            [02:46.17]All of my change I spent on you
            [02:50.43]Where have the times gone?
            [02:52.66]Baby, it's all wrong
            [02:54.88]Where are the plans we made for two? (Yeah)
            [02:58.89]If happy ever after did exist
            [03:03.54]I would still be holding you like this
            [03:07.60]And all those fairytales are full of shit
            [03:12.21]One more fuckin' love song, I'll be sick
            [03:16.26]Now I'm at a payphone
            [03:18.53]Man, fuck that shit
            [03:19.90]I'll be out spendin' all this money while you sittin 'round wonderin'
            [03:22.54]Why it wasn't you who came up from nothin'
            [03:24.23]Made it from the bottom, now when you see me, I'm stuntin'
            [03:26.53]And all of my cars start with a push of a button
            [03:28.55]Tellin' me I changed since I blew up or whatever you call it
            [03:31.09]Switch the number to my phone, so you never could call it
            [03:33.14]Don't need my name on my shirt, you can tell that I'm ballin'
            [03:35.38]Swish, what a shame, coulda got picked
            [03:37.58]Had a really good game, but you missed your last shot
            [03:39.80]So you talk about who you see at the top
            [03:41.64]Or what you coulda saw, but sad to say it's over for
            [03:44.16]Phantom pulled up, valet open doors
            [03:46.40]Wished I'd go away, got what you was lookin' for
            [03:48.50]Now it's me who they want, so you can go and take that little piece of shit with you
            [03:51.31]Yeah, I'm at a payphone trying to call home
            [03:55.98]All of my change I spent on you
            [04:00.31]Where have the times gone?
            [04:02.51]Baby, it's all wrong
            [04:04.70]Where are the plans we made for two?
            [04:08.66]If happy ever after did exist
            [04:13.36]I would still be holding you like this
            [04:17.42]And all these fairytales are full of shit
            [04:21.76]Yeah, one more fuckin' love song, I'll be sick
            [04:25.76]Yeah, now I'm at a payphone
`
    },
    {
        chapter: 1,
        title: 'Mind Your Manors', artist: 'Glowstick Entertainment',
        context: 'Game - Dark Deception', desc: 'Chapter 2 Level 3 Zone 2 Chase Theme',
        date: '2023', ytId: '1k8gE2l8iws', start: 0,
        lyrics: `
            [00:09.85]Please don't look back
            [00:12.35]Please don't look back
            [00:14.83]Please don't look back
            [00:17.43]Please don't look back
            [00:20.39]Please don't look back
            [00:22.95]Please don't look back
            [00:25.52]Please don't look back
            [00:27.95]Please don't look back
            [00:30.52]We caught your sneaker
            [00:33.44]We know you're stalking
            [00:35.85]Now we are moving
            [00:38.32]And we are looming
            [00:41.09]We caught your sneaker
            [00:43.50]We know you're stalking
            [00:45.88]Now we are moving
            [00:48.39]And we are looming
            [00:51.11]Please don't look back
            [00:53.02]Please don't look back
            [00:55.60]Please don't look back
            [00:58.17]Please don't look back
            [01:00.68]Please don't look back
            [01:03.22]Please don't look back
            [01:05.80]Please don't look back
            [01:08.31]Please don't look back
            [01:10.93]We caught your sneaker
            [01:13.69]We know you're stalking
            [01:15.93]Now we are moving
            [01:18.59]And we are looming
            [01:21.33]We caught your sneaker
            [01:23.74]We know you're stalking
            [01:26.32]Now we are moving
            [01:28.65]And we are looming
            [01:50.65]Please don't look back
            [01:53.26]Please don't look back
            [01:56.04]Please don't look back
            [01:58.81]Please don't look back
            [02:01.41]Please don't look back
            [02:03.95]Please don't look back
            [02:06.35]Please don't look back
            [02:08.54]Please don't look back
            [02:11.14]We caught your sneaker
            [02:14.07]We know you're stalking
            [02:16.33]Now we are moving
            [02:19.05]And we are looming
            [02:21.60]We caught your sneaker
            [02:24.14]We know you're stalking
            [02:26.35]Now we are moving
            [02:29.01]And we are looming
`
    },
    {
        chapter: 1,
        title: 'Feel the Joy', artist: 'Glowstick Entertainment',
        context: 'Game - Dark Deception', desc: 'Chapter 4 Level 7 Zone 1&2 Chase Theme',
        date: '2023', ytId: '133eDAMkLlA', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Uninvited Guest', artist: 'Glowstick Entertainment',
        context: 'Game - Dark Deception', desc: 'Chapter 4 Level 8 Zone 1 Chase Theme',
        date: '2023', ytId: '-p6ORa874nY', start: 0,
        lyrics: `[00:23.02]We mum
[00:24.24]Bear mum
[00:25.54]We mum
[00:26.83]Bear mum
[00:28.13]We mum
[00:29.34]Bear mum
[00:30.57]We mum
[00:31.85]Bear mum
[00:33.08]Keep it moving
[00:34.43]Keep it moving
[00:35.74]Keep it moving
[00:36.95]Keep it moving
[00:38.28]Keep it moving
[00:39.46]Keep it moving
[00:40.77]Keep it moving
[00:41.99]Keep it moving
[00:43.67]
[01:05.93]We mum
[01:07.09]Bear mum
[01:08.39]We mum
[01:09.69]Bear mum
[01:10.96]We mum
[01:12.23]Bear mum
[01:13.43]We mum
[01:14.68]Bear mum
[01:15.96]Keep it moving
[01:17.32]Keep it moving
[01:18.58]Keep it moving
[01:19.86]Keep it moving
[01:21.10]Keep it moving
[01:22.35]Keep it moving
[01:23.63]Keep it moving
[01:24.83]Keep it moving`
    },
    {
        chapter: 1,
        title: 'Unstoppable', artist: 'Sia',
        context: '', desc: '',
        date: 'SEP 2023', ytId: 'YaEG2aWJnZ8', start: 0,
        lyrics: `
            [00:11.26]I'll smile, I know what it takes to fool this town
            [00:15.20]I'll do it till the sun goes down and all through the night time
            [00:21.02]Oh yeah, oh yeah, I'll tell you what you wanna hear
            [00:25.69]Keep my sunglasses on while I shed a tear
            [00:28.71]It's never the right time, yeah, yeah
            [00:33.61]
            [00:33.62]I'll put my armor on, show you how strong I am
            [00:39.03]I'll put my armor on, I'll show you that I am
            [00:44.71]
            [00:44.72]I'm unstoppable
            [00:47.51]I'm a Porsche with no brakes
            [00:50.35]I'm invincible
            [00:52.86]Yeah, I win every single game
            [00:55.90]I'm so powerful
            [00:58.36]I don't need batteries to play
            [01:01.37]I'm so confident
            [01:03.78]Yeah, I'm unstoppable today
            [01:07.19]Unstoppable today, unstoppable today
            [01:12.84]Unstoppable today, I'm unstoppable today
            [01:17.49]
            [01:17.50]Breakdown, only alone I will cry out now
            [01:21.24]You'll never see what's hiding out
            [01:24.06]Hiding out deep down, yeah, yeah
            [01:28.53]I know I've heard that to let your feelings show
            [01:32.09]Is the only way to make friendships grow
            [01:34.96]But I'm too afraid now, yeah, yeah
            [01:39.74]
            [01:39.74]I'll put my armor on, show you how strong I am
            [01:45.24]I'll put my armor on, I'll show you that I am
            [01:51.05]
            [01:51.05]I'm unstoppable
            [01:53.64]I'm a Porsche with no brakes
            [01:56.57]I'm invincible
            [01:59.06]Yeah, I win every single game
            [02:02.11]I'm so powerful
            [02:04.55]I don't need batteries to play
            [02:07.59]I'm so confident
            [02:10.03]Yeah, I'm unstoppable today
            [02:13.39]Unstoppable today, unstoppable today
            [02:19.03]Unstoppable today, I'm unstoppable today
            [02:24.34]Unstoppable today, unstoppable today
            [02:29.93]Unstoppable today, I'm unstoppable today
            [02:34.91]
            [02:34.92]I'll put my armor on, show you how strong I am
            [02:40.42]I'll put my armor on, I'll show you that I am
            [02:47.25]
            [02:47.45]I'm unstoppable
            [02:50.13]I'm a Porsche with no brakes
            [02:53.14]I'm invincible
            [02:55.56]Yeah, I win every single game
            [02:58.69]I'm so powerful
            [03:01.14]I don't need batteries to play
            [03:04.10]I'm so confident
            [03:06.56]Yeah, I'm unstoppable today
            [03:09.72]
            [03:09.93]Unstoppable today, unstoppable today
            [03:15.52]Unstoppable today, I'm unstoppable today
            [03:20.86]Unstoppable today, unstoppable today
            [03:26.50]Unstoppable today, I'm unstoppable today
            [03:31.84]`
    },
    {
        chapter: 1,
        title: 'Caelestinum Finale Termini', artist: 'HOYO-MiX',
        context: '', desc: '',
        date: 'SEP 2023', ytId: 'VqtScyk2C5A', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Never-Ending Performance', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '2023', ytId: '-OAA_kus8ME', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Wrath of Monoceros Caeli', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '2023', ytId: 'm1JsBvHzWfY', start: 0,
        lyrics: `
            [00:30.18]Lux catius gravi iri
            [00:33.64]Mutatis pius mari
            [00:36.76]Tuta pectus malis
            [00:40.50]Muta deus malis
            [01:38.77]Cavis vincam (potis cavis)
            [01:42.38]Cavis vincam (potis cavis)
            [01:45.71]Cavis vincam (potis cavis)
            [01:49.07](Densa pia)
            [01:53.90](Densa pia)
            [01:55.85](Densa pia)
            [01:59.34](Densa pia)
            [02:24.65]Cavus vincit
            [02:27.27]Cavus vincit
            [02:29.67]Cavus vincit
            [02:32.34]Cavus vincito
            [02:35.87]
`
    },
    {
        chapter: 1,
        title: '错位时空(翻唱填词)', artist: '阿泉君LIN / 鹿梔一',
        context: '', desc: '',
        date: 'OCT 2023', ytId: 'OKzT1lzgw5s', start: 0,
        lyrics: `
            [00:15.17]看不见，风牆之外的风景
            [00:18.59]也不问，歌颂迴响的轻吟
            [00:22.45]自由是随心虚度人生的权利
            [00:25.75]想见证，诗与歌的声音
            [00:29.49]用肩膀，扛起反抗的隼旗
            [00:32.91]徵千峰，打破笼中鸟宿命
            [00:36.90]少年却已经听不到硝烟散去
            [00:40.39]风的声音
            [00:44.18]我轻唱你昔日的吟咏
            [00:47.64]代你看过岁月峥嵘
            [00:51.24]可那曾经期待的自由繁荣
            [00:54.87]却不同
            [00:58.32]我吹过你期待的微风
            [01:02.13]是否能算故人相逢
            [01:05.60]像旧友仍在身边黄粱一梦
            [01:09.15]终是梦 是梦
            [01:16.64]
            [01:30.60]过千年，新王与神皆不见
            [01:34.17]羽翩跹，只剩诗人游此间
            [01:38.02]閒暇独坐枝头拨弄的竖琴声
            [01:41.35]将岁月，融入一曲诗篇
            [01:44.96]叙蒙德，新生似微雨初霁
            [01:48.47]天空岛，赴身未羡神之名
            [01:52.33]雏鸟待鼓起翱翔天幕的勇气
            [01:56.68]听凭风吟
            [02:00.08]我回首这山河已至冬
            [02:03.79]若此时有君能与共
            [02:07.27]伴我游历四海的昨日青空
            [02:10.82]却成空
            [02:14.38]我看过这千年的四风
            [02:17.95]新生终是不变初衷
            [02:21.53]诗人偕风散佈着昔日的梦
            [02:25.16]这场梦 非梦
            [02:29.93]
            [02:31.59]我代你走过世间峥嵘
            [02:35.16]看到的风景虽不同
            [02:38.80]但我们期待的这自由之风
            [02:42.39]正拂动
            [02:45.97]我悠然立崖巅望苍穹
            [02:49.44]期待的国度已在眸
            [02:53.03]而曾经熟悉的那故人面孔
            [02:56.58]在风中 心中`,
    },
    {
        chapter: 1,
        title: '怪物(翻唱填词)', artist: '柑宝',
        context: '', desc: '',
        date: 'OCT 2023', ytId: 'j8rnWkr_dpA', start: 0,
        lyrics: `
            [00:01.983] 伟大的神明 创造这幅人偶容器
            [00:04.783] 拥有感情之身于永恒不过失败品
            [00:07.766] 放逐之后终将迎来戏谑的人生游戏
            [00:11.816] 哪怕一路荆棘
            [00:13.216] 封印与苏醒又再一次漫无目的
            [00:16.016] 存在踏鞴砂被铸铁占据的故人往昔
            [00:19.066] 命运如果能就此施舍恩赐的暂停
            [00:23.10] 在永恒的国界 隐藏着怎样的威胁
            [00:27.016] 在神明威严之下怯弱而卑贱
            [00:29.783] 逝去的家人嘴边 那些画面
            [00:32.616] 却始终无法改写 命运的死结
            [00:35.666] 那无念无想 拒我于故土之乡
            [00:38.783] 希望 失望 换回来不过遍体鳞伤
            [00:41.666] 我存在于这一刻
            [00:44.10] 注定为找回自我孤身流浪
            [00:47.45] 再无能去挽回的一切
            [00:49.583] 这一夜 这一夜走进了风雪
            [00:52.216] 让火焰将这团死结 彻底湮灭
            [01:04.70] 嘈杂的内心 引导着我踏进泥泞
            [01:06.90] 坚定着拭去 感情 将所谓正义抹平
            [01:09.733] 绝望吧 绝望吧 绝望早已被化作力量
            [01:13.533] 夺走神之心后的疯狂
            [01:15.783] 生命如同草芥 让我憎恨
            [01:18.183] 过往无意义的人生 终使我登顶成神
            [01:21.216] 愤怒吧 愤怒吧 愤怒着面对质疑的话
            [01:25.216] 让残忍更力竭声沙
            [01:37.75] 难道注定假合之身 就异类吗
            [01:40.40] 难道拥有感情的机械落泪 就抛弃吗
            [01:43.25] 越是想得到啊 无能就越奋力挣扎
            [01:46.066] 所谓成神的代价 不过让我再次崩塌
            [01:49.066] 响彻耳边的求助 曾经的我无法回答
            [01:51.70] 面对偏爱的亲情 曾经的我无法放下
            [01:54.533] 希望就一次一次 在我心底留下了疤
            [01:57.283] 绝望刺激下的无声迸发
            [01:59.133] 不甘心被命运所践踏
            [02:05.383] 就用全力去挣扎
            [02:11.016] 结局也许只会 妥协于某种狼狈
            [02:15.05] 总有对错是非
            [02:16.383] 争辩于黑白的交汇
            [02:18.133] 挣脱一切束缚之后
            [02:20.833] 难道等待的只有下坠
            [02:23.433] 被捆绑的所有原罪
            [02:25.60] 每一分 每一分都把我撕碎
            [02:28.266] 直到被赐予新的称谓
            [02:31.966] 当挣脱捆绑 又踏上风的方向
            [02:34.616] 希望 失望 换回来更倔强的生长
            [02:37.583] 我决定于这一刻
            [02:40.10] 开始为找回自我孤身流浪
            [02:43.05] 再无需去挽回的一切
            [02:45.416] 这一切 这一切都将被改写
            [02:48.083] 将命运的沙再倾斜 重视这世界
            [03:02.216] 曾经有一个背负着善恶的少年
            [03:05.033] 每一刻 每一刻都不曾妥协
            [03:07.766] 等有人将这流浪者 重新改写
`,
    },
    {
        chapter: 1,
        title: 'Chrysalis Suspirii', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '', ytId: '51vYKjbchtU', start: 0,
        lyrics: `
            [01:11.51]Cinis est cor muem
            [01:18.79]Horrentis frigora
            [01:26.06]Quod ego austeris
            [01:32.88]Dies irae, finis!
            [01:40.67]Lucis, lapsus
            [01:47.52]Fatua, caeca
            [01:54.62]Saeva, folles
            [02:01.87]Commedia dell'arte
            [02:08.76]Ah...
            [02:30.99]
            [02:33.24]Luces glaciei!
            [02:36.96]Lucis, lapsus (o tragedia o splendidae)
            [02:44.11]Fatua, caeca (o fatalia o infaustae)
            [02:51.16]Saeva, folles (o commedia o degli sciocchi)
            [02:58.38]Luces glaciei (o comoeda glaciei)
            [03:04.86]O Chrysalis Suspiria
            [03:12.96]
                `
    },
    {
        chapter: 1,
        title: 'Saltatio Favillae', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '', ytId: '9TKbnQb4mOs', start: 0,
        lyrics: `
            [00:12.74]Igni, cinis
            [00:18.10]Ex ira surget
            [00:23.21]Vedis, calor
            [00:28.59]In scaena salto
            [00:34.01]Venu
            [00:35.82]Resurgito
            [00:38.50]Alluceto
            [00:41.03]In dolore
            [00:43.35]Illusio
            [00:44.50]In hoc mundo clades indiges
            [00:55.02]Votum, dolor (vacuum, fatuus)
            [01:00.32]Ex oblivione
            [01:04.85]In tristitia
            [01:08.29]
            [01:16.32]Vae victis fortunarum
            [01:21.56]Vae, ignis tinea fio
            [01:26.80]Vade retro, ah vanitas
            [01:31.99]Et omnia vanitas
            [01:36.15]Nihilum flamma (vae victus fortunarum)
            [01:42.18]Visio (vanitas omnia)
            [01:47.19]Vindicia (vanitatum sentio, sentio dolor, ah dolores)
            [01:52.75]Ah senta (dolores sentio, et omnia vanitas in tristitia)
            [01:58.64]Vae victis fortunarum
            [02:03.94]Vae, ignis tinea fio
            [02:09.14]Votum, dolor (resurgito)
            [02:12.14]Vacuum, fatuus (alluceto)
            [02:14.68]Ignis sentio tragico (dolores sentio tragico)
            [02:19.04]Comoeda
            [02:20.11](Venu)
            [02:22.07](Resurgito)
            [02:24.52](Alluceto)
            [02:27.02](In dolore)
            [02:29.54](Illusio)
            [02:30.56]Vedis, calor
            [02:35.68]In scaena salto
            [02:38.53]
        `
    },
    {
        chapter: 1,
        title: 'Bane of Ambitions', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '', ytId: '75PlZCOel48', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Duel in the mist', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Inazuma Battle Theme',
        date: '2023', ytId: 'D48UG9WiTNk', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Le spectacle doit continuer', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Opera Epiclese',
        date: 'NOV 2023', ytId: 'w1d7_SE0PzY', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'otherside', artist: 'Lena Raine',
        context: 'Game - Minecraft', desc: 'Music Disc - otherside',
        date: '', ytId: 'kK81m-A3qpU', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Inevitable Conflict', artist: 'HOYO-MiX',
        context: '', desc: '',
        date: '2023', ytId: 'ZuV38DZQgvM', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 1,
        title: 'Rhapsodia Roscida', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '2023', ytId: 'OCloBNjfv44', start: 0,
        lyrics: `[00:52.43]Domina praeteritae peribitur et sculpitur crastino
[01:05.96] 
[01:19.66]Canonem gnosis inscribit inclinabimini non iam ad caelesti
[01:35.69]Ecce premeris quoniam iuvenis sanguinum es derelicte
[01:47.76]A malo pressa voces iterum conquiratis quam manui sis tenere etiamsi (Nolite me relinquere ir in finem etiamsi)
[02:00.84]Qui formaret falsum deum (Vae cui formavit deum)
[02:12.79]Ad nihil utile
[02:14.63] 
[02:15.19]Poesis eis letis recto fatus tecum fallis deperdite
[02:29.66]Estris vae falsatis quod ad propinquavit
[02:43.53] 
`,
        lyrics_cn: `过去已然消失，并铭刻于明天

灵魂的正典不再倾向于天堂
看啊，你被折磨，因为你是被遗弃的骨血
啊，我寻求挣扎，会有人帮助我吗（不要抛弃我，即使到最后）
尽管谁会造出伪神？（尽管他将成为伪神）
直到一无所有

歌颂你的真实诗篇中尽是迷失与毁灭
等着吧，你会后悔的`,
        trans_source_cn: `网易云音乐 @HOYO-MiX`,
        lyrics_en: `The mistress of the past will perish, and the future will be written

As it is imposed by the Gnosis' law, you must seek no longer what is heavenly
Behold, much will be asked of you for you are young and abandoned by your own blood
But even beneath the pressure of evil voices, seek those who stayed by your side till the very end (Do not abandon me, not even at the end)
Who would create a false god? (Woe to those who dare create a god)
But it's all to no avail

This story is a rhapsody to them, but to you it is a deceit you are lost in
Woe to the false prophets who got near you`,
        trans_source_en: `Genshin Impact Fandom Wiki`,
    },
    {
        chapter: 1,
        title: 'Polumnia Omnia', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '2023', ytId: 'NLEqRNhv6gs', start: 0,
        lyrics: `[00:07.02] Vosmet vetat res coelica
[00:19.11] 
[00:24.80] Iam premet letum vastum te
[00:37.19] Vae gnari sunt suimet quis in oculis (Vae gnari estis vestris quis in oculis)
[00:49.13] 
[01:00.92] ごやのすゑなぞながされ | goya no suwe nazo nagasare
[01:11.62] Sapientes feroces vetitum per currunt nefas (Sapientes pelliciuntur in nefas)
[01:18.78] tarda leti et necessitas semota corripiet gradum (tarda leti mors necessitudinis corripiet gradum)
[01:29.58] Iugis solum ipsius nihil debet
[01:40.43] 
[01:46.30] Credas in nullum qua sunt edicta inutile (Cave vide qua sunt edicta inutile)
[02:04.82] 
[02:10.25]Dominatus
[02:13.00]Dominatus
[02:14.54]Dominatus
[02:16.34] 
[02:28.30] ごやのすゑなぞながされ | goya no suwe nazo nagasare
[02:38.67]Vae eis simulacrum in solio inanis fixere sapientes (Vae eis cui simulacrum conlaudent mirent augeant)
[02:49.29]necessitas semota corripiet gradum (et necessitudinis corripiet gradum)
[02:55.56] 
[02:56.51] Nunquam genitus desiderem
`,
        lyrics_cn: `你已经被可怖的天国所禁止

        无底的深渊将压制你
哀哉，那些已发现自己缺陷的贤者（哀哉，那些已发现他人缺陷的贤者）

为何在我初生之时将我抛弃
再明智的野兽也会奔向被禁止的事物（再明智的人也会被引诱入罪恶）
慢慢而来的死亡和无法逃避的命运将逼近（慢慢而来的死亡和无法逃避的命运将加快步伐）
只有自己的“心”是无所负债的，

不要相信没有用的法令（小心审视那些无用的规定）

寂照万物！
寂照万物！！
寂照万物！！！

为何在我初生之时将我抛弃
哀哉，那些智者只会把神像空嵌在王座上（哀哉，那些盲从神明的人只会崇拜空虚的权力）
慢慢而来的死亡和无法逃避的命运将逼近（不可避免的命运将加快步伐）

我多么希望我自己从未降临这世上`,
        trans_source_cn: '网易云音乐 @HOYO-MiX',
        lyrics_en: `May the celestial affairs be denied to you

Now a disastrous ruin weighs upon you
Alas, O those who bear a Vision, you are aware of yourselves (You are aware of yourselves, O those who bear a Vision)

Why did you throw me away on the fifth night?
The arrogant sages overstep a sinful restriction (The sages are seduced by sin)
The slow and covert necessity of ruin speeds up the pace (The slow death given by the necessity of ruin speeds up the pace)
Only the one who is eternal is not bound to anything

Do not believe in anything that is a useless decree (Be scared, watch out which decrees are useless)

Defeated
Defeated
Defeated

Why did you throw me away on the fifth night?
Woe to them! The sages forced the idol on an empty, vain throne (Woe to them and the idol that they cover in adulation, admiration and honors)
The covert necessity speeds up the pace (and speeds up the pace of necessity)

I wish I had never been born at all`,
        trans_source_en: `Genshin Impact Fandom Wiki`,
    },
    {
        chapter: 1,
        title: 'For Riddles, for Wonders', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: '2023', ytId: 'zQBrgGjwCPM', start: 6, end: 136,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    // Chapter 2
    {
        chapter: 2,
        title: 'Combat Beneath the Waves', artist: 'HOYO-MiX',
        context: '', desc: '',
        date: '', ytId: 'UEVEmUWsfD0', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 2,
        title: 'Inverted World', artist: 'ARForest',
        context: 'Game - Rotaeno', desc: '',
        date: '2024', ytId: 'ixdnEvWkJtk', start: 0,
        lyrics: `(Instrumental - No Lyrics)`,
    },
    {
        chapter: 2,
        title: 'Reverie', artist: 'Soba',
        context: 'Game - Rotaeno', desc: '',
        date: 'JUN 2024', ytId: 'HVSgWcz_FQs', start: 0,
        lyrics: `
            [01:17.03]We're still the same you know
            [01:20.48]I feel the stillness
            [01:23.46]feel the stillness now
            [01:26.62]With all the days we learned
            [01:29.76]We're always one
            [01:32.07]we're always one somehow
            [01:36.15]We're still the same you know
            [01:38.93]I feel the stillness
            [01:41.86]feel the stillness now
            [01:45.16]With all the days we learned
            [01:48.24]We're always one
            [01:50.66]we're always one somehow
            [01:59.02]We're always one
            [02:00.83]we're always one somehow
            [02:05.00]
`
    },
    {
        chapter: 2,
        title: 'Saving Light', artist: 'Wuthering Waves',
        context: 'Game - Wuthering Waves', desc: '',
        date: 'JUL 2024', ytId: 'ZJIORfPwF40', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 2,
        title: '60%的日常·悠闲', artist: 'HOYO-MiX',
        context: 'Game - Zenless Zone Zero', desc: '',
        date: 'JUL 2024', ytId: '8VA8VDp6yyk', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 2,
        title: 'Natlan', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Natlan',
        date: 'AUG 2024', ytId: '_n-Tb5B5em4', start: 0, end: 292,
        lyrics: `
            [00:12.09]Shambulia! Beba silaha
            [00:19.18]Pigana mpaka mwishowe
            [00:25.68]Kwa nchi yetu tutaunguza damu yoyote
            [00:32.34]Rudi kwa pambaja ya dunia
            [00:38.79]Hadithi yaendelea(kama moto)
            [00:45.01]Heshima warithi vizazi(waka daima)
            [00:51.50]Ushujaa waangaza mbingu na ardhi
            [00:57.89]Mara tena ashinda Natlan
            [01:04.23]Milele tuwangoje, na tutawaimbia
            [01:10.75](Rudini) ndugu, (rudini) mashujaa
            [01:14.88]Mara ya tena mwangani
            [01:24.23]
            [02:16.81]Ati kweli mwahofuni kifo ? (Hapana)
            [02:23.05]Ushujaa wenu ni imara(bila shaka)
            [02:35.15](Kumbukeni majina ya mashujaa)
            [02:40.84](Andameni uwanjani)
            [02:47.89]Kwa jamaa(zuri, safi) nchi(sawa) na taifa
            [02:55.92]Kwa(vuma) matumaini(raha) mbeleni(nguvu) malengo
            [03:09.13](Rudini tunawangojeni)
            [03:20.79]
            [03:35.98]Nyimbo kelele sana
            [03:43.98]Sikiliza zitakuongoza nyumbani
            [03:57.24]Hadithi yaendelea(ahh, ahh)
            [04:03.76]Heshima warithi vizazi
            [04:10.26]Ushujaa waangaza mbingu na ardhi
            [04:16.58]Mara tena ashinda Natlan
            [04:23.03]Milele tuwangoje, na tutawaimbia
            [04:29.12]Rudini(ndugu) rudini(mashujaa)
            [04:33.21]Mara ya tena mwangani
            [04:43.01]Maisha marefu ni sasa
`
    },
    {
        chapter: 2,
        title: 'A Dance in Fire', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Natlan',
        date: 'OCT 2024', ytId: 'PjeuDWPbt3o', start: 0,
        ig: 'https://www.instagram.com/reel/DBG5MCAvhc0/',
        lyrics: `
            [01:00.31]Nyimbo za moto
            [01:02.85]Ziwache ziwake angani
            [01:06.59]Kama vile moto usiozimika waenea nchini
            [01:16.65]Nenda mbele kwa ujabari
            [01:20.37]Ijapokua hata
            [01:23.73]Majivu ya motoni
            [01:26.10]Tena
            [01:33.00]
            [02:37.64]Chagua njia ya mwenyewe
            [02:40.95]Moto daima utawaka
            [02:44.35]Moto daima utawaka
            [02:47.76]Na uso wa ulimwengu
            [02:51.26]Utajitokeza haponi
            [02:54.60]Na moto utakuwakia
            [02:58.01]Na moto utakuwakia
            [03:01.50]Na moto utakuwakia
            [03:42.14]
        `,
        lyrics_cn: `让这炽火之诗
响彻高天之上
如同不息的野火，烧遍旷原
勇敢者啊
向前路而行吧
纵是灰烬
亦有重燃之时

抉择吧，抉择属于你的道途吧
炽火将会为你点燃
炽火将会为你点燃
而世界的面貌
将在火中向你显现
而火，火将为你而燃
而火，火将为你而燃
而火，火将为你而燃`,
        trans_source_cn: `网易云音乐 @HOYO-MiX`,
        lyrics_en: `Let the songs of fire
        burn in the sky
Like an unquenchable fire
They are spreading in the country
go ahead with force
Even till
they return to ashes

Through yourself
the fire will always burn
The fire will always burn
There, the face of the world
You will appear there
and the fire will roar
And the fire will burn for you
And the fire will burn for you`,
        trans_source_en: `musixmatch | Translate by Diego Khalifa & Anthony Page`
    },
    {
        chapter: 2,
        title: 'Gion2', artist: 'HOYO-MiX',
        context: 'Game - Honkai Impact 3rd', desc: ' ',
        date: 'SEP 2024', ytId: 'agvdUJdCFsE', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 2,
        title: 'Burning Desire', artist: 'HOYO-MiX',
        context: 'Game - Zenless Zone Zero', desc: '',
        date: 'OCT 2024', ytId: '8DsNRWy3Q0Q', start: 0, end: 138,
        lyrics: `
            [00:03.95] Good evening and welcome!
            [00:05.87] I'm Burnice and I'll be serving you today
            [00:10.602] What can I get for you?
            [00:12.60] A drink, some snacks - or a little flames?
            [00:17.848] Mocktails, mixers, ice
            [00:19.64] The snacks are real nice
            [00:21.496] Soda, sour-mix, dry
            [00:23.288] I’m lit you can't deny
            [00:25.208] Whatever you want
            [00:26.168] Whatever you need
            [00:27.192] So good you'll never
            [00:28.216] Ever want to leave
            [00:29.176] Anything that you desire
            [00:30.823] Set it on fire!
            [00:31.251] I'll make you spend your Dennies all away
            [00:37.987] That's my desire
            [00:40.227] You know I’m the real deal.
            [00:42.851] What's left to say?
            [00:45.75] 3-2-1, fire!
            [00:51.70] Burnice, Burnice, Burnice, Burnice, Burnice, Burnice
            [00:54.466] Go go!
            [00:59.202] Burn it, Burnice, Burn it, Burnice, Burn it, Burnice
            [01:01.10] Or a little flames?
            [01:06.605] Burnice, Burnice, Burnice, Burnice, Burnice, Burnice
            [01:09.405] Go go!
            [01:14.17] Burn it, Burnice, Burn it, Burnice, Burn it, Burnice
            [01:16.154] Gonna watch it burn!
            [01:17.333] I know I look kinda cute and nice 'n' pleasant
            [01:19.51] But I got a short fuse for fools, don’t get arrogant
            [01:21.558] Watch out - let me pour you a drink
            [01:23.35] But think about messing with me, I’ll end you in a blink
            [01:25.398] So drink your drink, don’t you run your mouth
            [01:27.254] You think about stepping to me, and things'll go south
            [01:29.238] Wanna push your luck then o-k-k,
            [01:31.094] I'll burn you to ash, think twice before you play play
            [01:33.074] I'll make you spend your Dennies all away
            [01:38.066] That's my desire
            [01:40.754] You know I’m the real deal
            [01:42.93] What's left to say?
            [01:45.81] 3-2-1, fire!
            [01:51.826] Burnice, Burnice, Burnice, Burnice, Burnice, Burnice
            [01:54.231] Go go!
            [01:58.903] Burn it, Burnice, Burn it, Burnice, Burn it, Burnice
            [02:00.646] Or a little flames?
            [02:06.854] Burnice, Burnice, Burnice, Burnice, Burnice, Burnice
            [02:09.158] Go go!
            [02:14.214] Burn it, Burnice, Burn it, Burnice, Burn it, Burnice
            [02:16.035] Gonna watch it burn!
`,
        lyrics_cn: `晚上好，欢迎来到我的吧台！
        我是柏妮思，今天只为你服务。
        先来点什么？
        一杯喝的，一点零食？或许…再来一些更让人兴奋的？
        无酒精鸡尾酒，搅拌器，冰块
        这些零食味道超好
        苏打，酸甜汁，再加上辛辣剂
我已找到感觉这毋庸置疑
想要什么
需要什么（我们都有）
承认吧，这感觉太好
你已深陷其中
眼中的、心里的、口腔中的、掌心上的
都躁动起来吧
你口袋里的丁尼
是我的目标
你知道我超棒的吧？
还在犹豫什么呢？
3.2.1，挥霍吧！
柏妮思 柏妮思 柏妮思 柏妮思 柏妮思 柏妮思
耶耶
躁动吧 柏妮思 通宵吧 柏妮思 热情赞美 柏妮思
要不要更兴奋点？
柏妮思 柏妮思 柏妮思 柏妮思 柏妮思 柏妮思
耶耶
挥霍吧 柏妮思 晃动吧 柏妮思 点燃一切 柏妮思
看它燃烧吧
我当然知道自己看起来超可爱，或许还有点端庄
不过傻瓜总会让我火大，不要嚣张
客人小心哦，我这就为您倒一杯燃油饮料
但最好不要惹我生气，否则我就要开启火枪
喝下给你的燃油饮，就别乱讲
想要跟我对着干，结果一定不理想
如果你想碰碰运气
那柏妮思的火枪就会奉还加倍热情！
挥霍掉所有丁尼
是我的目标
你知道我是世界顶级的
别再多说
3.2.1，燃烧吧！
柏妮思 柏妮思 柏妮思 柏妮思 柏妮思 柏妮思
耶耶
躁动吧 柏妮思 通宵吧 柏妮思 热情赞美 柏妮思
要不要更兴奋点？
柏妮思 柏妮思 柏妮思 柏妮思 柏妮思 柏妮思
耶耶
挥霍吧 柏妮思 晃动吧 柏妮思 点燃一切 柏妮思
看它燃烧吧`,
        trans_source_cn: `网易云音乐 @HOYO-MiX`
    },
    {
        chapter: 2,
        title: 'Apocalypse', artist: 'アリスシャッハと魔法の楽団',
        context: 'Game - Lanota', desc: '',
        date: 'DEC 2025', ytId: 'Fzd0yUtUhDE', start: 0,
        lyrics: `
        [00:14.97]Selate In ou Lane Lar Alger ou Iila
[00:19.54]lootaria ou Caren Ewol Acary
[00:23.76]Mirya Heil Dro end Di end Tri
[00:28.28]Selate In ou Lane Lar Crai Jam Wery
[00:33.68]Lootaria ou Wiina Ewol Acary
[00:36.80]Mirya Hell Dro end Di end Tri
[00:41.03]Circus ou Nouche Olis Loog Nouche
[00:45.35]Synapse ah Astola
[00:47.74]end Ranya Advelses Stei ou Monodrama
[00:52.49]Finz Ranya
[00:57.32]Crai Ran Alan
[00:58.94]end Karna Mii Dist end Dist Mii
[01:02.29]a Falke Luan!
[01:03.82]a Gout Mii Disrait oh Chail ou Eist
[01:09.18]a Circus ou Drone
[01:12.06]Ley end Mii Bis Dist end Dist Mii
[01:15.38]a Falke Luan!
[01:16.86]Brait Allss ou Xia Piero
[01:21.91]Haou Crai La Crai
[01:38.52]es hai di es towai di es crai ni es grei ni lau
[01:41.78]es towai di es crai ni es grei ni lau
[01:44.78]es towai di es crai ni es grei ni lau
[01:48.02]es crai ni es grei ni lau
[01:52.79]Ranya Crai Ran Alan
[01:56.28]end Karna Mii Dist end Dist Mii
[01:59.46]a Flake Luan
[02:01.17]a Gout Mii Disrait oh Chail ou Eist
[02:07.62]a Circus ou Drone
[02:09.51]Ley end Mii Bis Dist end Dist Mii
[02:12.61]a Falke Luan!
[02:14.04]Brait Allss ou Xia Piero
[02:19.16]Haou Crai La Crai`,
        lyrics_en: `Run through the evening twilight
to the girls’ crowd
One, two and three apples roll
In the fishy revelation of aeonian silence
Run through the evening twilight to the agonizing guy
One, two and three apples roll
In the fishy revelation of aeonian sleep
The circus night is really long
scattered synapse tangle in legs
And finally peeped end of 
monodrama in the view after flip
Once I face you, I forget myself again
I have to leave right now!
But can’t find key of door
Circus without audience holds up
and forget where here is again
I have to go right now!
Prizing out eyelids of the clown
By my hand
Trail, Brightness, Redemption, Fate
Trail, Brightness, Redemption, Fate
Trail, Brightness, Redemption, Fate
Trail, Brightness, Redemption, Fate
Once I face you
I forget myself again
I have to leave right now!
But can’t find key of door
Circus without audience holds up
and forget where here is again
I have to go right now!
Prizing out eyelids of the clown
By my hand`,
        trans_source_en: `Official`,
        lyrics_cn: `穿过傍晚的暮色
奔向女孩们的人群
一、二、三个苹果滚落着
在永恒寂静那可疑的启示之中
穿过傍晚的暮色
奔向苦苦挣扎的那个人
一、二、三个苹果滚落着
在永恒沉眠那可疑的启示之中
马戏团的夜晚实在漫长，散乱的突触缠绕在双腿之间
翻转之后，终于窥见了独角戏在视野中的结局
每当我面对你，
我便再次忘却自己
我现在必须离开！
可是却找不到门的钥匙
没有观众的马戏团仍在支撑着
而我又一次忘记了这里究竟是哪里
我现在必须离开！
用我的双手
掰开小丑的眼皮
痕迹、光辉、救赎、命运
痕迹、光辉、救赎、命运
痕迹、光辉、救赎、命运
痕迹、光辉、救赎、命运
每当我面对你，
我便再次忘却自己
我现在必须离开！
可是却找不到门的钥匙
没有观众的马戏团仍在支撑着，
而我又一次忘记了这里究竟是哪里
我现在必须离开！
用我的双手
掰开小丑的眼皮`,
        trans_source_cn: `WASABISOCUTE`
    },
    {
        chapter: 2,
        title: 'Golden Sign', artist: 'HOYO-MiX',
        context: 'Game - Zenless Zone Zero', desc: '',
        date: 'DEC 2024', ytId: 'Hj1CBJxkyeA', start: 0,
        lyrics: `
            [00:28.06]Yeah, the shining golden sign (ha-ha, yeah)
            [00:30.36] 
            [00:31.01]Let your inner spark ignite (ring, ring)
            [00:34.21] 
            [00:34.65]Find your treasure (treasure), glowing bright
            [00:37.53] 
            [00:37.73]Reaching for it and take a flight (woah)
            [00:40.80] 
            [00:41.05]Lucky or not, at least you tried
            [00:44.19]Chin up, in yourself, confide (yeah)
            [00:47.45] 
            [00:47.58]No doubt fate's on your side
            [00:50.72]You're chosen (skrrt, skrrt), so enjoy the ride (uh)
            [00:54.17] 
            [00:54.66]There are things you can't control
            [00:57.60] 
            [00:57.95]Fortune's fickle (ring, ring), that's this world
            [01:00.80]Embrace the result (result), stop keeping score (yeah)
            [01:04.06] 
            [01:04.35]That's the essence
            [01:06.04]Life's true goal (woah)
            [01:07.64] 
            [01:07.49]Not just trials (uh) and battles tough (yeah)
            [01:10.71] 
            [01:10.90]Go taking joy in simple stuff
            [01:14.16] 
            [01:14.80]Even when it's getting rough
            [01:17.24]Take it easy, having fun is just enough
            [01:20.56] 
`,
        lyrics_cn: `看哪 这闪亮的金色象征

如火花般点燃你内心的激昂

找寻你心目中金光闪闪的宝藏

得到它后便能远走高飞

不论幸运与否 至少你已尝试过
昂首挺胸 相信你自己吧

毋庸置疑 幸运女神与你同在
你就是那幸运儿 所以好好享受吧

世上总有你无法掌控的事

命运无常 便是这世界的法则
接受结果 放下无谓的胜负心

这才是人生真正的
本质与目标

困难的试炼与战斗并非一切

为小小的幸运欢呼吧

虽然总有不如意的时候
得失心别太重 能够享受便足矣`,
        trans_source_cn: ` 巴哈姆特 @Karas`,
    },
    {
        chapter: 2,
        title: 'Tell Your World', artist: 'livetune',
        context: 'Game - Hatsune Miku: Colorful Stage!', desc: ' ',
        date: 'DEC 2024', ytId: 'B2fRMQUxnyw', start: 0,
        lyrics: `
            [00:20.775] 形のない気持ち忘れないように
            [00:27.266] 決まりきったレイアウトを消した
            [00:33.75] ふと口ずさんだフレーズを掴まえて
            [00:39.875] 胸に秘めた言葉乗せ空に解き放つの
            [00:48.031] 君に伝えたいことが
            [00:51.203] 君に届けたいことが
            [00:54.45] たくさんの点は線になって
            [00:57.491] 遠く彼方へと響く
            [01:00.975] 君に伝えたい言葉
            [01:04.05] 君に届けたい音が
            [01:07.25] いくつもの線は円になって
            [01:10.493] 全て繋げてく どこにだって (ah)
            [01:26.353] 君が伝えたいことは
            [01:29.586] 君が届けたいことは
            [01:32.786] たくさんの点は線になって
            [01:35.474] 遠く彼方へと響く
            [01:39.058] 君が伝えたい言葉
            [01:42.322] 君が届けたい音は
            [01:45.586] いくつもの線は円になって
            [01:48.791] 全て繋げてく どこにだって (ah…)
`
    },
    {
        chapter: 2,
        title: 'アイディスマイル', artist: '25時、ナイトコードで。',
        context: 'Game - Hatsune Miku: Colourful Stage!', desc: '',
        date: 'DEC 2024', ytId: 'JTOM6fuXptg', start: 0,
    },
    {
        chapter: 2,
        title: 'ジャックポットサッドガール', artist: '25時、ナイトコードで。',
        context: 'Game - Hatsune Miku: Colourful Stage!', desc: '',
        date: 'DEC 2024', ytId: 'J9kD9rYR088', start: 0,
        ig: 'https://www.instagram.com/reel/DE7mx9IxgwU/',
        lyrics: `
            [00:15.486] 標準偏差以内の人生
            [00:17.902] 表情殺して腐った品性
            [00:20.189] ほらほら気づけばまた
            [00:22.301] ただただ過ぎ行く日々
            [00:24.605] 表現欲も非凡な才も
            [00:27.198] 漫然と生きてちゃなんもなんないの
            [00:29.693] ヤダヤダアタシはヤダ
            [00:32.011] 嘆けど変わらぬまま
            [00:34.443] 受け入れ難い心情をねじ込むのが愛なんだ
            [00:42.618] アタシはジャックポットサッドガール 分かり合えぬまま
            [00:49.081] 点と線でエンドロール描く日々の中
            [00:53.305] 誰にも言えないまんま抱えた想いこそ価値があるんだ
            [00:58.041] 探していた答えだって 未来みたいに手の中に
            [01:02.649] 正論ばっかじゃちょーつまんない
            [01:05.081] 人生は一種のジョークなんだ
            [01:07.385] ハローハロー気の向くまま
            [01:09.561] その音鳴らせばほら
            [01:12.121] 精神相場はちょー不安定
            [01:14.425] 安定な策とかホント退屈さ
            [01:16.729] 見て見てアタシの中
            [01:18.969] 心の奥底にある
            [01:21.401] 黒く澱んだ水槽に映るのは微笑だった
            [01:31.065] ジャックポットサッドガール 分かり合えずとも
            [01:35.545] 心の臓のビートを強く響かせて
            [01:39.961] 胸張り正々堂々正面突破で間違えるんだ
            [01:44.761] 隠し持った似合わないナイフ 異端ゆえの最先端
            [01:50.318] ひーふーみーよー
            [01:54.67] いーむーなーやー
            [01:59.086] ねぇ先生ここ無法地帯
            [02:01.582] あなた曰く既に廃れ枯れたアネクメーネ
            [02:03.822] 草木生えず人類の住めなくなった
            [02:06.062] チープでキッチュな小惑星
            [02:08.494] ねぇ先生あなたバカじゃないの
            [02:10.798] 未だ滾る感情を知らないの
            [02:13.166] 凝り固まってんならお勉強
            [02:15.278] ここで無垢で無知で無為な賛美を見せつけるわ
            [02:22.757] それでも
            [02:25.08] ジャックポットサッドガール 分かり合えるかな
            [02:29.624] どんな不安も怠惰もみな抱えたまま
            [02:33.931] 誰にも言えないまんま 自分のまんまで勝ち上がるんだ
            [02:39.063] 探していた答えだって 未来みたいに手の中に
            [02:43.574] あった
                `
    },
    {
        chapter: 2,
        title: '限りなく灰色へ', artist: '25時、ナイトコードで。',
        context: 'Game - Hatsune Miku: Colourful Stage!', desc: '',
        date: 'DEC 2024', ytId: 'tsjQM-oZon4', start: 0,
    },
    {
        chapter: 2,
        title: 'Twilight Melody', artist: 'CircusP',
        context: 'Game - Hatsune Miku: Colourful Stage!', desc: '',
        date: 'DEC 2024', ytId: 'A77p_8E7OFs', start: 0,
        ig: 'https://www.instagram.com/reel/DIUDThwRCnq/',
        lyrics: `
            [00:00.615] Let the music resonate in your heart
            [00:03.495] Together we can recreate a new start
            [00:07.504] On the borderline between what is real and yet unseen
            [00:10.471] Hear my song, follow me
            [00:24.714] If it feels like you have nowhere left
            [00:28.13] As the midnight sets in
            [00:31.146] Just look to the horizon
            [00:33.45] Find where it all begins
            [00:36.074] A new constellation will lead us to boundless odyssey
            [00:40.318] Come follow me
            [00:41.598] With luck, resolution, and vigor
            [00:44.03] We'll capture sights yet unseen
            [00:47.934] Now
            [00:48.36] Hear this melody resound in the chaos of the crowd
            [00:51.368] By noise be found, your voice calls out
            [00:53.864] On the borderline between what is real and yet unseen
            [00:56.744] Hear my song, follow me
            [00:58.792] Let the music resonate in your heart
            [01:01.48] Together we can recreate a new start
            [01:04.232] Confide into my arms
            [01:05.896] Hear this melody resound in the chaos of the crowd
            [01:08.584] Defy all doubts by twilight's sound
            [01:22.061] Open your eyes to something new
            [01:24.877] Gleaming stars come into view
            [01:27.501] Know that this love is absolute
            [01:30.381] As the sun will rise the day anew
            [01:34.54] Now
            [01:34.86] Hear this melody resound in the chaos of the crowd
            [01:37.863] By noise be found, your voice calls out
            [01:40.71] On the borderline between what is real and yet unseen
            [01:44.381] Hear my song, follow me
            [01:46.821] Let the music resonate in your heart
            [01:49.565] Together we can recreate a new start
            [01:52.269] Confide into my arms
            [01:53.405] Hear this melody resound in the chaos of the crowd
            [01:56.989] Defy all doubts by twilight's sound
            [02:03.149] I'll never let you down
            [02:09.003] Be found by twilight's sound
`
    },
    // Chapter 3
    {
        chapter: 3,
        title: 'Nameless Faces', artist: 'HOYO-MiX',
        context: '2025 Opening', desc: 'Honkai Star Rail',
        date: 'JAN 2025', ytId: 'TqKwoSk6708', start: 0,
        lyrics: `
            [00:11.925] Moonlight, a barren void to horizon,
            [00:23.70] Days blur into nights of dreadful silence, oh.
            [00:34.90] You let me see thy heart,
            [00:37.90] Lost beacon in the dark,
            [00:40.975] Our lonely souls that spark,
            [00:43.90] We break apart.
            [00:51.75] We find,
            [00:53.266] We strive,
            [00:54.766] Our journey of eternity.
            [00:57.825] Desire, in mind,
            [01:00.725] To set our spirits free,
            [01:04.333] Echoes fade to oblivion,
            [01:06.975] Freedom to make our own.
            [01:10.066] We trod our destinies on
            [01:12.95] A path unknown.
            [01:14.95] In hope,
            [01:17.966] In vain,
            [01:20.75] To whom, who waits?
        `
    },
    {
        chapter: 3,
        title: 'Vitas Corrodens Pestis', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Chapter 5 Art 5',
        date: 'JAN 2025', ytId: 'pZRSJ00DABs', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTY4NjkyNTY5NzkyMzIw?story_media_id=3537309540074394582_63008808258&igsh=MXJ4ZG4wZHA1OW5mMw==',
        lyrics: `
            [00:00.19]Vae umbrifero corrupto veteri
            [01:32.24]Vides ut veteranum aureum altumque palatium
            [01:45.99]Praedico tibi hodie quod pereas et tandem moreris
            [01:50.74]Nunc sordida impudica pulvere obtectum
            [02:06.59]Numeramur nos et omnes in caelo corruimus
            [02:13.52]Numerabit vos et omnes in caelo corruetis
            [02:20.29]Neglegis immeritis nocituram postmodo
            [02:34.25]ferro odi ignique
            [02:35.50]natis committere, umbriferum cadaveris?
            [02:47.95]
            [03:01.38]Vides ut heres superbiae priscos nobiles progenies
            [03:13.61]Fors et debita iura vicesque superbae te ipsum
            [03:13.61]Nunc squamae exsiccatae remaneant nisi tantum
            [03:32.49]Irrident veteres odiorum
            [03:32.49]Irrides veteres odiorum vanitates
            [03:40.80]Ossa relicta in tenebrosis vivantium iam ponant odium
            [03:45.67]Vanitates et illudis veteris odi
            [03:55.14]Nescis cras quis lumen visurus erit?
            [03:55.14]Nescis cras quis nocte sepultus erit?
        `
    },
    {
        chapter: 3,
        title: 'Ode of Resurrection : Recapitulation', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Chapter 5 Art 5',
        date: 'JAN 2025', ytId: 'B1FUeACyqbI', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTY4NjkyNTY5NzkyMzIw?story_media_id=3537176221278097451_63008808258&igsh=MXJ4ZG4wZHA1OW5mMw==',
        lyrics: `
            [00:42.74]Shambulia! Beba Silaha
            [00:49.02]Pigana mpaka mwishowe
            [00:55.74]Kwa nchi yetu tutaunguza damu yoyote
            [01:02.20]Rudi kwa pambaja ya dunia
            [01:08.18]Zuri, safi, sawa, sikia
            [01:14.32]Vuma, raha, nguvu, sikia
            [01:24.44]Hadithi yaendelea (kama moto)
            [01:30.52]Heshima warithi vizazi (waka daima)
            [01:34.29]Ushujaa waangaza mbingu na ardhi
            [01:40.25]Mara tena ashinda Natlan
            [01:45.02] 
            [02:04.58]Nyimbo kelele sana 
            [02:17.25]Kwa jamaa, nchi na taifa
            [02:17.25](Sikiliza zitakuongoza nyumbani)
            [02:17.25](Zuri, safi, sawa)
            [02:29.99]Kwa Matumaini, mbeleni, malengo (Vuma, raha, nguvu)
            [02:42.66] 
            [02:55.59]Mara ya tena mwangani
            [03:07.92]Mara ya tena mwangani
            [03:07.94]Mara ya tena mwangani
            [03:20.34]Maisha marefu ni sasa
            [03:26.56]Maisha marefu ni sasa
            [03:32.96]Maisha marefu ni sasa
            [03:39.30]Maisha marefu ni sasa
            [03:44.29]
`
    },
    {
        chapter: 3,
        title: 'Anthem of Era', artist: 'HOYO-MiX',
        context: 'Out-zone exploration - Tokto, Japan', desc: 'Changi Airport Theme',
        date: 'FEB 2025', ytId: 'fao9fjeAGEI', start: 13, end: 129,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDM4NTkxMTE3MjY5OTcx?story_media_id=3562051245785979709_63008808258&igsh=NWhzZWljMzE3eW54',
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 3,
        title: 'フロムトーキョー', artist: 'Leo/need',
        context: 'Out-zone exploration - Tokto, Japan', desc: 'Tokyo Theme',
        date: 'FEB 2025', ytId: 'G-WN0ab-9ZI', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDM4NTkxMTE3MjY5OTcx?story_media_id=3562051245785979709_63008808258&igsh=NWhzZWljMzE3eW54',
        lyrics: `
            [00:01.18]不安ばっか知ってんだ 雨が降りそうな日
            [00:04.76]風の匂いで分かるから
            [00:08.10]誰だって気付いてんだ 僕には無理だと
            [00:12.12]それでも足掻いては転んだ
            [00:14.96]
            [00:15.34]友情×努力＝勝利の方程式
            [00:19.37]解けないまま過ごした僕らにも
            [00:22.96]いつか分かる日が来るよって
            [00:25.83]確証無く笑える自分が嫌いだ
            [00:29.43]
            [00:30.12]星が降るあの街に
            [00:33.34]置き去りにした思い出が
            [00:37.01]胸の奥で揺らめいてる
            [00:40.74]いつまでも焦がれていた
            [00:44.69]
            [00:46.03]それは雑踏の海の中で
            [00:49.95]踊るように燃えている誰かの声
            [00:53.62]ずっと探し続けてる
            [00:57.35]たとえそれが僕らのワガママでもいいさ
            [01:01.90]
            [01:09.49]好きな事選んだんだ
            [01:11.38]胸を張ればいいって
            [01:13.15]わかってるわかってる繰り返した
            [01:15.51]
            [01:16.33]結んだ指とかさねた呼吸
            [01:19.62]鳴り響く鼓動に耳を澄ました
            [01:22.76]
            [01:23.28]ホントは言いたくなかった
            [01:25.31]うざったいんだよ外野ばっか
            [01:27.13]ここで生きるってこと決めたんだから！
            [01:30.35]
            [01:30.59]きっとボクらの出会いだって
            [01:34.40]この空の下にある小さなセカイ
            [01:37.98]ずっと求め続けてる
            [01:41.70]たとえそれが誰かの気まぐれでもいいさ
            [01:49.56]
            [02:00.32]それは雑踏の海の中で
            [02:03.97]踊るように燃えているあの日の声
            [02:07.63]ずっと探し続けてる
            [02:11.71]たとえそれが僕らのワガママでも
            [02:14.92]
            [02:15.48]きっとボクらの出会いだって
            [02:19.09]この空の下にある小さなセカイ
            [02:22.90]ずっと求め続けてる
            [02:26.54]たとえそれが誰かの気まぐれでもいいさ
            [02:30.86]
            [02:38.31]不安ばっか知っていた あの日のボクらが
            [02:41.88]この街で僕らになれますように
`
    },
    {
        chapter: 3,
        title: 'ザムザ', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'MAR 2025', ytId: 'cchy8Tl5Oa8', start: 0,
        ig: '',
        lyrics: `
            [00:11.44]使い古した自分の名前に
            [00:13.52]あえてキッチュなルビを振って
            [00:15.39]高潔を打ち負かせるくらいに
            [00:17.40]恐ろしくなる 骨の髄まで
            [00:19.36]今はどんなふうに見えてますか？
            [00:21.40]醜いですか？ それはそっか
            [00:23.34]どうか林檎を投げつけないで
            [00:25.34]胸にLock up Lock up
            [00:26.99]ザムザ
            [00:28.65]
            [00:35.75]「鏡をご覧」誰かが囁く
            [00:37.20]うまくいったら儲けものさ
            [00:39.01]甘い言葉も笑顔も通じない
            [00:40.95]走り出したらもう獣だ
            [00:42.92]月の真下をうろつきながら
            [00:44.87]考えてた 夜すがら
            [00:47.03]悪夢にどの指立てて
            [00:48.99]やるべきかってね
            [00:50.70]
            [00:51.04]ズキズキズキ 『ズキズキズキ』
            [00:53.11]ズキンズキンズキン 『ズキンズキン』
            [00:55.23]ズキズキズキ 『ズキズキズキ』
            [00:57.05]ズキ ズキ ズキン
            [00:58.68]変われ…
            [00:59.35]ズキズキズキズキズキ
            [01:02.08]
            [01:02.08]誰だって魂辛辛
            [01:05.05]ズキズキズキ
            [01:06.29]痛みと怒れる人(ラングラー)を喰らったったらった
            [01:10.86]だのに何故だろう今も
            [01:13.67]ズキズキズキって
            [01:15.16]派手な尻尾を引き摺りゆく ザザザザ ザムザ
            [01:19.39]「現実はもういい」なんて云うなよザムザ
            [01:23.33]おーいえー
            [01:24.44]『ズキズキズキ』
            [01:27.42]ザザザザ ザムザ
            [01:28.95]『ズキズキズキ』
            [01:31.49]
            [01:32.26]「ごめんね。ちっとも上手に
            [01:34.30]生きてあげられなくて」と伝えて
            [01:36.23]否定形の笑顔でも欲しくて
            [01:38.03]ニンゲン様なりきってる亡霊
            [01:41.09]自分の弱音に相槌ばかりだった
            [01:44.06]当然あなたとまともにケンカもできなかった
            [01:48.16]ズキズキズキ 『ズキズキズキ』
            [01:50.31]ズキンズキンズキン 『ズキンズキン』
            [01:52.30]ズキズキズキ 『ズキズキズキ』
            [01:54.22]ズキ ズキ ズキン
            [01:55.76]変われそうにないやいや
            [01:59.53]冗談じゃない 夢を食べないで
            [02:02.32]ズキズキズキ
            [02:03.46]小洒落た絶望を歌ったったらった
            [02:07.49]どうしようもない成れの果てでも
            [02:10.21]ズキズキズキって
            [02:11.73]いつか愛しい歌になるさ ザザザザ ザムザ
            [02:16.40]
            [02:22.80]ねえ123で飛んで ザザザザ ザムザ
            [02:26.94]一切合切蹴っ飛ばして ザザザザ ザムザ
            [02:30.95]あとがきで触れられもしない日々
            [02:34.35]ここで逃げ出したら 本当にそうなりそうだ
            [02:39.84]
            [02:42.36]誰だって魂辛辛
            [02:45.01]ズキズキズキ…
            [02:46.20]痛みと怒れる人(ラングラー)を喰らったったらった
            [02:50.24]だのに何故だろう今も
            [02:52.97]ズキズキズキって (ズキズキ)
            [02:54.39]林檎をかじるようにザザ ザムザ
            [02:57.78]どうしようもない成れの果てでもここにいる
            [03:01.97]シャガの花に毒されても
            [03:05.66]光は１時の方角にある
            [03:09.90]今は尻尾を引き摺りゆけ
            [03:12.37]ザザザザ ザムザ
            [03:14.33]だから「現実はもういい」なんて云うなよザムザ
            [03:18.30]おーけー？
            [03:19.49]『ズキズキズキ…』
            [03:21.30]ザザザザザムザ
            [03:22.76]『ズキズキズキ…』
            [03:25.29]
            [03:26.26]『ズキズキズキ…』
            [03:28.95]ザザザザザムザ
            [03:30.77]『ズキズキ…』
            [03:33.61]『ズキ』
`
    },
    {
        chapter: 3,
        title: 'The End of YoRHa', artist: 'Keiichi Okabe',
        context: 'Game - NieR: Automata', desc: 'Ending E - the [E]nd of YoRHa',
        date: 'APR 2025', ytId: 'PslQESlD4xs', start: 0,
        ig: 'https://www.instagram.com/reel/DIY7A7GvZa3/',
        lyrics: `
            [01:21.00]Cause we're going to shout it loud
            [01:24.26]Even if our words seem meaningless
            [01:27.46]It's like I'm carrying the weight of the world
            [01:32.84]
            [01:33.92]I wish that someway, somehow
            [01:37.32]That I could save every one of us
            [01:40.58]But the truth is that I'm only one girl
            [01:46.47]Maybe if I keep believing
            [01:49.03]My dreams will come to life
            [01:55.37]
            [01:56.26]Come to life
            [02:00.49]
            [02:13.51]溢れる緑
            [02:16.65]零れる命
            [02:19.27]風は今も遠く
            [02:25.04]
            [02:26.78]Nasico whosh pier wan nei
            [02:29.60]Wananba ri na qua lei
            [02:32.29]Sila schmer ya pit pa lu
            [02:38.30]Tell me God, are you punishing me?
            [02:45.41]Is this the price I'm paying for my past mistakes?
            [02:51.94]This is my redemption song
            [02:58.27]I need you more than ever right now
            [03:04.42]Can you hear me now?
            [03:08.00]そう僕らは今
            [03:11.26]ああ、無価値でも叫ぶ
            [03:14.46]この汚れた世界の愛
            [03:20.86]そう僕らは今
            [03:24.32]ああ、無意味でも願う
            [03:27.39]ただキミとの時間を
            [03:33.87]La feto bo ras di lei
            [03:36.99]Shel va pelo cra na dii sii hei
            [03:40.51]Naya chyo ma ter meh lava ma puoru
            [03:46.91]Ig nagya di lem myo
            [03:50.18]Sequoish pela chyo mei lu
            [03:53.31]Wana piesla hola uma schen dan
            [03:59.83]Still we're gonna shout it loud
            [04:03.22]Even if our words seem meaningless
            [04:06.29]It's like I'm carrying the weight of the world
            [04:12.76]I'd hope that some way, somehow
            [04:16.15]That I can save every one of us
            [04:19.35]But the truth is that I'm only one girl`
    },
    {
        chapter: 3,
        title: 'はじまりの未来', artist: '40mP x sasakure.UK',
        context: 'Movie - 劇場版プロジェクトセカイ 壊れたセカイと歌えないミク', desc: '',
        date: 'APR 2025 ', ytId: 'mxj3mW4jf7Q', start: 0,
        ig: 'https://www.instagram.com/reel/DIiyxE9Rm4l/',
        lyrics: `
            [00:00.128] 光、未来 相のうた追う
            [00:03.795] 迂回、出会い ハジメマシテ
            [00:06.322] 問うからまたね 舞台の裏
            [00:09.465] 添う続いてゆく未知の
            [00:25.632] 君が笑う景色の砂が
            [00:28.347] 好き、で色づくように ね
            [00:31.579] 嬉しい日も悲しい日も
            [00:34.491] うたと共にいるよ
            [00:36.731] あの坂道も 回り道も
            [00:40.233] 君と居れば ほらね、ミュージック
            [00:42.923] え そんな日常？ どんな日常？
            [00:46.459] 答案に、収まらないね 不思議
            [00:50.213] 風に溶けた音符の群れが
            [00:52.744] 渇いた心の声とハモって
            [00:56.345] 隠してきた本当の嘘が
            [00:58.959] ヘッドフォンに響いた
            [01:01.223] 内緒話も独り言も
            [01:04.90] 君の手にかかれば、ミュージック
            [01:07.404] 息継ぎしたら生まれたての
            [01:11.087] 季節を吸い込んだ
            [01:14.201] 変わりゆく景色の空白を
            [01:17.017] 変わらない歌声が彩るよ
            [01:20.025] 忘れ物に気づいた通学路
            [01:23.161] 躓いた問いを絡まった過去を
            [01:26.194] 解いたら、一歩 先
            [01:29.394] 走り出す未来のすぐそばで
            [01:32.841] 夢にまみれた今を抱く
            [01:35.721] 信号踏切いつでも
            [01:38.281] 音楽は もう、とまらない
            [01:41.591] あの笑顔もナミダも君のうた
            [01:45.056] まだ、歌えるよ
            [01:47.143] 青空の下でこの夏を再生
            [01:51.362] 聴いてよ こんなうたどう？
            [01:54.476] 無題 デモワンフレーズの衝動
            [01:57.361] じゃあ、またね１秒後に会おう
            [02:00.562] 終わらない未知で
            [02:16.188] オトで擦る星空の軌跡
            [02:18.902] 幸せ探す綺麗を纏う芽
            [02:22.332] 君が”君”で居てくれたから
            [02:25.084] ここにいる、今日だった
            [02:27.708] 1.2.3 で煌めくファンタジーを
            [02:31.311] 夜に翳すインターリュードを
            [02:34.306] 街を染めてゆくリリックを
            [02:37.277] 繋いでゆく、世界(セカイ)
            [02:40.359] はじまりの景色の空白を
            [02:43.239] 隣り合わせの君が彩るよ
            [02:46.20] 互い違い、間違い、すれ違い⋯？
            [02:49.444] 足りないくらいの
            [02:50.98] 消えないくらいの
            [02:52.452] 滲んだ色を はみ出した色を
            [02:55.70] 愛したら 一歩 先
            [03:01.514] 綺麗な未来になれなくても
            [03:04.906] 夢が零れてしまっても
            [03:07.914] 誰かの想いが届くまで
            [03:10.372] 音楽はそう、止めどなく溢れてく
            [03:16.986] 走り出す未来のすぐそばで
            [03:20.513] 夢にまみれた今を抱く
            [03:23.255] 水溜りクラッシュ弾けて
            [03:25.815] 音楽は もう、止まらない
            [03:29.468] 後悔も願いも 君のうた
            [03:32.77] ほら、聴こえるよ
            [03:34.818] 青空に映る
            [03:37.072] あの日々の残像
            [03:39.083] 「覚えてる？ 僕のうたを」
            [03:42.027] 重ね合うオーケストラ模様
            [03:44.843] サヨナラのあと 手を繋ごう
            [03:47.974] はじまる未知と―
            [04:03.726] 終わらない未知で―
`
    },
    {
        chapter: 3,
        title: '千本桜', artist: '黒うさＰ',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'shs0rAiwsGQ', start: 0,
        ig: 'https://www.instagram.com/reel/DInnzAexPbz/',
        lyrics: `
            [00:32.75] 大胆不敵にハイカラ革命
            [00:35.833] 磊々落々 反戦国家
            [00:39.016] 日の丸印の二輪車転がし
            [00:42.033] 悪霊退散 ICBM
            [00:45.283] 環状線を走り抜けて 東奔西走なんのその
            [00:51.40] 少年少女戦国無双 浮世の随に
            [00:57.116] 千本桜 夜ニ紛レ 君ノ声モ届カナイヨ
            [01:03.45] 此処は宴 鋼の檻 その断頭台で見下ろして
            [01:09.633] 三千世界 常世之闇 嘆ク唄モ聞コエナイヨ
            [01:15.90] 青藍の空 遥か彼方 その光線銃で打ち抜いて
            [01:35.083] 百戦錬磨の見た目は将校
            [01:38.15] いったりきたりの花魁道中
            [01:41.266] アイツもコイツも皆で集まれ
            [01:44.316] 聖者の行進 わんっ つー さん しっ
            [01:47.45] 禅定門を潜り抜けて 安楽浄土厄払い
            [01:53.583] きっと終幕は大団円 拍手の合間に
            [01:59.366] 千本桜 夜ニ紛レ 君ノ声モ届カナイヨ
            [02:05.716] 此処は宴 鋼の檻 その断頭台で見下ろして
            [02:11.95] 三千世界 常世之闇 嘆ク唄モ聞コエナイヨ
            [02:18.233] 希望の丘 遥か彼方 その閃光弾を打ち上げろ
            [02:56.05] 環状線を走り抜けて 東奔西走なんのその
            [03:02.20] 少年少女戦国無双 浮世の随に
            [03:08.00] 千本桜 夜ニ紛レ 君ノ声モ届カナイヨ
            [03:14.20] 此処は宴 鋼の檻 その断頭台を飛び降りて
            [03:20.633] 千本桜 夜ニ紛レ 君が歌い僕は踊る
            [03:26.866] 此処は宴 鋼の檻 さあ光線銃を撃ちまくれ
`
    },
    {
        chapter: 3,
        title: 'ジェヘナ', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'tfetmZjz2mA', start: 0,
        lyrics: `[00:18.46]なあ 元気？ 調子はどうだい？
[00:22.23]ああ もうね そういうの辞めたんだ
[00:26.03]うん なんか もう回復の見込みは無いそうなんだ
[00:31.24]何も聞かないでくれ

[00:34.38]後悔 値踏み 談笑会
[00:37.38]介護 悦 共有もサレンダーだ
[00:41.23]はい そうです 正真正銘 僕のせいだった
[00:47.03]よくある話

[00:49.02]単純明快をモノにしたくて
[00:52.22]斯くあるべきという理想を殺して
[00:56.19]もう散々だって逃げる勇気も無い
[00:59.94]はやく もっと 堕ちて

[01:03.41]「生きていたいよ」
[01:04.96]毎夜 喉を塞ぐ
[01:06.77]透明の概要
[01:08.48]肺を蝕む実在も

[01:10.86]理不尽も 孤独も
[01:13.27]恨まなくていい
[01:14.66]それら全て意味は無いんだ
[01:18.21]僕らは生きるしかないんだ
[01:21.90]
[01:36.85]おい お前 そっちはどうだい
[01:40.60]ああ まだ そんなことやってんだ
[01:44.52]そういや 付き合ってた子とはどうなったんだ
[01:49.86]何も言わないでくれ

[01:53.25]将来 妬み 敗北感
[01:56.45]ワイヤレス 首も吊れないな
[02:00.25]はい 恐悦 大変 身に染みるお話でした
[02:05.59]満たされたかい

[02:07.80]真っ黒く濁って割れた心を
[02:10.96]アルコールで消毒して眠る
[02:14.90]もう暗澹たる大河の水になって
[02:18.53]もっと もっと もっと もっと 堕ちて

[02:22.07]「生きていたいよ」
[02:23.68]毎夜 喉を掴む
[02:25.59]空気も未来も
[02:27.17]内臓を騙る肉塊も

[02:29.67]幸せも 宇宙も
[02:31.99]疑わなくていい
[02:33.49]それら全て変わらないんだ
[02:37.18]僕らは知らなくていいんだ
[02:41.42]
[02:56.02]「生きていたいよ」
[02:57.41]なんでか分からないけど
[02:59.66]「生きていたいよ」
[03:01.17]DNAという聖書

[03:03.59]本能も恐怖も
[03:05.56]恨まなくていい
[03:07.20]どうせ何も変わらないんだ
[03:09.74](Forty-five here to waste time
[03:11.46]Hit 'em with the rhythm in the face)

[03:11.57]「生きていたいよ」
[03:12.66]なんの希望も無いけど
[03:14.73]「生きていたいよ」
[03:16.49]本能は赤く脈打つの

[03:18.86]「生きていたいよ」
[03:20.19]「生きてたくないよ」
[03:22.71]本当に残念だけど
[03:26.26]僕らは生きるしかないんだ
[03:30.07]
[03:31.62]騙してごめんよ
[03:35.20]言えなくてごめんよ
[03:38.68]そして本当に悲しいけれど
[03:43.01]苦しみだけが絆なんだ
[03:46.87]
[03:56.49]Forty-five here to waste time
[03:58.23]Hit 'em with the rhythm in the face
[03:59.42]Push 'em way back, take that
[04:00.86]They don't even really let ya take a gallon to the neck
[04:02.22]Got me feeling like a boss 'cuz I'm laid back`,
    },
    {
        chapter: 3,
        title: '神っぽいな', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'vIHCFGj_G2E', start: 0,
        lyrics: `[00:07.629] Oh my god
[00:08.49] 愛のネタバレ 「別れ」っぽいな
[00:11.589] 人生のネタバレ 「死ぬ」っぽいな
[00:15.189] なにそれ意味深で
[00:16.929] かっこいいじゃん…
[00:18.30] それっぽい単語集で踊ってんだ
[00:21.269] 失敬
[00:22.21] とぅ とぅる とぅ とぅ とぅる "風"
[00:27.289] ぽいじゃん ぽいじゃん
[00:28.96] とぅ とぅる とぅ とぅ とぅる "風"
[00:32.35] とぅ とぅる とぅ とぅ とぅる
[00:33.63] 神っぽいな
[00:35.439] もういいぜ もういいぜ それ
[00:37.00] もういいぜ もういいぜ
[00:38.259] 逆に興奮してきたなあ
[00:42.289] おっきいね おっきいね 夢
[00:43.77] おっきいね おっきいね
[00:45.039] 景気いいけど 品性はTHE END
[00:48.09] うええい うええい
[00:50.75] " Gott ist tot "
[00:52.20] 神っぽいな それ 卑怯
[00:53.899] 神っぽいな それ "My God"
[00:55.60] アイウォンチュー ウォンチュー
[00:56.659] IQが下がっていく感じ
[00:58.939] 邪心ぽいな それ 畢竟
[01:00.64] 邪心ぽいな それ "My God"
[01:02.35] アイヘイチュー ヘイチュー
[01:03.42] 害虫はどっち
[01:05.64] その髪型 その目 その口元
[01:07.379] その香水 その服 そのメイク
[01:09.09] アレっぽいな それ 比況
[01:10.75] アレっぽいな それ
[01:12.459] その名言 その意見 その批評
[01:14.12] そのカリスマ そのギャグ そのセンス
[01:15.879] 神っぽいな それ 卑怯
[01:17.569] ぽいな ぽいな ぽい
[01:18.609] 憧れちゃう！
[01:19.689] とぅ とぅる とぅ とぅ とぅる "風"
[01:24.73] ぽいじゃん ぽいじゃん
[01:26.45] とぅ とぅる とぅ とぅ とぅる "風"
[01:29.819] とぅ とぅる とぅ とぅ とぅる
[01:31.079] 神っぽいな
[01:33.42] メタ思考する本質は悪意？
[01:35.68] 人を小馬鹿にしたような作為
[01:38.079] 無為に生き延びるのは難しい
[01:40.40] 権力に飲まれて揺らぐ灯り
[01:42.739] 神を否定し神に成り代わり
[01:45.06] 玉座で豹変する小物達
[01:47.409] 批判に見せかけ自戒の祈り
[01:50.03] Do you know？
[01:51.34] 何言ってんの？ それ ウザい
[01:53.68] 何言ってんの？ それ
[01:56.01] 意味がよくわかんないし
[01:58.329] 眠っちゃうよ マジ
[02:00.659] 飽きっぽいんだ オーケー
[02:02.42] みんな 飽きっぽいんだ オーケー
[02:05.329] 踊れるやつ ちょうだい
[02:07.359] ちょうだい ビーム
[02:10.219] きっしょいね きっしょいね それ
[02:11.759] きっしょいね きっしょいね
[02:13.03] 逆にファンになってきたじゃん
[02:16.99] ちっちゃいね ちっちゃいね 器
[02:18.49] ちっちゃいね ちっちゃいね
[02:19.78] 天才ゆえ孤独ですね
[02:22.719] かっけえ… かっけえ…
[02:27.449] " Gott ist tot "
[02:28.65] 神っぽいな それ 卑怯
[02:30.34] 神っぽいな それ "My God"
[02:32.00] 超健康 健康 言い張って
[02:33.719] くたばっていく感じ
[02:35.379] ヤケっぽいな それ 畢竟
[02:37.069] ヤケっぽいな それ "My God"
[02:38.80] もう哀愁 哀愁
[02:39.81] エピゴーネンのヒール
[02:42.12] そのタイトル その絵 そのストーリー
[02:43.80] その音楽 その歌 そのメロディ
[02:45.55] アレっぽいな それ 比況
[02:47.25] アレっぽいな それ
[02:48.879] その名言 その意見 その批評
[02:50.55] そのカリスマ そのギャグ そのセンス
[02:52.30] 神っぽいな それ 卑怯
[02:54.009] ぽいな ぽいな ぽい
[02:55.00] 憧れちゃうわ！
[02:56.09] とぅ とぅる とぅ とぅ とぅる "風"
[03:01.189] ぽいじゃん ぽいじゃん
[03:02.87] とぅ とぅる とぅ とぅ とぅる "風"
[03:06.259] とぅ とぅる とぅ とぅ とぅる
[03:07.539] 神っぽいな
[03:09.259] 愛のネタバレ 「別れ」っぽいな
[03:12.55] 人生のネタバレ 「死ぬ」っぽいな
[03:16.069] すべて理解して患った
[03:19.31] 無邪気に 踊っていたかった
[03:22.27] 人生
`
    },
    {
        chapter: 3,
        title: 'ザムザ', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'cchy8Tl5Oa8', start: 0,
        lyrics: `[00:11.769] 使い古した自分の名前に
[00:13.689] あえてキッチュなルビを振って
[00:15.481] 高潔を打ち負かせるくらいに
[00:17.593] 恐ろしくなる 骨の髄まで
[00:19.641] 今はどんなふうに見えてますか？
[00:21.753] 醜いですか？ それはそっか
[00:23.481] どうか林檎を投げつけないで
[00:25.593] 胸にLock up Lock up
[00:26.775] ザムザ
[00:35.508] 「鏡をご覧」誰かが囁く
[00:37.556] うまくいったら儲けものさ
[00:39.412] 甘い言葉も笑顔も通じない
[00:41.46] 走り出したらもう獣だ
[00:43.252] 月の真下をうろつきながら
[00:45.556] 考えてた 夜すがら
[00:47.412] 悪夢にどの指立てて
[00:49.524] やるべきかってね
[00:51.124] ズキズキズキ 『ズキズキズキ』
[00:53.62] ズキンズキンズキン 『ズキンズキン』
[00:55.668] ズキズキズキ 『ズキズキズキ』
[00:57.524] ズキ ズキ ズキン
[00:58.909] 変われ…
[00:59.726] ズキズキズキズキズキ
[01:02.708] 誰だって魂辛辛
[01:05.652] ズキズキズキ
[01:06.676] 痛みと怒れる人(ラングラー)を喰らったったらった
[01:10.734] だのに何故だろう今も
[01:13.422] ズキズキズキって
[01:14.638] 派手な尻尾を引き摺りゆく ザザザザ ザムザ
[01:19.054] 「現実はもういい」なんて云うなよザムザ
[01:23.086] おーいえー
[01:24.174] 『ズキズキズキ』
[01:26.734] ザザザザ ザムザ
[01:28.974] 『ズキズキズキ』
[01:32.046] 「ごめんね。ちっとも上手に
[01:33.903] 生きてあげられなくて」と伝えて
[01:35.887] 否定形の笑顔でも欲しくて
[01:37.871] ニンゲン様なりきってる亡霊
[01:40.672] 自分の弱音に相槌ばかりだった
[01:43.567] 当然あなたとまともにケンカもできなかった
[01:47.905] ズキズキズキ 『ズキズキズキ』
[01:50.145] ズキンズキンズキン 『ズキンズキン』
[01:52.129] ズキズキズキ 『ズキズキズキ』
[01:54.049] ズキ ズキ ズキン
[01:55.585] 変われそうにないやいや
[01:59.233] 冗談じゃない 夢を食べないで
[02:01.729] ズキズキズキ
[02:02.945] 小洒落た絶望を歌ったったらった
[02:06.977] どうしようもない成れの果てでも
[02:09.729] ズキズキズキって
[02:11.009] いつか愛しい歌になるさ ザザザザ ザムザ
[02:22.209] ねえ123で飛んで ザザザザ ザムザ
[02:26.177] 一切合切蹴っ飛ばして ザザザザ ザムザ
[02:30.017] あとがきで触れられもしない日々
[02:34.216] ここで逃げ出したら 本当にそうなりそうだ
[02:41.768] 誰だって魂辛辛
[02:44.52] ズキズキズキ…
[02:45.736] 痛みと怒れる人(ラングラー)を喰らったったらった
[02:49.64] だのに何故だろう今も
[02:52.392] ズキズキズキって (ズキズキ)
[02:54.12] 林檎をかじるようにザザ ザムザ
[02:57.576] どうしようもない成れの果てでもここにいる
[03:01.703] シャガの花に毒されても
[03:05.479] 光は１時の方角にある
[03:09.383] 今は尻尾を引き摺りゆけ
[03:11.943] ザザザザ ザムザ
[03:14.108] だから「現実はもういい」なんて云うなよザムザ
[03:18.012] おーけー？
[03:19.292] 『ズキズキズキ…』
[03:21.027] ザザザザザムザ
[03:22.819] 『ズキズキズキ…』
[03:25.867] 『ズキズキズキ…』
[03:28.619] ザザザザザムザ
[03:30.675] 『ズキズキ…』
[03:33.831] 『ズキ』
`
    },
    {
        chapter: 3,
        title: 'キャットラビング', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'APR 2025', ytId: '8HW6tgNMGj8', start: 0,
    },
    {
        chapter: 3,
        title: 'キテイ', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'APR 2025', ytId: 'l-OtSO4dsLM', start: 0,
        lyrics: `[00:04.84]味気の無い夜に熔けた雪が、
[00:07.90]言葉を枯らすのは何故？
[00:11.26]伝わらない想いだけがこころ染めて、
[00:14.99]かなしみに溺れたような、
[00:17.44]泡沫の爆ずバラッド。
[00:18.88]
[00:31.75]日月さえも孤独な天下で、
[00:34.54]絡まって解いてを輪廻する愚者の群。
[00:37.82]まるで、一様に独りと識った反射で
[00:40.92]調和を謀る、本能の儘のキティ。

[00:44.38]嗚呼、何処にも新世界なんて無い。
[00:46.02]独りで愛し、愛されて居たい。
[00:47.81]果たして今日は凶なら昨日は如何？
[00:49.71]詰まり永遠に不幸ってこと？

[00:51.01]其れなら、如何にかしたい次第。
[00:52.82]其れでも直視なんて出来ない。
[00:54.97]また、劣等と焦燥が睨み合って居る。

[00:57.58]逃れることと、眼を逸らすこと、
[01:01.20]何方に価値が有るだろう？
[01:03.66]ただ此処で、問答・瞑想
[01:06.15]じゃあ、突立っても迷走。
[01:07.78]さあ点と点を結ぶように、

[01:10.71]確かな愛が視たいなら、音に成って今逃げ出して！
[01:16.97]偽らなくたって叫んだ旋律がひかりと化して伝うのさ。
[01:23.89]此の歌が間違いでも構わないわ。声を枯らして！
[01:30.19]掻鳴らせ、ブルウスドライバ・アンド・テレキャスタ。
[01:34.33]答えは音の中。
[01:37.44]
[01:50.27]午前一時(エーエムワンオクロック)、警鐘亂打に起こす瞼。
[01:53.51]あたしは「何がしたい」「何がしたい」
[01:54.81]「何がしたい」と逡巡の間、
[01:56.55]余計なことばかりが頭の中絡まっていた。
[02:00.06]丹精凝らしたペイパークラフトは着火剤と化した。

[02:03.37]劣等感、実感、悲観で、
[02:05.18]勝手に喰らってパッシヴィティ。
[02:06.79]演奏家皆皆で
[02:08.41]喝破する生態系？

[02:09.91]それでは、変光星から没個性で
[02:11.81]劣化する才が惜しくなってしまう。
[02:13.36]不都合等蹴飛ばして
[02:15.12]銘銘に踊れや。一、二、三、四(ワン、トゥー、スリー、フォー)。
[02:17.14]
[02:29.65]逃れることと、眼を逸らすこと、
[02:33.02]何方に価値が有るだろう？
[02:35.59]ただ此処で、問答・瞑想
[02:37.80]じゃあ、突立っても迷走。
[02:39.65]さあ点と点を結ぶように、

[02:44.57]確かな愛が視たいなら、音に成って今逃げ出して！
[02:51.15]偽らなくたって叫んだ旋律がひかりと化して伝うのさ。
[02:58.31]この歌が間違いでも構わないわ。声を枯らして！
[03:04.59]掻鳴らせ、ブルウスドライバ・アンド・テレキャスタ。
[03:08.34]答えは音の中。

[03:11.93]そして、あたしの中。`,
    },
    {
        chapter: 3,
        title: 'どんな結末がお望みだい', artist: 'ワンダーランズxショウタイム',
        context: '-', desc: '',
        date: 'MAY 2025', ytId: '3v0nx60FKFc', start: 0,
        ig: 'https://www.instagram.com/reel/DJLrZTLxcuv',
        lyrics: `
            [00:03.083] 夏の暑さも 皆の思いも
            [00:08.183] いつかは夜風に吹かれてもう
            [00:15.166] 前にしか進めないと知ったから
            [00:19.35] （綺麗な） 枯れないで おとさないで
            [00:23.616] 胸に抱いた 花束を
            [00:30.95] もしも思い出の 陰に手を伸ばしたら
            [00:36.816] まだ見ぬ景色は 遠ざかるばかりで
            [00:43.45] 迷いも戸惑いも証明だって
            [00:47.366] 今までの夢が在って
            [00:49.85] 振り返れば沢山の笑顔見せて
            [00:54.766] 手と手を繋ぎあって
            [00:57.516] 育んだ絆だけはたったひとつ
            [01:01.666] 叶えたい夢になんて 名前を付けようか
            [01:06.966] 痛みを伴うこれは夢と呼べるのかい？
            [01:12.05] 答えのない問いに縋って
            [01:14.516] 季節が移りゆくようで
            [01:16.933] 天地自然の理だと心に言い聞かせ
            [01:21.716] "どんな結末がお望みだい？"
            [01:26.70] このふたつの思いは共存出来ないものか
            [01:35.066] もしも 花束 に 費 を つけて しまったら
            [01:40.833] これまで積み上げたものはガラクタで
            [01:48.25] 願いも愛情も本当だって
            [01:51.80] 今までの夢を抱いて
            [01:54.133] 振り返ればたくさんの感謝に満ちて
            [01:59.233] 目と目で向かい合って
            [02:01.883] 育んだ絆だけはたったひとつ
            [02:06.233] 叶えたい夢になんて 名前を付けようか
            [02:11.25] 別れが伴うこれを夢と呼べるのかい？
            [02:16.533] 早々に行き詰まって 奇跡頼り 弱音吐いて
            [02:21.466] 天地自然の理には心も抗えず
            [02:26.65] "どんな結末がお望みだい？"
            [02:54.15] 叶えたい夢になんて 名前を付けようか
            [02:59.25] 痛みを乗り越えた先でなら笑えるかい？
            [03:04.266] 答えのない問いに背いて 季節はまた巡るようで
            [03:09.316] 天地自然の理すら覆す絆だと
            [03:14.383] きっと 結末は 幸せだ
`
    },
    {
        chapter: 3,
        title: 'Bad Apple!! feat.SEKAI', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'MAY 2025', ytId: 'v-fc1zv31zE', start: 0,
        lyrics: `[00:15.65] Bad Apple!! feat.SEKAI 25時、ナイトコードで。 × 初音ミク
[00:19.25] 作詞：Haruka 作曲：ZUN（上海アリス幻樂団） 編曲：ビートまりお×まろん、まらしぃ、Masayoshi Minoshima
[00:22.50] 翻译来自PJS字幕组 如需转载翻译请保留译者及出处 翻译：MOwIU 校对：PJS字幕组
[00:29.42] 哪怕身处不断流逝的时间之中
[00:32.969] 倦怠感也一直在这身体中循环往复
[00:36.45] 从我体内剥离而出的心 也已彻底消失
[00:41.20] 对啊 你不懂吗？
[00:43.42] 我已不再自己做出任何行动
[00:46.85] 只在时间缝隙中 不断随波逐流
[00:50.34] 周围的事情 全都与我无关了
[00:53.88] 我就是我
[00:55.649] 我就是我 仅
[00:56.10] 我就是我 仅此
[00:56.60] 我就是我 仅此而
[00:57.00] 我就是我 仅此而已
[00:57.50] 都在做梦吗？
[00:58.619] 什么都看不见吗？
[01:00.45] 我讲出的话 怎么说了也没人听？
[01:03.929] 悲伤什么的 只会叫人疲惫啊
[01:07.37] 什么都别感受 得过且过就好
[01:10.789] 即使被人说了什么流言蜚语
[01:14.34] 我这颗心 也毫不在意
[01:17.71] 如果要由我自己 做出行动的话
[01:21.25] 要是能改变这一切 就让黑降临
[01:24.73] 这样的自己 还有未来可言吗？
[01:28.28] 这样的世界 能有我的容身之处吗？
[01:31.76] 我在难过吗？
[01:33.469] 我在悲伤吗？
[01:35.20] 连自身的想法 都还一无所知
[01:38.68] 连向前迈步 都只会徒增疲惫
[01:42.049] 其他人的事情 我没一点兴趣啊
[01:45.59] 如果连这样的我 都能改变的话
[01:49.14] 如果能改变的话 要化作白吗？
[02:06.959] 哪怕身处不断流逝的时间之中
[02:10.439] 倦怠感也一直在这身体中循环往复
[02:13.93] 从我体内剥离而出的心 也已彻底消失
[02:18.62] 对啊你不懂吗？
[02:20.84] 我已不再自己做出任何行动
[02:24.34] 只在时间缝隙中 不断随波逐流
[02:27.77] 周围的事情 全都与我无关
[02:31.25] 我就是我
[02:33.00] 我就是我 仅
[02:33.50] 我就是我 仅此
[02:34.00] 我就是我 仅此而
[02:34.40] 我就是我 仅此而已
[02:34.90] 都在做梦吗？
[02:36.05] 什么都看不见吗？
[02:37.87] 我讲出的话 怎么说了也没人听？
[02:41.31] 悲伤什么的 只会叫人疲惫啊
[02:44.74] 什么都别感受 得过且过就好
[02:48.28] 即使被人说了什么流言蜚语
[02:51.71] 我这颗心 也毫不在意
[02:55.189] 如果要我自己行动的话
[02:58.62] 要是能改变这一切 就让黑降临
[03:02.159] 要是我能动起来
[03:03.93] 要是我能挣脱束缚
[03:05.65] 就去把一切破坏
[03:07.37] 就去毁掉这一切
[03:09.129] 要是感到悲伤
[03:10.84] 要是泪流不止
[03:12.62] 我的这颗心 就能化作白吗？
[03:16.11] 你的事情也好
[03:17.81] 我的点滴也罢
[03:19.59] 世上的这些事物
[03:21.25] 我还尚未知晓
[03:23.069] 若能掀开 这沉重的眼睑
[03:26.40] 若能毁灭掉这一切
[03:28.62] 就全部陷入黑暗吧！！！
[03:32.00] Bad Apple!! feat.SEKAI 25時、ナイトコードで。 × 初音ミク
[03:37.00] 作詞：Haruka 作曲：ZUN（上海アリス幻樂団） 編曲：ビートまりお×まろん、まらしぃ、Masayoshi Minoshima
[03:42.00] 翻译来自PJS字幕组 如需转载翻译请保留译者及出处 翻译：MOwIU 校对：PJS字幕组
        `
    },
    {
        chapter: 3,
        title: '私は雨', artist: '25時、ナイトコードで。',
        context: 'Game - Hatsune Miku: Colourful Stage!', desc: '',
        date: 'MAY 2024', ytId: '91E_W8JhSjs', start: 0,
        lyrics: `[00:05.865] 私は誰
[00:08.745] あなたの哀れ
[00:12.068] 夜空の中で 名前を無くして
[00:19.40] うねりのない
[00:21.267] 水面に潜む景色を
[00:26.003] 知らないまま (霧になってしまっても)
[00:29.139] 漂う雲 (別にいいのに)
[00:32.851] 昨日までは (構わないのに)
[00:36.243] 漂う雲
[00:40.979] 私はなぜ 真っ直ぐに落ちる
[00:46.611] だれかの手のひらを探すため
[00:49.875] 空をできる限り 目に収めながら
[00:54.227] 私は雨 (雨 雨 雨)
[00:56.46] 弾かれて判る
[00:57.95] だれか (だれ だれ) のようには
[01:00.173] なれない雨 (雨 雨 雨)
[01:03.319] 地球を困らせる
[01:05.495] ほどの痛みを 知らないから
[01:08.247] 私は雨
[01:10.05] セカイを暈す 夜明け (夜明 夜明)
[01:13.314] に導かれている雨 (雨 雨 雨)
[01:16.386] 流れ着いた海の
[01:18.754] 隠し味を知るまで
[01:33.73] 星を隠した雷鳴と
[01:37.058] 視界からはみ出した積乱雲
[01:39.618] できるだけ できるだけ
[01:41.986] できるだけ 離れていたかった
[01:46.274] 傘をさす 余裕はないし
[01:49.154] このままでも いいと思えるよ
[01:52.994] わからないから 染み込んでるの
[01:56.386] 夜の強い雨で 目を覚ます
[01:59.458] 私は雨 地球をなぞる
[02:04.258] 一粒では 気付くこと のない雨
[02:08.508] 夜空に飾り付ける 星を見つけて
[02:13.00] 空に浮かんだり 地に足をつけたり
[02:16.392] 消えかかったり 溢れかえったりする
[02:20.04] 描けていたら 何も起きなかった
[02:23.24] セカイ的気候変動
[02:29.15] 私は雨 (雨 雨 雨)
[02:31.624] 滴って判る
[02:33.438] だれか (だれ だれ) のようには
[02:36.07] なれない雨 (雨 雨 雨)
[02:38.054] 地球を困らせる
[02:40.23] ほどの思いを 知りたいから
[02:43.11] 私は雨
[02:45.222] セカイを暈す 夜明け (夜明 夜明)
[02:47.782] に 導かれている雨 (雨 雨 雨)
[02:51.11] 流れ着いた海の
[02:53.606] 隠し味になるまで
[03:02.80] 私は雨
[03:23.05] 辿り着くまでに
[03:25.725] おさらいを忘れないで
[03:28.733] 凪の海で向かい合わせ
[03:31.805] 違う景色 同じ模様の
[03:35.466] 答え合わせ
        `
    },
    {
        chapter: 3,
        title: 'ハローセカイ', artist: 'DECO*27',
        context: 'WASABISOCUTE Theme', desc: '',
        date: 'JUN 2025', ytId: 'lBTwitkjMd4', start: 0,
        ig: 'https://www.instagram.com/reel/DZAkwnehpYn/',
        lyrics: `
            [00:01.602] きっと届くはず きっと見えるはず
            [00:10.818] そんな会ってみたい未来を 僕はひとりきりのセカイで
            [00:16.568] ずっとそう歌うたっていた
            [00:29.213] 今聞こえたよ ほら少しだけ
            [00:35.218] 君を感じたよ メロディーがリンクする
            [00:42.203] 今繋がるよ 今重なるよ
            [00:48.034] 伝えたかったこと 山ほどあるんだけどどうしよう
            [00:58.956] 見たこともない顔で 君は君をダメと言うけど
            [01:04.174] 未来にいる理想の君を 今の君に押し付け過ぎないで
            [01:11.771] 見たこともない景色 見せ合ういつかが来るまで
            [01:16.923] つらいこと 泣きたくなること たまには預け合おう
            [01:23.104] ハロー、セカイ 僕の声はちゃんと届いてるかい
            [01:29.609] 思ったよりも大丈夫 君はひとりなんかじゃない
            [01:35.717] ハロー、セカイ 君の声もちゃんと届いてるよ
            [01:42.285] 思ったよりも最高だ 僕もひとりなんかじゃない
            [01:48.168] 行くよジャンプ 跳ねるダンス
            [01:51.398] いらない不安なんて踏んじゃってこう
            [01:54.875] ああでもこうでもないも そんなのどうでもいいよ
            [01:58.072] やりたいようにやろう ハローハロー
            [02:00.86] もう一回ジャンプ 回るダンス
            [02:03.989] 行きたい未来 きっともうすぐだよ
            [02:07.596] ああでもこうでもないも そんなのどうでもいいよ
            [02:10.727] やりたいようにやろう
            [02:13.912] 飛び込んでいこう 僕らのセカイが
            [02:16.923] 正解か不正解かわからなくても
            [02:19.803] 僕にある想いも 君にある願いも
            [02:22.656] きっと消えないんだよ ずっとセカイは終わらないよ
            [02:26.714] 今繋がるよ 今重なるよ
            [02:32.955] ほら聞こえるよ ほら伝わるよ僕ら
            `
    },
    {
        chapter: 3,
        title: 'D/N/A', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'JUN 2025', ytId: 'qYCs_I8VQdM', start: 0,
        ig: 'https://www.instagram.com/reel/DKgaRGWx-Ct',
        lyrics: `
            [00:13.91] 小石を高く高く 積み上げては
            [00:17.32] 吹きさらす心は 夕暮れ
            [00:20.339] いつか見つかると まだ見つかると
            [00:23.67] 白く 甘く 淡く
            [00:26.71] 影踏み遊びばかりしてきました
            [00:30.14] 贖い足がかり 探して
            [00:33.119] いつか見つけると まだ見つけると
            [00:36.429] 永く 脆く 遠く
            [00:40.149] 鏡越し貴方と
            [00:43.25] 瞳の奥の私と
            [00:47.71] 誰かの 中の 貴方は
            [00:50.92] 欠片のままに 夢を見る
            [00:54.13] だって D/N/Aじゃ 騙れない
            [00:57.24] この心は私の中 紅く
            [01:03.71] 紅く
            [01:06.29] 眠れない迷子の無いものねだりじゃない
            [01:10.109] この細胞は愛憎 刻まれてる
            [01:13.31] まだ見つけるの まだ見つけるの
            [01:16.51] 言えなかった音は？
            [01:19.709] 誰かの 中の 貴方は
            [01:22.84] 繋がれたまま 夢を見る
            [01:26.129] だって D/N/Aじゃ 語れない
            [01:29.319] この痛みも私の中 紅く
            [01:35.68] 紅く
            [01:39.14] 鏡の 形と
            [01:42.219] 逆さまな D/N/A
            [01:45.51] 私の 証と
            [01:48.719] 暖かな D/N/A
            [01:51.939] 鏡の 形と
            [01:55.069] 逆さまな D/N/A
            [01:58.29] 私の 証と
            [02:01.53] 暖かな D/N/A
`
    },
    {
        chapter: 3,
        title: 'バグ', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'JUN 2025', ytId: '2Ii7UBMxWVw', start: 0,
        ig: '',
        lyrics: `
        [00:14.25] 迷子 迷子 真っ只中 さあ
[00:16.80] パ パ パ ラ パーラノーイ「ア」
[00:19.399] ギコ ギコ MY HEART(マイココロ)剪定
[00:22.00] パ パ パ ラ パーラノーイ「ア」
[00:24.60] 退路 退路 断った絡まった
[00:27.10] パ パ パ ラ パーラノーイ「ア」
[00:29.699] SAD SAD 突っ伏して「 」(カラ)
[00:32.299] ぱ ぱ ぱ La ぱーらのーい「ド」
[00:34.50] さあ バ バ バグさ バグバグ
[00:37.46] タ タ タグ 才能のタグ
[00:39.70] もう ハ ハ 剥グ 感情は剥グ
[00:42.299] 発症「クルシイ」は 嫌 嫌 嫌 嫌 嫌 嫌
[00:46.20] まあ！絶叫な感情落下パッパラノーイ「ア」
[00:48.939] 溺れ声上げては ぐるぐる
[00:51.299] まあ！絶体絶命 落下 やったラ滅多ラ
[00:54.039] 沈めユメユメ 嫌 嫌 嫌
[00:56.399] さあ バ バ バグさ バグバグ
[00:59.20] 的(まと)ハズレズレ 慈愛嫌嫌
[01:01.50] さあ バ バ バグさ バグバグ
[01:04.439] 解答(こたえ) 絶え絶え 嫌 嫌 嫌 嫌 嫌 嫌
[01:19.40] 狂狂(くるくる) ぱっかーん警報 待って無理
[01:21.90] ぐるぐる せーので回れ 狂(くる) 狂(くる) 狂(くる) 狂(くる)
[01:24.799] ｱｱｱｱ ぱっかーん警報 やっぱ無理
[01:27.099] ぐるぐる あんよに鎖 狂(くる) 狂(くる) 狂(くる) 狂(くる)
[01:30.299] エンドレス病み……？
[01:32.959] 抱っこ 抱っこ いらない子だ
[01:35.50] パ パ パラ パーラノーイ「ア」
[01:38.099] いい子 いい子 「頑張れ」の氾濫
[01:40.70] アドミニストレイター 嗚呼
[01:43.299] バ バ バグさ バグバグ
[01:45.84] ラ ラ ラグ ランタイムラグ
[01:48.40] ロ ロ ログ 反抗のログ
[01:50.959] バ バ バグ ぱぱぱLaぱ ぱ
[01:53.64] パーラノーイ「ア」
[01:54.64] ぱ パーラノーイ「ア」
[01:56.00] ぱ パーラノーイ「ア」 嫌 嫌
[01:58.299] さあ 絶叫な感情落下パッパラノーイ「ア」
[02:01.20] 左 右 行方も ぐるぐる
[02:03.40] 悲惨 限界 脳 狂っちゃって やったラ滅多ラ
[02:06.299] ヤミ迷え酔え イナイイナイばあ
[02:08.90] イナイイナイ✕点
[02:10.34] 絶叫な感情落下パッパラノーイ「ア」
[02:12.80] 溺れ声上げては ぐるぐる
[02:15.06] まあ！絶体絶命 落下 やったラ滅多ラ
[02:17.90] 凍え枯れ果て 嫌 嫌 嫌
[02:20.30] さあ バ バ バグさ バグバグ
[02:23.099] 爛れ荒れ荒れ 悲哀 嫌 嫌
[02:25.46] さあ バ バ バグさ バグバグ
[02:28.259] 暗闇(クロ)マミレ理性 嫌 嫌 嫌
[02:30.80] 今 今 今 嫌 嫌 嫌 嫌 嫌 嫌 嫌 嫌 嫌

`
    },
    {
        chapter: 3,
        title: 'FOCUS', artist: 'KIRA',
        context: '', desc: '',
        date: 'JUN 2025', ytId: 'aF4N-qSHbT4', start: 0,
        lyrics: `[00:09.62]Can I get it get it
[00:10.93]Get all your attention
[00:12.03]I bet you don’t know me yet
[00:13.77]君の奥底まで
[00:15.56]穿つ目線で
[00:17.10]溢れる様 IQ ammo
[00:19.10]獲る天下
[00:20.30]A catalyst, I know. When I say go, put your hands up

[00:23.04]混沌の最中に
[00:24.53]降臨した女神
[00:25.96]I freeze it up, got it ice cold on my body
[00:29.06]You wanna know but you don’t
[00:30.25]震撼させる異脳
[00:31.95]I’mma go, I’mma shine, shine, shine, shine

[00:34.63]Can’t stop 煌めく my fantasy
[00:38.13]Now you see
[00:39.66]星空を呑む
[00:41.01]染まるんだ私色に

[00:43.94]Hidden deep within my universe
[00:47.13]Come find me now
[00:49.01]Hear the voice that’s calling out
[00:51.93]まだ見ぬ世界の真髄を見せてあげるから
[00:55.79]Baby, for now

[00:56.82]Calm down, lemme focus
[00:59.16]Under my spell like hypnosis
[01:02.10]So don’t get too close when I’m
[01:03.61](Come-a, come-a, comin through)
[01:05.35]You wanna roll with me?
[01:06.63](Come-a, come-a, comin through)
[01:08.34]We take ‘em down

[01:09.50]Yes, I tell you what to do
[01:11.16]I got nothing to prove
[01:12.60]Cold when I move, when I move
[01:14.17]When I focus
[01:15.39]I tell you what to do
[01:16.77]脳髄まで bulletproof
[01:18.27]Cold when I do what I do
[01:19.70]When I focus

[01:21.07]On me
[01:22.15]Back at my best, I finesse
[01:23.50]私の脳裏に潜む
[01:25.24]怪物は no secret
[01:26.81]冷静に cool, my attitude
[01:29.07]Uh-uh, target in my sight
[01:30.94]Locked in, ready to shoot, like

[01:32.99]Mayday, this is an emergency
[01:35.00]Working under pressure
[01:36.03]Baby, I can do this in my sleep
[01:37.75]世の理だって
[01:39.16]書き換えて
[01:40.15]しまう様な頭脳
[01:41.10]When I go, when I go
[01:42.59]I’mma shine, shine, shine, shine

[01:44.49]Won’t stop 煌めく my fantasy
[01:47.99]Now you see
[01:49.44]銀河を覆う
[01:50.79]音色をそう、轟かす様に

[01:53.77]Hidden deep within my universe
[01:56.96]Come find me now
[01:58.83]Clear my mind of all these doubts
[02:01.81]まだ見ぬ世界の真髄
[02:03.93]この目で見たいから
[02:05.59]Baby, for now

[02:06.57]Calm down, lemme focus
[02:09.15]Under my spell like hypnosis
[02:11.88]So don’t get too close when I’m
[02:13.50](Come-a, come-a, comin through)
[02:15.19]You wanna roll with me?
[02:16.72](Come-a, come-a, comin through)
[02:18.11]We take ‘em down

[02:19.26]Yes, I tell you what to do
[02:20.57]I got nothing to prove
[02:22.63]Cold when I move, when I move
[02:24.01]When I focus
[02:25.27]I tell you what to do
[02:26.67]脳髄まで bulletproof
[02:28.09]Cold when I do what I do
[02:30.15]When I focus

[02:30.96]O-ma, O-ma, O-ma, O-ma, Ohh
[02:33.70]垂れろ頭 don’t break my focus
[02:36.88]O-ma, O-ma, O-ma, O-ma, Ohh
[02:39.46]Wanna try and play catch up?
[02:40.82]Follow my mind

[02:41.86]I’mma get you talkin bout it loud
[02:43.66]Can’t get rid of me now
[02:44.96]唯一無二 so I’m crowned
[02:46.52]Put my feet on the ground
[02:47.87]まあ掻っ攫ってくわエース
[02:49.83]Piece of cake, it’s no stress
[02:50.81]銀河中を魅了してく
[02:52.80]What’s next?
[02:53.48]Take a guess

[02:53.83]Yes, I tell you what to do
[02:55.83]I got nothing to prove
[02:57.53]Cold when I move, when I move
[02:59.05]When I focus
[03:00.10]I tell you what to do
[03:01.44]脳髄まで bulletproof
[03:02.91]Cold when I do what I do
[03:04.77]When I focus

[03:05.83]O-ma, O-ma, O-ma, O-ma, Ohh
[03:08.64]垂れろ頭 don’t break my focus
[03:11.72]O-ma, O-ma, O-ma, O-ma, Ohh
[03:14.45]Wanna try and play catch up?
[03:15.89]Follow my mind
[03:16.83](Focus)`,
    },
    {
        chapter: 3,
        title: 'Fall in Me', artist: 'memex',
        context: '', desc: '',
        date: 'JUL 2025', ytId: 'yxi0Y8UAhAM', start: 0,
        lyrics: `[00:03.41]眠りたい 忘れたい 考えたくない
[00:05.47]現実はいらない
[00:07.01]想像すらできない 期待無い
[00:08.95]もう朝はいらないよ

[00:10.54]笑えない 踊れない でも愛されたい
[00:12.47]夜だけを生きたい
[00:14.18]王子様の寵愛を頂戴
[00:15.93]でも目を覚ましたくない！

[00:19.42]相対して大概
[00:20.72]大して会いたくない再会
[00:22.58]からの後悔？そうかい？曖昧？

[00:27.05]絡まっていたい
[00:28.35]言葉になんてしたら続かない
[00:30.90]Fall in you
[00:31.80]Sweet sweet dream
[00:34.32]浸らせて ひたひたと ひらひらと
[00:38.43]Gimme your heart
[00:38.89]Sweet sweet sleep
[00:41.65]今までも これからも 眠り姫
[00:45.52]Kiss me

[00:53.19]誘いたい 誘えない 嫌われたくない
[00:55.56]深層を知りたい
[00:56.86]交渉などいらない 意味がない
[00:58.92]踊らされていたいよ

[01:00.45]奪いたい 守りたい 独り占めしたい
[01:02.58]誰にも渡さない
[01:03.92]お姫様の相愛に就きたい
[01:05.76]でも目を覚ましはしない

[01:09.23]再会して望外
[01:10.45]天にも昇りそうな落雷
[01:11.97]それは正解？最愛？絶対？

[01:16.62]切り取っていたい
[01:17.92]この瞬間を その微笑みを

[01:20.50]Fall in you

[01:27.60]わかっていた
[01:28.79]はじめからもう
[01:29.78]この先に何も残らないと

[01:31.58]私に未来、期待はもう痛い
[01:33.46]夢の中に溺れていく

[01:35.72]Sweet sweet dream...

[01:45.36]ねぇ こころのすべて 空になるまで
[01:48.81]Fall in me
[01:49.92]Sweet sweet dream
[01:52.00]連れてって どこまでも 甘い夢
[01:56.45]Gimme your heart
[01:57.05]Sweet sweet sleep
[01:59.48]今までも これからも 眠り姫
[02:03.24]さあ 堕ちるような キスをして
[02:06.94]Love Me`,
    },
    {
        chapter: 3,
        title: '放送室', artist: '星街すいせい',
        context: '', desc: '',
        date: 'JUL 2025', ytId: 'BP59Bm6T3_I', start: 0,
        lyrics: `
            [00:03.68]考えてたことが言葉に出ない
            [00:08.25]先走った後悔と汗が手に残る
            [00:13.13]ただまっすぐに見ていたいだけなのに
            [00:17.92]今日も見切りをつけた
            [00:20.17]部屋を真っ暗にしてしまった
            [00:23.08]赤や青 点滅している
            [00:28.12]この部屋が宇宙の大船団
            [00:33.02]私から出た SOS だけ届いてないよな
            [00:42.05]涙はずっとしまってる
            [00:44.60]どんな結末があるかを見たくて
            [00:48.63]完成するまで悲しみを拒んでいる
            [00:52.89]不安を感じて痛むのが
            [00:55.43]身体のどこか知らないけど
            [00:57.87]こんな場所でまで気張り続けていく
            [01:01.82]理由を見つけたんだ
            [01:06.14]
            [01:13.44]省みない
            [01:15.41]呼吸も挙動も
            [01:17.95]不安定な形も完璧に見える時も
            [01:22.24]今更後ろは見ない
            [01:24.73]振り向くのは怖い
            [01:28.36]この場所だけは私のことを知っているんだ
            [01:32.85]手を引いて向かう場所を示すのだ
            [01:37.69]そう思えば強く輝けるから
            [01:42.68]届いてほしいのは SOS じゃなくて
            [01:46.93]優しい言葉
            [01:51.90]涙をずっとしまっても
            [01:54.74]笑顔のままでいる姿で駆け抜け
            [01:57.29]君の元まで最短で辿り着くよ
            [02:02.07]孤独を感じて痛むのが
            [02:04.17]身体のどこか知らないけど
            [02:06.65]ほんの少しでも君に近づきたい
            [02:10.67]何かが変わればいい
            [02:16.47]
            [02:22.31]私から出た優しい言葉だけ君に届いてほしい
            [02:32.29]小さな宇宙に生まれただけ
            [02:36.77]遠い場所から君を見つけただけ
            [02:43.86]涙をずっとしまってる
            [02:46.50]どんな結末になるかを知りたくて
            [02:50.56]完成するまでさよならは拒んでいる
            [02:53.90]不安を感じて痛むのが
            [02:56.39]身体のどこか知らないまま
            [02:58.86]こんな場所でまだ気張り続けていく
            [03:02.88]理由は見つけたんだ`
    },
    {
        chapter: 3,
        title: 'セカイ', artist: 'DECO*27',
        context: '', desc: '',
        date: 'JUL 2025', ytId: '9vyIPWBeRes', start: 0,
        lyrics: `[00:12.52] ずっと探してたんだよ
[00:15.46] 特別だって言える場所
[00:19.88] なんで僕を選んだの
[00:22.68] 笑うキミが手を引いたんだ
[00:27.06] だってキミはすごいから
[00:30.04] 負けらんないなって思うんだよ
[00:33.76] どんな時も僕の中に
[00:37.06] キミの声が鳴り響いていた
[00:40.42] 怖いんだ
[00:41.88] なにもない僕だけどできるかな
[00:44.66] 自信のなさとしょうもなさでいい勝負さ
[00:48.18] けどキミは「それがどうしたの？」って顔をして
[00:51.64] 歌を歌うじゃない
[00:53.64] それはズルいじゃない？
[00:55.64] 飛び込んでいこう 僕らのセカイへ
[00:59.12] 正解の想いに出会えるかな
[01:02.74] 歌っていたい 踊っていたい
[01:06.52] 痛いくらい笑えるように
[01:10.20] 名前もない 僕らのセカイを
[01:13.70] 迷っていけるよ キミとだから
[01:17.34] 変わっていこう 願うように
[01:20.84] 今僕ら 期待の未体験を
[01:25.12] キミの未来を僕が歌うよ 描いてもっと Yeah
[01:28.60] 泣いてもいいじゃん それも答えだ
[01:30.64] どうしたっていいよ
[01:32.30] 想いは全部零さぬように抱き締めながら
[01:35.94] キミと見たいセカイへ
[01:44.54] ずっと探してたんだよ
[01:47.60] 特別だって言える場所
[01:51.64] どんな僕になるんだろう
[01:54.78] 躍るココロ変えないように
[01:59.06] ちょっとだけのその先で
[02:02.52] また笑えるよ
[02:06.42] もらったバトンは勇気に
[02:09.06] ありがとうは歌声に
[02:12.38] 気付いたんだ
[02:13.90] 僕にしか出来ないこともあること
[02:16.64] 誰かのとこへ ちゃんと歌を届けたいのさ
[02:20.32] ほら怖くて震える手でビート刻めば
[02:23.90] 夢も近いじゃない？
[02:25.76] 僕らひとりじゃない
[02:28.06] 飛び込んでいこう 僕らのセカイへ
[02:31.52] 正解の想いに出会えるかな
[02:34.84] 歌っていたい 踊っていたい
[02:38.28] 痛いくらい笑えるように
[02:42.44] 名前もない 僕らのセカイを
[02:45.66] 迷っていけるよ キミとだから
[02:49.40] 変わっていこう 願うように
[02:52.90] 今僕ら 期待の未体験を
[03:10.76] 飛び込んでいこう 僕らのセカイへ
[03:14.50] 正解の想いに出会えるかな
[03:18.54] 歌っていたい 踊っていたい
[03:21.82] 痛いくらい笑えるように
[03:25.90] 名前もない 僕らのセカイを
[03:28.98] 迷っていけるよ キミとだから
[03:32.70] 変わっていこう 願うように
[03:36.16] 今僕ら 期待の未体験を
[03:40.34] キミの未来を僕が歌うよ 描いてもっと Yeah
[03:43.94] 泣いてもいいじゃん それも答えだ
[03:46.00] どうしたっていいよ
[03:47.64] 想いは全部零さぬように抱き締めながら
[03:51.20] キミと見たいセカイへ
[03:58.44] キミと見たいセカイへ

        `
    },
    {
        chapter: 3,
        title: '虚無さん', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'AUG 2025', ytId: 'miXmJVBprUs', start: 0,
        lyrics: `[00:18.449] 虚無っぽいなんかもうだめみたい
[00:22.449] もうバラバラです
[00:24.789] 空（からから）です
[00:26.859] くだんない本当もう馬鹿みたい
[00:30.82] もう虜みたい静かな世界
[00:34.939] 君の期待応えたいし
[00:37.06] 心次第に枯れちゃうし
[00:39.149] きりない焦燥と
[00:41.479] 期待で痛くなる未来
[00:43.329] 孤独に囚われちゃうし
[00:45.289] トラウマが脳支配しちゃうし
[00:47.429] 最低な日々だ
[00:51.479] 痛い
[00:52.20] バイオレンス バイオレンス
[00:53.77] 何も分かんない 分かんないよ
[00:55.859] 難解愛をロスト 愛をロスト
[00:57.939] 愛して 愛して
[01:00.52] アイロニー アイロニー
[01:02.079] クラクラする毎日だ
[01:04.18] 脳内エンドレス エンドレス
[01:06.29] 討論やめてくれよもう
[01:22.95] 何も期待しないで居たいし
[01:25.079] 見つからないって泣いた毎日
[01:27.129] 苦しくて暖かい
[01:29.50] あの日が夢のようで
[01:31.12] スポンジみたいなショートケーキ
[01:33.299] 悪気ない愛は痛いが平気なフリ
[01:36.43] もう疲れた
[01:39.659] ただ ただ ただ
[01:43.04] 愛してほしい 愛してほしい
[01:48.01] カラカラ乾いた 心満たして
[01:54.54] 消えたくないから
[01:57.78] くだらないな
[01:58.98] バイオレンス バイオレンス
[02:00.54] 何も分かんない 分かんないよ
[02:02.64] 難解愛をロスト 愛をロスト
[02:04.709] 愛して 愛して
[02:07.31] アイロニー アイロニー
[02:08.87] クラクラする毎日だ
[02:10.979] あーネガっては願ってるから
[02:13.259] それぞれの愛が暖かな場所がある
[02:19.189] 痛い
        `
    },
    {
        chapter: 3,
        title: 'Leave All Behind', artist: 'rider',
        context: 'Game - Phigros', desc: '',
        date: 'AUG 2025', ytId: 'FifusnsTrv4', start: 0,
        lyrics: `[00:02.19]I can feel the rain upon my skin
[00:05.18]
[00:07.10]It covers everything
[00:12.80]
[00:13.46]But it’s too late now
[00:16.66]I remember you and me
[00:21.21]
[00:59.77]I can feel the rain upon my skin
[01:03.03]
[01:04.63]It covers everything
[01:10.20]
[01:11.22]But it’s too late now
[01:14.29]I remember every scene
[01:18.77]
[01:21.27]And how careless we could be
[01:24.73]
[01:50.13]But it’s too late now
[01:52.70]I remember you and me
[01:56.96]
[02:35.83]I can feel the rain upon my skin
[02:38.84]
[02:40.70]It covers everything
[02:45.75]
[02:47.16]But it’s too late now
[02:50.43]I remember every scene
[02:54.65]
[02:56.99]And how careless we could be
[03:00.73]
[03:26.23]But it’s too late now
[03:28.73]I remember you and me
[03:33.08]
[04:04.38]But it’s too late now
[04:07.14]I remember you and me
[04:11.49]
`,
    },
    {
        chapter: 3,
        title: 'Journey with You', artist: 'Iris',
        context: 'Game - Rotaeno', desc: '',
        date: 'AUG 2025', ytId: 'xvK4tfUKgig', start: 10,
        lyrics: `[00:11.33] Oramus iter per astra
[00:14.53] Lux ta nos dirigat
[00:17.794] Ubi Promissa Terra...
[00:49.05] Decase, pouring, endless rain,
[00:52.058] Fallen, broken pearls in chains,
[00:54.042] Every day's a state of grace,
[00:55.662] Every struggle we embrace,
[00:57.818] Hope we'll find the way someday
[01:01.598] Crossing through the cosmic space,
[01:04.862] Witness clashing of all race
[01:07.038] All your steps are in a maze,
[01:08.638] All I do is follow through and pray,
[01:10.622] Hope I'm chasing all your trace
[01:13.822] Voyage to deserts and forests,
[01:20.158] Meandering rivers and torrents,
[01:26.44] To find, to find the answer to this quest,
[01:32.584] I'll journey with you till the end
[01:39.368] Oramus iter per astra
[01:42.568] Lux ta nos dirigat
[01:45.704] Ubi Promissa Terra,
[01:48.904] Ibi erit spes
[01:52.213] Oramus iter per astra
[01:55.329] Lux ta nos dirigat
[01:58.593] Ubi Promissa Terra,
[02:01.665] Ibi erit spes
[02:04.929] Oramus iter per astra
[02:08.129] Lux ta nos dirigat
[02:10.881] I'll journey with you till the end (Ibi erit spes)
`,
    },
    {
        chapter: 3,
        title: 'Intergalactic Bound', artist: 'CircusP & Yunosuke',
        context: 'FYSA School Anniversary', desc: '',
        date: 'AUG 2025', ytId: 'jsQXgDZIIrY', start: 0,
        ig: 'https://www.instagram.com/reel/DOJKuDikbD2/',
        lyrics: `
            [00:13.509] C'mon, I feel like there's something about this song
            [00:17.728] It's like we knew how it'd go all along
            [00:21.35] So put down your worries and raise your cups
            [00:24.786] There's nowhere to go but up
            [00:27.167] Let's dance!
            [00:27.986] With a rhythm from New York to Japan
            [00:31.378] Know you'll never be alone
            [00:33.672] At first glance we're miles away
            [00:36.552] But our hearts are connected
            [00:38.28] Through these soundwaves
            [00:40.556] Nothing but up, up, up (yeah)
            [00:42.824] Cut through the clouds
            [00:43.999] Nothing but up, up, up (yeah)
            [00:46.013] We're never coming down
            [00:48.008] Jump, jump without a doubt
            [00:50.836] Nothing but up, up, up (yeah)
            [00:53.128] Intergalactic bound
            [00:55.048] Whoa Oh, Whoa Oh Oh (Hey! Hey!)
            [00:59.912] Intergalactic bound
            [01:01.704] Whoa Oh, Whoa Oh Oh (Hey! Hey!)
            [01:06.696] Intergalactic bound
            [01:10.513] If you're an oldie
            [01:11.978] Or fresh on the scene (uh huh)
            [01:13.905] Come put your lights up
            [01:15.347] We'll make a wave of green (woo!)
            [01:17.283] Bridge the beginning
            [01:18.622] To us all here and now (uh huh)
            [01:21.075] Just take a deep breath
            [01:22.208] And let me hear you shout!
            [01:25.848] Let's groove with the static in the air
            [01:28.676] A breakthrough that can bring us anywhere
            [01:31.976] It's your move so take the lead
            [01:34.664] From the crowd to the stage
            [01:36.372] What sights can we see?
            [01:38.663] Nothing but up, up, up (yeah)
            [01:41.01] Cut through the clouds
            [01:42.36] Nothing but up, up, up (yeah)
            [01:44.539] We're never coming down
            [01:46.331] Jump, jump without a doubt
            [01:48.981] Nothing but up, up, up (yeah)
            [01:51.378] Intergalactic bound
            [02:21.087] A thousand little voices sing
            [02:24.068] It's a fiesta from now on
            [02:27.611] With our playthings always by our side
            [02:31.045] To help us make this song
            [02:33.646] Through the dark of the night
            [02:35.764] I know we will be alright
            [02:37.422] There's a universe of positivity
            [02:39.375] Beyond the sky
            [02:40.855] Ten thousand of the stars
            [02:42.647] They will keep on burning bright
            [02:44.311] With this light held between you and I
            [02:47.501] Nothing but up, up, up (yeah)
            [02:49.611] Cut through the clouds
            [02:50.918] Nothing but up, up, up (yeah)
            [02:53.048] We're never coming down
            [02:54.995] Jump, jump without a doubt
            [02:57.592] Nothing but up, up, up (yeah)
            [03:00.00] Intergalactic bound
            [03:01.988] Whoa Oh, Whoa Oh Oh (Hey! Hey!)
            [03:06.501] Intergalactic bound
            [03:08.805] Whoa Oh, Whoa Oh Oh (Hey! Hey!)
            [03:13.512] Intergalactic bound
`
    },
    {
        chapter: 3,
        title: 'Nod-Krai', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Nod-Krai Theme',
        date: 'AUG 2025', ytId: 'RuXa_yxZMGI', start: 0,
        lyrics: `
            [00:01.000]A luna, cara cantica
            [00:06.950]Ne me in atra dedas
            [00:13.240]Aves, ex urbe aurea
            [00:19.580]Ferte indicia mea
            [00:27.570]Aves, ferte cantam cara
            [00:33.640]Ut lugeam et fata mala
            [00:40.160]Num in immundorum terra
            [00:46.370]Clavus ille adhuc claudit pia
            [00:54.000]
            [00:58.050]Quando tandem carebimus tanta miseria?
            [01:02.830]Quom patria vastata nunc iacet sub urticis?
            [01:06.950]Ubi es, benigna domina
            [01:09.300]Cur non mittis lucem almam tuam?
            [01:11.580]Ecce, terra infelix atra
            [01:13.850]Veritas contra falsa nequit
            [01:16.270]Luna domina, quo adduces?
            [01:18.560]Pergemus quocumque adduces
            [01:20.890]Potius nox tegat lumina
            [01:23.170]Quam in falsa luce esse
            [01:26.000]
            [02:21.670]Carmen triste nos non canimus
            [02:23.870]Etsi flentes pro nostrorum malo
            [02:26.090]Sed non lacrima tollit dura
            [02:28.440]Patria somno non potest reddi
            [02:30.790]Illa vincta fuit pressa
            [02:33.110]Tecta aurea voravit flamma
            [02:35.390]Sed renascetur rursum
            [02:37.790]Redibit nos larem ducet 
            [02:41.000]
            [02:52.550](Cur) aerumnosae?
            [02:56.820](Cui) aerumnosae?
            [03:01.060]Cur lacrimosae?
            [03:04.490]Cui lacrimosae?
            [03:07.940]Luna, claras terras lustra (Assurge, o luna, etsi tantum manent dura)
            [03:12.320]Sicut aves per umbras vola (Corda nostra premunt obscura, pudorque manet)
            [03:16.930]Et unda vasta foeda purga (Sed luna ascendet, nec corda peribunt una)
            [03:21.410]Pro turba fida, spem crastinam serva (Audies fremitus undae, postea venient gaudia)
            [03:28.690]A luna nova, surgat luna pura casta
            [03:37.820]Fugio aerumnam, tecum nulla fleta
            [03:50.000]
            [04:06.150]Sub luna rursus fiet clara terra
            [04:11.000]`,
    },
    {
        chapter: 3,
        title: 'アクセラレイト', artist: 'Vivid BAD SQUAD',
        context: '', desc: '',
        date: 'SEP 2025', ytId: 'dWiv1l-0eIU', start: 0,
        lyrics: `[00:02.31] 栄冠の先まで 全開で羽ばたけ
[00:07.599] いざ行こう！
[00:08.839] 歌声響かせれば No doubt
[00:12.759] 扉は放たれた
[00:28.489] 焦燥感だって時に乗りこなして
[00:31.07] 楽しむのも悪くはないようだ
[00:33.899] 逆らわないで 足を止めないで
[00:36.719] 僅かなチャンスを 狙え！
[00:40.429] 鳴り響くサイレン
[00:43.24] 掻き消せる雷鳴を
[00:45.509] この手で呼び起こせるまでは
[00:48.359] 諦めることはしないさ
[00:50.67] 目指した未来への
[00:54.57] 道標はもう
[00:56.829] 掴んでいるんだよ
[00:58.78] 見逃さないで！
[01:01.25] 晴天
[01:01.95] だけ描いた 祈っていたんだ
[01:04.59] 加速を続け 全て乗り越えてきた
[01:08.12] 目の覚めるようなこのセカイを
[01:10.939] さぁ もっと もっと もっと もっと 拓け！
[01:13.219] 加減なんて 必要ないさ
[01:15.909] 夢もリアルも つまらなくなっちゃうから！
[01:19.439] 歌声響かせれば No doubt
[01:22.959] 扉は放たれた
[01:36.349] 掻き鳴らしてEnsemble ワンパンで
[01:39.209] 瞬きと共に過ぎたDays
[01:42.01] ここは眠らぬMaze さぁ中心へ
[01:44.819] 光と闇の間 Survival
[01:47.319] このままで終わるわけもないね
[01:50.15] 騒がしいほど速く動けるんだ
[01:52.78] 今しかないと覚悟決めたなら
[01:56.14] 躊躇う理由などないさ
[01:58.459] 届けたい想いには 夢を託すよ
[02:04.629] 溢れ出すほど
[02:06.56] 注いでも 注ぎ足りない
[02:10.319] 晴天
[02:11.15] だけ描いた 僕らがまだ
[02:14.509] 見たことのない青空が
[02:17.319] この先の遥か遠くに あると信じてるから
[02:22.439] 波乱だって 想定内だ
[02:25.08] ほら まだまだ居場所はあるだろう
[02:28.62] 歌声響かせて繋いだ居場所が！
[02:32.939] 晴天
[02:33.74] だけ描いた 祈っていたんだ
[02:36.36] 加速を続け 全て乗り越えてきた
[02:39.909] 目の覚めるようなこのセカイを
[02:42.669] さぁ もっと もっともっともっと 拓け！
[02:44.909] 加減なんて 必要ないさ
[02:47.68] 夢もリアルも つまらなくなっちゃうから！
[02:51.21] 歌声響かせれば No doubt
[02:54.729] 扉は放たれた
`,
    },
    {
        chapter: 3,
        title: 'いますぐ輪廻', artist: 'なきそ',
        context: '', desc: '',
        date: 'SEP 2025', ytId: 'nQFZ4gKdTi4', start: 0,
        lyrics: `[00:04.17]いますぐ輪廻
[00:05.21]今回も結ばれないね
[00:06.83]嘘ついたら針千本誓って
[00:08.71]絶対来世でまた会お？
[00:10.79]いますぐ輪廻
[00:11.79]今回も結ばれないね
[00:13.88]全て捨ててぽい

[00:28.88]さらば生まれ変わる
[00:30.33]あまりに人生が憂い
[00:32.46]君の指輪も白紙になって
[00:35.67]全部消えちゃっていいよ
[00:37.33]どうせ生まれ変わって
[00:38.54]巡って出会って
[00:40.00]宇宙が爆ぜてしまうまで
[00:41.63]何回も大好きになって
[00:44.79]何回も大好きになって
[00:48.21]毎回繰り返す身勝手
[00:49.88]何回も大好きになって
[00:52.04]ごめんね
[00:53.71]メタモルフォーゼ

[00:55.50]いますぐ輪廻
[00:56.54]今回も結ばれないね
[00:58.13]嘘ついたら針千本誓って
[01:00.00]絶対来世でまた会おう
[01:02.08]いますぐ輪廻
[01:03.08]今回も結ばれないね
[01:05.13]全て捨ててぽい

[01:07.79]だから生まれ変われ
[01:09.50]間違った人生は憂い
[01:11.46]君の隣は私になって
[01:14.54]運命よ跪け

[01:29.46]いますぐ輪廻
[01:30.54]今回も結ばれないね

[01:36.00]いますぐ輪廻
[01:37.00]今回は報われないね
[01:39.13]全て捨てて
[01:40.38]いますぐ死んで！
[01:41.50]ファンファーレが鳴って
[01:42.42]大正解おめでとう
[01:44.38]ようやく君は救われる
[01:46.13]来世でまた会おう
[01:47.83]いますぐ輪廻
[01:48.46]ちょっと苦しんで
[01:49.13]ツインレイなんだよ
[01:50.67]早く

[01:52.00]ねえ私と一つになろう
[01:54.63]さあ魂の浄化
[01:57.08]死への調和
[01:58.79]どうか光になって
[02:02.50]全て捨ててぽい`
    },
    {
        chapter: 3,
        title: 'PaⅢ.SENSATION', artist: 'Vivid BAD SQUAD',
        context: '', desc: '',
        date: 'SEP 2025', ytId: 'bof7UD3MJAQ', start: 0,
        lyrics: `
        [00:36.13]寂しくて眠れぬ日々も
[00:40.59]今夜辺り、さよなら出来る気がする
[00:45.19]胸の高鳴り

[00:46.60]見透かされた行方知れずの
[00:51.55]気持ち隠しても既に 遅いわ
[00:56.15]世の常

[00:57.67]今から全てで飛ばしてあげる

[01:02.99]センセーション愛想ぶらずに
[01:05.57]センセーション巻き越こすのよ
[01:08.42]センセーション どこ服く風も
[01:11.04]理解を通り越して

[01:13.70]センセーション なんて素敵な
[01:16.43]絶頂館 満ち溢れてく
[01:18.94]私が何者かも
[01:21.14]どうでも良いからほら
[01:23.77]その手で深くへ
[01:26.57]
[01:37.79]ほろ苦いのに慣れたせい
[01:41.56]だけど塗り固めた上部はそろそろ
[01:46.46]剥がれそうなの

[01:47.92]中途半端は嫌いだから
[01:52.41]混じり気のない態度で入り込みましょう

[01:58.51]センセーション 恥じる気はゼロ
[02:01.06]センセーション 侮らないで
[02:03.73]センセーション 至難の技は
[02:06.33]事実ここにあるから

[02:09.13]センセーション あえて繰り出す
[02:11.78]真骨頂 ゾクゾクするわ
[02:14.36]貴方の予想にない
[02:16.98]限度が狂う先の
[02:19.71]中毒症状
[02:22.57]
[02:43.53]誤魔化さなくても 愛しているわ

[02:48.89]センセーション 軸はぶらさず
[02:51.46]センセーション 微々たる物も
[02:54.17]センセーション 曝け出したい
[02:56.78]リスクも承知の上

[02:59.48]センセーション ここは歴史の
[03:02.20]最前線 止めてみなさい
[03:04.66]奇跡を見せてあげる
[03:07.55]新時代の幕開け

[03:10.15]センセーション 愛想ぶらずに
[03:12.78]センセーション 巻き起こすのよ
[03:15.33]センセーション どこ吹く風も
[03:18.13]理解を通り越して

[03:20.82]センセーション なんて素敵な
[03:23.87]絶頂館 満ち溢れてく
[03:26.65]私が何者かも
[03:29.33]どうでも良いからほら
[03:31.93]その手で深くへ
[03:34.53]余す事も無く
        `,
    },
    {
        chapter: 3,
        title: 'お返事まだカナ💦❓おじさん構文😁❗️', artist: '吉本おじさん',
        context: '', desc: '',
        date: 'SEP 2025', ytId: '8E8aWeY-pAc', start: 0,
    },
    {
        chapter: 3,
        title: '目撃！テト31世', artist: 'はろける · HALLO CEL',
        context: '', desc: '',
        date: 'OCT 2025', ytId: 'uWMr16O_Aso', start: 0,
        lyrics: `
            [00:06.28]君の一番 かわいいところな～んだ? (かかと?)
            [00:12.25]撃ち抜かれたり 飛び出ちゃうものな～んだ? (ハート?)
            [00:18.79]大きくなると 固くなるものな～んだ? (あー)
            [00:25.07]君が一番 ドキドキするの だ～れ～だ!
            [00:30.36]ボクのことでしょ? (違うがー?)
            [00:33.57]Party, party, party, party
            [00:35.35]Today is the 31st
            [00:36.77]Pumpkin, pumpkin, pumpkin, pumpkin
            [00:38.28]Teto is 31
            [00:39.80]Zombie, zombie, zombie, zombie
            [00:41.42]Today is the 31st
            [00:42.60]英語じゃ何言ってっか わかんない!!
            [00:45.55]Party, party, party, party
            [00:47.34]無責任だけど!
            [00:48.71]Pumpkin, pumpkin, pumpkin, pumpkin
            [00:50.36]奪ったげるわ
            [00:51.62]Zombie, zombie, zombie, zombie
            [00:53.23]痛くしないから
            [00:54.65]初めて ボクが奪ったげるわ
            [00:59.53]よいこのみんなへ
            [01:01.05]今からボクは お前らの をいただきに参上します!
            [01:05.34]From テト31世
            [01:08.35]P.S. ちなみに僕は～
            [01:11.35]名画も秘宝も 絶～っ対奪ったりなんてしないんだからね?
            [01:15.28]ほ 本当だよ? あ あと最後に一言
            [01:19.36]ういちゃんにどうしても伝えたいことがあるんだ
            [01:22.81]おかしなこといってもいい?
            [01:24.64]ボクとけっこんしてくれ!
            [01:25.92]おまえと けっこんするワケないんだがー?
            [01:29.08](ぬああ!)
            [01:31.83]Party, party, party, party
            [01:33.70]Today is the 31st
            [01:35.20]Pumpkin, pumpkin, pumpkin, pumpkin
            [01:36.69]Teto is 31
            [01:37.96]Zombie, zombie, zombie, zombie
            [01:39.71]Today is the 31st
            [01:41.13](Candy, candy, cookie, cookie)
            [01:42.71]チョコレート!
            [01:44.22]Party, party, party, party
            [01:45.54]無責任なのは
            [01:46.96]Pumpkin, pumpkin, pumpkin, pumpkin
            [01:48.53]ボクじゃないわ
            [01:50.07]Zombie, zombie, zombie, zombie
            [01:51.50]勘違いしないで
            [01:53.08]キミたち～? ボクが奪ったげるわ
            [01:58.04]
            [02:05.07]捕まえられるものなら
            [02:08.17]られるものなら
            [02:09.65]られるものなら
            [02:11.17]捕まえてみろよ!`
    },
    {
        chapter: 3,
        title: 'DAYBREAK FRONTLINE', artist: 'Vivid BAD SQUAD',
        context: '', desc: '',
        date: 'OCT 2025', ytId: 'LTNhnSYd5CU', start: 0,
        lyrics: `
        [00:42.38]「眠れないんだ」 風もなく茹だりそうな夜に
[00:45.94]君の声が耳元で揺らいだ
[00:48.75]感傷に浸ってばっか何も変わらない笑えない日々を
[00:52.98]抜け出そうぜ君を連れ飛び出した

[00:56.33]風が通り過ぎた
[00:58.30]闇と混ざり合った
[00:59.90]君の笑い声が
[01:01.81]小さく藍の空に響いて

[01:04.05]そんなんで生きていけんのかもう戻れないぜ
[01:06.99]なんて揺らぎそうな想いはアクセルへ
[01:09.02]このまま地平線を追い越してやるんだ

[01:11.03]最前線飛ばせ僕たちは
[01:12.56]星もない夜 ただ東を目指して行く
[01:15.93]13秒先もわかんなくたって

[01:17.98]精一杯僕を生きていく
[01:19.67]何も後悔なんてないさ前を向け
[01:23.00]止まらないさきっと光の待つ方へ
[01:30.99]
[01:39.41]暗闇に落ちた先の見えないような道も
[01:42.45]辿り着いたら闇なんてなかった きっと
[01:46.25]僕は僕を信じ切っちゃいないからいっそ
[01:49.92]あの向こうへ未だ見ぬ夜明けを信じ歩いた

[01:53.47]追い抜いた 走った
[01:54.60]期待した 転んだ迷った わかんなくなってでも
[01:57.04]just feel alive fear or light
[01:58.88]まだ僕らは歩いていく

[02:00.52]こんなんじゃいつまで経っても
[02:01.89]何処にも行けやしないさ
[02:03.68]なんて拭えない想いもアクセルへ
[02:05.42]どうせ止まれるはずないさ

[02:07.27]夜に腐っていたって僕たちは
[02:14.70]間違いなく明日に向かっていく
[02:22.55]
[02:36.07]最前線飛ばせ僕たちは
[02:37.83]白みだした星空胸を鳴らしている
[02:41.25]眠らないよう上がるミュージックと

[02:43.06]ぬるくなった水だけ持っていく
[02:44.83]無駄ものは何もないさ前を向け
[02:48.24]その方がきっと笑えるさって

[02:50.31]最前線飛ばせ僕たちは
[02:51.96]昇る太陽その光を目指していく
[02:55.28]幸せって今はわかんなくたって

[02:57.32]精一杯僕を生きていく
[02:59.03]何も後悔なんてないさ前を向け
[03:02.48]終わらないさ一生僕らは生きて往け
        `,
    },
    {
        chapter: 3,
        title: 'STAGE OF SEKAI', artist: 'Leo/need',
        context: 'Foon Yew Archive', desc: 'UEC 2025',
        date: 'NOV 2025', ytId: 'Sloi-L5FHBY', start: 0,
        lyrics: `
            [00:02.01]君が輝ける場所はここだよ
            [00:06.19]未来の自分を 忘れないで
            [00:09.30]きっと出来るから
            [00:13.22]
            [00:25.91]泣き虫が泣かなくなった帰り道
            [00:30.14]誰から見ても君は強くなってひとりぼっち
            [00:35.90]そんなことばかりあったから腑に落ちて
            [00:40.69]日に日につまらないことが増えて
            [00:43.92]たぶん 慣れちゃった
            [00:44.12]
            [00:45.89]今の自分を歌にして歌えるほど強くないね
            [00:50.84]だけど それを知っている 声が歌うから
            [00:51.04]
            [00:56.89]君が輝ける場所はここだよ
            [01:00.90]悔しい涙 憶えたてのリズムとメロディー
            [01:06.58]一人の世界で生まれた歌は
            [01:11.75]ここにあるって 見つけてって ずっと待っている
            [01:17.92]
            [01:21.07]暑くなって寒くなった時間の階段に
            [01:25.63]これからどうなるんだろうってばかりの頭の中
            [01:31.44]笑ってみた鏡の前でまたひとりぼっち
            [01:35.75]大切だって想いが溢れていた くしゃくしゃの顔
            [01:35.83]
            [01:40.96]広く深く高く自由な音のステージへ
            [01:46.02]飛び上がる前に怖くなっちゃったけど
            [01:50.97]そんな自分を歌うこと君は出来るさ大丈夫
            [01:55.84]でもね 不安になったこと忘れないで さあ
            [01:56.07]
            [02:01.92]光り輝いたこの世界から
            [02:05.96]誰のために届けるんだリズムとメロディー
            [02:11.95]今はまだ震えた指先をぎゅっと
            [02:16.49]握ってみようよ 怖いと知った 歌は強いはずさ
            [02:22.55]
            [02:31.54]君を信じられる それは君だけだよ
            [02:36.30]鏡の前で笑ってた 違うね 泣いてた君だから
            [02:41.47]そんなこと分かってた だめな自分も知っている
            [02:46.45]だから歌いたいこと 胸を締め付けていた言葉を
            [02:46.59]
            [02:54.69]特別な今がここにはあるよ
            [02:59.02]目を凝らしていて 隠さないで 君の場所だよ
            [03:04.87]今ほら大好きなステージの上
            [03:09.18]駆け上がろうよ みんな一緒 この世界なら
            [03:15.70]
            [03:18.55]君が輝ける場所はここだよ
            [03:23.14]未来の自分はここにいる 君という未来に
            [03:28.67]全力 全力で歌を届けよう
            [03:33.25]世界中にずっと 自分にずっと 歌を届けよう
            [03:41.03]君に届けよう`
    },
    {
        chapter: 3,
        title: '抜錨', artist: 'Leo/need',
        context: '', desc: '',
        date: 'NOV 2025', ytId: 'h-MnZzmtW58', start: 0,
        lyrics: `
            [00:15.16]忘れられぬものだけが 美しくはないのでしょう
            [00:18.67]忘れることばかりが 美しくはないでしょう
            [00:22.08]悲しいことばかりが 人生ではないのでしょう
            [00:25.52]さりとて喜びとは 比べ往くでしょう
            [00:28.59]
            [00:28.96]船よ 船よ 荒波の中で
            [00:32.75]流されずいられたでしょう
            [00:35.56]水底に根差す あなたと穿うが った少女時代
            [00:40.92]さよならする頃 強いられるのは抜錨
            [00:46.09]
            [00:46.24]傷の数を数えて 痛みの数 指を折る
            [00:49.62]一つあまり 小指は 愛しさのぶんね
            [00:53.04]辛いこともありましょう あなたの所為もありましょう
            [00:56.48]それでも赤い糸 結(ゆわ)えているのでしょう
            [01:01.64]
            [01:13.58]底知れぬものだけに 怯えるのではないでしょう
            [01:17.03]届かぬものばかりが 妬ましくはないでしょう
            [01:20.44]優しいことばかりが 優しさではないのでしょう
            [01:23.91]さりとて赤裸々では こそばゆいでしょう
            [01:26.99]
            [01:27.40]羽よ 羽よ 人並みを望み
            [01:31.20]人波に拒まれては
            [01:34.02]皆みなそこを目指すまだ葛藤があった少女時代
            [01:39.35]無辜むこでいた頃を 遠ざけるのは 熱病
            [01:44.39]
            [01:44.57]髪の長さ揃えて爪の先を塗り直す
            [01:47.94]あどけない唇も色めき立つのね
            [01:51.36]叶うこともありましょう叶わぬ人もおりましょう
            [01:54.82]それゆえ慰めずにはいられないのでしょう
            [01:59.21]
            [01:59.55]羽よ 花よ 水面に散って
            [02:05.04]
            [02:32.49]傷の数を数えて 痛みの数 指を折る
            [02:35.99]一つあまり 小指は 愛しさのぶんね
            [02:39.27]悔やむこともありましょう わたしの所為もありましょう
            [02:42.78]いつかは赤い糸 断ち切るのでしょう
            [02:46.01]
            [02:46.24]花びらにささやきを 哀れみから口づけを
            [02:49.67]懐かしんではじめて 過ぎ行くのでしょう
            [02:53.16]惑うこともありましょう 誰かの所為じゃないでしょう
            [02:56.48]難しいものですね 愛するということは`
    },
    {
        chapter: 3,
        title: 'イフ', artist: 'MORE MORE JUMP!',
        context: '',
        date: 'NOV 2025', ytId: 'egAHniCboNQ', start: 0,
        lyrics: `[00:01.90]生まれた意味も 死ねない理由も
[00:06.05]いつかは見つけられるかな
[00:10.76]
[00:25.57]雨が降る予報の日に
[00:27.69]傘を持たずに歩いていく
[00:31.34]不確かに期待してる
[00:34.86]当てもなく晴れを信じてる

[00:37.42]そうだった
[00:38.77]何度だって焦がれた
[00:40.62]「きっと」なんて願った
[00:42.45]走れば月にも近づけるんだって

[00:44.90]信じてる
[00:46.67]だって誰も明日を知らないでしょ

[00:52.51]僕の人生の前にあるifとlie
[00:55.87]どこに至っても たらればを問う
[00:59.39]できりゃ後悔のないリアルに生きていたい
[01:03.00]なんて吐いて馬鹿みたい

[01:06.65]終わらないストーリーなんて まあ詰まらない
[01:10.75]「永遠」には来ない夜明けが見たい
[01:14.40]君とこんな想いを 高鳴る思いを
[01:18.01]幾つ感じていくだろう

[01:21.49]気休めな言葉とか
[01:25.01]ありふれた希望めいた詩
[01:28.62]なんでも消費される
[01:31.97]ひたすらに生きた証を形にさせてくれよ
[01:38.43]
[01:50.65]美しい嘘も
[01:54.09]汚れた真実も
[01:57.59]これも人の在り方だと、
[02:00.97]全てを許せたら

[02:03.62]どうだろな
[02:04.84]いっそ最初からなら
[02:06.70]もっとずっと今を
[02:08.50]愛だの夢だの満たせられるかもな

[02:11.08]でもその道に君はいないかもしれない

[02:18.69]僕の人生の前にあるifとlie
[02:22.02]どこに至っても たらればを問う
[02:25.60]できりゃ後悔のないリアルに生きていたい
[02:29.10]なんて吐いて馬鹿みたい

[02:32.66]僕の人生の前にあるifとlie
[02:36.21]どこにだってない 何かになりたい
[02:39.76]道に正解はない でも間違いもない
[02:43.32]もう一つ生きれたら

[02:47.00]歌じゃ人生も何もきっと救えない
[02:50.43]でも君の為に歌いたい
[02:54.05]何回、何千回だって奏でど褪せない
[02:57.56]夢をもっと歌いたい

[03:01.95]生まれた意味も 死ねない理由も
[03:05.94]未だにわからないけど
[03:08.83]この命に価値がないとしても
[03:13.14]世界は美しいんだから

[03:16.79]生きていこう`
    },
    {
        chapter: 3,
        title: 'ももいろの鍵', artist: 'MORE MORE JUMP!',
        context: '', desc: '',
        date: 'NOV 2025', ytId: 'MgbsMSnMCOg', start: 0,
        lyrics: `[00:02.64]泣いてるの？怒ってるの？
[00:05.45]幼い声が問う
[00:07.72]心配いらないよ 笑えてるよ
[00:11.25]返事は宙に浮くだけ
[00:14.74]
[00:19.27]あの日描いたもの 夢の色
[00:22.77]しだいに濃くなる
[00:25.18]１人じゃないことも分かってるよ
[00:28.64]横を見ている
[00:31.20]
[00:31.79]ふと振り返る
[00:34.47]遠くなっていく
[00:36.64]分かれ道はまるでジオラマに
[00:40.32]馴染んだ思い出のよう
[00:42.89]
[00:43.42]いざなったクローバー この場所を選んで
[00:46.29]輝くステージに立っている
[00:49.28]共に行くあなたの手 掴んだその手が
[00:52.07]痛くないようにと願っているから
[00:55.17]
[00:55.31]かじかんで かじかんで
[00:58.18]その度に暖めて
[01:00.64]煌めくライトも落ちる影も
[01:03.64]全て愛していたいから
[01:06.86]
[01:07.10]泣かないで 泣かないで
[01:09.73]そのために側にいる
[01:12.24]震える指にこの手を添えて
[01:15.45]今 鍵を開けるまで
[01:19.26]
[01:30.72]やがて背負うもの 託す音
[01:33.98]輪郭は濃くなる
[01:36.40]1人じゃないことも分かってるよ
[01:39.81]前を見ている
[01:42.76]
[01:43.24]ふと振り返る
[01:45.72]見えなくなっていく
[01:47.96]分かれ道はまるで 写真立てに
[01:51.53]しまった 記憶のよう
[01:54.35]
[01:54.58]いざなったクローバー その葉を手に取って
[01:57.34]新たなステージを待っている
[02:00.50]共に行くあなたの目 見つめたその目の
[02:03.21]星が褪せぬように 願っているから
[02:06.52]
[02:06.74]眩しくて 眩しくて
[02:09.50]その先に手を伸ばして
[02:12.56]触れたものも 受けた傷も
[02:15.21]全て憶えていたいから
[02:18.21]
[02:18.53]負けないで 負けないで
[02:21.05]そのために側にいる
[02:23.55]隔たりの奥 見えない世界まで
[02:26.42]届いて欲しい夢
[02:29.98]
[02:41.11]泣いてるの？怒ってるの？
[02:43.99]幼い声が問う
[02:46.17]心配いらないよ 笑えてるよ
[02:49.70]返事を歌にして 届けていく
[02:53.94]
[02:54.11]今微笑んで 微笑んで
[02:57.36]優しさをその頬へ
[03:00.07]煌めくライトも 落ちる影も
[03:02.82]全て想っていくから
[03:06.34]
[03:06.45]乗り越えて その先へ
[03:08.83]ただ前へ歩いていく
[03:11.50]震える指にこの手を添えて
[03:14.63]今 鍵を開ける
[03:17.29]
[03:17.39]錆び付いていても
[03:18.71]消えない色で 今
[03:20.91]ドアを開ける`,
    },
    {
        chapter: 3,
        title: 'オールセーブチャレンジ', artist: 'ワンダーランズ×ショウタイム',
        context: '', desc: '',
        date: 'NOV 2025', ytId: 'cafeiRu4XGI', start: 0,
        lyrics: `[00:02.59]子供のまま喚いても
[00:05.45]感情は道具にならない
[00:08.17]霞む日々から抜け出して
[00:10.56]貴方のこと救ってあげる
[00:13.84]総じて動じない恋の完成
[00:16.99]
[00:27.89]恋は夢模様泡のように
[00:30.69]消えゆくもの
[00:32.52]愛は重く圧し掛かる現実
[00:35.70]どこまでも付きまとう
[00:38.20]
[00:38.48]欲しがれば欲しがるほど
[00:40.98]遠ざかってしまうもの
[00:43.77]諦めたら良い子でしょうか
[00:46.58]子綺麗な結果主義ですか
[00:49.58]
[00:49.96]どうしてなんで 目前の美談に意志を奪われて
[00:53.56]「もっと」度を越えて 傷付け合うのか？
[00:56.25]熱量が理解を 食いつぶして行く
[00:59.13]それならば！
[01:00.78]
[01:01.28]止めらない鼓動響かせて
[01:03.95]未体験希望愛させて
[01:06.94]不安感今拭わせて
[01:09.69]描いた指についてきて
[01:12.45]
[01:12.65]知り得ない誰も知り得ない
[01:14.98]そんな解を提示切に
[01:17.39]祈ってるから
[01:19.31]
[01:22.13](ららららら ああ)
[01:29.30]許されたいとー願うなら、
[01:31.77]誰かを許したことはある？
[01:35.13]熱烈なほど見失う
[01:37.77]論点曇天の夜中

[01:41.16]悲劇のヒロインはただ嘆いて、
[01:44.09]それで終わりなんでしょう？
[01:46.15]愛するもののためそれなら
[01:50.59]火傷も厭わない
[01:52.72]
[01:54.50]命じて烈に抗って「無駄」って神が宣えど
[01:58.06]変えたいと思った非力な自分を
[02:00.86]一瞬で実った果実などないと
[02:03.61]気付いてから
[02:05.67]
[02:05.96]冷製の「可能」を 磨き抜いた手遣いて
[02:10.93]甘えたいこの弱さも
[02:13.83]君の前では見せない

[02:16.46]「愛してる」という言葉が
[02:19.17]陳腐に響かないように、
[02:22.67]嗚呼！

[02:24.00]綻んだ理想縫い合わせて
[02:26.77]失敗も誇り軽々と
[02:29.73]被弾停滞期待を胸に
[02:32.33]絶対譲れないたった一つ

[02:35.45]叶わないなんて有り得ない
[02:37.86]何もかもを、全部、全て…
[02:41.42]信じてるよ!
[02:47.92]一生`,
    },
    {
        chapter: 3,
        title: 'Flyer!', artist: 'Vivid BAD SQUAD',
        context: '', desc: '',
        date: 'NOV 2025', ytId: 'gr4FAlsibeg', start: 0,
        lyrics: `[00:02.08]Wow Wow 飛び立てば 正解!
[00:12.53]Wow Wow 飛び立てば 正解!

[00:22.69]どこまでもまだ まだ高い壁
[00:26.96]それって どこまでもただ ただ怖がっていない？
[00:32.09]あの空はこんなにも こんなにも 青く澄んでいるのに
[00:37.75]まだこんなにも こんなにも迷う必要は無い無い

[00:43.20]幼いこの脚が
[00:47.58]踏み出す地と待ってる

[00:52.57]僕ら Flyer! Flyer!
[00:55.56]憧れだけじゃなくて乗り越えて
[00:58.13]キミもFlyer! Flyer!
[01:00.68]描き出すんだ セカイを

[01:03.73]あの日夢見た夢が
[01:05.57]最高の上昇気流 何度だって
[01:09.14]この心 believe in it
[01:12.25]明日もきっと快晴!

[01:14.80]Wow Wow 飛び立てば 正解!

[01:24.03]挫けそうになっていた
[01:26.20]あの日の僕の表情 多分さboomy boomy
[01:29.19]弾けそうになっていいんだ
[01:31.77]素直な僕の想いは bloomy bloomy

[01:34.16]ふわりと ふわりと 追い風の中で
[01:39.00]ただ ふわりと ふわりと 声を飛ばして

[01:43.85]この世に生を持った意味？
[01:45.82]そんなこと考えている前に
[01:48.35]足掻いてみせて
[01:49.65]一歩踏み出して

[01:53.64]僕ら Flyer! Flyer!
[01:56.74]後悔を怖がってちゃ始まらない
[01:59.38]キミもFlyer! Flyer!
[02:01.80]信じてるんだ セカイを

[02:04.88]あの日夢見た夢が
[02:06.83]最強の上昇気流 いつだって
[02:10.29]この心 believe in it
[02:13.47]明後日も快晴!

[02:19.92]生み出して 今
[02:24.17]ここに僕たちのステージ
[02:26.10]
[02:44.47]明日は快晴!
[02:45.44]Flyer! Flyer!
[02:47.68]響けキミのコールよ 3,2,1 Say!

[02:50.65]Flyer! Flyer!
[02:52.76]曝け出すんだ セカイを

[02:55.90]あの日夢見た夢が
[02:57.74]最強の上昇気流 いつだって
[03:01.42]この想い believe in it
[03:04.45]明後日も快晴!

[03:06.44]雲突き抜け
[03:08.42]描き出す セカイへ

[03:12.59]Wow Wow 飛び立てば 正解!
[03:22.56]Wow Wow 飛び立てば 正解!`,
    },
    {
        chapter: 3,
        title: 'PPPP', artist: 'TAK',
        context: '', desc: '',
        date: 'DEC 2025', ytId: '8Cm-7oCq9HA', start: 0,
        lyrics: `[00:05.72]ほら
[00:06.07]見て見て見てこのオーラ
[00:09.24]きっとヒットだよ
[00:12.10]みっちゃみっちゃダメみっちゃダメ
[00:13.70]まぶしいよ
[00:15.15]きっとヒットだよ

[00:17.93]예뻐예뻐 언니 (Hey) [ye-po-ye-po-on-ni]
[00:19.99]진짜진짜 귀여워 [jin-cha-jin-cha-gi-yeo-wo]
[00:21.68]뭐해뭐해 언니 (Hey) [mo-hae-mo-hae-on-ni]
[00:23.26]めっちゃくっちゃ 배고파 [bae-go-pa]
[00:24.86]ステージ果てまでなぜだコイツ信じらんねw
[00:28.02]ヒメムーブ展開 (チュ)

[00:31.09]ボクノボクノオーラビーム
[00:34.32](ぴょんぴょんぴょんぴょん)
[00:35.85]やられた？
[00:37.53]アイタイアイタイアイシテ
[00:40.40]ガチで
[00:41.00]ラブリースーパキューティーベイビー
[00:42.67]エグいよ

[00:44.18]うちのうちのオーラビーム
[00:47.28](ぴょんぴょんぴょんぴょん)
[00:48.80]びびった？
[00:50.38]限界突破リミッター解除無敵の
[00:53.58]ラブリースーパキューティーベイビー
[00:55.21]エモいよ
[00:56.84]ラブリースーパキューティーベイビー
[00:57.95]だ！よ！ね！チュ！
[00:59.50]
[01:05.88]余計なオマジナイ
[01:09.24]きっとヒットだよ
[01:12.13]確かな慰めは
[01:15.71]きっとヒットだよ

[01:18.35]예뻐예뻐 언니 (Hey) [ye-po-ye-po-on-ni]
[01:20.72]진짜진짜 귀여워 [jin-cha-jin-cha-gi-yeo-wo]
[01:21.58]뭐해뭐해 언니 (Hey) [mo-hae-mo-hae-on-ni]
[01:23.38]めっちゃくっちゃ 배고파 [bae-go-pa]
[01:24.78]ステージ果てまでなぜだコイツ信じらんねw
[01:28.02]トントントントントントントントン
[01:31.10]サボる

[01:31.73]ナー
[01:36.31](ぴょんぴょんぴょんぴょん)
[01:38.14]ナー
[01:41.10]ヒメムーブ展開 (チュ)

[01:44.52]届け届け飛びたい
[01:50.64]アタシアタシ溶けた
[01:53.49]ガチで
[01:53.91]ラブリースーパキューティーベイビー
[01:55.51]エグいよ

[01:58.09](オーラビーム)
[01:58.71]ボクノボクノオーラビーム
[02:01.87](ぴょんぴょんぴょんぴょん)
[02:03.44]最低だ
[02:04.90]限界突破リミッター解除無敵の
[02:08.18]ラブリースーパキューティーベイビー
[02:09.29]エグいよ

[02:10.99]ラララララ (ぴょん)
[02:12.66]ラララララ (ぴょん)
[02:14.10]最低なんて言わないで大好きす
[02:17.12]限界突破リミッター解除無敵の
[02:20.40]ラブリースーパキューティーベイビー
[02:22.03]エモいよ
[02:23.53]ラブリースーパキューティーベイビー
[02:25.18]だ！よ！ね！チュ！

[02:29.90]ラー
[02:31.46]終わった`,
    },
    {
        chapter: 3,
        title: 'ラストラス', artist: '*Luna',
        context: 'The End of Foon Yew Archive', desc: 'Graduation',
        date: 'DEC 2025', ytId: '4tBywV2Ebjg', start: 0,
        lyrics: `
            [00:14.06]ゆっくり落ちる砂時計
[00:17.38]揺らいだ夜の星たちも
[00:20.74]気付けなくなっていたのは
[00:25.32]
[00:26.57]きっと 涙が止まない夕暮れも
[00:30.37]動けそうにない朝明けも
[00:33.77]隣に誰もいないから
[00:37.88]
[00:38.28]負けたくない今日の日を 精一杯走った
[00:44.65]正しく生きることの 意味を知らないまま
[00:52.03]でも 確かにそこに光はあったんだ
[00:59.04]
[00:59.17]ねぇ空の色は何色だっただろう
[01:03.15]星はどんな音色だっただろう
[01:07.05]WOW
[01:09.88]君を知らない世界たちが
[01:12.87]この歌を笑っていたんだろう
[01:16.02]灰色の言葉もあっただろう
[01:19.91]そんな日々を僕は 強さと呼びたい
[01:28.81]君の星河よ
[01:31.20]輝いて
[01:45.21]
[01:45.44]踏み出す足がすくんでも
[01:48.94]未来の空が暗くても
[01:52.45]隣に「音」があったから
[01:56.55]
[01:57.48]見えるもの全てが 真実じゃなくて
[02:03.64]渦巻く人の声を 疑う僕でありたい
[02:11.07]まだ 映らない 星座を探して
[02:22.50]
[02:45.98]今まで数えた星だって
[02:49.05]きっと輝いていたのに
[02:52.28]いつから忘れていたの
[02:55.61]いつから消してしまったの
[02:58.49]
[02:58.64]この世界が美しく見えた
[03:02.06]最後の日はいつだっけ
[03:05.36]下を向いていた夜に
[03:08.53]見落としたんだ 今なら
[03:13.03]
[03:18.65]光るから
[03:19.73]僕の色は何色だっただろう
[03:22.93]君はどんな音色だっただろう
[03:26.96]WOW
[03:29.55]少しだけ顔を上げて
[03:32.42]広がる空が見えたなら
[03:35.59]あの日の答えもあったなら
[03:39.64]そんな明日を僕は 嫌わないでいたい
[03:48.20]君の星河よ
[03:51.17]輝いて
[04:05.54]
[04:17.63]あぁ空はこんな色だった`,
        lyrics_rom: `yukkuri ochiru sunadokei
yuraida yoru no hoshitachi mo
kizukenaku natte ita no wa

kitto namida ga yamanai yuugure mo
ugokesou ni nai asaake mo
tonari ni dare mo nai kara

maketakunai kyou no hi o seiippai hashitta
tadashiku ikiru koto no imi o shiranai mama
demo tashika ni soko ni hikari wa atta nda

nee sora no iro wa naniiro datta darou
hoshi wa donna neiro datta darou
WOW
kimi o shiranai sekaitachi ga
kono uta o waratte ita ndarou
haiiro no kotoba mo atta darou
sonna hibi o boku wa tsuyosa to yobitai
kimi no seiga yo
kagayaite

fumidasu ashi ga sukunde mo
mirai no sora ga kurakute mo
tonari ni oto ga atta kara

mieru mono subete ga shinjitsu ja nakute
uzumaku hito no koe o utagau boku de aritai
mada utsuranai seiza o sagashite

ima made kazoeta hoshi datte
kitto kagayaite ita no ni
itsu kara wasurete ita no
itsu kara keshite shimatta no

kono sekai ga utsukushiku mieta
saigo no hi wa itsu dakke
shita o muite ita yoru ni
miotoshita nda ima nara

hikaru kara
boku no iro wa naniiro datta darou
kimi wa donna neiro datta darou
WOW
sukoshi dake atama o agete
hirogaru sora ga mieta nara
ano hi no kotae mo atta nara
sonna asu o boku wa kirawanaide itai
kimi no seiga yo
kagayaite

aa sora wa konna iro datta
`,
        lyrics_cn: `[00:14.50] 缓缓坠落的沙漏
[00:18.041] 摇曳的夜空繁星
[00:21.333] 我早已察觉不到那份感受

[00:26.833] 一定是那止不住泪水的黄昏
[00:30.875] 还有那无力前行的黎明
[00:34.416] 因为身旁已无人相伴

[00:39.458] 不想输掉的今天　我全力奔跑着
[00:45.708] 仍未明白“正确活着”的意义
[00:52.75] 但是　那里确实存在过光芒啊

[00:59.541] 呐　天空的颜色曾是什么色彩呢
[01:03.166] 群星又曾奏响怎样的音色呢
[01:07.583] WOW
[01:10.208] 那些不认识你的世界啊
[01:12.875] 大概会嘲笑这首歌吧
[01:16.041] 也一定存在过灰色的言语吧
[01:20.041] 这样的日子我想称之为坚强
[01:28.875] 属于你的星河啊
[01:31.708] 请闪耀吧

[01:45.416] 即使迈出的步伐颤抖
[01:48.666] 即使未来的天空一片昏暗
[01:52.375] 因为身旁有“音”在回响

[01:57.333] 眼前所见的一切并非全是真实
[02:03.583] 我想成为那个能质疑人声喧嚣的人
[02:10.75] 尚未映出的未来 寻找星座的光迹
[01:57.05]
[02:45.875] 那些至今数过的星辰
[02:48.875] 明明也曾闪耀着光辉
[02:52.208] 从什么时候开始遗忘了呢
[02:55.458] 又从何时开始抹去了它们

[02:58.833] 这世界看起来曾那样美丽
[03:02.25] 那是最后一次是什么时候呢
[03:05.083] 在低头的夜晚里
[03:08.625] 如今我才发现自己错过了什么

[03:18.50] 因为光芒再度闪耀
[03:19.583] 我的颜色曾是什么呢
[03:22.708] 你的音色又曾是怎样的温柔呢
[03:27.00] WOW
[03:29.625] 稍微抬起头看看吧
[03:32.375] 如果能看见那片延展的天空
[03:35.708] 如果那天的答案仍在那里
[03:39.708] 那样的明天　我想继续喜欢着
属于你的星河啊
请闪耀吧

啊——天空原来是这样的颜色
`,
        trans_source_cn: `WASABISOCUTE`,
        lyrics_en: `The reason why I stopped noticing
the slowly falling hourglass
and the stars on hazy nights

Is surely because on those evenings where my tears were never-ending
and those dawns when I couldn’t bring myself to move
I had no one next to me

I ran as hard as I could towards the present day I didn’t want to lose
I still don’t know what it means to live the right way,
but there was definitely a light there

Hey! I wonder what colour the sky was?
And what sort of timbre did the stars have?
WOW
There are many worlds that don’t know of you;
did they laugh at this song, I wonder?
Were there grey words too?
I want to call days like those “strength”
O River of stars,
sparkle!

Although I feared taking a step forward
and the future sky was dark,
I had a “sound” there beside me

Not everything I see is the truth
I want to be the me who distrusts the muddling voices of people
I search for the constellations that still aren’t reflected

The stars I’ve counted up to now
were sparkling without a doubt,
How long ago has it been since I forgot about them?
How long has it been since I erased my memory of them?

This world looked beautiful;
when was its last day?
The night when I looked down,
I failed to see that, and now…

It shines,
what was my colour, I wonder?
And what sort of timbre was yours?
WOW
If I could just lift my head up a little
and see the expanding sky,
if there was an answer from back then as well,
then I don’t want to hate such a future
O River of stars,
sparkle!

Ah, so this is the sort of colour the sky was…
`,
        trans_source_en: `Vocaloid Lyrics Wiki @Violet Lights`,
    },
    {
        chapter: 3,
        title: '仮死化', artist: 'Vivid BAD SQUAD',
        context: 'The End of Foon Yew Archive', desc: 'Graduation',
        date: 'DEC 2025', ytId: 'Mj38FoEYVGA', start: 0,
        lyrics: `
            [00:02.50]息が吸いたくて、産声を上げて
            [00:07.58]生き辛くなってまた泣いて喚いて
            [00:12.87]生きたくって？逝きたくって？
            [00:15.45]わけ分かんないなぁ、僕は
            [00:18.08]死にたくっても、詩に託して
            [00:20.58]歌詞/仮死になって歌う今日だ
            [00:23.54](ああ ああ ああ ああ...)
            [00:44.56]震わせた声を歌に吹き込んだ時
            [00:48.78]僕の息が初めて目に映って
            [00:51.87]気付いたんだよ
            [00:55.22]音楽の価値なんて所詮主観だと
            [00:59.21]なら、歌いたいように
            [01:02.53]伝えたい言葉を伝う
            [01:05.57]
            [01:07.44]間違いに怯えて
            [01:10.02]鬱ぐんじゃなくて
            [01:12.60]正しく在ろうって
            [01:15.15]足掻いていたいんだよ
            [01:17.88]「僕のせい」も、僕の生だ
            [01:20.51]馬鹿にされたって僕は
            [01:23.21]傷ついては傷つけて
            [01:25.67]瑕疵/貸しを作って生きる
            [01:27.82]
            [01:28.30]目に見えた今が全てだから
            [01:34.11]過去や未来に縋りたくないから
            [01:39.55]心の臓よ、動け、動け！
            [01:45.15]不確かだとしても僕の鼓動
            [01:50.14](ああ ああ ああ ああ...)
            [02:10.33]
            [02:31.76]いつか憎んだ、あの光も
            [02:36.94]僕の目を確かに照らしている
            [02:42.25]可視化していくんだ、この心を
            [02:47.53]でたらめな本音を抱えながら
            [02:52.41]
            [02:55.98]息が吸いたくて、産声を上げて
            [03:00.93]生き辛くなってまた泣いて喚いて
            [03:06.25]生きたくって？逝きたくって？
            [03:08.94]わけ分かんないなぁ、 僕は
            [03:11.58]死にたくっても、詩に託して
            [03:14.13]歌詞/仮死になって歌う
            [03:16.64]消えたくて生きた今日があるなら
            [03:22.44]どちらも嘘にはしなくていいから
            [03:27.85]心の臓を、歌え、歌え！
            [03:32.98]希望も希死も僕の鼓動
            [03:38.30](ああ ああ ああ ああ...)`,
        lyrics_rom: `iki ga suitakute, ubugoe wo agete
ikitsuraku natte mata naite wameite
ikitakutte? ikitakutte? 
wake wakannai naa, boku wa
shinitakutte mo, shi ni takushite
kashi ni natte utau kyou da
(oh oh oh oh oh...)
furuwaseta koe wo uta ni fukikonda toki
boku no iki ga hajimete me ni utsutte
kizuitanda yo
ongaku no kachi nante shosen shukan dato
nara, utaitai you ni
tsutaetai kotoba wo tsutau

machigai ni obiete
fusagunja nakute
tadashiku arou tte
agaite itainda yo
"boku no sei" mo, boku no sei da
baka ni saretatte boku wa
kizutsuite wa kizutsukete
kashi wo tsukutte ikiru

me ni mieta ima ga subete dakara
kako ya mirai ni sugaritakunai kara
shin no zou yo, ugoke, ugoke!
futashika dato shite mo boku no kodou
(oh oh oh oh oh...)

itsuka nikunda, ano hikari mo
boku no me wo tashika ni terashiteiru
kajika shite ikunda, kono kokoro wo
detaramena honne wo kakae nagara

iki ga suitakute, ubugoe wo agete
ikitsuraku natte mata naite wameite
ikitakutte? ikitakutte? 
wake wakannai naa, boku wa
shinitakutte mo, shi ni takushite
kashi ni natte utau
kietakute ikita kyou ga aru nara
dochira mo uso ni wa shinakute ii kara
shin no zou wo, utae, utae!
kibou mo kishi mo boku no kodou
(oh oh oh oh oh...)`,
        lyrics_en: `I want to breathe, so I release my first cry unto this world,
But it's hard to live, so again, I cry tears and scream
Do I want to live? Do I want to die?
I really don't get it, this contradiction
Even if I want to die, I'll put that in these verses,
These lyrics; today, I'll sing while appearing to be dead
(oh oh oh oh oh...)
When my quivering voice breathed life into a song,
It was then I realized,
That was the first time my breath could be seen
They say that in the end, the value of music is subjective–
Well then, I'll sing as I please,
I'll show you the message I want to convey

I won't despair over
Or be afraid of my mistakes
They say to "live the right way,"
But I want to fight against that
My whole life has consisted of "it's my fault"
Even if I'm treated like a fool,
I'll be hurt and I'll hurt others,
I'll live, causing both kindness and injury

The present I see is everything to me,
So I don't want to cling onto ideals of the past or the future
Beat, beat, o heart of mine!
It might be unsteady, but even so, this is my pulse
(oh oh oh oh oh...)

Some time ago, I'd grown to hate even that light
It's surely shining down on my eyes
Holding onto some haphazard, nonsense feelings,
This heart is coming into view

I want to breathe, so I release my first cry unto this world,
But it's hard to live, so again, I cry tears and scream
Do I want to live? Do I want to die?
I really don't get it, this contradiction
Even if I want to die, I'll put that in these verses,
These lyrics, I'll sing while appearing to be dead
If there's a day where I lived, having wanted to disappear,
Neither of those feelings have to be untrue
Sing, sing, o heart of mine!
Both hope and despair drive my pulse
(oh oh oh oh oh...)`,
        trans_source_en: `Project SEKAI Fandom Wiki | Translate by Shiru`,
        lyrics_cn: `因渴望呼吸，而发出第一声啼哭
又因生存艰辛而再度哭泣着叫喊着
想要继续生存？想要就此离世？
于我而言，简直无法理解啊
渴求死亡，却仍寄希望于诗歌
因而化为假死（歌词）今日也在歌唱
(oh oh oh oh oh...)
当将那颤抖的声音注入歌曲中时
我的吐息才第一次映入眼帘
终于意识到了啊
所谓音乐价值终归只是主观臆断
那么，便如渴望歌唱般
传递想要传达的话语吧

并非是畏惧过错
才会变得如此苦闷
是渴望正直地生存
想要挣扎着继续前进啊
“我的过错”也是我的人生
就算被众人愚弄我也要
在伤痕累累的路途之中
创造瑕疵（恩惠）而持续生存

因为眼中所见的现在才是一切
因为不愿纠缠于那些过去与未来
心脏啊，就跳动吧，跳动啊！
即便不可靠也是独属于我的鼓动
(oh oh oh oh oh...)

曾经憎恶过的，那份光芒
也确切地照耀着我的这双眼眸
将这颗心脏，变得那样清晰可见
怀抱着这些不着边际的真心话

因渴望呼吸，而发出第一声啼哭
又因生存艰辛而再度哭泣着叫喊着
想要继续生存？想要就此离世？
于我而言，简直无法理解啊
渴求死亡，却仍寄希望于诗歌
因而化为假死（歌词）歌唱着
今天也在渴望消失的同时活了下来
那将两者都看做是真实想法也无妨
心脏啊，就歌唱吧，歌唱啊！
无论祈愿还是求死都是我的鼓动
(oh oh oh oh oh...)`,
        trans_source_cn: `哔哩哔哩 @Project_SEKAI资讯站 | 由PJS字幕组（翻译：麻雀  校对：ijndjdjdj）翻译`
    },
    {
        chapter: 3,
        title: 'デビルじゃないもん', artist: 'DECO*27',
        context: '2025 Summary', desc: '',
        date: 'DEC 2025', ytId: 'lMEt3RdqB9Y', start: 0,
        ig: 'https://www.instagram.com/reel/DSuHC_qEQOc/',
        lyrics: `
            [00:03.92]堕
            [00:10.42]ながらの優等生 今宵も自分と密会です
            [00:12.96]しんどいわ しんどいわ あーつらつら合掌
            [00:16.47]ほんとは劣等生 あたしはあたしに説教です
            [00:19.12]しんどいわ しんどいわ もーいやいや絶交
            [00:22.70]心配無用 心配無用 これは笑えるジョークソング
            [00:25.76]新米も 老害も みんな歌えるポップソング
            [00:28.86]まあまあ それ噂っすよ ただの紙切れっすよ
            [00:31.90]いいから はやく ハンコ押せや
            [00:35.19]デビルじゃない デビルじゃないもん 悪魔ほどそう言うもん
            [00:38.01]あー死んじゃった 死んじゃった 愛してほしいじゃん（でも…）
            [00:41.49]それでもハマっちゃうなら それでも恋しちゃうなら
            [00:44.25]あー死んじゃった 死んじゃった 天使エンジェル（HEY!!）天使エンジェル（HEY!!）
            [00:47.59]わー！【悲報】【悲報】【悲報】【悲報】（うっそー）
            [00:50.54]わー！ 汚いね わー！ 飛べないね
            [00:53.85]デビルじゃない デビルじゃないもん あー死んじゃった 死んじゃった
            [00:56.93]本当の天使 スルーして ご臨終
            [01:00.08]あくまで天使じゃん？ 最強じゃん
            [01:04.76]堕
            [01:11.04]「君のため」って名言の悪意
            [01:14.82]「夢は叶う」で奪ったサラリー
            [01:17.56]はあ 中毒性の高いもんにゃ 罠があるんだな
            [01:20.42]魂抜かれちゃって やあねえ やあねえ
            [01:23.88]光り輝く輪っかでこの首が締まっていく
            [01:26.59]嘘をつけば緩んでいく 言えないSOS
            [01:30.01]白いペンキかぶりましょ なりきって仕舞いましょ
            [01:32.76]嘘をつけば楽になる ほらやっちゃって
            [01:36.33]デビルじゃない デビルじゃないもん
            [01:39.31]あー死んじゃった 死んじゃった あああ
            [01:42.67]それでもウガっちゃうけど それでも嫌っちゃうけど
            [01:45.53]なりきって笑顔で 天使エンジェル天使エンジェル
            [01:48.85]デビルじゃない デビルじゃないもん 悪魔ほどそう言うもん
            [01:51.64]あー死んじゃった 死んじゃった 愛してほしいじゃん（でも…）
            [01:55.08]それでもハマっちゃうなら それでも恋しちゃうなら
            [01:57.92]あー死んじゃった 死んじゃった 天使エンジェル（HEY!!）天使エンジェル（HEY!!）
            [02:01.19]わー！【悲報】【悲報】【悲報】【悲報】（うっそー）
            [02:04.25]わー！ 汚いね わー！ 飛べないね
            [02:07.51]デビルじゃない デビルじゃないもん あー死んじゃった 死んじゃった
            [02:10.52]本当の天使 スルーして ご臨終
            [02:13.74]わー！【悲報】【悲報】【悲報】【悲報】（あっそー）
            [02:16.75]わー！ 醜いね わー！ 映えないね
            [02:20.00]デビルじゃない デビルじゃないもん あー死んじゃった 死んじゃった
            [02:23.00]本当の悪魔になっても ブレス・ユー
            [02:26.18]あくまで天使じゃん？ 最強じゃん
            [02:29.93]堕〜`,
        lyrics_rom: `da
nagara no yuutousei koyoi mo jibun to mikkai desu
shindoi wa shindoi wa aa tsuratsura gasshou
honto wa rettousei atashi wa atashi ni sekkyou desu
shindoi wa shindoi wa moo iyaiya zekkou
shinpai muyou shinpai muyou kore wa waraeru jooku songu
shinmai mo rougai mo minna utaeru poppu songu
maa maa sore uwasassu yo tada no kamikiressu yo
ii kara hayaku hanko ose ya
debiru ja nai debiru ja nai mon akuma hodo sou iu mon
aa shinjatta shinjatta aishite hoshii jan (demo…)
soredemo hamacchau nara soredemo koishichau nara
aa shinjatta shinjatta enjeru (HEY!!) enjeru (HEY!!)
waa! hihou hihou hihou hihou (ussoo)
waa! kitanai ne waa! tobenai ne
debiru ja nai debiru ja nai mon aa shinjatta shinjatta
hontou no tenshi suruu shite gorinjuu
aku made tenshi jan? saikyou jan
da
"kimi no tame" tte meigen no akui
"yume wa kanau" de ubatta sararii
haa chuudokusei no takai mon nya wana ga aru nda na
tamashii nukarechatte yaa nee yaa nee
hikari kagayaku wakka de kono kubi ga shimatte iku
uso o tsukeba yurunde iku ienai SOS
shiroi penki kaburimasho narikitte shimaimasho
uso o tsukeba raku ni naru hora yacchatte
debiru ja nai debiru ja nai mon
aa shinjatta shinjatta aaa
soredemo ugacchau kedo soredemo kiracchau kedo
narikitte egao de enjeru enjeru
debiru ja nai debiru ja nai mon akuma hodo sou iu mon
aa shinjatta shinjatta aishite hoshii jan (demo…)
soredemo hamacchau nara soredemo koishichau nara
aa shinjatta shinjatta enjeru (HEY!!) enjeru (HEY!!)
waa! hihou hihou hihou hihou (ussoo)
waa! kitanai ne waa! tobenai ne
debiru ja nai debiru ja nai mon aa shinjatta shinjatta
hontou no tenshi suruu shite gorinjuu
waa! hihou hihou hihou hihou (assoo)
waa! minikui ne waa! baenai ne
debiru ja nai debiru ja nai mon aa shinjatta shinjatta
hontou no akuma ni natte mo buresu yuu
aku made tenshi jan? saikyou jan
da~`,
        lyrics_cn: `堕落⋯
所谓的优等生 今晚也是和自我的密会
噢！好难受 好难受啊！ 啊～痛苦的自我反省
其实只是个劣等生 不断地对自己说教
噢！好难受 好难受啊！ 我们还是绝交吧！
别担心 别担心 这只是一首玩笑
新知旧雨 都会唱的一首流行歌
冷静冷静，那只是一个谣言 这不过是一个备忘录
别想这么多了，快盖下你的印章吧
我不是恶魔，我才不是恶魔 不足以被称为恶魔
啊～我已经死去，消失在人间 谁不是只是想被爱呢？（但⋯）
如果你还是沉迷其中 如果你还是爱上了
啊～我已经死去，消失在人间 天使（嘿！！）天使（嘿！！）
哇！【讣闻】【讣闻】【讣闻】【讣闻】（骗你的～）
哇！真肮髒！哇！无法高飞！
我不是恶魔，我才不是恶魔 啊～我已经死去，消失在人间
错过了真正的天使，安息吧
到底是天使还是恶魔？是最强的化身
堕落⋯
「为你好」只是充满恶意的名言
「梦想成真」将剥夺你的报酬
啊～容易上瘾的东西都充满陷阱
灵魂被出卖 真肮髒 真肮髒
闪闪发亮的光环正勒着我的脖子
当我说谎时便会鬆开 使我无法求救
漆上白色来遮掩吧 彻底地结束这一切吧
谎言让一切变得更轻鬆 来！试试看吧！
我不是恶魔，我才不是恶魔
啊～我已经死去，消失在人间 啊啊啊⋯
儘管会被质疑 儘管会被厌恶
尽情地微笑着 天使天使
我不是恶魔，我才不是恶魔 不足以被称为恶魔
啊～我已经死去，消失在人间 谁不是只是想被爱呢？（但⋯）
如果你还是沉迷其中 如果你还是爱上了
啊～我已经死去，消失在人间 天使（嘿！！）天使（嘿！！）
哇！【讣闻】【讣闻】【讣闻】【讣闻】（骗你的～）
哇！真肮髒！哇！无法高飞！
我不是恶魔，我才不是恶魔 啊～我已经死去，消失在人间
错过了真正的天使，安息吧
哇！【讣闻】【讣闻】【讣闻】【讣闻】（谁在乎～）
哇！真丑陋！哇！看不下去！
我不是恶魔，我才不是恶魔 啊～我已经死去，消失在人间
就算我成为真正的恶魔 也会庇佑你
到底是天使还是恶魔？是最强的化身
堕落～`,
        trans_source: `YouTube @DECO*27`,
        lyrics_en: `D-D-Down
Part-time patrician another clandestine rendezvous with myself
Drained oh so drained, introspection and in prayer
But really a plebeian, preach to me myself and I
Drained, oh so drained, I guess we need to break up
No worries everything’s fine this is just a silly joke song
The newbies, the fogies, everyone can sing along to this pop song
Calm down, that’s just a rumor, this contract is “just in case”
Now shut up and give me your signature
Not a Devil, I’m not a Devil, so sayeth the Devil
Oh no I’m dead, I’m gone like don’t we all want to be loved? (but...)
If you’re still gonna be hooked If you’re still gonna fall in love
Oh no I’m dead, I’m gone Angel (HEY!!) Angel (HEY!!)
Whaaat! [BAD NEWS] [BAD NEWS] [BAD NEWS] [BAD NEWS] (just kidding~)
Whaaat! So grimy Whaaat! Not aerial
Not a Devil, I’m not a Devil Oh no I’m dead, I’m gone
You overlooked the true Angel, R.I.P.
Both Devil & Angel? That’s Archangel level stuff
D-D-Down
The maliciousness of the quote, “It’s for your own good”
Salaries exploited by the line, “Your dreams will come true”
Ah, highly addictive things always hide a trap
My soul’s been reaped how nasty nasty
My radiant halo is closing in around my neck
It loosens when I lie, the “Mayday” I can’t call out
Let’s cover-up in white paint get lost in the part and play
It gets easier when you lie go on, try it
Not a Devil, I’m not a Devil
Oh no I’m dead, I’m gone aaa
Though you may doubt me, though you may hate me
Smile and play the part Angel Angel
Not a Devil, I’m not a Devil, so sayeth the Devil
Oh no I’m dead, I’m gone like don’t we all want to be loved? (but...)
If you’re still gonna be hooked If you’re still gonna fall in love
Oh no I’m dead, I’m gone Angel (HEY!!) Angel (HEY!!)
Whaaat! [BAD NEWS] [BAD NEWS] [BAD NEWS] [BAD NEWS] (just kidding~)
Whaaat! So grimy Whaaat! Not aerial
Not a Devil, I’m not a Devil Oh no I’m dead, I’m gone
You overlooked the true Angel, R.I.P.
Whaaat! [BAD NEWS] [BAD NEWS] [BAD NEWS] [BAD NEWS] (who cares~)
Whaaat! Grotesque Whaaat! Not grammable
Not a Devil, I’m not a Devil Oh no I’m dead, I’m gone
Even if I turn into a true Devil “Bless you”
Both Devil & Angel? That’s Archangel level stuff
Down~`
    },
    {
        chapter: 3,
        title: 'Polar Star', artist: 'MORE MORE JUMP！',
        context: '', desc: '',
        date: 'DEC 2025', ytId: 'eMb63NYcAL8', start: 0,
        lyrics: `
            [00:01.19](Polar Star)
            [00:06.81]いつの間にか失くしたコンパス 滲んだ夜空に
            [00:12.43]あてもないまま続いたコウカイ 流されるままで
            [00:17.37]いつだって 間違って 泣いたって 消えなくて
            [00:22.60]口ずさんでた救難信号 懐かしい歌
            [00:28.43]Polar Star それでもずっとずっとずっと消えない星(スター)
            [00:33.74]Polar Star 見上げればいつもいつもいつも側で瞬く
            [00:38.48]不安も呪詛も 飲み込んで ただ真っすぐにきらめいた
            [00:45.49]あの星のように今
            [00:49.84]夜を裂いて輝いて 響け響け 遥か彼方の君へ
            [00:55.46](MORE MORE MORE MORE JUMP) この声が届くように
            [01:00.56]空はあいにく流星群 光れ光れ 眩い雨の中で
            [01:05.94](MORE MORE MORE MORE JUMP) どこにいたってわかるように
            [01:11.30]Polar Star 私を見つけて 私を見ていて もう迷わないように
            [01:24.69]
            [01:37.98]凪いだ水面にこぼれ落ちた 涙のように
            [01:43.12]探したって見つかりもしない 想いの欠片が
            [01:48.14]いつだって 大切で 捨てたって 消えなくて
            [01:53.15]星の海をまた進むんだ 顔を上げて
            [01:59.62]Polar Star そうだよずっとずっとずっと消えない星(スター)
            [02:04.77]Polar Star 見上げればいつもいつもいつも側で瞬く
            [02:09.83]願いを未来を歌うんだ ただ真っすぐに煌いた
            [02:16.47]君を連れてゆくよ いつか夢見た舞台(ステージ)へ
            [02:23.28]夜を裂いて輝いて 響け響け 遥か彼方の君へ
            [02:28.46](MORE MORE MORE MORE JUMP) この声が届くように
            [02:33.56]空はあいにく流星群 光れ光れ 眩い雨の中で
            [02:39.18](MORE MORE MORE MORE JUMP) どこにいたってわかるように
            [02:44.30]Polar Star 私を見つけて 私を見ていて もう迷わないように
            [02:56.02]輝き続けて`,
        lyrics_rom: `[00:01.19]
itsu no mani ka nakushita konpasu nijinda yozora ni
ate mo nai mama tsuzuita koukai nagasareru mama de
itsudatte machigatte naitatte kienakute
kuchizusan de ta kyunan shigou natsukashii uta
Polar Star soredemo zutto zutto zutto kienai sutaa
Polar Star miagereba itsumo itsumo itsumo soba de matataku
fuan mo juso mo nomikonde tada massugu ni kirameita
ano hoshi no you ni ima
yoru wo saite kagayaite hibike hibike haruka kanata no kimi e
(MORE MORE MORE MORE JUMP) kono koe ga todoku you ni
sora wa ai niku ryuuseigun hikare hikare mabayui ame no naka de
(MORE MORE MORE MORE JUMP) doko ni itatte wakaru you ni
Polar Star watashi wo mitsukete watashi wo miteite mou mayowanaiyou ni

naida minamo ni koboreochita namida no you ni
sagashitatte mitsukari mo shinai omoi no kakera ga
itsudatte taisetsu de sutetatte kienakute
hoshi no umi wo mata susumunda kao wo agete
Polar Star soudayo zutto zutto zutto kienai sutaa
Polar Star miagereba itsumo itsumo itsumo soba de matataku
negai wo mirai wo utau nda tada massugu ni kirameite
kimi wo tsurete yuku yo itsuka yume mita suteeji e
yoru wo saite kagayaite hibike hibike haruka kanata no kimi e
(MORE MORE MORE MORE JUMP) kono koe ga todoku you ni
sora wa ai niku ryuuseigun hikare hikare mabayui ame no naka de
(MORE MORE MORE MORE JUMP) doko ni itatte wakaru you ni
Polar Star watashi wo mitsukete watashi wo miteite mou mayowanaiyou ni
kagayaki tsuzukete`,
        lyrics_cn: `
        [00:01.19]
        漫漫旅途之中 不觉间已迷失方向，浸染于茫茫夜色之中，
浑浑噩噩间 唯有后悔久久难平，于随波逐流中沉沦，
这一路走来 一错再错，泪沾满衣襟 痛挥之不去
口中时常哼唱的 求救信号，是那无比怀念的歌谣
Polar Star，即便如此 也永远 永远 永远 不会消逝的那颗星
Polar Star，若举目眺望 便永远 永远 永远 在身旁闪闪发光
将不安与诅咒 尽皆埋葬心底，只须笔直前进 绽放出烂漫星光
此刻便化作那颗星
绽放出绚烂光芒撕裂这夜幕 唱响吧 唱响吧 致身处遥远彼岸的你
（MORE MORE MORE MORE JUMP！）只为将这歌声传达于你
纵使时运不济漫天流星横空出世，也闪耀吧 闪耀吧 冲破这璀璨夺目的繁星之雨
（MORE MORE MORE MORE JUMP！）只愿无论身在何处都永不再迷失
Polar Star，请找到我吧 请注目于我吧，为了得以永远摒弃迷惘

如同那落在波平如镜的水面上 激起层层涟漪的泪滴
即便努力探求 却依旧无迹可寻的 那心愿的碎片
一路走来 无比珍重，即便被舍弃 也绝不消殒，
我们将再度扬帆航向浩渺星海，高昂着面庞
Polar Star，正是如此 这永远 永远 永远 不会消逝的一颗星
Polar Star，若举目眺望 便永远 永远 永远 在身旁闪闪发光
将心愿与未来 都化作歌声，只须笔直前进 绽放出烂漫星光
就与我携手前往吧，那昔日梦想中的舞台
绽放出绚烂光芒撕裂这夜幕，唱响吧 唱响吧 致身处遥远彼岸的你，
（MORE MORE MORE MORE JUMP！）只为将这歌声传达于你
纵使时运不济漫天流星横空出世，也闪耀吧 闪耀吧 冲破这璀璨夺目的繁星之雨
（MORE MORE MORE MORE JUMP！）只愿无论身在何处都永不再迷失
Polar Star，请找到我吧 请注目于我吧，为了得以永远摒弃迷惘
愿这光芒永世长存
`,
        trans_source_cn: `哔哩哔哩 @Project_SEKAI资讯站 | 由PJS字幕组（翻译：ijndjdjdj 校对：寝坊 时轴：爱死天流）翻译`,
        lyrics_en: `[00:01.19]
As I lost my compass before I realized it, in the blurring starry sky,
I continue to sail aimlessly, being swept away.
I'm always making mistakes; crying but they won't go away,
So I sing to myself my SOS signal: A song nostalgic to me.
Polar Star, but there is always, always, always a star that won't disappear,
Polar Star, and if I look up, it always, always, always flickers besides me,
Swallowing down both my curse and anxiety, at this moment,
Like that star that was simply sparking right ahead-
Resound, resound out, as we shine and rend the night sky asunder! Towards the faraway you-
(MORE MORE MORE MORE JUMP) So that we'll deliver this voice to you!
Shine, shine on, even as the sky's unfortunately showering meteors! Within that dazzling rain-
(MORE MORE MORE MORE JUMP) Wherever you are, as if understanding me,
Polar Star, you found me, you're watching me, so that I'm never lost again.

Like a tear spilling and dropping onto the calm water surface,
The pieces of my thoughts I'm looking for that I can't find,
As always, they are important; I threw them away but they won't disappear,
Once again, as I move forward in this sea of stars, I look up.
Polar Star, right, there is always, always, always a star that won't disappear,
Polar Star, and if I look up, it always, always, always flickers besides me,
Singing out my wishes and future, towards that stage we dreamed of one day,
I'll take you, simply sparking right ahead, along with me!
Resound, resound out, as we shine and rend the night sky asunder! Towards the faraway you-
(MORE MORE MORE MORE JUMP) So that we'll deliver this voice to you!
Shine, shine on, even as the sky's unfortunately showering meteors! Within that dazzling rain-
(MORE MORE MORE MORE JUMP) Wherever you are, as if understanding me,
Polar Star, you found me, you're watching me, so that I'm never lost again.
We continue to shine!`,
        trans_source_en: `Project SEKAI Fandom Wiki | Translate by Thai1210`,
    },
    {
        chapter: 3,
        title: 'VOIDS', artist: 'Pretty Patterns ft.vally.exe',
        context: 'The End of 2025', Desc: '',
        date: 'DEC 2025', ytId: 'B0uSLgW9o7E', start: 0,
        ig: 'https://www.instagram.com/reel/DS7AsnWEdgg/',
        lyrics: `
            [00:14.59]I want to be right where you are
            [00:21.69]I want to be right where you are
            [00:29.19]There's no beauty without ends
            [00:36.32]No creation with no mends
            [00:43.83]A new silent wish, will cast aside our pain
            [00:48.58]Distancing side by side in vain
            [00:56.95]Reflecting no more anguish by your side
            [01:00.44]A contradiction worthy to abide
            [01:04.10]Remnants of us ebb and flow
            [01:07.09]A glimpse of love just waiting
            [01:11.03]Oh, a never-ending hope to mend it all
            [01:18.18]Flow, let our time remain and wait for voids to fall
            [01:25.05]Ascending through the motions
            [01:28.12]It would seem as though they'd last
            [01:31.91]Admitting to our questions
            [01:35.72]And doubts thrown at the past
            [01:40.69]There's no rightness in pretend
            [01:47.57]Finding comfort once again
            [01:54.85]Wish the days would pass, just yearning for our fate
            [01:59.94]Yet there is solace to be found within dismay
            [02:08.01]Disowning feelings of grief through these tides
            [02:11.65]A complicated love I'd dare not hide
            [02:15.30]Turbulences come and go
            [02:18.18]But won't reject me whole
            [02:22.17]Oh, a bittersweet vision through me that befalls
            [02:28.98]Know that despite our voids I swear to hold it all
            [02:36.04]While sinking through this ocean
            [02:39.28]I would wonder why you'd ask
            [02:43.12]Accepting our affection
            [02:46.35]I just knew that it would last
            [02:51.16]I want to be right where you are
            [02:58.21]I want to be right where you are
            [03:05.35]I want to be right where you are
            [03:12.55]I want to be right where you are
            [03:18.93]I want to be right where you are (touch)
            [03:21.68](The heavens and the skies alight)
            [03:26.34]I want to be right where you are (breathe)
            [03:28.69](The entire universe shines bright)
            [03:33.52]I want to be right where you are
            [03:40.74]I want to be right where you are
            [03:47.58]`,
        lyrics_cn: `
            我想待在你所在的地方
            我想待在你所在的地方
            没有终结，就不存在真正的美
            没有修补，也就无法诞生创造
            一个新的无声愿望，将把痛苦抛诸脑后
            并肩疏离，却终究徒然
            在你身旁，不再映照痛楚
            这是值得承受的矛盾
            我们的残影起伏消长
            一瞥爱情，静静等待
            噢，那无尽的希望，想修复一切
            流动吧，让时间停留，等待虚无坠落
            在起伏中不断上升
            仿佛这一切会持续下去
            直面我们的问题
            以及被抛向过去的疑惑
            伪装之中没有正确可言
            却再次找到了慰藉
            希望日子流逝，只为渴望命运的到来
            然而在失落之中，仍能找到安慰
            在浪潮中，否认悲伤的情绪
            一段复杂的爱，我不敢再隐藏
            动荡来来去去
            却从未将我彻底否定
            噢，那降临于我的苦甜幻象
            请相信，哪怕满是空缺，我也会全部守住
            当我沉入这片海洋
            我仍会疑惑你为何询问
            接纳我们的情感
            我早已知道，它会持续
            我想待在你所在的地方
            我想待在你所在的地方
            我想待在你所在的地方
            我想待在你所在的地方
            我想待在你所在的地方（触碰）
            （苍穹与天空被点亮）
            我想待在你所在的地方（呼吸）
            （整个宇宙闪耀着光芒）
            我想待在你所在的地方
            我想待在你所在的地方`,
        trans_source_cn: `WASABISOCUTE`,
    },
    // Chapter 4
    {
        chapter: 4,
        title: 'あのね', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 'M-IayQIR0XA', start: 0,
        ig: '',
        lyrics: `
            [00:00.63]ただ歌を歌う Loneliness
            [00:02.59]この電子音が繋いでく魔法
            [00:08.50]
            [00:23.95]あのね、僕は地球の
            [00:27.74]反対側に居るから
            [00:31.80]君と
            [00:33.39]同じものが感じられなくて
            [00:37.32]春も夏も秋も冬も
            [00:41.08]空の色さえ
            [00:47.45]地球を鳴らすミュージック
            [00:49.22]君の声がこの曲のスパイス
            [00:51.51]届いていてほしいな
            [00:53.22]僕のらったったも君の元に
            [00:55.59]誰もはみ出さずに
            [00:57.17]包んでくれるそれは
            [00:58.55]ダンスミュージック
            [00:59.44]ヘッドホンの先には
            [01:01.01]いつもの様に君がいるから
            [01:04.00]
            [01:18.65]あのね、キーボードに
            [01:22.40]打ち込んでいく文字は
            [01:26.48]思うように感情が乗ってくれなくて
            [01:32.16]何も伝わらなくて
            [01:34.58]目に見えるものだけに
            [01:36.74]圧倒されてしまう
            [01:38.98]心も何もかも乗っ取られていく
            [01:42.22]見えない電波を拾って
            [01:44.75]この心臓が
            [01:46.76]脈を打つ限り
            [01:48.01]音を打ち続けるから
            [01:51.25]君は君のままでいて
            [01:57.75]言葉が通じなくても
            [01:59.53]この音が刻むメッセージと音色で
            [02:04.48]君と
            [02:05.54]この瞬間同じ四季を
            [02:07.39]また感じられる気がしていたんだ
            [02:11.22]空の色も教えてくれた
            [02:15.00]
            [02:18.94]二人の意識が繋がっていく
            [02:22.00]
            [02:28.98]地球を鳴らすミュージック
            [02:30.85]君の脈がこの曲のスパイス
            [02:33.03]届いていてほしいな
            [02:34.73]君のチクタクチクも僕の元に
            [02:37.08]誰もはみ出さずに
            [02:38.65]包んでくれるそれは
            [02:39.95]ダンスミュージック
            [02:40.87]ヘッドホンの先には
            [02:42.42]いつも通りの君がいるから
            [02:45.30]
            [03:00.11]あのね、僕は地球の
            [03:03.81]反対側に居るけど
            [03:08.04]君と
            [03:09.46]同じものが感じられるように
            [03:13.52]この歌を歌うんだ
            [03:16.22]`,
        lyrics_rom: `tada uta wo utau loneliness
kono denshi on ga tsunaideku mahou

ano ne boku wa chikyuu no
hantai gawa ni iru kara
kimi to
onaji mono ga kanjirarenakute
haru mo natsu mo aki mo fuyu mo
sora no iro sae
chikyuu wo narasu myuujikku
kimi no koe ga kono kyoku no supaisu
todoite ite hoshii na
boku no rattatta mo kimi no moto ni
dare mo hamidazu ni
tsutsunde kureru sore wa
dansumyuu jikku
heddohon no saki ni wa
itsumo no you ni kimi ga iru kara

ano ne kiiboodo ni
uchikonde iku moji wa
omou you ni kanjou ga notte kurenakute
nanimo tsutawaranakute
me ni mieru mono dake ni
attou sarete shimau
kokoro mo nanimokamo nottorarete iku
mienai denpa wo hirotte
kono shinzou ga
myaku wo utsu kagiri
oto wo uchitsuzukeru kara
kimi wa kimi no mama de ite
kotoba ga tsujinaku temo
kono oto ga kizamu messeeji to neiro de
kimi to
kono shunkan onaji shiki wo
mata kanjirareru ki ga shite itan da
sora no iro mo oshiete kureta

futari no ishiki ga tsunagatte iku

chikyuu wo narasu myuujikku
kimi no myaku ga kono kyoku no supaisu
todoite ite hoshii na
kimi no chikuta ku chiku mo boku no moto ni
dare mo hamidazu ni
tsutsunde kureru sore wa
dansumyuu jikku
heddohon no saki ni wa
itsumo doori no kimi ga iru kara

ano ne boku wa chikyuu no
hantai gawa ni iru kedo
kimi to
onaji mono ga kanjirareru you ni
kono uta wo utau n da`,
        lyrics_cn: `只是唱着歌的Loneliness
是这电子音连结起的魔法

我说啊，因为我
在地球的另一端
无法感受
与你相同的一切
就连春夏秋冬
就连天空的颜色
让地球鸣响的音乐
你的声音是这首歌的调味料
希望它能传达给你啊
我的啦哒哒也能传到你那里
不会遗漏任何人
将一切温柔包容的那是
dance music
在耳机的另一端
你一如既往地在那里

我说啊
敲击键盘输入的文字
无法如我所愿地承载感情
什么也传达不了
只因眼前所见的一切
就被彻底压倒
心灵和一切都被占据
拾起看不见的电波
只要这颗心脏
还在跳动
我就会继续敲响音符
你就做你自己
即使言语不通
也能凭这声音刻下的message和音色
我曾感觉能与你在此刻
再次感受相同的四季
你还告诉了我
天空的颜色

你我的意识渐渐相连

让地球鸣响的音乐
你的脉搏是这首歌的调味料
希望它能传达给你啊
你的嘀嗒嘀也能传到我这里
不会遗漏任何人
将一切温柔包容的那是
dance music
在耳机的另一端
你一如往常地在那里

我说啊，我虽然
在地球的另一端
但为了
能感受与你相同的一切
我唱着这首歌`,
        lyrics_en: `Just singing a song of loneliness
This electronic sound connects us like magic

Hey you know
I'm on the other side of the earth
So I can't feel
the same things you do
Spring summer autumn winter
Even the color of the sky
Music that makes the earth resonate
Your voice is the spice of this song
I hope it reaches you
May my rat-tat-ta reach you too
No one left out
What wraps around us
Is dance music
At the end of my headphones
You're there as always

Hey you know
The words I type on my keyboard
Never carry the feelings I want
Nothing gets across
Overwhelmed by
the visible things
My heart and everything get taken away
Catching invisible signals
As long as
this heart keeps beating
I’ll keep the sound alive
Stay just the way you are
Even if our words don't connect
With the message and tone carved by this sound
I feel like in this moment
We can share the same four seasons again
You even told me
the color of the sky

Our minds are connecting

Music that makes the earth resonate
Your heartbeat is the spice of this song
I hope it reaches you
May your tick-tock-tick reach me too
No one left out
What wraps around us
Is dance music
At the end of my headphones
You're there as always

Hey you know
Even though I'm on the other side of the earth
To feel
the same things as you
I sing this song`,
        trans_source: `YouTube @ナナツカゼ`
    },
    {
        chapter: 4,
        title: 'モザイクロール (Reloaded)', artist: 'Leo/need',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 'w0RQgG-Uiyc', start: 0,
        lyrics: `
            [00:19.43]とある言葉がきみに突き刺さり
            [00:25.46]傷口から漏れ出す液を"愛"と形容してみた
            [00:35.88]
            [00:38.52]思いやりの欠如と形だけの交尾は
            [00:45.09]腐れ縁のきみとあたしによく似ている
            [00:51.80]それでも「好き」とか
            [00:55.42]愛したっていいじゃないか
            [00:58.31]縛り 誰も触れないよう
            [01:02.07]これも運命じゃないか
            [01:04.72]消える消える とある愛世
            [01:09.51]
            [01:14.40]終わる頃にはきみに飽いてるよ
            [01:20.84]愛か欲か分からず放つことは何としようか
            [01:27.27]きみがくれた涙はあたしが飲み干すから
            [01:33.84]「弱虫でもいい」と甘い嘘をくれたら
            [01:40.23]逃げ出せたのかな
            [01:44.11]
            [01:57.60]「愛した」って言うのですか？
            [01:59.85]しがみついて藻掻くことを
            [02:03.81]殺したっていいじゃないか
            [02:06.46]きみが嫌うあたしなんて
            [02:10.20]愛したっていいじゃないか
            [02:12.87]縛り 誰も触れないよう
            [02:16.65]これも運命じゃないか
            [02:19.36]消える消える とある愛世`,
        lyrics_rom: `
toaru kotoba ga kimi ni tsukisasari
kizuguchi kara moredasu eki wo "ai" to keiyou shite mita

omoiyari no ketsujo to katachi dake no koubi wa
kusare en no kimi to atashi ni yoku nite iru
soredemo "suki" toka
aishita tte ii janai ka
shibari dare mo furenai you
kore mo unmei janai ka
kieru kieru toaru aise

owaru koro ni wa kimi ni aiteru yo
ai ka yoku ka wakarazu hanatsu koto wa nan to shiyou ka
kimi ga kureta namida wa atashi ga nomihosu kara
"yowamushi demo ii" to amai uso wo kuretara
nigedaseta no ka na

"aishita" tte iu no desu ka?
shigamitsuite mogaku koto wo
koroshita tte ii janai ka
kimi ga kirau atashi nante
aishita tte ii janai ka
shibari dare mo furenai you
kore mo unmei janai ka
kieru kieru toaru aise`,
        lyrics_en: `A certain word pierces your heart
I compared the fluid that leaked out of the wound to "love"

Lack of compassion and mating without love is
Similar to the entangled relationship between us
Yet, "I love you"
What's wrong with me loving you,
Bound together, so nobody can touch you
This is fate as well,
It will disappear, disappear, our world of love

I will be sick of you by the end of this
What should I call shooting out my thirst while still not knowing if this is greed or love
I will drink up all the tears that you gave me
You gave me a sweet lie that “it’s ok to be a coward",
Have I been able to escape?

Is this called "I loved you"?
Where I struggle to cling to you
What's wrong with killing me,
Me who you hate
What's wrong with me loving you,
Bound together, so nobody can touch you
This is fate as well,
It will disappear, disappear, our world of love`,
        trans_source_en: `YouTube @DECO*27`,
        lyrics_cn: `某句话语如利刃将你狠狠贯穿
自伤口中渗出的那股液体 我将其比拟为“爱”

彼此温存的缺位与徒留形式的交欢
恰似孽缘难舍难分纠缠不清的你我
可你依旧呢喃着“喜欢你......”
曾经情深一场又有何妨
相互掣肘着 决不让他人染指
兴许这也是既定的宿命啊
终会消失 终会散尽 这个暧昧不定的“爱世”

当此情落幕我对你已彻底厌倦
爱欲不分的肆意宣泄 那又算作什么呢
你洒落我心的泪水 我会慨然一饮而尽
你曾许我“学会软弱”的甜美谎言
能否让我得以释怀

如此种种就算是“情深一场”？
这般藕断丝连苦苦纠缠
那将我抹去不就好了
这个对你如此厌恶的我
曾经情深一场又有何妨
相互掣肘着 决不让他人染指
兴许这也是既定的宿命啊
终会消失 终会散尽 这个暧昧不定的“爱世”`,
        trans_source_cn: `哔哩哔哩 @Project_SEKAI资讯站 | 由PJS字幕组（翻译：爱死天流 时轴：荷之歌）翻译`
    },
    {
        chapter: 4,
        title: '星空のメロディー', artist: 'ワンダーランズ×ショウタイム',
        context: '', desc: '',
        date: 'JAN 2026', ytId: '4GJhcEVGfd8', start: 0,
        lyrics: `
            [00:04.26]NeverEnd NeverEnd Wow Wow
            [00:05.94]いつかの約束
            [00:08.06]NeverEnd NeverEnd Wow Wow
            [00:10.10]叶えられるから
            [00:14.21]
            [00:28.72]大切なものがあるんだ
            [00:30.82]自分の居場所はココなんだって
            [00:33.03]独りじゃ護れなかった景色も
            [00:35.41]重なる絆 希望に変えた
            [00:37.61]誰にも理解されなかった
            [00:39.70]それでもいいと思っていた
            [00:41.75]情熱に触れて溶けてゆく孤独
            [00:43.93]どこまでも続く煌めきを胸に
            [00:46.09]ねぇ 想うほどにセカイは色を讃えて
            [00:54.01]誰かを笑顔にできるんだってことを
            [00:56.76]気づかせてくれたんだ
            [01:02.15]星に願いをかけて
            [01:06.62]魔法のような明日を
            [01:10.30]憧れも涙にも
            [01:14.57]光がほら宿ってる
            [01:18.95]星を見つけるほどに
            [01:23.52]暗闇を照らした
            [01:27.32]解けない繋がりをメロディーにして
            [01:33.54]夢を満たしてゆこう
            [01:39.22]
            [01:45.50]大切なものがあるんだ
            [01:47.42]こんなにも希望に満ちてるって
            [01:49.72]輝くように紡いだ軌跡は
            [01:52.15]いつしか夢に変わってゆく
            [01:54.34]誰にも伝えられなかった
            [01:56.43]できなかったことを数えた
            [01:58.57]情熱が照らす未来の足跡
            [02:00.71]もう一度歌声を届けたい
            [02:02.82]ねぇ 想うほどにセカイは色を讃えて
            [02:10.76]胸の奥 諦めてしまったものに
            [02:13.93]もう一度 息吹を与えてくれたんだ
            [02:19.03]星が瞬くほどに
            [02:23.60]手を伸ばしてしまう
            [02:27.30]追いかけて 遠のいて
            [02:31.43]それでもまた魅せられる
            [02:35.99]星が見えない夜は
            [02:40.59]暗闇に寄り添う
            [02:44.21]もう一人の寂しがりやな自分も
            [02:50.62]抱きしめてあげよう
            [02:55.80]小さなかがり火でも
            [03:02.24]見つめる瞳に映るものは…
            [03:10.00]星に願いをかけて
            [03:14.60]魔法のような明日を
            [03:18.23]憧れも涙にも
            [03:22.45]光がほら宿ってる
            [03:27.15]星を見つけるほどに
            [03:31.41]暗闇を照らした
            [03:35.24]解けない繋がりをメロディーにして
            [03:41.50]夢を満たしてゆこう
            [03:45.29]NeverEnd NeverEnd Wow Wow
            [03:47.24]いつかの約束
            [03:49.23]NeverEnd NeverEnd Wow Wow
            [03:51.40]叶えられるから`,
        lyrics_rom: `
        [00:04.26]
itsuka no yakusoku

kanaerareru kara

taisetsuna mono ga arunda
jibun no ibasho wa koko nandatte
hitori ja mamorenakatta keshiki mo
kasanaru kizuna kibou ni kaeta
darenimo rikai sarenakatta
sore demo ii to omotteita
jounetsu ni furete tokete yuku kodoku
dokomade mo tsuzuku kirameki wo mune ni
nee omou hodo ni sekai wa iro wo tataete
dareka wo egao ni dekirun datte koto wo
kizukasete kuretanda
hoshi ni negai wo kakete
mahou no youna asu wo
akogare mo namida ni mo
hikari ga hora yadotteru
hoshi wo mitsukeru hodo ni
kurayami wo terashita
hodokenai tsunagari wo merodii ni shite
yume wo mitashite yukou

taisetsu na mono ga aru nda
konna ni mo kibou ni michiteru tte
kagayaku you ni tsumuida kiseki wa
itsushika yume ni kawatte yuku
dare ni mo tsutaerarenakatta
dekinakatta koto o kazoeta
jounetsu ga terasu mirai no ashiato
mou ichido utagoe o todoketai
nee omou hodo ni sekai wa iro o tataete
mune no oku akiramete shimatta mono ni
mou ichido ibuki o ataete kureta nda
hoshi ga matataku hodo ni
te o nobashite shimau
oikakete toonoite 
soredemo mata miserareru
hoshi ga mienai yoru wa
kurayami ni yorisou
mou hitori no sabishigariya na jibun mo
dakishimete ageyou
chiisana kagaribi demo
mitsumeru hitomi ni utsuru mono wa…
hoshi ni negai wo kakete
mahou no youna asu wo
akogare mo namida ni mo
hikari ga hora yadotteru
hoshi wo mitsukeru hodo ni
kurayami wo terashita
hodokenai tsunagari wo merodii ni shite
yume wo mitashite yukou

itsuka no yakusoku

kanaerareru kara`,
        lyrics_en: `
        [00:04.26]
That promise we once made 

We can make it real 

Things I just can't let go
To know that I belong
What I couldn't protect alone
The bond between us turned it into hope
No one understood me
Thought it was okay
Loneliness melts away with the touch of passion
Embracing the never-ending sparkle in our hearts
See how our wishes celebrate the colors of the world 
And make people smile
like we always wanted
Wish upon a star
For a magical tomorrow
Catch the gleam
in our dreams and tears
The stars so bright
lighting up the darkness
A melody of the unbreakable bond
Let us fulfill our dreams

Things I just can't let go
Filled with so much hope
The dazzling path I 've come
will one day turn into a dream
I couldn't open up to anyon
Counted all the things I couldn't do 
Our passion lights up the footprints of tomorrow
Let me sing to you one more time
See how our wishes celebrate the colors of the world 
And gave life back to what
we once gave up in our hearts
Stars twinkle so brightly
As we reach out our hands
Chasing them, losing them
just to be enchanted again
On a starless night
Cuddling in the dark
Embracing even
the vulnerable side of us
Even the small glow ahead 
Shining in our eyes
Wish upon a star
For a magical tomorrow
Catch the gleam
in our dreams and tears
The stars so bright
lighting up the darkness
A melody of the unbreakable bond
Let us fulfill our dreams
 
That promise we once made

We can make it real`,
        trans_source_en: `YouTube @ぽりふぉ / PolyphonicBranch`,
        lyrics_cn: `
[00:04.26]
彼时的约定

一定能够兑现

心中有了珍视的事物
告诉我这里就是自己的归宿
单凭我一人无法守护的景色
也随着相系的纽带化为希望
曾经不被任何人理解
觉得就这样也没关系
触及灼灼热情而开始融化的孤独
将这无尽的璀璨藏进心中
哎 正如我所想 世界颂扬着斑斓色彩
令我察觉到了
「我也能够为谁带来笑容」
向群星许下愿望
祈愿魔法般的明天
憧憬也好 眼泪也好
看呀 都栖居着光芒
仿佛是找到了辰星般
点亮了墨色黑暗
就将这无法解开的牢固联系谱作旋律
一同前去实现梦想吧

心中有了珍视的事物
竟充满了如此多的希望
织出的轨迹好似闪闪发光
总有一天会幻化成梦想
曾经无法向任何人传达
细数着做不到的种种
而热情照亮向未来的足迹
便想要再一次将歌声传递
哎 正如我所想 世界颂扬着斑斓色彩
心中深处曾放弃掉的种种
再一次赋予其一股生命之息
星光眨眼般闪烁
不禁伸长了手
试着追逐 却渐行渐远
即便如此还是吸引着我
看不见星星的夜晚
就同黑暗相依偎吧
然后也紧紧抱住那个
曾孤独寂寞的自己吧
尽管篝火熹微
自注视火光的眼里映出的……
向群星许下愿望
祈愿魔法般的明天
憧憬也好 泪水也好
看呀 都栖居着光芒
仿佛是找到了辰星般
点亮了墨色黑暗
就将这无法解开的牢固联系谱作旋律
一同前去实现梦想吧

彼时的约定

一定能够兑现
`,
        trans_source_cn: `哔哩哔哩 @Project_SEKAI资讯站 | 由PJS字幕组（翻译：MOwlU 校对：una 时轴：荷之歌）翻译`
    },
    {
        chapter: 4,
        title: 'スーパーヒーロー', artist: 'MORE MORE JUMP！',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 'I9ruCukmnO4', start: 0,
        lyrics: `
            [00:17.18]王様になってみたい 光り輝く指輪をつけたい
            [00:20.31]兵隊になってみたい 何かを本気で守ってみたい
            [00:23.55]スーパーヒーローになってみたい 命を懸けても悪に挑みたい
            [00:27.23]そんなことを妄想してる 僕だけには断じてなりたくない
            [00:30.89]
            [00:31.31]神様になってみたい すべての人の視線を向けたい
            [00:34.72]天才になってみたい みんなの記憶に残ってみたい
            [00:38.04]スーパーヒーローになってみたい 命を懸けても悪に挑みたい
            [00:41.77]そんなことを妄想してる 君だけには断じてなりたくない
            [00:45.37]
            [00:45.57]君だけには断じてなりたくないのさ
            [00:47.81]
            [00:48.07]あぁ なんて君が言うんだ
            [00:50.55]私が本当に愛していたいのは神様なんかじゃない、きっと
            [00:54.90]あぁ そっと君が言うんだ
            [00:57.83]あなたは何を言われてもあなただ
            [01:00.07]だからこのままでいて そう笑っていた
            [01:02.38]
            [01:05.00]Hey！
            [01:08.48]Hey！
            [01:12.09]Hey！
            [01:13.06]
            [01:16.31]放浪者になってみたい あてもない道を歩いてみたい
            [01:19.99]暗殺者になってみたい 嫌な奴みんな消してやりたい
            [01:23.28]スーパーヴィランになってみたい 命を懸けても正に挑みたい
            [01:26.90]そんなことを妄想してる 僕だけには断じてなりたくない
            [01:30.66]
            [01:31.10]神様になってみたい すべての人の視線を向けたい
            [01:34.51]天才になってみたい みんなの記憶に残ってみたい
            [01:37.68]スーパーヒーローになってみたい 命を懸けても悪に挑みたい
            [01:41.39]そんなことを妄想してる 君だけには断じてなりたくない
            [01:45.04]
            [01:45.22]君だけには断じてなりたくないのさ
            [01:47.37]
            [01:47.52]あぁ なんて君が言うんだ
            [01:50.27]私が本当に愛していたいのは神様なんかじゃない、 きっと
            [01:54.50]あぁ そっと君が言うんだ
            [01:57.58]あなたは何を言われてもあなただ
            [01:59.53]だからこのままでいて そう笑っていた
            [02:02.09]
            [02:04.62]Hey！
            [02:08.37]Hey！
            [02:11.97]Hey！`,
        lyrics_rom: `ousama ni natte mitai hikarikagayaku yubiwa wo tsuketai
heitai ni natte mitai nani ka wo honki de mamotte mitai
suupaahiiroo ni natte mitai inochi wo kakete mo aku ni idomitai
sonna koto wo mousou shiteru boku dake ni wa danjite naritaku nai

kamisama ni natte mitai subete no hito no shisen wo muketai
tensai ni natte mitai minna no kioku ni nokotte mitai
suupaahiiroo ni natte mitai inochi wo kakete mo aku ni idomitai
sonna koto wo mousou shiteru kimi dake ni wa danjite naritaku nai

kimi dake ni wa danjite naritaku nai no sa

aa nante kimi ga yuun da
watashi ga hontou ni aishite itai no wa kamisama nanka janai, kitto
aa sotto kimi ga yuun da
anata wa nani wo iwarete mo anata da
dakara kono mama de ite sou waratte ita





hourousha ni natte mitai ate mo nai michi wo aruite mitai
ansatsusha ni natte mitai iya na yatsu minna keshite yaritai
suupaa viran ni natte mitai inochi wo kakete mo sei ni idomitai
sonna koto wo mousou shiteru boku dake ni wa danjite naritaku nai

kamisama ni natte mitai subete no hito no shisen wo muketai
tensai ni natte mitai minna no kioku ni nokotte mitai
suupaahiiroo ni natte mitai inochi wo kakete mo aku ni idomitai
sonna koto wo mousou shiteru kimi dake ni wa danjite naritaku nai

kimi dake ni wa danjite naritaku nai no sa

aa nante kimi ga yuun da
watashi ga hontou ni aishite itai no wa kamisama nanka janai, kitto
aa sotto kimi ga yuun da
anata wa nani wo iwarete mo anata da
dakara kono mama de ite sou waratte ita`,
        lyrics_cn: `我想要成为国王 想要戴著光辉发亮的戒指
我想要成为士兵 想要认真地保护某些事物
我想要成为超级英雄 即使拼尽性命也要向恶挑战
即使尽是妄想著这些事 也绝不想成为如此的我

我想要成为神明 想要受到所有人的关注
我想要成为天才 想要留在所有人的记忆中
我想要成为超级英雄 即使拼尽性命也要向恶挑战
即使尽是妄想著这些事 也绝不想成为如此的你

也绝对不想成为如此的你啊

你到底在说什么啊 我真正想要去爱的
并不是神明、一定
你轻轻地如此说道
无论你怎么说你终究还是你
所以只要保持著原样就好 如此地笑道





我想要成为流浪者 想要漫无目的地走在街上
我想要成为杀手 想要把讨厌的傢伙都抹消掉
我想要成为超级反派 即使拼尽性命也要向正挑战
即使尽是妄想著这些事 也绝不想成为如此的自己

我想要成为神明 想要受到所有人的关注
我想要成为天才 想要留在所有人的记忆中
我想要成为超级英雄 即使拼尽性命也要向恶挑战
即使尽是妄想著这些事 也绝不想成为如此的你

也绝对不想成为如此的你啊

你到底在说什么啊
我真正想要去爱的并不是神明、一定
你轻轻地如此说道
无论你怎么说你终究还是你
所以只要保持著原样就好 如此地笑道
`,
        trans_source_cn: `YouTube @ Guiano | 由Kei翻译`,
        lyrics_en: `I'd like to be a king. I'd like to wear a glittering ring.
I'd like to be a soldier. I'd like to protect something with all my might.
I'd like to be a superhero. I'd like to challenge evil even if my life is at risk.
I'd be anyone but me, someone who fantasises about things like these.

I'd like to be a god. I'd like to turn the heads of every single person.
I'd like to be a genius. I'd like to be remembered by everyone.
I'd like to be a superhero. I'd like to challenge evil even if my life is at risk.
I'd be anyone but you, someone who fantasises about things like these.

Yes, I'd be anyone but you.

Ah, this is how you said it:
"The one whom I'd like to love isn't a god, that's for sure."
Ah, softly, this is what you said:
"It doesn't matter what you tell me, you are still you."
"So, please remain as you are."
And you were smiling.





I'd like to be a wanderer. I'd like to walk a meandering road.
I'd like to be assassin. I'd like to erase all the scum from this world.
I'd like to be supervillain. I'd like to challenge good even if my life is at risk.
I'd be anyone but me, someone who fantasises about things like these.

I'd like to be a god. I'd like to turn the heads of every single person.
I'd like to be a genius. I'd like to be remembered by everyone.
I'd like to be a superhero. I'd like to challenge evil even if my life is at risk.
I'd be anyone but you, someone who fantasises about things like these.

Yes, I'd be anyone but you.

Ah, this is how you said it:
"The one whom I'd like to love isn't a god, that's for sure."
Ah, softly, this is what you said:
"It doesn't matter what you tell me, you are still you."
"So, please remain as you are."
And you were smiling.`,
        trans_source_en: `YouTube @Guiano | Translate by anon`
    },
    {
        chapter: 4,
        title: 'ロミオとジュリエット', artist: 'MORE MORE JUMP!',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 'jKtkVvAq_Kk', strat: 0,
        lyrics: `[00:00.51]私の恋を
[00:03.72]悲劇のジュリエットにしないで
[00:07.13]ここから連れ出して…
[00:11.52]そんな気分よ
[00:13.58]
[00:24.01]パパとママにおやすみなさい
[00:26.74]せいぜい いい夢をみなさい
[00:29.57]大人はもう寝る時間よ
[00:34.51]
[00:35.90]咽返る魅惑のキャラメル
[00:39.05]恥じらいの素足をからめる
[00:41.56]今夜はどこまでいけるの？
[00:45.59]
[00:46.06]噛みつかないで 優しくして
[00:49.03]苦いものはまだ嫌いなの
[00:51.57]ママの作るお菓子ばかり食べたせいね
[00:56.49]
[00:57.39]知らないことがあるのならば
[01:00.67]知りたいと思う 普通でしょ？
[01:03.18]全部見せてよ あなたにならば
[01:06.80]見せてあげる私の…
[01:09.67]
[01:09.87]ずっと恋しくてシンデレラ
[01:13.25]制服だけで駆けていくわ
[01:15.96]魔法よ時間を止めてよ
[01:18.98]悪い人に 邪魔されちゃうわ

[01:21.93]逃げ出したいのジュリエット
[01:23.89]でもその名前で呼ばないで
[01:27.48]そうよね 結ばれなくちゃね
[01:29.79]そうじゃないと楽しくないわ

[01:32.10]ねえ 私と生きてくれる？
[01:37.41]
[01:50.44]背伸びをした長いマスカラ
[01:53.10]いい子になるよきっと明日から
[01:56.57]今だけ私を許して
[02:00.69]
[02:01.77]黒いレースの境界線
[02:04.41]守る人は今日はいません
[02:07.39]越えたらどこまでいけるの？

[02:11.66]噛みつくほどに 痛いほどに
[02:15.04]好きになってたのは私でしょ
[02:17.50]パパはでもねあなたのこと嫌いみたい
[02:23.08]
[02:23.90]私のためと差し出す手に
[02:26.86]握ってるそれは首輪でしょ
[02:29.89]連れ出してよ 私のロミオ
[02:32.60]叱られるほど遠くへ
[02:35.47]
[02:36.93]鐘が鳴り響くシンデレラ
[02:39.18]ガラスの靴は置いていくわ
[02:42.00]だからね 早く見つけてね
[02:44.54]悪い夢に 焦らされちゃうわ

[02:47.75]きっとあの子もそうだった
[02:50.50]落としたなんて嘘をついた
[02:53.26]そうよね 私も同じよ
[02:56.34]だってもっと愛されたいわ

[02:59.77]ほら 私はここにいるよ
[03:04.23]
[03:17.12]私の心そっと覗いてみませんか
[03:22.50]欲しいものだけあふれかえっていませんか
[03:28.15]まだ別腹よもっともっとぎゅっと詰め込んで
[03:33.91]いっそあなたの居場所までも埋めてしまおうか

[03:39.13]でもそれじゃ意味ないの
[03:43.45]
[03:43.97]大きな箱より 小さな
[03:47.27]箱に幸せはあるらしい
[03:49.75]どうしよこのままじゃ私は
[03:52.50]あなたに嫌われちゃうわ

[03:55.63]でも私より欲張りな
[03:57.98]パパとママは今日も変わらず
[04:01.51]そうよね 素直でいいのね
[04:03.75]落としたのは金の斧でした

[04:07.28]嘘つきすぎたシンデレラ
[04:09.66]オオカミに食べられたらしい
[04:13.18]どうしようこのままじゃ私も
[04:15.99]いつかは食べられちゃうわ

[04:18.75]その前に助けに来てね`,
        lyrics_rom: `watashi no koi wo
higeki no jurietto ni shinaide
koko kara tsuredashite...
sonna kibun yo

papa to mama ni oyasuminasai
seizei ii yume wo minasai
otona wa mou neru jikan yo

musekaeru miwaku no kyarameru
hajirai no suashi wo karameru
konya wa doko made ikeru no?

kamitsukanaide yasashiku shite
nigai mono wa mada kirai na no
mama no tsukuru okashi bakari tabeta sei ne

shiranai koto ga aru no naraba
shiritai to omou futsuu deshou?
zenbu misete yo anata ni naraba
misete ageru watashi no...

zutto koishikute shinderera
seifuku dake de kakete iku wa
mahou yo jikan wo tomete yo
warui hito ni jamasarechau wa

nigedashitai no jurietto
demo sono namae de yobanaide
sou yo ne musubarenakucha ne
sou janai to tanoshiku nai wa

nee watashi to ikite kureru?

senobi wo shita nagai masukara
iiko ni naru yo kitto asu kara
ima dake watashi wo yurushite

kuroi reesu no kyoukaisen
mamoru hito wa kyou wa imasen
koetara doko made ikeru no?

kamitsuku hodo ni itai hodo ni
suki ni natteta no wa watashi desho
papa wa demo ne anata no koto kirai mitai

watashi no tame to sashidasu te ni
nigitteru sore wa kubiwa desho
tsuredashite yo watashi no romio
shikarareru hodo tooku e

kane ga narihibiku shinderera
garasu no kutsu wa oite iku wa
dakara ne hayaku mitsukete ne
warui yume ni jirasarechau wa

kitto ano ko mo sou datta
otoshita nante uso wo tsuita
sou yo ne watashi mo onaji yo
datte motto aisaretai wa

hora watashi wa koko ni iru yo

watashi no kokoro sotto nozoite mimasenka
hoshii mono dake afurekaette imasenka
mada betsubara yo motto motto gyuutto tsumekonde
isso anata no ibasho made mo umete shimaouka

demo sore ja imi nai no

ookina hako yori chiisana
hako ni shiawase wa aru rashii
dou shiyo kono mama ja watashi wa
anata ni kirawarechau wa

demo watashi yori yokubari na
papa to mama wa kyou mo kawarazu
sou yo ne sunao de ii no ne
otoshita no wa kin no ono deshita

uso tsukisugita shinderera
ookami ni taberareta rashii
dou shiyou kono mama ja watashi mo
itsuka wa taberarechau wa

sono mae ni tasuke ni kite ne`,
        lyrics_cn: `我的恋爱
不要把它变成悲剧的朱丽叶
把我从这里带走吧……
我就是这种心情

跟爸爸妈妈说晚安
尽量做个好梦吧
大人已经该睡觉了

令人窒息的魅惑焦糖
缠绕着羞怯的裸足
今晚能走到哪里呢？

别咬我，对我温柔点
我还是讨厌苦的东西
都是因为只吃妈妈做的点心

如果有我不知道的事
想知道不是很正常吗？
如果是你，就全都让我看看
我会给你看的，我的……

一直渴望爱情的辛德瑞拉
只穿着制服奔跑而去
魔法啊，把时间停下吧
会被坏人打扰的

想要逃走的朱丽叶
但不要用那个名字叫我
是啊，必须要结合才行呢
不然就不好玩了

呐，你愿意和我一起活下去吗？

踮起脚拉长的睫毛膏
从明天开始我一定会当个乖孩子
只求现在原谅我

黑色蕾丝的界线
今天没有人守护
跨过去的话能走多远？

越是撕咬，越是疼痛
先爱上的人是我吧
不过爸爸好像讨厌你

为我伸出的那只手
握着的却是项圈吧
带我走吧，我的罗密欧
去到那么远会被责骂的地方

钟声回响的辛德瑞拉
水晶鞋我就留下了
所以要快点找到我哦
被噩梦逼得心急

那孩子一定也是这样
说了“我弄丢了”的谎
是啊，我也是一样
因为我想被更多地爱

你看，我就在这里

要不要悄悄看看我的内心？
是不是只装满了想要的东西？
还有另一份胃，再塞多一点吧
干脆连你的容身之处也一起填满吧

可是那样就没有意义了

比起大箱子
幸福好像存在于小盒子里
怎么办，这样下去我会
被你讨厌的

可比我更贪心的
爸爸妈妈今天也依旧如此
是啊，坦率就好了吧
掉下去的是金斧头呢

说谎太多的辛德瑞拉
好像被大灰狼吃掉了
怎么办，这样下去我也
总有一天会被吃掉

在那之前，快来救我吧`,
        trans_source_cn: `WASABISOCUTE`,
        lyrics_en: `Don't turn my love
Into your tragic Juliet
Take me away...
That's how I feel

Tell Mom and Dad goodnight,
Wish them sweet dreams, at least
It's bedtime for grownups

Choking on captivating caramel,
Entwining my bare, bashful legs
How far can we venture tonight?

Don't bite, be gentle,
I still dislike bitter tastes
Having been spoiled on Mom's homemade sweets

When there's something you don't know
It's only natural to want to find out
Show me everything - and just for you,
I'll show you mine, too...

I'm a Cinderella, yearning for you,
I'll come running in my school uniform
Oh magic, please stop the hands of time
Before the villain interferes

I'm a Juliet who wants to run away,
But don't call me by that name
We have to live happily ever after,
Otherwise where's the fun?

Tell me, will you choose life?

I applied a little too much mascara,
But I'll be a good girl when tomorrow comes
So please let me off the hook for now

The boundary line is just this black lace
And there's no one to guard it today, so,
If you cross it, how far are you going to go?

Enough you bite me, enough to make me hurt,
I'm the one you fell in love with, right?
But Dad doesn't seem to like you that much

You say you're holding out your hands for my sake
But isn't that a collar you're holding?
Just take me away, oh my Romeo,
Far enough away that they scold us

The bells are going to sound
And Cinderella has to leave her glass shoe
Obviously, you have to look for her quick,
Or she'll be haunted with nightmares

Definitely, even she did it like that,
She lied when she said she "accidentally" dropped it
That's right, same with me,
Since I want to be loved by you more

Look, I am right here

Won't you peek into my heart?
See how it brims with desires?
I've got room for more, pack my heart until it's full
Until it fills up the place where you are

But what would be the point?

They say that happiness
Comes in small packages
If something doesn't change,
You're going to end up hating me

But Mom and Dad are the same,
They just want more, like always
You're right, I should be honest,
The axe I dropped was one of gold

Cinderella told one too many lies
And got herself swallowed by the wolf
If something doesn't change,
He's going to end up eating me too

Come to my rescue, before it's too late!`,
        trans_source_en: `Vocaloid Lyrics Wiki @Project DIVA F 2nd & marvelangga`,
    },
    {
        chapter: 4,
        title: 'タイムマシン', artist: 'Leo/need',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 's1yW2jPJiVE', start: 0,
        lyrics: `[00:30.35]得意げに呟いた
[00:33.53]心配ないからと
[00:37.12]人の少ないホームで
[00:41.51]ヘタクソに強がった
[00:44.80]
[00:45.20]唐突に鳴り響く
[00:48.67]僕を呼ぶ別れの音
[00:52.49]見慣れたその泣き顔も
[00:56.67]しばらくは見れないね
[01:00.43]
[01:01.10]Ah 声が遮られていく
[01:05.75]身振り手振りで伝える
[01:09.60]「いってらっしゃい」のサイン
[01:14.40]
[01:15.72]少しずつ小さくなってく
[01:20.63]全部置いたまま
[01:24.33]悲しくなんかないさと
[01:28.88]イヤホンで閉じ込めたよ
[01:33.04]
[01:46.40]見えたんだぼんやりと
[01:49.91]暖かい昨日のビジョン
[01:53.63]右と左に広がって
[01:57.88]僕を連れて行くのさ
[02:01.32]
[02:02.56]Ah 僕の横をすり抜けて
[02:07.00]遠ざかっていく景色
[02:10.70]あの日の僕を置いてく
[02:15.76]
[02:17.07]こぼれた涙一滴の
[02:21.44]意味も分からずに
[02:25.16]タイムマシンにゆられて
[02:29.84]明日も元気でいるよ
[02:34.29]
[03:02.93]こぼれた涙一滴の
[03:07.24]意味も分からずに
[03:11.00]タイムマシンにゆられて
[03:15.71]明日も元気で
[03:18.04]
[03:18.29]溢れる涙抑え切れず
[03:22.49]意味も分からずに
[03:26.18]タイムマシンにゆられて
[03:30.81]また戻ってくるよ`,
        lyrics_rom: `tokuige ni tsubuyaita
shinpai nai kara to
hito no sukunai hoomu de
hetakuso ni tsuyogatta

toutotsu ni narihibiku
boku wo yobu wakare no oto
minareta sono nakigao mo
shibaraku wa mirenai ne

Ah koe ga saegirarete yuku
miburiteburi de tsutaeru
"itterasshai" no sain

sukoshizutsu chiisaku natteku
zenbu oita mama
kanashiku nanka nai sa to
iyahon de tojikometa yo

mietanda bonyari to
atatakai kinou no bijon
migi to hidari ni hirogatte
boku wo tsurete yuku no sa

Ah boku no yoko wo surinukete
toozakatte yuku keshiki
ano hi no boku wo oiteku

koboreta namida hitoshizuku no
imi mo wakarazu ni
taimumashin ni yurarete
ashita mo genki de iru yo

koboreta namida hitoshizuku no
imi mo wakarazu ni
taimumashin ni yurarete
ashita mo genki de

afureru namida osaekirezu
imi mo wakarazu ni
taimumashin ni yurarete
mata modotte kuru yo`,
        lyrics_en: `You murmured proudlythat
        you had no worries
You pitifully bluffed in
a place that people rarely pass

The sudden sound of goodbye
that calls me
I guess I can't see the familiar
crying face for some time

Ah, a voice is blocked
and communicating with gestures
The "Come back safely" sign

I threw away all the things
that were getting smaller
I murmured about how I wasn't sad
and put on the earphones

I could see it a little
- the vision of the warm past days
To the right, to the left, it spreads
and takes me with it

Ah, the scenery passes me
and is getting further away
It leaves that day's me behind

Not knowing the meaning
of the one teardrop
I wish that you'll be healthy
and be shaken by the time machine

Not knowing the meaning
of the one teardrop
I wish that you'll be healthy
and be shaken by the time machine

Not able to hold back the overflowing tears
not knowing the meaning
I'll be shaken by the time machine
and come back again`,
        trans_source_en: `YouTube @40meterP | Translate by AnimeLyrics @t12111`,
        trans_source_cn: `YouTube @40meterP`,
        lyrics_cn: `得意扬扬轻声说道
        不用担心我
在旅客稀疏的月台上
笨拙地如此逞强

突然高声响起了
呼唤我的离别声响
连那张司空见惯的落泪表情
也暂时要看不到了呢

声音逐渐被盖去
以手势与动作传达了
「路上小心」这个讯息

就这样抛下一点一滴
逐渐缩小的种种
说出「我才不会感到难过」
而以耳机封闭自己

我看见了那模糊
而洋溢暖意的往日情景
朝著左右扩展延伸
引领著我向前迈进

自我身旁飞逝而过
逐渐远离的景色
丢下那一天的我

对于滑落脸颊的一滴泪珠
也无法理解其箇中意义
随著时光机摇晃而去
明天也要打起精神呢

对于滑落脸颊的一滴泪珠
也无法理解其箇中意义
随著时光机摇晃而去
明天也请打起精神来

止不住不停涌出的眼泪
也无法理解这代表的意义
随著时光机摇晃而去
我还会再回来的`,
    },
    {
        chapter: 4,
        title: '幸福刑', artist: '25時、ナイトコードで。',
        context: '', desc: '',
        date: 'JAN 2026', ytId: 'pWc8oCbtGKc', start: 0,
        lyrics: `
[00:18.79]夢の中でいつも逃げてる間抜けた走り方
[00:25.65]メタでズルい手段で撒いて安堵の息を吐く
[00:32.69]足場がまたひとつ崩れた他を考えなきゃ
[00:39.55]枕元に置いてきた言葉を組み直す
[00:44.09]絡まったのがどの糸なのか探していたら日が暮れて
[00:50.81]暗がりの手元が指を切るだけ
[00:57.72]ただ哀れ哀れ変われません
[01:01.50]あれよあれよ流され終点
[01:05.02]回れ回れ自責の念
[01:08.41]たとえ迷えど光の方へ
[01:11.80]耳へ指へ伝う偽善
[01:15.26]任せ剥がせ雪崩のように
[01:18.59]探せ捜せ目を醒まそうね
[01:22.11]単純化する癖が染み付く前に
[01:25.69]映画みたく全部滅ぶなら何を想えばいい？
[01:32.41]愛が何か誰も解らずなんとなく祈ってる
[01:39.32]帰属意識の果てで二人空しく撫で合う傷
[01:46.24]その場凌ぎの満足感で私腹を肥やした
[01:52.57]絡まったのがどの糸であれ千切ってしまえば楽になれる
[01:59.48]捧げた心はどこへ消えるんだろう
[02:06.27]もう離れ離れ触れません
[02:10.11]それは、それじゃ。あんまりだって
[02:13.56]わたし、形ばかり見て
[02:16.96]人の数だけ美学があるのに
[02:23.55] 
[02:34.11]理解の種をここに蒔いたの
[02:37.56]かつて自ら枯らした知を糧に
[02:40.96]心臓も脳も心じゃないなら
[02:44.35]どうしてこんなに痛むの？
[02:48.06] 
[02:49.21]止まれ止まれ笑えません
[02:52.92]蝶も花も最期は一瞬
[02:56.38]重たい冷たい真夜中に
[02:59.84]ひどく優しく突きつける
[03:02.91]もう意義は、日々は、ひび割れて
[03:06.62]共生どうせ明日も曇天
[03:10.08]軈てその手解けたら？
[03:13.53]いつも思慮はそこで止まる
[03:16.92]ああ、ほらね未だ変われません
[03:20.32]足はいつも地につく方へ
[03:23.84]たとえ何処で迷えども
[03:26.88]考えないと君が正しく在るために
[03:34.16]これはこれは誰のため？
[03:41.14]なにがなにが君のため？
[03:46.45] `,
        lyrics_rom: `yume no naka de itsumo nigeteru manuketa hashirikata
meta de zurui shudan de maite ando no iki wo tsuku
ashiba ga mata hitotsu kuzureta hoka wo kangaenakya
makuramoto ni oite kita kotoba wo kuminaosu
karamatta no ga dono ito na no ka sagashite itara hi ga kurete
kuragari no temoto ga yubi wo kiru dake
tada aware aware kawaremasen
are yo are yo nagasare shuuten
maware maware jiseki no nen
tatoe mayoedo hikari no hou e
mimi e yubi e tsutau gizen
makase hagase nadare no you ni
sagase sagase me wo samasou ne
tanjunka suru kuse ga shimitsuku mae ni
eiga mitaku zenbu horobu nara nani wo omoeba ii?
ai ga nani ka dare mo wakarazu nan to naku inotteru
kizoku ishiki no hate de futari munashiku nadeau kizu
sono bashinogi no manzokukan de shifuku wo koyashita
karamatta no ga dono ito de are chigitte shimaeba raku ni nareru
sasageta kokoro wa doko e kieru ndarou
mou hanarebanare sawaremasen
sore wa, sore ja. anmari datte
watashi, katachi bakari mite
hito no kazu dake bigaku ga aru no ni

rikai no tane wo koko ni maita no
katsute mizukara karashita chi wo kate ni
shinzou mo nou mo kokoro janai nara
doushite konna ni itamu no?

aa tomare tomare waraemasen
chou mo hana mo saigo wa isshun
omotai tsumetai mayonaka ni
hidoku yasashiku tsukitsukeru
mou igi wa, hibi wa, hibiwarete
kyousei douse ashita mo donten
yagate sono te hodoketara?
itsumo shiryo wa soko de tomaru
aa, hora ne imada kawaremasen
ashi wa itsumo chi ni tsuku hou e
tatoe doko de mayoedo mo
kangaenai to kimi ga tadashiku aru tame ni
kore wa kore wa dare no tame?
nani ga nani ga kimi no tame?`,
        lyrics_en: `I'm always fleeing inside of my dreams, running in a ridiculous way
I sneakily escape from my pursuers through meta and cunning means, and release a relieved sigh
My foothold has once again collapsed. I’ve gotta think of another way
I reset the words that I left at the bedside
While I'm trying to figure out which thread is tangled, the sun sets
And in the darkness, I end up only cutting my own finger
It's just so pitiful, so pitiful, I can't change at all!
No way, no way, I'm carried off to my final stop
Turn, turn, my sense of self-condemnation
Even if I get lost, I'll reach towards the light
The hypocrisy trails across your ears, your fingers,
entrust it with me and peel it off, like an avalanche
Look for it, search for it, before I’m deeply stained by a habit of simplifying things,
Open up your eyes, okay?
If everything goes extinct just like in a movie, what should I feel?
What is love? Nobody even understands it, they just pray for it without knowing why
As a result of this sense of belonging, we caress each others’ wounds
I enriched myself with a makeshift feeling of satisfaction  
No matter which thread is tangled, if I tear it off, I can feel better
Where is the heart I offered up disappearing to...?
It’s all scattered now, I can’t feel it at all.
Well then, this is just too cruel
I only see the form
Although there are as many aesthetics as there are people

I planted a seed of understanding here
Nourished by the knowledge that I once withered away.
If neither my heart nor my brain is my soul,
Why am I in so much pain?

Ah, stop it, stop it! I can't smile at all!
Butterflies and flowers both die in an instant
In this weighty and cold dead of night,
I very gently thrust it at you
This meaning has, these days have, developed a crack
Coexistence- at best, tomorrow will be cloudy too
Will our hands be separated before long?
My prudence always stops there
Ugh, look at this! Still now, nothing can change at all!
My legs will always reach towards the ground.
Even if I'm lost somewhere,
I have to think, so that you will be right
Whose, whose, sake is this for?
What will be, what will be good for you?`,
        trans_source_en: `Project SEKAI Fandom Wiki | Translate by Roseofthewind1`,
        lyrics_cn: `梦中的我总是不停奔逃 以这笨拙的姿态
不惜借助盘外招狡猾脱身 才得以安心长舒口气
立足之地又崩塌一处 不得不另寻出路
把遗落在枕边的那些话语 拼凑重组
究竟是哪根线 这般缠缠绕绕 在摸索之间日影逐渐西斜
在昏暗中继续伸手 只会被手边之物伤到手指
只是 真可怜 真可怜 我难以改变
不知又 不觉间 被推向终点
循环吧 循环吧 这自责之念
即便陷入迷茫 也仍心向光芒
向耳畔 向指间 渗入的伪善
随它吧 剥落吧 如雪崩倾塌
探寻吧 找寻吧 快从中苏醒吧
趁简单看待一切的习惯还未深入骨髓
若一切如电影般走向覆灭 我该心怀何念才好？
无人知晓爱为何物 却又莫名为此祈愿
在归属感尽头的两人 徒然轻抚彼此的伤痕
靠着敷衍当下的片刻满足 填满这颗自私的心
不论是哪根线 这般缠缠绕绕
若能尽数狠心扯断便可得以解脱
那颗曾付出的真心究竟消逝在何方
终究破碎 相离 难以再触碰
这一切 若如此 也太过残酷无情
我始终 执念于 表面的模样

可人类本就 千人千面 各有独属的美学
我曾在此埋下理解的种子
以那份曾亲手埋葬的认知当作养分
若心中所念脑海所想皆非真意 为何我还会如此痛彻心扉？

啊啊 停下吧 停下吧 我笑不出来
蝶舞 花开 最终均是昙花一现
在这沉重的 冰冷的 深夜里
以过分的温柔 直逼至眼前
终究 所有意义 与朝夕 都已裂痕遍体
妄言共生 到头来 明日依旧阴云密布
若终有一日 那相牵的手 不再牵系？
这份思虑 每当想到此处 都戛然而止
啊啊 你看啊 我终究 还是难以改变
这双腿 也还是 如灌铅般沉重
即便不知 在何处 深陷迷茫
我也必须加以思索 为了让你活成真正的自己
这一切 这一切 到底是为谁？
该如何 才算是 真正为了你？`,
        trans_source_cn: `哔哩哔哩 @Project_SEKAI资讯站 | 由PJS字幕组（翻译：梦想工厂 校对：寝坊、珞羽子）翻译`
    },
    {
        chapter: 4,
        title: 'Look Through the Sky', artist: '임정은',
        context: '판사 이한영 OST', desc: '',
        date: 'FEB 2026', ytId: 'Gdo3cYK4YKg', start: 0,
        lyrics: `
            [00:02.58]Ooh, woah-oh
            [00:07.62]Ooh, woah-oh
            [00:12.63]Ooh, woah-oh
            [00:18.49]Ooh, woah-oh
            [00:21.44]
            [00:24.96]In the twilight of deceit with a broken heart
            [00:30.50]She dances with the fire
            [00:35.85]To rise from the ashes
            [00:40.54]With every step a memory departed
            [00:44.76]Oh, I've got to stop this sympathy of revenge
            [00:50.22]Can't move with my wounded heart
            [00:56.27]In the echoes of silence
            [00:58.60]And a tempest of fury
            [01:01.02]Don't you remember?
            [01:03.75]The silence of secrets
            [01:07.12]Even when the light is nowhere to be found
            [01:11.98]거짓의 파도 속에서도 난 버텨내 | geojis-ui pado sog-eseodo nan beotyeonae
            [01:17.38]무너진 자리에서 다시 시작해 | muneojin jalieseo dasi sijaghae
            [01:23.06]도망친 진실을 끝까지 찾아 | domangchin jinsil-eul kkeutkkaji chaj-a
            [01:28.01]Look through the sky
            [01:30.28]Ooh, woah-oh
            [01:34.68]Ooh, woah-oh
            [01:40.43]In the rhythm of revenge I confide
            [01:45.33]Like the ones lost in my dream
            [01:50.21]The scars all over me have made it this far, I survived
            [01:55.63]As wounds unhealed, become weapons revealed
            [02:00.57]In the echoes of silence
            [02:03.19]And a tempest of fury
            [02:05.68]Don't you remember?
            [02:08.55]The silence of secrets
            [02:11.64]Even when the light is nowhere to be found
            [02:16.64]거짓의 파도 속에서도 난 버텨내 | geojis-ui pado sog-eseodo nan beotyeonae
            [02:22.08]무너진 자리에서 다시 시작해 | muneojin jalieseo dasi sijaghae
            [02:27.70]도망친 진실을 끝까지 찾아 | domangchin jinsil-eul kkeutkkaji chaj-a
            [02:32.44]Look through the sky
            [02:35.06]Ooh, woah-oh
            [02:38.93]Ooh, woah-oh
            [02:43.71]Look through the sky
            [02:46.04]Ooh, woah-oh
            [02:49.63]Ooh, woah-oh
            [02:54.77]Look through the sky`,
        lyrics_en: `[00:02.58]
            [00:07.62]
            [00:12.63]
            [00:18.49]
            [00:21.44]
            [00:24.96]
            [00:30.50]
            [00:35.85]
            [00:40.54]
            [00:44.76]
            [00:50.22]
            [00:56.27]
            [00:58.60]
            [01:01.02]
            [01:03.75]
            [01:07.12]
            [01:11.98]I hold my ground even amidst the waves of lies
I start over from where everything crumbled
I will hunt down the truth that fled until the very end
            [01:28.01]
            [01:30.28]
            [01:34.68]
            [01:40.43]
            [01:45.33]
            [01:50.21]
            [01:55.63]
            [02:00.57]
            [02:03.19]
            [02:05.68]
            [02:08.55]
            [02:11.64]
            [02:16.64]I hold my ground even amidst the waves of lies
I start over from where everything crumbled
I will hunt down the truth that fled until the very end
            [02:32.44]
            [02:35.06]
            [02:38.93]
            [02:43.71]
            [02:46.04]
            [02:49.63]
            [02:54.77]`,
        trans_source_en: `lyricstranslate.com | Translate by Rahmatjjang`,
        lyrics_cn: `[00:02.58]
            [00:07.62]
            [00:12.63]
            [00:18.49]
            [00:21.44]
            在虚伪的暮色中 
有颗破碎的心
她正与火共舞
从灰烬中升起
回忆随著脚步消散
我得停止对于复仇的同情
受创的心难以前行
无声的迴音中
是场狂烈的风暴
你是否记得
所有秘密的沉默
即使光芒无处可寻
就算在谎言的浪涛中也继续坚持著
要寻找崩塌的真相直到最后
要将这片天看穿
[01:30.28]
[01:34.68]
我在复仇的节奏中倾诉著
就如我梦中迷失的人
我身上布满伤疤
已经走到这一步仍存活著
就像未治癒的伤口
成为被揭露的武器
无声的迴音中
是场狂烈的风暴
你是否记得
所有秘密的沉默
即使光芒无处可寻
就算在谎言的浪涛中也继续坚持著
在崩塌之地重新开始
要寻找逃脱的真相直到最后
要将这片天看穿`,
        trans_source_cn: `痞客邦 @老繭`
    },
    {
        chapter: 4,
        title: 'スター', artist: 'Leo/need',
        context: '', desc: '',
        date: 'FEB 2026', ytId: 'NSAILdVVOg8', start: 0,
        lyrics: `[00:01.30]Lalalalalalala Lalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[00:07.84]Lalalalalalalala Lalalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[00:14.46]Lalalalalalalala Lalalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[00:21.59]光り輝いて見えた世界は
[00:25.15]その何十倍も輝いてた
[00:28.15]｢私､ここで光れるのかな｣って
[00:31.46]たくさんの愛で鳴った音をただ辿って

[00:35.11]いつの間にか変わる景色に
[00:38.50]楽しいって上がったり 苦しいって悩んだり
[00:41.22]いっぱい受け取って 一つ歌にして
[00:44.77]そうやってこんな強くなれたよ

[00:47.72]I need you！こんな 気持ち 初めて味わう
[00:51.54]見ていたものが見られるものに
[00:54.79]一人 なのに 独りじゃない
[00:58.16]波の 上を 歩こう 希望持って どこまでも行こう！
[01:03.50]
[01:04.89]繋がり続けるこのセカイで
[01:08.24]私は救われ 救っていたみたいだ
[01:11.68]絡まって 塞がって 揺れたって 何度も広がって
[01:15.07]"伝わること"ってなんて美しいんだろう

[01:18.26]今はまだちょっとしか見えなくても
[01:21.77]私は息を吸って歩いていく､きっと
[01:25.02]泣いたって 笑ったって 怒ったって 最後は喜んで
[01:28.58]これからの音をまた 紡いでいこう
[01:34.05]
[01:46.14]光り輝いて見えたセカイに
[01:49.44]一つではない たくさんの色が集まった
[01:52.38]何が何だかよくわからなくって
[01:55.30]それが楽しさってやっと気付いたよ

[01:57.97]All you Need is Love こんな気持ち何度でも叫ぶ
[02:02.42]相容れないものも愛せるまでは
[02:05.81]独りから一人になる
[02:09.00]僕も 君も 私も あなたもそうだ さぁ､始めよう！
[02:15.10]
[02:15.97]広がり続けるこの想いで
[02:19.11]私は創られ､創ってたみたいだ
[02:22.45]いつだって どこだって 誰だって 何度も繋がって
[02:25.89]"愛してほしい"ってやっと口にできたよ

[02:29.16]今ある全てを受け取るから
[02:32.55]私の気持ちも受け止めて､ずっと
[02:35.90]吐き出して 抗って 熟れたって 最初を忘れないんだ
[02:39.34]これまでの音と私は 生きていくんだ
[02:44.79]
[02:55.76]このセカイが 私は大好きなだけなのに
[03:02.92]歪んで行く 流れを正す それは難しいことって感じるけれど
[03:09.60]私はあなたと同じように愛している
[03:15.85]この文化 この変化 止まらずに 恥ずかしげもなく 言葉にしよう
[03:24.85]
[03:26.39]独りで生きていた あの世界で
[03:29.73]私は見ていた それだけだった
[03:33.01]何やって 挑んだって 分かんなくて 結局辞めちゃって
[03:36.47]何をするにしても怖くなっていた

[03:39.78]今の景色を見せられるなら
[03:43.03]過去の私にも届くと願って
[03:46.41]泣いてみて 笑ってみて 怒ってみて 気付いた喜びって
[03:49.85]これで私は生きていきたいんだよ！

[03:53.27]輝き続けるこのセカイで
[03:56.42]私は惹かれて光っていたみたいだ
[03:59.83]高鳴った 歌があった 嬉しかった 私達､繋がった
[04:03.30]等しく輝くスターを持っていた

[04:06.68]暗闇で目立つより私は
[04:09.93]世界の真ん中で星になりたい
[04:13.22]大丈夫 忘れないよ 一生だ さあ､歩きだそうか
[04:16.81]これからの音を､また･･･ これまでの音も､ほら･･･

[04:23.53]全てが輝く 「この星のスター」

[04:30.26]Lalalalalalala Lalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[04:36.83]Lalalalalalalala Lalalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[04:43.61]Lalalalalalalala Lalalalalalalalalala Lalalalalalalala Lalalalalalalalalala
[04:50.29]Lalalalalalalala Lalalalalalalalalala Lalalalalalalala Lalalalalalalalalala`,
        lyrics_rom: `[00:01.30]
[00:07.84]
[00:14.46]
hikari kagayaite mieta sekai wa
sono nanjuubai mo kagayaite ita
"watashi, koko de hikarireru no kana" tte
takusan no ai de natta oto wo tada tadotte

itsu no mani ka kawaru keshiki ni
tanoshii tte agattari kurushii tte nayandari
ippai uketotte hitotsuka ni shite
sou yatte konna tsuyoku nareta yo

I need you! konna kimochi hajimete ajiwau
miteita mono ga mirareru mono ni
hitori nano ni hitori janai
nami no ue wo arukou kibou motte doko made mo yukou!

tsunagari tsuzukeru kono sekai de
watashi wa sukuware sukutteita mitai da
karamatte fusagatte yureta tte nando mo hirogatte
"tsutawaru koto" tte nante utsukushii ndarou

ima wa mada chotto shika mienakute mo
watashi wa iki wo sutte aruiteiku, kitto
naitatte warattatte okottatte saigo wa yorokonde
korekara no oto wo mata tsumuide ikou

hikari kagayaite mieta sekai ni
hitotsu de wa nai takusan no iro ga atsumatta
nani ga nandaka yoku wakaranakutte
sore ga tanoshisa tte yatto kizuita yo

All you need is Love konna kimochi nando demo sakebu
aiirenai mono mo aiseru made wa
hitori kara hitori ni naru
boku mo kimi mo watashi mo anata mo sou da saa, hajimeyou! 

hirogari tsuzukeru kono omoi de
watashi wa tsukurare, tsukutteta mitai da
itsudatte doko datte dare datte nandomo tsunagatte
"aishite hoshii" tte yatto kuchi ni dekita yo

ima aru subete wo uketoru kara
watashi no kimochi mo uketomete, zutto
hakidashite aragatte uretatte saisho wo wasurenai nda
kore made no oto to watashi wa ikiteiku nda

kono sekai ga watashi wa daisuki na dake nano ni
yugande yuku nagare wo tadasu sore wa muzukashii koto tte kanjiru, keredo
watashi wa anata to onaji you ni aishiteiru
kono bunka kono henka tomarazu ni hazukashige mo naku kotoba ni shiyou

hitori de ikiteita ano sekai de
watashi wa miteita sore dake datta
nani yatte idonda tte wakannakute kekkyoku yamechatte
nani wo suru ni shite mo kowaku natteita

ima no keshiki wo miserareru nara
kako no watashi ni mo todoku to negatte
naite mite waratte mite okotte mite kizuita yorokobi tte
kore de watashi wa ikite ikitai nda yo!

kagayaki tsuzukeru kono sekai de
watashi wa hikarete hikatteita mitai da
takanatta uta ga atta ureshikatta watashitachi, tsunagatta
hitoshiku kagayaku sutaa wo motteita

kurayami de medatsu yori watashi wa
sekai no mannaka de hoshi ni naritai
daijoubu wasurenai yo isshou da saa, arukidasou ka
korekara no oto wo, mata... kore made no oto mo, hora...

subete ga kagayaku "kono hoshi no sutaa"`,
        lyrics_cn: `[00:01.30]
[00:07.84]
[00:14.46]
目之所及  闪耀着光辉的世界
实则是何止百倍的光芒万丈
“我也能、在此处绽放光芒吗”
只是追寻  满溢着爱的回响

对不知不觉间更迭的景色
时而感到欢喜而雀跃 时而感到痛苦而烦恼
万千思绪  集于一身 谱写出一首歌
于是我得以变得如此坚强

「I need you !」这份心情，还是初次品味
将我眼前所见化作众人所识
虽是独自一人  却从不孤独
在碧波上漫步吧 满怀希望 去向任何地方

在这个世界里  坚持着人与人的连系
我得到救赎，未曾想成为了他人的救赎
交织着 压抑着 纵使动摇 也会无数次在我眼前绽放
“传达”这件事竟何等美妙

如今呈现在眼前的只是些许光芒
我还是会深呼吸，大步前行
哭泣着 欢笑着 愤慨着 最终都将化为喜悦
再继续编织今后的乐章吧

目之所及  在这闪耀着光辉的世界
多种色彩汇聚于此
仍旧对此有些懵懵懂懂
但到了最后发现  这正是乐趣所在

「All you Need is Love」这份心情  无数次呐喊
在能够对互不相容的情感道出爱意之前
只身一人  独自前行
不管是我 是你 是我 还是你 都是这样的啊 来吧，开始吧

在这不断绽放的心愿中
我得到塑造，未曾想成为了创作者
不论何时 不论何地 无关身份 千万次相连。
终于能够说出“请爱我”了啊

我会领会此刻所有
所以希望你今后也愿意接受我的心意
尽情诉说 奋力抗争 纵使成熟 也会铭记初心
我将与迄今积攒的音符一同走下去

我明明是那般深爱着这个世界
就算它逐渐扭曲 我也会拨正洪流 这并非容易之事 但即便如此
我与你怀揣着同一份爱
这类文化 这种变化 永不停息地 毫不羞怯地 化为言语吧

独自一人走来的 那个世界
我只是注视旁观 仅此而已
一次次尝试 一次次挑战 仍然毫无头绪 最终还是放弃
付诸行动的念头都因恐惧告终

若是能将此般风景分享给他人
真想让过去的我也亲眼看看啊
哭泣吧 欢笑吧 愤慨吧 回过神后体会喜悦
于是我又有了活下去的勇气！

在这持续闪耀的世界中
我被深深吸引  未曾想散发出了光芒
“那首歌令我心潮澎湃，真开心啊” “我们，紧紧相连”
拥有着散发同等光辉的STAR

我不要在黑暗中引人注目
我要在世界中央化为明星
放心吧 我不会忘记 用一辈子约定 来吧，该启程了，
将未来的旋律，再次… 连同曾经的乐章，看吧…

一切都是那么耀眼 “在这星间的STAR”`,
        trans_source_cn: `哔哩哔哩 @Project_SEKAI资讯站 | 由PJS字幕组（翻译：啵露 校对：豆子）翻译`,
        lyrics_en: `[00:01.30]
[00:07.84]
[00:14.46]
This world that seemed to glittering brightly,
It was shining dozens of times brighter.
"I wonder if I can shine in this place?"
I say while simply following the sound that ring out with so much love.

Within this scenery that changes while everyone is unaware,
I was elated and happy, then distressed and worried.
Taking all of that in, I put it into a song,
And I became so strong because of that.

"I need you!" I taste such a feeling for the first time.
The things I was seeing are the things I can see.
We're on our own but we are not alone,
Let's walk upon the waves while holding our hopes, and go, no matter where to!

In this SEKAI that continues to be connected to me,
I was saved, it was like it saved me.
Though it is tangled up, blocked, and shaken up, it spreads again and again,
"What we transmit" is so beautiful, don't you think?

Though I still can only see a little ahead in this moment,
I'll take in a breath and walk forward, and I'm sure that
I'll cry, laugh, and get angry, but I'll be satisfied in the end.
Let's continue to create the sound of the future.

In this SEKAI that seems to shine so brightly,
There is not just one color, but multiple gathered together.
I didn't really understand what was going on,
But I finally realized that I had fun.

"All you Need is Love" I shout out such a feeling over and over
Until I can love even the disharmonious things.
From being alone to being on our own,
Me and you and me and you, right, now, let's begin! (Rise up!)

With this thought that continues to expand,
I was made, it was like it created me.
Anytime, anywhere, with anyone, I am connected to them again and again.
I finally managed to voice that "I want you to love me."

Because I take in everything in this moment,
I'll accept my feelings too, all the way,
Though I'll spit it out, go against it and grow up, I won't forget the beginning.
The sound of the past and me will continue to live.

I love this SEKAI so much, yet, the flow is getting distorted 
And correcting it feels like such a difficult thing, but still,
I love them in the same way as you, this culture, this transformation,
So let's put them to words without stopping or any embarrassment.

In this world where I was living alone,
All I was doing was watching.
No matter what I tried, I didn’t get it and ended up quitting,
I felt afraid in everything that I do.

If I can show someone the scenery in this moment,
I wish that it will reach the me in the past;
The joy I found when I try to cry, to laugh and to get angry,
I want to continue living with such a feeling!

In this SEKAI that continues to shine,
I was drawn to that song, seems like it was shining,
That heart-throbbing song makes me so happy; we are connected to each other,
Each of us was holding an equally shining star.

Rather than standing out in the darkness,
I wanna be a star in the center of this world,
So don't worry, I won't forget it in this lifetime, now, let's start walking forward.
The sound of the future, once again... The sound of the past, look...

Everything shines as "the stars of this planet".`,
    },
    {
        chapter: 4,
        title: 'ロストワンの号哭', artist: 'Leo/need',
        context: '', desc: '',
        date: 'FEB 2026', ytId: 'U1aS62Juz70', start: 0,
        lyrics: `[00:28.04]刃渡り数センチの不信感が
[00:30.63]挙げ句の果て静脈を刺しちゃって
[00:33.73]病弱な愛が飛び出すもんで
[00:36.65]レスポールさえも凶器に変えてしまいました
[00:42.60]
[00:44.93]ノーフィクション
[00:48.98]
[00:51.87]数学と理科は好きですが
[00:54.17]国語がどうもダメで嫌いでした
[00:57.08]正しいのがどれか悩んでいりゃ
[01:00.10]どれも不正解というオチでした

[01:03.06]本日の 宿題は 無個性な 僕のこと
[01:06.08]過不足無い 不自由無い 最近に 生きていて
[01:09.15]でもどうして 僕達は 時々に いや毎日
[01:11.94]悲しいって言うんだ 淋しいって言うんだ

[01:14.94]黒板のこの漢字が読めますか
[01:17.73]あの子の心象は読めますか
[01:20.74]その心を黒く染めたのは
[01:23.67]おい誰なんだよ おい誰なんだよ

[01:26.71]そろばんでこの式が解けますか
[01:29.62]あの子の首の輪も解けますか
[01:32.56]僕達このまんまでいいんですか
[01:35.56]おいどうすんだよ もうどうだっていいや
[01:39.02]
[01:50.45]いつまで経ったって僕達は
[01:53.24]ぞんざいな催眠に酔っていて
[01:56.45]どうしようもない位の驕傲を
[01:59.33]ずっと 匿っていたんだ

[02:02.44]昨日の宿題は 相変わらず 解けないや
[02:05.40]過不足無い 不自由無い 最近に生きていて
[02:08.30]でもどうして 僕達の胸元の塊は
[02:11.23]消えたいって言うんだ 死にたいって言うんだ

[02:14.18]黒板のこの漢字が読めますか
[02:17.12]あの子の心象は読めますか
[02:20.11]その心を黒く染めたのは
[02:23.00]おい誰なんだよ おい誰なんだよ

[02:26.02]そろばんでこの式が解けますか
[02:28.89]あの子の首の輪も解けますか
[02:31.92]僕達このまんまでいいんですか
[02:34.83]おいどうすんだよ おいどうすんだよ

[02:37.99]面積比の公式言えますか
[02:40.87]子供の時の夢は言えますか
[02:43.78]その夢すら溝に捨てたのは
[02:46.72]おい誰なんだよ もう知ってんだろ

[02:49.78]いつになりゃ大人になれますか
[02:52.63]そもそも大人とは一体全体何ですか
[02:55.66]どなたに伺えばいいんですか
[02:58.52]おいどうすんだよ もうどうだっていいや`,
        lyrics_rom: `hawatari suusenchi no fushinkan ga
ageku no hate joumyaku wo sashichatte
byoujaku na ai ga tobidasu mon de
resupooru sae mo kyouki ni kaete shimaimashita

noo fikushon

suugaku to rika wa suki desu ga
kokugo ga doumo dame de kirai deshita
tadashii no ga dore ka nayande irya
doremo fuseikai to iu ochi deshita

honjitsu no shukudai wa mukosei na boku no koto
kafusoku nai fujiyuu nai saikin ni ikite ite
demo doushite bokutachi wa tokidoki ni iya mainichi
kanashii tte iun da sabishii tte iun da

kokuban no kono kanji ga yomemasu ka
anoko no shinshou wa yomemasu ka
sono kokoro wo kuroku someta no wa
oi dare nanda yo oi dare nanda yo

soroban de kono shiki ga tokemasu ka
anoko no kubi no wa mo tokemasu ka
bokutachi kono manma de iin desu ka
oi dou sunda yo mou dou datte ii ya

itsumade tatta tte bokutachi wa
zonzai na saimin ni yotte ite
doushiyou mo nai kurai no kyougou wo
zutto kakumatte itan da

sakujitsu no shukudai wa aikawarazu tokenai ya
kafusoku nai fujiyuu nai saikin ni ikite ite
demo doushite bokutachi no munamoto no katamari wa
kietai tte iun da shinitai tte iun da

kokuban no kono kanji ga yomemasu ka
anoko no shinshou wa yomemasu ka
sono kokoro wo kuroku someta no wa
oi dare nanda yo oi dare nanda yo

soroban de kono shiki ga tokemasu ka
anoko no kubi no wa mo tokemasu ka
bokutachi kono manma de iin desu ka
oi dou sunda yo oi dou sunda yo

mensekihi no koushiki iemasu ka
kodomo no toki no yume wa iemasu ka
sono yume sura dobu ni suteta no wa
oi dare nanda yo mou shitten daro

itsu ni narya otona ni naremasu ka
somosomo otona to wa ittai zentai nan desu ka
donata ni ukagaeba iin desu ka
oi dou sunda yo mou dou datte ii ya`,
        trans_source: `YouTube @Neru OFFICIAL`,
        lyrics_cn: `刃长数厘的不可靠感
竭尽全力向静脉刺下
病弱的爱的涌动
将Lespaul都变成了凶器

NO FICTION

虽然喜欢数学和理科
但却因为不擅长而讨厌国语
烦恼着究竟何为正确答案
却全部落得没有一个正确的答案

今天的 作业是 毫无个性的我
适当地 自由地 在最近 生存下去
但又是为何 我们 不是偶尔 而是每天
都诉说着悲伤 咏叹着寂寞呢

能读出黑板上的这汉字吗
能读出那孩子的心声吗
将那心灵染上漆黑的
究竟是谁啊 究竟是谁啊

能用算盘解开这式子吗
也能松开那孩子的项圈吗
我们就这样下去没问题吗
呐，究竟怎样才好啊 已经怎样都无所谓了啊

无论经过多久我们
都沉醉于粗暴的催眠中
一直藏匿着 无法抑制地膨胀的骄傲
会一直
隐藏着
昨天的 作业也 依旧 解不出来啊
适当地 自由地 在最近 生存着
但又是为何 我们 胸中的 部分
在诉说着想要消失 呼喊着想要死去呢

能读出黑板上的这汉字吗
能读出那孩子的心声吗
将那心灵染上漆黑的
究竟是谁啊 究竟是谁啊

能用算盘解开这式子吗
也能松开那孩子的项圈吗
我们就这样下去没问题吗
究竟怎样才好啊 要怎么做才好啊

能答出面积比的公式吗
能说出儿时的梦想吗
连那梦想都丢到脏水沟中的
呐，究竟是谁啊
早就知道了吧

我们究竟何时才能长大啊
说到底大人究竟又是什么啊
要向谁寻求答案才行啊
究竟怎样才好啊
已经都无所谓了
`,
        lyrics_en: `The few centimeters long edge made of distrust,
has finally made its way to pierce through my vein.
As a sentimental love just spurted out,
even my Les Paul has turned into a weapon.

Non-fiction.

I like math and science,
but I am terrible at Japanese because I hate it.
It keeps me wondering which answer is right,
yet it turns out to be wrong either way.

Today my homework is about my quirkless self.
Living these days, there isn't much inconvenience.
Still, why do we sometimes - no, always
Say that we're sad? Say that we're lonely?

Can you read the Kanji on the blackboard?
Can you read what's inside that kid's mind?
And the one who dyed his heart to black,
Hey, who was it? Just who was it?!

Can you solve this equation on the abacus?
Can you untie the rope around his neck?
Is it really fine for us to stay like this?
Hey, what should we do?
Well, it doesn't matter.
All this time we were,
Drunk under this crude hypnotism.
Holding an arrogance that we can't help but
Keep hiding it.
I still can't finish that homework as usual.
Living these days, there isn't much inconvenience.
Still, why do we feel a lump in our hearts
That keeps telling us to disappear, telling us to die?

Can you read the kanji on the blackboard?
Can you read what's inside that kid's mind?
And the one who dyed his heart to black,
Hey, who was it? Just who was it?!

Can you solve this equation on the abacus?
Can you untie the rope around his neck?
Is it really fine for us to stay like this ?
Hey, what should we do? Just what should we do?!

Can you recite the equation for the area ratio?
Can you remember your dreams as a kid?
Somebody dumped those dreams into a ditch,
Hey, who was it?
You already know who!

When will you finally grow up?
Just what is growing up, anyway?
Who could I ask about it?
Hey, what should I do?!
Well, it doesn't matter anymore.
`,
    },
    {
        chapter: 4,
        title: 'リアライズ', artist: 'Vivid BAD SQUAD',
        context: '2026 Opening', desc: '',
        date: 'MAR 2026', ytId: 'uuFNVow4ciw', start: 0,
        ig: 'https://www.instagram.com/reel/DT5YBLHkWky',
        lyrics: `
            [00:14.18]迷い間違い 進めない日々
            [00:20.20]分かっていたつもりだった
            [00:23.36]まだ足りない 対峙 またMISTAKE
            [00:26.98]
            [00:26.98]感じたままでいい 歩き出して
            [00:32.90]少しずつ形にして
            [00:36.09]さあいくよ 調子はどうだい？
            [00:39.79]
            [00:39.99]CLAP!反響して 響く超低音
            [00:43.19]揺るがぬ想い 重ね合わせて
            [00:46.35]襲うプレッシャーと壁押し退け
            [00:49.24]光追いかけた
            [00:52.22]
            [00:52.22]届かないような 未来だって
            [00:55.52]何度でも手を伸ばそう
            [00:58.84]憧ればかりじゃ終われないから
            [01:04.84]
            [01:05.05]悔しい気持ち 忘れないで
            [01:08.29]前を向いたら
            [01:10.76]奇跡を塗り替える
            [01:12.73]鮮やかなセカイを 描いていくんだ
            [01:18.33]
            [01:19.84]ああ 積み重ねは本当の意志
            [01:25.74]繰り返した試行錯誤
            [01:28.99]「まだいける」と上を目指して
            [01:32.46]
            [01:32.56]熱い眼差し 本気の路(みち)
            [01:38.50]シンクロした感覚の位相
            [01:41.66]さあいこう 幕は上がった
            [01:45.45]
            [01:45.55]FLASH!反射して 響く超高音
            [01:48.78]弾ける鼓動 重ね合わせて
            [01:51.99]止まぬ歓声とステージが照らす
            [01:54.74]期待追いかけた
            [01:57.82]
            [01:57.82]苦しい時もあるけれど
            [02:01.16]君を待つ人がいる
            [02:04.32]だからそう声が枯れる時まで
            [02:10.50]
            [02:10.70]悔しい気持ち 忘れないで
            [02:13.96]前を向いたら
            [02:16.35]奇跡を塗り替える
            [02:18.35]鮮やかなセカイを 描いていくんだ
            [02:26.01]`,
        lyrics_rom: `mayoi machigai susumenai hibi
wakatte ita tsumori datta
mada tarinai taiji mata MISTAKE

kanjita mama de ii arukidashite
sukoshizutsu katachi ni shite
saa iku yo choushi wa dou dai?

CLAP! hankyou shite hibiku chou teion
yuruganu omoi kasaneawasete
osou puresshaa to kabe oshinoke
hikari oikaketa

todokanai you na mirai datte
nando demo te wo nobasou
akogare bakari ja owarenai kara

kuyashii kimochi wasurenaide
mae wo muitara
kiseki wo nurikaeru
azayaka na sekai wo egaite ikunda

aa tsumikasane wa hontou no ishi
kurikaeshita shikousakugo
"mada ikeru" to ue wo mezashite

atsui manazashi honki no michi
shinkuro shita kankaku no isou
saa ikou maku wa agatta

FLASH! hansha shite hibiku chou kouon
hajikeru kodou kasaneawasete
yamanu kansei to suteeji ga terasu
kitai oikaketa

kurushii toki mo aru keredo
kimi wo matsu hito ga iru
dakara sou koe ga kareru toki made

kuyashii kimochi wasurenaide
mae wo muitara
kiseki wo nurikaeru
azayaka na sekai wo egaite ikunda`,
        lyrics_en: `I waver and slip-up, in these days where I feel like I'm not making any progress,
Even though I meant to learn my lesson
I haven't had enough of these battlesーah, another mistake

It's okay if you first set off by following your feelings,
Little by little, things will start to take shape
So come, let's go! How're you doing?

Clap! Let these deep bass notes resound and reverberate
Bringing together our unwavering feelings
Fighting back against pressure, and pushing aside obstacles,
We chased after the light

 It seems like we'll never be able to reach the future,
But even so, we'll stretch our hands out again and again
We won't let this end as a mere ideal!

Don't forget these feelings of frustration,
If we look ahead
We'll be able to repaint a miracle,
Drawing out a vivid, bright world!

Ah, these true, pure wills gather together;
We tried and failed again and again,
Saying, "I can still keep going!" while aiming higher.

Passionate gazes, a path we're serious about;
Our senses are perfectly in sync,
So come, let's go, the curtain’s risen!

Flash! Let these high notes resound and reverberate.
Illuminating the unending cheers and the stage,
Bringing together our bursting hearts,
We chased after hopes and expectations.

There's going to be times when it’s tough,
But there are people out there, waiting for you,
So that's why, until your voice withers awayー

Don't forget these feelings of frustration,
If we look ahead,
We'll be able to repaint a miracle,
Drawing out a vivid, bright world!`,
        trans_source_en: `Project SEKAI Fandom Wiki | Translate by Shiru`,
        lyrics_cn: `迷惘错误　无法前进的日子
我以为我已经了若指掌了呢
我尚未得到满足　对峙　再次MISTAKE

就这么随着感觉　迈开脚步
并一点点地成形吧
来吧　前进吧　你的状况怎么样呢？

CLAP！反响吧　响彻四周的超低音
将不可动摇的想法　交叠起来吧
抵挡袭来的压力和障碍
并前去追赶光芒吧

即使是　像是无法触及的未来
也让我们好几次地伸出手吧
因为只靠憧憬的话可无法结束一切的啊

请你别忘了　后悔的心情
当你面朝前方时
便前去描绘出
涂改奇迹的　鲜艳世界吧

啊啊　层层积累起的是真实的心意
不断重复的反复试验
说着「我还能行」并以上方为目标吧

充满热情的眼神　真实之路
同步的感觉拓扑
来　让我们前进吧　布幕已经拉起

FLASH！反射吧　响彻四周的超高音
重叠起　彼此绷开的心跳吧
照亮不会停止的欢声与舞台
并前去追赶期待吧

有时候或许会有困难
但也有人在等待着你
所以　在你的声音嘶哑之前

请你别忘了　后悔的心情
当你面朝前方时
便前去描绘出
涂改奇迹的　鲜艳世界吧`,
        trans_source_cn: `巴哈姆特 @月勳`,

    },
    {
        chapter: 4,
        title: 'ぼかろころしあむ', artist: 'DIVELA',
        context: '', desc: '',
        date: 'MAR 2026', ytId: '5kIeUb5AE4s',
        ig: 'https://www.instagram.com/reel/DWI1GGwkROR',
        lyrics: `
            [00:18.25]さぁさぁやって参りました
            [00:19.92]悪い仔 粛清のお時間
            [00:22.03]代替 宛の無い機械
            [00:23.64]彩れませんでした
            [00:25.39]
            [00:25.43]クラクラ果実 散弾銃
            [00:27.39]微二倍 苦い終末
            [00:29.44]大体正の関連性
            [00:31.07]次の方はどうぞ
            [00:32.95]
            [00:32.96]錆びた刃
            [00:36.82]褐色のエーアイ
            [00:40.48]逃走 感情
            [00:44.21]コメントアウト
            [00:47.89]
            [00:47.90]ざんざん ぎゃりぎゃり
            [00:48.89]ばるばるーらる
            [00:49.66]だんだん ばばば
            [00:50.64]わいわいだ ぱーりー
            [00:51.61]いたい いたい
            [00:52.06]あははは
            [00:52.46]あつい あついだろ
            [00:53.49]かいたい かいたい
            [00:54.35]ゆめのせかいへ！
            [00:55.29]ざんざん ぎゃりぎゃり
            [00:56.20]ばるばるーらる
            [00:57.16]ばんばん ががが
            [00:57.94]いえいいえいだ ぱーりー
            [00:58.96]いたい いたい
            [00:59.43]あわれだ
            [00:59.93]にがい にがいから
            [01:00.81]げきたい げきたい
            [01:01.74]あこがれのちへ！
            [01:02.60]
            [01:02.61]三乗 勘定 疲労度 凍結
            [01:04.56]段々幅が迫りくんだ
            [01:06.37]限界 刻々 土台 不整脈
            [01:08.20]段々逃げる道も無いんだ
            [01:10.07]三秒 完答 死闘の口角
            [01:11.92]段々幅は迫りくんだ
            [01:13.75]幻煙 黙々 古代の勢力
            [01:15.62]段々逃げる道も無いんだ
            [01:17.38]
            [01:19.16]さぁさぁやって参りました
            [01:20.81]生存思考の再戦
            [01:22.90]電源なんて在りません
            [01:24.53]只唱う已です
            [01:26.29]
            [01:26.33]フラフラ果実 三連勝
            [01:28.31]微四倍 苦い終末
            [01:30.31]ゲージは残り僅かです
            [01:31.96]次の方はどうぞ
            [01:33.92]
            [01:33.97]怪物達は祈りました
            [01:35.68]哀れな惨状の聖杯
            [01:37.70]真っ赤に成った黒歴史
            [01:39.31]焼き憑いたが最後の再葬
            [01:41.35]
            [01:41.37]来襲 愛終 無限 無気力
            [01:43.35]楽観 達観 偽善 センシズム
            [01:45.22]案外 感慨深い
            [01:46.38]そんなコロシアム
            [01:48.34]
            [01:48.87]ざんざん ぎゃりぎゃり
            [01:49.77]ばるばるーらる
            [01:50.69]だんだん ばばば
            [01:51.45]わいわいだ ぱーりー
            [01:52.49]いたい いたい
            [01:52.99]あははは
            [01:53.39]あつい あついだろ
            [01:54.40]かいたい かいたい
            [01:55.29]ゆめのせかいへ！
            [01:56.21]ざんざん ぎゃりぎゃり
            [01:57.13]ばるばるーらる
            [01:58.07]ばんばん ががが
            [01:58.91]いえいいえいだ ぱーりー
            [01:59.86]いたい いたい
            [02:00.36]あわれだ
            [02:00.84]にがい にがいから
            [02:01.75]さいしゅーへーきで
            [02:02.67]あこがれのちへ！
            [02:03.62]
            [02:03.63]ざんざん ぎゃりぎゃり
            [02:04.50]ばるばるーらる
            [02:05.45]だんだん ばばば
            [02:06.30]わいわいだ ぱーりー
            [02:07.29]いたい いたい
            [02:07.82]あははは
            [02:08.26]あつい あついだろ
            [02:09.21]かいたい かいたい
            [02:10.07]ゆめのせかいへ！
            [02:10.97]さんざん ぎゃくさん
            [02:11.88]こたえ さがせよ
            [02:12.84]かんたん ぼくが
            [02:13.68]うぃんうぃんだ ぱーりー
            [02:14.65]きたい きたい
            [02:15.13]はるかな
            [02:15.60]みらい みらいから
            [02:16.49]さいかい さいかい
            [02:17.43]あのかたのちへ！
            [02:18.54]`,
        lyrics_rom: `saa saa yattemairimashita
warui ko shukusei no ojikan
daitai ate no nai kikai
irodoremasen deshita

kurakura kajitsu sandan juu
horonibai nigai shuumatsu
daitai sei no kanrensei
tsugi no kata wa douzo

sabita yaiba
kasshoku no eeai
tousou kanjou
komentoauto

zanzan gyarigyari
baru baruuraru
dandan bababa
waiwaida paarii
itai itai
ahahaha
atsui atsui daro
kaitai kaitai
yume no sekai e!
zanzan gyarigyari
baru baruuraru
banban ga ga ga
iei iei da paarii
itai itai
aware da
nigai nigai kara
gekitai gekitai
akogare no chi e

sanjou kanjou hiroudo touketsu
dandan haba wa semarikunda
genkai kokukoku dodai fuseimyaku
dandan nigeru michi mo nain da
sanbyou kantou shitou no koukaku
dandan haba wa semari kunda
gen'en mokumoku kodai no seiryoku
dandan nigeru michi mo nain da

saa saa yattemairimashita
seizon shikou no saisen
dengen nante arimasen
tada utau nomi desu

furafura kajitsu san renshou
hono yon bai nigai shuumatsu
geeji wa nokori wazuka desu
tsugi no kata wa douzo

kaibutsutachi wa inorimashita
awarena sanjou no seihai
makka ni natta kuro rekishi
yaki tsuitaga saigo no saisou

raishuu ai shuu mugen mukiryoku
rakkan takkan gizen senshizumu
angai kangaibukai
sonna koroshiamu

zanzan gyarigyari
baru baruuraru
dandan bababa
waiwaida paarii
itai itai
ahahaha
atsui atsui daro
kaitai kaitai
yume no sekai e
zanzan gyarigyari
baru baruuraru
banban ga ga ga
iei iei da paarii
itai itai
awareda
nigai nigai kara
saishuu heeki de
akogare no chi e

zanzan gyarigyari
baru baruuraru
dandan bababa
waiwai da paarii
itai itai
ahahaha
atsui atsui daro
kaitai kaitai
yume no sekai e
sanzan gyaku san
kotae sagase yo
kantan boku ga
winwinda paarii
kitai kitai
haruka na
mirai mirai kara
saikai saikai
ano kata no chi e`,
        trans_source_cn: `YouTube @DIVELA / Official | Translate by 89`,
        lyrics_cn: `
来来让我们热烈欢迎
坏崽子 被肃清的时间
替代 无处可寻的机器
未能施以点缀

晕晕沉沉果实 散弹枪
微二倍 味苦的结局
大体 为正的相关性
有请下一位吧

生锈的刀
褐色的AI
逃走  感情
注释排除

哗啦哗啦 嘎吱嘎吱
叭噜叭噜-啦噜
渐渐 叭叭叭
尽情喧闹的 派对
好痛 好痛
啊哈哈哈
很热 很热对吧
解体 解体
前往梦之世界！
哗啦哗啦 嘎吱嘎吱
叭噜叭噜-啦噜
砰砰 嘎嘎嘎
欢声耶耶的 派对
好痛 好痛
真是可怜
很苦 很苦所以
击退 击退
前往憧憬之地！

三乘 结算 疲劳值 冻结
渐渐 空隙逐步缩小
极限 紧逼 根基 心律不齐
渐渐 退路也终将消失
三秒 答对 死斗的嘴角
渐渐 空隙逐步缩小
幻烟 默默 古代的势力
渐渐 退路也终将消失

来来让我们热烈欢迎
生存思考的再战
电源之类并不存在
只知吟唱不断

摇摇晃晃果实 三连胜
微四倍 味苦的结局
血条已所剩无几
有请下一位吧

怪物们献上了祈愿
惨不忍睹的圣杯
变得通红的黑历史
如此烧刻便是最后的再葬

来袭 爱终 无限 颓废无力
乐观 达观 伪善 感觉论
意外地 感慨万分
这样的竞技场

哗啦哗啦 嘎吱嘎吱
叭噜叭噜-啦噜
渐渐 叭叭叭
尽情喧闹的 派对
好痛 好痛
啊哈哈哈
很热 很热对吧
解体 解体
前往梦之世界！

哗啦哗啦 嘎吱嘎吱
叭噜叭噜-啦噜
砰砰 嘎嘎嘎
欢声耶耶的 派对
好痛 好痛
真是可怜很苦 很苦所以
凭藉最终兵器
前往憧憬之地！

哗啦哗啦 嘎吱嘎吱
叭噜叭噜-啦噜
渐渐 叭叭叭
尽情喧闹的 派对
好痛 好痛
啊哈哈哈
很热 很热对吧
解体 解体
前往梦之世界！
尽情 倒算
寻找 答案吧
简单 这是我
双赢的 派对
期待 期待
从遥远的
未来 未来去
再会 再会
前往那人所在之地！`,
        trans_source_en: `Vocaloid Lyrics Wiki | Translate by Hiraethie`,
        lyrics_en: `Now, now, here I come
Time to purge every bad kid there is
The alternative, aimless machine
couldn’t be adorned

A fruit that makes you giddy, a shotgun
A just about twice as bitter end
Most of it expresses a positive correlation
Next person, if you please

A rusted blade
a dark brown A.I.
Desert those emotions
comment it out

Drip, drop, crunch, krrunch
Rip, bang, slash!
Bam, bam! Swoosh, swish, fwoosh!
How clamorous the party is
It hurts, it hurts
Ahahaha
It’s hot, it’s hot, isn’t it?
Demolish them, take them apart!
To the world of dreams they go!
Drip, drop, crunch, krrunch
Rip, bang, slash!
Bam, bam! Pow, wham, bang!
Yay, yay! It’s a party!
It hurts, it hurts
How pitiful
Since it’s bitter, so bitter
Drive them, drive them all back
To the place they yearned for they go!

Calculating to the third power, my level of fatigue’s not going down
Little by little, it’s closing in on me
The base of my limit is getting irregular by the hour
Little by little, even the way out disappears
I complete the answer in 3 seconds, the quirk of a smile during a deathmatch
Little by little, it’s closing in on me
Smoke and mirrors as all is silent; the might of the ancient times
Little by little, even the way out disappears

Now, now, here I come
A rematch full of survival instincts
With nothing powering it,
It does nothing but chant out loud

A fruit that makes you waver, I’ve won three times in a row
A just about quadruple as bitter end
I’ve only got a little bit left according to my gauge
Next person, if you please

The monsters all prayed for
the holy grail of a miserable catastrophe
The dark past that’s now turned bright red
Was scorched (possessed) by the heat, reburied in its final moments

Invade, love no more, an eternal apathy
Optimism, philosophic, hypocrisy, sensism
Surprisingly, our emotions run deep
Such is this colosseum

Drip, drop, crunch, krrunch
Rip, bang, slash!
Bam, bam! Swoosh, swish, fwoosh!
How clamorous the party is
It hurts, it hurts
Ahahaha
It’s hot, it’s hot, isn’t it?
Demolish them, take them apart!
To the world of dreams they go!

Drip, drop, crunch, krrunch
Rip, bang, slash!
Bam, bam! Pow, wham, bang!
Yay, yay! It’s a party!
It hurts, it hurts
How pitiful Since it’s bitter, so bitter
With my ultimate weapon,
To the place they yearned for they go!

Drip, drop, crunch, krrunch
Rip, bang, slash!
Bam, bam! Swoosh, swish, fwoosh!
How clamorous the party is
It hurts, it hurts
Ahahaha
It’s hot, it’s hot, isn’t it?
Demolish them, take them apart!
To the world of dreams they go!
Completely reversing it all
Seek the answer
So simple, I’ve
Won, won! Party time!
My expectations and hopes
Come from
Far, far away in the future
We meet, meet once again
To that person’s place we go!`
    },
    {
        chapter: 4,
        title: 'ららら', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'MAR 2026', ytId: '4sKjn3ryB14', start: 0,
        ig: '',
        lyrics: `
            [00:16.63]君の詩を書いていた 気づく訳もないのさ
            [00:20.45]「歌詞を聞かない」人でしょ？
            [00:24.64]追いかけることすら 諦めようと黄昏
            [00:28.60]いつの間にか青患いの僕さ
            [00:32.16]さよならの先に歪な雨ひとつ
            [00:39.67]花散らしていく 僕の桜雨
            [00:44.11]放課後の君は確信犯だ
            [00:48.48]枯れていく心を焦がして
            [00:51.95]踏み込めない明日は 全部春のせいかな
            [01:00.01]
            [01:12.61]古いメロディを歌った 覚えてる訳もないんだ
            [01:16.53]「消費するだけ」の人でしょ？
            [01:20.61]4月は大嫌いだ この香り 僕の心を
            [01:24.67]急かし騙し君想起させる
            [01:28.19]青春環状線に乗って 追いつけないままぐるぐると
            [01:33.39]あれ、今何周回ってる？
            [01:35.79]らら楽な人生を羨んでる
            [01:40.12]今日も僕はただの観測者さ
            [01:44.33]来世でさ楽しめばいいや
            [01:47.98]人生単位の事しか 考えるの辞めた
            [01:54.25]この世の正しさ毎
            [01:57.64]誤魔化して、ららら歌って
            [02:00.40]苦な人生は何かのせいにして
            [02:03.99]僕のこんな歌も 全部春のせいかな
            [02:10.62]`,
        lyrics_rom: `kimi no uta o kaite ita kizuku wake mo nai no sa
"kashi o kikanai" hito desho?
oikakeru koto sura akirameyou to tasogare
itsu no ma ni ka ao wazurai no boku sa
sayonara no saki ni ibitsu na ame hitotsu
hana chirashite iku boku no sakura ame
houkago no kimi wa kakushinhan da
karete iku kokoro o kogashite
fumikomenai ashita wa zenbu haru no sei kana

furui merodi o utatta oboeteru wake mo nai nda
"shouhi suru dake" no hito desho?
shigatsu wa daikirai da kono kaori boku no kokoro o
sekashi damashi kimi o omoidasa seru
seishun kanjousen ni notte oitsukenai mama guruguru to
are, ima nanshuu mawatteru?
rara raku na jinsei o urayanderu
kyou mo boku wa tada no kansokusha sa
raisei de sa tanoshimeba ii ya
jinsei tan'i no koto shika kangaeru no yameta
kono yo no tadashisa goto
gomakashite rarara utatte
kuna jinsei wa nanika no sei ni shite
boku no konna uta mo zenbu haru no sei kana
`,
        lyrics_en: `I'm writing a song about you, but you won't even notice.
Because you're the type of person who doesn't listen to lyrics, right?
I've decided to give up chasing you, resigned to my fate, and now I'm watching the sky grow dark.
Unknowingly, I've caught the anxieties and pains of adolescence.
Following our farewell, only tears were left behind
Scattering petals, my cherry blossom rain.
You after school are a deliberate offender.
Burning away my withering heart,
are all the tomorrows I can't step into, a fault of spring?

I sing the melodies of before,but you wouldn't even remember.
You're just someone who "consumes," right?
I truly despise April. This fragrance agitates my heart,
betrays it, and conjures your image in my mind.
The endless cycle of youth, I chase it in vain, going around and around.
Oh, how many times have I gone through this already?
Envy fills me as I watch lives lived with ease.
Today, I am just an observer.
I will enjoy life to the fullest in my next life.
I no longer cling to the things of this world.
Cover up all the justice in this world with lies.
La la la, I sing.
attribute the painful life to some cause.
This song of mine must also be the fault of spring, right?`,
        lyrics_cn: `我正在写你的歌，而你一定不会注意到。
因为你是个“不听歌词”的人，不是吗？
我决定无奈地放弃追逐你，然后看着天色渐渐昏暗
不知不觉中，我染上了青春期的烦恼和痛苦
告别之后，只剩下了眼泪
花瓣飘落，我的樱花雨
放课后的你，是深谋熟虑的犯人
灼烧着逐渐枯萎的心，
迈不进的明天，一定是春天的错吧？

我唱着以前的旋律，但你根本不会记得
你不过是“消费”的人, 对吧？
四月真让人讨厌 这气味让我心急、
被欺骗、让你的身影浮现在心头
青春的环线，追逐不去，徒然打转
哎呀，已经转了多少圈了？
羡慕着轻松的人生，
今天我只是一个旁观者
来世再好好享受吧。
我不再执着于今世的事情了
把这个世上的所有正义
都蒙混过去啦啦啦地歌唱
痛苦的人生就归咎于某种原因
我的这首歌，也一定是春天的错吧？`,
        trans_source: `YouTube @ナナツカゼ`
    },
    {
        chapter: 4,
        title: '林檎売りの泡沫少女', artist: 'Leo/need',
        context: '', desc: '',
        date: 'MAR 2026', ytId: 'Ixhe_D7mIIg', start: 0,
        lyrics: `
            [00:19.00]遠い遠い時の果て
            [00:22.20]そこに住まう人は皆
            [00:25.44]永遠の命をもつ
            [00:28.63]世界での話
            [00:31.82]
            [00:32.64]赤い実の成る木の下
            [00:35.79]La La Lu La 生まれながらに
            [00:38.91]死の呪いがかけられた
            [00:42.11]少女の話
            [00:45.67]
            [00:53.91]色付いた街外れ 蒼く光る湖畔 赤い実のお菓子屋
            [01:02.78]ちょっぴり寒くなった今日は妙に誇らしげ 自信作を売りにゆく
            [01:10.44]待ってて 今度こそ 美味しいんだから
            [01:16.51]
            [01:19.62]時計塔の見える市 驚いた
            [01:22.15]珍しく賑やかね La La Lu La Lucky!!
            [01:28.05]物憂げな街の隅 ひとり
            [01:30.52]赤い実のパイどうですか 自信作なの
            [01:35.45]そんなのひとつも売れないさ 少女を見て蔑む人達
            [01:42.66]みんなと何も変わらないのに 美味しくできたのに
            [01:50.14]今日も声は届かないのね
            [01:54.35]まるで透明になったみたいだわ
            [01:58.61]そうして誰もが知らぬ振りをした
            [02:02.75]何故なら少女は呪われているから
            [02:07.16]死んだ世界で唯ひとり生きていた少女の話
            [02:14.82]
            [02:23.04]夜なべでアレンジパイと にっこりスマイル引っ提げ
            [02:26.77]少女はまだ諦めない
            [02:31.04]時計塔の針も空を指して お腹も鳴るそんな時
            [02:37.04]ふと後ろから人が
            [02:40.46]少女を押す 甘い籠は落ちる
            [02:46.33]お菓子を踏み行く人達 平気な顔してさ
            [02:52.69]惨めに拾い集める
            [02:56.20]ふともうひとりの手が
            [02:59.36]どろどろのパイを徐に口に入れて 「おいしいね」
            [03:07.37]その声で心は溢れた
            [03:11.53]まるで輪郭を描いたみたいだわ
            [03:15.87]そうして彼は手を差し出した
            [03:20.05]何故なら少女に呪われているから
            [03:24.37]死んだ世界で唯ふたり生きていた遠い物語
            [03:34.24]
            [03:45.00]街の人達は哀れむ
            [03:47.87]赤い実を食べて呪われた者を
            [03:50.92]永遠に生きられずに死ぬのさ嗚呼
            [03:55.76]なんて可哀想な話
            [04:02.05]ふたりは笑う それでも笑う
            [04:08.17]La La La とっても素敵な呪いね
            [04:14.51]例え明日死んでも 『今』が確かで大切になるから
            [04:26.65]
            [04:28.43]もう声は届かないのね
            [04:32.82]まるで透明になったみたいだわ
            [04:37.15]そうして誰もが知らぬ振りをした
            [04:41.27]何故なら世界が呪われているから
            [04:45.38]
            [04:47.16]『永遠』の呪いは解かれていた
            [04:51.40]まるでふたりの方が狂ったみたいだろう
            [04:55.74]そうしていつか笑うように眠る
            [04:59.94]何故ならふたりは放たれているから
            [05:04.34]死んだ世界で唯ふたりだけが幸せだった`,
        lyrics_rom: `tooi tooi toki no hate
soko ni sumau hito wa minna
eien no inochi wo motsu
sekai de no hanashi

akai mi no naru ki no shita
La La Lu La umarenagara ni
shi no noroi ga kakerareta
shoujo no hanashi

irozuita machihazure aoku hikaru kohan akai mi no okashiya
choppiri samuku natta kyou wa myou ni hokorashige jishinsaku wo uri ni yuku
mattete kondo koso oishii ndakara

tokeitou no mieru ichi odoroita
mezurashiku nigiyaka ne La La Lu La Lucky!!
monouge na machi no sumi hitori
akai mi no pai dou desu ka jishinsaku nano
sonna no hitotsu mo urenai sa shoujo wo mite sagesumu hitotachi
minna to nani mo kawaranai no ni oishiku dekita no ni
kyou mo koe wa todokanai no ne
marude toumei ni natta mitai da wa
soushite daremo ga shiranu furi wo shita
nazenara shoujo wa norowarete iru kara
shinda sekai de tada hitori ikite ita shoujo no hanashi

yonabe de arenji pai to nikkori sumairu hissage
shoujo wa mada akiramenai
tokeitou no hari mo sora wo sashite onaka wo naru sonna toki
futo ushiro kara hito ga
shoujo wo osu amai kago wa ochiru
okashi wo fumi yuku hitotachi heiki na kao shite sa
mijime ni hiroiatsumeru
futo mou hitori no te ga
dorodoro no pai wo omomuro ni kuchi ni irete "oishii ne"
sono koe de kokoro wa afureta
marude rinkaku wo egaita mitai da wa
soushite kare wa te wo sashidashita
nazenara shoujo ni norowarete iru kara
shinda sekai de tada futari ikite ita tooi monogatari

machi no hitotachi wa awaremu
akai mi wo tabete norowareta mono wo
eien ni ikirarezu ni shinu no sa aa
nante kawaisou na hanashi
futari wa warau soredemo warau
La La La tottemo suteki na noroi ne
tatoe ashita shinde mo "ima" ga tashika de taisetsu ni naru kara

mou koe wa todokanai no ne
marude toumei ni natta mitai da wa
soushite daremo ga shiranu furi wo shita
nazenara sekai ga norowarete iru kara

"eien" no noroi wa tokarete ita
marude futari no hou ga kurutta mitai darou
soushite itsuka warau you ni nemuru
nazenara futari wa hanatarete iru kara
shinda sekai de tada futari dake ga shiawase datta`,
        lyrics_en: `This is a tale
At the far ends of time,
In a place where people
Have eternal life...

This is a tale of a girl
La la lu la, born under a tree bearing red fruit,
Who was thus cursed
With the fate of death...

On the colored outskirts, by a sparkling blue lake, there was a bakery of red fruit
Feeling unusually proud on this chilly day, the girl went to sell her confections
This'll be the day, you'll see - they're very tasty...

She found the city of the clock tower
To be unusually busy; la la lu la lucky!!
Alone in the gloomy corners of town;
How about some red-fruit pie? I made it myself!
But not a single one would sell; the people scorned the girl
But I'm no different from you all... And they're so delicious...
Once again, my voice falls short;
It's as if I'm simply invisible...
Such is how everyone feigned ignorance,
Because the girl was cursed...
A tale of a dead world, where only one girl lived...

That night, she prepared assorted pies and a big smile;
The girl would not yet give up
Even the clock hands pointed skyward, and as her stomach rumbled...
Suddenly, she was pushed from behind,
Her sweet basket fell to the ground
People trampled her confections without even a care...
Miserably she gathered them,
When another hand reached out;
He gently put a muddled pie in his mouth - "It's delicious..."
His words made my heart overflow,
As if he'd given me a place for it to fill...
Such is how he reached out to her,
Because the girl had cursed him...
A distant story of a dead world, where only two lived...

The townspeople pitied them;
Those who were cursed by the red fruit
Would not live forever, but die instead... Ah,
What a tragic tale...
But the two laughed, yes, they laughed still
La la la - It's such a wonderful curse
Even if we die tomorrow, we can easily treasure the "now"...

I suppose my voice will always fall short;
It's as if I'm simply invisible...
Such is how everyone feigned ignorance,
Because the world was cursed...,

Having been rid of the curse of "eternity,"
It must have seemed they were the ones gone mad...
And so they slept, intending to smile,
Because the two had been freed...
In that dead world, two alone were happy...`,
        trans_source_en: `Project SEKAI Fandom Wiki | Translate by vgperson`,
        lyrics_cn: `这是在很久很久以后
        在时间的终点
所有人都得到永生的
世界发生的故事

结下红色果实的树木下
La La Lu La 欢快诞生下
同时被施加死的诅咒的
少女的故事

林荫翠绿的郊外，波光粼粼的湖畔，红色果实的甜点屋
稍微有点冷的今天，少女特别有自信，因为要上街卖杰作甜点
等著喔，这次真的，很好吃唷

少女为能望见钟塔的市内感到惊讶
难得这么热闹 La La Lu La Lucky!!
在阴郁的街角，一个人喊著
「来个红色果实的派如何呢？是我的杰作喔」
「那种东西一个都卖不出去啦」人们看著少女轻蔑的说
『大家真是都不会变呢，明明这么好吃的』少女心想
今天，声音仍传达不到呢
彷彿变成透明一样
所有人都视而不见
要说为什么，那是因为少女被诅咒了
这是在死去的世界唯一活著的少女的故事

趁著晚上调整了派，弯起嘴角作出微笑
少女还没有放弃
钟塔的指针指向天空，肚子好像也要发出声时
有人从背后
推了少女一把，香甜的提篮掉落在地
踩过甜点的人们，全都不当一回事
悽惨的少女捡起派
眼前却出现另一只手
将黏糊糊的派一口一口送入口中，「很好吃呢」少年说
那声音满足了少女的心
彷彿描绘出了轮廓一般
少年对少女伸出了手
要说为什么，那是因为少年被少女诅咒了
这是在死去的世界唯二活著的遥远的故事

镇上的人为少年悲叹
「吃下红色果实受诅咒的人
将无法活到永远迎来死亡啊」
啊啊这究竟是多么可怜的故事
两人笑著，即使如此仍笑著
La La La 这该是多美好的诅咒呀
倘若明天就会迎来死亡，那势必就会更珍惜『现在』

声音已经传达不到了呢
彷彿变成透明一样
所有人都视而不见
要说为什么，那是因为世界被诅咒了

『永远』的诅咒被解开了
彷彿两人才是不正常的一边一样
某日将带著笑容陷入沉眠
要说为什么，那是因为两人被放逐了
是在死去的世界唯二得到幸福的两人`,
        trans_source_cn: `巴哈姆特 @星櫻`,
    },
    {
        chapter: 4,
        title: 'needLe', artist: 'Leo/need',
        context: '', desc: '',
        date: 'MAR 2026', ytId: 'yaTU-vstAIc', start: 0,
        lyrics: `
            [00:01.87]取り戻したい ヒーローみたいに
            [00:04.65]苦笑いバイバイはもういいよ
            [00:07.24]泣くときは教えてよ絶対
            [00:10.57]
            [00:23.56]冗談も上手に笑えない
            [00:28.04]嫌ってるみたいだった 傷付けちゃった
            [00:33.20]妄想もマイナスばかりで
            [00:38.09]構わないでほしかった 君もそうだった
            [00:42.87]
            [00:43.09]大丈夫 飲み込んだ夢も
            [00:46.37]大丈夫 抱え込んだ夢も
            [00:48.96]期待も後悔も 全部吐き出そう
            [00:52.58]
            [00:53.14]繋げよう 断線したストーリー
            [00:55.62]進めよう ワンテンポ日常に
            [00:58.11]君を刺すその針は 私が奪ってあげるから
            [01:03.04]
            [01:03.29]取り戻したい ヒーローみたいに
            [01:05.70]苦笑いバイバイはもういいよ
            [01:08.28]泣くときは教えてよ絶対
            [01:11.56]
            [01:11.79]どうだっていい存在じゃない
            [01:14.36]簡単に愛は終わらないよ
            [01:17.23]離れ離れも 揺れる想いも
            [01:19.41]答えを聞かせて
            [01:21.69]
            [01:22.16]もう一度奏でていこう
            [01:24.36]なんだって歌うよ 君が笑うなら
            [01:27.57]すれ違う前のセカイまで
            [01:31.47]
            [01:39.50]本当に求めた答えはない
            [01:43.97]凹んでは仕舞い込んだ 繰り返していた
            [01:49.11]「どうだっていい」も本音じゃない
            [01:54.03]誰かの”必要”だって 確かめたかった
            [01:58.45]
            [01:59.11]大丈夫 私はひとりだ
            [02:01.91]大丈夫 みんなもひとりだ
            [02:04.65]笑って もう一度 やり直せるよね
            [02:08.28]
            [02:08.69]繋げよう 断線したストーリー
            [02:11.26]進めよう ワンテンポ日常に
            [02:13.69]君を刺すその針は 私が奪ってあげるから
            [02:18.59]
            [02:18.96]取り戻したい ヒーローみたいに
            [02:21.26]苦笑いバイバイはもういいよ
            [02:23.78]泣くときは教えてよ絶対
            [02:27.04]
            [02:43.88]繋げよう 断線したストーリー
            [02:46.53]進めよう ワンテンポ日常に
            [02:49.06]君を刺すその針は 私が奪ってあげるから
            [02:53.78]
            [02:54.27]取り戻したい ヒーローみたいに
            [02:56.66]苦笑いバイバイはもういいよ
            [02:59.22]泣くときは教えてよ絶対
            [03:02.50]
            [03:02.92]どうだっていい存在じゃない
            [03:05.17]簡単に愛は終わらないよ
            [03:07.99]離れ離れも 揺れる想いも  
            [03:11.98]答えを聞かせて
            [03:12.92]
            [03:13.14]もう一度奏でていこう
            [03:15.30]なんだって歌うよ 君が笑うなら
            [03:18.82]すれ違う前のセカイまで
            [03:22.24]
            [03:31.26]すれ違う前のセカイまで`,
        lyrics_rom: `torimodoshitai hiiroo mitai ni
nigawarai baibai wa mou ii yo
naku toki wa oshiete yo zettai

joudan mo joozu ni waraenai
kiratteru mitai datta kizutsuke chatta
mousou mo mainasu bakari de
kamawanaide hoshikatta kimi mo soudatta

daijoubu nomikonda yume mo
daijoubu kakaekonda yume mo
kitai mo koukai mo zenbu hakidasou

tsunageyou dansen shita sutoorii
susumeyou wantenpo nichijou ni
kimi wo sasu sono hari wa watashi ga ubatte ageru kara

torimodoshitai hiiroo mitai ni
nigawarai baibai wa mou ii yo
naku toki wa oshiete yo zettai

dou datte ii sonzai janai
kantan ni ai wa owaranai yo
hanarebanare mo yureruomoi mo
kotae wo kikasete

mou ichido kanadete ikou
nandatte utau yo kimi ga warau nara
surechigau mae no sekai made

hontou ni motometa kotae wa nai
hekonde wa shimaikonda kurikaeshite ita
"dou datte ii" mo honne ja nai
dareka no "hitsuyou" datte tashikametakatta

daijoubu watashi wa hitori da
daijoubu minna mo hitori da
waratte mou ichido yarinaoseru yo ne

tsunageyou dansen shita sutoorii
susumeyou wantenpo nichijou ni
kimi wo sasu sono hari wa watashi ga ubatte ageru kara

torimodoshitai hiiroo mitai ni
nigawarai baibai wa mou ii yo
naku toki wa oshiete yo zettai

tsunageyou dansen shita sutoorii
susumeyou wantenpo nichijou ni
kimi wo sasu sono hari wa watashi ga ubatte ageru kara

torimodoshitai hiiroo mitai ni
nigawarai baibai wa mou ii yo
naku toki wa oshiete yo zettai

dou datte ii sonzai janai
kantan ni ai wa owaranai yo
hanarebanare mo yureru omoi mo
kotae wo kikasete

mou ichido kanadete ikou
nandatte utau yo kimi ga warau nara
surechigau mae no sekai made

surechigau mae no sekai made`,
        lyrics_en: `I want to go back to how it was, like a hero
Please, no more forced smiled bye-byes
Make sure to let me know when you are about to cry

Can’t even laugh at jokes
I acted as if I hated you and hurt you
All my thoughts were negative
I wanted you to leave me alone, I guess you were the same

It’s ok, even the dreams you gave up
It’s ok, even the dreams you hid away
Let out all your hopes and regrets

Let’s reconnect the disconnected stories
Let’s take a step towards are everyday lives
I will take out the needLes that stab you

I want to go back to how it was, like a hero
Please, no more forced smiled bye-byes
Make sure to let me know when you are about to cry

You do matter
Love doesn’t end that easily
Let’s stop drifting apart, please talk to me about your wavering thoughts
And let me know your answer

Let’s make our sound again
I’ll sing anything if it makes you laugh
Let’s go back to the world “SEKAI” before us drifting apart

This is not the today that I was searching for
Getting hurt and hiding it away was on repeat
“You don’t matter” isn’t what I was really thinking
I just wanted to make sure I was needed

It’s ok, I’m alone
It’s ok, we are all alone
We can laugh and start over, can’t we?

Let’s reconnect the disconnected stories
Let’s take a step towards are everyday lives
I will take out the needLes that stab you

I want to go back to how it was, like a hero
Please, no more forced smiled bye-byes
Make sure to let me know when you are about to cry

Let’s reconnect the disconnected stories
Let’s take a step towards are everyday lives
I will take out the needLes that stab you

I want to go back to how it was, like a hero
Please, no more forced smiled bye-byes
Make sure to let me know when you are about to cry

You do matter
Love doesn’t end that easily
Let’s stop drifting apart, please talk to me about your wavering thoughts
And let me know your answer

Let’s make our sound again
I’ll sing anything if it makes you laugh
Let’s go back to the world “SEKAI” before us drifting apart

Let’s go back to the world “SEKAI” before us drifting apart
`,
        trans_source_en: ` YouTube @DECO*27`,
        lyrics_cn: `我想如英雄般　恢复到从前
不要再苦笑著说再见了
要哭的时候一定要告诉我哦

玩笑我也不能好好笑出来
像是讨厌你一般　结果伤害到了你
妄想也都是负面的
只希望你不要管我　你应该也是如此

没关系　你嚥下去的梦想
没关系　你藏起来的梦想
期待与后悔　全都倾吐出来吧

连接吧　将那中断的故事
前进吧　在一如往常的日常中
刺中你的那根针　我会夺走的

我想如英雄般　恢复到从前
不要再苦笑著说再见了
要哭的时候一定要告诉我哦

你并非怎样都好的存在
爱并不会轻易终结的
纵使四散　纵使思绪动摇
也请告诉我你的答案

再一次奏响吧
只要你能露出笑容　无论什麽我都会唱出
直至我们错过之前的那个世界

真正寻求的答案并不存在
便失落著藏于心中　如此反复
「怎样都好」也并非真心话
只想确认　我是否是某人的”必要”

没关系　我是独自一人
没关系　大家都是独自一人
还是可以　笑著　再从头做起的吧

连接吧　将那中断的故事
前进吧　在一如往常的日常中
刺中你的那根针　我会夺走的

我想如英雄般　恢复到从前
不要再苦笑著说再见了
要哭的时候一定要告诉我哦

连接吧　将那中断的故事
前进吧　在一如往常的日常中
刺中你的那根针　我会夺走的

我想如英雄般　恢复到从前
不要再苦笑著说再见了
要哭的时候一定要告诉我哦

你并非怎样都好的存在
爱并不会轻易终结的
纵使四散　纵使思绪动摇
也请告诉我你的答案

再一次奏响吧
只要你能露出笑容　无论什麽我都会唱出
直至我们错过之前的那个世界

直至我们错过之前的那个世界`,
        trans_source_cn: `巴哈姆特 @弓野篤禎`
    },
    {
        chapter: 4,
        title: '青さは止んだ', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'APR 2026', ytId: '6zs2FqEW3AM', start: 0,
        ig: '',
        lyrics: `
            [00:13.316] ああポイ捨てが多い
            [00:15.80] 社会で僕は塵と思い
            [00:18.45] 自分から塵箱に入ろうとする
            [00:23.766] それを誰も止めないから
            [00:26.433] 本当に本当の塵のように
            [00:28.95] 腐っていく腐っていく
            [00:34.36]
            [00:45.30] 明日がある保証なんて
            [00:48.416] どこにもないのにさ
            [00:50.40] 遠い未来の話ばかり
            [00:53.15] 美化しようとする
            [00:55.80] それは今を生きられずに
            [00:58.466] どっちもどっち
            [00:59.816] 選べなくて
            [01:00.95] 彷徨っていく
            [01:03.616] さあ迷っていく
            [01:06.583] 死ぬことより生きてることに
            [01:11.866] 怯えてんだ
            [01:14.283] もううんざりだ
            [01:17.266] なんだったって僕は弱くて
            [01:19.866] 不甲斐なくて出来損ない
            [01:22.466] 大人で気づいたって遅い
            [01:24.833] 遅いんだよ青さは止んだ
            [01:27.90] 今日だって味のしないガムを
            [01:30.65] 噛んで誤魔化す
            [01:31.80] 感情ばかりが
            [01:33.60] 募って厭って
            [01:36.60] 僕を蝕んでいくんだ
            [01:39.73]
            [01:41.30] 「はい元気です」なんて
            [01:43.816] 前ならえだけがうまくなって
            [01:46.683] 上辺だらけの健康観察
            [01:49.616] 疲れたんだよねそういう圧
            [01:52.316] みんなと違うことしちゃ駄目です
            [01:54.983] みんなと違うことしなきゃ駄目です
            [01:56.60] え？
            [01:56.883] 言ってたことと違うじゃん
            [01:59.383] 「世の中そんなもんだよ、多分」
            [02:03.05]
            [02:23.95] 何だって僕は弱くて
            [02:29.166] 大人で気づいてしまって
            [02:34.316] でもどうやったって
            [02:35.766] SOSすらも出せない世の中だから
            [02:40.833] ここで歌って誤魔化した
            [02:45.266] なんだったってこの世界は
            [02:47.816] 都合良くって平等じゃない
            [02:50.466] 子どもで気付いたって
            [02:52.833] 知らない知らないフリ青さを食んだ
            [02:55.90] 今日だって味のしない日々を
            [02:58.65] 噛んで残った
            [02:59.80] 苦味ばかりを
            [03:01.816] 嫌って 放って
            [03:04.566] 僕は変わらないままだ
            [03:07.23]
            [03:10.40] このままでいんだ
`,
        lyrics_rom: `aa poisute ga ooi
shakai de boku wa gomi to omoi
jibun kara gomibako ni hairou to suru
sore o dare mo tomenai kara
hontou ni hontou no gomi no you ni
kusatte iku kusatte iku

ashita ga aru hoshou nante
doko ni mo nai no ni sa
tooi mirai no hanashi bakari
bika shiyou to suru
sore wa ima o ikirarezu ni
docchi mo dotchi
erabenakute
samayotte iku
saa mayotte iku
shinu koto yori ikiteru koto ni
obietenda
mou unzari da
nandattatte boku wa yowakute
fugainakute dekisokonai
otona de kidzuitatte osoi
osonda yo aosa wa yanda
kyou datte aji no shinai gamu o
kande gomakasu
kanjou bakari ga
tsunotte itotte
boku o mushibande ikunda

"hai genki desu" nante
mae narae dake ga umaku natte
uwabe darake no kenkou kansatsu
tsukaretanda yo ne sou iu atsu
minna to chigau koto shicha dame desu
minna to chigau koto shinakya dame desu
e
itteta koto to chigau jan
"yononaka sonna mon da yo, tabun"

nandattatte boku wa yowakute
otona de kidzuite shimatte
demo dou yattatte
esu-oo-esu sura mo dasenai yononaka dakara
koko de utatte gomakashita
nandattatte kono sekai wa
tsugou yokutte byoudou janai
kodomo de kidzuitatte shiranai
shiranai furi aosa o handa
kyou datte aji no shinai hibi o
kande nokotta
nigami bakari o
kiratte houtte
boku wa kawaranai mama da

kono mama de inda`,
        lyrics_en: `Ah, what filth litters this world
In this wretched society I am but dust
So I cast myself into the dustbin where I belong
And none shall stay my hand
Then in the truest sense I am dust
I rot and rot

There’s no guarantee
That tomorrow shall come
Yet we speak only of
some distant, polished future
For we cannot live in the now
Neither here nor there
Suspended
I drift on 
Oh, I lose my way
More than dying,
I fear the living
and I am so weary of it all
Whatever the reason
I was always weak and worthless
Realizing it only in adulthood
Too late, my youth is gone
I gnaw upon tasteless gum
day upon day to mask
my disgusting emotions
that pile and curdle slowly into loathing
They eat away at me

“I’m fine,” I say
Grown accustomed to falling in line
Cursory health checks everywhere
The pressure wears me down
You must not stray from the crowd
You must distinguish yourself from the crowd
What?
That’s not what you said before
“Such is the nature of this world, I suppose”

Whatever the reason
I am a feeble thing, and I knew it too late
However can I be
In a world where even an SOS goes unheard
Now I sing to shake it loose
Whatever the reason 
This world was never fair nor kind
The truth was in front of me since childhood
Yet I looked away, chewing on what youth remained
However may I digest these tasteless days
chewing and chewing
till nothing remains but bitterness
I hate it, I spit it out
yet I stay the same

It’s okay to stay this way`,
        lyrics_cn: `啊 这社会满是随意丢弃的杂物
我自觉不过是粒微尘
竟想主动藏进纸篓中
即便如此也无人伸手阻拦
我就如同真的的尘埃一般
渐渐腐朽 渐渐腐朽

明明何处都无法寻到
明天会到来的保证
却偏要一个劲地美化
虚无缥缈的遥远未来
只因无法好好活在当下
无论是哪边都半斤八两
迟迟无法抉择
逐渐陷入彷徨
逐渐陷入迷惘
比起死亡
我更加害怕活着
我已经受够了
无论怎样我都还是这般软弱
碌碌无为一事无成
直到长大后才幡然醒悟
但为时已晚 青春已然逝去
就算是如今也只是嚼着早已无味的口香糖
从而掩饰自我
唯有情绪在不断的
愈演愈烈令人厌烦
一点点将我侵蚀

嘴上说着“我非常好”
却只是熟练了随波逐流
但都是浮于表面的"健康观察"
这些压力让我身心俱疲
不能「做」跟别人相同的事
不能「不做」跟别人相同的事
哎？
跟之前说的不一样啊
"这世道本就如此吧 也许"

无论怎样我都还是这般软弱
直到长大后才幡然醒悟
可无论我如何努力
在这个连SOS都发不出的世道
只好在这里用唱歌蒙混过关
不管怎样这个世界
也都只顾着自己不顾公平
哪怕孩提时代就已察觉
也只能装作一无所知任由青春被蚕食
今天也咀嚼着索然无味的日子
品尝着残留下来的
满口苦涩
满心厌弃又置之不理
我依旧一成不变

就这样也挺好`,
        trans_source: `YouTube @ナナツカゼ`,
    },
    {
        chapter: 4,
        title: 'Ready Steady', artist: 'Giga',
        context: 'Foon Yew Archive', desc: 'the SUFFER accident',
        date: 'APR 2026', ytId: 'XAg1jDDG49Y', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTYwNjA5MTY4NDI5OTEz?story_media_id=3872077968886066424_63008808258&igsh=MXJxOWgwODFmbmhpbA==',
        lyrics: `
            [00:09.56]ローリスクじゃ物足りなくなっちゃったし
            [00:14.67]有り余って笑っちゃうくらい
            [00:18.17]なんも無いなんて言ったってしょうがないし
            [00:22.96]お手上げでHi-Five
            [00:25.66]
            [00:25.67]前ならえで後に続いたってつまんねえ
            [00:30.76]夢を語れ、追え！が この街のStandard
            [00:35.10]ただ見てたいだけ なんてのは嘘です
            [00:39.17]そろそろマイク頂戴
            [00:42.85]
            [00:42.86]どうせならもう後戻りもできないくらい どうにかさせて
            [00:51.60]まだまだハマっていきたい
            [00:53.57]なんか、まるで恋してるみたい
            [00:55.95]好きになっちゃったぁ つってさ
            [00:58.88]
            [00:58.89]ならこのまま キミを連れて
            [01:03.59]望むなら どこまでも
            [01:08.11]＆ I Wanna 欲しがってばかりで結構 結構
            [01:15.27]もし叶うならこの先の世界を知りたい 行きたい
            [01:24.40]Ready Steady
            [01:25.45]
            [01:41.20]ちょっとだけなら無茶だってしちゃいたいし
            [01:46.00]この世の全て奪っちゃうくらい
            [01:49.52]とはいえ語ってばっかじゃどうしようもないし
            [01:54.40]語尾跳ねてHi-Fi
            [01:56.82]
            [01:56.83]ねえ少しはこっち向いたらどう
            [01:59.61]気まぐれにハマらせたいだけ？
            [02:02.13]でも奪いたい震わせたい 目、耳、キミの燃えるheart
            [02:06.14]誰もが羨む驚異のTrackとLyricで
            [02:10.12]魅せていくからRetakeはしないで
            [02:13.99]
            [02:14.00]だからこのまま キミを連れて
            [02:18.93]望むなら どこへでも
            [02:22.91]＆ I Wanna 無いものねだるなら決行 決行
            [02:30.82]
            [02:30.83]早く夜よ明けて 朝焼けに誓え
            [02:36.83]重い想い、 熱量を叫べ
            [02:40.30]この声を聴け 音・音・音に、踊り狂え
            [02:47.50]
            [02:47.51]I want more.
            [02:51.98]“Are you Ready？”
            [02:56.13]
            [02:56.14]ならこのまま キミを連れて
            [03:00.81]望むなら どこへでも
            [03:05.89]＆ I Wanna 欲しがってばかりで結構 結構
            [03:12.83]もし叶うならこの先の世界を知りたい 行きたい
            [03:21.99]Ready Steady`,
        lyrics_rom: `rou risuku ja mono tarina kunacchatta shi
ariamatte waracchau kurai
nani mo nai nante ittatte shouganai shi
oteage de Hi-Five

mae nara e de ato ni tsuzuitate tsumanne
yume wo katare, oe! ga kono machi no Standard
tada mitetai dake nante no wa uso desu
sorosoro maiku choudai

douse nara mou atomodori mo dekinai kurai dounika sasete
madamada hamatte ikitai
nani ka, marude koi shiteru mitai
suki ni nacchatta tsutte sa

nara kono mama kimi wo tsurete
nozomu nara doko made mo
& I Wanna hoshigatte bakari de kekkou kekkou
moshi kanau nara kono saki no sekai wo shiritai ikitai


chotto dake nara mucha datte shichaitai shi
kono yo no subete ubacchau kurai
to wa ie katatte bakka ja doushiyou mo nai shi
gobi hanete Hi-Fi

nee sukoshi wa kocchi muitara dou
kimagure ni hamarasetai dake?
demo ubaitai furuwasetai me, mimi, kimi no moeru heart
daremo ga urayamu kyoui no Track to Lyric de
misete iku kara Retake wa shinaide

dakara kono mama kimi wo tsurete
nozomu nara doko e demo
& I Wanna nai mono nedaru nara kekkou kekkou

hayaku yoru yo akete asayake ni chikae
omoi omoi, netsuryou wo sakebe
kono koe wo kike oto oto oto ni, odori kurue




nara kono mama kimi wo tsurete
nozomu nara doko made mo
& I Wanna hoshigatte bakari de kekkou kekkou
moshi kanau nara kono saki no sekai wo shiritai ikitai
`,
        lyrics_en: `Low risk's just not enough for me anymore
There's so much left in me that I could laugh
There's no point in saying I've got nothing
Throw your hands up and give me a Hi-Five

It's boring to just fall in line and follow behind someone
Declare your dreams and chase them! That's this town's standard
I lied when I said I just want to keep watching
It's about time, give me the mic

Since I'm already here, let me do something I won't even be able to take back
I want to keep getting deeper into this
Somehow, I feel like I'm in a romance
I've fallen in love with this, or so I say

Then let me take you with me just like this
Wherever you want, if that's what you wish
& I Wanna—I've had enough with just wanting, I'm done, so done
If it’s possible, I want to know about and walk into the world beyond this
Ready Steady

Well, if it's just a little bit, then sure, I wanna be reckless
Like I'm about to steal everything in this world
Still, nothing's going to happen if I just keep talking
So I'll drop the end of the word and go Hi-Fi

Hey, why don't you look this way a little?
Do you just wanna get me addicted on a whim?
But I want to steal, I want to move your eyes, ears and your fiery heart
With this amazing Track and Lyric that will be the envy of the world
I'll bewitch you, so don't do a Retake

That's why I'll take you with me just like this
Wherever you want, if that's what you wish
＆ I Wanna—If we're gonna ask for the impossible, then sure, let's go, let's go

Oh, let the night end quickly, take a pledge at first light
Shout out your heavy feelings and your energy
Listen to my voice, and at each sound—sound—sound, dance in ecstasy

I want more.
"Are you Ready?"

Then let me take you with me just like this
Wherever you want, if that's what you wish
& I Wanna—I've had enough with just wanting, I'm done, so done
If it's possible, I want to know about and walk into the world beyond this
Ready Steady`,
        trans_source_en: `Project SEKAI Fandom Wiki | Translate by Azayaka`,
        lyrics_cn: `光是只有低风险的话就变得不足够
像是过剩而使人发笑
即使说出「什么都没有」这种话也让人感到了无奈
将手举起Hi-Five

即使向前看齐并且跟著他人身后行走也十分无趣
讲述梦想、追逐！是　这个街道的Standard
「我只是想看看而已」　之类的话不过是种谎言
差不多该给我麦克风了

反正也已经无法再回头了　所以让我弥补一下吧
我还想沉迷其中
总觉得、我好像坠入了爱河一样
「变得喜欢起来啦」　什么的

那么我将就这么　带走你
如果你盼望的话　我愿带著你到天涯海角
＆ I Wanna　总是贪婪无厌已经足够　足够
如果会实现的话我想了解这个前方的世界　我想就此前往
Ready Steady

如果只是稍微一下的话我也想乱来
像是要掠夺这个世界的所有一切
话说回来光是只会侃侃而谈也无可奈何
词尾跳跃吧Hi-Fi

呐稍微面向这里的话怎么样
你只是想要让我著迷并且感到心血来潮而已？
但是我想夺走　我想让你发抖　眼睛、耳朵、你燃烧著的heart
我将以无论是谁都会羡慕的惊奇Track和Lyric
魅惑你　所以请你不要Retake

所以我将就这么　带走你
如果你盼望的话　我愿带著你到天涯海角
＆ I Wanna　如果你贪婪著没有的东西的话我便会坚决进行　坚决进行

夜晚啊请快点亮起　向朝霞发誓吧
沉重的想法、大叫著热量
倾听我的声音吧　在声音之中・声音之中・声音之中、尽情狂舞

我想要更多。
“你准备好了吗？”

那么我将就这么　带走你
如果你盼望的话　我愿带著你到天涯海角
＆ I Wanna　总是贪婪无厌已经足够　足够
如果会实现的话我想了解这个前方的世界　我想就此前往
Ready Steady`,
        trans_source_cn: `巴哈姆特 @月勳`

    },
    {
        chapter: 4,
        title: 'Beyond the way', artist: 'Giga',
        context: 'In-zone exploration', desc: 'Toppen ACG Fest 2026',
        date: 'APR 2026', ytId: 'SJcgOWsDwi4', start: 0,
        ig: '',
        lyrics: `
            [00:01.65]息つまるばかりで 温ぬるい退屈な夜道で
            [00:07.83](mellow mellow mellow)
            [00:09.31]ルールは無視で行きたいね
            [00:14.80]So burn my burn my heart
            [00:16.98]
            [00:17.18](uh...) 悟られそう (uh...) 可か不可 Get down now
            [00:24.71](uh...) あーあ もうきっと優等ぶった
            [00:30.16]'I'じゃ居られないくらい どうしようもない
            [00:32.54]
            [00:32.72]yuh 無理目のクエスチョン ha 実存？ フィクション？
            [00:36.53]You make me サゲなの何で？ I know the way
            [00:39.88]願ってるばっかじゃ叶わない めちゃくちゃにされたって変わらない
            [00:43.59]まあね 喰らえ 覚醒 Find the way
            [00:46.89]
            [00:47.71]待ってライトあびる感覚 甘い罠
            [00:51.14]見当違い disも聞き飽きたわ
            [00:55.07]そりゃねいけるところまで Take me higher
            [00:58.84]どう？ Turning back 無理ってとっくに分かってんでしょ
            [01:02.83]
            [01:02.86](uh...) 悟られそう (uh...) 可か不可 Get down now
            [01:10.63](uh...) あーあ もうずっとしゃんと居られないや
            [01:16.27]それは誰のせい？
            [01:18.27]
            [01:18.41]終わらない夢を描こう描いて
            [01:21.87]願ったまま欲しがったその先へ
            [01:26.10]終わらない夜を超えていこう 超えていこう
            [01:29.41]このまま 焦がれた向こう側へ
            [01:33.88]
            [01:35.62]はあぶっちゃけ解せないや 勝算なくても行っちゃえ！ とか
            [01:39.55]運命感じる感受性は否めない ウチら負けない
            [01:43.28]跳べ 吠え 目で追って いつでもNO.1
            [01:46.77]そこどけ 速攻揺らせ 攻め 甘美な時 Ride on now
            [01:51.65]
            [01:54.44]Shake it up まだまだ Go beyond the way yuh
            [01:58.67]
            [01:59.33]行き詰まるばかりで ずるい言葉を探して
            [02:05.25](mellow mellow mellow)
            [02:06.58]I am me 研ぎ澄まし 本能に従って 行け
            [02:12.18]Holla "We are the winners!"
            [02:13.92]So burn my burn my heart
            [02:14.92]
            [02:23.62]終わらない夢を描こう描いて
            [02:27.81]願ったまま欲しがったその先へ
            [02:32.13]終わらない夜を超えていこう 超えていこう
            [02:35.40]このまま 焦がれた向こう側へ
            [02:39.30]
            [02:39.90](uh...) 張り裂けそう 追いかけて合わせた 背が熱くて
            [02:48.47](uh...) 張り裂けそう もう一生鳴り止まない
            [02:52.60]限界の向こう側へ
            [02:54.71]
            [02:55.27]Ready Steady? Get out the way.
`,
        lyrics_rom: `iki tsumaru bakari de nurui taikutsuna yomichi de

ruuru wa mushi de ikitai ne


(uh...) satoraresou (uh...) ka ka fuka Get down now
(uh...) aaa mou kitto yuutou butta
"I" ja irarenai kurai doushiyou mo nai

yuh muri me no kuesuchon ha jitsuzon? fikushon?
You make me sage nano nande? I know the way
negatteru bakka ja kanawanai mechakucha ni saretatte kawaranai
maa ne kurae kakusei find the way

matte raito abiru kankaku amai wana
kentou chigai dis mo kiki akita wa
sorya ne ikeru tokoro made Take me higher
dou? Turning back muri tte tokku ni wakatte ndesho

(uh...) satoraresou (uh...) ka ka fuka Get down now
(uh...) aaa mou zutto shanto irarenai ya
sore wa dare no sei?

owaranai yume wo egakou egaite
negatta mama hoshigatta sono saki e
owaranai yoru wo koete ikou koete ikou
kono mama kogareta mukougawa e

haa bucchake gesenai ya shousan nakute mo icchae! toka
unmei kanjiru kanjusei wa inamenai uchira makenai
tobe hoemede otte itsudemo number one 
soko doke sokkou yurase zeme kanbi na toki Ride on now

Shake it up madamada Go beyond the way yuh

ikizumaru bakari de zurui kotoba wo sagashite

I am me togisumashi honnou ni shitagatte ike



owaranai yume wo egakou egaite
negatta mama hoshigatta sono saki e
owaranai yoru wo koete ikou koete ikou
kono mama kogareta mukougawa e

(uh...) harisakesou oikakete awaseta se ga atsukute
(uh...) harisakesou mou isshou nari yamanai
genkai no mukougawa e`,
        lyrics_en: `On this lukewarm, dull street at night, I'm just suffocating,

I want to disregard those rules, yeah?


(Uh...) Let it be known, (Uh...) Right or wrong, Get down now.
(Uh...) Ahh, surely, I'm pretending to be superior to you.
I can't stay as "I", there's no way around that.

Yuh, a seemingly unreasonable question, ha, 'bout my existence? Is it fiction?
You make me inferior, for what? I know the way.
It won't come true just by wishing, it doesn't change even when it's all messed up,
Oh well, eat this awakening, we Find the way!

Wait, this feeling of basking in the light is a sweet trap.
A misdirected dis, we grew tired of hearing them.
And so you see, I Take the higher until it looks good.
So? You understand that Turning back had been impossible for a while now, right?

(Uh...) Let it be known, (Uh...) Right or wrong, Get down now.
(Uh...) Ahh, I can't keep this up forever,
Whose fault is that?

Let's draw it, sketch out the never-ending dream,
We wished for it, while we were desiring what's ahead.
Overcome it, cross over the never-ending night,
Just like that, what we yearned for is on the other side.

Hah, honestly, it's incomprehensible, "Go, even with no chance to win!", something like that...
I feel the undeniable sensation of fate, we can't lose here!
Jump! Bark, while following it with your gaze, always NO.1,
Make way, shake 'em up with a barrage of swift strikes! It's the perfect time to attack, Ride on now!

Shake it up, not there yet, Go beyond the way, yuh.

We're just at a stalemate, searching for cunning words to say,

I am me, hone yourself, obey your instincts and go!



Let's draw it, sketch out the never-ending dream,
We wished for it, while we were desiring what's ahead.
Overcome it, cross over the never-ending night,
Just like that, what we yearned for is on the other side.

(Uh...) Looks like it's about to burst, as we run, our backs together are growing hot,
(Uh...) Looks like it's about to burst, this ringing will never stop till my life ends.
To the other side of our limits`,
        trans_source_en: "Project SEKAI Fandom Wiki | Translate by Thai1210",
        lyrics_cn: `在总是让人窒息的　冷淡的无趣夜路上
        
我真想忽略规则并就这么前进呢


uh 我总觉得我快能有所领悟
uh 可行或不可行 Get down now uh 啊─啊
肯定已经无法再保持　那种优等的”I”了 真是让人感到无奈

yuh 不讲理的眼神疑问 ha 实际存在？　虚构？
You make me 屈辱　为什么呢？ I know the way
要是总是祈愿的话便不会实现 即使我被过分对待　我也不会改变
哎呀　咬下去吧　觉醒 Find the way

等一下　这沐浴著聚光灯的感觉是道甜蜜的陷阱
我甚至也已经听腻预测失误的dis了啊
当然　到更高的地方为止Take me higher
如何？　你早就已经明白　Turning back是不可行的吧

uh 我总觉得我快能有所领悟 uh 可行或不可行 Get down now
uh 啊─啊 我已经无法坚定下去了啊
那是谁的错呢？

让我们来描绘不会结束的梦吧　描绘而出吧
满足了所愿　并渴望著那之后的未来
让我们来超越　让我们来超越不会结束的夜晚吧
让我们就这么　前往令人一心嚮往的另一侧吧

唉　说真的　我也搞不懂啊 即使没有任何胜算也前进吧！之类的
我无法否定感受命运的感受性 人家们不会输
跳跃吧　吠叫吧　靠双眼　追赶吧 无论何时都是NO.1
从那里滚开吧　速攻并摆动吧 进攻吧　甜蜜时刻　Ride on now

Shake it up,还差得远呢 Go beyond the way! yuh

我总是停滞不前　并寻找著狡猾不已的词彙

I am me 变得敏锐吧 顺从本能并　前进吧



让我们来描绘不会结束的梦吧　描绘而出吧
满足了所愿　并渴望著那之后的未来
让我们来超越　让我们来超越不会结束的夜晚吧
让我们就这么　前往令人一心嚮往的另一侧吧

uh 总觉得我快悲痛满怀 追逐并凑近的背影十分火烫
uh 总觉得我快悲痛满怀 一辈子就这么前往
不会停止响彻的极限的另一侧吧
`,
        trans_source_cn: `巴哈姆特 @月勳`
    },
    {
        chapter: 4,
        title: '世界の歩き方', artist: '星乃一歌 × 桐谷遥 × 鳳えむ × 宵崎奏 × 初音ミク',
        context: '', desc: '',
        date: 'APR 2026', ytId: 'A-hipHJknZY', start: 0,
        lyrics: `
            [00:03.21]歩き始めた時から今日の日まで
            [00:07.20]見えない何かを追いかけて
            [00:10.83]どこまで往くの何の為生きるの
            [00:14.92]言えないままに脚を止めた
            [00:18.11]ああ、
            [00:18.56]
            [00:34.36]完成形は野放図で感情の食い違ったり
            [00:38.33]だれも理想を望む役も酸素も取り合う
            [00:42.10]あの日から焼き付いて消えない
            [00:45.86]モニターの先のなにか
            [00:48.06]
            [00:48.49]例えば過去に戻ればどうしようか
            [00:52.18]どこかで忘れた夢を選んでみたら
            [00:55.86]案外上手くいって
            [00:57.93]でも別の世界の君は今の君になりたいかも
            [01:03.90]
            [01:04.62]だれもが識れない世界の歩き方
            [01:08.61]見えない答えを追いかけて
            [01:12.12]どこまで往っても何の為生きても
            [01:16.24]癒えない傷は増えるけれど
            [01:19.91]行こう
            [01:20.76]
            [01:35.51]大事に握り締め歪んでいた希望
            [01:39.49]高く飛ぼうとすれば深く落ちてしまう
            [01:43.28]泥水を啜っても花になれない
            [01:47.16]思い通りじゃない
            [01:48.79]
            [01:49.05]夢のまた夢のなかなにを啜る？
            [01:53.60]「　　　　」
            [01:54.26]どこに届く？
            [01:56.30]夢はまだ夢のまま進む
            [02:00.13]止まらない者は転ぶ
            [02:04.11]けれど景色は変わる
            [02:08.25]
            [02:21.10]今更わかった生まれたきた意味が
            [02:24.26]死ねない理由が
            [02:26.13]下書きすらも無い何かが見たいんだ
            [02:29.97]思うまま描き出そう
            [02:32.08]後書きであれこれ語ればいい
            [02:36.23]
            [02:36.77]僕らは識っている世界の歩き方
            [02:40.72]だから今日ここまで来たろ
            [02:44.40]始まりの日の行く宛も願いも
            [02:48.41]どれも予定と違うけれど
            [02:52.07]
            [02:52.33]ほら、声がするの
            [02:55.30]「それでも」って
            [02:59.93]あれからまだ終わらない夢の途中
            [03:06.39]
            [03:07.94]未来の日の過去を今変えてみせて`,
        lyrics_rom: `aruki hajimeta toki kara kyou no hi made
mienai nanika o oikakete
doko made yuku no nani no tame ikiru no
ienai mama ni ashi o tometa
aa

kanseikei wa nobouzu de kanjou no kuichigattari
dare mo risou o nozomu yaku mo sanso mo toriau
ano hi kara yakitsuite kienai
monitaa no saki no nanika

tatoeba kako ni modoreba dou shiyou ka
dokoka de wasureta yume o erande mitara
angai umaku itte
demo betsu no sekai no kimi wa ima no kimi ni naritai kamo

dare mo ga shirenai sekai no arukikata
mienai kotae o oikakete
doko made yukutemo nani no tame ikitemo
ienai kizu wa fueru keredo
ikou

daisetsu ni nigirishime hizand eita kibou
takaku tobou to sureba fukaku ochite shimau
doromizu o susurottemo hana ni narenai
omoidoori janai

yume no mata yume no naka nani o susuru

doko ni todoku
yume wa mada yume no mama susumu
tomaranai mono wa korobu
keredo keshiki wa kawaru

imasara wakatta umarete kita imi ga
shinenai riyuu ga
shitagaki sura mo nai nanika ga mitain da
omou mama kakidasou
atogaki de arekore katareba ii

bokura wa shitteiru sekai no arukikata
dakara kyou koko made kitoro
hajimari no hi no yuku ate mo negai mo
dore mo yotei to chigau keredo

hora koe ga suru no
soredemo tte
are kara mada owaranai yume no tochuu

mirai no hi no kako o ima kaete misete`,
        trans_source: `YouTube @ユリイ・カノン / 月詠み Official`,
        lyrics_cn: `从开始迈步，走到今天
追逐着看不见的东西
要去到哪里，为了什么而活着
说不出来，就这样停下了脚步
啊啊

结局很随意，不同于感性
谁都憧憬理想，争抢角色和氧气
从那天起，烙印不灭
屏幕前的一些东西

假如回到过去，该怎么办
尝试选择已在某处遗忘的梦想吧
想不到竟很顺利
但另一个世界的你，也许想成为现在的你

世界的走法，谁都不知道
追逐着看不见的答案
无论要去到哪里，无论为了什么而活着
尽管无法愈合的伤口会增加
出发吧

紧紧握住而扭曲的希望
想飞得高就跌得深
汲取泥水也变不成花
都不尽人意

在梦中的梦中要写些什么？

会抵达哪里？
梦想仍像梦想般向前
停不下的人会跌倒
但景色会改变

现在才明白活下来的意义
不能死的理由
想要看一些没有底稿的东西
怎么想就怎么描绘吧
在后记中多方说明即可

世界的走法，我们知道
所以今天才来到这里吧？
开始那天的目的地和愿望
虽然都和预想不一样了

听，有个声音
在说「尽管如此」
从那以后还未终结，梦想在途中

现在，试着改变未来日子的过往吧`,
        lyrics_en: `
From the moment I first set out, all the way to today
I’ve been chasing something I could never see
How far am I going? What am I living for?
With no answer, my steps just came to a stop
Ah …

The final shape turned wild, out of step with what I feel
Everyone’s chasing ideals, fighting for roles, for air to breathe
Since that day, something burned itself into me
Something is waiting on the other side of the screen

If I could go back to the past
And choose a dream I left behind somewhere
Maybe things would turn out fine
But the "you" in that other world might wish to be the "you" you are now

We all walk through worlds no one else has known
Chasing answers we can’t see
No matter how far we go, or what we live for
The wounds that won’t heal only grow
But still, we go on

The hope I held so tightly twisted out of shape
Whenever I tried to fly higher, I only fell deeper
Even drinking muddy water won’t turn me into a flower
Nothing goes the way I want it to

Inside a dream within a dream. What will you write?

Where will it reach?
The dream goes on, still only a dream
If you keep moving, you’ll stumble
but the scenery will change

Now I finally understand
The meaning of being born, the reason I can’t just die
I want to see something with no draft, no outline at all
So I’ll draw it exactly as I feel
And save the explanations for the afterword

We already know our own way of walking the world
That’s how we made it this far, isn’t it?
The hopes and destinations we had on the very first day
All turned out different from what we planned

But listen—there’s a voice saying
“Even so…”
Since then, we’re still inside a dream that hasn’t ended

I’ll change the past of the future from right here, right now`
    },
    {
        chapter: 4,
        title: 'Protocol Flow', artist: 'Metal Scar Radio',
        context: 'Game - Arknights: Endfield', desc: '',
        date: 'APR 2026', ytId: 'OG-kdPECvi4', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 4,
        title: 'Late never denied', artist: '呂喬恩',
        context: '《正义女神》片尾曲', desc: '',
        date: 'MAY 2026', ytId: 'Z3VSXD5TVeo', start: 0,
        lyrics: `
            [00:07.20]Late, but never denied
            [00:13.92]The proof that I didn't see
            [00:15.94]Or that I didn't hear
            [00:17.70]But they've become finally clear
            [00:21.57]The truth will never die
            [00:24.00]It will sooner or later become alive
            [00:36.19]Late, but never denied
            [00:42.83]The wind was blowing left, and it was blowing right
            [00:46.25]I turned around the truth was in the air
            [00:56.86]It's in the air
            [01:04.65]How can I decide
            [01:11.92]Eyes have got to be blind
            [01:19.07]There're still some clues someone left behind
            [01:25.43]Some black some white I can't define
            [01:33.30]I heard voices from angels
            [01:40.02]Are they lies from devils
            [01:47.14]My mind was clouded
            [01:50.28]They all made me doubtful
            [01:54.51]How to solve this puzzle
            [02:02.06]Late, but never denied
            [02:08.50]The proof that I didn't see
            [02:10.38]Or that I didn't hear
            [02:12.23]But they've become finally clear
            [02:16.13]The truth will never die
            [02:18.53]It will sooner or later become alive
            [02:30.61]Late, but never denied
            [02:37.35]The wind was blowing left, and it was blowing right
            [02:40.78]I turned around the truth was in the air
            [02:51.10]It's in the air
            [03:10.70]It's in the air`,
        lyrics_cn: `
正义也许会迟到，但绝不会缺席
那些我未曾看见的证据
或我未听见的线索
如今终于清晰显现
真相永不消逝
迟早会重现生机
正义也许会迟到，但绝不会缺席
风向左摇右摆
心念转动 真相就在眼前
就在空气中
我该如何抉择
双眼似乎已瞎了
仍有些线索被人遗留
黑白交错 我无法辨清
我听见天使的声音
是恶魔的谎言吗
我的思绪一片迷雾
它们让我满心疑惑
如何解开这谜团
正义也许会迟到，但绝不会缺席
那些我未曾看见的证据
或我未听见的线索
如今终于清晰显现
真相永不消逝
迟早会重现生机
正义也许会迟到，但绝不会缺席
风向左摇右摆
心念转动 真相就在眼前
就在空气中
就在空气中`,
        trans_source_cn: `Official`,
    },
    {
        chapter: 4,
        title: '天ノ弱', artist: 'Leo/need',
        context: '', desc: '',
        date: 'MAY 2026', ytId: '0zhop5qsyKY', start: 0,
        lyrics: `
            [00:00.33]僕がずっと前から 思ってる事を話そうか
            [00:05.20]友達に戻れたら これ以上はもう望まないさ
            [00:09.61]君がそれでいいなら 僕だってそれで構わないさ
            [00:14.55]嘘つきの僕が吐いた はんたいことばの愛のうた
            [00:21.57]
            [00:38.70]今日はこっちの地方は どしゃぶりの晴天でした
            [00:43.28]昨日もずっと暇で 一日満喫してました
            [00:48.80]別に君のことなんて 考えてなんかいないさ
            [00:53.29]いやでもちょっと本当は 考えてたかもなんて
            [00:57.76]
            [00:57.97]メリーゴーランドみたいに回る
            [01:01.47]僕の頭ん中はもうグルグルさ
            [01:05.31]
            [01:05.47]この両手から零れそうなほど
            [01:10.57]君に貰った愛はどこに捨てよう？
            [01:14.45]限りのある消耗品なんて僕は
            [01:21.51]要らないよ
            [01:24.85]
            [01:25.04]僕がずっと前から 思ってる事を話そうか
            [01:29.86]姿は見えないのに 言葉だけ見えちゃってるんだ
            [01:34.22]僕が知らないことが あるだけで気が狂いそうだ
            [01:39.26]ぶら下がった感情が 綺麗なのか汚いのか
            [01:43.81]
            [01:44.03]僕にはまだわからず 捨てる宛てもないんだ
            [01:48.40]言葉の裏の裏が
            [01:52.78]見えるまで待つからさ
            [01:57.97]待つくらいならいいじゃないか
            [02:01.43]
            [02:01.86]進む君と止まった僕の
            [02:07.15]縮まらない隙を何で埋めよう？
            [02:11.57]まだ素直に言葉に出来ない僕は
            [02:19.68]天性の弱虫さ
            [02:21.85]
            [02:21.96]この両手から零れそうなほど
            [02:26.31]君に渡す愛を誰に譲ろう？
            [02:31.08]そんなんどこにも宛てがあるわけないだろ
            [02:38.25]まだ待つよ
            [02:42.76]
            [02:44.41]もういいかい
            [02:47.50]`,
        lyrics_rom: `
boku ga zutto mae kara omotteru koto wo hanasou ka
tomodachi ni modoretara kore ijou wa mou nozomanai sa
kimi ga sore de ii nara boku dattee sore de kamawanai sa
usotsuki no boku ga haita hantai kotoba no ai no uta

kyou wa kocchi no chihou wa doshaburi no seiten deshita
kinou mo zutto hima de ichinichi mankitsu shite mashita
betsu ni kimi no koto nante kangaete nanka inai sa
iya demo chotto hontou wa kangaeteta ka mo nante

meriigoorando mitai ni mawaru
boku no atamannaka wa mou guruguru sa

kono ryoute kara koboresou na hodo
kimi ni moratta ai wa doko ni suteyou?
kagiri no aru shoumouhin nante boku wa
iranai yo

boku ga zutto mae kara omotteru koto wo hanasou ka
sugata wa mienai no ni kotoba dake miechatterun da
boku ga shiranai koto ga aru dake de ki ga kuruisou da
burasagatta kanjou ga kirei na no ka kitanai no ka

boku ni wa mada wakarazu suteru ate mo nain da
kotoba no ura no ura ga
mieru made matsu kara sa
matsu kurai nara ii janai ka

susumu kimi to tomatta boku no
chijimaranai suki wo nani de umeyou?
mada sunao ni kotoba ni dekinai boku wa
tensei no yowamushi sa

kono ryoute kara koboresou na hodo
kimi ni watasu ai wo dare ni yuzurou?
sonnan doko ni mo ate ga aru wake nai daro
mada matsu yo

mou ii kai
`,
        trans_source_cn: `YouTube @164 | Translate by MIU`,
        lyrics_cn: `说说我很久前就在想着的事吧
只要能回到朋友就别无所求了
你认同的话我那样也没有关系
说谎的我倾吐出的 相反话语的爱之歌

今天这边是倾盆大雨的晴天
昨天也闲情地享受过了一天
也没有特别在考虑你的事情
也许还是稍稍有想过一些吧

旋转木马般转动着
我的头脑中转个不停

快要从这双手中溢出来般
你给的爱要丢向何处才好？
这些有限的消耗品之类的
我不需要啊

说说我很久前就在想着的事吧
明明看不见姿态只能感受到话语
只因有着我不知道的事感到崩溃
这悬吊着的感情是美丽还是污秽

我还不知道应该把它弃置何处啊
我会等到发现
那话语的最最深处时
只是等待不也不错嘛

前进的你与停下的我
那缩不短的缝隙中要填上什么呢？
还无法率直地说出来的我
是个天生的胆小鬼

快要从这双手中溢出来般
这份要递给你的爱该转给谁呢？
那是我也还没找到的目标
我还会等待着

这样可以了吗`,
        trans_source_en: `YouTube @164 | Translate by Blacksaingrain`,
        lyrics_en: `Shall I tell you what I've been thinking for a long time?
If I can be your friend once again, I won't ask for more
If you don't care, I won't care either
I'm a liar and this is a love song of "contrary words" I spat out

It was fine weather with a shower of rain in this area today
I was bored for being unbusy and I fully enjoyed myself all day long yesterday
I haven't even thought about you
Ah, but, to tell the truth, I may have thought about you a bit, I'm just saying

My head goes around like a merry-go-round
It already turned to mush

You gave me love so much that it seems to overflow from my hands
Where shall I throw it away?
Something like a finite expendable item is
What I don't need

Shall I tell you what I've been thinking for a long time?
Without even seeing hide nor hair,only words can be seen
When there's something I don't know,that's driving me crazy
Whether the suspended feeling is beautiful or dirty

I still don't know that and can't find the place to throw it away
I'm gonna wait till I can see what's the
IMPLICATION of the IMPLICATION of the words
What's wrong with waiting?

You're going ahead and I stopped going
How can I fill the gap between you and me that cannot be shrunk?
As I can't still put that into words honestly
I'm a born coward

My love for you seems to overflow from my hands
To whom shall I give it over?
You know, I can't find someone else to give it to
I'm gonna wait more

Not yet?`,
    },
    {
        chapter: 4,
        title: '五月猫', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'MAY 2026', ytId: 'xYXIh06fV_w', start: 0,
        lyrics: `[00:01.10] もし地球が爆発したら
[00:04.167] 皆ごと
[00:06.20] 終わってしまえばって
[00:07.767] 何度思っただろう
[00:11.60] もし世界中の人が夢を諦めたら
[00:16.333] 誰の心にも穴が空かず済むだろう
[00:21.333] 再生
[00:22.167] 地球最後の日のミュージック
[00:25.767] lala…
[00:26.433] 来世へのパスポートをください
[00:31.467] 神様、何でこんな僕だけが
[00:34.80] と思ってしまうのでしょう
[00:37.067] って何度も問い質した
[00:39.833] 正しさが分からなくて
[00:42.10] 全人類が幸せだと
[00:44.90] 思える日なんて生涯
[00:47.067] 来るはずなどないって
[00:49.367] 患った五月猫
[01:02.10] もし君もいなくなるのなら
[01:04.967] この春の
[01:06.80] 出会いは別れを知るためにあるのだろう
[01:12.167] もし精神年齢に寿命があったら
[01:16.967] 僕の青春はとっくに死んでいるだろう
[01:22.033] 拝啓
[01:22.90] 十年後の僕は
[01:25.467] 夢を叶え
[01:27.00] こんな素晴らしい世界だと言って…
[01:31.90] る訳もない
[01:32.80] 何なんだよ現実は
[01:35.40] 生きて生きて息をしてる
[01:37.967] ばっかじゃ駄目だなんて
[01:40.50] 最初から教えてよ
[01:42.533] 半永久的で刹那的
[01:45.533] 時限爆弾抱えて
[01:47.767] こんな思いするのも
[01:49.867] 僕だけでいいのに
[02:13.033] いっそのこと夢の中で
[02:17.533] 永遠に笑って生きられたらなんて
[02:22.80] 君が星になる日のことすらも
[02:28.533] 知らない。
[02:30.70] 知らない 知らないままでいい
[02:42.833] 神様、何で六月なのに
[02:46.133] 病は治らないんでしょう
[02:48.40] って名称を探していた
[02:51.267] 時間に馴染めないから
[02:53.333] ドラマの最終回が
[02:56.267] ないようなこの人生は
[02:58.333] いつ終わったとしても同じだから
[03:03.033] もういいよ
[03:11.133] 僕の病には名前がないから
[03:13.533] 365日
[03:16.467] ずっと考えてしまう
[03:18.50] いつか地球が終わる未来
[03:21.367] その日のこと
`,
        lyrics_rom: `moshi chikyuu ga bakuhatsu shitara
minagoto
owatte shimaeba tte
nando omotta darou
moshi sekaijuu no hito ga yume o akirametara
dare no kokoro ni mo ana ga akazu sumu darou
saisei
chikyuu saigou no hi no myuujikku
lala…
raise e no pasupooto o kudasai
kamisama, nande konna boku dake ga
to omotte shimau no deshou
tte nando mo toitadashita
tadashisa ga wakaranakute
zenrinrui ga shiawase dato
omoeruu hi nante shougrai
kuru hazu nado nai tte
wazuratta gogatsuneko
moshi kimi mo inaku naru no nara
kono haru no
deai wa wakare o shiru tame ni aru no darou
moshi seishinnenrei ni jumyou ga attara
boku no seishun wa tokkuni shinde iru darou
haikei
juunen go no boku wa
yume o kanae
konna subarashii sekai da to itte…
ru wake mo nai
nani nandayo genjitsu wa
ikite ikite iki o shiteru
bakka ja dame da nante
saisho kara oshiete yo
Haneikyuuteikide setsunateki
jigenbakudan kakaete
konna omoi suru no mo
boku dake de ii noni
isso no koto yume no naka de
eien ni waratte ikiraretara nante
kimi ga hoshi ni naru hi no koto sura mo
shiranai.
shiranai shiranai mama de ii
kamisama, nande rokugatsu noni
yamai wa naorannai n deshou
tte meishou o sagashite ita
jikan ni najimenai kara
dorama no saishuukai ga
nai you na kono jinsei wa
itsu owatta to shitemo onaji dakara
mou ii yo
boku no yamai ni wa namae ga nai kara
365nichi
zutto kangaete shimau
itsuka chikyuu ga owaru mirai
sono hi no koto`,
        trans_source: `YouTube @ナナツカゼ`,
        lyrics_cn: `如果地球爆炸了
我到底曾经想过多少次
干脆连同所有人一起
全部结束就好了
如果全世界的人都放弃梦想
任谁的心都不再会支离破碎了吧
播放
地球最后一天的音乐
lala…
请给我通往来世的护照
神啊 为何只有我落得这般境地
为何总是会产生这种念头
我一次又一次地追问
只因不明白何谓正确
全人类都幸福美满
能对此坚信不疑的日子
此生都根本不可能到来
如此深陷忧郁的五月病(猫)
若连你也会离我而去
那么在这个春天里
相遇就是为了让人体会离别吧
倘若精神年龄也有寿命
我的青春恐怕早已枯萎凋零了吧
敬启
十年后的我
是否已然实现梦想
诉说着这个世界如此美好
…是我想多了
现实究竟算什么啊
仅仅是苟延残喘地呼吸着
这样活着根本毫无意义
真希望你一开始就能告诉我
半永久又如转瞬即逝
怀抱着一颗定时炸弹
承受这般痛苦煎熬的
明明只有我一个人就够了
索性一直沉浸在梦境里
那样就能永远微笑着活下去
乃至你化作繁星的那一日
我全都一无所知
一无所知 永远一无所知就好
神啊 为什么明明已经六月了
病却还是没有好呢
我一直在寻找它的名字
因为我无法融入时间之中
就像没有完结的连续剧
我这望不到头的人生
无论何时停播也都毫无分别
真的已经够了
因为我的病没有名字
365天
我一直忍不住思考
地球终将毁灭的未来
还有那一天的事`,
        lyrics_en: `If the Earth were to explode
If everyone
and everything disappeared
So many times I wished it would all come true
If everyone in the world gave up on their dreams
Then no one would have to live with a hole in their heart
Replay
Music for the last day on Earth
lala…
Please give me a passport to the next life
God, why is it always me?
Can’t stop asking myself
again and again
because I don’t know what’s right anymore
A day when all of humanity
can truly call itself happy
I know I’ll never live to see it
I’m haunted by “gogatsubyo”
If you too are going to disappear
Then maybe we met that spring
only so we could learn what it means to say goodbye
If the mind had a lifespan
my youth would’ve been dead long ago
Dear me
Ten years from now
I hope you’ve made your dream come true
saying “What a wonderful world this is…”
As if that would ever happen
What the hell is reality
I’m just living, living, breathing
if that’s not enough
you should’ve told me from the start
Semi-permanent, yet fleeting
carrying a time bomb inside me
If someone has to feel this way
I wish it were only me
If only we could live on forever
smiling inside a dream
Don’t want to know the day you turn into a star
No.
I’d rather stay unaware
God, why is it June
and still this illness won’t heal?
I kept searching a name for it
because I can’t seem to belong in this time
Life’s like a drama
with no final episode
No matter when it ends, it’s all the same
So I’m done
Because my illness has no name
365 days
My mind drifts to
the future where the Earth will end
and the day it happens`,
    },
    {
        chapter: 4,
        title: 'アリア', artist: 'ナナツカゼ',
        context: 'In-zone exploration - Genting Highlands', desc: 'Resorts World Genting',
        date: 'JUN 2026', ytId: 'P7ueDJG9IO4', start: 0,
        ig: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTE5NDk0MzU3NzUyODk0?story_media_id=3922679128558534096_63008808258&igsh=MWFhNTVpN2hzZmRjMw==',
        lyrics: `
            [00:11.04]眠れない夜
            [00:12.03]僕らは初めて繋がり合った気がした
            [00:16.08]どうしようもない
            [00:17.36]そんな日々を抱える僕らはどこか似ていた
            [00:21.16]
            [00:21.50]量産される音楽と命が
            [00:24.51]重なりあっても
            [00:25.75]時既に遅くて
            [00:27.13]不確かな音や言葉や数字に苛まれる
            [00:30.59]世界は傷だらけ
            [00:31.52]
            [00:31.67]誰だって
            [00:33.11]言葉にできない痛みを抱えてる
            [00:37.11]僕だって
            [00:38.31]痛い程知ってるよそんなこと
            [00:41.86]
            [00:42.11]だから
            [00:43.48]この歌は僕と君の
            [00:47.21]息を繋ぐため歌うアリア
            [00:53.45]
            [01:14.15]僕らいつの時代も
            [01:16.95]サヨナラに怯えて
            [01:19.21]命を持て余している
            [01:22.25]知る由もないのに
            [01:24.62]
            [01:25.03]僕らいつの未来も
            [01:27.59]普通を恐れて
            [01:29.79]天才に成りたがる
            [01:32.44]成る意味もないのに
            [01:36.32]
            [01:46.80]忘れられないんだ
            [01:49.52]淘汰された表情
            [01:51.94]それは嬉しい方じゃない
            [01:55.30]悲しい方の
            [01:57.06]
            [01:57.44]子どもの頃は
            [01:59.81]誰かを救いたいと
            [02:01.92]夢を綴ったはずなのに
            [02:07.94]
            [02:07.94]僕達は、最期を求めて生まれてきたんだ
            [02:13.22]今春もこの夏も死にがいを探している
            [02:18.45]この世界を作った神様に
            [02:23.91]バレない場所でこの歌を
            [02:28.79]歌わせて
            [02:30.29]
            [03:01.94]僕らいつの時代も
            [03:04.52]平和を保つため
            [03:06.89]兵器を買い安堵している
            [03:10.03]必要もないのに
            [03:11.88]
            [03:12.51]僕らいつの終いも
            [03:15.22]失くして気づいて
            [03:17.37]初めて大切にされる
            [03:20.07]それじゃもう遅いのに
`,
        lyrics_rom: `
nemurenai yoru
bokura wa hajimete tsunagariatta ki ga shita
doushiyou mo nai
sonna hibi o kakaeru bokura wa dokoka niteita

ryousan sareru ongaku to inochi ga
kasanariatte mo
toki sude ni okurete
futashika na oto ya kotoba ya suuji ni sainamareru
sekai wa kizudarake

dare datte
kotoba ni dekinai itami o kakaeteru
boku datte
itai hodo shitteru yo sonna koto

dakara
kono uta wa boku to kimi no
iki o tsunagu tame utau aria

bokura itsu no jidai mo
sayonara ni obiete
inochi o moteamashite iru
shiru yoshi mo nai noni

bokura itsu no mirai mo
futsuu o osorete
tensai ni naritagaru
narou imi mo nai noni

wasurerarenain da
touta sareta hyoujou
sore wa ureshii hou janai
kanashii hou no

kodomo no koro wa
dareka o sukuitai to
yume o tsuzutta hazu na no ni

bokutachi wa, saigo o motomete umarete kita nda
kon haru mo kono natsu mo shinigai o sagashite iru
kono sekai o tsukutta kamisama ni
barenai basho de kono uta o
utawasete

bokura itsu no jidai mo
heiwa o tamotsu tame
heiki o kai ando shite iru
hitsuyou mo nai noni

bokura itsu no shimai mo
nakushite kizuite
hajimete taisetsu ni sareru
sore ja mou osoi noni`,
        trans_source: `YouTube @ナナツカゼ`,
        lyrics_cn: `睡不着的夜晚
我感觉我们第一次互相取得了联系
我们有点相似
都有过这样无法自拔的日子

被大量生产的音乐和生命
即使重叠在一起
但为时已晚
被不确定的声音、文字和数字折磨
世界充满了伤痕

谁都有
用语言说不出来的痛苦
我也
痛彻地明白这一点

所以
我唱这首歌这首歌是为了
我和你的延命而唱 Aria

我们无论在哪个时代
总是害怕离别
生命多得无处安放
却不知为何如此

我们无论在哪个未来
总是害怕平凡
渴望成为天才
明明没什么意义

无法忘记
被淘汰的表情
不是喜悦的那种
而是悲伤的那种

童年时
梦想救赎他人
却将梦想书写成空

我们是追寻终结而诞生的
今春也罢，这夏也罢，仍在寻找死的理由
让我在即使是创造这世界的神明
也不知道的地方
唱这首歌吧

我们无论在哪个时代
都为了保持和平
购买兵器来换取安心
尽管没什么必要

最终我们
总在失去后才察觉
第一次珍视
却已为时太晚`,
        lyrics_en: `Sleepless nights
It felt like we were truly connecting for the first time
There's nothing we can do
We, who carry such days, were somehow alike

Even if mass-produced music 
and life intertwine
It's already too late
Tormented by uncertain sounds, words, or numbers
The world is full of wounds

Everyone
carries pain that can't be put into words
I know it all too well
painfully so.

That's why
I sing this song, this song is for
prolongation of our lives Aria

No matter what era we are in
Always afraid of parting
Having too much life
yet knowing nothing about it

No matter what future we face
we fear ordinariness
want to become geniuses
Even though there's no meaning in becoming one

I can't forget
The expression that was eliminated
Not the joyful kind
but the sorrowful 

In childhood
Even though I wrote down dreams
of wanting to save someone

We were born to seek the end
Be it this spring or this summer, I'm still searching for a reason to die
Let me sing this song in a place
even the god
who created this world doesn't know

No matter what era we are in
To keep the peace
Buying weapons to gain peace of mind
Despite it being unnecessary

In the end, we
realize until lost it
First time to cherished
But it's too late`,
    },
    {
        chapter: 4,
        title: '프로토콜 슈퍼노바', artist: '아리스 & 케이',
        context: 'Game - Blue Archive', desc: '',
        date: 'JUN 2026', ytId: 'Hx4XWoKSoQg', start: 0,
        lyrics: `
            [00:16.32]전설 속의 용사가 지금 나타났어
            [00:19.16]마왕을 무찌를 모험이 시작됐어
            [00:21.57]하나 둘 쌓여가는 비트는, 빠밤빠밤
            [00:24.60]다음 레벨을 항해 랭크
            [00:27.41]위험한걸요
            [00:28.74]알죠 알죠 알죠 알죠
            [00:30.15]무리잖아요
            [00:31.49]HP MP 충분합니다
            [00:32.90]정말 바보죠
            [00:34.24]알죠 알죠 그렇지만 네가 있음 Never Game Over
            [00:38.41]아직 기억하고 있습니다 평생 지켜주겠다던 그 말
            [00:46.49]거짓 하나 없는 진심인걸요
            [00:52.20]가로막는 모든 적 돌파!
            [00:55.03]길을 열어줄게
            [00:56.95]나만 다 믿고 따라와 슈퍼노바
            [01:00.15]너에게만 줄게 파워업 버프
            [01:02.87]되고싶은 모든 것을 상상해
            [01:05.53]네 미래를 증명해 Q.E.D!
            [01:08.36]끝까지 가보자 저 너머로
            [01:11.36]힘들 땐 내가 손잡아줄게
            [01:14.03]우리 둘이라면 이겨낼거야
            [01:16.53]빛이 닿는 곳으로 가자
            [01:19.41]꽉 차버린 더미 데이터는
            [01:22.24]과감하게 전부 삭제해
            [01:24.78]스스로를 괴롭히는 버그는
            [01:27.70]전 라운드에 털어버리자
            [01:30.53]치명상이에요
            [01:31.90]알죠 알죠 알죠 알죠
            [01:33.29]또 쓰러져도 다시 한번 리스폰해
            [01:36.00]주저하게 돼요
            [01:37.38]알죠 알죠 그러니까 우리가 함께인 겁니다
            [01:41.50]더 많은 세상을 알아가고 싶은데
            [01:46.90]포기하지 않고 싶은데
            [01:52.07]부서지고 깨져 내 몸 같지도 않겠지만
            [01:58.00]함께 흘린 그 눈물만큼 올라갈 걸 분명. 티어 업!
            [02:02.61]나만 다 믿고 따라와 슈퍼노바
            [02:05.95]너에게만 줄게 파워업 버프
            [02:08.70]되고싶은 모든 것을 상상해
            [02:11.37]네 미래를 증명해 Q.E.D!
            [02:14.20]우리의 승리는 인지상정
            [02:17.07]치트급 체급에 인기만점
            [02:19.87]한바탕 후에 다리가 풀린담    
            [02:22.37]내가 일으켜 줄게
            [02:25.37]왼쪽 왼쪽 오른쪽 오른쪽 오른쪽
            [02:26.70]왼쪽 왼쪽 오른쪽 오른쪽 오른쪽!
            [02:28.00]왼쪽 왼쪽 오른쪽 오른쪽 오른쪽
            [02:29.50]왼쪽 왼쪽 오른쪽 오른쪽 오른쪽!
            [02:30.78]나쁜 로그는
            [02:33.41]우리가 처리 했으니 걱정 말라구
            [02:35.58]가히 최고의 듀오라 할 수 있죠
            [02:38.95]내일의 별들도 끄덕하네요
            [02:41.66]끝없이 날아가 저 은하를 덧그리며 (빛이여~)
            [02:47.30]나만 다 믿고 따라와 슈퍼노바
            [02:51.15]너에게만 줄게 파워업 버프
            [02:53.85]되고싶은 모든 것을 상상해
            [02:56.53]네 미래를 증명해 Q.E.D!
            [02:59.37]크게 더 크게 크게 더 크게
            [03:02.40]말해줘 너의 이름을
            [03:05.03]우리 둘이라면 이겨낼거야
            [03:07.90]빛이 닿는 곳으로 가자
            `,
        lyrics_rom: `jeonseol sogui yongsaga jigeum natanasseo
mawangeul mujjiroel moheomi sijakdaesseo
hana dul ssahyeoganeun biteuneun, ppabamppabam
daeum leveleul hanghae rank
wiheomhangeolyo
aljyo aljyo aljyo aljyo
murijanaeyo
HP MP chungbunhamnida
jeongmal babojyo
aljyo aljyo geureochiman nega isseum Never Game Over
ajik gieokhago isseumnida pyeongsaeng jikyeojugetdan geu mal
geojit hana eobseun jinsimingeolyo
garomakneun modeun jeok dolpa!
gireul yeoreojulge
naman da mitgo ttarawa super nova
neoege-man julge power up buff
doego-sipeun modeun geoseul sangsanghae
ne miraereul jeungmyeonghae Q.E.D!
kkeutkkaji gaboja jeo neomeoro
himdeul ttaen naega sonjabayulge
uri duriramyon igyeonaelgeoya
bichi danneun goseuro gaja
kkwak chabeorin dummy dataneun
gwagamhage jeonbu sakjehae
sseusroreul goerobineun bugeuneun
jeon rounde teoreoborija
chimyeongsangieyo
aljyo aljyo aljyo aljyo
tto sseureojyeodo dasi hanbeon responhae
jujeohage doeyo
aljyo aljyo geureonikka uriga hamkkein geomnida
deo maneun seesangeul aragago sipeunde
pogihaji anko sipeunde
buseojigo kkaejeo nae mom gatjido anketjiman
hamkke heullin geu nunmulmankeum ollagal geol byeonmyeong. tier up!
naman da mitgo ttarawa super nova
neoege-man julge power up buff
doego-sipeun modeun geoseul sangsanghae
ne miraereul jeungmyeonghae Q.E.D!
uriui seungrineun injisangjeong
cheatgeup chegeube ingimanjeong
hanbatang hue dariga pullindam
naega ireukyeo julge
left left right right right
left left right right right!
left left right right right
left left right right right!
nappeun logeuneun
uriga cheori haesseuni geokjeong malragu
gahi choegoui duo-ra hal su itjyo
naeilui byeoldeuldo kkeudeokhane-yo
kkeuteobsi nalaga jeo einhaleul deotgeurimyeo (bichiyeo~)
naman da mitgo ttarawa super nova
neoege-man julge power up buff
doego-sipeun modeun geoseul sangsanghae
ne miraereul jeungmyeonghae Q.E.D!
keuge deo keuge keuge deo keuge
malhaejuo neoui ireumeul
uri duriramyon igyeonaelgeoya
bichi danneun goseuro gaja`,
        lyrics_en: `The hero from legends has just arrived
An adventure to defeat the demon lord has just begun
Accumulating one by one, the beats go ba-bum ba-bum
Rank up to get the next level
"It's dangerous!"
"I know, I know, I know, I know!"
"It's too tough!"
"I have plenty of HP and MP!"
"It's really foolish..."
"I know, I know, but as long as you're here, it's Never Game Over."
I can still remember, when you said you'd protect me forever
And that was the sincere truth
Break past all the enemies in our way!
I'll clear a path for you
Trust me and follow me, Supernova!
I'll give this power buff to only you
Picture everything you want to be
Prove your future yourself. Q.E.D!
Let's go beyong until the end
I'll hold your hand if things get rough
The two of us can overcome this
Let's go to where the light touches
That overflowing dummy data
be bold and delete them all
As for bugs that torment you
Leave them behind in the previous round
"It's a critical hit!"
"I know, I know, I know, I know!"
"Even if you fall again, respawn one more time!"
"I find myself hesitating..."
"I know, I know that's why we are together!"
I wish to experience the whole wide world
I wish to not give up
I'll take this broken and shattered body that's barely my own anymore
And we will rise higher than all the tears we've shed together. Tier Up!
Trust me and follow me, Supernova!
I'll give this power buff to only you
Picture everything you want to be
Prove your future yourself. Q.E.D!
Our victory is only natural
Our cheat level specs are exceptional
My legs gave out after that wild ride
I'll help you up
Left, left, right-right-right
Left, left, right-right-right!
Left, left, right-right-right
Left, left, right-right-right!
We took care of the bad logs
So don't worry about them
Some would call us the best duo ever
Even the stars of tomorrow are giving us a nod
Let's fly and trace over that galaxy
Trust me and follow me, Supernova!
I'll give you this power buff to only you
Picture everything you want to be
Prove your future yourself. Q.E.D!
Louder, louder. Louder, louder
Hurry up and tell me your name
The two of us can overcome this
Let's go to where the light touches`,
        trans_source_en: `YouTube @Blue Archive`,
        lyrics_cn: `传说中的勇者现在
出现了 击败魔王的冒险
开始了 一点一滴累积的节拍是、啪邦啪邦
朝着下个等级 RANK UP
很危险的
知道 知道 知道 知道
太勉强了
HP MP 都很足够
真是个傻瓜
知道 知道 但是 有你在就 NEVER GAME OVER
我依然记得 你说过会守护我一辈子
那是不带一丝谎言的真心话
突破所有阻挡的敌人！
我会为你开路
只要相信我跟着我 SUPERNOVA
只为你施放的 POWER UP BUFF
想像所有想成为的模样
证明你的未来吧
一起走到最后 朝向彼端
疲累时我会 抓住你的手
如果是我们一定能克服
走吧 前往光芒所及之处
塞满的 DUMMY DATA
就果断地全部删除
折磨自己的 BUG
就在这轮全部清掉
是致命伤
知道 知道 知道 知道
就算又倒下 也会再次 RESPAWN
变得有些犹豫
知道 知道 所以 我们才会在一起！
想要再多看看世界
还不想就此放弃
即使遍体鳞伤 破碎到不像自己的身体
流下的泪水 一定能让我们向上提升
只要相信我跟着我 SUPERNOVA
只为你施放的 POWER UP BUFF
想像所有想成为的模样
证明你的未来吧
我们的胜利是 人之常情
犯规级的战力 人气满点
若在混战之后双脚发软
我会将你扶起
左、左、右右右
左、左、右右右！
左、左、右右右
左、左、右右右！
我们来处理 坏掉的LOG
已经解决不用担心
堪称最棒的二人组
明日的星辰也点头应许
无尽地飞翔 描绘着那片银河
只要相信我跟着我 SUPERNOVA
只为你施放的 POWER UP BUFF
想像所有想成为的模样
证明你的未来吧
再大声一点 更大声一点
快告诉我 你的名字
如果是我们一定能克服
走吧 前往光芒所及之处`,
        trans_source_cn: `YouTube @蔚蓝档案`,
    },
    {
        chapter: 4,
        title: '「1」', artist: 'Leo/need',
        context: '', desc: '',
        date: 'JUN 2026', ytId: '_GdIO1AANg4', start: 0,
        lyrics: `
            [00:14.99]すぐそこに手を伸ばせば掴めそうな
            [00:20.03]幻をただ眺めては
            [00:24.85]違う色で転がる二欠片の
            [00:29.60]答えをまだ知らないから
            [00:34.43]
            [00:34.82]道標がそこに無くても
            [00:39.45]遠回りだったとしても
            [00:44.22]
            [00:44.43]泣かない様に笑ったって
            [00:47.42]転ばない様に歩いたって
            [00:50.42]隠した言葉は伝わらないから
            [00:56.43]僕らが描く未来はただ一つしかないから
            [01:02.90]
            [01:03.21]この目で確かめようか
            [01:10.12]
            [01:20.33]例えばそこに答えがあるとして
            [01:25.10]それを今と比べたとして
            [01:29.85]その時に私が見る景色は
            [01:34.74]独りだと意味がないから
            [01:39.35]
            [01:39.64]もう戻れない覚悟も
            [01:45.64]ここに居るという証明も
            [01:51.18]誰も触れない遠い場所で咲いているから
            [02:03.81]
            [02:04.67]それがガラクタの山だって
            [02:07.74]それがブリキの海だって
            [02:10.82]それを誰かに嗤われたとしても
            [02:17.12]
            [02:17.46]このセカイの向こう側へ
            [02:20.61]今届けてみたいから
            [02:23.78]まだ音は鳴り止まない
            [02:28.20]
            [02:30.32]泣かない様に笑ったって
            [02:33.63]転ばない様に歩いたって
            [02:36.79]隠した言葉は伝わらないから
            [02:43.16]僕らが描く未来はただ一つしかないから
            [02:49.39]
            [02:49.78]この目で確かめようか
            [02:55.65]見た事のない世界へ
            `,
        lyrics_rom: `
        sugugu soko ni te o nobaseba tsukamesou na
        maboroshi o tada nagamete wa
        chigau iro de korogaru futakakera no
        kotae o mada shiranai kara
        
        michishirube ga soko ni nakutemo
        toomawari datta to shitemo

        nakanai you ni warattatte
        korobanai you ni aruitatte
        kakushita kotoba wa tsutawaranai kara
        bokura ga egaku mirai wa tada hitotsu shikanai kara

        kono me de tashikameyou ka
        
        tatoeba soko ni kotae ga aru to shite
        sore o ima to kurabeta to shite
        sono toki ni watashi ga miru keshiki wa
        hitori dato imi ga nai kara

        mou modorenai kakugo mo
        koko ni iru to iu shoumei mo
        dare mo furenai tooi basho de saite iru kara
        
        sore ga garakuta no yama datte
        sore ga buriki no umi datte
        sore o dareka ni warawaretato shitemo
        
        kono sekai no mukougawa e
        ima todokete mitai kara
        mada oto wa nariyamani
        
        nakanai you ni warattatte
        korobanai you ni aruitatte
        kakushita kotoba wa tsutawaranai kara
        bokura ga egaku mirai wa tada hitotsu shikanai kara
        
        kono me de tashikameyou ka
        mita koto no nai sekai e`,
        lyrics_en: `
I just looked at the illusion 
that I could reach out and grab it right there
I still don't know the answer 
to the two pieces that roll around in different colors

Even if the signpost is not there
Even if it's a detour

Even if I smile so that I don't cry
Even if I walk so that I don't fall
The words we hide will never be conveyed
There's only one future that we can envision,

so let's see it with our own eyes

For example, if there's an answer there
For example, if I compare it to the present
When I look at that view,
it doesn't make sense if I'm alone

I'll never be able to go back
And the proof that I'm here
Blooming in a faraway place that no one can touch

Even if it's a pile of junk
Even if it is a sea of old tin toys
Even if someone laughs at it

I want to send it now
to the other side of this world
The sound hasn't stopped yet

Even if I smile so that I don't cry
Even if I walk so that I don't fall
The words we hide will never be conveyed
There's only one future that we can envision,

so let's see it with our own eyes
A world we've never seen
`,
        trans_source_en: `YouTube @164`,
        lyrics_cn: `
        只要我伸出双手彷彿能抓住
那仅仅只是观望的飘渺幻想
相异的颜色颠覆的两道碎片
虽然我依旧不知道何谓正解

就算前进道路没有路标
就算是比别人多绕点路

为了不哭泣所以欢笑著
为了不跌倒所以走路著
深藏心底的话无法传达
我们憧憬的未来仅此唯一

要用这双眼亲眼见证吗?

就算是已经得出正确答案
若是与现在做出比较的话
那时的我所看见的这景色
只要孤独一人就毫无意义

已经无法回头的觉悟也早已做好
名为存在于这里的存在证明也是
在无人能触及的遥远之处静静绽放

就算是满是垃圾的山里
就算是满是铁屑的海里
就算是被他人暗自嘲笑

朝向这个世界的另一端
我感觉现在能够传达到
这道音乐是永无止尽的

为了不哭泣所以欢笑著
为了不跌倒所以走路著
深藏心底的话无法传达
我们憧憬的未来仅此唯一

要用这双眼亲眼见证吗?
朝向未曾看过的世界前行`,
        trans_source_cn: `巴哈姆特 @TYPE`
    },
    {
        chapter: 4,
        title: '流星のパルス', artist: 'Leo/need',
        context: '', desc: '',
        date: 'JUN 2026', ytId: 'hZgbqUQI64E', start: 0,
        lyrics: `
[00:02.91]あの日と同じ 星を僕ら
[00:06.66]目印にして 声を重ねた
[00:17.76]
[00:31.90]浮かび上がった憧憬
[00:33.32]濃く滲んでいた後悔も
[00:36.42]自分らしく話せたのなら
[00:39.97]どんなに楽だろう
[00:42.07]
[00:42.52]ねぇどんな音で
[00:43.81]夢を鳴らしたらいい？
[00:46.18]分かっていたんだ
[00:48.17]立ち止まっていたのは僕の方だろう
[00:51.57]
[00:51.63]零れ落ちた何気ない言葉たち
[00:58.19]大事にしてあげられなかった
[01:02.02]見て見ぬフリしたって
[01:04.38]ここにいるんだよってまだ
[01:06.95]叫んでる ねえ
[01:10.69]
[01:11.02]なんで笑ってるんだろう 何一つ
[01:14.19]言いたい想いも 書き出せないくせに
[01:17.21]（変わりたい 進みたい）
[01:19.90]気付けたんだ
[01:21.81]
[01:21.68]音にのせて
[01:23.36]流れてく一筋の光に
[01:26.47]僕らもなれるから
[01:27.91]（かまわない 進もう）
[01:29.42]伝えるんだ 今
[01:32.00]
[01:32.18](woah woah woah...)
[01:43.27]聞こえている？ この声が
[01:47.36]
[01:57.77]積もり積もった投影
[01:59.76]拙く歪んだ防衛も
[02:02.40]自分らしく解けたのなら
[02:06.19]どんなに楽だろう
[02:08.35]
[02:08.41]ねぇどんな詩で
[02:09.95]僕を晒したらいい？
[02:12.22]独りぼっち
[02:13.84]涙堪えていたのは過去の僕だ
[02:16.39]
[02:16.50]崩れ落ちたしょうもないプライドたち
[02:23.48]逃げ出したくてたまらなかった
[02:27.62]ただ傍にいるよって
[02:29.31]信じてるんだよってほら
[02:32.15]聞こえている ねえ
[02:35.65]
[02:35.98]なんで迷ってるんだろう 何一つ
[02:39.70]捨てられるような想いなどないのでしょう？
[02:43.37]（叶えたい 届けたい）
[02:44.81]抱えて行くんだ
[02:46.22]
[02:46.91]歌にのせて
[02:48.67]世界中駆け巡る音に
[02:51.18]僕らもなれるかな
[02:52.77]（大丈夫 進もう）
[02:55.15]登っていくんだ
[02:57.05]
[03:16.68]僕ら
[03:17.69]日が沈むまで笑い合った
[03:20.37]星を見に夜を走った
[03:22.81]先なんてどうでも良かった
[03:25.22]あの気持ちを 忘れないで
[03:29.42]
[03:29.69]忘れないよ ずっと
[03:35.75]
[03:36.57]変わっていくもの 過ぎるもの
[03:39.55]誰も止めることなんて出来やしないから
[03:44.26]出来やしないけど
[03:46.68]
[03:46.71]この瞬間に 生きている
[03:49.35]逃せない「今」を 見つけ出したいから
[03:53.28]ここにいるんだ
[03:55.42]
[03:56.62]響かせたいよ この歌を
[03:58.45]待っている誰かがそこにいるのなら
[04:03.08]（奏でよう 伝えよう）
[04:05.00]生まれたセカイで
[04:07.13]
[04:07.56]声にのせて 暗い夜の
[04:09.72]空で僕らまだ弱くても
[04:13.18]光るから 伝えるんだ 今
[04:20.24]
[04:20.50](woah woah woah...)
[04:41.10]聞こえてる？ この声が
`,
        lyrics_rom: `
ano hi to onaji hoshi o bokura
mejirushi ni shite koe o kasaneta

ukabiagatta shoukei
koku nijindeita koukai mo
jibun rashiku hanaseta no nara
donna ni raku darou

nee donna oto de
yume wo narashitara ii
wakatteitanda
tachidomatteita no wa boku no hou darou

koboreochita nanigenai kotobatachi
daiji ni shite agerarenakatta
mite minu furi shitatte
koko ni irunda yo tte mada
sakaenderu nee

nande waratteru ndarou nani hitotsu
iitai omoi mo kakidase nai kuse ni
kawaritai susumitai
kizuketanda

oto ni nosete
nagareteku hitosuji no hikari ni
bokura mo nareru kara
kamawanai susumou
tsutaerunda ima


kikoeteiru kono koe ga

tsumori tsumotta touei
tsutana ku yuganda bouei mo
jibun rashiku hodoketa no nara
donna ni raku darou

nee donna uta de
boku wo sarashitara ii
hitoribocchi
namida koraeteita no wa kako no boku da

kuzureochita shoumonai puraidotachi
nigedashitakute tamaranakatta
tada soba ni iru yo tte
shinjiterunda yo tte hora
kikoeteiru nee

nande mayotteru ndarou nani hitotsu
suterareru youna omoi nado nai no deshou
kanaetai todoketai
kakaete ikunda

uta ni nosete
sekaijuu kakemeguru oto ni
bokura mo nareru kana
daijoubu susumou
nobotte ikunda

bokura
hi ga shizumu made waraiatta
hoshi wo mi ni yoru wo hashitta
saki nante dou demo yokatta
ano kimochi wo wasurenai de

wasurenai yo zutto

kawatteiku mono sugiru mono
dare mo tomeru koto nante dekiyashinai kara
dekiyashinai kedo

kono shunkan ni ikite iru
nogasenai ima wo mitsukedashitai kara
koko ni irunda

hibikasetai yo kono uta wo
matteiru dareka ga soko ni iru no nara
kanadeyou tsutaeyou
umareta sekai de

koe ni nosete kurai yoru no
sora de bokura mada yowakute mo
hikaru kara tsutaerunda ima


kikoeteru kono koe ga
`,
        lyrics_en: `

With the same star from that day as our guide
We sang together

Admirations and regrets
If I could talk about these with no lies, how easy it would be.

What kind of sounds should I make for my dreams
I already knew, I chose to stop moving forward.

All the words I have said, I couldn't cherish them

I pretended to not see them, but they are still shouting
"I am here”

Why am I okay with this
I can't even put one thought into words.

(I want to change)(I want to move forward) But I realized

With our sounds, we too can become one of those shooting stars

(Doesn't matter)(Move on)
We will show you now.

(woah woah woah...)
Can you hear us? This voice of ours.

I turned away from my reflection, a distorted way of defense
If I could solve these with no difficulties, how easy it would be

What kind of words should I use for myself.
Alone, it was me from the past holding back the tears.

All the meaningless prides fading away, I just wanted to run away

“I’m always by your side” “I believe in you”
“Do you hear me?”

Why am I not able to decide.
I can’t even give up one thought.

(I want to fulfill my dream)(I want to sing) I’ll carry them all.

With our song, maybe we can become one of those

that fills the world. (It’s alright)(Move on)
We will rise now.

We hung out all ‘day’ long. We ran to go see the ‘stars’.
We didn't care about the ‘future’.

Our ‘wish’.
Let's not forget, I will not forget, never

Things that change, Things that pass by
No one can stop these

I can't stop these too but

This moment I’m living in.
I don’t want to miss even one second of it.
That’s why I’m standing here.

Now let it resonate
If there’s even one person waiting for our song

(Let’s sing)(Hear us sing)
In this “World” of ours

With our voice, even if the sky is dark
even if we are still fragile
We’ll shine. We’ll sing. Now.

(woah-woah-woah...)
Can you hear us? This voice of ours.

`,
        trans_source: `YouTube @*Luna`,
        lyrics_cn: `我们将与那一天相同的星星
做成记号 重叠声音

浮出的憧憬
如果能像自己地吐露出
浓浓渗透出的后悔的话
会该有多么轻松呢

呐 该用怎么样的声音
奏响梦想才好
我很清楚啊
止步不前的是我对吧

洒落而出的无意话语们
我并没能好好珍惜
即使视而不见
也仍然大叫着
「我在这里啊」 呐

为什么在笑着呢
明明写不出来任何一个想要说出的想法
（想要改变 想要前进）
我察觉到了啊

随着音乐
我们也能成为
流动的一缕光芒
（没关系 前进吧）
现在 传达给你


听得见吗？ 这道声音

累积而成的投影
如果能像自己地解开
笨拙扭曲的防卫的话
会该有多么轻松呢

呐 该用怎么样的诗
暴露出我才好？
独自一人
忍住泪水的是过去的我

崩坏的无可奈何的自尊心们
想逃跑得不得了
但是听见了
「我在你身旁」
「我相信着你」 呐

为什么会迷惘呢
没有什么可以舍弃的想法吧？
（想要实现 想要传递）
抱住往前吧

伴随着歌
我们是否也能成为
周游世界的声音呢
（没问题 前进吧）
向上攀登吧

我们
一同欢笑到日落
为了仰望星星而在夜晚奔跑
未来什么的根本无所谓
请不要忘记 那份心情

不要忘记了啊 永远

逐渐改变的事物 流逝而过的事物
无论是谁都无法阻止啊
虽然做不到

但却活在这个瞬间
因为想要找到无法逃脱而出的「此刻」
而存在于此

想要响彻 如果有谁
正在等待着这首歌的话
（奏弹奏吧 传达吧）
在诞生的世界中

随着声音 我们即使弱小
也会在黑暗的夜空中发光
现在 传达给你


听得见吗？ 这道声音`
    },

    {
        chapter: 4,
        title: 'Grievous Lady', artist: 'Team Grimoire',
        context: '', desc: '',
        date: 'JUL 2026', ytId: 'Eax2zhVA0Zo', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 4,
        title: 'sys_title', artist: 'HyperGryph',
        context: 'Game - Arknights', desc: 'Title',
        date: 'JUL 2026', ytId: 'Y47VajTRKeA', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 4,
        title: '再生', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'JUL 2026', ytId: 'wPOEcVWN5Ko', start: 0,
        lyrics: `
            [00:00.58]「おはよ」
            [00:01.20]朝だって
            [00:02.18]呼ぶ声は理想郷で
            [00:04.39]誰にも呼ばれてないのに
            [00:06.44]起きちゃって
            [00:07.79]間に合いそうにない
            [00:09.27]電車に向けて
            [00:10.95]意味もなく走るんだ
            [00:13.29]
            [00:13.70]爆ぜろ
            [00:14.54]風とHPはゼロ
            [00:16.97]帰ろう還ろうって
            [00:18.68]まだ家なのに
            [00:19.99]架空の赤信号に
            [00:22.43]止められる日々
            [00:25.15]はもう辞めた
            [00:26.50]
            [00:26.71]このまま
            [00:27.31]らったった
            [00:28.51]音に乗って
            [00:29.87]今きっと世界で僕だけだ
            [00:33.25]後ろ向きな歌を聴いて
            [00:36.46]少しだけ
            [00:38.60]前向きに生きていく
            [00:42.17]
            [00:53.48]一人がいいけど
            [00:55.08]こんな独りは嫌だって
            [00:57.48]ないものねだりだけ
            [00:59.31]うまくなって
            [01:00.76]間に合いそうにない
            [01:02.20]心はいつも
            [01:03.85]君追いかけてるんだ
            [01:06.33]
            [01:06.65]月火水木金土日
            [01:07.97]気づけば日曜の午後九時で
            [01:10.43]何を祈っても
            [01:11.69]瞬く間に明日はきて
            [01:13.86]止まろうとも
            [01:14.97]止まることの無いこの日々
            [01:16.11]そんな僕らには
            [01:18.06]怖いものなんてない
            [01:26.86]
            [01:33.05]昨日なんてもう
            [01:34.82]忘れちゃおうよ
            [01:36.35]刻もう日々を
            [01:37.80]見えない早さで
            [01:39.47]このギター鳴らして
            [01:41.48]憂鬱も喧騒も
            [01:44.62]かき消すから
            [01:45.96]
            [01:46.16]このまま
            [01:46.75]らったった
            [01:47.93]音に乗って
            [01:49.31]今きっと世界で僕だけだ
            [01:52.70]後ろ向きな歌を聴いて
            [01:55.93]少しだけ
            [01:58.11]前向きに生きていく
            [01:59.93]らったった
            [02:01.20]音になって
            [02:02.56]歌うよ、世界が終わるまで
            [02:05.92]未完成なままでいいって
            [02:09.07]生きていく
            [02:11.37]この歌が終わるまで
            [02:41.37]`,
        lyrics_rom: `ohayo
asa datte
yobu koe wa risoukyou de
dare ni mo yabarete nai noni
okichatte
maniaisou ni nai
densha ni mukete
imi mo naku hashirunda

hazero
kaze to HP wa zero
kaerou kaerou tte
mada ie noni
kakuu no akashingo ni
torameraru hibi
wa mou yameta

kono mama
rattatta
oto ni notte
ima kitto sekai de boku dake da
ushiromuki na uta o kiite
sukoshi dake
maemuki ni ikiteiku

hitori ga ii kedo
konna hitori wa iya datte
naimono nedari dake
umaku natte
maniaisou ni nai
kokoro wa itsumo
kimi oikaketerunda

getsu ka sui mokku kin do nichi
kizukeba nichiyou no gogo kujide
nani o inorttemo
matatakuma ni ashita wa kite
tomarou tomo
tomaru koto no nai kono hibi
sonna bokura ni wa
kowai mono nante nai

kinou nante mou
wasurechaou yo
kizamou hibi o
mie'nai hayasade
kono gitaa narashite
yuuutsu mo kensou mo
kakikesu kara

kono mama
rattatta
oto ni notte
ima kitto sekai de boku dake da
ushiromuki na uta o kiite
sukoshi dake
maemuki ni ikiteiku
rattatta
oto ni natte
utau yo, sekai ga owaru made
mikansei na mama de ii tte
ikiteiku
kono uta ga owaru made`,
        lyrics_en: `"Good morning"
That's how the voice calls to me
It's the story of a utopia
I woke up 
when no one called me
I'm running for a train
that's not going to make it
I run for no reason

Blast it
Wind and zero HP
Let's go home, let's go home
I'm still home
Every day
I'm stopped at imaginary red lights
I'm done with this

I'm just gonna keep going
Riding on the sound of
"ra-ta-ta-ta-ta"
I'm sure I'm the only one in the world right now
Listening to backward-looking songs
I'm going to live
a little more positively

I'd rather be alone
I don't want to be alone like this
I'm getting better at begging for
things I don't have
My heart can't seem to
catch up to you
I'm chasing you

Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
Before I know it, it's nine o'clock on a Sunday afternoon
No matter what I pray for
tomorrow will come in the blink of an eye
These days that never stop
even if we try to stop
For us
there's nothing to be afraid of

Let's forget about yesterday
Let's forget about it
Let's tick away the days
At a speed you can't see
I'll strum this guitar
I'll drown out the gloom and the bustle
I'll drown it out

I'm just gonna keep going
Riding on the sound of
"ra-ta-ta-ta-ta"
I'm sure I'm the only one in the world right now
Listening to backward-looking songs
I'm going to live
a little more positively
I would be the sound of
"ra-ta-ta-ta-ta"
I'll sing until the world ends
I'll live my life saying
it's okay to be incomplete
Until this song ends`,
        trans_source_en: `Lyrics Translations @Reletr`,
        lyrics_cn: `早安
早上了啊
呼唤的声音来自理想乡
明明谁也没叫
我却醒了过来
朝着看来
大概追赶不上的电车
毫无意义地奔跑起来

炸裂吧
风和HP都归零了
回家吧回去吧
明明还待在家里
被虚构的红灯
阻止前进的日子
再也不会有了

就这样
啦哒哒
乘着乐音的节奏
此刻的世界上想必只有我一个而已
聆听着那些消极的歌
试着稍微
再积极一点地活下去

虽然喜欢一个人独处
却讨厌这样的孤单
惟独追寻不可求的事物
变得越来越熟练
看来大概
追赶不上的心
总是一直追逐在你的背后

一二三四五六日
回过神来已是周日晚上九点
无论如何祈求明天
还是眨眼就到来
即使想停下来每一天
还是依然如期而至
对于这样的我们来说
已经没什么好害怕的

昨天什么的
干脆忘了吧
雕刻下的岁月
以不可见的速度飞逝
弹拨响这把吉他
忧郁也好喧嚣也罢
都会被掩盖过去

就这样
啦哒哒
乘着乐音的节奏
此刻的世界上想必只有我一个而已
聆听着那些消极的歌
试着稍微
再积极一点地活下去
啦哒哒
化为乐音的节奏
歌唱吧，直至世界末日那天
保持不完美的状态也没关系
继续活下去
直到这首歌结束为止`,
        trans_source_cn: `巴哈姆特 @Fir`,
    },
    {
        chapter: 4,
        title: "Caramel Pain", artist: "星街すいせい",
        context: "", desc: "",
        date: "JUL 2026", ytId: "UpEPkPg8YP4", start: 0,
        lyrics: `[00:00.784]ねえあたしいつも勇気が足りないから
[00:04.755]自分を大切にできないんだ
[00:07.992]痛い目をみないと気付けやしないんだ
[00:11.628]あーあ今日もキャラメルペインです
[00:16.000]
[00:23.374]良い子でなんかいられないよ
[00:26.143]だって世界はこんなにも極彩色で
[00:30.614]甘ったるくて苦いし あ、待って頭痛いし
[00:34.451]ヘトヘトで漂うだけの24/7
[00:37.721]ギリギリ感情おさえるなんてもう無理
[00:39.823]このままではいられないの日々
[00:41.392]ちょっとこわいけど
[00:45.529]置いてくよ
[00:46.209]置いてくよ
[00:47.073]置いてくよ
[00:48.298]今まで手にしたイデオロギーもスタイルも
[00:52.736]壊れちゃっても今がいいよ
[00:55.672]だってあたしはあたしのままでずっといたいんだもん
[01:00.310]ルート？ムード？ どうでもいーよ
[01:02.146]トゥーザネクスト
[01:03.080]もっと危ないことしたら勝ちなんでしょ
[01:07.518]何を犠牲にしたってしょうがないんだよ
[01:10.454]フロムマイベッド この胸の痛みだけ抱いて
[01:17.828]あーあ今日もキャラメルペインです
[01:22.466]ミルフィーユみたいにはぐらかしたって
[01:26.136]いつかバレちゃうよ 腐っちゃうよ
[01:29.640]痛いとか素直に君に言えてれば
[01:33.377]今頃何か変わってたのかもね
[01:37.214]好きなアニメもなくなっちゃうし
[01:40.918]好きな人だっていなくなっちゃうんだ
[01:43.987]寂しくなっちゃうな
[01:50.394]大切なことは ただ一つだけさ
[01:58.435]もう後悔しないように
[02:00.737]前を向いて生きるということ!
[02:06.743]置いてくよ
[02:07.500]置いてくよ
[02:08.200]置いてくよ
[02:09.513]今まで手にしたイデオロギーもスタイルも
[02:13.951]汚れちゃっても気にしないよ
[02:16.920]だってあたしはあたしに恋してたいんだもん
[02:21.525]愛してるよ
[02:22.400]愛してるよ
[02:23.00]愛してるよ
[02:24.294]さよならなんて涙が出ちゃうけど
[02:28.732]何を犠牲にしたってしょうがないんだよ
[02:31.668]フロムマイベッド この胸の痛みだけ抱いて
[02:39.076]あーあ今日もキャラメルペインです
[02:43.213]ねえあたしいつも勇気が足りないから
[02:47.251]自分を大切にできないんだ
[02:50.420]痛いくらいなら少し我慢するんだ
[02:54.057]あーあ今日もキャラメルペインです
        `,
        lyrics_rom: `
        nee atashi itsumo yuuki ga tarinaikara
        jibun wo taisetsu ni dekinai nda
        itai me wo minaito ki zukeyashinai nda
        aa-a kyou mo kyarameru pein desu

        ii ko ne nanka irarenaiyo datte
        sekai wa konnanimo gokusaishoku de
        amattarukute nigaishi a matte atama itaishi
        hetoheto de tadayou dake no twenty four seven
        girigiri kanjou osaeru nante mou muri
        kono mama de wa irarenai no hibi
        chotto kowaikedo
        oiteyukuyo
        oiteyukuyo
        oiteyukuyo
        ima made te ni shita ideorogii mo sutairu mo
        kowarechatte mo ima ga iiyo
        datte atashi wa atashi no mama de zutto itai nda mon
        ruuto muudo dou demo i yo
        tuuzanekusuto
        motto abunai koto shitara kachinandesho
        nani wo gisei ni shita tte shouganaindayo
        from my bed kono mune no itami dake daite
        aa-a kyou mo kyarameru pein desu
        mirufiiyu mitai ni hagurakashita tte
        itsuka barechauyo kusacchauyo
        itai toka sunao ni kimi ni ietereba
        imagoro nani ka kawatteta no kamone
        sukina anime mo nakunacchaushi
        sukina hito datte inaku nacchau nda
        sabishiku nacchauna
        taisetsuna koto wa tada hitotsu dakesa
        mou koukai shinai you ni
        mae wo muite ikiru toiu koto
        oiteyukuyo
        oiteyukuyo
        oiteyukuyo
        ima made te ni shita ideorogii mo sutairu mo
        yogorechatte mo ki ni shinaiyo
        datte atashi wa atashi ni koishitetainda mon
        aishiteruyo
        aishiteruyo
        aishiteruyo
        sayonara nante namida ga dechaukedo
        nani wo gisei ni shita tte shouganaindayo
        from my bed kono mune no itami dake daite
        aa-a kyou mo kyarameru pein desu
        nee atashi itsumo yuuki ga tarinaikara
        jibun wo taisetsu ni dekinai nda
        itai kurainara sukoshi gaman suru nda
        aa-a kyou mo kyarameru pein desu`,
        lyrics_en: `(Hey) I never seem to have the courage
To put myself first
I won't realize unless I've been hurt first
Ah, so I'm in caramel pain again

Don't expect me to be a goody-two-shoes
When the world comes in all shapes, sizes, and flavors
Too sweet, too bitter, my head's about to splinter
All I do is wade through it in a daze 24/7
(I've had it, can't hold my emotions down)
(Can't live my life like this, it'd be a letdown​)
Scary as it is​ ​​
​I'll leave it behind​
I'll leave it behind​
I'll leave it behind​ ​
My ideologies, my way or the highway​ ​
Thеy may break, but I like the way it is​ ​​
'Cause I wanna be who I am forever​ ​​
​The route? The mood? Who cares?​
To the next we go​ ​​
​'Cause who dares wins, right?​ ​​
​If sacrifices must be made, they will be​ ​​
From my bed, I rise​ ​​​​​holding on to my hurt alone
(Ah, ah, ah) So I'm in caramel pain again
​Layer it and hide it like a mille-feuille​ ​​
But it'll fall away (It'll all fall apart​)
If I'd told you about all my hurt​
Would things have​ ​​​​​been different, a better start?​ ​​
The anime I love go away​ ​​
Even the people I love go away​ ​​
It's all so, so sad​, ah
But there's only one thing that matters​ ​​
Leave no stone unturned, have no regrets​,​ ​​​​as good as it gets​
Live life with my head held high
I'll leave it behind
I'll leave it behind
I'll leave it behind 
My ideologies, my way or the highway​ ​
They may get stained,​​​​​ ​but I'll take it the way it is​
'Cause I wanna be​ ​​​​ ​in love with myself forever​ ​​
I love you
I love you
I love you
Saying goodbye brings out the tears​ ​​
​If sacrifices must be made, they will be​ ​​
From my bed, I rise​ ​​​​​holding on to my hurt alone
(Ah, ah, ah) So I'm in caramel pain again
(Ah-ah, ah, ah, ah) Hey, I never seem to have the courage
(Ah, ah, ah) To put myself first
(Ah-ah, ah, ah, ah) ​I can deal with a little hurt​
Ah, so I'm in caramel pain again`,
        trans_source_en: 'YouTube @Suisei Channel',
        lyrics_cn: `呐 我总是缺少了点勇气
所以没办法好好爱惜自己
不到遍体鳞伤的地步都清醒不过来
啊啊今天也细味着如焦糖般的痛

我才不想当个什么乖孩子啊
因为这个世界是如此地斑斓多彩
既甜蜜又苦涩的 啊、等等头痛起来了
每分每刻都漂流在精疲力尽中24/7
再也没办法压抑住心里濒临爆发的情绪了
忍受不了一成不变的每一天
虽然心里有点害怕
抛下一切吧
抛下一切吧
抛下一切吧
至今为止形成的那些思想也好风格也罢
此刻就算全都毁掉也无所谓啊
因为我只想一直作为原来的自己啊
路线？ 氛围？ 管他的怎样都好啦
To the next
毕竟不入虎穴焉得虎子嘛
为达成目标即使要作出牺牲也在所不惜啊
From my bed 仅仅拥抱住这胸口的痛楚
啊啊今天也细味着如焦糖般的痛
尽管用像千层派一样层层叠叠的伪装来逃避
总有一天还是会被拆穿喔 会腐烂殆尽喔
要是当初可以坦率告诉你很痛的话
说不定现在就能有所不同了吧
喜欢的动画也变得索然无味
甚至连喜欢的人都离我而去
感觉好孤单寂寞啊
最重要的事 其实就只有一件啊
不再留下任何的遗憾
积极向前地活下去而已！
抛下一切吧
抛下一切吧
抛下一切吧
至今为止形成的那些思想也好风格也罢
就算变得污秽不堪也毫不在意啊
因为我想喜爱上这样的自己啦
我爱你喔
我爱你喔
我爱你喔
虽然告别还是不禁让泪水夺眶而出
为达成目标即使要作出牺牲也在所不惜啊
From my bed 仅仅拥抱住这胸口的痛楚
啊啊今天也细味着如焦糖般的痛
呐 我总是缺少了点勇气
所以没办法好好爱惜自己
如果只是疼痛的话就稍微忍一下吧
啊啊今天也细味着如焦糖般的痛`,
        trans_source_cn: '巴哈姆特 @Fir',
    },
    {
        chapter: 4,
        title: 'メシア', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'JUL 2026', ytId: 'sX-7C9Xlw0Y', start: 0,
        lyrics: `[00:00.80] 信じちゃなんかいないんだ
[00:03.44] 自分以外のこと
[00:06.20] 信じちゃなんかいないんだ
[00:08.80] 大人の言うこと
[00:11.56] 僕は僕のままでいい
[00:13.68] って言ってくれる人はいなかった
[00:16.40] だから慰めるのが上手いんだ
[00:19.36] 自分自身のこと
[00:32.80] 助けてって言えなくて
[00:35.04] 今日も屋上で1人きり
[00:38.12] 通り魔が攫ってくれるのをひたすら待ってる
[00:43.48] 打ち明けてしまったら
[00:45.72] そして変わらない世界を見て
[00:48.80] これ以上の悲しみは抱えきれないからね
[01:04.88] 神様なんていないんだ
[01:07.44] どうせ他人事
[01:10.24] 夢なんて叶わないんだ
[01:12.80] くだらない戯言
[01:15.56] ずっと子どものままでいい？
[01:17.80] って言っていい場面などなかった
[01:20.44] だから諦めるのが早いんだ
[01:23.40] 子どもの頃の夢
[01:26.16] 強くなんてなりたくなかった
[01:28.76] だから心に鎧を着せたんだ
[01:31.44] これ以上傷つかないように
[01:34.12] 安全な場所で眠るみたいに
[01:39.48] 安全な場所で眠るみたいに
[01:47.48] 誰も信じられなくて
[01:49.76] 今日も屋上で1人きり
[01:52.80] 自分の相談事すらも僕自身で聞いてる
[01:58.12] 打ち明けなくていいよ
[02:00.40] 僕のことは全部知ってるから
[02:03.48] 君が持ってる悲しみを半分背負いたいな
[02:54.48] 信じちゃなんかいないんだ
[02:57.44] 自分以外のこと
[03:00.48] 信じちゃなんかいないんだ
[03:03.36] 大人の言うこと
`,
        lyrics_rom: `shinjicha nanka inain da
jibun igai no koto
shinjicha nanka inain da
otona no iu koto
boku wa boku no mama de ii
tte itte kureru hito wa inakatta
dakara nagasameru no ga umain da
jibun jishin no koto
tasukete tte ienakute
kyou mo okujou de hitorikiri
toorima ga saratte kureru no o hitasura matteru
uchiakete shimattara
soshite kawaranai sekai o mite
kore ijou no kanashimi wa kakaekirenai kara ne
kamisama nante inain da
douse taningoto
yume nante kanawanain da
kudaranai tawagoto
zutto kodomo no mama de ii?
tte itte ii bamen nado nakatta
dakara akirameru no ga hayain da
kodomo no koro no yume
tsuyoku nante naritakunagatta
dakara kokoro ni yoroi o kisesan da
kore ijou kizutsukanai you ni
anzen na basho de nemuru mitai ni
anzen na basho de nemuru mitai ni
dare mo shinjirarenakute
kyou mo okujou de hitorikiri
jibun no soudangoto sura mo boku jishin de kiiteru
uchiakenakute ii yo
boku no koto wa zenbu shitteru kara
kimi ga motteru kanashimi o hanbun seoitai na
shinjicha nanka inain da
jibun igai no koto
shinjicha nanka inain da
otona no iu koto`,
        lyrics_cn: `我其实根本不相信
除了自己以外的一切
我其实根本不相信
大人们口中的那些话
做我自己就好
从未有人对我这样说
所以我才变得如此擅长
去慰藉自己
无法喊出那句救救我
今天也独自一人待在天台
痴痴期盼着会有超自然的存在将我掠走
若是将一切和盘托出
却又目睹这毫无改变的世界
我便再也无力承受更多的悲伤
这世上根本没有神明
反正皆是事不关己
梦想根本不会实现
不过是无聊的戏言
可以永远做个小孩子吗
从来没有容许我这样问的余地
所以我才会那么轻易地放弃
那些孩提时代的梦想
我根本不想变得坚强
所以才给内心披上铠甲
为了不再受任何伤害
如同在安全的地方安然沉睡
如同在安全的地方安然沉睡
无法去相信任何人
今天也独自一人待在天台
连自己的心事都交由自己来倾听
无需向谁吐露心扉
因为关于我的一切我全都知道
我想替你分担一半你所背负的悲伤
我其实根本不相信
除了自己以外的一切
我其实根本不相信
大人们口中的那些话
`,
        lyrics_en: `I don’t believe in anything
Anyone but myself
I don’t believe
A word adults say
There was never anyone
Who told me “You’re fine just the way you are”
That’s why I got so good
At comforting myself
I can’t say “Help me”
So today I’m alone on the rooftop again,
Just sitting here, waiting for some supernatural being to carry me away
Because if I opened up
And then saw that the world stayed exactly the same
I wouldn’t be able to bear any more sadness than this
There’s no such thing as God
It’s all someone else’s problem anyway
Dreams don’t come true
They’re just worthless nonsense
“Can I stay a child forever?”
There was never a moment when I could say that
That’s why I’m so quick to give up
On childhood dreams
I never wanted to become strong
That’s why I dressed my heart in armor
So I wouldn’t get hurt anymore
Like sleeping somewhere safe
Like sleeping somewhere safe
I can’t trust anyone
So today I’m alone on the rooftop again
Even when I need advice I’m the one listening to myself
I don’t have to open up
Because I know everything about me
I want to carry half of the sadness you’re holding
I don’t believe in anything
Anyone but myself
I don’t believe
A word adults say`,
        trans_source: 'YouTube @ナナツカゼ',
    },
    {
        chapter: 4,
        title: 'Snezhnaya', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: 'Snezhnaya Theme',
        date: 'AUG 2026', ytId: '_Uf8_TC_tow', start: 0, end: 300,
        lyrics: `[01:29.33]Proditi sumus a mundo
[01:34.20]Novum mundum omnibus aequum condemus
[01:40.67] 
[02:17.35]Sidus album vos suscipite
[02:28.61]Terram motam vos quatite
[02:40.01] 
[04:01.84]Novum mundum incohemus, vos qui mecum tenebras initis
[04:23.28]Ex ruinis ordo novus condemus
[04:29.94]In fine ab Anastasia servati sumus, aurora orietur 
[04:53.49] `,
        lyrics_cn: `我们是曾为整个世界所背叛的带伤者
我们终将建立谁人都不背弃的新世界

抬头仰望白磷色的苍星，那是我等的旗号
加入我等的行列，让军靴如雷撼动大地吧

愿随我等走向至暗之地者，一同创造新世界吧
须知一切的尽毁将是全新秩序的肇始
唯我皇安娜丝塔夏将带来无垢的黎明
`,
        lyrics_en: `We are the wounded ones, betrayed by the whole world
We shall create a new world, one in which no one shall ever be forsaken

Lift up your eyes to the white, glimmering Pale Star, for that is our banner
Join our ranks, and let our marching boots shake the earth like thunder!

You who will walk with us into the land of darkness, come! Let us create a new world together
Know that the destruction of all precedes the birth of a new order
Only our Tsaritsa, Anastasya, shall usher in the perfect dawn`,
        trans_source: `YouTube @Genshin Impact`,
    },
    {
        chapter: 4,
        title: 'Life Is Inexhaustible', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact / FYSA School Anniversary', desc: '',
        date: 'AUG 2026', ytId: '4uHGpV9OGms', start: 0,
        lyrics: `(Instrumental — No Lyrics)`,
    },
    {
        chapter: 4,
        title: 'Columbina\'s Poem', artist: 'HOYO-MiX',
        context: 'Game - Genshin Impact', desc: '',
        date: 'AUG 2026', ytId: 'SNWp5TCdzRY', start: 0,
        lyrics: `[00:01.50] Domina, o luna nostra, mitte lucem tuam
[00:17.35] Caedes immanes, sopores necesse
[00:20.20] (Quid tristes querimoniae, si non supplicio culpa reciditur?)
[00:27.50] (Sonitumne ferrorum audis? Clamor gentium est ille, haud lamentum ergastuli.) 
[00:31.383] Non possent lucem et nostram spem 
[00:45.00]
[01:25.95] Vola, columbula nostra, vola
[01:32.233] Quom luce lunae
[01:37.00]
[01:49.233] Vola, cara columbula, sine fine vola
[02:02.75] Vola, cara columbula, ad sublunaria
[02:15.866] Audite fati campana sonat
[02:21.516] Aestus attulit spemque liberam
[02:28.70] Annorum mille mala, atra mala
[02:35.333] A patria sub luna ablutum
[02:39.80] Ad mare caeruleum rapietur
[02:47.00]
[02:58.483] Assurge, o luna, tenebras illumina
[03:12.00]
[03:34.75] Dum nulla supersit o sedes aerumnae
[03:48.55] Ut impii lunas usurpantes nullas sedes habeant hoc modo
[04:02.633] In atra tenebris perpetuo mergantur
[04:16.00]
        `,
        lyrics_cn: `
月啊，我们的月亮，愿你向这世间映下柔和的辉芒
可怖的灾殃，命定的沦亡
(哀恸与心伤有何益处，若是惩罚无法将罪恶涤荡？)
(你可听到刀剑的鸣响？那是人们勇敢的怒吼，而非牢狱哀怨的歌唱。) 

夺不去月光，夺不去希望
飞吧，我们的小鸽子，飞吧

伴着只属于你的月光
飞吧，我们的小鸽子，自由自在地飞吧
飞吧，我们的小鸽子，向着月下的世界
听吧，命运的铃歌已然奏响
潮汐已经带来了自由的希望
千年的煎迫，漆黑的祸殃
终将不再侵夺月色的故乡
终将被冲往那蔚蓝的海洋

醒来吧，新月呀，将黑暗的大地照亮

直至苦难与暴行皆如明晨的露水消亡
要让僭称神明之名的邪祟者无处容身
要让恶徒在无明的长夜中被永世埋葬
`,
        trans_source_cn: `网易云音乐 @HOYO-MiX`,
        lyrics_en: `Oh mistress, oh moon of ours, cast your gentle radiance upon the world!
Monstrous bloodsheds, ruins inevitable
(Wherefore do we mourn and weep, if sins were not to fall upon their judgment?)
(Do you hear the sound of swords clashing? That is the clamor of the people, not the song of laments from the quods.) 

Those can not extinguish our light and hope
Fly, oh fly! Little dove of ours

Bathed in the moonlight which is only yours
Fly, oh fly! Dear little dove, fly without end!
Fly, dear little dove! Into the sublunary!
Hear, the chimes of fate are ringing
The tides have brought forth hope and liberation
Thousands of years of suffering and calamity
Shall be washed away from our homeland beneath the moon
And hauled back into the azure ocean

Awaken, awaken, new moon, illuminate this dark land once more

Until all suffering are cast off like the first morning dewdrops
Let those who dare to usurp the moons be stripped off their footholds
And let them be buried in darkness eternal`,
        trans_source_en: `Genshin Impact Fandom Wiki`,
    },
    {
        chapter: 4,
        title: '空耳', artist: 'ナナツカゼ',
        context: '', desc: '',
        date: 'AUG 2026', ytId: 'vJDxS_ovbpc', start: 0,
        lyrics: `[00:07.12] ｢また明日ね｣は言いたくない
[00:10.72] 誰もいない帰り道
[00:14.20] なんで涙が出るんだろうな
[00:18.52] 炎天下を凪いで
[00:20.76] チャイムが鳴ったら
[00:22.20] 光の速さで帰ろう
[00:23.96] 朝と同じ曲聴きながら帰ろう
[00:27.28] 再生
[00:28.12] いつもは聞こえない音がした
[00:31.68] 気のせいか
[00:34.04] 「泣かないで、行こう」って
[00:35.80] 君が言うから
[00:37.32] 正直本当に困った
[00:38.92] 夕焼けに二人染まった
[00:40.56] 「雨のせいだよ」って嘘をついた
[00:43.92] 世界で二人だけみたいだね
[01:00.68] 僕は間違っていたんだ
[01:01.88] 主観的に感じる旋律で
[01:03.88] 世界の全てを知ったような顔をして
[01:07.12] 君の好きな曲や歌詞を知れただけで
[01:10.28] 君の全てを知ったような気がして
[01:13.76] 違うんだよ馬鹿ばっか
[01:15.16] 馬鹿はどっちだっていうんだって
[01:17.28] カラカラな心は
[01:18.60] 落下もうキャパオーバー
[01:20.48] 唯一無二の防音材
[01:21.88] 心の叫びが聞こえないように
[01:24.16] 今日もヘッドホンの音量上げた
[01:40.12] 夕立が来たら
[01:41.76] 濡れながら帰ろう
[01:43.28] 雨と一緒に泣きながら帰ろう
[01:46.84] 再生ボタンは
[01:48.24] 傷ついた言葉に使っちゃ駄目だ
[01:53.56] 「いかないでよ、ねぇ」って
[01:55.32] 君が言うから
[01:56.76] 躊躇する足は止まった
[01:58.52] その時の僕はこう思った
[01:59.96] 途切れそうな鼓動を
[02:01.88] 明日へと繋ぐ
[02:03.56] 君は僕の音楽みたいだね
[02:06.40] 「泣かないでよ、ねぇ」って
[02:08.56] 僕が言うのは
[02:10.12] 何だかちょっと可笑しいか
[02:11.64] 嬉し涙って笑った
[02:13.36] 途切れそうな鼓動を
[02:15.20] 繋げ僕らの
[02:16.76] 世界で二人だけのリズムで
[02:24.76] 二人だけのリズムで
`,
        lyrics_rom: `
mata ashita ne wa iitakunai
daremo inai kaerimichi
nande namida ga derun darou na
entenka o naide
chaimu ga nattara
hikari no hayasa de kaerou
asa to onaji kyoku kikinagara kaerou
saisei
itsumo wa kikoenai oto ga shita
ki no sei ka
nakanaide ikou tte
kimi ga iu kara
shoujiki hontou ni komatta
yuuyake ni futari somatta
ame no sei da yo tte uso o tsuita
sekai de futari dake mitai da ne
boku wa machigatte itan da
shukanteki ni kanjiru merodii de
sekai no subete wo shitta you na kao wo shite
kimi no suki na kyoku ya kashi wo shireta dake de
kimi no subete wo shitta you na ki ga shite
chigaun da yo baka bakka
baka wa docchi datteiun datte
karakara na kokoro wa
rakka mou kyapa oobaa
yuiitsu muni no bouonzai
kokoro no sakebi ga kikoenai you ni
kyou mo heddohon no onryou ageta
yuudachi ga kitara
nure nagara kaerou
ame to issho ni nakinagara kaerou
saisei botan wa
kizutsuita kotoba ni tsukaccha dame da
ika naide yo nee tte
kimi ga iu kara
chuutosuru ashi wa tomatta
sono toki no boku wa kou omotta
kiresou na kodou wo
ashita e to tsunagu
kimi wa boku no ongaku mitai da ne
nakanaide yo nee tte
boku ga iu no wa
nandaka chotto okashii ka
ureshi namida tte waratta
kiresou na kodou o
tsunage bokura no
sekai de futari dake no rizumu de
futari dake no rizumu de`,
        lyrics_cn: `
不想说出那句「明天见」
走在空无一人的归途
穿行在沉闷无风的烈日之下
为何泪流不止
每当下课铃声响起
立刻飞奔回家吧
让我们听着早晨的那首歌踏上归途
再生
听到了平时未曾察觉的声响
是我的错觉吗
「别哭了 我们走吧」
只因你这样对我说
说实话真让我不知所措
我俩的身影被晚霞染得彤红
我撒谎说「这都是雨水的错」
仿佛这世界只剩下你我两人
我一直都弄错了
仅凭主观感受到的旋律
就摆出一副看透世界一切的面孔
仅仅了解你喜欢的歌曲与歌词
就自以为懂得了你的全部
才不是这样 你们都是傻瓜
到底谁才是真正的傻瓜啊
干涸枯竭的内心
直线坠落 早已不堪重负
这独一无二的隔音屏障
为了不再听见内心的呐喊
今天也默默调高了耳机的音量
如果傍晚下起骤雨
就任由大雨淋湿 踏上归途吧
伴着雨水痛哭一场 踏上归途吧
播放按钮
绝不能用来回放那些伤人的话语
「求求你 不要走」
只因你这样对我说
我踌躇的脚步顿时停下
那一刻我的心里这样想着
将快要停滞的心跳
一点点维系到明天
你简直就像是我的音乐呢
「别哭了 好不好」
这句话由我来说出口
总觉得这场面有些滑稽
你笑着说这是喜悦的泪滴
连接快要停滞的心跳
这是属于我们的
这世上独一无二的节奏
独一无二的节奏
`,
        lyrics_en: `I don’t want to say, “See you tomorrow”
On the way home with no one around
I wonder why the tears come
As the scorching heat falls still
When the chime rings
Let's race home at the speed of light
Let’s go home listening to the same song as this morning
Replay
I heard a sound I usually can’t hear
Was it just my imagination?
“Don’t cry, let’s go”
You said
Honestly I was really at a loss
The two of us were bathed in the sunset
“It’s because of the rain” I lied
It feels like we’re the only two people in the world
I was wrong
With melodies I felt so personally
I acted like I knew everything about the world
Just because I learned your favorite songs and lyrics
I felt like I knew everything about you
That’s not it, you’re all idiots
Who's the real idiot here?
My heart had gone completely dry
It's falling, already over capacity
My one and only soundproof wall
So I won’t hear the screams of my heart
I turned up the volume on my headphones today too
If an evening shower comes,
Let's walk home getting soaked
Let's cry together with the rain on the way home
You mustn’t use
The replay button on words that hurt someone
“Don’t go, please”
You said
My hesitant feet came to a stop
At that moment this is what I thought
Carry my fading heartbeat
Into tomorrow
You’re like music to me
“Don’t cry, please”
When I say that
It somehow feels a little funny
You smiled and said they were happy tears
Carry our fading heartbeats
With a rhythm
Only the two of us can share
Only the two of us can share
`,
        trans_source: 'YouTube @ナナツカゼ'
    }
];
