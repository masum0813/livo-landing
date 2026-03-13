import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type SupportedLocale = 'en' | 'tr';

type BadgeSet = {
  googlePlay: string;
  appStore: {
    light: string;
    dark: string;
  };
  labels: {
    appStore: string;
    googlePlay: string;
  };
};

const BADGE_MAP: Record<SupportedLocale, BadgeSet> = {
  en: {
    googlePlay: 'GetItOnGooglePlay_Badge_Web_color_English.svg',
    appStore: {
      light: 'Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg',
      dark: 'Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg',
    },
    labels: {
      appStore: 'Download Livo Player on the App Store',
      googlePlay: 'Get Livo Player on Google Play',
    },
  },
  tr: {
    googlePlay: 'GetItOnGooglePlay_Badge_Web_color_Turkish.svg',
    appStore: {
      light: 'Download_on_the_App_Store_Badge_TR_RGB_blk_100217.svg',
      dark: 'Download_on_the_App_Store_Badge_TR_wht_RGB_100217.svg',
    },
    labels: {
      appStore: "Livo Player'ı App Store'dan indirin",
      googlePlay: "Livo Player'ı Google Play'den edinin",
    },
  },
};

function normalizeLocale(locale: string): SupportedLocale {
  return locale === 'tr' ? 'tr' : 'en';
}

type Props = {
  className?: string;
};

export default function StoreBadges({className}: Props): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const locale = normalizeLocale(i18n.currentLocale);
  const badges = BADGE_MAP[locale];
  const withBaseUrl = useBaseUrl;

  return (
    <div className={className}>
      <a
        href="https://apps.apple.com/tr/app/livo-iptv/id6755977918"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={badges.labels.appStore}
        title={badges.labels.appStore}>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcSet={withBaseUrl(`/badges/${badges.appStore.dark}`)} />
          <img
            src={withBaseUrl(`/badges/${badges.appStore.light}`)}
            alt={badges.labels.appStore}
            width={180}
            height={60}
          />
        </picture>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.livo.android"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={badges.labels.googlePlay}
        title={badges.labels.googlePlay}>
        <img
          src={withBaseUrl(`/badges/${badges.googlePlay}`)}
          alt={badges.labels.googlePlay}
          width={180}
          height={53}
        />
      </a>
    </div>
  );
}
