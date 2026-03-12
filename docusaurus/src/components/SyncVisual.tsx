import {HERO_IMAGE_ASSETS} from './heroImageAssets';
import styles from './SyncVisual.module.css';

export default function SyncVisual(): JSX.Element {
  const buildSrcSet = (asset: (typeof HERO_IMAGE_ASSETS)[keyof typeof HERO_IMAGE_ASSETS]) =>
    asset.sources.map((source) => `${source.src} ${source.width}w`).join(', ');
  const tvImage = HERO_IMAGE_ASSETS.tv.src;
  const tvImageSet = buildSrcSet(HERO_IMAGE_ASSETS.tv);
  const phoneImage = HERO_IMAGE_ASSETS.phone.src;
  const phoneImageSet = buildSrcSet(HERO_IMAGE_ASSETS.phone);
  const tabletImage = HERO_IMAGE_ASSETS.tablet.src;
  const tabletImageSet = buildSrcSet(HERO_IMAGE_ASSETS.tablet);

  return (
    <div className={styles.visualShell}>
      <div className={styles.glowA} />
      <div className={styles.glowB} />

      <div className={styles.stage}>
        <div className={`${styles.card} ${styles.tvCard}`}>
          <div className={styles.cardImageWrap}>
            <img
              className={`${styles.cardImage} ${styles.tvImage}`}
              src={tvImage}
              srcSet={tvImageSet}
              sizes="(max-width: 640px) 100vw, (max-width: 996px) 58vw, 35vw"
              alt={HERO_IMAGE_ASSETS.tv.alt}
              width={HERO_IMAGE_ASSETS.tv.width}
              height={HERO_IMAGE_ASSETS.tv.height}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className={`${styles.card} ${styles.phoneCard}`}>
          <div className={styles.cardImageWrap}>
            <img
              className={`${styles.cardImage} ${styles.phoneImage}`}
              src={phoneImage}
              srcSet={phoneImageSet}
              sizes="(max-width: 640px) 50vw, (max-width: 996px) 18vw, 10vw"
              alt={HERO_IMAGE_ASSETS.phone.alt}
              width={HERO_IMAGE_ASSETS.phone.width}
              height={HERO_IMAGE_ASSETS.phone.height}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className={`${styles.card} ${styles.tabletCard}`}>
          <div className={styles.cardImageWrap}>
            <img
              className={`${styles.cardImage} ${styles.tabletImage}`}
              src={tabletImage}
              srcSet={tabletImageSet}
              sizes="(max-width: 640px) 50vw, (max-width: 996px) 24vw, 14vw"
              alt={HERO_IMAGE_ASSETS.tablet.alt}
              width={HERO_IMAGE_ASSETS.tablet.width}
              height={HERO_IMAGE_ASSETS.tablet.height}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
