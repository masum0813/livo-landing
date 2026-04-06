import type {ClientModule} from '@docusaurus/types';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const TRACKING_ID = 'G-DK9CM7Y64E';
const GTAG_SRC = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
const INTERACTION_EVENTS = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const;

let scriptRequested = false;
let listenersBound = false;
let gtagConfigured = false;

function ensureGtagStub(): void {
  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
}

function configureGtag(): void {
  if (gtagConfigured) {
    return;
  }

  gtagConfigured = true;
  ensureGtagStub();
  window.gtag?.('js', new Date());
  window.gtag?.('config', TRACKING_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });
}

function requestScript(): void {
  if (scriptRequested) {
    return;
  }

  scriptRequested = true;
  ensureGtagStub();
  configureGtag();

  const script = document.createElement('script');
  script.async = true;
  script.src = GTAG_SRC;
  document.head.appendChild(script);
}

function removeInteractionListeners(): void {
  if (!listenersBound) {
    return;
  }

  INTERACTION_EVENTS.forEach((eventName) => {
    window.removeEventListener(eventName, requestScript);
  });
  listenersBound = false;
}

function scheduleScriptRequest(): void {
  configureGtag();

  if (!listenersBound) {
    INTERACTION_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, requestScript, {passive: true, once: true});
    });
    listenersBound = true;
  }

  if ('requestIdleCallback' in globalThis) {
    globalThis.requestIdleCallback(() => {
      requestScript();
      removeInteractionListeners();
    }, {timeout: 4000});
    return;
  }

  globalThis.setTimeout(() => {
    requestScript();
    removeInteractionListeners();
  }, 4000);
}

function trackPageView(url: string): void {
  configureGtag();
  window.gtag?.('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: url,
  });
}

const clientModule: ClientModule = {
  onRouteDidUpdate({location, previousLocation}) {
    scheduleScriptRequest();

    if (!previousLocation) {
      trackPageView(location.pathname + location.search + location.hash);
      return;
    }

    if (
      location.pathname !== previousLocation.pathname ||
      location.search !== previousLocation.search ||
      location.hash !== previousLocation.hash
    ) {
      globalThis.setTimeout(() => {
        trackPageView(location.pathname + location.search + location.hash);
      });
    }
  },
};

export default clientModule;
