import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './HeroVisual.module.css';

type DeviceShot = {
  key: 'tv' | 'tablet' | 'phone';
  frameClassName: string;
  wrapClassName: string;
  imageClassName: string;
  imagePath: string;
  alt: string;
};

export default function HeroVisual(): JSX.Element {
  const shots: DeviceShot[] = [
    {
      key: 'tv',
      frameClassName: styles.tvFrame,
      wrapClassName: styles.landscapeScreenWrap,
      imageClassName: styles.tvImage,
      imagePath: useBaseUrl('/img/hero/AppleTV-4K.App.png'),
      alt: 'IPTV player interface on Apple TV',
    },
    {
      key: 'tablet',
      frameClassName: styles.tabletFrame,
      wrapClassName: styles.tabletScreenWrap,
      imageClassName: styles.tabletImage,
      imagePath: useBaseUrl('/img/hero/iPadPro11-M4-SpaceGray-Landscape.png'),
      alt: 'IPTV player interface on tablet',
    },
    {
      key: 'phone',
      frameClassName: styles.phoneFrame,
      wrapClassName: styles.phoneScreenWrap,
      imageClassName: styles.phoneImage,
      imagePath: useBaseUrl('/img/hero/iPhone17ProMax-Silver-Portrait.png'),
      alt: 'Continue watching IPTV on mobile',
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
                src={shot.imagePath}
                alt={shot.alt}
                loading="eager"
                decoding="async"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
