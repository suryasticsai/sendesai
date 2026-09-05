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
    initFab();
    initDialpad();
    initSettings();
    initRegistration();
    initFabToggle();
    // Re-apply status if already registered
    const savedUser = localStorage.getItem('neonUser');
    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);
            updateStatusBadge(user);
            // Update profile
            document.getElementById('profileName').textContent = user.name || 'Ravi';
            document.getElementById('profilePhone').innerHTML = `<i class="fas fa-phone"></i> ${user.phone || '+91 9995554443'}`;
        } catch (e) {}
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

const myProfile = {
    name: 'Ravi Kant Gupta',
    phone: '+91 9995554443',
    img: 'https://i.pravatar.cc/150?img=11',
    color: 'linear-gradient(135deg,#8b5cf6,#6d28d9)',
    time: 'Just now'
};

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
        const iconMap = { missed: 'fa-phone-slash', incoming: 'fa-phone-arrow-down', outgoing: 'fa-phone-arrow-up' };
        const labelMap = { missed: 'Missed', incoming: 'Incoming', outgoing: 'Outgoing' };
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
// 5. TAB SWITCHING
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
        renderCallList();
    } else if (tab === 'me') {
        openMyProfile();
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
// 10. FAB (draggable)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function initFab() {
    const fab = document.getElementById('fabButton');
    let isDragging = false;
    let startX, startY, origX, origY;

    const onStart = (e) => {
        const touch = e.touches ? e.touches[0] : e;
        isDragging = true;
        startX = touch.clientX;
        startY = touch.clientY;
        const rect = fab.getBoundingClientRect();
        origX = rect.left;
        origY = rect.top;
        fab.style.cursor = 'grabbing';
        e.preventDefault();
    };

    const onMove = (e) => {
        if (!isDragging) return;
        const touch = e.touches ? e.touches[0] : e;
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        let newX = origX + dx;
        let newY = origY + dy;
        const rect = fab.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width - 8;
        const maxY = window.innerHeight - rect.height - 8;
        newX = Math.max(8, Math.min(newX, maxX));
        newY = Math.max(8, Math.min(newY, maxY));
        fab.style.left = newX + 'px';
        fab.style.top = newY + 'px';
        fab.style.right = 'auto';
        fab.style.bottom = 'auto';
        e.preventDefault();
    };

    const onEnd = () => {
        isDragging = false;
        fab.style.cursor = 'grab';
    };

    fab.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    fab.addEventListener('touchstart', onStart, { passive: false });
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);

    let clickTimer = null;
    fab.addEventListener('click', (e) => {
        if (isDragging) return;
        if (clickTimer) clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            document.getElementById('dialpadOverlay').classList.add('open');
        }, 100);
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 11. DIALPAD
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function initDialpad() {
    const overlay = document.getElementById('dialpadOverlay');
    const display = document.getElementById('dialpadDisplay');
    let number = '';

    document.getElementById('dialpadClose').addEventListener('click', () => {
        overlay.classList.remove('open');
        number = '';
        display.textContent = '';
    });
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('open');
            number = '';
            display.textContent = '';
        }
    });

    document.querySelectorAll('.dial-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.dataset.value;
            number += val;
            display.textContent = number;
        });
    });

    document.getElementById('dialDelete').addEventListener('click', () => {
        number = number.slice(0, -1);
        display.textContent = number;
    });

    document.getElementById('dialCall').addEventListener('click', () => {
        if (number.trim()) {
            alert(`📞 Calling ${number}... (WebRTC ready)`);
            overlay.classList.remove('open');
            number = '';
            display.textContent = '';
        } else {
            alert('Please enter a number');
        }
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 12. SETTINGS (theme, toggles)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function initSettings() {
    // Theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const theme = this.dataset.theme;
            applyTheme(theme);
            localStorage.setItem('neonTheme', theme);
        });
    });

    const savedTheme = localStorage.getItem('neonTheme') || 'dark';
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === savedTheme);
    });
    applyTheme(savedTheme);

    // Toggle switches - save state
    document.querySelectorAll('.toggle-switch input').forEach(input => {
        const key = input.id || 'toggle_' + Math.random();
        const saved = localStorage.getItem(key);
        if (saved !== null) input.checked = saved === 'true';
        input.addEventListener('change', function () {
            localStorage.setItem(this.id || 'toggle_' + Math.random(), this.checked);
        });
    });

    // Language select
    const langSelect = document.querySelector('.lang-select');
    const savedLang = localStorage.getItem('neonLang') || 'en';
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', function () {
            localStorage.setItem('neonLang', this.value);
        });
    }

    // Logout
    document.querySelector('.logout-btn')?.addEventListener('click', () => {
        if (confirm('Logout? (Demo)')) {
            alert('Logged out! (Demo)');
            localStorage.clear();
            location.reload();
        }
    });
}

function applyTheme(theme) {
    const app = document.getElementById('app');
    const body = document.body;

    if (theme === 'light') {
        app.style.background = 'rgba(240, 242, 247, 0.85)';
        app.style.backdropFilter = 'blur(28px) saturate(1.6)';
        body.style.background = '#e8ecf1';
        document.querySelectorAll('.msg.received').forEach(el => {
            el.style.background = 'rgba(0,0,0,0.04)';
            el.style.color = '#1a1832';
        });
        document.querySelectorAll('.chat-item .info .name').forEach(el => el.style.color = '#1a1832');
        document.querySelectorAll('.msg-preview').forEach(el => el.style.color = '#4a4a6a');
        document.querySelectorAll('.chat-name').forEach(el => el.style.color = '#1a1832');
        document.querySelectorAll('.logo span').forEach(el => {
            el.style.background = 'linear-gradient(135deg, #6c3bf5, #3b82f6)';
            el.style.webkitBackgroundClip = 'text';
            el.style.webkitTextFillColor = 'transparent';
        });
        document.querySelectorAll('.setting-item span').forEach(el => el.style.color = '#1a1832');
        document.querySelectorAll('.settings-header').forEach(el => el.style.color = '#6c3bf5');
        document.getElementById('fabButton').style.boxShadow = '0 8px 32px rgba(108, 59, 245, 0.3)';
    } else if (theme === 'neon') {
        app.style.background = 'rgba(20, 8, 50, 0.85)';
        app.style.backdropFilter = 'blur(28px) saturate(1.8)';
        body.style.background = '#0a0520';
        document.querySelectorAll('.msg.received').forEach(el => {
            el.style.background = 'rgba(139, 92, 246, 0.12)';
            el.style.color = '#d4c4ff';
            el.style.borderColor = 'rgba(139, 92, 246, 0.2)';
        });
        document.querySelectorAll('.chat-item .info .name').forEach(el => el.style.color = '#e4d4ff');
        document.querySelectorAll('.msg-preview').forEach(el => el.style.color = '#9a8abe');
        document.querySelectorAll('.chat-name').forEach(el => el.style.color = '#e4d4ff');
        document.querySelectorAll('.logo span').forEach(el => {
            el.style.background = 'linear-gradient(135deg, #c084fc, #f472b6)';
            el.style.webkitBackgroundClip = 'text';
            el.style.webkitTextFillColor = 'transparent';
        });
        document.querySelectorAll('.setting-item span').forEach(el => el.style.color = '#d4c4ff');
        document.querySelectorAll('.settings-header').forEach(el => el.style.color = '#c084fc');
        document.getElementById('fabButton').style.boxShadow = '0 0 40px rgba(192, 132, 252, 0.6), 0 0 80px rgba(192, 132, 252, 0.2)';
    } else {
        // Dark (default)
        app.style.background = 'rgba(12, 10, 28, 0.7)';
        app.style.backdropFilter = 'blur(28px) saturate(1.6)';
        body.style.background = '#07050e';
        document.querySelectorAll('.msg.received').forEach(el => {
            el.style.background = 'rgba(255, 255, 255, 0.06)';
            el.style.color = '#eef0f5';
            el.style.borderColor = 'rgba(255, 255, 255, 0.04)';
        });
        document.querySelectorAll('.chat-item .info .name').forEach(el => el.style.color = '#f0f2f7');
        document.querySelectorAll('.msg-preview').forEach(el => el.style.color = '#7a89a8');
        document.querySelectorAll('.chat-name').forEach(el => el.style.color = '#f0f2f7');
        document.querySelectorAll('.logo span').forEach(el => {
            el.style.background = 'linear-gradient(135deg, #a78bfa, #6ee7ff)';
            el.style.webkitBackgroundClip = 'text';
            el.style.webkitTextFillColor = 'transparent';
        });
        document.querySelectorAll('.setting-item span').forEach(el => el.style.color = '#d0d8ec');
        document.querySelectorAll('.settings-header').forEach(el => el.style.color = '#a78bfa');
        document.getElementById('fabButton').style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.4)';
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 13. REGISTRATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function initRegistration() {
    const overlay = document.getElementById('regOverlay');
    const openBtn = document.getElementById('openRegForm');
    const closeBtn = document.getElementById('regClose');
    const submitBtn = document.getElementById('regSubmit');
    const otpSend = document.getElementById('otpSend');

    // Open
    openBtn.addEventListener('click', () => overlay.classList.add('open'));

    // Close
    closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('open');
    });

    // OTP simulation
    otpSend.addEventListener('click', () => {
        const phone = document.getElementById('regPhone').value.trim();
        if (!phone) {
            alert('Please enter phone number first');
            return;
        }
        alert(`📱 OTP sent to ${phone} (Demo: 1234)`);
        document.getElementById('regOtp').value = '1234';
    });

    // Register
    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('regName').value.trim();
        const userid = document.getElementById('regUserid').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const otp = document.getElementById('regOtp').value.trim();

        if (!name || !userid || !phone || !otp) {
            alert('Please fill all fields');
            return;
        }
        if (otp !== '1234') {
            alert('Invalid OTP. Use 1234 (demo)');
            return;
        }

        // Save registration data
        const userData = { name, userid, phone, registered: true, status: 'offline' };
        localStorage.setItem('neonUser', JSON.stringify(userData));

        // Update UI
        updateStatusBadge(userData);
        overlay.classList.remove('open');

        // Also update profile panel with new name
        document.getElementById('profileName').textContent = name;
        document.getElementById('profilePhone').innerHTML = `<i class="fas fa-phone"></i> ${phone}`;

        alert('✅ Registration successful! Welcome, ' + name);
    });
}

function updateStatusBadge(user) {
    const badge = document.getElementById('statusBadge');
    const dot = document.getElementById('statusDot');
    const text = document.getElementById('statusText');
    if (user && user.registered) {
        badge.style.display = 'inline-flex';
        const status = user.status || 'offline';
        dot.className = 'status-dot-badge ' + (status === 'online' ? 'online' : '');
        text.textContent = status.charAt(0).toUpperCase() + status.slice(1);
        // Click on badge to toggle status
        badge.style.cursor = 'pointer';
        badge.onclick = function (e) {
            e.stopPropagation();
            const current = user.status || 'offline';
            const newStatus = current === 'online' ? 'offline' : 'online';
            user.status = newStatus;
            localStorage.setItem('neonUser', JSON.stringify(user));
            updateStatusBadge(user);
        };
    } else {
        badge.style.display = 'none';
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 14. FAB TOGGLE (from settings)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function initFabToggle() {
    const toggle = document.getElementById('fabToggle');
    const fab = document.getElementById('fabButton');

    // Load saved state
    const saved = localStorage.getItem('fabVisible');
    if (saved !== null) {
        const visible = saved === 'true';
        toggle.checked = visible;
        fab.classList.toggle('hidden', !visible);
    }

    toggle.addEventListener('change', function () {
        const visible = this.checked;
        fab.classList.toggle('hidden', !visible);
        localStorage.setItem('fabVisible', visible);
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 15. UI TOGGLES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function toggleAiOverlay(open) {
    document.getElementById('aiOverlay').classList.toggle('open', open);
}

function toggleProfile(open) {
    if (!open) {
        document.getElementById('profilePanel').classList.remove('open');
        if (currentTab === 'me') switchTab('chat');
    } else {
        document.getElementById('profilePanel').classList.add('open');
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 16. EVENT LISTENERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('DOMContentLoaded', function () {
    renderChatList();
    renderCallList();

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
            switchTab(this.dataset.tab);
        });
    });

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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('profilePanel').classList.contains('open')) toggleProfile(false);
            else if (document.getElementById('aiOverlay').classList.contains('open')) toggleAiOverlay(false);
            else if (document.getElementById('chatView').classList.contains('open')) closeChat();
            else if (document.getElementById('dialpadOverlay').classList.contains('open')) {
                document.getElementById('dialpadOverlay').classList.remove('open');
                document.getElementById('dialpadDisplay').textContent = '';
            } else if (document.getElementById('regOverlay').classList.contains('open')) {
                document.getElementById('regOverlay').classList.remove('open');
            }
        }
    });

    console.log('🚀 NeonChat · Complete · Registration · Status · FAB · Dialpad · Themes');
});