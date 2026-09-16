(function(){
  const LANGS={en:'English',ru:'Русский',de:'Deutsch',fr:'Français',es:'Español',pt:'Português'};
  const SUPPORTED=Object.keys(LANGS);
  const KEY='am-language';
  const normalize=(v)=>String(v||'').toLowerCase().split('-')[0];
  const browser=normalize((navigator.languages&&navigator.languages[0])||navigator.language||'en');
  let current=localStorage.getItem(KEY)||'en';
  if(!localStorage.getItem(KEY) && SUPPORTED.includes(browser) && browser!=='en') current=browser;
  document.documentElement.lang=current;
  function setCookie(name,value){document.cookie=name+'='+encodeURIComponent(value)+';path=/;max-age=31536000;SameSite=Lax'}
  function clearCookie(name){document.cookie=name+'=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT'}
  function apply(code,save){
    if(save)localStorage.setItem(KEY,code);
    document.documentElement.lang=code;
    if(code==='en'){
      clearCookie('googtrans');
      location.reload();
      return;
    }
    setCookie('googtrans','/en/'+code);
    location.reload();
  }
  function build(){
    if(document.getElementById('am-language'))return;
    const chat=document.querySelector('.chat');
    if(!chat)return;
    const wrap=document.createElement('div');
    wrap.className='am-lang-wrap';
    wrap.id='am-language';
    const select=document.createElement('select');
    select.className='am-lang-select';
    select.setAttribute('aria-label','Language');
    SUPPORTED.forEach(code=>{
      const o=document.createElement('option');o.value=code;o.textContent=LANGS[code];if(code===current)o.selected=true;select.appendChild(o);
    });
    select.addEventListener('change',()=>apply(select.value,true));
    wrap.appendChild(select);
    chat.parentNode.insertBefore(wrap,chat);
  }
  window.googleTranslateElementInit=function(){
    if(window.google&&google.translate&&google.translate.TranslateElement){
      new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'ru,de,fr,es,pt',autoDisplay:false},'google_translate_element');
    }
  };
  function loadTranslate(){
    if(current==='en'||document.getElementById('google-translate-script'))return;
    const holder=document.createElement('div');holder.id='google_translate_element';holder.style.display='none';document.body.appendChild(holder);
    const s=document.createElement('script');s.id='google-translate-script';s.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';s.async=true;document.head.appendChild(s);
  }
  function boot(){build();loadTranslate();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
