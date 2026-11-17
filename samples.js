// ===== اطلاعات تماس خودت رو اینجا بنویس =====
const TELEGRAM_ID = 'your_telegram_id';   // بدون @   مثلا: ali_web
const WHATSAPP_NUM = '989120000000';      // بدون صفر اول و بدون +

// ===== قیمت پایه هر دسته (تومان) =====
const PRICES = {
  business: 2500000,
  company: 3500000,
  personal: 900000,
  food: 2000000,
  education: 3000000,
  service: 2200000
};

// ===== دیتای نمونه‌ها =====
const DATA = {
  business: {
    title: 'تجاری', icon: '🛍️',
    subs: {
      clothing: { title: 'لباس', icon: '👕', items: ['فروشگاه لباس مردانه', 'بوتیک زنانه', 'پوشاک بچگانه', 'لباس ورزشی', 'مزون لباس عروس', 'فروشگاه کفش', 'لباس زمستانی', 'پوشاک اسپرت'] },
      gold: { title: 'طلا و جواهر', icon: '💍', items: ['طلافروشی کلاسیک', 'گالری جواهر', 'حلقه و نامزدی', 'سکه و شمش', 'نقره‌فروشی', 'ساعت لوکس'] },
      accessory: { title: 'اکسسوری', icon: '👜', items: ['کیف و کفش', 'عینک آفتابی', 'شال و روسری', 'بدلیجات', 'کمربند و کیف پول', 'کلاه و دستکش'] },
      digital: { title: 'لوازم دیجیتال', icon: '📱', items: ['فروشگاه موبایل', 'لپ‌تاپ و کامپیوتر', 'لوازم جانبی', 'هدفون و اسپیکر', 'کنسول بازی', 'دوربین و فیلمبرداری'] },
      beauty: { title: 'آرایشی بهداشتی', icon: '💄', items: ['فروشگاه لوازم آرایش', 'عطر و ادکلن', 'مراقبت پوست', 'محصولات مو', 'برند طبیعی و ارگانیک', 'لوازم آرایشگاه'] },
      home: { title: 'لوازم خانه', icon: '🛋️', items: ['مبلمان و دکوراسیون', 'لوازم آشپزخانه', 'فرش و موکت', 'لوستر و روشنایی', 'گل و گیاه', 'لوازم برقی'] }
    }
  },
  company: {
    title: 'شرکتی', icon: '🏢',
    subs: {
      tech: { title: 'فناوری', icon: '💻', items: ['شرکت نرم‌افزاری', 'استارتاپ', 'هوش مصنوعی', 'شرکت شبکه', 'امنیت سایبری', 'اپلیکیشن موبایل'] },
      construction: { title: 'ساختمان', icon: '🏗️', items: ['شرکت عمرانی', 'معماری و طراحی', 'املاک و مشاور', 'دکوراسیون داخلی', 'مصالح ساختمانی', 'پیمانکاری'] },
      consulting: { title: 'مشاوره', icon: '📊', items: ['مشاوره مدیریت', 'مشاوره مالی', 'برندسازی', 'منابع انسانی', 'حسابداری', 'بازاریابی'] },
      legal: { title: 'حقوقی', icon: '⚖️', items: ['دفتر وکالت', 'مشاوره حقوقی', 'ثبت شرکت', 'اسناد رسمی', 'داوری و میانجی‌گری', 'حقوق مالکیت'] },
      industry: { title: 'صنعتی', icon: '🏭', items: ['کارخانه تولیدی', 'صادرات و واردات', 'لجستیک و حمل', 'کشاورزی', 'انرژی و نفت', 'قطعات صنعتی'] }
    }
  },
  personal: {
    title: 'شخصی', icon: '👤',
    subs: {
      resume: { title: 'رزومه', icon: '📄', items: ['رزومه برنامه‌نویس', 'رزومه طراح', 'رزومه مدیر', 'رزومه دانشجو', 'رزومه مینیمال', 'رزومه خلاق'] },
      portfolio: { title: 'پورتفولیو', icon: '🖼️', items: ['نمونه‌کار عکاس', 'نمونه‌کار طراح گرافیک', 'نمونه‌کار معمار', 'نمونه‌کار ویدیو', 'نمونه‌کار برنامه‌نویس', 'نمونه‌کار تصویرساز'] },
      blog: { title: 'وبلاگ', icon: '✍️', items: ['وبلاگ شخصی', 'وبلاگ سفر', 'وبلاگ آشپزی', 'وبلاگ فناوری', 'مجله آنلاین', 'وبلاگ ورزشی'] },
      wedding: { title: 'مراسم', icon: '💒', items: ['دعوت‌نامه عروسی', 'تولد', 'سالگرد ازدواج', 'یادبود', 'جشن فارغ‌التحصیلی', 'مهمانی'] }
    }
  },
  food: {
    title: 'رستوران و کافه', icon: '🍽️',
    subs: {
      restaurant: { title: 'رستوران', icon: '🍛', items: ['رستوران سنتی', 'رستوران ایتالیایی', 'کبابی', 'دریایی', 'رستوران لوکس', 'غذای سالم'] },
      cafe: { title: 'کافه', icon: '☕', items: ['کافه مدرن', 'کافه کتاب', 'کافه شبانه', 'قهوه تخصصی', 'چایخانه', 'بستنی و آبمیوه'] },
      fastfood: { title: 'فست‌فود', icon: '🍔', items: ['همبرگری', 'پیتزا', 'ساندویچی', 'مرغ سوخاری', 'سفارش آنلاین غذا', 'فودتراک'] },
      bakery: { title: 'شیرینی و نان', icon: '🧁', items: ['قنادی', 'نانوایی', 'کیک سفارشی', 'شکلات‌فروشی', 'آجیل و خشکبار', 'شیرینی سنتی'] }
    }
  },
  education: {
    title: 'آموزشی', icon: '🎓',
    subs: {
      school: { title: 'مدرسه', icon: '🏫', items: ['مدرسه ابتدایی', 'دبیرستان', 'مهد کودک', 'مدرسه بین‌المللی', 'آموزشگاه زبان', 'هنرستان'] },
      course: { title: 'دوره آنلاین', icon: '🖥️', items: ['پلتفرم آموزشی', 'دوره برنامه‌نویسی', 'آموزش زبان', 'دوره طراحی', 'کلاس موسیقی', 'مدرس خصوصی'] },
      university: { title: 'دانشگاه', icon: '🏛️', items: ['سایت دانشگاه', 'کتابخانه دیجیتال', 'مرکز پژوهشی', 'انجمن علمی', 'همایش و کنفرانس', 'مجله علمی'] }
    }
  },
  service: {
    title: 'خدماتی', icon: '🛠️',
    subs: {
      medical: { title: 'پزشکی', icon: '🩺', items: ['مطب پزشک', 'کلینیک دندان‌پزشکی', 'داروخانه', 'آزمایشگاه', 'کلینیک زیبایی', 'روانشناس'] },
      beauty: { title: 'آرایشگاه و زیبایی', icon: '💇', items: ['آرایشگاه مردانه', 'سالن زنانه', 'ناخن و مژه', 'اسپا و ماساژ', 'میکاپ عروس', 'تتو و پیرسینگ'] },
      gym: { title: 'ورزشی', icon: '🏋️', items: ['باشگاه بدنسازی', 'استخر', 'یوگا و پیلاتس', 'مربی شخصی', 'باشگاه رزمی', 'فروشگاه مکمل'] },
      travel: { title: 'گردشگری', icon: '✈️', items: ['آژانس مسافرتی', 'هتل', 'اقامتگاه بوم‌گردی', 'تور داخلی', 'اجاره خودرو', 'راهنمای سفر'] },
      car: { title: 'خودرو', icon: '🚗', items: ['نمایشگاه ماشین', 'تعمیرگاه', 'کارواش', 'لوازم یدکی', 'آموزشگاه رانندگی', 'تاکسی آنلاین'] }
    }
  }
};

const state = { cat: 'business', sub: 'all', q: '' };

const mainTabs = document.getElementById('mainTabs');
const subChips = document.getElementById('subChips');
const grid = document.getElementById('grid');
const count = document.getElementById('count');
const search = document.getElementById('search');

// اگر آدرس مثل samples.html#company بود، همون دسته باز میشه
const hash = location.hash.slice(1);
if (DATA[hash]) state.cat = hash;

function fmt(n) { return n.toLocaleString('fa-IR') + ' تومان'; }

function renderTabs() {
  mainTabs.innerHTML = '';
  Object.entries(DATA).forEach(([key, c]) => {
    const b = document.createElement('button');
    b.className = 'tab' + (state.cat === key ? ' active' : '');
    b.textContent = `${c.icon} ${c.title}`;
    b.onclick = () => { state.cat = key; state.sub = 'all'; location.hash = key; render(); };
    mainTabs.appendChild(b);
  });
}

function renderChips() {
  subChips.innerHTML = '';
  const subs = DATA[state.cat].subs;
  const all = document.createElement('button');
  all.className = 'chip' + (state.sub === 'all' ? ' active' : '');
  all.textContent = 'همه';
  all.onclick = () => { state.sub = 'all'; render(); };
  subChips.appendChild(all);
  Object.entries(subs).forEach(([key, s]) => {
    const b = document.createElement('button');
    b.className = 'chip' + (state.sub === key ? ' active' : '');
    b.textContent = `${s.icon} ${s.title}`;
    b.onclick = () => { state.sub = key; render(); };
    subChips.appendChild(b);
  });
}

// سایت‌های کامل که ساخته شدن (بقیه فعلاً از preview.html استفاده می‌کنن)
const READY = {
  business: {
    clothing: 'shop.html?k=clothing', gold: 'shop.html?k=gold', accessory: 'shop.html?k=accessory',
    digital: 'shop.html?k=digital', beauty: 'shop.html?k=beauty', home: 'shop.html?k=home'
  },
  food: {
    restaurant: 'restaurant.html?k=restaurant', cafe: 'restaurant.html?k=cafe',
    fastfood: 'restaurant.html?k=fastfood', bakery: 'restaurant.html?k=bakery'
  }
};

function renderGrid() {
  const subs = DATA[state.cat].subs;
  let list = [];
  Object.entries(subs).forEach(([key, s]) => {
    if (state.sub !== 'all' && state.sub !== key) return;
    s.items.forEach((name, i) => list.push({ name, sub: s, key, i }));
  });
  if (state.q) list = list.filter(x => x.name.includes(state.q) || x.sub.title.includes(state.q));

  count.textContent = `${list.length} نمونه پیدا شد`;
  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML = '<p class="empty">نمونه‌ای پیدا نشد 😕</p>';
    return;
  }

  list.forEach((x, n) => {
    const hue = (n * 47 + 200) % 360;
    const price = PRICES[state.cat] || 2000000;
    const ready = READY[state.cat] && READY[state.cat][x.key];

    let url;
    if (ready) {
      url = ready + '&' + new URLSearchParams({ n: x.name, h: hue, p: price }).toString();
    } else {
      url = 'preview.html?' + new URLSearchParams({
        n: x.name, i: x.sub.icon, s: x.sub.title,
        c: DATA[state.cat].title, p: price, h: hue, t: x.i + 1
      }).toString();
    }

    const card = document.createElement('div');
    card.className = 'sample';
    card.style.animationDelay = `${Math.min(n * 30, 400)}ms`;
    card.innerHTML = `
      <div class="thumb" style="background:linear-gradient(135deg,hsl(${hue} 75% 55%),hsl(${(hue + 40) % 360} 75% 45%))">${x.sub.icon}</div>
      <div class="info">
        <h4>${x.name}</h4>
        <small>${x.sub.title}</small>
        <div class="price">${fmt(price)}</div>
        <div class="row">
          <span class="tag">${ready ? '✅ سایت کامل' : 'طرح ' + (x.i + 1)}</span>
          <div class="btns">
            <a class="btn btn-ghost view-btn">مشاهده</a>
            <button class="btn order-btn">سفارش</button>
          </div>
        </div>
      </div>`;

    card.querySelector('.view-btn').href = url;
    card.querySelector('.thumb').style.cursor = 'pointer';
    card.querySelector('.thumb').onclick = () => { location.href = url; };
    card.querySelector('.order-btn').onclick = () => openModal(x.name, price);
    grid.appendChild(card);
  });
}

function render() { renderTabs(); renderChips(); renderGrid(); }

search.addEventListener('input', (e) => { state.q = e.target.value.trim(); renderGrid(); });

// ===== پنجره سفارش =====
const modal = document.getElementById('modal');
const mName = document.getElementById('mName');
let current = { name: '', price: 0 };

function buildMsg() {
  const who = mName.value.trim() ? `من ${mName.value.trim()} هستم. ` : '';
  const text = `سلام 👋 ${who}می‌خوام این نمونه سایت رو سفارش بدم: «${current.name}» با قیمت ${fmt(current.price)}`;
  document.getElementById('mTelegram').href = `https://t.me/${TELEGRAM_ID}?text=${encodeURIComponent(text)}`;
  document.getElementById('mWhatsapp').href = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`;
}

function openModal(name, price) {
  current = { name, price };
  document.getElementById('mTitle').textContent = name;
  document.getElementById('mPrice').textContent = fmt(price);
  mName.value = '';
  buildMsg();
  modal.classList.add('open');
}

mName.addEventListener('input', buildMsg);
document.getElementById('modalClose').onclick = () => modal.classList.remove('open');
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('open'); });

render();
