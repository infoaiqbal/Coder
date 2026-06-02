// --- গ্লোবাল UI লজিক ---
const notiBtn = document.getElementById('notiBtn');
const notiBox = document.getElementById('notiBox');
notiBtn.addEventListener('click', (e) => { e.stopPropagation(); notiBox.classList.toggle('show'); });
document.addEventListener('click', (e) => { if (!notiBtn.contains(e.target) && !notiBox.contains(e.target)) notiBox.classList.remove('show'); });

const screens = document.querySelectorAll('.app-screen');
const navEditorBtn = document.getElementById('navEditorBtn');
const navToolsBtn = document.getElementById('navToolsBtn');
const openSliderToolBtn = document.getElementById('openSliderToolBtn');
const backToToolsBtn = document.getElementById('backToToolsBtn');

function switchScreen(targetId) {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
}

const list = document.querySelectorAll('.list');
const menuBtn = document.getElementById('menuBtn');
const bottomSheet = document.getElementById('bottomSheet');
const sheetOverlay = document.getElementById('sheetOverlay');

list.forEach((item) => {
    item.addEventListener('click', function(e) {
        list.forEach((li) => li.classList.remove('active'));
        this.classList.add('active');
        
        if (this === navEditorBtn) switchScreen('editorScreen');
        if (this === navToolsBtn) switchScreen('toolsScreen');
        
        if (this !== menuBtn) {
            bottomSheet.classList.remove('show');
            sheetOverlay.classList.remove('show');
        }
    });
});

openSliderToolBtn.addEventListener('click', () => switchScreen('sliderToolScreen'));
backToToolsBtn.addEventListener('click', () => switchScreen('toolsScreen'));

menuBtn.addEventListener('click', (e) => { e.preventDefault(); bottomSheet.classList.add('show'); sheetOverlay.classList.add('show'); });
sheetOverlay.addEventListener('click', () => {
    bottomSheet.classList.remove('show');
    sheetOverlay.classList.remove('show');
    let activeFound = false;
    list.forEach(li => { if(li.classList.contains('active') && li !== menuBtn) activeFound = true; });
    if(!activeFound) { list[0].classList.add('active'); switchScreen('editorScreen'); }
    list[2].classList.remove('active');
});

const sheetThemeToggle = document.getElementById('sheetThemeToggle');
const sheetThemeIcon = document.getElementById('sheetThemeIcon');
const body = document.body;
let isDark = localStorage.getItem('theme') !== 'light';
if (!isDark) { body.setAttribute('data-theme', 'light'); sheetThemeIcon.setAttribute('name', 'moon-outline'); }

sheetThemeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) { body.setAttribute('data-theme', 'dark'); sheetThemeIcon.setAttribute('name', 'sunny-outline'); localStorage.setItem('theme', 'dark'); } 
    else { body.setAttribute('data-theme', 'light'); sheetThemeIcon.setAttribute('name', 'moon-outline'); localStorage.setItem('theme', 'light'); }
});

const settingsMenuToggle = document.getElementById('settingsMenuToggle');
const settingsPanel = document.getElementById('settingsPanel');
settingsMenuToggle.addEventListener('click', () => settingsPanel.classList.toggle('open'));

const colorBtns = document.querySelectorAll('.color-btn');
colorBtns.forEach(btn => { btn.addEventListener('click', () => { document.body.style.setProperty('--indicator-bg', btn.getAttribute('data-color')); }); });

const fontHind = document.getElementById('fontHind');
const fontKalpurush = document.getElementById('fontKalpurush');
fontKalpurush.addEventListener('click', () => { body.classList.add('font-kalpurush'); fontKalpurush.classList.add('active'); fontHind.classList.remove('active'); });
fontHind.addEventListener('click', () => { body.classList.remove('font-kalpurush'); fontHind.classList.add('active'); fontKalpurush.classList.remove('active'); });

// ভাষা পরিবর্তন (Translation)
let currentLang = 'bn';
const langBnBtn = document.getElementById('langBn');
const langEnBtn = document.getElementById('langEn');

const translations = {
    "bn": { 
        "welcome": "এই অ্যাপে আপনকে স্বাগতম", "canvas": "এখানে ডিজাইন তৈরি করুন...", "editor": "এডিটর", "tools": "টুলস", "menu": "মেনু", "settingsTitle": "মেনু", "tSettings": "সেটিংস", "tColor": "ক) থিম কালার", "tLang": "খ) ভাষা", "tFont": "গ) ফন্ট", "fontHindText": "হিন্দ শিলিগুড়ি", "fontKalText": "কালপুরুষ", "tAppStore": "অ্যাপ স্টোর", "tAbout": "সম্পর্কে", "aName": "আসিফ ইকবাল", "aDesc": "এই অ্যাপটির স্বত্বাধিকারী এবং নির্মাতা।", "aClose": "বন্ধ করুন", "toolsListTitle": "সব টুলস", "toolsListDesc": "আপনার প্রোজেক্টের জন্য প্রয়োজনীয় টুল নির্বাচন করুন", "tSliderName": "ইমেজ স্লাইডার", "tSliderDesc": "রেসপন্সিভ এবং সোয়াইপ সাপোর্টেড স্লাইডার বানান।", "backBtn": "ফিরে যান", "tSliderTitle": "ইমেজ স্লাইডার টুল", "tPhotoSize": "ফটো সাইজ *", "tTotalPhotos": "মোট ফটো * (ক্লিক করুন)", "tDotAlign": "ডট এলাইন *", "tSlideSpeed": "স্লাইড স্পীড লেভেল *", "tLivePreview": "লাইভ প্রিভিউ", "tGenerateCode": "✨ জেনারেট কোড", "szSquare": "১:১ (Square)", "szStandard": "১৬:৯ (Standard)", "szCinema": "১৯:৯ (Cinematic)", "szBanner": "৩:১ (Banner)", "szCustom": "২৬৫:১৪৯ (Custom)", "num2": "২", "num3": "৩", "num4": "৪", "num5": "৫", "num6": "৬", "tLeft": "বাম", "tCenter": "মধ্য", "tRight": "ডান", "tPreviewPlaceholder": "ফটো সিলেক্ট করে কাজ শুরু করুন...", "notiSuccess": "কোড সফলভাবে কপি হয়েছে!", "alertError": "অনুগ্রহ করে সবগুলো 'ফটো লিঙ্ক *' পূরণ করুন।", "tQuizName": "কুইজ জেনারেটর",
        "tQuizDesc": "ইন্টারেক্টিভ কুইজ তৈরি ও শেয়ার করুন।",
        "ask_count": "আপনি কয়টি কুইজ চান?",
        "btn_start": "শুরু করুন",
        "live_preview": "লাইভ প্রিভিউ",
        "btn_generate": "কোড জেনারেট করুন",
        "btn_reset": "রিসেট করুন",
        "generated_code": "জেনারেটেড কোড (কপি করতে ক্লিক করুন)","tProfileName": "প্রোফাইল কার্ড","tProfileDesc": "সুন্দর সোশ্যাল প্রোফাইল কার্ড তৈরি করুন।","pLogo": "লোগো / প্রোফাইল ছবি লিংক","pName": "আপনার নাম","pBio": "আপনার সম্পর্কে (Bio)","pSocials": "সোশ্যাল লিংকস","pAddLink": "+ নতুন লিংক যোগ করুন","pIconColor": "আইকন কালার","pIconHover": "আইকন হোভার কালার","pBtnText": "বাটন টেক্সট","pBtnLink": "বাটন লিংক","pBtnColor": "বাটন কালার","tTableName": "টেবিল জেনারেটর","tTableDesc": "রেসপন্সিভ এবং অটো থিম সাপোর্টেড টেবিল তৈরি করুন।","tTblDesign": "ডিজাইন সেটিংস (Auto Theme)","tZebra": "জেব্রা ডিজাইন (Zebra Stripe)","tBounce": "বাউন্স ইফেক্ট (Click Jump)","tColSetup": "১. কলাম সেটআপ","tAddCol": "+ নতুন কলাম যোগ করুন","tRowSetup": "২. ডেটা (Row) এন্ট্রি","tAddRow": "+ নতুন রো যোগ করুন"

        
    },
    "en": { 
        "welcome": "Welcome to this app", "canvas": "Create your design here...", "editor": "Editor", "tools": "Tools", "menu": "Menu", "settingsTitle": "Menu", "tSettings": "Settings", "tColor": "a) Theme Color", "tLang": "b) Language", "tFont": "c) Font", "fontHindText": "Hind Siliguri", "fontKalText": "Kalpurush", "tAppStore": "App Store", "tAbout": "About", "aName": "Asif Iqbal", "aDesc": "Owner and creator of this app.", "aClose": "Close", "toolsListTitle": "All Tools", "toolsListDesc": "Select the required tool for your project", "tSliderName": "Image Slider", "tSliderDesc": "Create responsive swipe-supported sliders.", "backBtn": "Go Back", "tSliderTitle": "Image Slider Tool", "tPhotoSize": "Photo Size *", "tTotalPhotos": "Total Photos * (Click)", "tDotAlign": "Dot Align *", "tSlideSpeed": "Slide Speed Level *",
        "tLivePreview": "Live Preview", "tGenerateCode": "✨ Generate Code", "szSquare": "1:1 (Square)", "szStandard": "16:9 (Standard)", "szCinema": "19:9 (Cinematic)", "szBanner": "3:1 (Banner)", "szCustom": "265:149 (Custom)", "num2": "2", "num3": "3", "num4": "4", "num5": "5", "num6": "6", "tLeft": "Left", "tCenter": "Center", "tRight": "Right", "tPreviewPlaceholder": "Select photos to start...", "notiSuccess": "Code copied successfully!", "alertError": "Please fill in all 'Photo Link *' fields.", "tQuizName": "Quiz Generator",
        "tQuizDesc": "Create and share interactive quizzes.",
        "ask_count": "How many quizzes do you want?",
        "btn_start": "Start",
        "live_preview": "Live Preview",
        "btn_generate": "Generate Code",
        "btn_reset": "Reset",
        "generated_code": "Generated Code (Click to copy)","tProfileName": "Profile Card","tProfileDesc": "Create beautiful social profile cards.","pLogo": "Logo / Profile Picture Link","pName": "Your Name","pBio": "About You (Bio)","pSocials": "Social Links","pAddLink": "+ Add New Link","pIconColor": "Icon Color","pIconHover": "Icon Hover Color","pBtnText": "Button Text","pBtnLink": "Button Link","pBtnColor": "Button Color","tTableName": "Table Generator","tTableDesc": "Create responsive auto-theme supported tables.","tTblDesign": "Design Settings (Auto Theme)","tZebra": "Zebra Design (Stripes)","tBounce": "Bounce Effect (Click Jump)","tColSetup": "1. Column Setup","tAddCol": "+ Add New Column","tRowSetup": "2. Data (Row) Entry","tAddRow": "+ Add New Row"


 }
};

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) el.innerText = translations[lang][key];
    });
    
    // ডাইনামিক ইনপুটগুলো আপডেট করা
    document.querySelectorAll('.dynamic-item').forEach((item, index) => {
        const i = index + 1;
        const ordinalBn = i === 1 ? 'প্রথম' : i === 2 ? 'দ্বিতীয়' : i === 3 ? 'তৃতীয়' : i === 4 ? 'চতুর্থ' : i === 5 ? 'পঞ্চম' : 'ষষ্ঠ';
        item.querySelector('h4').innerText = currentLang === 'en' ? `Photo ${i}` : `${ordinalBn} ফটো`;
        item.querySelectorAll('label')[0].innerText = currentLang === 'en' ? `Photo Link *` : `ফটো লিঙ্ক *`;
        item.querySelectorAll('label')[1].innerText = currentLang === 'en' ? `Caption (Optional)` : `ক্যাপশন (ঐচ্ছিক)`;
        item.querySelectorAll('label')[2].innerText = currentLang === 'en' ? `Link (Optional)` : `লিঙ্ক (ঐচ্ছিক)`;
        item.querySelector('.slide-caption').placeholder = currentLang === 'en' ? `Enter photo caption` : `ছবির ক্যাপশন দিন`;
        item.querySelector('.slide-link').placeholder = currentLang === 'en' ? `Where to go on click?` : `ক্লিক করলে কোথায় যাবে?`;
    });

    if(lang === 'en') { langEnBtn.classList.add('active'); langBnBtn.classList.remove('active'); } 
    else { langBnBtn.classList.add('active'); langEnBtn.classList.remove('active'); }
}
langEnBtn.addEventListener('click', () => changeLanguage('en'));
langBnBtn.addEventListener('click', () => changeLanguage('bn'));

const aboutBtn = document.getElementById('aboutBtn');
const aboutModal = document.getElementById('aboutModal');
const closeAboutBtn = document.getElementById('closeAboutBtn');
aboutBtn.addEventListener('click', () => { aboutModal.classList.add('show'); bottomSheet.classList.remove('show'); });
closeAboutBtn.addEventListener('click', () => { aboutModal.classList.remove('show'); sheetOverlay.classList.remove('show'); });

// ============================================
// --- টুল ১: ইমেজ স্লাইডার বিল্ডার লজিক ---
// ============================================

const photoCountRadios = document.querySelectorAll('input[name="photoCount"]');
const dynamicInputsContainer = document.getElementById('dynamicInputs');
const generateBtn = document.getElementById('generateBtn');
const sliderRatio = document.getElementById('sliderRatio');
const dotAlignRadios = document.querySelectorAll('input[name="dotAlign"]');
const slideSpeed = document.getElementById('slideSpeed');
const speedValue = document.getElementById('speedValue');
const livePreviewContainer = document.getElementById('livePreviewContainer');
const codeOutputBox = document.getElementById('codeOutputBox');
const typedCode = document.getElementById('typedCode');
const typeCursor = document.getElementById('typeCursor');

const bengaliNums = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০'];

slideSpeed.addEventListener('input', (e) => {
    speedValue.innerText = currentLang === 'bn' ? bengaliNums[e.target.value] : e.target.value;
    resetLiveAutoPlay(); 
});

photoCountRadios.forEach(radio => {
    radio.addEventListener('click', (e) => {
        const count = parseInt(e.target.value);
        dynamicInputsContainer.innerHTML = ''; 
        
        for(let i = 1; i <= count; i++) {
            const ordinalBn = i === 1 ? 'প্রথম' : i === 2 ? 'দ্বিতীয়' : i === 3 ? 'তৃতীয়' : i === 4 ? 'চতুর্থ' : i === 5 ? 'পঞ্চম' : 'ষষ্ঠ';
            const title = currentLang === 'en' ? `Photo ${i}` : `${ordinalBn} ফটো`;
            const labelLink = currentLang === 'en' ? `Photo Link *` : `ফটো লিঙ্ক *`;
            const labelCap = currentLang === 'en' ? `Caption (Optional)` : `ক্যাপশন (ঐচ্ছিক)`;
            const labelHref = currentLang === 'en' ? `Link (Optional)` : `লিঙ্ক (ঐচ্ছিক)`;
            const phCap = currentLang === 'en' ? `Enter photo caption` : `ছবির ক্যাপশন দিন`;
            const phHref = currentLang === 'en' ? `Where to go on click?` : `ক্লিক করলে কোথায় যাবে?`;

            const html = `
                <div class="dynamic-item">
                    <h4>${title}</h4>
                    <div class="form-group">
                        <label>${labelLink}</label>
                        <input type="url" class="slide-img-url" placeholder="https://..." required>
                    </div>
                    <div class="form-group">
                        <label>${labelCap}</label>
                        <input type="text" class="slide-caption" placeholder="${phCap}">
                    </div>
                    <div class="form-group">
                        <label>${labelHref}</label>
                        <input type="url" class="slide-link" placeholder="${phHref}">
                    </div>
                </div>
            `;
            dynamicInputsContainer.insertAdjacentHTML('beforeend', html);
        }
        
        generateBtn.style.display = 'block'; 
        document.querySelectorAll('.slide-img-url, .slide-caption, .slide-link').forEach(input => {
            input.addEventListener('input', () => { input.style.borderColor = ''; updateLivePreview(); });
        });
        updateLivePreview(); 
    });
});

sliderRatio.addEventListener('change', updateLivePreview);
dotAlignRadios.forEach(r => r.addEventListener('click', updateLivePreview));

let livePreviewInterval;
let liveIdx = 0;
let liveTotal = 0;

function updateLivePreview() {
    const items = document.querySelectorAll('.dynamic-item');
    liveTotal = items.length;
    if(liveTotal === 0) return;

    let slidesHTML = '';
    let dotsHTML = '';
    const ratio = sliderRatio.value;
    
    let align = 'center';
    document.getElementsByName('dotAlign').forEach(r => { if(r.checked) align = r.value; });
    let capLeft = align === 'flex-start' ? 'auto' : '20px';
    let capRight = align === 'flex-start' ? '20px' : 'auto';
    let capAlign = align === 'flex-start' ? 'right' : 'left';

    items.forEach((item, index) => {
        const imgVal = item.querySelector('.slide-img-url').value.trim();
        const imgUrl = imgVal ? imgVal : `https://via.placeholder.com/800x400/151F28/ffffff?text=Slide+Preview+${index+1}`;
        const caption = item.querySelector('.slide-caption').value;

        let content = `<img src="${imgUrl}" alt="Slide ${index+1}" style="width:100%; height:100%; object-fit:cover; pointer-events:none; display:block; -webkit-user-drag:none;">`;
        if (caption) {
            content += `<div style="position:absolute; bottom:15px; left:${capLeft}; right:${capRight}; text-align:${capAlign}; color:#fff; font-size:14px; font-weight:normal; font-family:'Kalpurush', sans-serif !important; text-shadow:1px 1px 4px rgba(0,0,0,0.8); z-index:5; pointer-events:none;">${caption}</div>`;
        }
        
        slidesHTML += `<div style="min-width:100%; position:relative;">${content}</div>`;
        dotsHTML += `<span class="preview-dot" onclick="jumpLiveTo(${index})" style="width:${index===0?'30px':'10px'}; height:10px; background:${index===0?'#fff':'rgba(255,255,255,0.5)'}; border-radius:10px; transition:0.4s; cursor:pointer; ${index===0?'box-shadow:0 0 10px rgba(255,255,255,0.6);':''}"></span>`;
    });

    liveIdx = 0; 
    livePreviewContainer.style.border = 'none';
    livePreviewContainer.innerHTML = `
        <div style="width:100%; aspect-ratio:${ratio}; position:relative; overflow:hidden; border-radius:12px; background:#000;">
            <div id="liveTrack" style="display:flex; transition:transform 0.4s ease-in-out; width:100%; height:100%;">
                ${slidesHTML}
            </div>
            <div style="position:absolute; bottom:15px; width:100%; display:flex; justify-content:${align}; gap:8px; padding: 0 30px; box-sizing: border-box; z-index:10;">
                ${dotsHTML}
            </div>
        </div>
    `;
    resetLiveAutoPlay();
}

function moveLive(step) {
    if(liveTotal <= 1) return;
    liveIdx += step;
    if(liveIdx >= liveTotal) liveIdx = 0;
    if(liveIdx < 0) liveIdx = liveTotal - 1;

    const track = document.getElementById('liveTrack');
    const dotElements = document.querySelectorAll('.preview-dot');
    if(track) track.style.transform = `translateX(-${liveIdx * 100}%)`;
    
    dotElements.forEach(d => { d.style.background = 'rgba(255,255,255,0.5)'; d.style.width = '10px'; d.style.boxShadow = 'none'; });
    if(dotElements[liveIdx]) {
        dotElements[liveIdx].style.background = '#fff';
        dotElements[liveIdx].style.width = '30px';
        dotElements[liveIdx].style.boxShadow = '0 0 10px rgba(255,255,255,0.6)';
    }
    resetLiveAutoPlay();
}

window.jumpLiveTo = function(idx) {
    if(liveTotal <= 1) return;
    liveIdx = idx;
    const track = document.getElementById('liveTrack');
    const dotElements = document.querySelectorAll('.preview-dot');
    if(track) track.style.transform = `translateX(-${liveIdx * 100}%)`;
    dotElements.forEach(d => { d.style.background = 'rgba(255,255,255,0.5)'; d.style.width = '10px'; d.style.boxShadow = 'none'; });
    if(dotElements[liveIdx]) { dotElements[liveIdx].style.background = '#fff'; dotElements[liveIdx].style.width = '30px'; dotElements[liveIdx].style.boxShadow = '0 0 10px rgba(255,255,255,0.6)'; }
    resetLiveAutoPlay();
};

function resetLiveAutoPlay() {
    clearInterval(livePreviewInterval);
    if(liveTotal > 1) {
        const speedLvl = parseInt(slideSpeed.value); 
        const speedMs = (11 - speedLvl) * 800; 
        livePreviewInterval = setInterval(() => moveLive(1), speedMs);
    }
}

let liveStartX = 0, liveEndX = 0, liveIsDrag = false;
function swipeLive() {
    let diff = liveStartX - liveEndX;
    if (Math.abs(diff) > 50) diff > 0 ? moveLive(1) : moveLive(-1);
    liveStartX = 0; liveEndX = 0;
}

livePreviewContainer.addEventListener('touchstart', e => liveStartX = e.touches[0].clientX);
livePreviewContainer.addEventListener('touchmove', e => liveEndX = e.touches[0].clientX);
livePreviewContainer.addEventListener('touchend', swipeLive);
livePreviewContainer.addEventListener('mousedown', e => { liveIsDrag = true; liveStartX = e.clientX; });
livePreviewContainer.addEventListener('mousemove', e => { if(liveIsDrag) liveEndX = e.clientX; });
livePreviewContainer.addEventListener('mouseup', () => { if(liveIsDrag){ liveIsDrag=false; swipeLive(); } });
livePreviewContainer.addEventListener('mouseleave', () => { if(liveIsDrag){ liveIsDrag=false; swipeLive(); } });

let typeInterval;
generateBtn.addEventListener('click', () => {
    let isValid = true;
    document.querySelectorAll('.slide-img-url').forEach(input => {
        if (input.value.trim() === '') { input.style.borderColor = '#ef4444'; isValid = false; }
    });
    if (!isValid) { alert(translations[currentLang].alertError); return; }

    codeOutputBox.style.display = 'block';
    typedCode.textContent = ''; 
    typeCursor.style.display = 'inline-block';
    clearInterval(typeInterval);
    
    const uniqueId = 'slider-' + Math.floor(Math.random() * 10000);
    const ratio = sliderRatio.value;
    let align = 'center';
    document.getElementsByName('dotAlign').forEach(r => { if(r.checked) align = r.value; });
    
    let capLeft = align === 'flex-start' ? 'auto' : '20px';
    let capRight = align === 'flex-start' ? '20px' : 'auto';
    let capAlign = align === 'flex-start' ? 'right' : 'left';
    const finalSpeedMs = (11 - parseInt(slideSpeed.value)) * 800; 
    
    let htmlSlides = '', htmlDots = '';
    document.querySelectorAll('.dynamic-item').forEach((item, i) => {
        const imgUrl = item.querySelector('.slide-img-url').value;
        const caption = item.querySelector('.slide-caption').value;
        const link = item.querySelector('.slide-link').value;
        
        let content = `<img src="${imgUrl}" alt="Slide ${i+1}">`;
        if (caption) content += `\n      <div class="sc-cap">${caption}</div>`;
        if (link) content = `<a href="${link}" target="_blank">\n      ${content}\n    </a>`;
        
        htmlSlides += `\n    <div class="sc-slide">\n      ${content}\n    </div>`;
        htmlDots += `\n      <span class="sc-dot ${i===0?'active':''}"></span>`;
    });

    const finalCode = `<div id="${uniqueId}" class="sc-container">
  <div class="sc-track">${htmlSlides}
  </div>
  <div class="sc-dots">${htmlDots}
  </div>
</div>

<style>
  @import url('https://cdn.jsdelivr.net/gh/infoaiqbal/kalpurush@latest/style.css');
  #${uniqueId} { width: 100%; aspect-ratio: ${ratio}; position: relative; overflow: hidden; border-radius: 12px; user-select: none; -webkit-user-drag: none; cursor: grab; background: #000; }
  #${uniqueId}:active { cursor: grabbing; }
  #${uniqueId} .sc-track { display: flex; transition: transform 0.4s ease-in-out; width: 100%; height: 100%; }
  #${uniqueId} .sc-slide { min-width: 100%; position: relative; }
  #${uniqueId} .sc-slide img { width: 100%; height: 100%; object-fit: cover; pointer-events: none; display: block; }
  #${uniqueId} .sc-cap { position: absolute; bottom: 15px; left: ${capLeft}; right: ${capRight}; text-align: ${capAlign}; color: #fff; font-size: 14px; font-weight: normal; font-family: 'Kalpurush', sans-serif !important; text-shadow: 1px 1px 4px rgba(0,0,0,0.8); z-index: 5; pointer-events: none; }
  #${uniqueId} .sc-dots { position: absolute; bottom: 15px; width: 100%; display: flex; justify-content: ${align}; gap: 8px; padding: 0 30px; box-sizing: border-box; z-index: 10; }
  #${uniqueId} .sc-dot { width: 10px; height: 10px; background: rgba(255,255,255,0.5); border-radius: 10px; transition: all 0.4s ease; cursor: pointer; }
  #${uniqueId} .sc-dot.active { width: 30px; background: #fff; box-shadow: 0 0 10px rgba(255,255,255,0.6); }
</style>

<script>
  (function(){
    const slider = document.getElementById('${uniqueId}');
    const track = slider.querySelector('.sc-track');
    const dots = slider.querySelectorAll('.sc-dot');
    let idx = 0, startX = 0, endX = 0, isDrag = false, autoTimer;

    function move(step) {
      idx += step;
      if (idx >= dots.length) idx = 0;
      if (idx < 0) idx = dots.length - 1;
      track.style.transform = 'translateX(-' + (idx * 100) + '%)';
      dots.forEach(d => d.classList.remove('active'));
      dots[idx].classList.add('active');
      resetAutoPlay();
    }
    
    function swipe() {
      let diff = startX - endX;
      if (Math.abs(diff) > 50) diff > 0 ? move(1) : move(-1);
      startX = 0; endX = 0;
    }
    
    function resetAutoPlay() {
      clearInterval(autoTimer);
      autoTimer = setInterval(() => move(1), ${finalSpeedMs});
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { move(i - idx); });
    });

    slider.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    slider.addEventListener('touchmove', e => endX = e.touches[0].clientX);
    slider.addEventListener('touchend', swipe);
    slider.addEventListener('mousedown', e => { isDrag = true; startX = e.clientX; });
    slider.addEventListener('mousemove', e => { if(isDrag) endX = e.clientX; });
    slider.addEventListener('mouseup', () => { if(isDrag){ isDrag=false; swipe(); } });
    slider.addEventListener('mouseleave', () => { if(isDrag){ isDrag=false; swipe(); } });
    
    resetAutoPlay();
  })();
<` + `/script>`;

    let i = 0;
    typeInterval = setInterval(() => {
        if (i < finalCode.length) {
            typedCode.textContent += finalCode.substring(i, i + 5); 
            i += 5;
            codeOutputBox.scrollTop = codeOutputBox.scrollHeight;
        } else {
            clearInterval(typeInterval);
            typeCursor.style.display = 'none';
        }
    }, 10);
});

codeOutputBox.addEventListener('click', () => {
    if(typedCode.textContent.length > 10) {
        navigator.clipboard.writeText(typedCode.textContent).then(() => {
            notiBox.innerText = translations[currentLang].notiSuccess;
            notiBox.classList.add('show');
        });
    }
});

// ============================================
// --- টুল ২: কুইজ জেনারেটর টুল লজিক ---
// ============================================

const openQuizToolBtn = document.getElementById('openQuizToolBtn');
const backToToolsBtnQuiz = document.getElementById('backToToolsBtnQuiz');

// টুল ওপেন এবং ব্যাক করা
if (openQuizToolBtn) {
    openQuizToolBtn.addEventListener('click', () => switchScreen('quizToolScreen'));
}
if (backToToolsBtnQuiz) {
    backToToolsBtnQuiz.addEventListener('click', () => switchScreen('toolsScreen'));
}

let totalQuizzes = 0;
let quizCodeInterval;

function startQuizBuilder() {
    const countInput = document.getElementById('quiz-count').value;
    if (!countInput || countInput < 1) {
        alert(currentLang === 'bn' ? "অনুগ্রহ করে একটি সঠিক সংখ্যা লিখুন!" : "Please enter a valid number!");
        return;
    }
    totalQuizzes = parseInt(countInput);
    document.getElementById('quiz-setup-section').style.display = 'none';
    document.getElementById('quiz-builder-section').style.display = 'block';
    buildQuizForms();
}

function buildQuizForms() {
    const container = document.getElementById('quiz-forms-container');
    container.innerHTML = '';

    for (let i = 1; i <= totalQuizzes; i++) {
        const block = document.createElement('div');
        block.className = 'quiz-block';
        const labelQ = currentLang === 'bn' ? `${i} নং কুইজ` : `Quiz No. ${i}`;
        const placeholderQ = currentLang === 'bn' ? `প্রশ্ন: _______` : `Question: _______`;
        const optTxt = currentLang === 'bn' ? `উত্তর` : `Option`;
        const ansTxt = currentLang === 'bn' ? `সঠিক উত্তর:` : `Correct Answer:`;

        block.innerHTML = `
            <label style="font-size:18px; margin-bottom:10px; color: var(--indicator-bg);">${labelQ}</label>
            <div class="form-group">
                <input type="text" id="quiz-q-${i}" placeholder="${placeholderQ}" oninput="updateQuizPreview()">
            </div>
            <div class="form-group">
                <input type="text" id="quiz-opt1-${i}" placeholder="${optTxt} ১" oninput="updateQuizPreview()">
                <input type="text" id="quiz-opt2-${i}" placeholder="${optTxt} ২" oninput="updateQuizPreview()">
                <input type="text" id="quiz-opt3-${i}" placeholder="${optTxt} ৩" oninput="updateQuizPreview()">
                <input type="text" id="quiz-opt4-${i}" placeholder="${optTxt} ৪" oninput="updateQuizPreview()">
            </div>
            <div class="form-group">
                <label>${ansTxt}</label>
                <select id="quiz-ans-${i}" onchange="updateQuizPreview()">
                    <option value="1">১</option>
                    <option value="2">২</option>
                    <option value="3">৩</option>
                    <option value="4">৪</option>
                </select>
            </div>
        `;
        container.appendChild(block);
    }
    updateQuizPreview();
}

function updateQuizPreview() {
    const previewContainer = document.getElementById('quiz-live-preview-content');
    previewContainer.innerHTML = '';

    for (let i = 1; i <= totalQuizzes; i++) {
        const q = document.getElementById(`quiz-q-${i}`).value || (currentLang === 'bn' ? `প্রশ্ন ${i}` : `Question ${i}`);
        const opt1 = document.getElementById(`quiz-opt1-${i}`).value || 'Option 1';
        const opt2 = document.getElementById(`quiz-opt2-${i}`).value || 'Option 2';
        const opt3 = document.getElementById(`quiz-opt3-${i}`).value || 'Option 3';
        const opt4 = document.getElementById(`quiz-opt4-${i}`).value || 'Option 4';
        const ans = document.getElementById(`quiz-ans-${i}`).value;

        const div = document.createElement('div');
        div.className = 'quiz-preview-item';
        div.innerHTML = `
            <strong style="display:block; margin-bottom:8px; font-size:16px;">${i}. ${q}</strong>
            <span class="p-opt ${ans == 1 ? 'correct' : ''}">${opt1}</span>
            <span class="p-opt ${ans == 2 ? 'correct' : ''}">${opt2}</span>
            <span class="p-opt ${ans == 3 ? 'correct' : ''}">${opt3}</span>
            <span class="p-opt ${ans == 4 ? 'correct' : ''}">${opt4}</span>
        `;
        previewContainer.appendChild(div);
    }
}

function generateQuizCode() {
    let quizDataArray = [];
    
    for (let i = 1; i <= totalQuizzes; i++) {
        const q = document.getElementById(`quiz-q-${i}`).value;
        const opt1 = document.getElementById(`quiz-opt1-${i}`).value;
        const opt2 = document.getElementById(`quiz-opt2-${i}`).value;
        const opt3 = document.getElementById(`quiz-opt3-${i}`).value;
        const opt4 = document.getElementById(`quiz-opt4-${i}`).value;
        const ans = parseInt(document.getElementById(`quiz-ans-${i}`).value) - 1;

        if(!q || !opt1 || !opt2 || !opt3 || !opt4) {
            alert(currentLang === 'bn' ? "দয়া করে সবগুলো ফিল্ড পূরণ করুন!" : "Please fill in all fields!");
            return;
        }
        quizDataArray.push(`{ question: "${q}", options: ["${opt1}", "${opt2}", "${opt3}", "${opt4}"], correct: ${ans} }`);
    }

    const dataString = `[\n    ${quizDataArray.join(',\n    ')}\n  ]`;
    
    const finalHTML = `<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dynamic Quiz App</title>
<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600&display=swap" rel="stylesheet">
<style>
  :root { --indicator-bg: #4a90e2; --bg-color: #f9f9f9; --text-color: #333333; --box-bg: #ffffff; --option-bg: #f0f0f0; --option-border: #4a90e2; --correct-bg: #27ae60; --wrong-bg: #e74c3c; }
  body { background-color: var(--bg-color); color: var(--text-color); font-family: 'Hind Siliguri', sans-serif; padding: 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
  .question-card { background: var(--box-bg); padding: 30px; border-radius: 12px; width: 100%; max-width: 500px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
  .option-capsule { background: var(--option-bg); border: 2px solid var(--option-border); border-radius: 50px; padding: 15px; margin-bottom: 10px; cursor: pointer; transition: 0.2s; text-align: left; }
  .option-capsule:hover:not(.disabled) { transform: translateY(-2px); opacity: 0.8; }
  .option-capsule.correct { background: var(--correct-bg); color: #fff; border-color: var(--correct-bg); }
  .option-capsule.wrong { background: var(--wrong-bg); color: #fff; border-color: var(--wrong-bg); }
  .disabled { pointer-events: none; opacity: 0.6; }
  .progress-bar { height: 8px; background: var(--indicator-bg); width: 0%; transition: 0.3s; margin: 20px 0; border-radius: 4px; }
  .nav-btn { width: 100%; padding: 12px; border-radius: 50px; border: none; background: var(--indicator-bg); color: #fff; font-size: 16px; cursor: pointer; font-weight: bold; }
  .nav-btn:disabled { background: #ccc; }
  .d-none { display: none !important; }
  .result-item { background: var(--option-bg); padding: 15px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid var(--indicator-bg); text-align: left; }
</style>
</head>
<body>

<div class="question-card" id="quiz-screen">
  <h3 id="question-text"></h3>
  <div id="options-container"></div>
  <div class="progress-bar" id="progress-bar"></div>
  <button id="next-btn" class="nav-btn" onclick="nextQuestion()" disabled>পরবর্তী</button>
</div>

<div class="question-card d-none" id="results-screen">
  <h3 style="margin-top:0;">কুইজ শেষ হয়েছে!</h3>
  <div id="results-container" style="max-height: 400px; overflow-y: auto; text-align: left; padding-right: 5px;"></div>
  <button class="nav-btn" style="margin-top: 15px;" onclick="location.reload()">আবার শুরু করুন</button>
</div>

<script>
  const quizData = ${dataString};
  let currentQuestion = 0;
  let userAnswers = [];
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById('question-text').innerText = (currentQuestion + 1) + ". " + q.question;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    document.getElementById('next-btn').disabled = true;
    
    q.options.forEach((opt, index) => {
      const div = document.createElement('div');
      div.className = 'option-capsule';
      div.innerText = opt;
      div.onclick = () => selectOption(div, index, q.correct);
      container.appendChild(div);
    });
    document.getElementById('progress-bar').style.width = ((currentQuestion / quizData.length) * 100) + '%';
  }

  function selectOption(el, selected, correct) {
    if(!document.getElementById('next-btn').disabled) return;
    const isCorrect = (selected === correct);
    userAnswers[currentQuestion] = { selected: selected, isCorrect: isCorrect };
    el.classList.add(isCorrect ? 'correct' : 'wrong');
    Array.from(el.parentElement.children).forEach(child => child.classList.add('disabled'));
    document.getElementById('next-btn').disabled = false;
  }

  function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < quizData.length) loadQuestion();
    else showResults();
  }

  function showResults() {
    document.getElementById('quiz-screen').classList.add('d-none');
    document.getElementById('results-screen').classList.remove('d-none');
    const container = document.getElementById('results-container');
    
    quizData.forEach((q, i) => {
      const uAns = userAnswers[i];
      const div = document.createElement('div');
      div.className = 'result-item';
      const statusText = uAns.isCorrect ? '<span style="color:var(--correct-bg);font-weight:bold;">সঠিক</span>' : '<span style="color:var(--wrong-bg);font-weight:bold;">ভুল</span>';
      
      div.innerHTML = '<h4>' + (i + 1) + '. ' + q.question + '</h4>' +
                      '<p><strong>তোমার উত্তর:</strong> ' + q.options[uAns.selected] + ' (' + statusText + ')</p>' +
                      '<p><strong>সঠিক উত্তর:</strong> ' + q.options[q.correct] + '</p>';
      container.appendChild(div);
    });
  }

  loadQuestion();
<` + `/script>
</body>
</html>`;

    document.getElementById('quiz-output-section').style.display = 'block';
    
    const codeBox = document.getElementById('quiz-code-box');
    codeBox.textContent = '';
    let i = 0;
    clearInterval(quizCodeInterval); 
    
    quizCodeInterval = setInterval(() => {
        if (i < finalHTML.length) {
            codeBox.textContent += finalHTML.substring(i, i + 10); 
            i += 10;
            codeBox.scrollTop = codeBox.scrollHeight;
        } else {
            clearInterval(quizCodeInterval);
        }
    }, 5); 
}

function copyQuizCode() {
    const codeBox = document.getElementById('quiz-code-box');
    const textToCopy = codeBox.textContent;
    if(!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
        notiBox.innerText = currentLang === 'bn' ? "কোড সফলভাবে কপি হয়েছে!" : "Code copied successfully!";
        notiBox.classList.add('show');
        setTimeout(() => { notiBox.classList.remove('show'); setTimeout(() => notiBox.innerText = translations[currentLang].welcome, 300); }, 2500);
    });
}

function resetQuizTool() {
    document.getElementById('quiz-setup-section').style.display = 'block';
    document.getElementById('quiz-builder-section').style.display = 'none';
    document.getElementById('quiz-output-section').style.display = 'none';
    document.getElementById('quiz-count').value = '';
    clearInterval(quizCodeInterval);
}



// ============================================
// --- টুল ৩: প্রোফাইল কার্ড জেনারেটর লজিক ---
// ============================================

const openProfileToolBtn = document.getElementById('openProfileToolBtn');
const backToToolsBtnProfile = document.getElementById('backToToolsBtnProfile');

if (openProfileToolBtn) {
    openProfileToolBtn.addEventListener('click', () => switchScreen('profileToolScreen'));
}
if (backToToolsBtnProfile) {
    backToToolsBtnProfile.addEventListener('click', () => switchScreen('toolsScreen'));
}

const profileIconsDB = {
    "facebook": '<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>',
    "youtube": '<svg viewBox="0 0 24 24"><path d="M21.582 6.186a2.636 2.636 0 0 0-1.85-1.864C18.093 3.88 12 3.88 12 3.88s-6.093 0-7.732.442a2.636 2.636 0 0 0-1.85 1.864C2 7.842 2 12 2 12s0 4.158.418 5.814a2.636 2.636 0 0 0 1.85 1.864C5.907 20.12 12 20.12 12 20.12s6.093 0 7.732-.442a2.636 2.636 0 0 0 1.85-1.864C22 16.158 22 12 22 12s0-4.158-.418-5.814zM9.99 15.46V8.54L15.93 12l-5.94 3.46z"/></svg>',
    "instagram": '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
    "telegram": '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.43.91-4.04 2.67-.38.26-.73.39-1.05.38-.35-.01-1.03-.2-1.53-.36-.61-.2-1.1-.31-1.06-.66.02-.18.27-.37.75-.56 2.94-1.28 4.9-2.13 5.88-2.54 2.79-1.17 3.37-1.37 3.75-1.38.08 0 .27.02.39.12.1.08.13.19.14.28-.01.05.01.17 0 .2z"/></svg>',
    "whatsapp": '<svg viewBox="0 0 24 24"><path d="M12.031 0C5.398 0 0 5.398 0 12.031c0 2.128.556 4.195 1.611 6.012L.175 23.473l5.59-1.465A11.968 11.968 0 0 0 12.031 24c6.632 0 12.03-5.399 12.03-12.031C24.062 5.398 18.663 0 12.031 0zm3.896 17.202c-.595.342-1.636.57-2.311.597-.565.022-1.32-.132-3.327-.92-2.417-1.035-3.957-3.523-4.076-3.682-.12-.158-.973-1.296-.973-2.47 0-1.175.606-1.752.822-1.99.215-.237.472-.296.632-.296.16 0 .318 0 .456.007.142.008.332-.054.52.398.192.457.653 1.597.712 1.716.06.12.1.259.02.417-.08.158-.12.257-.238.396-.118.139-.248.297-.355.405-.12.119-.244.248-.11.478.134.23 .597.986 1.282 1.597.882.787 1.624 1.03 1.854 1.149.23.12.366.099.504-.059.139-.158.597-.694.757-.932.16-.237.318-.198.527-.12s1.327.625 1.554.743c.228.12.38.178.435.277.054.1.054.575-.247.962z"/></svg>',
    "email": '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    "website": '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
    "twitter": '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    "threads": '<svg viewBox="0 0 24 24"><path d="M14.654 11.666c-.347-.354-.847-.565-1.428-.565-1.028 0-1.84.802-1.84 1.87 0 1.05.807 1.866 1.815 1.866.603 0 1.123-.23 1.48-.606l1.246 1.18c-.687.732-1.642 1.18-2.75 1.18-2.008 0-3.626-1.573-3.626-3.62 0-2.032 1.623-3.618 3.636-3.618 1.487 0 2.658.74 3.266 2.052.203.438.31 1.01.31 1.572v.63h-5.467c.076.953.86 1.66 1.84 1.66.52 0 1.002-.212 1.346-.575l1.173 1.144zm4.457 4.29c-1.026 1.8-2.775 2.766-4.996 2.766-3.238 0-5.772-2.315-5.772-5.753 0-3.415 2.502-5.72 5.75-5.72 3.197 0 5.61 2.233 5.61 5.512v1.5h-9.52c.162 1.65 1.484 2.802 3.176 2.802 1.3 0 2.443-.655 3.013-1.655l1.623.957a5.556 5.556 0 0 1-4.636 2.378c-4.103 0-6.924-2.836-6.924-7.07 0-4.185 2.83-7.11 6.885-7.11 4.102 0 6.845 2.858 6.845 7.152 0 .546-.076 1.13-.242 1.68l1.52-.464c.106-.445.158-.936.158-1.468 0-4.993-3.328-8.68-8.28-8.68-5.06 0-8.583 3.687-8.583 8.78 0 5.06 3.42 8.765 8.412 8.765 2.755 0 5.09-1.26 6.46-3.666l-1.5-1.036z"/></svg>',
    "linkedin": '<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
    "tiktok": '<svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.33 6.33 0 0 0 6.27-6.36v-6.9a8.16 8.16 0 0 0 3.91.99v-3.46a4.84 4.84 0 0 1-1.86-.38z"/></svg>'
};

const profileCustomOptionsHTML = Object.keys(profileIconsDB).map(key => `
    <div class="custom-option" data-value="${key}">
        <div class="opt-icon">${profileIconsDB[key]}</div>
        <span class="s-name">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
    </div>
`).join('');

const profileSocialLinksContainer = document.getElementById('profileSocialLinksContainer');
let profileSocialCount = 0;

function setupProfileRow(row, platform) {
    const customSelect = row.querySelector('.custom-select');
    const inputField = row.querySelector('.social-url');
    customSelect.setAttribute('data-value', platform);
    
    const selectedBox = customSelect.querySelector('.select-selected');
    selectedBox.innerHTML = `
        <div class="opt-icon">${profileIconsDB[platform]}</div>
        <span class="s-name">${platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
        <span class="arrow">▼</span>
    `;

    if(platform === 'email') inputField.placeholder = currentLang === 'bn' ? "জিমেইল আইডি দিন" : "Email ID";
    else if (platform === 'whatsapp') inputField.placeholder = currentLang === 'bn' ? "হোয়াটসঅ্যাপ নাম্বার দিন" : "WhatsApp No.";
    else inputField.placeholder = currentLang === 'bn' ? "লিংক দিন (https://...)" : "Enter Link (https://...)";

    updateProfileLivePreview();
}

function addProfileSocialField() {
    profileSocialCount++;
    const div = document.createElement('div');
    div.className = 'profile-social-row';
    div.innerHTML = `
        <div class="custom-select" data-value="">
            <div class="select-selected" onclick="toggleProfileDropdown(this)"></div>
            <div class="select-items select-hide">${profileCustomOptionsHTML}</div>
        </div>
        <input type="text" class="social-url" oninput="updateProfileLivePreview()">
        ${profileSocialCount > 1 ? `<button class="btn-remove" onclick="this.parentElement.remove(); updateProfileLivePreview();" style="background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid #ef4444; padding: 10px 12px; border-radius: 8px; cursor: pointer; transition: 0.3s;">✖</button>` : ''}
    `;
    profileSocialLinksContainer.appendChild(div);
    
    let defPlatform = 'facebook';
    if(profileSocialCount === 2) defPlatform = 'youtube';
    else if(profileSocialCount === 3) defPlatform = 'instagram';
    setupProfileRow(div, defPlatform);
}

if(profileSocialLinksContainer){
    addProfileSocialField(); addProfileSocialField(); addProfileSocialField();
    document.getElementById('profileAddSocialBtn').addEventListener('click', addProfileSocialField);

    profileSocialLinksContainer.addEventListener('click', function(e) {
        const option = e.target.closest('.custom-option');
        if(option) {
            const platform = option.getAttribute('data-value');
            const row = option.closest('.profile-social-row');
            setupProfileRow(row, platform);
            option.closest('.select-items').classList.add('select-hide');
        }
    });
}

function toggleProfileDropdown(el) {
    document.querySelectorAll('.select-items').forEach(item => {
        if(item !== el.nextElementSibling) item.classList.add('select-hide');
    });
    el.nextElementSibling.classList.toggle('select-hide');
}

document.addEventListener('click', function(e) {
    if(!e.target.closest('.custom-select')) {
        document.querySelectorAll('.select-items').forEach(item => item.classList.add('select-hide'));
    }
});

// Color Picker Sync
function setupProfileColorPicker(pickerId, textId) {
    const picker = document.getElementById(pickerId);
    const textInput = document.getElementById(textId);
    if(!picker) return;
    
    picker.addEventListener('input', (e) => {
        textInput.value = e.target.value.toUpperCase();
        updateProfileLivePreview();
    });
    
    textInput.addEventListener('input', (e) => {
        let val = e.target.value.trim();
        if(val && !val.startsWith('#')) val = '#' + val;
        if(/^#[0-9A-F]{6}$/i.test(val)) {
            picker.value = val;
            updateProfileLivePreview();
        }
    });
}
setupProfileColorPicker('profileInpIconColor', 'profileHexIconColor');
setupProfileColorPicker('profileInpIconHoverColor', 'profileHexIconHoverColor');
setupProfileColorPicker('profileInpBtnColor', 'profileHexBtnColor');

['profileInpLogo', 'profileInpName', 'profileInpBio', 'profileInpBtnText', 'profileInpBtnLink'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener('input', updateProfileLivePreview);
});

function updateProfileLivePreview() {
    const box = document.getElementById('profileLivePreviewBox');
    if(!box) return;

    const logo = document.getElementById('profileInpLogo').value;
    const name = document.getElementById('profileInpName').value || 'আপনার নাম';
    const bio = document.getElementById('profileInpBio').value || 'আপনার সম্পর্কে...';
    const iconColor = document.getElementById('profileInpIconColor').value;
    const btnColor = document.getElementById('profileInpBtnColor').value;
    const btnText = document.getElementById('profileInpBtnText').value || 'খুলুন';

    let socialHTML = '';
    document.querySelectorAll('.profile-social-row').forEach(row => {
        const platform = row.querySelector('.custom-select').getAttribute('data-value');
        let url = row.querySelector('.social-url').value.trim();
        if(!url) url = '#';
        if(platform === 'email' && url !== '#' && !url.startsWith('mailto:')) url = `mailto:${url}`;
        
        socialHTML += `<a href="${url}" target="_blank" class="live-s-icon" style="color: ${iconColor};">${profileIconsDB[platform]}</a>`;
    });

    box.innerHTML = `
        <div class="live-card">
            <div class="live-avatar"><img src="${logo}" alt="Logo"></div>
            <h2 class="live-name">${name}</h2>
            <p class="live-bio">${bio}</p>
            <div class="live-social">${socialHTML}</div>
            <a href="#" class="live-btn" style="background: ${btnColor}; border-color: ${btnColor}; pointer-events:none;">${btnText}</a>
        </div>
    `;
}
if(document.getElementById('profileLivePreviewBox')) updateProfileLivePreview(); 

// Generate Code Logic
let profileTypeInterval;
const profileGenerateBtn = document.getElementById('profileGenerateBtn');
if(profileGenerateBtn) {
    profileGenerateBtn.addEventListener('click', () => {
        const logo = document.getElementById('profileInpLogo').value;
        const name = document.getElementById('profileInpName').value;
        const bio = document.getElementById('profileInpBio').value;
        const iconColor = document.getElementById('profileInpIconColor').value;
        const iconHoverColor = document.getElementById('profileInpIconHoverColor').value;
        const btnText = document.getElementById('profileInpBtnText').value;
        const btnLink = document.getElementById('profileInpBtnLink').value;
        const btnColor = document.getElementById('profileInpBtnColor').value;

        let socialHTMLCode = '';
        document.querySelectorAll('.profile-social-row').forEach(row => {
            const platform = row.querySelector('.custom-select').getAttribute('data-value');
            let url = row.querySelector('.social-url').value.trim() || '#';
            if(platform === 'email' && url !== '#' && !url.startsWith('mailto:')) url = `mailto:${url}`;
            socialHTMLCode += `\n            <!-- ${platform} -->\n            <a href="${url}" target="_blank" class="social-icon">\n                ${profileIconsDB[platform]}\n            </a>`;
        });

        const finalCode = `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Card</title>
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        @import url('https://cdn.jsdelivr.net/gh/infoaiqbal/kalpurush@latest/style.css');
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
        body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f4f7f6; font-family: 'Hind Siliguri', sans-serif; }
        .profile-card { background: #ffffff; width: 100%; max-width: 360px; border-radius: 20px; padding: 60px 25px 35px; position: relative; text-align: center; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08); margin: 70px 20px 20px; border: 1px solid rgba(0,0,0,0.05); }
        .profile-avatar { width: 120px; height: 120px; border-radius: 50%; border: 4px solid #ffffff; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2); position: absolute; top: -60px; left: 50%; transform: translateX(-50%); background: #fff; overflow: hidden; display: flex; justify-content: center; align-items: center; }
        .profile-avatar img { width: 100%; height: 100%; object-fit: cover; pointer-events: none; }
        .profile-name { font-family: 'Hind Siliguri', sans-serif; font-size: 26px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; margin-top: 15px; }
        .profile-bio { font-family: 'Kalpurush', sans-serif !important; font-size: 18px; color: #555555; line-height: 1.5; margin-bottom: 30px; padding: 0 10px; }
        .social-links { display: flex; justify-content: center; gap: 15px; margin-bottom: 30px; flex-wrap: wrap; }
        .social-icon { display: flex; justify-content: center; align-items: center; width: 45px; height: 45px; border-radius: 50%; background: #f4f6f8; color: ${iconColor}; text-decoration: none; transition: all 0.3s ease; }
        .social-icon svg { width: 22px; height: 22px; fill: currentColor; }
        .social-icon:hover { background: ${iconHoverColor}; color: #ffffff; transform: translateY(-5px); box-shadow: 0 8px 15px rgba(0,0,0,0.15); }
        .action-btn { display: inline-block; background: ${btnColor}; color: #ffffff; text-decoration: none; font-size: 18px; font-weight: 600; padding: 12px 40px; border-radius: 12px; transition: all 0.3s ease; border: 2px solid ${btnColor}; }
        .action-btn:hover { background: transparent; color: ${btnColor}; }
    </style>
</head>
<body>
    <div class="profile-card">
        <div class="profile-avatar"><img src="${logo}" alt="Logo"></div>
        <h2 class="profile-name">${name}</h2>
        <p class="profile-bio">${bio}</p>
        <div class="social-links">${socialHTMLCode}
        </div>
        <a href="${btnLink}" target="_blank" class="action-btn">${btnText}</a>
    </div>
</body>
</html>`;

        const codeBox = document.getElementById('profileCodeOutputBox');
        codeBox.style.display = 'block';
        codeBox.textContent = '';
        clearInterval(profileTypeInterval);
        let i = 0;
        profileTypeInterval = setInterval(() => {
            if (i < finalCode.length) {
                codeBox.textContent += finalCode.substring(i, i + 15); i += 15;
                codeBox.scrollTop = codeBox.scrollHeight;
            } else clearInterval(profileTypeInterval);
        }, 5);
    });
}

const profileCodeOutputBox = document.getElementById('profileCodeOutputBox');
if(profileCodeOutputBox){
    profileCodeOutputBox.addEventListener('click', function() {
        if(this.textContent.length > 20) {
            navigator.clipboard.writeText(this.textContent).then(() => {
                notiBox.innerText = translations[currentLang].notiSuccess || "কোড সফলভাবে কপি হয়েছে!";
                notiBox.classList.add('show');
                setTimeout(() => { notiBox.classList.remove('show'); setTimeout(() => notiBox.innerText = translations[currentLang].welcome, 300); }, 2500);
            });
        }
    });
}


// ============================================
// --- টুল ৪: টেবিল জেনারেটর লজিক ---
// ============================================

const openTableToolBtn = document.getElementById('openTableToolBtn');
const backToToolsBtnTable = document.getElementById('backToToolsBtnTable');

if (openTableToolBtn) openTableToolBtn.addEventListener('click', () => switchScreen('tableToolScreen'));
if (backToToolsBtnTable) backToToolsBtnTable.addEventListener('click', () => switchScreen('toolsScreen'));

const tablePlaceholderCols = ["ক্রমিক", "নাম", "পদবী", "স্ট্যাটাস"];
const tablePlaceholderRows = [
    ["১", "আসিফ ইকবাল", "ওয়েব ডেভেলপার", "সক্রিয়"],
    ["২", "রাকিব হাসান", "ডিজাইনার", "পেন্ডিং"]
];

let tableColumns = ["", "", "", ""];
let tableRows = [
    ["", "", "", ""],
    ["", "", "", ""]
];

const tableColContainer = document.getElementById('tableColumnContainer');
const tableRowContainer = document.getElementById('tableRowContainer');

function renderTableColumnsUI() {
    if(!tableColContainer) return;
    tableColContainer.innerHTML = '';
    tableColumns.forEach((col, index) => {
        const phText = currentLang === 'bn' ? (tablePlaceholderCols[index] || `কলাম ${index + 1}`) : `Col ${index + 1}`;
        const div = document.createElement('div');
        div.className = 'dynamic-row';
        div.innerHTML = `
            <input type="text" value="${col}" placeholder="${currentLang==='bn'?'উদাঃ':'e.g.'} ${phText}" data-ttype="col" data-tindex="${index}">
            ${tableColumns.length > 1 ? `<button class="btn-remove" onclick="removeTableColumn(${index})">✖</button>` : ''}
        `;
        tableColContainer.appendChild(div);
    });
    updateTableLivePreview();
}

function renderTableRowsUI() {
    if(!tableRowContainer) return;
    tableRowContainer.innerHTML = '';
    tableRows.forEach((row, rowIndex) => {
        const div = document.createElement('div');
        div.className = 'dynamic-row';
        
        let inputsHTML = '<div class="col-inputs">';
        tableColumns.forEach((col, colIndex) => {
            let val = row[colIndex] || "";
            let phText = (tablePlaceholderRows[rowIndex] && tablePlaceholderRows[rowIndex][colIndex]) ? tablePlaceholderRows[rowIndex][colIndex] : (currentLang === 'bn' ? "ডেটা..." : "Data...");
            inputsHTML += `<input type="text" value="${val}" placeholder="${phText}" data-ttype="cell" data-trow="${rowIndex}" data-tcol="${colIndex}">`;
        });
        inputsHTML += '</div>';

        div.innerHTML = `
            ${inputsHTML}
            ${tableRows.length > 1 ? `<button class="btn-remove" onclick="removeTableRow(${rowIndex})">✖</button>` : ''}
        `;
        tableRowContainer.appendChild(div);
    });
    updateTableLivePreview();
}

const tableAddColBtn = document.getElementById('tableAddColBtn');
if(tableAddColBtn){
    tableAddColBtn.addEventListener('click', () => {
        tableColumns.push("");
        tableRows.forEach(row => row.push(""));
        renderTableColumnsUI(); renderTableRowsUI();
    });
}

window.removeTableColumn = (index) => {
    tableColumns.splice(index, 1);
    tableRows.forEach(row => row.splice(index, 1));
    renderTableColumnsUI(); renderTableRowsUI();
};

const tableAddRowBtn = document.getElementById('tableAddRowBtn');
if(tableAddRowBtn){
    tableAddRowBtn.addEventListener('click', () => {
        tableRows.push(new Array(tableColumns.length).fill(""));
        renderTableRowsUI();
    });
}

window.removeTableRow = (index) => {
    tableRows.splice(index, 1);
    renderTableRowsUI();
};

const tableBuilderForm = document.querySelector('#tableToolScreen .builder-form');
if(tableBuilderForm){
    tableBuilderForm.addEventListener('input', (e) => {
        if(e.target.dataset.ttype === 'col') {
            tableColumns[e.target.dataset.tindex] = e.target.value;
            renderTableRowsUI(); 
        }
        if(e.target.dataset.ttype === 'cell') {
            tableRows[e.target.dataset.trow][e.target.dataset.tcol] = e.target.value;
            updateTableLivePreview();
        }
    });
}

const tableToggleZebra = document.getElementById('tableToggleZebra');
const tableToggleBounce = document.getElementById('tableToggleBounce');
if(tableToggleZebra) tableToggleZebra.addEventListener('change', updateTableLivePreview);
if(tableToggleBounce) tableToggleBounce.addEventListener('change', updateTableLivePreview);

function updateTableLivePreview() {
    const box = document.getElementById('tableLivePreviewBox');
    if(!box) return;

    const isZebra = tableToggleZebra ? tableToggleZebra.checked : true;
    const isBounce = tableToggleBounce ? tableToggleBounce.checked : true;

    let thHTML = '';
    tableColumns.forEach((col, i) => { 
        let defaultColText = currentLang === 'bn' ? `কলাম ${i + 1}` : `Col ${i + 1}`;
        let finalCol = col || tablePlaceholderCols[i] || defaultColText;
        thHTML += `<th>${finalCol}</th>`; 
    });

    let trHTML = '';
    tableRows.forEach((row, rIndex) => {
        trHTML += '<tr>';
        tableColumns.forEach((col, cIndex) => { 
            let finalCell = row[cIndex] || (tablePlaceholderRows[rIndex] && tablePlaceholderRows[rIndex][cIndex]) || "-";
            trHTML += `<td>${finalCell}</td>`; 
        });
        trHTML += '</tr>';
    });

    const tableClasses = `gen-table ${isZebra ? 'zebra' : ''} ${isBounce ? 'bounce' : ''}`;
    box.innerHTML = `
        <div class="gen-table-wrap">
            <table class="${tableClasses}">
                <thead><tr>${thHTML}</tr></thead>
                <tbody>${trHTML}</tbody>
            </table>
        </div>
    `;
}

// Initial render
renderTableColumnsUI(); 
renderTableRowsUI();

// Update language dynamically for placeholders
langEnBtn.addEventListener('click', () => { renderTableColumnsUI(); renderTableRowsUI(); });
langBnBtn.addEventListener('click', () => { renderTableColumnsUI(); renderTableRowsUI(); });

let tableTypeInterval;
const tableGenerateBtn = document.getElementById('tableGenerateBtn');
if(tableGenerateBtn){
    tableGenerateBtn.addEventListener('click', () => {
        const isZebra = tableToggleZebra.checked;
        const isBounce = tableToggleBounce.checked;

        let thHTML = '';
        tableColumns.forEach((col, i) => { 
            let finalCol = col || tablePlaceholderCols[i] || `Col ${i + 1}`;
            thHTML += `\n                    <th>${finalCol}</th>`; 
        });

        let trHTML = '';
        tableRows.forEach((row, rIndex) => {
            trHTML += `\n                <tr>`;
            tableColumns.forEach((col, cIndex) => { 
                let finalCell = row[cIndex] || (tablePlaceholderRows[rIndex] && tablePlaceholderRows[rIndex][cIndex]) || "-";
                trHTML += `\n                    <td>${finalCell}</td>`; 
            });
            trHTML += `\n                </tr>`;
        });

        const cssZebra = isZebra ? `\n        .theme-table.zebra tbody tr:nth-child(even) { background-color: var(--tbl-zebra); }` : ``;
        const cssBounce = isBounce ? `\n        .theme-table.bounce tbody td { transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1); position: relative; }
        .theme-table.bounce tbody td:active { transform: translateY(-3px) scale(0.98); box-shadow: 0 5px 10px rgba(0,0,0,0.2); z-index: 10; border-color: transparent; background-color: var(--tbl-active); }` : ``;

        const finalCode = `<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Theme Table</title>
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --tbl-bg: #ffffff;
            --tbl-text: #333333;
            --tbl-border: #e0e0e0;
            --tbl-head-bg: #f4f7f6;
            --tbl-head-text: #1a1a1a;
            --tbl-hover: rgba(0, 0, 0, 0.03);
            --tbl-zebra: rgba(0, 0, 0, 0.04);
            --tbl-active: rgba(41, 253, 83, 0.1);
        }
        @media (prefers-color-scheme: dark) {
            :root {
                --tbl-bg: #223243;
                --tbl-text: #ffffff;
                --tbl-border: rgba(255, 255, 255, 0.15);
                --tbl-head-bg: rgba(0, 0, 0, 0.3);
                --tbl-head-text: #29fd53;
                --tbl-hover: rgba(255, 255, 255, 0.05);
                --tbl-zebra: rgba(0, 0, 0, 0.15);
                --tbl-active: rgba(41, 253, 83, 0.25);
            }
        }
        [data-theme="dark"] {
            --tbl-bg: #223243;
            --tbl-text: #ffffff;
            --tbl-border: rgba(255, 255, 255, 0.15);
            --tbl-head-bg: rgba(0, 0, 0, 0.3);
            --tbl-head-text: #29fd53;
            --tbl-hover: rgba(255, 255, 255, 0.05);
            --tbl-zebra: rgba(0, 0, 0, 0.15);
            --tbl-active: rgba(41, 253, 83, 0.25);
        }

        body { font-family: 'Hind Siliguri', sans-serif; background-color: var(--tbl-bg); padding: 20px; transition: 0.3s; }
        
        .table-wrap { overflow-x: auto; background: var(--tbl-bg); border: 1px solid var(--tbl-border); border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); padding-bottom: 5px; }
        .theme-table { width: 100%; border-collapse: collapse; text-align: left; white-space: nowrap; font-size: 15px; color: var(--tbl-text); }
        .theme-table th, .theme-table td { border: 1px solid var(--tbl-border); padding: 12px 16px; }
        .theme-table th { background-color: var(--tbl-head-bg); color: var(--tbl-head-text); font-weight: 600; text-transform: uppercase; font-size: 14px; }
        
        .theme-table tbody tr:hover { background-color: var(--tbl-hover); }${cssZebra}${cssBounce}
    </style>
</head>
<body>
    <div class="table-wrap">
        <table class="theme-table ${isZebra ? 'zebra' : ''} ${isBounce ? 'bounce' : ''}">
            <thead>
                <tr>${thHTML}
                </tr>
            </thead>
            <tbody>${trHTML}
            </tbody>
        </table>
    </div>
</body>
</html>`;

        const codeBox = document.getElementById('tableCodeOutputBox');
        codeBox.style.display = 'block';
        codeBox.textContent = ''; 
        clearInterval(tableTypeInterval);
        
        let i = 0;
        tableTypeInterval = setInterval(() => {
            if (i < finalCode.length) {
                codeBox.textContent += finalCode.substring(i, i + 15); 
                i += 15;
                codeBox.scrollTop = codeBox.scrollHeight; 
            } else {
                clearInterval(tableTypeInterval); 
            }
        }, 5); 
    });
}

const tableCodeOutputBox = document.getElementById('tableCodeOutputBox');
if(tableCodeOutputBox){
    tableCodeOutputBox.addEventListener('click', function() {
        if(this.textContent.length > 20) {
            navigator.clipboard.writeText(this.textContent).then(() => {
                notiBox.innerText = translations[currentLang].notiSuccess || "কোড সফলভাবে কপি হয়েছে!";
                notiBox.classList.add('show');
                setTimeout(() => { notiBox.classList.remove('show'); setTimeout(() => notiBox.innerText = translations[currentLang].welcome, 300); }, 2500);
            });
        }
    });
}
