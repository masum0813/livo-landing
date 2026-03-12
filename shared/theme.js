// Theme switcher: persists in localStorage and honors prefers-color-scheme
(function(){
  const KEY = 'theme';
  const doc = document.documentElement;

  function apply(theme){
    doc.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    updateButtons(theme);
  }

  function updateButtons(theme){
    document.querySelectorAll('.theme-toggle').forEach(btn=>{
      btn.textContent = theme === 'light' ? '🌞' : '🌙';
      btn.setAttribute('aria-pressed', theme === 'light');
    });
  }

  function init(){
    let stored = null;
    try{ stored = localStorage.getItem(KEY); }catch(e){}
    let theme = stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    apply(theme);

    document.addEventListener('click', (e)=>{
      const t = e.target;
      if(t && t.classList && t.classList.contains('theme-toggle')){
        const next = doc.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        apply(next);
      }
    });
  }

  // initialize when DOM ready
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
