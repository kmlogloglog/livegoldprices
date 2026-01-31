/* Cookie Consent Banner — goldchartlive.com */
(function() {
  if (localStorage.getItem('cookie-consent')) return;

  var overlay = document.createElement('div');
  overlay.id = 'cookie-overlay';
  overlay.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:10000;background:rgba(10,10,10,0.97);border-top:1px solid rgba(255,215,0,0.15);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);padding:16px 20px;display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;font-family:Inter,system-ui,sans-serif;animation:slideUp 0.4s ease';

  overlay.innerHTML = 
    '<div style="flex:1;min-width:240px;max-width:600px">' +
      '<div style="font-size:13px;font-weight:600;color:#f0f0f0;margin-bottom:4px">🍪 We use cookies</div>' +
      '<div style="font-size:12px;color:#888;line-height:1.5">We use cookies and similar technologies for analytics (Microsoft Clarity) and advertising (Google AdSense). By clicking "Accept", you consent to our use of cookies. See our <a href="/privacy.html" style="color:#FFD700;text-decoration:none;border-bottom:1px solid rgba(255,215,0,0.3)">Privacy Policy</a>.</div>' +
    '</div>' +
    '<div style="display:flex;gap:8px;flex-shrink:0">' +
      '<button id="cookie-reject" style="padding:8px 18px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;background:rgba(255,255,255,0.05);color:#888;border:1px solid rgba(255,255,255,0.1);transition:all 0.2s">Reject</button>' +
      '<button id="cookie-accept" style="padding:8px 22px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;background:linear-gradient(135deg,#FFD700,#B8960C);color:#0a0a0a;border:none;transition:all 0.2s;letter-spacing:0.5px">Accept</button>' +
    '</div>';

  var style = document.createElement('style');
  style.textContent = '@keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}#cookie-accept:hover{transform:translateY(-1px);box-shadow:0 4px 15px rgba(255,215,0,0.3)}#cookie-reject:hover{color:#f0f0f0;border-color:rgba(255,255,255,0.2)}';
  document.head.appendChild(style);
  document.body.appendChild(overlay);

  document.getElementById('cookie-accept').onclick = function() {
    localStorage.setItem('cookie-consent', 'accepted');
    overlay.style.animation = 'slideUp 0.3s ease reverse forwards';
    setTimeout(function() { overlay.remove(); }, 300);
    loadTracking();
  };

  document.getElementById('cookie-reject').onclick = function() {
    localStorage.setItem('cookie-consent', 'rejected');
    overlay.style.animation = 'slideUp 0.3s ease reverse forwards';
    setTimeout(function() { overlay.remove(); }, 300);
  };

  function loadTracking() {
    // Load Google AdSense
    if (!document.querySelector('script[src*="adsbygoogle"]')) {
      var s = document.createElement('script');
      s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6679038655008304';
      s.crossOrigin = 'anonymous';
      s.async = true;
      document.head.appendChild(s);
    }
    // Load Clarity
    if (window._clarityId) {
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window,document,"clarity","script",window._clarityId);
    }
  }

  // If previously accepted, load tracking immediately
  if (localStorage.getItem('cookie-consent') === 'accepted') {
    loadTracking();
  }
})();
