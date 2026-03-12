import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  Check,
  CloudCheck,
  LayoutDashboard,
  ListVideo,
  ShieldCheck,
  Smartphone,
  Tablet,
  Tv,
  Zap,
} from 'lucide-react';
import Translate, { translate } from '@docusaurus/Translate';
import HeroVisual from '@site/src/components/HeroVisual';
import PremiumPlanCard from '@site/src/components/PremiumPlanCard';
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
  const { i18n } = useDocusaurusContext();
  const locale = normalizeLocale(i18n.currentLocale);
  const badges = BADGE_MAP[locale];
  const googlePlayBadge = useBaseUrl(`/badges/${badges.googlePlay}`);
  const googlePlayLabel = translate({
    id: 'homepage.badge.googlePlay.alt',
    message: 'Get it on Google Play',
  });
  const appStoreLabel = translate({
    id: 'homepage.badge.appStore.alt',
    message: 'Download on the App Store',
  });
  const storeTrustLine = translate({
    id: 'homepage.storeTrustLine',
    message: 'Works on iPhone • iPad • Apple TV • Android • Android TV',
  });
  const coreFeatures = [
    {
      icon: Tv,
      title: translate({
        id: 'homepage.coreFeatures.continueWatching.title',
        message: 'Continue Watching Across Devices',
      }),
      body: translate({
        id: 'homepage.coreFeatures.continueWatching.body',
        message:
          'Start watching on your TV and instantly continue on your phone or tablet with your account.',
      }),
    },
    {
      icon: Zap,
      title: translate({
        id: 'homepage.coreFeatures.fastPlayback.title',
        message: 'Ultra Fast Playback',
      }),
      body: translate({
        id: 'homepage.coreFeatures.fastPlayback.body',
        message:
          'Enjoy smooth channel switching and optimized playback performance for a seamless experience.',
      }),
    },
    {
      icon: ListVideo,
      title: translate({
        id: 'homepage.coreFeatures.playlists.title',
        message: 'Flexible Playlist Support',
      }),
      body: translate({
        id: 'homepage.coreFeatures.playlists.body',
        message:
          'Add and manage multiple playlists easily in one clean and modern interface.',
      }),
    },
    {
      icon: CloudCheck,
      title: translate({
        id: 'homepage.coreFeatures.sync.title',
        message: 'Secure Cloud Sync',
      }),
      body: translate({
        id: 'homepage.coreFeatures.sync.body',
        message:
          'Keep your favorites, history, and playlists safely synced across all your devices.',
      }),
    },
    {
      icon: LayoutDashboard,
      title: translate({
        id: 'homepage.coreFeatures.organization.title',
        message: 'Smart Content Organization',
      }),
      body: translate({
        id: 'homepage.coreFeatures.organization.body',
        message:
          'Organize channels, movies, and series with customizable sidebar groups.',
      }),
    },
    {
      icon: ShieldCheck,
      title: translate({
        id: 'homepage.coreFeatures.adFree.title',
        message: 'Ad-Free Experience',
      }),
      body: translate({
        id: 'homepage.coreFeatures.adFree.body',
        message:
          'Focus on your content with a clean interface and no intrusive ads.',
      }),
    },
  ];
  const ecosystemBullets = [
    translate({
      id: 'homepage.ecosystem.bullet.one',
      message: 'Continue watching across devices',
    }),
    translate({
      id: 'homepage.ecosystem.bullet.two',
      message: 'Sync your favorites and playlists',
    }),
    translate({
      id: 'homepage.ecosystem.bullet.three',
      message: 'Enjoy the same clean experience everywhere',
    }),
  ];
  const deviceCards = [
    {
      icon: Smartphone,
      title: translate({
        id: 'homepage.ecosystem.device.mobile.title',
        message: 'Mobile Experience',
      }),
      body: translate({
        id: 'homepage.ecosystem.device.mobile.body',
        message: 'Watch on the go and continue instantly with your synced playlists and history.',
      }),
    },
    {
      icon: Tablet,
      title: translate({
        id: 'homepage.ecosystem.device.tablet.title',
        message: 'Tablet Experience',
      }),
      body: translate({
        id: 'homepage.ecosystem.device.tablet.body',
        message: 'Enjoy a larger viewing area with the same clean layout and smooth navigation.',
      }),
    },
    {
      icon: Tv,
      title: translate({
        id: 'homepage.ecosystem.device.tv.title',
        message: 'Big Screen Experience',
      }),
      body: translate({
        id: 'homepage.ecosystem.device.tv.body',
        message: 'Lean back and enjoy the full Livo experience on your living room screen.',
      }),
    },
  ];
  const syncValuePoints = [
    translate({
      id: 'homepage.sync.value.one',
      message: 'Continue watching without losing your place',
    }),
    translate({
      id: 'homepage.sync.value.two',
      message: 'Access your favorites instantly on any device',
    }),
    translate({
      id: 'homepage.sync.value.three',
      message: 'Keep your playlists organized and always up to date',
    }),
  ];
  const freePlanFeatures = [
    translate({
      id: 'homepage.subscription.free.feature.one',
      message: 'Add and watch playlists',
    }),
    translate({
      id: 'homepage.subscription.free.feature.two',
      message: 'Basic playback experience',
    }),
    translate({
      id: 'homepage.subscription.free.feature.three',
      message: 'Manual device usage',
    }),
    translate({
      id: 'homepage.subscription.free.feature.four',
      message: 'Limited sync',
    }),
  ];
  const premiumPlanFeatures = [
    translate({
      id: 'homepage.subscription.premium.feature.zero',
      message: 'Best experience for multi-device watching',
    }),
    translate({
      id: 'homepage.subscription.premium.feature.one',
      message: 'Continue watching across devices',
    }),
    translate({
      id: 'homepage.subscription.premium.feature.two',
      message: 'Secure cloud sync',
    }),
    translate({
      id: 'homepage.subscription.premium.feature.three',
      message: 'Ad-free experience',
    }),
    translate({
      id: 'homepage.subscription.premium.feature.four',
      message: 'Unlimited playlists',
    }),
    translate({
      id: 'homepage.subscription.premium.feature.five',
      message: 'Priority updates',
    }),
  ];
  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'Livo Player',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message:
          'Marketing site, support center, user guides and product updates for the Livo IPTV player.',
      })}>
      <main className={`${styles.page} homepage`}>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>
                <Translate id="homepage.title">Your modern player for live TV and playlists.</Translate>
              </h1>
              <p className={styles.heroSubtitle}>
                <Translate id="homepage.subtitle">
                  Add your playlists, enjoy fast playback, and continue watching seamlessly on your phone, tablet, or TV.
                </Translate>
              </p>
              <div className="storeBadges" id="get-livo">
                <a
                  href="https://apps.apple.com/tr/app/livo-iptv/id6755977918"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={appStoreLabel}
                  title={appStoreLabel}>
                  <ThemedImage
                    alt={appStoreLabel}
                    sources={{
                      light: useBaseUrl(`/badges/${badges.appStore.light}`),
                      dark: useBaseUrl(`/badges/${badges.appStore.dark}`),
                    }}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.livo.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={googlePlayLabel}
                  title={googlePlayLabel}>
                  <img
                    src={googlePlayBadge}
                    alt={googlePlayLabel}
                  />
                </a>
              </div>
              <p className={styles.storeTrustLine}>{storeTrustLine}</p>
            </div>
            <div className={styles.heroShowcase}>
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <span className={styles.sectionKicker}>
                <Translate id="homepage.section.features.kicker">Built for daily watching</Translate>
              </span>
              <h2>
                <Translate id="homepage.section.features.title">Everything you need for modern streaming</Translate>
              </h2>
            </div>
            <div className={styles.featureGrid}>
              {coreFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className={styles.featureCard}>
                    <div className={styles.featureIconWrap}>
                      <Icon className={styles.featureIcon} size={24} strokeWidth={2} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                );
              })}
            </div>
            <div className={styles.featureCtaRow}>
              <p className={styles.featureCtaText}>
                <Translate id="homepage.section.features.cta.text">
                  Download Livo today and start watching smarter
                </Translate>
              </p>
              <div className={styles.featureStoreLinks}>
                <a
                  href="https://apps.apple.com/tr/app/livo-iptv/id6755977918"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={appStoreLabel}
                  title={appStoreLabel}>
                  <ThemedImage
                    alt={appStoreLabel}
                    sources={{
                      light: useBaseUrl(`/badges/${badges.appStore.light}`),
                      dark: useBaseUrl(`/badges/${badges.appStore.dark}`),
                    }}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.livo.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={googlePlayLabel}
                  title={googlePlayLabel}>
                  <img
                    src={googlePlayBadge}
                    alt={googlePlayLabel}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ecosystemSection}>
          <div className={`container ${styles.ecosystemGrid}`}>
            <div className={styles.ecosystemCopy}>
              <span className={styles.sectionKicker}>
                <Translate id="homepage.section.ecosystem.kicker">Built for every screen</Translate>
              </span>
              <h2 className={styles.ecosystemTitle}>
                <Translate id="homepage.section.ecosystem.title">One account. All your screens.</Translate>
              </h2>
              <p className={styles.ecosystemBody}>
                <Translate id="homepage.section.ecosystem.body">
                  Enjoy a seamless experience across mobile, tablet, and TV. Start watching on one device and instantly continue on another.
                </Translate>
              </p>
              <ul className={styles.ecosystemBullets}>
                {ecosystemBullets.map((item) => (
                  <li key={item}>
                    <Check size={18} strokeWidth={2.25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.deviceVisualWrap}>
              <SyncVisual />
            </div>
          </div>
          <div className={`container ${styles.deviceCardsBlock}`}>
            <span className={styles.deviceCardsLabel}>
              <Translate id="homepage.ecosystem.cards.kicker">How you watch</Translate>
            </span>
            <div className={styles.deviceCardGrid}>
              {deviceCards.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className={styles.deviceCard}>
                    <div className={styles.deviceCardIcon}>
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.syncSection}>
          <div className={`container ${styles.syncGrid}`}>
            <div className={styles.syncCopy}>
              <span className={styles.syncKicker}>
                <Translate id="homepage.section.sync.kicker">Synced for you</Translate>
              </span>
              <h2 className={styles.syncTitle}>
                <Translate id="homepage.section.sync.title">Your playlists stay with you</Translate>
              </h2>
              <p className={styles.syncBody}>
                <Translate id="homepage.section.sync.body">
                  Favorites, history, and playlists are securely synced to your account — so you can continue watching anytime, anywhere. Your progress moves with you.
                </Translate>
              </p>
              <ul className={styles.syncValueList}>
                {syncValuePoints.map((item) => (
                  <li key={item}>
                    <Check size={18} strokeWidth={2.25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.syncVisualWrap}>
              <SyncVisual />
            </div>
          </div>
        </section>

        <section className={styles.subscriptionSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <span className={styles.sectionKicker}>
                <Translate id="homepage.section.subscription.kicker">Choose your plan</Translate>
              </span>
              <h2>
                <Translate id="homepage.section.subscription.title">Unlock the full Livo experience</Translate>
              </h2>
              <p className={styles.subscriptionIntroBody}>
                <Translate id="homepage.section.subscription.body">
                  Use Livo for free or upgrade to Premium for seamless sync, ad-free watching, and advanced features.
                </Translate>
              </p>
            </div>

            <div className={styles.subscriptionGrid}>
              <article className={styles.planCard}>
                <div className={styles.planHeader}>
                  <span className={styles.planLabel}>
                    <Translate id="homepage.subscription.free.label">Free plan</Translate>
                  </span>
                  <h3>
                    <Translate id="homepage.subscription.free.title">Free</Translate>
                  </h3>
                </div>
                <div className={styles.planPrice}>
                  <span className={styles.planAmount}>$0</span>
                </div>
                <ul className={styles.planFeatureList}>
                  {freePlanFeatures.map((item) => (
                    <li key={item}>
                      <Check size={18} strokeWidth={2.25} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <PremiumPlanCard
                label={translate({
                  id: 'homepage.subscription.premium.label',
                  message: 'Premium plan',
                })}
                title={translate({
                  id: 'homepage.subscription.premium.title',
                  message: 'Premium',
                })}
                subtitle={translate({
                  id: 'homepage.subscription.premium.feature.zero',
                  message: 'Best experience for multi-device watching',
                })}
                trialBadge={translate({
                  id: 'homepage.subscription.premium.trialBadge',
                  message: '7-day free Premium trial',
                })}
                priceText={translate({
                  id: 'homepage.subscription.premium.price',
                  message: 'Available via App Store & Google Play subscriptions',
                })}
                features={premiumPlanFeatures}
                footnote={translate({
                  id: 'homepage.subscription.premium.footnote',
                  message: 'Cancel anytime. No commitment.',
                })}
              />
            </div>

            <div className={styles.subscriptionStoreShell}>
              <p className={styles.subscriptionStoreText}>
                <Translate id="homepage.subscription.store.text">
                  Get started free. Upgrade to Premium anytime via App Store or Google Play.
                </Translate>
              </p>
              <div className={styles.subscriptionStoreRow}>
                <a
                  href="https://apps.apple.com/tr/app/livo-iptv/id6755977918"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={appStoreLabel}
                  title={appStoreLabel}>
                  <ThemedImage
                    alt={appStoreLabel}
                    sources={{
                      light: useBaseUrl(`/badges/${badges.appStore.light}`),
                      dark: useBaseUrl(`/badges/${badges.appStore.dark}`),
                    }}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.livo.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={googlePlayLabel}
                  title={googlePlayLabel}>
                  <img
                    src={googlePlayBadge}
                    alt={googlePlayLabel}
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
