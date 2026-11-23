/* ====================================================================
   1. SUPABASE CLOUD & PERSISTENCE CONFIGURATION LAYER
   ==================================================================== */
let SUPABASE_URL = localStorage.getItem('TRD_SUPABASE_URL') || '';
let SUPABASE_ANON_KEY = localStorage.getItem('TRD_SUPABASE_KEY') || '';
let supabaseClient = null;

if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (e) {
    console.warn('Supabase client init fallback:', e);
  }
}

/* ====================================================================
   2. MOCK & PERSISTENT DATA LAYER (LUXURY GCC / GLOBAL PROJECTS)
   ==================================================================== */
const DEFAULT_PROJECTS = [
  {
    id: 'client_neom_2026',
    accessCode: 'TRD-2026',
    clientName: 'شركة نيوم الدولية (NEOM Horizons)',
    clientEmail: 'media@neom.sa',
    projectTitle: 'نيوم: الفيلم الوثائقي الدولي - النسخة السينمائية الكاملة',
    deliveryDate: '2026-11-20',
    status: 'جاهز للمراجعة والاعتماد',
    isApproved: false,
    deliverables: [
      {
        id: 'vid_neom_hero',
        title: 'الفيلم الوثائقي الرئيسي (Hero Cinematic Cut)',
        category: 'hero',
        aspect: '16:9 DCI',
        specs: '24.8 GB • 4K DCI ProRes 422 HQ • 59.94 fps',
        streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        downloadUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        duration: '12:14',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'vid_neom_teaser',
        title: 'التيزر التشويقي العالمي (Global Teaser 60s)',
        category: 'teaser',
        aspect: '2.39:1 Anamorphic',
        specs: '4.2 GB • 4K ProRes 422 • 24.00 fps',
        streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        downloadUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '01:00',
        thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'vid_neom_reel',
        title: 'نسخة السوشيال ميديا العمودية (Vertical Reel 9:16)',
        category: 'social',
        aspect: '9:16 Vertical',
        specs: '1.8 GB • 4K H.265 Master • 60 fps',
        streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        downloadUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: '00:30',
        thumbnail: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'vid_neom_clean',
        title: 'نسخة بدون نصوص وجرافيك (Clean Plates Master)',
        category: 'clean',
        aspect: '16:9 DCI',
        specs: '22.1 GB • 4K ProRes 4444 • 59.94 fps',
        streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        downloadUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        duration: '12:14',
        thumbnail: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    feedback: [
      {
        id: 'fb_1',
        timestamp: '00:01:24',
        seconds: 84,
        category: 'Color',
        author: 'نيوم - الإشراف الفني',
        text: 'يرجى رفع إضاءة الظلال قليلاً في مشهد وادي الديسة لتعزيز التفاصيل الصخرية.',
        date: '2026-11-21 14:30',
        resolved: false
      },
      {
        id: 'fb_2',
        timestamp: '00:03:15',
        seconds: 195,
        category: 'Audio',
        author: 'مهندس صوت العميل',
        text: 'المؤثر الصوتي للرياح ممتاز جداً، يرجى خفض مستوى الموسيقى الخلفية 1.5dB عند دخول التعليق الصوتي.',
        date: '2026-11-21 16:10',
        resolved: true
      }
    ]
  },
  {
    id: 'client_mb_7788',
    accessCode: 'TRD-7788',
    clientName: 'مرسيدس-بنز الشرق الأوسط',
    clientEmail: 'marketing@mercedes-benz-mena.com',
    projectTitle: 'إطلاق Mercedes-AMG GT الجديد في الخليج - الحملة السينمائية',
    deliveryDate: '2026-11-22',
    status: 'قيد مراجعة المخرج',
    isApproved: false,
    deliverables: [
      {
        id: 'vid_mb_hero',
        title: 'الفيلم الإعلاني الرسمي 90s - Master Film',
        category: 'hero',
        aspect: '2.39:1 Anamorphic',
        specs: '16.4 GB • 4K Cinema Scope ProRes 422 HQ',
        streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        downloadUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        duration: '01:30',
        thumbnail: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'vid_mb_social',
        title: 'ريلز إنستغرام وتيك توك (Vertical Cut 9:16)',
        category: 'social',
        aspect: '9:16 Vertical',
        specs: '2.1 GB • 4K UHD 60fps',
        streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        downloadUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: '00:25',
        thumbnail: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80'
      }
    ],
    feedback: []
  },
  {
    id: 'client_rb_9900',
    accessCode: 'TRD-9900',
    clientName: 'رد بول ميديا هاوس (Red Bull)',
    clientEmail: 'productions@redbull.com',
    projectTitle: 'سلسلة مغامرة الربع الخالي القصوى - الحلقة التجريبية',
    deliveryDate: '2026-11-18',
    status: 'معتمد بالكامل',
    isApproved: true,
    deliverables: [
      {
        id: 'vid_rb_hero',
        title: 'الفيلم الكامل - Episode 01 Extreme Drift',
        category: 'hero',
        aspect: '16:9 DCI',
        specs: '31.2 GB • 4K 120fps ProRes RAW Master',
        streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        downloadUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: '09:45',
        thumbnail: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    feedback: [
      {
        id: 'fb_rb_1',
        timestamp: '00:04:12',
        seconds: 252,
        category: 'Edit',
        author: 'ريد بول للإنتاج',
        text: 'تسلسل الدرون السريع FPV مذهل جداً، معتمد!',
        date: '2026-11-19 11:00',
        resolved: true
      }
    ]
  }
];

function getStoredProjects() {
  const data = localStorage.getItem('TRD_STUDIOS_PROJECTS_V2');
  if (data) {
    try { return JSON.parse(data); } catch (e) { }
  }
  localStorage.setItem('TRD_STUDIOS_PROJECTS_V2', JSON.stringify(DEFAULT_PROJECTS));
  return DEFAULT_PROJECTS;
}

function saveProjects(projects) {
  localStorage.setItem('TRD_STUDIOS_PROJECTS_V2', JSON.stringify(projects));
}

let allProjects = getStoredProjects();
let currentClient = null;
let activeDeliverable = null;
let selectedCategoryFilter = 'all';
let currentCommentCategory = 'Color';
let isTheaterMode = false;
let audioFXEnabled = true;

/* ====================================================================
   3. TACTILE AUDIO SYNTHESIS ENGINE (Web Audio API)
   ==================================================================== */
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

const soundFX = {
  click() {
    if (!audioFXEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) { }
  },
  woosh() {
    if (!audioFXEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) { }
  },
  success() {
    if (!audioFXEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.08, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.3);
      });
    } catch (e) { }
  }
};

function toggleAudioFX() {
  audioFXEnabled = !audioFXEnabled;
  const icon = document.getElementById('audio-icon');
  if (audioFXEnabled) {
    icon.setAttribute('data-lucide', 'volume-2');
    showToast('تم تفعيل المؤثرات الصوتية');
    soundFX.click();
  } else {
    icon.setAttribute('data-lucide', 'volume-x');
    showToast('تم كتم المؤثرات الصوتية');
  }
  lucide.createIcons();
}

/* ====================================================================
   4. SMART DEVICE DETECTION & ADAPTIVE UX ENGINE
   ==================================================================== */
let isMac = false;
let isWindows = false;
let isTouch = false;

function initSmartDeviceEngine() {
  const userAgent = navigator.userAgent || '';
  const platform = navigator.platform || '';
  isMac = /Mac|iPod|iPhone|iPad/.test(platform) || /Macintosh/.test(userAgent);
  isWindows = /Win/.test(platform) || /Windows/.test(userAgent);
  isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.innerWidth < 768;

  const theaterHint = document.getElementById('theater-exit-hint');
  if (theaterHint) {
    theaterHint.textContent = isMac
      ? 'اضغط ESC أو ⌘T للخروج من وضع المسرح السينمائي'
      : 'اضغط ESC أو Ctrl+T للخروج من وضع المسرح السينمائي';
  }

  const modalTheater = document.getElementById('modal-kbd-theater');
  const modalDownload = document.getElementById('modal-kbd-download');
  if (modalTheater) modalTheater.textContent = isMac ? '⌘ + T' : 'Ctrl + T';
  if (modalDownload) modalDownload.textContent = isMac ? '⌘ + D' : 'Ctrl + D';

  lucide.createIcons();
}

function copyIDMBatchLinks() {
  if (!currentClient || !currentClient.deliverables) {
    showToast('يرجى الدخول للمشروع أولاً لنسخ الروابط');
    return;
  }
  const links = currentClient.deliverables.map(d => formatCloudDirectUrl(d.downloadUrl)).join('\n');
  navigator.clipboard.writeText(links).then(() => {
    showToast('تم نسخ روابط الحزمة بالكامل جاهزة للصق في IDM!');
    soundFX.click();
  });
}

/* ====================================================================
   5. CLIENT ACCESS GATE & DATA ISOLATION LOGIC
   ==================================================================== */
function checkMagicLinkAuth() {
  const urlParams = new URLSearchParams(window.location.search);
  const codeParam = urlParams.get('code');
  if (codeParam) {
    authenticateAccessCode(codeParam.trim());
  } else {
    const savedCode = sessionStorage.getItem('TRD_ACTIVE_CLIENT_CODE');
    if (savedCode) {
      authenticateAccessCode(savedCode);
    } else {
      showAuthGate();
    }
  }
}

function handleClientLogin(e) {
  if (e) e.preventDefault();
  const codeInput = document.getElementById('client-access-code');
  const code = codeInput.value.trim().toUpperCase();
  authenticateAccessCode(code);
}

function quickLoginDemo(code) {
  document.getElementById('client-access-code').value = code;
  authenticateAccessCode(code);
}

function authenticateAccessCode(code) {
  allProjects = getStoredProjects();
  const client = allProjects.find(p => p.accessCode.toUpperCase() === code.toUpperCase());

  if (client) {
    soundFX.woosh();
    currentClient = client;
    sessionStorage.setItem('TRD_ACTIVE_CLIENT_CODE', client.accessCode);

    document.getElementById('auth-error-msg').classList.add('hidden');
    document.getElementById('auth-gate-view').classList.add('hidden');
    document.getElementById('client-workspace-view').classList.remove('hidden');

    const url = new URL(window.location);
    url.searchParams.set('code', client.accessCode);
    window.history.replaceState({}, '', url);

    document.getElementById('header-client-info').classList.remove('hidden');
    document.getElementById('header-client-name').textContent = client.clientName;
    document.getElementById('header-project-code').textContent = client.accessCode;
    document.getElementById('logout-btn').classList.remove('hidden');
    document.getElementById('logout-btn').classList.add('flex');

    renderClientWorkspace();
    showToast(`مرحباً بكم: ${client.clientName}`);
  } else {
    const err = document.getElementById('auth-error-msg');
    err.classList.remove('hidden');
    gsap.fromTo('#client-login-form', { x: -8 }, { x: 8, duration: 0.08, repeat: 4, yoyo: true });
  }
}

function logoutClient() {
  sessionStorage.removeItem('TRD_ACTIVE_CLIENT_CODE');
  currentClient = null;
  activeDeliverable = null;

  const url = new URL(window.location);
  url.searchParams.delete('code');
  window.history.replaceState({}, '', url);

  document.getElementById('header-client-info').classList.add('hidden');
  document.getElementById('logout-btn').classList.add('hidden');
  document.getElementById('logout-btn').classList.remove('flex');

  showAuthGate();
  showToast('تم تسجيل الخروج بنجاح');
}

function showAuthGate() {
  document.getElementById('client-workspace-view').classList.add('hidden');
  document.getElementById('auth-gate-view').classList.remove('hidden');
}

/* ====================================================================
   6. WORKSPACE RENDERING, EMBEDDED PREVIEW & 4K CINEMA PLAYER ENGINE
   ==================================================================== */
function renderClientWorkspace() {
  if (!currentClient) return;

  document.getElementById('client-project-title').textContent = currentClient.projectTitle;
  document.getElementById('client-name-display').textContent = currentClient.clientName;
  document.getElementById('client-delivery-date').textContent = currentClient.deliveryDate;
  document.getElementById('client-files-count').textContent = `${currentClient.deliverables.length} نسخ 4K`;
  document.getElementById('project-code-badge').textContent = currentClient.accessCode;

  const statusPill = document.getElementById('project-deliverable-status');
  if (currentClient.isApproved) {
    statusPill.textContent = 'معتمد بالكامل وجاهز للعرض العالمي';
    statusPill.parentElement.className = 'px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold flex items-center gap-1.5';
  } else {
    statusPill.textContent = currentClient.status;
  }

  if (currentClient.deliverables && currentClient.deliverables.length > 0) {
    if (!activeDeliverable) {
      activeDeliverable = currentClient.deliverables[0];
    }
    loadVideoDeliverable(activeDeliverable);
    renderDeliverablesGrid();
  }

  renderCommentsList();
  lucide.createIcons();
}

function formatOneDriveEmbedUrl(url) {
  if (!url) return '';
  const cleanUrl = url.trim();

  if (cleanUrl.includes('onedrive.live.com') && cleanUrl.includes('redir?')) {
    return cleanUrl.replace('redir?', 'embed?');
  }
  if (cleanUrl.includes('onedrive.live.com') && !cleanUrl.includes('embed')) {
    return cleanUrl + (cleanUrl.includes('?') ? '&embed=1' : '?embed=1');
  }
  return cleanUrl;
}

function showEmbeddedPreviewFallback(rawUrl) {
  const video = document.getElementById('main-video-element');
  const iframe = document.getElementById('embed-preview-frame');
  const bigPlayBtn = document.getElementById('big-play-btn');

  if (!iframe || !rawUrl) return;

  if (video) {
    video.pause();
    video.classList.add('hidden');
  }
  if (bigPlayBtn) {
    bigPlayBtn.classList.add('opacity-0', 'pointer-events-none');
  }

  iframe.src = formatOneDriveEmbedUrl(rawUrl);
  iframe.classList.remove('hidden');
}

function resetVideoPlayerToNative(videoSrc) {
  const video = document.getElementById('main-video-element');
  const iframe = document.getElementById('embed-preview-frame');
  const fallbackCanvas = document.getElementById('fallback-canvas');

  if (fallbackCanvas) {
    fallbackCanvas.classList.add('hidden');
  }
  if (iframe) {
    iframe.src = '';
    iframe.classList.add('hidden');
  }
  if (video) {
    video.classList.remove('hidden');
    video.pause();
    video.src = videoSrc;
    video.load();
  }
}

function loadVideoDeliverable(deliverable) {
  activeDeliverable = deliverable;

  document.getElementById('active-video-title').textContent = deliverable.title;
  document.getElementById('active-video-specs').textContent = deliverable.specs;
  document.getElementById('player-aspect-badge').textContent = deliverable.aspect || '16:9 DCI';

  const previewSrc = deliverable.streamUrl || deliverable.downloadUrl;
  resetVideoPlayerToNative(previewSrc);

  document.getElementById('big-play-btn').classList.remove('opacity-0', 'pointer-events-none');
  document.getElementById('btn-play-icon').setAttribute('data-lucide', 'play');

  renderTimelineMarkers();
  lucide.createIcons();
}

function handleVideoStreamError() {
  const fallbackSrc =
    (activeDeliverable && (activeDeliverable.downloadUrl || activeDeliverable.streamUrl)) || '';
  if (fallbackSrc) {
    showEmbeddedPreviewFallback(fallbackSrc);
    showToast('تم تفعيل المعاينة المدمجة داخل الموقع؛ ويمكنك التحميل في أي وقت');
  }
}

function openActiveVideoOnOneDrive() {
  if (!activeDeliverable || !activeDeliverable.downloadUrl) {
    showToast('لا يوجد رابط متاح لهذا المقطع');
    return;
  }
  window.open(activeDeliverable.downloadUrl.trim(), '_blank', 'noopener,noreferrer');
}

function togglePlayPause() {
  const video = document.getElementById('main-video-element');
  const bigPlayBtn = document.getElementById('big-play-btn');
  const playIcon = document.getElementById('btn-play-icon');

  if (!video || video.classList.contains('hidden')) return;

  if (video.paused || video.ended) {
    video.play().then(() => {
      bigPlayBtn.classList.add('opacity-0', 'pointer-events-none');
      playIcon.setAttribute('data-lucide', 'pause');
      soundFX.click();
    }).catch(err => {
      console.warn('Playback error, engaging embedded/fallback preview:', err);
      handleVideoStreamError();
    });
  } else {
    video.pause();
    bigPlayBtn.classList.remove('opacity-0', 'pointer-events-none');
    playIcon.setAttribute('data-lucide', 'play');
    soundFX.click();
  }
  lucide.createIcons();
}

function onVideoMetadataLoaded() {
  const video = document.getElementById('main-video-element');
  document.getElementById('duration-timecode').textContent = formatTimecode(video.duration || 0);
  document.getElementById('video-scrubber').max = video.duration || 100;
}

function onVideoTimeUpdate() {
  const video = document.getElementById('main-video-element');
  const scrubber = document.getElementById('video-scrubber');
  const currentTimecode = document.getElementById('current-timecode');

  if (!scrubber.matches(':active')) {
    scrubber.value = video.currentTime;
  }
  currentTimecode.textContent = formatTimecode(video.currentTime);
  document.getElementById('stamp-capture-display').textContent = formatTimecode(video.currentTime);
}

function onVideoEnded() {
  document.getElementById('big-play-btn').classList.remove('opacity-0', 'pointer-events-none');
  document.getElementById('btn-play-icon').setAttribute('data-lucide', 'play');
  lucide.createIcons();
}

function onScrubVideo(val) {
  const video = document.getElementById('main-video-element');
  video.currentTime = val;
}

function seekRelative(deltaSeconds) {
  const video = document.getElementById('main-video-element');
  video.currentTime = Math.max(0, Math.min(video.duration || 100, video.currentTime + deltaSeconds));
  soundFX.click();
}

function onVolumeChange(val) {
  const video = document.getElementById('main-video-element');
  video.volume = val;
  const volIcon = document.getElementById('volume-icon');
  if (val == 0) {
    volIcon.setAttribute('data-lucide', 'volume-x');
  } else if (val < 0.5) {
    volIcon.setAttribute('data-lucide', 'volume-1');
  } else {
    volIcon.setAttribute('data-lucide', 'volume-2');
  }
  lucide.createIcons();
}

function toggleMuteVideo() {
  const video = document.getElementById('main-video-element');
  video.muted = !video.muted;
  const volIcon = document.getElementById('volume-icon');
  volIcon.setAttribute('data-lucide', video.muted ? 'volume-x' : 'volume-2');
  lucide.createIcons();
}

function formatTimecode(totalSeconds) {
  if (isNaN(totalSeconds) || totalSeconds < 0) totalSeconds = 0;
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = Math.floor(totalSeconds % 60);
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/* ====================================================================
   7. CINEMA THEATER MODE ENGINE
   ==================================================================== */
function toggleTheaterMode() {
  isTheaterMode = !isTheaterMode;
  const body = document.body;
  const wrapper = document.getElementById('video-theater-wrapper');
  const ambientGlow = document.getElementById('ambient-video-glow');

  if (isTheaterMode) {
    body.classList.add('in-theater-mode');
    wrapper.classList.add('theater-focus');
    ambientGlow.classList.remove('opacity-0');
    ambientGlow.classList.add('opacity-100');
    soundFX.woosh();
    showToast('تم تفعيل وضع المسرح السينمائي (Cinema Mode)');
  } else {
    body.classList.remove('in-theater-mode');
    wrapper.classList.remove('theater-focus');
    ambientGlow.classList.add('opacity-0');
    ambientGlow.classList.remove('opacity-100');
  }
}

function toggleFullscreen() {
  const playerBox = document.getElementById('main-player-box');
  if (!document.fullscreenElement) {
    playerBox.requestFullscreen().catch(err => console.log(err));
  } else {
    document.exitFullscreen();
  }
}

/* ====================================================================
   8. TIMESTAMPED CLIENT FEEDBACK & REVISION ENGINE
   ==================================================================== */
function captureCurrentPlayheadTime() {
  const video = document.getElementById('main-video-element');
  const curTime = formatTimecode(video.currentTime || 0);
  document.getElementById('stamp-capture-display').textContent = curTime;
  document.getElementById('comment-text-input').focus();
  soundFX.click();
  showToast(`تم التقاط التوقيت: ${curTime}`);
}

function selectCommentCategory(cat) {
  currentCommentCategory = cat;
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(p => {
    p.className = 'cat-pill px-2 py-1 rounded bg-carbon-800 border border-neutral-700 text-neutral-400 hover:text-white whitespace-nowrap';
  });
  if (event && event.target) {
    event.target.className = 'cat-pill px-2 py-1 rounded bg-brand-orange/20 border border-brand-orange text-brand-orange whitespace-nowrap';
  }
  soundFX.click();
}

function submitClientComment() {
  if (!currentClient) return;
  const textInput = document.getElementById('comment-text-input');
  const text = textInput.value.trim();
  if (!text) {
    showToast('يرجى كتابة نص الملاحظة');
    return;
  }

  const video = document.getElementById('main-video-element');
  const seconds = Math.floor(video.currentTime || 0);
  const timestamp = formatTimecode(seconds);

  const newComment = {
    id: 'fb_' + Date.now(),
    timestamp: timestamp,
    seconds: seconds,
    category: currentCommentCategory,
    author: currentClient.clientName,
    text: text,
    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    resolved: false
  };

  if (!currentClient.feedback) currentClient.feedback = [];
  currentClient.feedback.unshift(newComment);

  const pIndex = allProjects.findIndex(p => p.id === currentClient.id);
  if (pIndex !== -1) {
    allProjects[pIndex] = currentClient;
    saveProjects(allProjects);
  }

  textInput.value = '';
  renderCommentsList();
  renderTimelineMarkers();
  soundFX.success();
  showToast('تم حفظ ملاحظتك على الفيديو بنجاح');
}

function renderCommentsList() {
  const list = document.getElementById('comments-list');
  const badge = document.getElementById('feedback-count-badge');
  const comments = currentClient && currentClient.feedback ? currentClient.feedback : [];
  badge.textContent = `${comments.length} ملاحظات`;

  if (comments.length === 0) {
    list.innerHTML = `
      <div class="text-center py-8 text-neutral-500 text-xs font-mono">
        لا توجد ملاحظات مسجلة بعد. يمكنك إيقاف الفيديو عند أي لقطة وتسجيل ملاحظتك فوراً.
      </div>
    `;
    return;
  }

  list.innerHTML = comments.map(c => `
    <div class="p-3 rounded-xl bg-carbon-900 border border-neutral-800/80 hover:border-brand-orange/40 transition-all space-y-1.5 group">
      <div class="flex items-center justify-between">
        <button onclick="seekVideoToSecond(${c.seconds})" class="px-2 py-0.5 rounded bg-brand-orange/15 hover:bg-brand-orange/25 text-brand-orange font-mono font-bold text-[11px] flex items-center gap-1" title="الانتقال الفوري للقطة">
          <i data-lucide="play" class="w-2.5 h-2.5 fill-current"></i>
          <span>${c.timestamp}</span>
        </button>
        <span class="text-[10px] px-2 py-0.5 rounded bg-carbon-800 text-neutral-400 font-mono">
          ${c.category}
        </span>
      </div>
      <p class="text-neutral-200 text-xs leading-relaxed select-text">${escapeHtml(c.text)}</p>
      <div class="flex items-center justify-between text-[10px] text-neutral-500 font-mono pt-1">
        <span>${c.author || 'العميل'}</span>
        <span>${c.date}</span>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function seekVideoToSecond(sec) {
  const video = document.getElementById('main-video-element');
  video.currentTime = sec;
  video.play().catch(() => { });
  soundFX.click();
  showToast(`تم الانتقال إلى التوقيت ${formatTimecode(sec)}`);
}

function renderTimelineMarkers() {
  const markerContainer = document.getElementById('timeline-comment-markers');
  const video = document.getElementById('main-video-element');
  const duration = video.duration || 100;
  const comments = currentClient && currentClient.feedback ? currentClient.feedback : [];

  markerContainer.innerHTML = comments.map(c => {
    const percent = Math.min(100, Math.max(0, (c.seconds / duration) * 100));
    return `<span style="left: ${percent}%;" class="absolute top-0 bottom-0 w-1 bg-brand-orange rounded-full shadow-[0_0_6px_#FF5500]" title="${c.timestamp} - ${c.category}"></span>`;
  }).join('');
}

/* ====================================================================
   9. DELIVERABLES GRID & 3D PERSPECTIVE TILT
   ==================================================================== */
function filterDeliverables() {
  renderDeliverablesGrid();
}

function setFilterCategory(cat) {
  selectedCategoryFilter = cat;
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(t => {
    t.className = 'filter-tab-btn px-3 py-1 rounded-lg text-neutral-400 hover:text-white';
  });
  if (event && event.target) {
    event.target.className = 'filter-tab-btn px-3 py-1 rounded-lg bg-brand-orange text-white font-medium';
  }
  renderDeliverablesGrid();
}

function renderDeliverablesGrid() {
  const grid = document.getElementById('deliverables-grid');
  const query = (document.getElementById('deliverables-search').value || '').trim().toLowerCase();

  if (!currentClient || !currentClient.deliverables) {
    grid.innerHTML = '';
    return;
  }

  const filtered = currentClient.deliverables.filter(item => {
    const matchesCat = (selectedCategoryFilter === 'all') || (item.category === selectedCategoryFilter);
    const matchesQuery = !query || item.title.toLowerCase().includes(query) || item.specs.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 text-neutral-500 font-mono text-xs">
        لا توجد نسخ مطابقة لخيارات البحث المحددة.
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="tilt-card glass-panel rounded-2xl p-4 border border-neutral-800/80 hover:border-brand-orange/50 transition-all flex flex-col justify-between group relative overflow-hidden" onmousemove="handleCardTilt(event, this)" onmouseleave="resetCardTilt(this)">
      <div>
        <div class="relative aspect-video rounded-xl overflow-hidden bg-carbon-950 mb-3 border border-white/5">
          <img src="${item.thumbnail || 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80'}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
          <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono text-brand-orange font-bold border border-brand-orange/30">
            4K MASTER
          </span>
          <span class="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono text-neutral-300">
            ${item.aspect || '16:9'}
          </span>
          <span class="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono text-neutral-300">
            ${item.duration || '00:00'}
          </span>
          <button onclick="playSpecificDeliverable('${item.id}')" class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[1px]">
            <div class="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/40 hover:scale-110 transition-transform">
              <i data-lucide="play" class="w-6 h-6 fill-white translate-x-0.5"></i>
            </div>
          </button>
        </div>
        <h3 class="font-bold text-white text-sm group-hover:text-brand-orange transition-colors">${escapeHtml(item.title)}</h3>
        <p class="text-[11px] font-mono text-neutral-400 mt-1">${escapeHtml(item.specs)}</p>
      </div>

      <div class="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
        <button onclick="playSpecificDeliverable('${item.id}')" class="px-3 py-1.5 rounded-lg bg-carbon-800 hover:bg-carbon-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors">
          <i data-lucide="film" class="w-3.5 h-3.5 text-brand-orange"></i>
          <span>معاينة بالمشغل</span>
        </button>
        <div class="flex items-center gap-1.5">
          <button onclick="copyDeliverableLink('${formatCloudDirectUrl(item.downloadUrl)}')" class="p-1.5 rounded-lg bg-carbon-900 hover:bg-carbon-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors" title="نسخ رابط التحميل">
            <i data-lucide="link" class="w-3.5 h-3.5"></i>
          </button>
          <a href="${formatCloudDirectUrl(item.downloadUrl)}" target="_blank" rel="noopener noreferrer" download class="px-3 py-1.5 rounded-lg bg-brand-orange hover:bg-brand-hover text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-sm shadow-brand-orange/30">
            <i data-lucide="download" class="w-3.5 h-3.5"></i>
            <span>تحميل</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function playSpecificDeliverable(id) {
  if (!currentClient) return;
  const del = currentClient.deliverables.find(d => d.id === id);
  if (del) {
    loadVideoDeliverable(del);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`جاري تشغيل: ${del.title}`);
    soundFX.woosh();
  }
}

function handleCardTilt(e, card) {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -7;
  const rotateY = ((x - centerX) / centerX) * 7;
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
}

function resetCardTilt(card) {
  card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
}

/* ====================================================================
   10. DOWNLOAD & EXPORT CONTROLS
   ==================================================================== */
function formatCloudDirectUrl(url) {
  if (!url) return '';
  const cleanUrl = url.trim();

  const gdMatch = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (gdMatch && gdMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${gdMatch[1]}`;
  }

  if (cleanUrl.includes('dropbox.com')) {
    return cleanUrl
      .replace('www.dropbox.com', 'dl.dropboxusercontent.com')
      .replace(/([?&])dl=0/, '$1dl=1');
  }

  if (
    cleanUrl.includes('1drv.ms') ||
    cleanUrl.includes('onedrive.live.com') ||
    cleanUrl.includes('sharepoint.com')
  ) {
    return cleanUrl.includes('download=1')
      ? cleanUrl
      : cleanUrl + (cleanUrl.includes('?') ? '&download=1' : '?download=1');
  }

  return cleanUrl;
}

function openFormatsModal() {
  if (!activeDeliverable) {
    showToast('يرجى اختيار مقطع فيديو أولاً');
    return;
  }
  document.getElementById('formats-modal-video-title').textContent = activeDeliverable.title;
  document.getElementById('formats-hub-modal').classList.remove('hidden');
  soundFX.woosh();
  lucide.createIcons();
}

function closeFormatsModal() {
  document.getElementById('formats-hub-modal').classList.add('hidden');
}

function downloadSpecificFormat(fmt) {
  if (!activeDeliverable) return;
  const targetUrl = formatCloudDirectUrl(activeDeliverable.downloadUrl);
  const baseName = activeDeliverable.title.trim().replace(/\s+/g, '_');

  const suffixMap = {
    prores4444: '_4K_ProRes4444_XQ',
    prores422: '_4K_ProRes422_HQ',
    hevc: '_4K_UHD_HEVC_HDR',
    proxy: '_Proxy_1080p_FHD',
    audio: '_Master_Audio_Stems_24bit'
  };

  const filename = `${baseName}${suffixMap[fmt] || ''}`;
  soundFX.click();
  showToast(`جاري بدء تنزيل النسخة عالية الجودة: ${filename}`);

  const a = document.createElement('a');
  a.href = targetUrl;
  a.download = filename;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  closeFormatsModal();
}

function triggerActiveVideoDownload() {
  openFormatsModal();
}

function copyDirectVideoLink() {
  if (!activeDeliverable) return;
  const directUrl = formatCloudDirectUrl(activeDeliverable.downloadUrl);
  navigator.clipboard.writeText(directUrl).then(() => {
    showToast('تم نسخ الرابط المباشر للملف 4K بنجاح');
    soundFX.click();
  });
}

function copyDeliverableLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    showToast('تم نسخ رابط التحميل');
    soundFX.click();
  });
}

/* ====================================================================
   11. CLIENT FINAL APPROVAL SYSTEM & CELEBRATION
   ==================================================================== */
function approveFinalCutModal() {
  if (!currentClient) return;

  currentClient.isApproved = true;
  currentClient.status = 'معتمد بالكامل وجاهز للعرض العالمي';
  const pIndex = allProjects.findIndex(p => p.id === currentClient.id);
  if (pIndex !== -1) {
    allProjects[pIndex] = currentClient;
    saveProjects(allProjects);
  }

  document.getElementById('cert-code').textContent = currentClient.accessCode;
  document.getElementById('cert-client').textContent = currentClient.clientName;
  document.getElementById('cert-time').textContent = new Date().toLocaleString('ar-SA');

  document.getElementById('approval-modal').classList.remove('hidden');

  soundFX.success();
  try {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF5500', '#FFFFFF', '#10B981', '#E5A93C']
    });
  } catch (e) { }

  renderClientWorkspace();
}

function closeApprovalModal() {
  document.getElementById('approval-modal').classList.add('hidden');
}

/* ====================================================================
   12. FULL ADMIN DASHBOARD LOGIC
   ==================================================================== */
let isAdminUnlocked = false;
let currentAdminPassword = localStorage.getItem('TRD_ADMIN_PASS') || 'admin123';

function openAdminModal() {
  soundFX.woosh();
  document.getElementById('admin-modal').classList.remove('hidden');
  if (isAdminUnlocked) {
    renderAdminDashboard();
  }
}

function closeAdminModal() {
  document.getElementById('admin-modal').classList.add('hidden');
}

function handleAdminAuth(e) {
  if (e) e.preventDefault();
  const pass = document.getElementById('admin-password-input').value;
  if (pass === currentAdminPassword) {
    isAdminUnlocked = true;
    document.getElementById('admin-login-lock').classList.add('hidden');
    document.getElementById('admin-unlocked-content').classList.remove('hidden');
    soundFX.success();
    renderAdminDashboard();
    showToast('تم الدخول إلى لوحة الإدارة');
  } else {
    document.getElementById('admin-auth-err').classList.remove('hidden');
    gsap.fromTo('#admin-password-input', { x: -6 }, { x: 6, duration: 0.08, repeat: 4, yoyo: true });
  }
}

function changeAdminPassword() {
  const newPass = document.getElementById('new-admin-password').value.trim();
  const confirmPass = document.getElementById('confirm-admin-password').value.trim();

  if (!newPass) {
    showToast('يرجى إدخال كلمة المرور الجديدة');
    return;
  }
  if (newPass !== confirmPass) {
    showToast('كلمتا المرور غير متطابقتين!');
    return;
  }

  currentAdminPassword = newPass;
  localStorage.setItem('TRD_ADMIN_PASS', newPass);
  document.getElementById('new-admin-password').value = '';
  document.getElementById('confirm-admin-password').value = '';
  soundFX.success();
  showToast('تم حفظ كلمة مرور الإدارة الجديدة بنجاح!');
}

function switchAdminTab(tabName) {
  soundFX.click();
  const tabs = ['clients', 'deliverables', 'feedback', 'supabase'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const pane = document.getElementById(`admin-tab-${t}`);
    if (t === tabName) {
      btn.className = 'admin-tab active pb-3 px-3 text-brand-orange border-b-2 border-brand-orange flex items-center gap-1.5 whitespace-nowrap';
      pane.classList.remove('hidden');
    } else {
      btn.className = 'admin-tab pb-3 px-3 text-neutral-400 hover:text-white flex items-center gap-1.5 whitespace-nowrap';
      pane.classList.add('hidden');
    }
  });
  lucide.createIcons();
}

function updateAdminStats() {
  const totalClients = allProjects.length;
  let totalVideos = 0;
  let approvedCuts = 0;
  let totalFeedback = 0;

  allProjects.forEach(p => {
    if (p.deliverables) totalVideos += p.deliverables.length;
    if (p.isApproved) approvedCuts++;
    if (p.feedback) totalFeedback += p.feedback.length;
  });

  const sc = document.getElementById('stat-total-clients');
  const sv = document.getElementById('stat-total-videos');
  const sa = document.getElementById('stat-approved-cuts');
  const sf = document.getElementById('stat-total-feedback');

  if (sc) sc.textContent = totalClients;
  if (sv) sv.textContent = `${totalVideos} مقاطع`;
  if (sa) sa.textContent = `${approvedCuts} معتمد`;
  if (sf) sf.textContent = `${totalFeedback} ملاحظات`;
}

function renderAdminDashboard() {
  allProjects = getStoredProjects();
  updateAdminStats();
  renderAdminClientsTable();
  populateAdminClientSelect();
  renderAdminDeliverablesList();
  renderAdminFeedbacks();
  generateNewClientCode();
  lucide.createIcons();
}

function generateNewClientCode() {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  document.getElementById('new-client-code').value = `TRD-${randomNum}`;
}

function handleCreateClient(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('new-client-name').value.trim();
  const title = document.getElementById('new-project-title').value.trim();
  const email = document.getElementById('new-client-email').value.trim();
  const code = document.getElementById('new-client-code').value.trim();

  const newProj = {
    id: 'client_' + Date.now(),
    accessCode: code,
    clientName: name,
    clientEmail: email,
    projectTitle: title,
    deliveryDate: new Date().toISOString().slice(0, 10),
    status: 'جاهز للمراجعة 4K',
    isApproved: false,
    deliverables: [
      {
        id: 'vid_' + Date.now(),
        title: title + ' (الماستر الأولي)',
        category: 'hero',
        aspect: '16:9 DCI',
        specs: '18.5 GB • 4K ProRes 422 HQ',
        streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        downloadUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        duration: '05:00',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
      }
    ],
    feedback: []
  };

  allProjects.unshift(newProj);
  saveProjects(allProjects);

  document.getElementById('new-client-name').value = '';
  document.getElementById('new-project-title').value = '';
  document.getElementById('new-client-email').value = '';
  generateNewClientCode();

  renderAdminClientsTable();
  populateAdminClientSelect();
  soundFX.success();
  showToast(`تم إنشاء مشروع العميل الجديد: ${code}`);
}

function renderAdminClientsTable() {
  const tbody = document.getElementById('admin-clients-tbody');
  const countEl = document.getElementById('admin-client-count');
  countEl.textContent = `${allProjects.length} عملاء`;

  tbody.innerHTML = allProjects.map(p => `
    <tr class="hover:bg-carbon-900/80 transition-colors border-b border-neutral-800/60">
      <td class="p-3.5">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-lg bg-carbon-950 border border-brand-orange/40 text-brand-orange font-bold font-mono text-xs tracking-wider">${p.accessCode}</span>
          <button onclick="navigator.clipboard.writeText('${p.accessCode}'); showToast('تم نسخ كود العميل');" class="text-neutral-500 hover:text-white" title="نسخ الكود">
            <i data-lucide="copy" class="w-3 h-3"></i>
          </button>
        </div>
      </td>
      <td class="p-3.5 font-sans">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full bg-carbon-800 border border-neutral-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
            ${escapeHtml(p.clientName.charAt(0))}
          </div>
          <div>
            <div class="font-bold text-white flex items-center gap-2">
              <span>${escapeHtml(p.clientName)}</span>
              ${p.isApproved ? '<span class="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[9px] font-mono border border-emerald-500/30">معتمد</span>' : '<span class="px-1.5 py-0.5 rounded bg-brand-orange/15 text-brand-orange text-[9px] font-mono border border-brand-orange/30">قيد المراجعة</span>'}
            </div>
            <div class="text-[11px] text-neutral-400 mt-0.5">${escapeHtml(p.projectTitle)}</div>
          </div>
        </div>
      </td>
      <td class="p-3.5 text-neutral-400 font-mono text-xs">${p.clientEmail || '-'}</td>
      <td class="p-3.5 font-mono text-xs">
        <span class="px-2 py-0.5 rounded bg-carbon-950 text-neutral-300 border border-neutral-800">${p.deliverables ? p.deliverables.length : 0} مقاطع</span>
      </td>
      <td class="p-3.5 text-center">
        <button onclick="openClientEmailModal('${p.id}')" class="px-3 py-1.5 rounded-xl bg-brand-orange hover:bg-brand-hover text-white text-xs font-sans font-bold transition-all shadow-sm shadow-brand-orange/20 inline-flex items-center gap-1.5">
          <i data-lucide="mail" class="w-3.5 h-3.5"></i>
          <span>إرسال إيميل التسليم</span>
        </button>
      </td>
      <td class="p-3.5 text-center">
        <div class="flex items-center justify-center gap-1.5">
          <button onclick="authenticateAccessCode('${p.accessCode}'); closeAdminModal();" class="p-2 rounded-lg bg-carbon-800 hover:bg-carbon-700 text-neutral-300 hover:text-white transition-colors" title="معاينة البوابة كعميل">
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </button>
          <button onclick="deleteClientProject('${p.id}')" class="p-2 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 hover:text-rose-200 transition-colors" title="حذف">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');

  lucide.createIcons();
}

function deleteClientProject(id) {
  if (!confirm('هل أنت متأكد من حذف هذا العميل وكافة فيديوهاته وملاحظاته؟')) return;
  allProjects = allProjects.filter(p => p.id !== id);
  saveProjects(allProjects);
  renderAdminClientsTable();
  populateAdminClientSelect();
  showToast('تم حذف العميل');
}

function populateAdminClientSelect() {
  const select = document.getElementById('deliverable-target-client');
  select.innerHTML = allProjects.map(p => `
    <option value="${p.id}">${escapeHtml(p.clientName)} (${p.accessCode})</option>
  `).join('');
}

function handleAddDeliverable(e) {
  if (e) e.preventDefault();
  const clientId = document.getElementById('deliverable-target-client').value;
  const title = document.getElementById('deliverable-title').value.trim();
  const category = document.getElementById('deliverable-category').value;
  const streamUrl = document.getElementById('deliverable-stream-url').value.trim();
  const previewInput = document.getElementById('deliverable-preview-url');
  const previewUrl = previewInput ? previewInput.value.trim() : '';
  const specs = document.getElementById('deliverable-specs-badge').value.trim();

  const client = allProjects.find(p => p.id === clientId);
  if (!client) return;

  const newDel = {
    id: 'vid_' + Date.now(),
    title: title,
    category: category,
    aspect: category === 'social' ? '9:16 Vertical' : (category === 'teaser' ? '2.39:1 Anamorphic' : '16:9 DCI'),
    specs: specs,
    streamUrl: previewUrl || streamUrl,
    downloadUrl: streamUrl,
    duration: '03:30',
    thumbnail: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80'
  };

  if (!client.deliverables) client.deliverables = [];
  client.deliverables.push(newDel);
  saveProjects(allProjects);

  document.getElementById('deliverable-title').value = '';
  document.getElementById('deliverable-stream-url').value = '';
  if (previewInput) previewInput.value = '';
  document.getElementById('deliverable-specs-badge').value = '';

  renderAdminDeliverablesList();
  renderAdminClientsTable();
  soundFX.success();
  showToast('تمت إضافة الفيديو بنجاح لمساحة العميل');
}

function renderAdminDeliverablesList() {
  const container = document.getElementById('admin-deliverables-list');
  let html = '';
  allProjects.forEach(client => {
    if (!client.deliverables || client.deliverables.length === 0) return;
    html += `
      <div class="p-3 bg-carbon-900 rounded-xl border border-neutral-800">
        <div class="text-xs font-bold text-white mb-2 flex items-center justify-between">
          <span>${escapeHtml(client.clientName)} (${client.accessCode})</span>
          <span class="text-neutral-500 font-mono text-[10px]">${client.deliverables.length} مقاطع</span>
        </div>
        <div class="space-y-1.5 text-xs font-mono">
          ${client.deliverables.map(d => `
            <div class="flex items-center justify-between p-2 rounded bg-carbon-950 border border-neutral-800/60">
              <span class="text-neutral-200 font-sans">${escapeHtml(d.title)}</span>
              <span class="text-brand-orange text-[10px]">${escapeHtml(d.specs)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
  container.innerHTML = html || '<div class="text-neutral-500 text-xs">لا توجد مقاطع مضافة.</div>';
}

function renderAdminFeedbacks() {
  const container = document.getElementById('admin-all-feedback-container');
  const allFbs = [];
  allProjects.forEach(p => {
    if (p.feedback && p.feedback.length > 0) {
      p.feedback.forEach(fb => {
        allFbs.push({ ...fb, clientName: p.clientName, clientCode: p.accessCode, isApproved: p.isApproved });
      });
    }
  });

  if (allFbs.length === 0) {
    container.innerHTML = '<div class="text-neutral-500 text-center py-6">لا توجد ملاحظات مسجلة من العملاء حتى الآن.</div>';
    return;
  }

  container.innerHTML = allFbs.map(fb => `
    <div class="p-3 rounded-xl bg-carbon-950 border border-neutral-800 space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-bold text-white font-sans">${escapeHtml(fb.clientName)} <span class="text-brand-orange font-mono">(${fb.clientCode})</span></span>
        <span class="px-2 py-0.5 rounded bg-carbon-800 text-neutral-300 font-mono text-[10px]">${fb.timestamp}</span>
      </div>
      <p class="text-neutral-300 font-sans text-xs">${escapeHtml(fb.text)}</p>
      <div class="text-[10px] text-neutral-500 font-mono flex items-center justify-between pt-1">
        <span>التصنيف: ${fb.category}</span>
        <span>${fb.date}</span>
      </div>
    </div>
  `).join('');
}

function exportFeedbackSummary() {
  let report = `تقرير ملاحظات واستلام عملاء TRADING STUDIOS:\n\n`;
  allProjects.forEach(p => {
    report += `المشروع: ${p.clientName} [${p.accessCode}]\n`;
    report += `حالة الاعتماد: ${p.isApproved ? 'معتمد' : 'قيد المراجعة'}\n`;
    if (p.feedback && p.feedback.length > 0) {
      p.feedback.forEach(fb => {
        report += `  - [${fb.timestamp}] (${fb.category}) ${fb.text}\n`;
      });
    } else {
      report += `  - لا توجد ملاحظات\n`;
    }
    report += '\n-------------------------\n\n';
  });

  navigator.clipboard.writeText(report).then(() => {
    showToast('تم نسخ تقرير الملاحظات بالكامل');
    soundFX.click();
  });
}

/* ====================================================================
   13. ONE-CLICK EMAIL DELIVERY ENGINE (PRESTIGIOUS ARABIC TEMPLATE)
   ==================================================================== */
let currentEmailDraft = { to: '', subject: '', body: '', portalUrl: '', accessCode: '' };

function openClientEmailModal(clientId) {
  const client = allProjects.find(p => p.id === clientId);
  if (!client) return;

  const portalUrl = `${window.location.origin}${window.location.pathname}?code=${client.accessCode}`;
  const subject = `تسليم مواد الماستر 4K • استوديو تريدينج للإنتاج السينمائي - ${client.projectTitle}`;

  const body = `السادة المحترمون / ${client.clientName}،

تحية طيبة وبعد،

يسر فريق العمل في استوديو تريدينج للإنتاج السينمائي (TRADING STUDIOS) إعلامكم باكتمال كافة العمليات الفنية والمعالجة اللونية بدقة 4K DCI لمشروعكم:
"${client.projectTitle}".

لقد تم تجهيز مساحة عملكم الرقمية المشفرة لمراجعة واعتماد وتنزيل النسخ الأصلية:

━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 رابط المنصة المباشر:
${portalUrl}

🔑 رمز المرور السري الخاص بكم:
${client.accessCode}
━━━━━━━━━━━━━━━━━━━━━━━━━━

⛔ تنبيه أمني شديد الأهمية والسرية:
هذا الرمز السري والرابط مخصصان بشكل حصري وخاص لإدارتكم الكريمة فقط، ويمنحان صلاحية الوصول والتنزيل لملفات الماستر 4K الأصلية. يُمنع منعاً باتاً مشاركة هذا الكود أو إعادة إرساله لأي شخص أو جهة غير مصرح لها حرصاً على سرية وحماية حقوق الملكية الفكرية لموادكم.

ملاحظات المشاهدة الفنية:
• المشغل مجهز لدعم المعايرة اللونية للسينما DCI-P3 ووضع المسرح السينمائي (Cinema Theater Mode).
• يمكنكم إيقاف الفيديو عند أي لقطة لتسجيل ملاحظاتكم بالتوقيت الزمني الدقيق أو اعتماد النسخة النهائية مباشرة بضغطة زر.

شاكرين ومقدرين ثقتكم الكريمة باختياركم استوديو تريدينج،
فريق الإنتاج الرقمي والمعالجة السينمائية | TRADING STUDIOS
www.tradingstudios.com`;

  currentEmailDraft = {
    to: client.clientEmail || 'client@example.com',
    subject: subject,
    body: body,
    portalUrl: portalUrl,
    accessCode: client.accessCode
  };

  document.getElementById('email-card-link').textContent = currentEmailDraft.portalUrl;
  document.getElementById('email-card-code').textContent = currentEmailDraft.accessCode;
  document.getElementById('email-modal-to').textContent = `المستلم: ${currentEmailDraft.to}`;
  document.getElementById('email-modal-body').textContent = currentEmailDraft.body;

  const mailtoUrl = `mailto:${encodeURIComponent(currentEmailDraft.to)}?subject=${encodeURIComponent(currentEmailDraft.subject)}&body=${encodeURIComponent(currentEmailDraft.body)}`;
  document.getElementById('email-modal-mailto-link').href = mailtoUrl;

  document.getElementById('email-modal').classList.remove('hidden');
  soundFX.woosh();
}

function closeEmailModal() {
  document.getElementById('email-modal').classList.add('hidden');
}

function copyEmailLinkOnly() {
  if (!currentEmailDraft.portalUrl) return;
  navigator.clipboard.writeText(currentEmailDraft.portalUrl).then(() => {
    showToast('تم نسخ رابط المنصة فقط بنجاح');
    soundFX.click();
  });
}

function copyEmailCodeOnly() {
  if (!currentEmailDraft.accessCode) return;
  navigator.clipboard.writeText(currentEmailDraft.accessCode).then(() => {
    showToast('تم نسخ الكود السري فقط بنجاح');
    soundFX.click();
  });
}

function copyEmailDraftText() {
  const fullText = `المستلم: ${currentEmailDraft.to}\nالموضوع: ${currentEmailDraft.subject}\n\n${currentEmailDraft.body}`;
  navigator.clipboard.writeText(fullText).then(() => {
    showToast('تم نسخ مسودة الإيميل الكاملة');
    soundFX.click();
  });
}

/* ====================================================================
   14. SUPABASE CLOUD SYNC & SQL SCHEMAS
   ==================================================================== */
function saveSupabaseSettings() {
  const url = document.getElementById('supabase-url-input').value.trim();
  const key = document.getElementById('supabase-key-input').value.trim();

  if (url && key) {
    localStorage.setItem('TRD_SUPABASE_URL', url);
    localStorage.setItem('TRD_SUPABASE_KEY', key);
    SUPABASE_URL = url;
    SUPABASE_ANON_KEY = key;

    try {
      supabaseClient = window.supabase.createClient(url, key);
      document.getElementById('supabase-live-status').textContent = '● Supabase Cloud Connected';
      document.getElementById('supabase-live-status').className = 'px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-mono';
      showToast('تم ربط قاعدة بيانات Supabase بنجاح!');
    } catch (e) {
      showToast('خطأ في إعداد Supabase');
    }
  } else {
    localStorage.removeItem('TRD_SUPABASE_URL');
    localStorage.removeItem('TRD_SUPABASE_KEY');
    supabaseClient = null;
    document.getElementById('supabase-live-status').textContent = '● LocalStorage Active';
    showToast('تم التحويل إلى وضع التخزين المحلي (LocalStorage)');
  }
}

function copySupabaseSQLSchema() {
  const sql = `-- TRADING STUDIOS Database Schema
CREATE TABLE clients (
  id TEXT PRIMARY KEY,
  access_code TEXT UNIQUE NOT NULL,
  client_name TEXT NOT NULL,
  client_email TEXT,
  project_title TEXT NOT NULL,
  delivery_date DATE,
  status TEXT,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE deliverables (
  id TEXT PRIMARY KEY,
  client_id TEXT REFERENCES clients(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT,
  aspect TEXT,
  specs TEXT,
  stream_url TEXT NOT NULL,
  download_url TEXT NOT NULL,
  duration TEXT,
  thumbnail TEXT
);

CREATE TABLE feedback (
  id TEXT PRIMARY KEY,
  client_id TEXT REFERENCES clients(id) ON DELETE CASCADE,
  timestamp TEXT NOT NULL,
  seconds INTEGER NOT NULL,
  category TEXT,
  author TEXT,
  text TEXT NOT NULL,
  resolved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);`;

  navigator.clipboard.writeText(sql).then(() => {
    showToast('تم نسخ كود SQL لإنشاء الجداول في Supabase');
    soundFX.click();
  });
}

function resetDefaultDemoData() {
  if (!confirm('هل تود استعادة بيانات المشاريع الفاخرة التجريبية الأصلية؟')) return;
  localStorage.removeItem('TRD_STUDIOS_PROJECTS_V2');
  allProjects = getStoredProjects();
  renderAdminDashboard();
  showToast('تم استعادة البيانات التجريبية الفاخرة');
}

/* ====================================================================
   15. PROCEDURAL 4K FALLBACK CANVAS (Cinematic Offline Visualizer)
   ==================================================================== */
let canvasAnimId = null;
function startFallbackCanvas() {
  const canvas = document.getElementById('fallback-canvas');
  canvas.classList.remove('hidden');
  const ctx = canvas.getContext('2d');
  canvas.width = 1920;
  canvas.height = 1080;

  let frame = 0;
  function render() {
    frame++;
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const radGrad = ctx.createRadialGradient(960, 540, 50, 960, 540, 700);
    radGrad.addColorStop(0, 'rgba(255, 85, 0, 0.22)');
    radGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 80) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    ctx.fillStyle = '#FF5500';
    for (let i = 0; i < 40; i++) {
      const barHeight = Math.sin((frame * 0.05) + i * 0.3) * 60 + 80;
      ctx.fillRect(680 + i * 14, 540 - barHeight / 2, 8, barHeight);
    }

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 36px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TRADING STUDIOS', 960, 440);

    ctx.fillStyle = '#888888';
    ctx.font = '16px monospace';
    ctx.fillText('4K DCI COLOR CALIBRATION TEST STREAM', 960, 640);

    canvasAnimId = requestAnimationFrame(render);
  }
  render();
}

/* ====================================================================
   16. GLOBAL KEYBOARD SHORTCUTS & EVENT LISTENERS
   ==================================================================== */
window.addEventListener('keydown', (e) => {
  const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
  if (activeTag === 'input' || activeTag === 'textarea') return;

  const cmdOrCtrl = e.metaKey || e.ctrlKey;

  if (cmdOrCtrl && (e.key === 't' || e.key === 'T')) {
    e.preventDefault();
    toggleTheaterMode();
  }

  if (cmdOrCtrl && (e.key === 'd' || e.key === 'D')) {
    e.preventDefault();
    triggerActiveVideoDownload();
  }

  if (e.code === 'Space') {
    e.preventDefault();
    togglePlayPause();
  }

  if (e.key === 'f' || e.key === 'F') {
    e.preventDefault();
    toggleFullscreen();
  }

  if (e.key === 'ArrowRight') {
    seekRelative(5);
  } else if (e.key === 'ArrowLeft') {
    seekRelative(-5);
  }

  if (e.key === 'Escape') {
    if (isTheaterMode) toggleTheaterMode();
    closeAdminModal();
    closeEmailModal();
    closeApprovalModal();
    closeFormatsModal();
    document.getElementById('shortcuts-modal').classList.add('hidden');
  }
});

window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--mouse-x', `${x}%`);
  document.documentElement.style.setProperty('--mouse-y', `${y}%`);
});

function toggleShortcutsModal() {
  const m = document.getElementById('shortcuts-modal');
  m.classList.toggle('hidden');
  soundFX.click();
}

function handleLogoClick() {
  soundFX.click();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(msg) {
  const banner = document.getElementById('toast-banner');
  const text = document.getElementById('toast-text');
  text.textContent = msg;
  banner.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    banner.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ====================================================================
   17. PRELOADER & INITIALIZATION
   ==================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  initSmartDeviceEngine();
  lucide.createIcons();

  const tl = gsap.timeline();
  tl.from('#preloader-logo', { scale: 0.9, opacity: 0, duration: 0.7, ease: 'power3.out' })
    .to('#preloader-triangle', { scale: 1.15, transformOrigin: 'center', duration: 0.3, yoyo: true, repeat: 1 })
    .to('#preloader', {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
      delay: 0.2,
      onComplete: () => {
        document.getElementById('preloader').style.display = 'none';
        checkMagicLinkAuth();
      }
    });
});