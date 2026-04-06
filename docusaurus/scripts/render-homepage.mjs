import {writeFileSync} from 'node:fs';
import {join} from 'node:path';

const TRACKING_ID = 'G-DK9CM7Y64E';

const HOME_CONTENT = {
  en: {
    lang: 'en',
    pathPrefix: '',
    htmlTitle: 'Modern IPTV Player for Apple TV, Android TV & Mobile | Livo Player',
    description:
      'Livo Player is a clean and fast IPTV player supporting M3U playlists, live TV streaming and continue watching across devices. Available for Apple TV and Android TV.',
    keywords:
      'iptv player, m3u player, apple tv iptv app, android tv iptv player, streaming player, cross device streaming, cloud sync video player',
    localeLabel: 'English',
    alternateLabel: 'Türkçe',
    alternateHref: '/tr/',
    heroTitle: 'Modern IPTV Player for Live TV and Playlists',
    heroSubtitle:
      'Livo Player is a modern IPTV player designed for live TV, movies and series playlists. Add M3U sources instantly and continue watching across Apple TV, Android TV, iPhone and tablets.',
    trustLine: 'Works on iPhone, iPad, Apple TV, Android phones and Android TV.',
    primaryCta: 'Open Setup Guide',
    primaryHref: '/docs/setup',
    secondaryCta: 'Compare IPTV Apps',
    secondaryHref: '/iptv-player-comparison',
    sections: [
      {
        title: 'Watch IPTV on Every Device',
        body:
          'Livo Player brings the same polished IPTV player experience to the screens you use most. Open live TV channels on your couch, browse series on a tablet in the kitchen, or check movies on your phone while traveling.',
      },
      {
        title: 'Continue Watching Across Phone, Tablet and TV',
        body:
          'Start a live TV stream on your television, pause it, then pick it up on mobile without hunting for the same title again. Your viewing flow stays connected instead of restarting from scratch.',
      },
      {
        title: 'Add M3U Playlists in Seconds',
        body:
          'Import M3U sources quickly, keep playlists organized, and move from setup to playback with very little friction across Apple TV, Android TV, and handheld devices.',
      },
      {
        title: 'Clean and Fast IPTV Experience',
        body:
          'Livo focuses on speed, clarity and comfort so channels, movies and series stay easy to browse without turning the screen into a cluttered control panel.',
      },
    ],
    quickLinks: [
      {label: 'Docs', href: '/docs/intro'},
      {label: 'Blog', href: '/blog'},
      {label: 'Support', href: '/support'},
      {label: 'Playlists', href: '/docs/playlists'},
    ],
    appStoreBadgeLight: '/badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg',
    appStoreBadgeDark: '/badges/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg',
    googleBadge: '/badges/GetItOnGooglePlay_Badge_Web_color_English.svg',
  },
  tr: {
    lang: 'tr',
    pathPrefix: '/tr',
    htmlTitle: 'Apple TV, Android TV ve Mobil için Modern IPTV Player | Livo Player',
    description:
      "Livo Player; M3U oynatma listelerini, canlı TV yayını ve cihazlar arası izlemeye devam deneyimiyle sunan temiz ve hızlı bir IPTV player'dır. Apple TV ve Android TV için kullanılabilir.",
    keywords:
      'iptv player, m3u player, apple tv iptv uygulamasi, android tv iptv player, streaming player, cihazlar arasi yayin, bulut senkronlu video player',
    localeLabel: 'Türkçe',
    alternateLabel: 'English',
    alternateHref: '/',
    heroTitle: 'Canlı TV ve Oynatma Listeleri için Modern IPTV Player',
    heroSubtitle:
      "Livo Player; canlı TV, film ve dizi listeleri için tasarlanmış modern bir IPTV player'dır. M3U kaynaklarını anında ekleyin ve Apple TV, Android TV, iPhone ve tabletlerde izlemeye devam edin.",
    trustLine: "iPhone, iPad, Apple TV, Android telefonlar ve Android TV'de çalışır.",
    primaryCta: 'Kurulum Rehberi',
    primaryHref: '/tr/docs/setup',
    secondaryCta: 'IPTV Uygulamalarını Karşılaştır',
    secondaryHref: '/tr/iptv-player-comparison',
    sections: [
      {
        title: 'Her Cihazda IPTV İzleyin',
        body:
          'Livo Player, kullandığınız ekranların tamamına aynı düzenli IPTV player deneyimini taşır. Oturma odasında canlı TV kanallarını açabilir, tablette dizilere göz atabilir veya yoldayken telefondan filmlere bakabilirsiniz.',
      },
      {
        title: 'Telefon, Tablet ve TV Arasında İzlemeye Devam Edin',
        body:
          "İzlemeye devam özelliği sayesinde televizyonda başlattığınız canlı yayını duraklatıp aynı içeriği mobilde yeniden aramadan sürdürebilirsiniz.",
      },
      {
        title: 'M3U Oynatma Listelerini Saniyeler İçinde Ekleyin',
        body:
          'M3U kaynaklarını hızlıca ekleyin, listeleri düzenli tutun ve kurulumdan oynatmaya çok az sürtünmeyle geçin.',
      },
      {
        title: 'Temiz ve Hızlı IPTV Deneyimi',
        body:
          'Livo hız, netlik ve konfora odaklanır; böylece kanallar, filmler ve diziler dağınık bir arayüz yerine rahat bir gezinme deneyimi sunar.',
      },
    ],
    quickLinks: [
      {label: 'Dokümanlar', href: '/tr/docs/intro'},
      {label: 'Blog', href: '/tr/blog'},
      {label: 'Destek', href: '/tr/support'},
      {label: 'Oynatma Listeleri', href: '/tr/docs/playlists'},
    ],
    appStoreBadgeLight: '/badges/Download_on_the_App_Store_Badge_TR_RGB_blk_100217.svg',
    appStoreBadgeDark: '/badges/Download_on_the_App_Store_Badge_TR_wht_RGB_100217.svg',
    googleBadge: '/badges/GetItOnGooglePlay_Badge_Web_color_Turkish.svg',
  },
};

function renderSections(items) {
  return items
    .map(
      (item) => `
        <article class="home-card">
          <h2>${item.title}</h2>
          <p>${item.body}</p>
        </article>`,
    )
    .join('');
}

function renderQuickLinks(items) {
  return items
    .map((item) => `<a class="quick-link" href="${item.href}">${item.label}</a>`)
    .join('');
}

function renderAnalyticsScript() {
  return `
<script>
(() => {
  const trackingId = '${TRACKING_ID}';
  const scriptSrc = 'https://www.googletagmanager.com/gtag/js?id=' + trackingId;
  let configured = false;
  let requested = false;

  function ensureStub() {
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
    }
  }

  function configure() {
    if (configured) return;
    configured = true;
    ensureStub();
    window.gtag('js', new Date());
    window.gtag('config', trackingId, {
      anonymize_ip: true,
      send_page_view: true,
    });
  }

  function requestScript() {
    if (requested) return;
    requested = true;
    configure();
    const script = document.createElement('script');
    script.async = true;
    script.src = scriptSrc;
    document.head.appendChild(script);
  }

  configure();

  const schedule = () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(requestScript, {timeout: 4000});
      return;
    }
    window.setTimeout(requestScript, 4000);
  };

  schedule();
  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach((eventName) => {
    window.addEventListener(eventName, requestScript, {passive: true, once: true});
  });
})();
</script>`;
}

function renderThemeScript() {
  return `
<script>
(() => {
  const storageKey = 'theme';
  const root = document.documentElement;
  const saved = (() => {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  })();
  const initialTheme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      button.textContent = theme === 'dark' ? 'Light' : 'Dark';
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
    try {
      localStorage.setItem(storageKey, theme);
    } catch {}
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-theme-toggle]');
    if (!button) return;
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  applyTheme(initialTheme);
})();
</script>`;
}

function renderHomepage(locale) {
  const content = HOME_CONTENT[locale];
  const canonical = `https://www.livoplayer.com${content.pathPrefix || '/'}`;
  const alternate = `https://www.livoplayer.com${content.alternateHref}`;

  return `<!doctype html>
<html lang="${content.lang}" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${content.htmlTitle}</title>
<meta name="description" content="${content.description}">
<meta name="keywords" content="${content.keywords}">
<meta name="theme-color" content="#0f1720">
<meta property="og:title" content="${content.htmlTitle}">
<meta property="og:description" content="${content.description}">
<meta property="og:image" content="https://www.livoplayer.com/img/livo-logo.png">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="${content.lang === 'tr' ? 'tr_TR' : 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${content.htmlTitle}">
<meta name="twitter:description" content="${content.description}">
<meta name="twitter:image" content="https://www.livoplayer.com/img/livo-logo.png">
<link rel="icon" href="/img/livo-logo.png">
<link rel="canonical" href="${canonical}">
<link rel="alternate" href="${canonical}" hreflang="${content.lang}">
<link rel="alternate" href="${alternate}" hreflang="${content.lang === 'tr' ? 'en' : 'tr'}">
<link rel="alternate" href="https://www.livoplayer.com/" hreflang="x-default">
<link rel="stylesheet" href="/home.css">
${renderAnalyticsScript()}
</head>
<body>
  <div class="home-shell">
    <header class="home-header">
      <nav class="topbar">
        <a class="brand" href="${content.lang === 'tr' ? '/tr/' : '/'}">
          <img src="/img/livo-logo-128.webp" alt="Livo logo" width="32" height="32">
          <span>Livo</span>
        </a>
        <div class="topbar-actions">
          <a class="locale-link" href="${content.alternateHref}">${content.alternateLabel}</a>
          <button type="button" class="theme-toggle" data-theme-toggle>Light</button>
        </div>
      </nav>

      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${content.localeLabel}</p>
          <h1>${content.heroTitle}</h1>
          <p class="hero-subtitle">${content.heroSubtitle}</p>
          <div class="badge-row">
            <a href="https://apps.apple.com/tr/app/livo-iptv/id6755977918" target="_blank" rel="noopener noreferrer" aria-label="App Store">
              <picture>
                <source media="(prefers-color-scheme: dark)" srcset="${content.appStoreBadgeDark}">
                <img src="${content.appStoreBadgeLight}" alt="App Store" width="180" height="60">
              </picture>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.livo.android" target="_blank" rel="noopener noreferrer" aria-label="Google Play">
              <img src="${content.googleBadge}" alt="Google Play" width="180" height="53">
            </a>
          </div>
          <p class="hero-trust">${content.trustLine}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${content.primaryHref}">${content.primaryCta}</a>
            <a class="button button-secondary" href="${content.secondaryHref}">${content.secondaryCta}</a>
          </div>
          <div class="quick-links">
            ${renderQuickLinks(content.quickLinks)}
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="device device-tv">
            <img
              src="/img/hero/AppleTV-4K.App-1200.webp"
              srcset="/img/hero/AppleTV-4K.App-800.webp 800w, /img/hero/AppleTV-4K.App-1200.webp 1200w, /img/hero/AppleTV-4K.App-1600.webp 1600w"
              sizes="(max-width: 720px) 88vw, 44vw"
              alt=""
              width="1200"
              height="780"
              fetchpriority="high"
              decoding="async">
          </div>
          <div class="device device-tablet">
            <img
              src="/img/hero/iPadPro11-M4-SpaceGray-Landscape-480.webp"
              srcset="/img/hero/iPadPro11-M4-SpaceGray-Landscape-320.webp 320w, /img/hero/iPadPro11-M4-SpaceGray-Landscape-480.webp 480w, /img/hero/iPadPro11-M4-SpaceGray-Landscape-700.webp 700w"
              sizes="(max-width: 720px) 38vw, 17vw"
              alt=""
              width="700"
              height="500"
              loading="lazy"
              decoding="async">
          </div>
          <div class="device device-phone">
            <img
              src="/img/hero/iPhone17ProMax-Silver-Portrait-320.webp"
              srcset="/img/hero/iPhone17ProMax-Silver-Portrait-240.webp 240w, /img/hero/iPhone17ProMax-Silver-Portrait-320.webp 320w, /img/hero/iPhone17ProMax-Silver-Portrait-420.webp 420w"
              sizes="(max-width: 720px) 30vw, 12vw"
              alt=""
              width="420"
              height="860"
              loading="lazy"
              decoding="async">
          </div>
        </div>
      </section>
    </header>

    <main class="home-main">
      <section class="card-grid">
        ${renderSections(content.sections)}
      </section>
    </main>

    <footer class="home-footer">
      <p>Copyright © 2026 Livo Player. This app does not provide IPTV content or subscriptions.</p>
    </footer>
  </div>
  ${renderThemeScript()}
</body>
</html>`;
}

export function renderHomepages(buildDir) {
  writeFileSync(join(buildDir, 'index.html'), renderHomepage('en'));
  writeFileSync(join(buildDir, 'tr', 'index.html'), renderHomepage('tr'));
}
