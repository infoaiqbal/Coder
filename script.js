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
        "welcome": "এই অ্যাপে আপনকে স্বাগতম", "canvas": "এখানে ডিজাইন তৈরি করুন...", "editor": "এডিটর", "tools": "টুলস", "menu": "মেনু", "settingsTitle": "মেনু", "tSettings": "সেটিংস", "tColor": "ক) থিম কালার", "tLang": "খ) ভাষা", "tFont": "গ) ফন্ট", "fontHindText": "হিন্দ শিলিগুড়ি", "fontKalText": "কালপুরুষ", "tAppStore": "অ্যাপ স্টোর", "tAbout": "সম্পর্কে", "aName": "আসিফ ইকবাল", "aDesc": "এই অ্যাপটির স্বত্বাধিকারী এবং নির্মাতা।", "aClose": "বন্ধ করুন", "toolsListTitle": "সব টুলস", "toolsListDesc": "আপনার প্রোজেক্টের জন্য প্রয়োজনীয় টুল নির্বাচন করুন", "tSliderName": "ইমেজ স্লাইডার", "tSliderDesc": "রেসপন্সিভ এবং সোয়াইপ সাপোর্টেড স্লাইডার বানান।", "backBtn": "ফিরে যান", "tSliderTitle": "ইমেজ স্লাইডার টুল", "tPhotoSize": "ফটো সাইজ *", "tTotalPhotos": "মোট ফটো * (ক্লিক করুন)", "tDotAlign": "ডট এলাইন *", "tSlideSpeed": "স্লাইড স্পীড লেভেল *", "tLivePreview": "লাইভ প্রিভিউ", "tGenerateCode": "✨ জেনারেট কোড", "szSquare": "১:১ (Square)", "szStandard": "১৬:৯ (Standard)", "szCinema": "১৯:৯ (Cinematic)", "szBanner": "৩:১ (Banner)", "szCustom": "২৬৫:১৪৯ (Custom)", "num2": "২", "num3": "৩", "num4": "৪", "num5": "৫", "num6": "৬", "tLeft": "বাম", "tCenter": "মধ্য", "tRight": "ডান", "tPreviewPlaceholder": "ফটো সিলেক্ট করে কাজ শুরু করুন...", "notiSuccess": "কোড সফলভাবে কপি হয়েছে!", "alertError": "অনুগ্রহ করে সবগুলো 'ফটো লিঙ্ক *' পূরণ করুন।"
    },
    "en": { 
        "welcome": "Welcome to this app", "canvas": "Create your design here...", "editor": "Editor", "tools": "Tools", "menu": "Menu", "settingsTitle": "Menu", "tSettings": "Settings", "tColor": "a) Theme Color", "tLang": "b) Language", "tFont": "c) Font", "fontHindText": "Hind Siliguri", "fontKalText": "Kalpurush", "tAppStore": "App Store", "tAbout": "About", "aName": "Asif Iqbal", "aDesc": "Owner and creator of this app.", "aClose": "Close", "toolsListTitle": "All Tools", "toolsListDesc": "Select the required tool for your project", "tSliderName": "Image Slider", "tSliderDesc": "Create responsive swipe-supported sliders.", "backBtn": "Go Back", "tSliderTitle": "Image Slider Tool", "tPhotoSize": "Photo Size *", "tTotalPhotos": "Total Photos * (Click)", "tDotAlign": "Dot Align *", "tSlideSpeed": "Slide Speed Level *", "tLivePreview": "Live Preview", "tGenerateCode": "✨ Generate Code", "szSquare": "1:1 (Square)", "szStandard": "16:9 (Standard)", "szCinema": "19:9 (Cinematic)", "szBanner": "3:1 (Banner)", "szCustom": "265:149 (Custom)", "num2": "2", "num3": "3", "num4": "4", "num5": "5", "num6": "6", "tLeft": "Left", "tCenter": "Center", "tRight": "Right", "tPreviewPlaceholder": "Select photos to start...", "notiSuccess": "Code copied successfully!", "alertError": "Please fill in all 'Photo Link *' fields."
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