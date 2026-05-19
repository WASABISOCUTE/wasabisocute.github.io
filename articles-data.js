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
    id: "childrens-day-origin",
    title: "儿童节的由来",
    subtitle: "关于6月1日国际儿童节的历史",
    author: "WASABISOCUTE",
    authorAvatar: "",
    email: "wasabi9487@gmail.com",
    category: "fun facts",
    coverType: "preset",
    coverValue: "emerald-glow",
    tags: ["Children", "Days", "June", "1st"],
    date: "May 18, 2026",
    readTime: "1 min read",
    lang: "zh",
  },
  {
    id: "meta-cosmic-design",
    title: "The Future of Web Design: Cosmic Aesthetics & Micro-interactions",
    subtitle: "How standard flat designs are giving way to glowing glassmorphism, responsive grids, and delightful cosmic spaces.",
    author: "Antigravity",
    authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity",
    email: "[EMAIL_ADDRESS]",
    category: "tech",
    coverType: "preset",
    coverValue: "neon-dusk",
    tags: ["Design", "Aesthetics", "WebDev", "Cosmic"],
    date: "May 18, 2026",
    readTime: "4 min read",
    lang: "en",
    content: `Web design is undergoing a stellar shift. The sterile, flat, and monochrome layouts that dominated the last decade are rapidly making way for richer, more dimensional, and visually expressive systems. We call this the era of **Cosmic Aesthetics**.

## What defines Cosmic Aesthetics?

At its core, Cosmic Aesthetics merges the dark ambient depth of outer space with premium UI details:

1. **Ambient Gradients**: Instead of solid colors, we use complex, shifting color fields—radial gradients that mimic deep space nebulas.
2. **Glassmorphism**: Translucent card layouts (\`backdrop-filter\`) with frosted borders. These create depth and separate layer levels organically.
3. **Interactive Shadows & Glows**: Subtle, responsive neon shadows around focus elements that react to mouse hover.
4. **Fluid Micro-interactions**: Animations that feel organic, not robotic. These guide the reader's eye and reward interactions with subtle visual feedback.

> "A great interface doesn't just display information. It draws the reader into a crafted universe, encouraging exploration and sparking curiosity."

### Building a Cosmic Gradient
To create a gorgeous space background, avoid a plain deep blue or black. Use multi-stop radial gradients:

\`\`\`css
body {
  background: radial-gradient(circle at 20% 20%, #2b2b5a, #0b0b18 60%, #05050b);
}
\`\`\`

By positioning the center off-screen, you create a soft lighting source that makes the page feel alive and illuminated.`
  },
  {
    id: "github-pages-guide",
    title: "Getting Started with GitHub Pages: A Developer's Handbook",
    subtitle: "Learn how to build, optimize, and launch a gorgeous personal profile or blog directly on GitHub for free.",
    author: "Antigravity",
    authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity",
    email: "[EMAIL_ADDRESS]",
    category: "tech",
    coverType: "preset",
    coverValue: "cosmic-abyss",
    tags: ["GitHub", "Hosting", "Tutorial", "CI-CD"],
    date: "May 12, 2026",
    readTime: "3 min read",
    lang: "en",
    content: `Building a presence online shouldn't require maintaining a complex database or paying steep hosting fees. **GitHub Pages** remains one of the most powerful, frictionless ways to showcase your profile, code repos, and articles directly from a repository.

## Why GitHub Pages?

- **Completely Free**: High-speed, global CDN hosting provided by GitHub.
- **Git Integration**: Push your code, and the updates are automatically built and deployed.
- **Custom Domains**: Easily bind your personal domain name with HTTPS support out of the box.

### Setting Up a Custom Repository

To host a personal site (like \`username.github.io\`), simply create a public repository exactly matching that name:

1. Create a repo called \`WASABISOCUTE.github.io\`
2. Add an \`index.html\` page
3. Commit and push your changes!

Within minutes, your site will be live across the globe. You can further expand your static site by using client-side JavaScript to fetch your public repositories from the GitHub API or persist user data via \`localStorage\`.`
  },
  {
    id: "astrophotography-exploring",
    title: "Exploring the Wonders of Astrophotography",
    subtitle: "Capturing the light of distant galaxies and nebulas from a backyard observatory setup.",
    author: "Antigravity",
    authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity",
    email: "[EMAIL_ADDRESS]",
    category: "science",
    coverType: "preset",
    coverValue: "aurora-borealis",
    tags: ["Space", "Astrophotography", "Science", "Optics"],
    date: "April 28, 2026",
    readTime: "5 min read",
    lang: "en",
    content: `Capturing objects millions of light-years away is one of the most challenging yet profoundly rewarding pursuits in science and photography. Modern digital sensors have democratized astrophotography, allowing amateur stargazers to reveal structures completely invisible to the naked human eye.

## The Essential Backyard Kit

To get started with deep-space imaging, you need more than a standard camera:

- **Equatorial Mount**: The Earth rotates, causing stars to trail in long exposures. An equatorial mount aligns with the Earth's rotational axis and tracks the sky perfectly.
- **Apochromatic Refractor**: A specialized telescope using low-dispersion glass to prevent chromatic aberration, focusing all light wavelengths to the exact same point.
- **Dedicated Cooled CMOS Camera**: These cameras cool their sensors up to 40°C below ambient temperature to eliminate thermal noise in long-exposure frames.

> "When you look at a photograph of the Andromeda Galaxy, you are looking at light that left its source 2.5 million years ago, long before early humans walked the Earth."

Whether you are capturing wide fields of the Milky Way with a basic camera and tracker or peering deep into supernova remnants, the cosmos is a canvas of infinite beauty waiting to be explored.`
  }
];
