const CONTACT = {
  telegram: 'your_telegram_id',   // بدون @
  whatsapp: '989120000000'        // بدون صفر اول و بدون +
};

function injectDemoBar(name, priceText) {
  const msg = 'سلام 👋 می‌خوام این نمونه سایت رو سفارش بدم: «' + name + '»' + (priceText ? ' با قیمت ' + priceText : '');
  const st = document.createElement('style');
  st.textContent = '#demoBar{position:sticky;top:0;z-index:1000;height:46px;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 16px;background:#111827;color:#fff;font:14px Vazirmatn,Tahoma,sans-serif;direction:rtl}#demoBar a{color:#fff;background:rgba(255,255,255,.15);padding:4px 12px;border-radius:8px;margin-right:6px;text-decoration:none;white-space:nowrap}#demoBar a.go{background:#22c55e}#demoBar .n{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}';
  document.head.appendChild(st);
  const bar = document.createElement('div');
  bar.id = 'demoBar';
  bar.innerHTML = '<span class="n">👀 پیش‌نمایش نمونه: <b>' + name + '</b></span><span><a href="javascript:history.back()">← بازگشت</a><a class="go" target="_blank" rel="noopener" href="https://t.me/' + CONTACT.telegram + '?text=' + encodeURIComponent(msg) + '">✈️ سفارش این سایت</a><a class="go" target="_blank" rel="noopener" href="https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(msg) + '">💬</a></span>';
  document.body.prepend(bar);
}
