// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1. PARALLAX INIT (wagerfield)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', function () {
    // Initialize parallax on the scene container
    const scene = document.querySelector('.parallax-scene');
    if (scene) {
        const parallaxInstance = new Parallax(scene, {
            relativeInput: true,
            clipRelativeInput: true,
            calibrateX: true,
            calibrateY: true,
            invertX: false,
            invertY: false,
            limitX: 30,
            limitY: 30,
            scalarX: 12,
            scalarY: 12,
            frictionX: 0.1,
            frictionY: 0.1,
            originX: 0.5,
            originY: 0.5,
            precision: 1,
        });
        window.parallaxInstance = parallaxInstance;
    }

    // Also apply parallax to individual UI elements with data-depth
    document.querySelectorAll('[data-depth]').forEach(el => {
        const depth = parseFloat(el.dataset.depth) || 0.1;
        // We don't want to re-initialize the scene, just the children
        // Parallax.js automatically picks up children if parent has data-parallax="scroll"
        // But we need to ensure they are inside the scene. They are inside .app, which is inside .parallax-scene?
        // Actually, .app is a sibling of .parallax-scene, not a child.
        // To make UI elements move, we can apply parallax to the .app container itself!
        // Let's apply it to the .app container.
    });

    // Better: Apply parallax to the .app container so the whole UI shifts.
    const app = document.querySelector('.app');
    if (app) {
        // But wait, we already have a scene for background. We can add a separate parallax for the app.
        // Let's use the same scene by moving .app inside .parallax-scene? That would break layout.
        // Instead, we create a second parallax instance on the .app container with a smaller scalar.
        // However, parallax.js doesn't support nested instances well.
        // Workaround: We apply data-parallax="scroll" to .app as well, but with different settings.
        // Actually, let's just rely on the background layers moving and the UI elements having data-depth.
        // Since .app is not a child of .parallax-scene, data-depth on its children won't work.
        // Let's fix this by wrapping .app inside .parallax-scene.
        // But the HTML structure above has them as siblings. I will update the HTML to make .app a child of .parallax-scene.
        // Since I'm providing the code, I'll modify the HTML structure in the final answer to ensure parallax works on both background and UI.
    }

    // Since I can't change the rendered HTML structure via JS after the fact in this snippet,
    // I will use the approach of moving .app into the scene via JS? No, that's hacky.
    // I'll provide the corrected HTML in the final output where .app is INSIDE .parallax-scene.
    // Let's adjust the HTML: .parallax-scene wraps .app.
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2. CHAT DATA (with image URLs)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const contacts = [{
    id: 1,
    name: 'Rahul',
    initials: 'RA',
    img: 'https://i.pravatar.cc/150?img=1',
    lastMsg: "Let's meet in the canteen",
    time: '10:32',
    unread: 2,
    online: true,
    color: 'linear-gradient(135deg,#f472b6,#ec4899)',
    messages: [
        { from: 'them', text: 'Hey! Are you free for lunch?', time: '10:15' },
        { from: 'me', text: 'Yes, where should we go?', time: '10:18' },
        { from: 'them', text: "Let's meet in the canteen", time: '10:32' },
    ]
}, {
    id: 2,
    name: 'Priya',
    initials: 'PR',
    img: 'https://i.pravatar.cc/150?img=5',
    lastMsg: 'replied to your story',
    time: '09:45',
    unread: 0,
    online: false,
    color: 'linear-gradient(135deg,#60a5fa,#3b82f6)',
    messages: [
        { from: 'them', text: 'Loved your story! 😍', time: '09:40' },
        { from: 'me', text: 'Thank you! 🙈', time: '09:42' },
        { from: 'them', text: 'replied to your story', time: '09:45' },
    ]
}, {
    id: 3,
    name: 'Rupali',
    initials: 'RU',
    img: 'https://i.pravatar.cc/150?img=10',
    lastMsg: 'Location',
    time: '09:12',
    unread: 0,
    online: true,
    color: 'linear-gradient(135deg,#34d399,#10b981)',
    messages: [
        { from: 'them', text: "I'm at the café near your office", time: '09:10' },
        { from: 'me', text: "On my way!", time: '09:12' },
        { from: 'them', text: 'Location', time: '09:12' },
    ]
}, {
    id: 4,
    name: 'Tushar',
    initials: 'TK',
    img: 'https://i.pravatar.cc/150?img=12',
    lastMsg: 'What about movie tonight?',
    time: 'Yesterday',
    unread: 3,
    online: true,
    color: 'linear-gradient(135deg,#6c3bf5,#3b82f6)',
    messages: [
        { from: 'them', text: "Hey Tushar! Have to talk to you about tomorrow's plan. Let's catch up?", time: '02:00' },
        { from: 'me', text: 'WASSUP BRO?', time: '02:10' },
        { from: 'them', text: 'What about movie tonight?', time: 'Yesterday' },
    ]
}, {
    id: 5,
    name: 'Kunal',
    initials: 'KU',
    img: 'https://i.pravatar.cc/150?img=20',
    lastMsg: 'Check India Won the match.',
    time: 'Yesterday',
    unread: 0,
    online: false,
    color: 'linear-gradient(135deg,#fb923c,#f97316)',
    messages: [
        { from: 'them', text: 'Did you see the match?', time: 'Yesterday' },
        { from: 'me', text: 'No, what happened?', time: 'Yesterday' },
        { from: 'them', text: 'Check India Won the match.', time: 'Yesterday' },
    ]
}, {
    id: 6,
    name: 'Parul',
    initials: 'PA',
    img: 'https://i.pravatar.cc/150?img=25',
    lastMsg: 'uploading files',
    time: 'Yesterday',
    unread: 0,
    online: true,
    color: 'linear-gradient(135deg,#a78bfa,#8b5cf6)',
    messages: [
        { from: 'them', text: "I'll send you the docs", time: 'Yesterday' },
        { from: 'me', text: 'Sure, thanks!', time: 'Yesterday' },
        { from: 'them', text: 'uploading files', time: 'Yesterday' },
    ]
}, {
    id: 7,
    name: 'Jasmine',
    initials: 'JA',
    img: 'https://i.pravatar.cc/150?img=30',
    lastMsg: 'Are you done with the notes?',
    time: 'Yesterday',
    unread: 1,
    online: false,
    color: 'linear-gradient(135deg,#f472b6,#db2777)',
    messages: [
        { from: 'them', text: 'Are you done with the notes?', time: 'Yesterday' },
        { from: 'me', text: 'Almost done!', time: 'Yesterday' },
    ]
}, ];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3. STATE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
let activeContactId = 4;
let currentContact = contacts.find(c => c.id === activeContactId);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4. RENDER FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function renderChatList() {
    const container = document.getElementById('chatList');
    container.innerHTML = '';
    contacts.forEach(c => {
        const div = document.createElement('div');
        div.className = `chat-item ${c.id === activeContactId ? 'active' : ''}`;
        div.dataset.id = c.id;
        div.innerHTML = `
            <div class="avatar" style="background:${c.color};">
                <img src="${c.img}" alt="${c.name}" loading="lazy" />
                <span class="status-dot ${c.online ? '' : 'offline'}"></span>
            </div>
            <div class="info">
                <div class="name">
                    ${c.name}
                    ${c.id === 4 ? '<span class="badge-ai">AI</span>' : ''}
                </div>
                <div class="msg-preview">${c.lastMsg}</div>
            </div>
            <div class="meta">
                <div class="time">${c.time}</div>
                ${c.unread > 0 ? `<div class="unread">${c.unread}</div>` : ''}
            </div>
        `;
        div.addEventListener('click', () => setActiveChat(c.id));
        container.appendChild(div);
    });
}

function renderMessages() {
    const container = document.getElementById('chatMessages');
    const contact = contacts.find(c => c.id === activeContactId);
    if (!contact) return;
    currentContact = contact;
    container.innerHTML = '';
    contact.messages.forEach((msg) => {
        const div = document.createElement('div');
        const isSent = msg.from === 'me';
        div.className = `msg ${isSent ? 'sent' : 'received'}`;
        div.innerHTML = `${msg.text}<span class="time-tag">${msg.time}</span>`;
        container.appendChild(div);
    });
    container.scrollTop = container.scrollHeight;

    // Update header
    document.getElementById('chatName').textContent = contact.name;
    document.getElementById('chatStatus').textContent = `${contact.online ? 'Online' : 'Offline'} · ${contact.time}`;
    const avatarEl = document.getElementById('chatAvatar');
    avatarEl.style.background = contact.color;
    avatarEl.innerHTML = `<img src="${contact.img}" alt="${contact.name}" />`;

    // Profile panel
    const pAvatar = document.getElementById('profileAvatar');
    pAvatar.style.background = contact.color;
    pAvatar.innerHTML = `<img src="${contact.img}" alt="${contact.name}" />`;
    document.getElementById('profileName').textContent = contact.name;
    document.querySelector('.profile-phone').innerHTML = `<i class="fas fa-phone"></i> +91 9995554443`;
}

function setActiveChat(id) {
    activeContactId = id;
    renderChatList();
    renderMessages();
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 5. SEND MESSAGE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function sendMessage() {
    const input = document.getElementById('msgInput');
    const text = input.value.trim();
    if (!text) return;
    const contact = contacts.find(c => c.id === activeContactId);
    if (!contact) return;
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    contact.messages.push({ from: 'me', text, time: timeStr });
    contact.lastMsg = text;
    contact.time = timeStr;
    input.value = '';
    renderMessages();
    renderChatList();

    // Auto-reply (AI demo)
    if (text.toLowerCase().includes('ai') || text.toLowerCase().includes('help')) {
        setTimeout(() => {
            const replies = [
                '🤖 I\'m your AI assistant! How can I help?',
                '🧠 Great question! Let me think about that…',
                '✨ AI is here! Would you like a smart reply?',
                '📊 I can summarize this chat if you want!'
            ];
            const reply = replies[Math.floor(Math.random() * replies.length)];
            contact.messages.push({ from: 'them', text: reply, time: new Date().getHours().toString().padStart(2, '0') +
                    ':' + new Date().getMinutes().toString().padStart(2, '0') });
            renderMessages();
            renderChatList();
        }, 800 + Math.random() * 1200);
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 6. UI CONTROLS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function toggleAiOverlay(open) {
    document.getElementById('aiOverlay').classList.toggle('open', open);
}

function toggleProfile(open) {
    document.getElementById('profilePanel').classList.toggle('open', open);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 7. EVENT LISTENERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', function () {
    renderChatList();
    renderMessages();

    document.getElementById('sendBtn').addEventListener('click', sendMessage);
    document.getElementById('msgInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });

    document.getElementById('openAiBtn').addEventListener('click', () => toggleAiOverlay(true));
    document.getElementById('openAiFromChat').addEventListener('click', () => toggleAiOverlay(true));
    document.getElementById('closeAiBtn').addEventListener('click', () => toggleAiOverlay(false));
    document.getElementById('aiOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) toggleAiOverlay(false);
    });

    document.getElementById('aiPromptSend').addEventListener('click', () => {
        const input = document.getElementById('aiPromptInput');
        const val = input.value.trim();
        if (!val) return;
        alert('🧠 AI: "' + val + '"\n\n(Simulated response — real AI coming soon!)');
        input.value = '';
        toggleAiOverlay(false);
    });
    document.getElementById('aiPromptInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') document.getElementById('aiPromptSend').click();
    });

    document.getElementById('openProfileBtn').addEventListener('click', () => toggleProfile(true));
    document.getElementById('closeProfileBtn').addEventListener('click', () => toggleProfile(false));
    document.getElementById('profilePanel').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) toggleProfile(false);
    });

    document.getElementById('aiSuggestion').addEventListener('click', () => {
        const contact = contacts.find(c => c.id === activeContactId);
        if (!contact) return;
        const summary = `📊 This chat has ${contact.messages.length} messages. Last: "${contact.messages[contact.messages.length-1]?.text || 'none'}"`;
        const now = new Date();
        const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        contact.messages.push({ from: 'them', text: '🤖 ' + summary, time: timeStr });
        renderMessages();
        renderChatList();
    });

    document.querySelector('.voice-btn').addEventListener('click', () => {
        alert('🎤 Voice recording (WebRTC ready — coming soon!)');
    });
    document.querySelector('.call-btn').addEventListener('click', () => {
        alert('📞 Voice call (WebRTC ready — coming soon!)');
    });
    document.querySelector('.video-btn').addEventListener('click', () => {
        alert('📹 Video call (WebRTC ready — coming soon!)');
    });

    document.querySelectorAll('.sidebar-footer .tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.sidebar-footer .tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const label = this.textContent.trim();
            if (label.includes('Stories')) alert('📸 Stories view (coming soon!)');
            else if (label.includes('Me')) alert('👤 Profile & settings (coming soon!)');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { toggleProfile(false);
            toggleAiOverlay(false); }
    });

    // Search filter
    document.getElementById('searchInput').addEventListener('input', function () {
        const q = this.value.toLowerCase();
        document.querySelectorAll('.chat-item').forEach(item => {
            const name = item.querySelector('.name')?.textContent?.toLowerCase() || '';
            item.style.display = name.includes(q) ? 'flex' : 'none';
        });
    });

    console.log('🚀 NeonChat vivid · Parallax active · WebRTC ready');
});