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
    id: "meta-cosmic-design",
    title: "儿童节的由来",
    subtitle: "关于6月1日国际儿童节的历史",
    author: "Antigravity",
    authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Antigravity",
    email: "wasabi9487@gmail.com",
    category: "fun facts",
    coverType: "preset",
    coverValue: "emerald-glow",
    tags: ["Children", "Days", "June", "1st"],
    date: "May 18, 2026",
    readTime: "1 min read",
    lang: "zh",
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
  }
];
