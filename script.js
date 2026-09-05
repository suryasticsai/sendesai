// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1. PARALLAX
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', function () {
    const scene = document.querySelector('.parallax-scene');
    if (scene) {
        new Parallax(scene, {
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
    }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2. DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const contacts = [{
    id: 1,
    name: 'Rahul',
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

let activeContactId = 4;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3. RENDER LIST
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function renderChatList() {
    const container = document.getElementById('chatList');
    container.innerHTML = '';
    contacts.forEach(c => {
        const div = document.createElement('div');
        div.className = 'chat-item';
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
        div.addEventListener('click', () => openChat(c.id));
        container.appendChild(div);
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4. OPEN / CLOSE CHAT (with animations)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function openChat(id) {
    activeContactId = id;
    renderMessages();
    const chatView = document.getElementById('chatView');
    const listView = document.getElementById('listView');

    // Shrink list for depth
    listView.classList.add('shrink');
    // Slide in chat
    chatView.classList.add('open');

    // Update active state in list
    document.querySelectorAll('.chat-item').forEach(el => {
        el.classList.toggle('active', parseInt(el.dataset.id) === id);
    });
}

function closeChat() {
    const chatView = document.getElementById('chatView');
    const listView = document.getElementById('listView');

    chatView.classList.remove('open');
    listView.classList.remove('shrink');
    renderChatList(); // refresh unread counts
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 5. RENDER MESSAGES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function renderMessages() {
    const container = document.getElementById('chatMessages');
    const contact = contacts.find(c => c.id === activeContactId);
    if (!contact) return;
    container.innerHTML = '';
    contact.messages.forEach((msg, index) => {
        const div = document.createElement('div');
        const isSent = msg.from === 'me';
        div.className = `msg ${isSent ? 'sent' : 'received'}`;
        // stagger animation by index
        div.style.animationDelay = `${index * 0.04}s`;
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
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 6. SEND MESSAGE
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

    // Auto AI reply
    if (text.toLowerCase().includes('ai') || text.toLowerCase().includes('help')) {
        setTimeout(() => {
            const replies = [
                '🤖 I\'m your AI assistant! How can I help?',
                '🧠 Great question! Let me think…',
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
// 7. UI TOGGLES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function toggleAiOverlay(open) {
    document.getElementById('aiOverlay').classList.toggle('open', open);
}
function toggleProfile(open) {
    document.getElementById('profilePanel').classList.toggle('open', open);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 8. EVENT LISTENERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', function () {
    renderChatList();

    document.getElementById('backBtn').addEventListener('click', closeChat);

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
        alert('🧠 AI: "' + val + '"\n\n(Simulated response)');
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

    document.querySelector('.voice-btn').addEventListener('click', () => alert('🎤 Voice (WebRTC ready)'));
    document.querySelector('.call-btn').addEventListener('click', () => alert('📞 Call (WebRTC ready)'));
    document.querySelector('.video-btn').addEventListener('click', () => alert('📹 Video (WebRTC ready)'));

    document.querySelectorAll('.list-footer .tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.list-footer .tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const label = this.textContent.trim();
            if (label.includes('Stories')) alert('📸 Stories coming soon!');
            else if (label.includes('Me')) alert('👤 Profile settings coming soon!');
        });
    });

    document.getElementById('searchInput').addEventListener('input', function () {
        const q = this.value.toLowerCase();
        document.querySelectorAll('.chat-item').forEach(item => {
            const name = item.querySelector('.name')?.textContent?.toLowerCase() || '';
            item.style.display = name.includes(q) ? 'flex' : 'none';
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('profilePanel').classList.contains('open')) toggleProfile(false);
            else if (document.getElementById('aiOverlay').classList.contains('open')) toggleAiOverlay(false);
            else if (document.getElementById('chatView').classList.contains('open')) closeChat();
        }
    });

    console.log('🚀 NeonChat · Single‑pane · Spring animations · Parallax active');
});