import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroVisual from '@site/src/components/HeroVisual';
import {seoLandingPages, type SeoPageKey} from '@site/src/content/seoLandingPages';
import styles from '../pages/iptv-player.module.css';
import StoreBadges from './StoreBadges';

type Props = {
  pageKey: SeoPageKey;
};

function normalizeLocale(locale: string): 'en' | 'tr' {
  return locale === 'tr' ? 'tr' : 'en';
}

export default function SeoLandingPage({pageKey}: Props): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const locale = normalizeLocale(i18n.currentLocale);
  const page = seoLandingPages[pageKey][locale];

  return (
    <Layout title={page.title} description={page.description}>
      <Head>
        <meta name="description" content={page.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: page.faqs.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </Head>
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>{page.eyebrow}</span>
              <h1 className={styles.heroTitle}>{page.h1}</h1>
              <p className={styles.heroSubtitle}>{page.hero}</p>
              <StoreBadges className={styles.storeBadges} />
              <p className={styles.heroNote}>{page.heroNote}</p>
            </div>
            <div className={styles.heroShowcase}>
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{page.introTitle}</h2>
              {page.introParagraphs.map((paragraph) => (
                <p key={paragraph} className={styles.sectionBody}>
                  {paragraph}
                </p>
              ))}
            </header>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{page.whyTitle}</h2>
              <p className={styles.sectionBody}>{page.whyParagraph}</p>
            </header>
            <div className={styles.cardGrid}>
              {page.whyCards.map((card) => (
                <article key={card.title} className={styles.card}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{page.devicesTitle}</h2>
              <p className={styles.sectionBody}>{page.devicesParagraph}</p>
            </header>
            <div className={styles.cardGrid}>
              {page.deviceCards.map((card) => (
                <article key={card.title} className={styles.card}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{page.featuresTitle}</h2>
              <p className={styles.sectionBody}>{page.featuresParagraph}</p>
            </header>
            <ul className={styles.featureList}>
              {page.featureItems.map((item) => (
                <li key={item} className={styles.featureItem}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.linkRow}>
              <Link to="/m3u-player">{page.linkLabels.m3u}</Link>
              <Link to="/apple-tv-iptv-player">{page.linkLabels.appleTv}</Link>
              <Link to="/android-tv-iptv-player">{page.linkLabels.androidTv}</Link>
              <Link to="/docs/setup">{page.linkLabels.setup}</Link>
              <Link to="/">{page.linkLabels.home}</Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{page.faqTitle}</h2>
            </header>
            <div className={styles.faqGrid}>
              {page.faqs.map((item) => (
                <article key={item.question} className={styles.faqItem}>
                  <h3>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.ctaPanel}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{page.ctaTitle}</h2>
                <p className={styles.sectionBody}>{page.ctaBody}</p>
              </header>
              <StoreBadges className={styles.storeBadges} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
