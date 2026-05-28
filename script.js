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
        "generated_code": "জেনারেটেড কোড (কপি করতে ক্লিক করুন)"
        
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
        "generated_code": "Generated Code (Click to copy)"
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
            setTimeout(() => { notiBox.classList.remove('show'); setTimeout(() => notiBox.innerText = translations[currentLang].welcome, 300); }, 2500);
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
