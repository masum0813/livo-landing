import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './SyncVisual.module.css';

export default function SyncVisual(): JSX.Element {
  const tvImage = useBaseUrl('/img/hero/AppleTV-4K.App.png');
  const phoneImage = useBaseUrl('/img/hero/iPhone17ProMax-Silver-Portrait.png');
  const tabletImage = useBaseUrl('/img/hero/iPadPro11-M4-SpaceGray-Landscape.png');

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
              alt="Livo TV playback preview"
            />
          </div>
        </div>

        <div className={`${styles.card} ${styles.phoneCard}`}>
          <div className={styles.cardImageWrap}>
            <img
              className={`${styles.cardImage} ${styles.phoneImage}`}
              src={phoneImage}
              alt="Livo phone continue watching preview"
            />
          </div>
        </div>

        <div className={`${styles.card} ${styles.tabletCard}`}>
          <div className={styles.cardImageWrap}>
            <img
              className={`${styles.cardImage} ${styles.tabletImage}`}
              src={tabletImage}
              alt="Livo tablet layout preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
