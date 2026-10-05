const socialLinks = [
    { title: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/WASABISOCUTE" },
    { title: "WhatsApp", icon: "fa-brands fa-whatsapp", url: "https://api.whatsapp.com/send/?phone=601120904182" },
    { title: "Email", icon: "fa-regular fa-envelope", url: "mailto: wasabi9487@gmail.com" }
];

const linkSections = [

    {
        title: "Social Media",
        links: [
            { text: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/wasabisimyeezhe_ws" },
            { text: "Threads", icon: "fa-brands fa-threads", url: "https://www.threads.com/wasabisimyeezhe_ws" },
            { text: "Facebook", icon: "fa-brands fa-facebook", url: "https://www.facebook.com/wasabisimyeezhe0601" },
            { text: "YouTube", icon: "fa-brands fa-youtube", url: "https://www.youtube.com/@wasabisyz_ws" }
        ]
    },
    {
        title: "My Space",
        links: [
            { text: "Home", icon: "fa-solid fa-home", url: "index.html" },
            { text: "Articles", icon: "fa-solid fa-newspaper", url: "articles-show.html" },
            { text: "Music Collection", icon: "fa-solid fa-compact-disc", url: "music_collection/index.html" },
            { text: "Game UID", icon: "fa-solid fa-gamepad", url: "gameuid.html" }
        ]
    },
    {
        title: "Gallery",
        links: [
            { text: "WASABISOCUTE 素材库", icon: "fa-solid fa-images", url: "https://drive.google.com/drive/folders/1XV_0gUgPc1f8-WWFHFSEI6bhlc_xxSyO" },
            { text: "校内拍摄视频", icon: "fa-solid fa-video", url: "https://drive.google.com/drive/folders/1AQ-d9B7Ylc39jCplZ9a8hxONap4bkMSg" }
        ]
    },
    {
        title: "Other",
        links: [
            { text: "系列题材提议", icon: "fa-solid fa-lightbulb", url: "https://forms.gle/acNMT4miAESi6ruNA" },
            { text: "Marshmallow Anonymous Question", icon: "fa-solid fa-comment", url: "https://marshmallow-qa.com/k5s024n3xnwwjvo" },
            { text: "Feedback", icon: "fa-solid fa-envelope", url: "https://forms.gle/npgs13nafMt1hXZj7" }
        ]
    },
    {
        title: "规章制度",
        links: [
            { text: "《社区管理条例》", icon: "fa-solid fa-city", url: "https://docs.google.com/document/d/1uZKl3Zu1e25DNKgYaX0Rdk68gtnLIGdjfHKm9WKsMGk/edit?tab=t.0#heading=h.j2y0c9gj9zg9" },
            { text: "《视频录制条例》", icon: "fa-solid fa-video", url: "https://docs.google.com/document/d/1uZKl3Zu1e25DNKgYaX0Rdk68gtnLIGdjfHKm9WKsMGk/edit?tab=t.uw934di58xd3#heading=h.w5i11jz4qpgs" }
        ]
    },
];

// Render Social Links
const socialContainer = document.getElementById('social-header-container');
if (socialContainer) {
    socialLinks.forEach(social => {
        const a = document.createElement('a');
        a.href = social.url;
        a.className = 'social-btn';
        a.title = social.title;

        const i = document.createElement('i');
        i.className = social.icon;

        a.appendChild(i);
        socialContainer.appendChild(a);
    });
}

// Render Link Sections
const sectionsContainer = document.getElementById('link-sections-container');
if (sectionsContainer) {
    linkSections.forEach(section => {
        // Section Header
        const header = document.createElement('div');
        header.className = 'section-header';
        header.textContent = section.title;
        sectionsContainer.appendChild(header);

        // Links Container
        const linksContainer = document.createElement('div');
        linksContainer.className = 'links-container';

        section.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.className = 'link-pill';

            const iIcon = document.createElement('i');
            iIcon.className = `${link.icon} link-icon`;

            const spanText = document.createElement('span');
            spanText.className = 'link-text';
            spanText.textContent = link.text;

            const divShare = document.createElement('div');
            divShare.className = 'link-share';
            const iShare = document.createElement('i');
            iShare.className = 'fa-solid fa-ellipsis-vertical';
            divShare.appendChild(iShare);

            divShare.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                openShareModal(link.text, link.url);
            });

            a.appendChild(iIcon);
            a.appendChild(spanText);
            a.appendChild(divShare);

            linksContainer.appendChild(a);
        });

        sectionsContainer.appendChild(linksContainer);
    });
}

// Share Modal & Toast Helper Functions
let currentShareTitle = '';
let currentShareUrl = '';
let toastTimer = null;

function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

function openShareModal(title, rawUrl) {
    const modal = document.getElementById('share-modal');
    const titleEl = document.getElementById('share-modal-title');
    const urlEl = document.getElementById('share-modal-url');
    if (!modal) return;

    // Resolve absolute URL
    const anchor = document.createElement('a');
    anchor.href = rawUrl;
    const fullUrl = anchor.href;

    currentShareTitle = title;
    currentShareUrl = fullUrl;

    if (titleEl) titleEl.textContent = title;
    if (urlEl) urlEl.textContent = fullUrl;

    modal.classList.add('active');
}

function closeShareModal() {
    const modal = document.getElementById('share-modal');
    if (modal) modal.classList.remove('active');
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Fallback copy failed', err);
        }
        document.body.removeChild(textarea);
        return Promise.resolve();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('share-modal-close');
    const modalOverlay = document.getElementById('share-modal');
    const copyBtn = document.getElementById('share-btn-copy');
    const nativeShareBtn = document.getElementById('share-btn-native');
    const openBtn = document.getElementById('share-btn-open');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeShareModal);
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeShareModal();
        });
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            copyToClipboard(currentShareUrl).then(() => {
                showToast('已复制链接到剪贴板 / Copied link');
                closeShareModal();
            });
        });
    }

    if (nativeShareBtn) {
        nativeShareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: currentShareTitle,
                    url: currentShareUrl
                }).catch(err => {
                    if (err.name !== 'AbortError') {
                        console.log('Share failed:', err);
                    }
                });
            } else {
                copyToClipboard(currentShareUrl).then(() => {
                    showToast('已复制链接到剪贴板 / Copied link');
                    closeShareModal();
                });
            }
        });
    }

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            window.open(currentShareUrl, '_blank');
            closeShareModal();
        });
    }
});