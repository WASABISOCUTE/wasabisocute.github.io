const games = [eee
    {
        id: "genshin",
        name: "Genshin Impact",
        name_zh: "原神",
        name_ja: "原神",
        uid: "890809370",
        ign: "WASABISOCUTE",
        server: "Asia",
        platform: "Mobile / PC / PS5",
        genre: "rpg",
        dateJoined: "2023/09/10",
        installed: true,
        web: "https://genshin.hoyoverse.com/",
        download: { android: "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact", ios: "https://apps.apple.com/us/app/genshin-impact/id1517783697", pc: "https://genshin.hoyoverse.com/" },
        theme: { gradient: "linear-gradient(135deg, #0b2f35, #1fa2ff)", color: "#ffe599", glow: "rgba(255, 229, 153, 0.4)", logo: "GI" }
    },
    {
        id: "hsr",
        name: "Honkai: Star Rail",
        name_zh: "崩坏：星穹铁道",
        name_ja: "崩壊：スターレイル",
        uid: "829489975",
        ign: "WASABISOCUTE",
        server: "Asia",
        platform: "Mobile / PC / PS5",
        dateJoined: "2023/11/26",
        installed: false,
        web: "https://hsr.hoyoverse.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.HoYoverse.hkrpgoversea&pcampaignid=web_share",
            ios: "https://apps.apple.com/us/app/honkai-star-rail/id1599719154",
            pc: "https://hsr.hoyoverse.com/"
        },
        theme: {
            gradient: "linear-gradient(135deg, #1b213b, #4a3475)",
            color: "#fea2ba",
            glow: "rgba(254, 162, 186, 0.4)",
            logo: "HSR"
        }
    },
    {
        id: "wuwa",
        name: "Wuthering Waves",
        name_zh: "鸣潮",
        name_ja: "鳴潮",
        uid: "902033757",
        ign: "WASABISOCUTE",
        server: "Asia",
        platform: "Mobile / PC",
        genre: "rpg",
        dateJoined: "2024/05/25",
        installed: false,
        web: "https://wutheringwaves.kurogames.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.kurogame.wutheringwaves.global",
            ios: "https://apps.apple.com/us/app/wuthering-waves-2nd-anniv/id6475033368",
            pc: "https://wutheringwaves.kurogames.com/"
        },
        theme: {
            gradient: "linear-gradient(135deg, #0e1217, #243547)",
            color: "#64748b",
            glow: "rgba(100, 116, 139, 0.4)",
            logo: "WuWa"
        }
    },
    {
        id: "zzz",
        name: "Zenless Zone Zero",
        name_zh: "绝区零",
        name_ja: "ゼンレスゾーンゼロ",
        uid: "1301491173",
        ign: "WASABISOCUTE",
        server: "Asia",
        platform: "Mobile / PC / PS5",
        genre: "rpg",
        dateJoined: "2024/07/04",
        installed: false,
        web: "https://zenless.hoyoverse.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.HoYoverse.Nap",
            ios: "https://apps.apple.com/us/app/zenless-zone-zero/id1606356401",
            pc: "https://zenless.hoyoverse.com/"
        },
        theme: {
            gradient: "linear-gradient(135deg, #18181b, #facc15)",
            color: "#cc5500",
            glow: "rgba(204, 85, 0, 0.3)",
            logo: "ZZZ"
        }
    },
    {
        id: "pjsekai-en",
        name: "Hatsune Miku: Colorful Stage",
        uid: "557473370690953223",
        ign: "WASABISOCUTE",
        server: "EN Server (Global)",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2024/12/02",
        installed: true,
        web: "https://www.colorfulstage.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.sega.ColorfulStage.en",
            ios: "https://apps.apple.com/app/id1580044138",
        },
        theme: {
            gradient: "linear-gradient(135deg, #4f46e5, #39c5bb)",
            color: "#33ccbb",
            glow: "rgba(51, 204, 187, 0.4)",
            logo: "PJSK"
        }
    },
    {
        id: "pjsekai-tw",
        name: "世界計畫 缤纷舞台！feat. 初音未来",
        uid: "7452268978774367029",
        ign: "WASABI",
        server: "TW Server",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2024/12",
        installed: false,
        web: "https://www.tw-pjsekai.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.hermes.mk.asia",
            ios: "https://apps.apple.com/tw/app/世界計畫-繽紛舞台-feat-初音未來/id1557595935",
        },
        theme: {
            gradient: "linear-gradient(135deg, #134e5e, #39c5bb)",
            color: "#0d9488",
            glow: "rgba(13, 148, 136, 0.4)",
            logo: "PJSK"
        }
    },
    {
        id: "pjsekai-jp",
        name: "プロジェクトセカイ カラフルステージ！ feat. 初音ミク",
        uid: "619395971567607811",
        ign: "WASABI9184",
        server: "JP Server",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2025/04/20",
        installed: true,
        web: "https://pjsekai.sega.jp/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.sega.pjsekai",
            ios: "https://app.adjust.com/2oye363",
        },
        theme: {
            gradient: "linear-gradient(135deg, #0e7490, #39c5bb)",
            color: "#0891b2",
            glow: "rgba(8, 145, 178, 0.4)",
            logo: "PJSK"
        }
    },
    {
        id: "pjsekai-cn",
        name: "初音未来：缤纷舞台",
        uid: "7507137651108240180",
        ign: "WASABI",
        server: "CN Server",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2025/05/23",
        installed: false,
        web: "https://pjsk.nvsgames.cn/",
        download: {
            android: "https://pjsk.nvsgames.cn/",
            ios: "https://pjsk.nvsgames.cn/",
        },
        theme: {
            gradient: "linear-gradient(135deg, #0f172a, #39c5bb)",
            color: "#14b8a6",
            glow: "rgba(20, 184, 166, 0.3)",
            logo: "PJSK"
        }
    },
    {
        id: "pjsekai-kr",
        name: "프로젝트 세카이 컬러풀 스테이지! feat.하츠네 미쿠",
        uid: "7507588644467923773",
        ign: "WASABI",
        server: "KR Server",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2025/05/24",
        installed: false,
        web: "https://www.kr-pjsekai.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.pjsekai.kr",
            ios: "https://apps.apple.com/kr/app/프로젝트-세카이-컬러풀-스테이지-feat-하츠네-미쿠/id1598881852",
        },
        theme: {
            gradient: "linear-gradient(135deg, #1e293b, #39c5bb)",
            color: "#07f2ff",
            glow: "rgba(7, 242, 255, 0.3)",
            logo: "PJSK"
        }
    },
    {
        id: "rotaeno",
        name: "Rotaeno",
        name_zh: "旋转音律",
        name_ja: "Rotaeno - ロテーノ",
        uid: "YUPQMY",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2024/05/31",
        installed: true,
        note: {
            zh: "Rotaeno 是单向好友机制，加我后你即可查看我的成绩。<br>如需互关，请通过社交媒体(IG, WhatsApp等)把你的ID发给我。",
            en: "Rotaeno has a one-way friend system. Add my ID to see my scores.<br>For mutual follow, please send me your ID via social media (IG, WhatsApp, etc.).",
            ja: "Rotaenoは一方通行のフレンド機能です。<br>相互フォローをご希望の場合は、SNS (IG, WhatsApp等) であなたのIDを教えてください。"
        },
        web: "https://www.rotaeno.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.xd.rotaeno.googleplay",
            ios: "https://apps.apple.com/app/1614771445",
        },
        theme: {
            gradient: "linear-gradient(135deg, #0a0a1f, #076c77)",
            color: "#47e6f0",
            glow: "rgba(7, 230, 240, 0.4)",
            logo: "ROT"
        }
    },
    {
        id: "phi",
        name: "Phigros",
        uid: "",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2024",
        installed: true,
        web: "https://pigeon-games.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.PigeonGames.Phigros",
            ios: "https://apps.apple.com/us/app/phigros/id1454809109",
        },
        theme: {
            gradient: "linear-gradient(135deg, #06688a, #2d9596)",
            color: "#06688a",
            glow: "rgba(6, 104, 138, 0.4)",
            logo: "PHI"
        }
    },
    {
        id: "honkai3rd",
        name: "Honkai Impact 3rd",
        name_zh: "崩坏3",
        name_ja: "崩壊3rd",
        uid: "24410062",
        ign: "WASABISOCUTE",
        server: "SEA",
        platform: "Mobile / PC",
        genre: "rpg",
        dateJoined: "2024/12/05",
        installed: false,
        web: "https://honkaiimpact3.hoyoverse.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.miHoYo.bh3global",
            ios: "https://apps.apple.com/us/app/honkai-impact-3rd/id1336342304",
            pc: "https://honkaiimpact3.hoyoverse.com/"
        },
        theme: {
            gradient: "linear-gradient(135deg, #e3283e, #d6822d)",
            color: "#ff5733",
            glow: "rgba(255, 54, 116, 0.4)",
            logo: "HI3"
        }
    },
    {
        id: "reverse1999",
        name: "Reverse: 1999",
        name_zh: "重返未来：1999",
        name_ja: "リバース：1999",
        uid: "411450496",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "Mobile / PC",
        genre: "rpg",
        dateJoined: "2024",
        installed: false,
        web: "https://re1999.bluepoch.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.bluepoch.m.en.reverse1999",
            ios: "https://apps.apple.com/us/app/reverse-1999/id1672933190",
            pc: "https://re1999.bluepoch.com/"
        },
        theme: {
            gradient: "linear-gradient(135deg, #0a0a0a, #3a240a)",
            color: "#a7510f",
            glow: "rgba(167, 81, 15, 0.4)",
            logo: "R99"
        }
    },
    {
        id: "endfield",
        name: "Arknights: Endfield",
        name_zh: "明日方舟：终末地",
        name_ja: "アークナイツ：エンドフィールド",
        uid: "4742686222",
        ign: "WASABISOCUTE",
        server: "Asia",
        platform: "Mobile / PC",
        genre: "rpg",
        dateJoined: "2026/04/26",
        installed: true,
        web: "https://endfield.gryphline.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.gryphline.endfield.gp",
            ios: "https://apps.apple.com/us/app/arknights-endfield/id6752642477",
            pc: "https://endfield.gryphline.com/"
        },
        theme: {
            gradient: "linear-gradient(135deg, #2e1803, #d66a06)",
            color: "#f8f546",
            glow: "rgba(248, 245, 70, 0.4)",
            logo: "AKEF"
        }
    },
    {
        id: "nte",
        name: "Neverness to Everness",
        name_zh: "异环",
        uid: "214281392407",
        ign: "WASABISOCUTE",
        server: "SEA",
        platform: "Mobile / PC / Console",
        genre: "rpg",
        dateJoined: "2026/04/29",
        installed: true,
        web: "https://nte.perfectworld.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.hottagames.nte",
            ios: "https://apps.apple.com/us/app/nte-neverness-to-everness/id6754593077",
            pc: "https://nte.perfectworld.com/"
        },
        theme: {
            gradient: "linear-gradient(135deg, #4a10ab, #06b6d4)",
            color: "#28e5d8",
            glow: "rgba(40, 229, 216, 0.4)",
            logo: "NTE"
        }
    },
    {
        id: "rblx",
        name: "Roblox",
        uid: "WASABISOCUTE",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "PC / Mobile / Console",
        genre: "sandbox",
        dateJoined: "2021",
        installed: true,
        web: "https://www.roblox.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.roblox.client",
            ios: "https://apps.apple.com/us/app/roblox/id431946152",
            pc: "https://apps.microsoft.com/detail/9pmf91n3lz3m?referrer=appbadge&mode=direct"
        },
        theme: {
            gradient: "linear-gradient(135deg, #060911, #f06262)",
            color: "#a3aebc",
            glow: "rgba(163, 174, 188, 0.4)",
            logo: "RBLX"
        }
    },
    {
        id: "mc-java",
        name: "Minecraft Java Edition",
        name_zh: "我的世界Java版",
        uid: "WASABISOCUTE",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "PC",
        genre: "sandbox",
        dateJoined: "2021/06",
        installed: true,
        web: "https://www.minecraft.net/",
        download: {
            pc: "https://apps.microsoft.com/detail/9NXP44L49SHJ?hl=en-gb&gl=JP&ocid=pdpshare"
        },
        theme: {
            gradient: "linear-gradient(135deg, #2d4f37, #396145)",
            color: "#52a435",
            glow: "rgba(82, 164, 53, 0.4)",
            logo: "MC"
        }
    },
    {
        id: "mc-bedrock",
        name: "Minecraft Bedrock Edition",
        name_zh: "我的世界基岩版",
        uid: "WASABI9184",
        ign: "WASABI9184",
        server: "Global",
        platform: "PC / Mobile / Console",
        genre: "sandbox",
        dateJoined: "2021",
        installed: false,
        web: "https://www.minecraft.net/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe",
            ios: "https://apps.apple.com/us/app/minecraft-play-with-friends/id479516143",
            pc: "https://apps.microsoft.com/detail/9NXP44L49SHJ?hl=en-gb&gl=JP&ocid=pdpshare"
        },
        theme: {
            gradient: "linear-gradient(135deg, #3d6427, #34661c)",
            color: "#2c6c1e",
            glow: "rgba(44, 108, 30, 0.4)",
            logo: "MCBE"
        }
    },
    {
        id: "amongus",
        name: "Among Us",
        name_zh: "我们之中 / 太空狼人杀",
        uid: "liveflat#1623",
        ign: "WASABI",
        server: "Global",
        platform: "Mobile / PC",
        genre: "party",
        dateJoined: "2021",
        installed: false,
        web: "https://www.innersloth.com/games/among-us/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.innersloth.spacemafia",
            ios: "https://apps.apple.com/us/app/among-us/id1351168404",
            pc: "https://store.steampowered.com/app/945360/Among_Us/"
        },
        theme: {
            gradient: "linear-gradient(135deg, #b64b4b, #8f2b2b)",
            color: "#497e7a",
            glow: "rgba(73, 126, 122, 0.4)",
            logo: "AM"
        }
    },
    {
        id: "sonolus",
        name: "Sonolus",
        uid: "",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2024",
        installed: false,
        web: "https://sonolus.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.FosFenes.Sonolus",
            ios: "https://apps.apple.com/app/id1637055220",
        },
        theme: {
            gradient: "linear-gradient(135deg, #7b01da, #e50179)",
            color: "#6c27a0",
            glow: "rgba(108, 39, 160, 0.4)",
            logo: "SONO"
        }
    },
    {
        id: "phira",
        name: "Phira",
        uid: "WASABISOCUTE",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2024/10/20 17:30",
        installed: true,
        web: "https://phira.moe/",
        download: {
            android: "https://github.com/TeamFlos/phira/releases",
            ios: "https://apps.apple.com/us/app/phira/id6447435864",
        },
        theme: {
            gradient: "linear-gradient(135deg, #01d8fb, #9f01f0)",
            color: "#8bc5d9",
            glow: "rgba(139, 197, 217, 0.4)",
            logo: "PHIRA"
        }
    },

    {
        id: "arcaea",
        name: "Arcaea",
        uid: "172091567",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2025",
        installed: true,
        web: "https://arcaea.lowiro.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=moe.low.arc",
            ios: "https://apps.apple.com/us/app/arcaea/id1205999125",
        },
        theme: {
            gradient: "linear-gradient(135deg, #8074d3, #f08ac4)",
            color: "#463766",
            glow: "rgba(70, 55, 102, 0.4)",
            logo: "ARC"
        }
    },
    {
        id: "kalpa",
        name: "KALPA",
        uid: "WASABI_",
        ign: "WASABI_",
        server: "Global",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2025",
        installed: false,
        web: "http://www.queseragames.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.quesera.kalpa",
            ios: "https://apps.apple.com/kr/app/kalpa-original-rhythm-game/id1527726533",
        },
        theme: {
            gradient: "linear-gradient(135deg, #914931, #f07047)",
            color: "#f2d1bb",
            glow: "rgba(242, 209, 187, 0.4)",
            logo: "KLP"
        }
    },
    {
        id: "deemo2",
        name: "DEEMO II",
        uid: "WASABISOCUTE",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2025",
        installed: false,
        web: "https://rayark.com/en/games/deemo2/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.rayark.deemo2",
            ios: "https://apps.apple.com/app/deemo2/id1531981487",
        },
        theme: {
            gradient: "linear-gradient(135deg, #827058, #f4cdba)",
            color: "#a3886e",
            glow: "rgba(163, 136, 110, 0.3)",
            logo: "DM2"
        }
    },
    {
        id: "bluearchive",
        name: "Blue Archive",
        name_zh: "蔚蓝档案",
        name_ja: "ブルーアーカイブ",
        uid: "BFXQSUZQ",
        ign: "WASABISOCUTE",
        server: "Asia",
        platform: "Mobile / PC",
        genre: "gacha",
        dateJoined: "2025/05/23",
        installed: false,
        web: "https://sea.nexon.com/main/en/Blue%20Archive/details",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.nexon.bluearchive",
            ios: "https://apps.apple.com/app/id1571873795",
            pc: "https://store.steampowered.com/app/3557620/Blue_Archive/",
        },
        theme: {
            gradient: "linear-gradient(135deg, #54a0ff, #2980b9)",
            color: "#128afa",
            glow: "rgba(18, 138, 250, 0.3)",
            logo: "BLUE"
        }
    },
    {
        id: "val",
        name: "Valorant",
        name_zh: "无畏契约",
        uid: "WASABISOCUTE#9184",
        ign: "WASABISOCUTE",
        server: "Asia",
        platform: "PC",
        genre: "fps",
        dateJoined: "2024",
        installed: true,
        web: "https://playvalorant.com/",
        download: {
            pc: "https://playvalorant.com/",
        },
        theme: {
            gradient: "linear-gradient(135deg, #ec3848, #1f0013)",
            color: "#ff4655",
            glow: "rgba(255, 70, 85, 0.4)",
            logo: "VAL"
        }
    },
    {
        id: "bleap",
        name: "Bleap",
        name_zh: "闪音跃动",
        uid: "2075782725838573568",
        ign: "WASABISOCUTE#10000",
        server: "Global",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2026/07/11",
        installed: true,
        web: "https://bleap.fun",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.blp.bleap",
            ios: "https://apps.apple.com/us/app/bleap/id6744604397",
        },
        theme: {
            gradient: "linear-gradient(135deg, #8074d3, #f08ac4)",
            color: "#463766",
            glow: "rgba(70, 55, 102, 0.4)",
            logo: "BLP"
        }
    },
    {
        id: "osu",
        name: "Osu!",
        uid: "WASABISOCUTE",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "PC",
        genre: "rhythm",
        dateJoined: "2026/07/11",
        installed: true,
        web: "https://osu.ppy.sh/",
        download: {
            pc: "https://osu.ppy.sh/",
        },
        theme: {
            gradient: "linear-gradient(135deg, #ff99cc, #ff66cc)",
            color: "#ff99cc",
            glow: "rgba(255, 153, 204, 0.4)",
            logo: "OSU"
        }
    },
    {
        id: "ark-en",
        name: "Arknights",
        uid: "59238152",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "Mobile / PC",
        genre: "gacha",
        dateJoined: "2026/07/11",
        installed: false,
        web: "https://arknights.global",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.YoStarEN.Arknights",
            ios: "https://apps.apple.com/us/app/arknights/id1464872022?mt=8",
            pc: "https://play.google.com/pc-store/games/details?id=com.YoStarEN.Arknights&pcampaignid=dev-website-badge-en&sredirect=1",
        },
        theme: {
            gradient: "linear-gradient(135deg, #54a0ff, #2980b9)",
            color: "#128afa",
            glow: "rgba(18, 138, 250, 0.3)",
            logo: "ARK"
        }
    },
    {
        id: "ark-tw",
        name: "明日方舟",
        uid: "475683985",
        ign: "WASABISOCUTE",
        server: "TW Server",
        platform: "Mobile / PC",
        genre: "gacha",
        dateJoined: "2026/07/14",
        installed: false,
        web: "https://ak.gryphline.com/",
        download: {
            android: "https://gryphline-official.onelink.me/B3et/web",
            ios: "https://gryphline-official.onelink.me/B3et/web",
            pc: "https://googleplaypc.onelink.me/le1O/GPPC",
        },
        theme: {
            gradient: "linear-gradient(135deg, #54a0ff, #2980b9)",
            color: "#128afa",
            glow: "rgba(18, 138, 250, 0.3)",
            logo: "ARK"
        }
    },
    {
        id: "holo-dream",
        name: "hololive Dreams",
        uid: "SPYSAX2L",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "Mobile / PC",
        genre: "rhythm",
        dateJoined: "2026/07/23",
        installed: true,
        web: "https://www.hololive-dreams.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=game.qualiarts.hololive.dreams.com",
            ios: "https://apps.apple.com/us/app/hololive-dreams/id6756641249",
            pc: "https://store.steampowered.com/app/4282500/hololive_Dreams/",
        },
        theme: {
            gradient: "linear-gradient(135deg, #54a0ff, #2980b9)",
            color: "#128afa",
            glow: "rgba(18, 138, 250, 0.3)",
            logo: "HLD"
        }
    },
    {
        id: "asterhythm",
        name: "Asterhythm",
        uid: "",
        ign: "WASABISOCUTE",
        server: "Global",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2026/08/17",
        installed: true,
        web: "www.asteryhthm.com",
        download: {
            android: "https://play.google.com/store/apps/details%3Fid%3Dcom.straycubic.asterhythm",
            ios: "https://apps.apple.com/us/app/asterhythm/id1612029903",
        },
        theme: {
            gradient: "linear-gradient(135deg, #54a0ff, #2980b9)",
            color: "#128afa",
            glow: "rgba(18, 138, 250, 0.3)",
            logo: "ART"
        }
    },
    {
        id: "bdon",
        name: "BanG Dream: Our notes",
        name_zh: "BanG Dream！交织的乐章",
        name_ja: "ンドリ！ アワーノーツ",
        uid: "35400537608",
        ign: "WASABI9184",
        server: "EN Region",
        platform: "Mobile",
        genre: "rhythm",
        dateJoined: "2026/09/24",
        installed: true,
        web: "https://bdon.biligames.com/",
        download: {
            android: "https://play.google.com/store/apps/details?id=com.bilibili.sirius",
            ios: "https://apps.apple.com/us/app/bang-dream-our-notes/id6757695187",
        },
        theme: {
            gradient: "linear-gradient(135deg, #54a0ff, #2980b9)",
            color: "#128afa",
            glow: "rgba(18, 138, 250, 0.3)",
            logo: "BDON"
        }
    },
];
