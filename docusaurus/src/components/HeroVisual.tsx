import useBaseUrl from '@docusaurus/useBaseUrl';
import {HERO_IMAGE_ASSETS} from './heroImageAssets';
import styles from './HeroVisual.module.css';

type DeviceShot = {
  key: 'tv' | 'tablet' | 'phone';
  frameClassName: string;
  wrapClassName: string;
  imageClassName: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  sizes: string;
  alt: string;
  loading: 'eager' | 'lazy';
  fetchpriority?: 'high' | 'low';
};

export default function HeroVisual(): JSX.Element {
  const withBaseUrl = useBaseUrl;
  const buildSrcSet = (asset: (typeof HERO_IMAGE_ASSETS)[keyof typeof HERO_IMAGE_ASSETS]) =>
    asset.sources.map((source) => `${withBaseUrl(source.src)} ${source.width}w`).join(', ');

  const shots: DeviceShot[] = [
    {
      key: 'tv',
      frameClassName: styles.tvFrame,
      wrapClassName: styles.landscapeScreenWrap,
      imageClassName: styles.tvImage,
      src: withBaseUrl(HERO_IMAGE_ASSETS.tv.src),
      srcSet: buildSrcSet(HERO_IMAGE_ASSETS.tv),
      width: HERO_IMAGE_ASSETS.tv.width,
      height: HERO_IMAGE_ASSETS.tv.height,
      sizes: '(max-width: 640px) 74vw, (max-width: 996px) 56vw, 42vw',
      alt: HERO_IMAGE_ASSETS.tv.alt,
      loading: 'eager',
      fetchpriority: 'high',
    },
    {
      key: 'tablet',
      frameClassName: styles.tabletFrame,
      wrapClassName: styles.tabletScreenWrap,
      imageClassName: styles.tabletImage,
      src: withBaseUrl(HERO_IMAGE_ASSETS.tablet.src),
      srcSet: buildSrcSet(HERO_IMAGE_ASSETS.tablet),
      width: HERO_IMAGE_ASSETS.tablet.width,
      height: HERO_IMAGE_ASSETS.tablet.height,
      sizes: '(max-width: 640px) 37vw, (max-width: 996px) 26vw, 16vw',
      alt: HERO_IMAGE_ASSETS.tablet.alt,
      loading: 'lazy',
      fetchpriority: 'low',
    },
    {
      key: 'phone',
      frameClassName: styles.phoneFrame,
      wrapClassName: styles.phoneScreenWrap,
      imageClassName: styles.phoneImage,
      src: withBaseUrl(HERO_IMAGE_ASSETS.phone.src),
      srcSet: buildSrcSet(HERO_IMAGE_ASSETS.phone),
      width: HERO_IMAGE_ASSETS.phone.width,
      height: HERO_IMAGE_ASSETS.phone.height,
      sizes: '(max-width: 640px) 32vw, (max-width: 996px) 22vw, 11vw',
      alt: HERO_IMAGE_ASSETS.phone.alt,
      loading: 'lazy',
      fetchpriority: 'low',
    },
  ];

  return (
    <div className={styles.visualShell}>
      <div className={styles.visualGlowA} />
      <div className={styles.visualGlowB} />

      <div className={styles.deviceStage}>
        {shots.map((shot) => (
          <figure key={shot.key} className={`${styles.deviceFrame} ${shot.frameClassName}`}>
            <div className={`${styles.screenWrap} ${shot.wrapClassName}`}>
              <img
                className={`${styles.screenImage} ${shot.imageClassName}`}
                src={shot.src}
                srcSet={shot.srcSet}
                sizes={shot.sizes}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                loading={shot.loading}
                decoding="async"
                {...(shot.fetchpriority ? {fetchpriority: shot.fetchpriority} : {})}
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
