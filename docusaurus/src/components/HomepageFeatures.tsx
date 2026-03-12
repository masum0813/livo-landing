import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.features.setup.title">Bring your own playlists</Translate>,
    description: (
      <Translate id="homepage.features.setup.description">
        Add M3U playlists and Xtream accounts, then organize live channels, movies and series in one
        clean player experience.
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.features.support.title">Turn support into docs</Translate>,
    description: (
      <Translate id="homepage.features.support.description">
        Publish setup guides, troubleshooting articles, FAQs and store-compliance pages from one
        content workflow.
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.features.updates.title">Ship updates faster</Translate>,
    description: (
      <Translate id="homepage.features.updates.description">
        Use the blog for release notes and feature announcements instead of editing multiple static
        HTML files by hand.
      </Translate>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
