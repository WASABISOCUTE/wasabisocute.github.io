const authorConfigs = {
  "wasabisocute": "picture/avatar/WASABISOCUTE.jpg"
};

function getAuthorAvatar(authorName, customAvatar) {
  if (!authorName) return customAvatar || '';
  const key = authorName.trim().toLowerCase();
  if (authorConfigs[key]) {
    return authorConfigs[key];
  }
  return customAvatar || '';
}

const presetArticles = [
  {
    "id": "childrens-day-origin",
    "title": "儿童节的由来",
    "subtitle": "关于6月1日国际儿童节的历史",
    "author": "WASABISOCUTE",
    "authorAvatar": "",
    "email": "wasabi9487@gmail.com",
    "category": "fun facts",
    "coverType": "preset",
    "coverValue": "emerald-glow",
    "tags": [
      "Children",
      "Days",
      "June",
      "1st"
    ],
    "date": "Jun 1, 2026",
    "readTime": "1 min read",
    "lang": "zh",
    "content": "每年的6月1日是国际儿童节。这一天是为了庆祝儿童拥有快乐成长的权利，也提醒大家关心儿童的健康、教育和幸福。\n\n儿童节的由来和第二次世界大战有关。当时有很多儿童因为战争而失去家园、食物和亲人，生活非常困难。为了保护世界上的儿童，让他们能够安全成长，许多国家开始重视儿童福利。后来，国际组织决定把6月1日定为儿童节，希望全世界的人都能够关爱儿童。\n\n在不同国家，儿童节的庆祝方式也不一样。有些学校会举办表演、游戏和比赛，也有家长会带孩子出去游玩，让孩子们度过快乐的一天。对于小朋友来说，儿童节是一个充满欢笑和回忆的节日。\n\n顺带一提，6月1日这一天也是我的生日。所以我可以每年庆祝儿童节哦。"
  },
  {
    "id": "meta-cosmic-design",
    "title": "The Future of Web Design: Cosmic Aesthetics & Micro-interactions",
    "subtitle": "How standard flat designs are giving way to glowing glassmorphism, responsive grids, and delightful cosmic spaces.",
    "author": "Antigravity",
    "authorAvatar": "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity",
    "email": "[EMAIL_ADDRESS]",
    "category": "tech",
    "coverType": "preset",
    "coverValue": "neon-dusk",
    "tags": [
      "Design",
      "Aesthetics",
      "WebDev",
      "Cosmic"
    ],
    "date": "May 18, 2026",
    "readTime": "4 min read",
    "lang": "en",
    "content": "Web design is undergoing a stellar shift. The sterile, flat, and monochrome layouts that dominated the last decade are rapidly making way for richer, more dimensional, and visually expressive systems. We call this the era of **Cosmic Aesthetics**.\n\n## What defines Cosmic Aesthetics?\n\nAt its core, Cosmic Aesthetics merges the dark ambient depth of outer space with premium UI details:\n\n1. **Ambient Gradients**: Instead of solid colors, we use complex, shifting color fields—radial gradients that mimic deep space nebulas.\n2. **Glassmorphism**: Translucent card layouts (`backdrop-filter`) with frosted borders. These create depth and separate layer levels organically.\n3. **Interactive Shadows & Glows**: Subtle, responsive neon shadows around focus elements that react to mouse hover.\n4. **Fluid Micro-interactions**: Animations that feel organic, not robotic. These guide the reader's eye and reward interactions with subtle visual feedback.\n\n> \"A great interface doesn't just display information. It draws the reader into a crafted universe, encouraging exploration and sparking curiosity.\"\n\n### Building a Cosmic Gradient\nTo create a gorgeous space background, avoid a plain deep blue or black. Use multi-stop radial gradients:\n\n```css\nbody {\n  background: radial-gradient(circle at 20% 20%, #2b2b5a, #0b0b18 60%, #05050b);\n}\n```\n\nBy positioning the center off-screen, you create a soft lighting source that makes the page feel alive and illuminated."
  },
  {
    "id": "github-pages-guide",
    "title": "Getting Started with GitHub Pages: A Developer's Handbook",
    "subtitle": "Learn how to build, optimize, and launch a gorgeous personal profile or blog directly on GitHub for free.",
    "author": "Antigravity",
    "authorAvatar": "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity",
    "email": "[EMAIL_ADDRESS]",
    "category": "tech",
    "coverType": "preset",
    "coverValue": "cosmic-abyss",
    "tags": [
      "GitHub",
      "Hosting",
      "Tutorial",
      "CI-CD"
    ],
    "date": "May 12, 2026",
    "readTime": "3 min read",
    "lang": "en",
    "content": "Building a presence online shouldn't require maintaining a complex database or paying steep hosting fees. **GitHub Pages** remains one of the most powerful, frictionless ways to showcase your profile, code repos, and articles directly from a repository.\n\n## Why GitHub Pages?\n\n- **Completely Free**: High-speed, global CDN hosting provided by GitHub.\n- **Git Integration**: Push your code, and the updates are automatically built and deployed.\n- **Custom Domains**: Easily bind your personal domain name with HTTPS support out of the box.\n\n### Setting Up a Custom Repository\n\nTo host a personal site (like `username.github.io`), simply create a public repository exactly matching that name:\n\n1. Create a repo called `WASABISOCUTE.github.io`\n2. Add an `index.html` page\n3. Commit and push your changes!\n\nWithin minutes, your site will be live across the globe. You can further expand your static site by using client-side JavaScript to fetch your public repositories from the GitHub API or persist user data via `localStorage`."
  },
  {
    "id": "astrophotography-exploring",
    "title": "Exploring the Wonders of Astrophotography",
    "subtitle": "Capturing the light of distant galaxies and nebulas from a backyard observatory setup.",
    "author": "Antigravity",
    "authorAvatar": "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity",
    "email": "[EMAIL_ADDRESS]",
    "category": "science",
    "coverType": "preset",
    "coverValue": "aurora-borealis",
    "tags": [
      "Space",
      "Astrophotography",
      "Science",
      "Optics"
    ],
    "date": "April 28, 2026",
    "readTime": "5 min read",
    "lang": "en",
    "content": "Capturing objects millions of light-years away is one of the most challenging yet profoundly rewarding pursuits in science and photography. Modern digital sensors have democratized astrophotography, allowing amateur stargazers to reveal structures completely invisible to the naked human eye.\n\n## The Essential Backyard Kit\n\nTo get started with deep-space imaging, you need more than a standard camera:\n\n- **Equatorial Mount**: The Earth rotates, causing stars to trail in long exposures. An equatorial mount aligns with the Earth's rotational axis and tracks the sky perfectly.\n- **Apochromatic Refractor**: A specialized telescope using low-dispersion glass to prevent chromatic aberration, focusing all light wavelengths to the exact same point.\n- **Dedicated Cooled CMOS Camera**: These cameras cool their sensors up to 40°C below ambient temperature to eliminate thermal noise in long-exposure frames.\n\n> \"When you look at a photograph of the Andromeda Galaxy, you are looking at light that left its source 2.5 million years ago, long before early humans walked the Earth.\"\n\nWhether you are capturing wide fields of the Milky Way with a basic camera and tracker or peering deep into supernova remnants, the cosmos is a canvas of infinite beauty waiting to be explored."
  },
  {
    "id": "restrict-socialmedia",
    "title": "马来西亚限制16岁以下青少年使用社交媒体：保护还是限制？",
    "subtitle": "从校园事件到网络安全，探讨新政策背后的原因、影响与争议。",
    "author": "WASABISOCUTE",
    "authorAvatar": "",
    "email": "wasabi9487@gmail.com",
    "category": "life",
    "lang": "zh",
    "coverType": "preset",
    "coverValue": "cyber-sunset",
    "tags": [
      "Social",
      "Media",
      "Youth",
      "CyberSafety",
      "Malaysia"
    ],
    "date": "Jun 5, 2026",
    "readTime": "4 min read",
    "content": "2026年6月1日，马来西亚正式实施新规定，禁止16岁以下青少年注册及持有社交媒体账号。受影响的平台包括 Facebook、Instagram、TikTok 及 YouTube 等主要社交媒体平台。平台必须落实年龄验证机制，违反规定的公司可能面临高额罚款。\n\n这项政策一公布，立即引发社会广泛讨论。有人认为这是保护青少年的必要措施，也有人担心这会限制年轻人的学习与表达空间。那么，这项政策究竟为何出现？又会带来什么影响？\n\n## 政策出现的背景\n\n近年来，马来西亚不断出现与社交媒体相关的青少年事件，包括网络霸凌、隐私泄露、网络诈骗、性剥削以及模仿危险挑战等问题。\n\n其中，一些校园事件在网络上迅速发酵，例如2025年宽柔中学古来分校深伪不雅照事件、2025年白沙罗万达镇国中命案等。这些事件虽然情况各有不同，但都显示出一个共同现象：社交媒体已经成为青少年生活的重要部分，而网络舆论往往会迅速放大校园矛盾。\n\n与此同时，政府也关注到青少年长期使用社交媒体所带来的心理健康问题，包括：\n\n- 网络霸凌\n- 容貌焦虑\n- 网络成瘾\n- 睡眠不足\n- 假消息传播\n- 网络诈骗受害风险\n\n马来西亚通讯及多媒体委员会（MCMC）表示，新规定的主要目标是保护未成年人免受有害内容影响，并降低网络风险。\n\n## 政策可能带来的好处\n\n### 1. 减少网络霸凌\n\n网络霸凌已经成为全球的严重问题之一。\n\n现实生活中的一句玩笑、一张照片，经过社交媒体传播后，可能演变成大规模攻击。限制低龄用户使用社交媒体，有助于减少他们直接暴露于网络攻击环境之中。\n\n### 2. 保护心理健康\n\n研究显示，过度使用社交媒体容易导致焦虑、自卑及抑郁情绪。\n\n当青少年不断比较自己的外貌、成绩或生活时，容易产生「别人都比我优秀」的错觉，影响自我认同。\n\n### 3. 降低网络犯罪风险\n\n未成年人往往缺乏辨识诈骗和危险人物的能力。\n\n诈骗集团、网络骗子甚至恋爱诈骗者经常利用社交媒体寻找目标。年龄限制有机会减少此类风险。\n\n### 4. 鼓励现实社交\n\n政策支持者认为，减少线上活动后，青少年可能会把更多时间投入现实生活，例如：\n\n- 运动\n- 阅读\n- 课外活动\n- 家庭互动\n- 朋友聚会\n\n## 政策可能带来的问题\n\n### 1. 难以真正执行\n\n这是外界最常提出的质疑。\n\n许多青少年可能通过：\n\n- 使用父母账号\n- 虚报年龄\n- VPN\n- 海外平台注册\n\n等方式绕过限制。\n\n如果无法有效执行，政策可能流于形式。\n\n### 2. 影响学习资源获取\n\n如今许多教育内容已经转移至社交媒体平台。\n\n例如：\n\n- 教学内容\n- 课程讲解\n- 网络课程\n- 实验影像\n\n不少学生透过 YouTube、TikTok 或 Instagram 学习知识。全面限制可能影响这部分资源获取。\n\n### 3. 影响创作者发展\n\n现今许多年轻创作者在15岁甚至更小的时候便开始经营频道。\n\n音乐创作者、动画创作者、游戏创作者及学生记者等，都可能受到影响。\n\n未来或许需要建立专门针对未成年创作者的特殊机制。\n\n### 4. 隐私争议\n\n新政策要求社交平台实施年龄验证机制。部分人士担忧，未来可能需要上传身份证件或个人资料进行验证，从而引发隐私与数据安全问题。\n\n## 对学校和家庭的影响\n\n学校方面，教师可能面对较少的网络纠纷案件，但同时也需要承担更多数码素养教育责任。\n\n家庭方面，父母将成为政策成败的重要关键。\n\n如果家长本身缺乏网络安全意识，即使社交媒体受到限制，孩子仍然可能透过其他平台接触类似内容。\n\n因此，教育与陪伴的重要性并不会因为禁令而消失。\n\n## 我的看法\n\n我认为，这项政策的出发点并不正确的。\n\n虽然近年来，无论是校园网络霸凌事件、个人隐私外泄，还是青少年沉迷短视频的问题，都显示出社交媒体可能对未成年人造成的影响。\n\n然而，单纯禁止并不能完全解决问题。\n\n真正重要的是培养青少年的数码素养，让他们学会判断资讯真伪、保护个人隐私、应对网络霸凌，以及合理控制上网时间。\n\n如果一个15岁的学生已经具备成熟的网络使用能力，那么年龄本身未必能够准确判断风险；相反，如果一个成年人缺乏网络安全意识，同样可能成为受害者。\n\n因此，我认为未来最理想的方向并不是「完全禁止」或「完全开放」，而是在保护与教育之间取得平衡。\n\n社交媒体本身并非洪水猛兽，关键在于使用它的人是否具备足够的判断能力。只有当家庭、学校、平台和政府共同合作时，青少年才能真正安全地进入数字时代。"
  }
];
