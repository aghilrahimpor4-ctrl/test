// ===== اطلاعات تماس خودت رو اینجا بنویس =====
const TELEGRAM_ID = 'your_telegram_id';   // بدون @
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

// ===== سایت‌های کامل که ساخته شدن (بقیه از preview.html استفاده می‌کنن) =====
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

// ===== دیتای نمونه‌ها =====
const DATA = {
  business: {
    title: 'تجاری', icon: '🛍️',
    subs: {
      clothing: { title: 'فروشگاه لباس', icon: '👕', items: ['فروشگاه لباس مردانه', 'بوتیک زنانه', 'پوشاک بچگانه', 'لباس ورزشی', 'مزون لباس عروس', 'فروشگاه کفش'] },
      gold: { title: 'طلا و جواهر', icon: '💍', items: ['طلافروشی کلاسیک', 'گالری جواهر', 'حلقه و نامزدی', 'سکه و شمش', 'نقره‌فروشی', 'ساعت لوکس'] },
      accessory: { title: 'اکسسوری', icon: '👜', items: ['کیف و کفش', 'عینک آفتابی', 'شال و روسری', 'بدلیجات', 'کمربند و کیف پول', 'کلاه و دستکش'] },
      digital: { title: 'لوازم دیجیتال', icon: '📱', items: ['فروشگاه موبایل', 'لپ‌تاپ و کامپیوتر', 'لوازم جانبی', 'هدفون و اسپیکر', 'کنسول بازی', 'دوربین'] },
      beauty: { title: 'آرایشی بهداشتی', icon: '💄', items: ['لوازم آرایش', 'عطر و ادکلن', 'مراقبت پوست', 'محصولات مو', 'برند ارگانیک', 'لوازم آرایشگاه'] },
      home: { title: 'لوازم خانه', icon: '🛋️', items: ['مبلمان و دکوراسیون', 'لوازم آشپزخانه', 'فرش و موکت', 'لوستر و روشنایی', 'گل و گیاه', 'لوازم برقی'] }
    }
  },
  company: {
    title: 'شرکتی', icon: '🏢',
    subs: {
      tech: { title: 'شرکت فناوری', icon: '💻', items: ['شرکت نرم‌افزاری', 'استارتاپ', 'هوش مصنوعی', 'شرکت شبکه', 'امنیت سایبری', 'اپلیکیشن موبایل'] },
      construction: { title: 'ساختمان و املاک', icon: '🏗️', items: ['شرکت عمرانی', 'معماری و طراحی', 'املاک و مشاور', 'دکوراسیون داخلی', 'مصالح ساختمانی', 'پیمانکاری'] },
      consulting: { title: 'مشاوره و مالی', icon: '📊', items: ['مشاوره مدیریت', 'مشاوره مالی', 'برندسازی', 'منابع انسانی', 'حسابداری', 'بازاریابی'] },
      legal: { title: 'حقوقی', icon: '⚖️', items: ['دفتر وکالت', 'مشاوره حقوقی', 'ثبت شرکت', 'اسناد رسمی', 'داوری', 'حقوق مالکیت'] },
      industry: { title: 'صنعتی و تولیدی', icon: '🏭', items: ['کارخانه تولیدی', 'صادرات و واردات', 'لجستیک و حمل', 'کشاورزی', 'انرژی', 'قطعات صنعتی'] }
    }
  },
  personal: {
    title: 'شخصی', icon: '👤',
    subs: {
      resume: { title: 'رزومه', icon: '📄', items: ['رزومه برنامه‌نویس', 'رزومه طراح', 'رزومه مدیر', 'رزومه دانشجو', 'رزومه مینیمال', 'رزومه خلاق'] },
      portfolio: { title: 'نمونه‌کار', icon: '🖼️', items: ['عکاس', 'طراح گرافیک', 'معمار', 'ویدیو', 'برنامه‌نویس', 'تصویرساز'] },
      blog: { title: 'وبلاگ', icon: '✍️', items: ['وبلاگ شخصی', 'وبلاگ سفر', 'وبلاگ آشپزی', 'وبلاگ فناوری', 'مجله آنلاین', 'وبلاگ ورزشی'] },
      wedding: { title: 'مراسم و دعوت‌نامه', icon: '💒', items: ['عروسی', 'تولد', 'سالگرد ازدواج', 'یادبود', 'فارغ‌التحصیلی', 'مهمانی'] }
    }
  },
  food: {
    title: 'رستوران و کافه', icon: '🍽️',
    subs: {
      restaurant: { title: 'رستوران', icon: '🍛', items: ['رستوران سنتی', 'رستوران ایتالیایی', 'کبابی', 'دریایی', 'رستوران لوکس', 'غذای سالم'] },
      cafe: { title: 'کافه', icon: '☕', items: ['کافه مدرن', 'کافه کتاب', 'کافه شبانه', 'قهوه تخصصی', 'چایخانه', 'بستنی و آبمیوه'] },
      fastfood: { title: 'فست‌فود', icon: '🍔', items: ['همبرگری', 'پیتزا', 'ساندویچی', 'مرغ سوخاری', 'سفارش آنلاین غذا', 'فودتراک'] },
      bakery: { title: 'قنادی و نانوایی', icon: '🧁', items: ['قنادی', 'نانوایی', 'کیک سفارشی', 'شکلات‌فروشی', 'آجیل و خشکبار', 'شیرینی سنتی'] }
    }
  },
  education: {
    title: 'آموزشی', icon: '🎓',
    subs: {
      school: { title: 'مدرسه و آموزشگاه', icon: '🏫', items: ['مدرسه ابتدایی', 'دبیرستان', 'مهد کودک', 'مدرسه بین‌المللی', 'آموزشگاه زبان', 'هنرستان'] },
      course: { title: 'دوره آنلاین', icon: '🖥️', items: ['پلتفرم آموزشی', 'دوره برنامه‌نویسی', 'آموزش زبان', 'دوره طراحی', 'کلاس موسیقی', 'مدرس خصوصی'] },
      university: { title: 'دانشگاه و پژوهش', icon: '🏛️', items: ['سایت دانشگاه', 'کتابخانه دیجیتال', 'مرکز پژوهشی', 'انجمن علمی', 'همایش', 'مجله علمی'] }
    }
  },
  service: {
    title: 'خدماتی', icon: '🛠️',
    subs: {
      medical: { title: 'پزشکی و درمان', icon: '🩺', items: ['مطب پزشک', 'دندان‌پزشکی', 'داروخانه', 'آزمایشگاه', 'کلینیک زیبایی', 'روانشناس'] },
      beauty: { title: 'آرایشگاه و زیبایی', icon: '💇', items: ['آرایشگاه مردانه', 'سالن زنانه', 'ناخن و مژه', 'اسپا و ماساژ', 'میکاپ عروس', 'تتو'] },
      gym: { title: 'باشگاه ورزشی', icon: '🏋️', items: ['بدنسازی', 'استخر', 'یوگا و پیلاتس', 'مربی شخصی', 'باشگاه رزمی', 'فروشگاه مکمل'] },
      travel: { title: 'گردشگری', icon: '✈️', items: ['آژانس مسافرتی', 'هتل', 'اقامتگاه بوم‌گردی', 'تور داخلی', 'اجاره خودرو', 'راهنمای سفر'] },
      car: { title: 'خودرو', icon: '🚗', items: ['نمایشگاه ماشین', 'تعمیرگاه', 'کارواش', 'لوازم یدکی', 'آموزشگاه رانندگی', 'تاکسی آنلاین'] }
    }
  }
};

const state = { cat: 'business', q: '' };

const mainTabs = document.getElementById('mainTabs');
const subChips = document.getElementById('subChips');
const grid = document.getElementById('grid');
const count = document.getElementById('count');
const search = document.getElementById('search');

subChips.style.display = 'none';

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
    b.onclick = () => { state.cat = key; location.hash = key; render(); };
    mainTabs.appendChild(b);
  });
}

function renderGrid() {
  const subs = DATA[state.cat].subs;
  let list = Object.entries(subs).map(([key, s]) => ({ key, s }));

  if (state.q) {
    list = list.filter(x => x.s.title.includes(state.q) || x.s.items.some(it => it.includes(state.q)));
  }

  count.textContent = `${list.length} گروه نمونه`;
  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML = '<p class="empty">نمونه‌ای پیدا نشد 😕</p>';
    return;
  }

  list.forEach(({ key, s }, n) => {
    const hue = (n * 61 + 210) % 360;
    const price = PRICES[state.cat] || 2000000;
    const brand = s.items[0];
    const ready = READY[state.cat] && READY[state.cat][key];

    let url;
    if (ready) {
      url = ready + '&' + new URLSearchParams({ n: brand, h: hue, p: price }).toString();
    } else {
      url = 'preview.html?' + new URLSearchParams({
        n: brand, i: s.icon, s: s.title,
        c: DATA[state.cat].title, p: price, h: hue, t: n + 1
      }).toString();
    }

    const shown = s.items.slice(0, 4).join(' · ');
    const rest = s.items.length > 4 ? ` و ${(s.items.length - 4).toLocaleString('fa-IR')} مورد دیگر` : '';

    const card = document.createElement('div');
    card.className = 'sample';
    card.style.animationDelay = `${Math.min(n * 50, 400)}ms`;
    card.innerHTML = `
      <div class="thumb" style="background:linear-gradient(135deg,hsl(${hue} 75% 55%),hsl(${(hue + 40) % 360} 75% 45%))">${s.icon}</div>
      <div class="info">
        <h4>${s.title}</h4>
        <p class="uses">مناسب برای: ${shown}${rest}</p>
        <div class="price">از ${fmt(price)}</div>
        <div class="row">
          <span class="tag">${ready ? '✅ سایت کامل' : 'پیش‌نمایش'}</span>
          <div class="btns">
            <a class="btn btn-ghost view-btn">مشاهده</a>
            <button class="btn order-btn">سفارش</button>
          </div>
        </div>
      </div>`;

    card.querySelector('.view-btn').href = url;
    card.querySelector('.thumb').style.cursor = 'pointer';
    card.querySelector('.thumb').onclick = () => { location.href = url; };
    card.querySelector('.order-btn').onclick = () => openModal('سایت ' + s.title, price);
    grid.appendChild(card);
  });
}

function render() { renderTabs(); renderGrid(); }

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
