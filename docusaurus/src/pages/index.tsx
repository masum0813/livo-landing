import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HeroVisual from '@site/src/components/HeroVisual';
import SyncVisual from '@site/src/components/SyncVisual';
import styles from './index.module.css';

type SupportedLocale = 'en' | 'tr' | 'es' | 'zh';

type BadgeSet = {
  googlePlay: string;
  appStore: {
    light: string;
    dark: string;
  };
};

const BADGE_MAP: Record<SupportedLocale, BadgeSet> = {
  en: {
    googlePlay: 'GetItOnGooglePlay_Badge_Web_color_English.svg',
    appStore: {
      light: 'Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg',
      dark: 'Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg',
    },
  },
  tr: {
    googlePlay: 'GetItOnGooglePlay_Badge_Web_color_Turkish.svg',
    appStore: {
      light: 'Download_on_the_App_Store_Badge_TR_RGB_blk_100217.svg',
      dark: 'Download_on_the_App_Store_Badge_TR_wht_RGB_100217.svg',
    },
  },
  es: {
    googlePlay: 'GetItOnGooglePlay_Badge_Web_color_Spanish.svg',
    appStore: {
      light: 'Download_on_the_App_Store_Badge_ES_RGB_blk_100217.svg',
      dark: 'Download_on_the_App_Store_Badge_ES_RGB_wht_100217.svg',
    },
  },
  zh: {
    googlePlay: 'GetItOnGooglePlay_Badge_Web_color_Chinese-China.svg',
    appStore: {
      light: 'Download_on_the_App_Store_Badge_CNSC_RGB_blk_092917.svg',
      dark: 'Download_on_the_App_Store_Badge_CNSC_RGB_wht_092917.svg',
    },
  },
};

function normalizeLocale(locale: string): SupportedLocale {
  if (locale === 'tr' || locale === 'es' || locale === 'zh') {
    return locale;
  }

  return 'en';
}

export default function Home(): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const locale = normalizeLocale(i18n.currentLocale);
  const badges = BADGE_MAP[locale];
  const googlePlayBadge = useBaseUrl(`/badges/${badges.googlePlay}`);
  const appStoreSources = {
    light: useBaseUrl(`/badges/${badges.appStore.light}`),
    dark: useBaseUrl(`/badges/${badges.appStore.dark}`),
  };

  return (
    <Layout
      title="Modern IPTV Player for Apple TV, Android TV & Mobile"
      description="Livo Player is a clean and fast IPTV player supporting M3U playlists, live TV streaming and continue watching across devices. Available for Apple TV and Android TV.">
      <main className={`${styles.page} homepage`}>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>Modern IPTV Player for Live TV and Playlists</h1>
              <p className={styles.heroSubtitle}>
                Livo Player is a modern IPTV player designed for live TV, movies and series playlists.
                Add M3U sources instantly and continue watching across Apple TV, Android TV, iPhone
                and tablets.
              </p>
              <div className="storeBadges" id="get-livo">
                <a
                  href="https://apps.apple.com/tr/app/livo-iptv/id6755977918"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Livo Player on the App Store"
                  title="Download Livo Player on the App Store">
                  <ThemedImage
                    alt="Download Livo Player on the App Store"
                    sources={appStoreSources}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.livo.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Livo Player on Google Play"
                  title="Get Livo Player on Google Play">
                  <img
                    src={googlePlayBadge}
                    alt="Get Livo Player on Google Play"
                  />
                </a>
              </div>
              <p className={styles.storeTrustLine}>
                Works on iPhone, iPad, Apple TV, Android phones and Android TV.
              </p>
            </div>
            <div className={styles.heroShowcase}>
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <h2>Watch IPTV on Every Device</h2>
              <p>
                Livo Player brings the same polished IPTV player experience to the screens you use
                most. Open live TV channels on your couch, browse series on a tablet in the kitchen,
                or check movies on your phone while traveling. The interface stays clean and familiar
                across Apple TV IPTV setups, Android TV IPTV boxes, touch devices and larger tablet
                layouts, so moving between devices feels natural instead of fragmented.
              </p>
              <p className={styles.featureCtaText}>
                Start with the <Link to="/docs/setup">setup guide</Link> to install the app and learn
                how the IPTV player fits into your daily viewing routine.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ecosystemSection}>
          <div className={`container ${styles.ecosystemGrid}`}>
            <div className={styles.ecosystemCopy}>
              <h2 className={styles.ecosystemTitle}>Continue Watching Across Phone, Tablet and TV</h2>
              <p className={styles.ecosystemBody}>
                Continue watching is where Livo stands out as a modern IPTV player. Start a live TV
                stream on the living room screen, pause it, then pick up your M3U playlists on mobile
                without hunting for the same title again. This matters for Apple TV IPTV users who
                switch to iPhone on the go, and for Android TV IPTV households that also watch on
                tablets. Your viewing flow stays connected instead of restarting from scratch.
              </p>
              <p className={styles.featureCtaText}>
                Need help keeping progress in sync? Visit <Link to="/docs/troubleshooting">troubleshooting</Link>{' '}
                for common playback and device handoff issues.
              </p>
            </div>
            <div className={styles.deviceVisualWrap}>
              <SyncVisual />
            </div>
          </div>
        </section>

        <section className={styles.syncSection}>
          <div className={`container ${styles.syncGrid}`}>
            <div className={styles.syncCopy}>
              <h2 className={styles.syncTitle}>Add M3U Playlists in Seconds</h2>
              <p className={styles.syncBody}>
                A good IPTV player should make playlist setup feel immediate, not technical. Livo is
                designed so you can add M3U playlists quickly, organize sources cleanly, and move from
                import to playback with very little friction. Whether you manage one main list or
                several separate M3U playlists for live TV, movies and series, the app keeps the flow
                simple on Apple TV IPTV screens, Android TV IPTV remotes and handheld devices alike.
              </p>
              <p className={styles.featureCtaText}>
                Follow the <Link to="/docs/playlists">playlist guide</Link> for M3U setup, source tips
                and the next steps after import.
              </p>
            </div>
            <div className={styles.syncVisualWrap}>
              <SyncVisual />
            </div>
          </div>
        </section>

        <section className={styles.subscriptionSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <h2>Clean and Fast IPTV Experience</h2>
              <p className={styles.subscriptionIntroBody}>
                Livo focuses on speed, clarity and comfort. The IPTV player layout keeps channels,
                movies and series easy to browse without turning the screen into a cluttered control
                panel. Fast navigation matters when switching among M3U playlists, especially on TV
                platforms where remote input can slow everything down. That is why Apple TV IPTV and
                Android TV IPTV use cases benefit from a clean visual hierarchy, quicker decisions and
                less time spent digging through menus before playback starts.
              </p>
              <p className={styles.featureCtaText}>
                Explore <Link to="/docs/setup">setup</Link>, <Link to="/docs/playlists">playlists</Link>{' '}
                and <Link to="/docs/troubleshooting">troubleshooting</Link> to get the most from the
                experience.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <h2>IPTV Player for Apple TV and Android TV</h2>
              <p>
                If you are looking specifically for an IPTV player built around television viewing,
                Livo is optimized for that environment while still staying flexible on mobile. Apple TV
                IPTV viewers get a familiar big-screen interface with fast navigation and easy return
                to recent content. Android TV IPTV users get the same focus on responsiveness and clean
                browsing. Combined with M3U playlists support and cross-device continuity, the app fits
                both dedicated TV setups and households that watch everywhere.
              </p>
              <div className={styles.featureStoreLinks}>
                <a
                  href="https://apps.apple.com/tr/app/livo-iptv/id6755977918"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Livo Player on the App Store"
                  title="Download Livo Player on the App Store">
                  <ThemedImage
                    alt="Download Livo Player on the App Store"
                    sources={appStoreSources}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.livo.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Livo Player on Google Play"
                  title="Get Livo Player on Google Play">
                  <img
                    src={googlePlayBadge}
                    alt="Get Livo Player on Google Play"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
