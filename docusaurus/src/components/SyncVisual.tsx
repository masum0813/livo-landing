import useBaseUrl from '@docusaurus/useBaseUrl';
import {HERO_IMAGE_ASSETS} from './heroImageAssets';
import styles from './SyncVisual.module.css';

export default function SyncVisual(): JSX.Element {
  const tvImage = useBaseUrl(HERO_IMAGE_ASSETS.tv.src1x);
  const tvImageSet = `${useBaseUrl(HERO_IMAGE_ASSETS.tv.src1x)} 1x, ${useBaseUrl(HERO_IMAGE_ASSETS.tv.src2x)} 2x`;
  const phoneImage = useBaseUrl(HERO_IMAGE_ASSETS.phone.src1x);
  const phoneImageSet = `${useBaseUrl(HERO_IMAGE_ASSETS.phone.src1x)} 1x, ${useBaseUrl(HERO_IMAGE_ASSETS.phone.src2x)} 2x`;
  const tabletImage = useBaseUrl(HERO_IMAGE_ASSETS.tablet.src1x);
  const tabletImageSet = `${useBaseUrl(HERO_IMAGE_ASSETS.tablet.src1x)} 1x, ${useBaseUrl(HERO_IMAGE_ASSETS.tablet.src2x)} 2x`;

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
              sizes="(max-width: 640px) 100vw, (max-width: 996px) 74vw, 35vw"
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
              sizes="(max-width: 640px) 50vw, (max-width: 996px) 21vw, 10vw"
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
              sizes="(max-width: 640px) 50vw, (max-width: 996px) 30vw, 14vw"
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
