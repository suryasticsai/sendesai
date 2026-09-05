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
            limitX: 25,
            limitY: 25,
            scalarX: 10,
            scalarY: 10,
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

// My own profile data
const myProfile = {
    name: 'Ravi Kant Gupta',
    phone: '+91 9995554443',
    img: 'https://i.pravatar.cc/150?img=11',
    color: 'linear-gradient(135deg,#8b5cf6,#6d28d9)',
    time: 'Just now'
};

// Call logs data
const callLogs = [
    { name: 'Priya', type: 'missed', time: '10:45', img: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Rahul', type: 'incoming', time: '09:30', img: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Kunal', type: 'outgoing', time: 'Yesterday', img: 'https://i.pravatar.cc/150?img=20' },
    { name: 'Tushar', type: 'incoming', time: 'Yesterday', img: 'https://i.pravatar.cc/150?img=12' },
    { name: 'Parul', type: 'missed', time: 'Yesterday', img: 'https://i.pravatar.cc/150?img=25' },
];

let activeContactId = 4;
let currentTab = 'chat';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3. RENDER CHAT LIST
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
// 4. RENDER CALL LIST
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function renderCallList() {
    const container = document.getElementById('callList');
    container.innerHTML = '';
    callLogs.forEach(call => {
        const div = document.createElement('div');
        div.className = 'call-item';
        const iconMap = {
            missed: 'fa-phone-slash',
            incoming: 'fa-phone-arrow-down',
            outgoing: 'fa-phone-arrow-up'
        };
        const labelMap = {
            missed: 'Missed',
            incoming: 'Incoming',
            outgoing: 'Outgoing'
        };
        div.innerHTML = `
            <div class="call-icon ${call.type}">
                <i class="fas ${iconMap[call.type]}"></i>
            </div>
            <div class="call-info">
                <div class="call-name">${call.name}</div>
                <div class="call-detail">${labelMap[call.type]} · ${call.time}</div>
            </div>
            <div class="call-time">${call.time}</div>
        `;
        container.appendChild(div);
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 5. TAB SWITCHING (Chat / Calls / Me)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.list-footer .tab').forEach(el => {
        el.classList.toggle('active', el.dataset.tab === tab);
    });

    const chatPanel = document.getElementById('chatPanel');
    const callsPanel = document.getElementById('callsPanel');

    if (tab === 'chat') {
        chatPanel.style.display = 'block';
        callsPanel.style.display = 'none';
        document.getElementById('searchInput').placeholder = 'Search chats...';
    } else if (tab === 'calls') {
        chatPanel.style.display = 'none';
        callsPanel.style.display = 'block';
        document.getElementById('searchInput').placeholder = 'Search calls...';
        renderCallList(); // ensure it's rendered
    } else if (tab === 'me') {
        // Open My Profile
        openMyProfile();
        // Reset active tab to chat visually, but keep me highlighted?
        // Actually, we close profile and go back to chat tab, but we want "Me" to open profile.
        // We'll keep the tab active as "Me" while profile is open.
        document.querySelectorAll('.list-footer .tab').forEach(el => {
            el.classList.toggle('active', el.dataset.tab === 'me');
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 6. OPEN / CLOSE CHAT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function openChat(id) {
    activeContactId = id;
    renderMessages();
    document.getElementById('chatView').classList.add('open');
    document.getElementById('listView').classList.add('shrink');
    document.querySelectorAll('.chat-item').forEach(el => {
        el.classList.toggle('active', parseInt(el.dataset.id) === id);
    });
    // If "Me" tab was active, revert to chat tab after closing profile
    if (currentTab === 'me') {
        // switch back to chat tab visually but keep profile open? Actually profile is separate.
        // We'll just let it be.
    }
}

function closeChat() {
    document.getElementById('chatView').classList.remove('open');
    document.getElementById('listView').classList.remove('shrink');
    renderChatList();
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 7. RENDER MESSAGES
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
        div.style.animationDelay = `${index * 0.04}s`;
        div.innerHTML = `${msg.text}<span class="time-tag">${msg.time}</span>`;
        container.appendChild(div);
    });
    container.scrollTop = container.scrollHeight;

    document.getElementById('chatName').textContent = contact.name;
    document.getElementById('chatStatus').textContent = `${contact.online ? 'Online' : 'Offline'} · ${contact.time}`;
    const avatarEl = document.getElementById('chatAvatar');
    avatarEl.style.background = contact.color;
    avatarEl.innerHTML = `<img src="${contact.img}" alt="${contact.name}" />`;

    // For contact profile (when opened from chat header)
    document.getElementById('profileAvatar').style.background = contact.color;
    document.getElementById('profileAvatar').innerHTML = `<img src="${contact.img}" alt="${contact.name}" />`;
    document.getElementById('profileName').textContent = contact.name;
    document.getElementById('profilePhone').innerHTML = `<i class="fas fa-phone"></i> +91 9995554443`;
    document.getElementById('profileTime').innerHTML = `<i class="far fa-clock"></i> Last active: ${contact.time}`;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 8. OPEN MY PROFILE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function openMyProfile() {
    const panel = document.getElementById('profilePanel');
    document.getElementById('profileAvatar').style.background = myProfile.color;
    document.getElementById('profileAvatar').innerHTML = `<img src="${myProfile.img}" alt="${myProfile.name}" />`;
    document.getElementById('profileName').textContent = myProfile.name;
    document.getElementById('profilePhone').innerHTML = `<i class="fas fa-phone"></i> ${myProfile.phone}`;
    document.getElementById('profileTime').innerHTML = `<i class="far fa-clock"></i> Last active: ${myProfile.time}`;
    panel.classList.add('open');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 9. SEND MESSAGE
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
// 10. UI TOGGLES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function toggleAiOverlay(open) {
    document.getElementById('aiOverlay').classList.toggle('open', open);
}

function toggleProfile(open) {
    if (!open) {
        document.getElementById('profilePanel').classList.remove('open');
        // If we opened it via "Me", revert tab to chat
        if (currentTab === 'me') {
            // Switch back to chat tab visually
            switchTab('chat');
        }
    } else {
        // If opening from chat header, it loads contact data via renderMessages already.
        // We just need to open the panel.
        document.getElementById('profilePanel').classList.add('open');
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 11. EVENT LISTENERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', function () {
    renderChatList();
    renderCallList();

    // Back button
    document.getElementById('backBtn').addEventListener('click', closeChat);

    // Send
    document.getElementById('sendBtn').addEventListener('click', sendMessage);
    document.getElementById('msgInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });

    // AI overlay
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

    // Profile panel (from chat header)
    document.getElementById('openProfileBtn').addEventListener('click', () => {
        // Render contact data first (already done in renderMessages)
        toggleProfile(true);
    });
    document.getElementById('closeProfileBtn').addEventListener('click', () => toggleProfile(false));
    document.getElementById('profilePanel').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) toggleProfile(false);
    });

    // AI suggestion
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

    // Voice / Call / Video
    document.querySelector('.voice-btn').addEventListener('click', () => alert('🎤 Voice (WebRTC ready)'));
    document.querySelector('.call-btn').addEventListener('click', () => alert('📞 Call (WebRTC ready)'));
    document.querySelector('.video-btn').addEventListener('click', () => alert('📹 Video (WebRTC ready)'));

    // Footer Tabs
    document.querySelectorAll('.list-footer .tab').forEach(tab => {
        tab.addEventListener('click', function () {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });

    // Search filter
    document.getElementById('searchInput').addEventListener('input', function () {
        const q = this.value.toLowerCase();
        if (currentTab === 'chat') {
            document.querySelectorAll('.chat-item').forEach(item => {
                const name = item.querySelector('.name')?.textContent?.toLowerCase() || '';
                item.style.display = name.includes(q) ? 'flex' : 'none';
            });
        } else if (currentTab === 'calls') {
            document.querySelectorAll('.call-item').forEach(item => {
                const name = item.querySelector('.call-name')?.textContent?.toLowerCase() || '';
                item.style.display = name.includes(q) ? 'flex' : 'none';
            });
        }
    });

    // Close views with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('profilePanel').classList.contains('open')) toggleProfile(false);
            else if (document.getElementById('aiOverlay').classList.contains('open')) toggleAiOverlay(false);
            else if (document.getElementById('chatView').classList.contains('open')) closeChat();
        }
    });

    console.log('🚀 NeonChat · Ultra mobile-friendly · Chat | Calls | Me');
});