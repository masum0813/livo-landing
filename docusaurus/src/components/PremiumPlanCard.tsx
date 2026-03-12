import { Check } from 'lucide-react';
import styles from './PremiumPlanCard.module.css';

type PremiumPlanCardProps = {
  label: string;
  title: string;
  subtitle: string;
  trialBadge: string;
  priceText: string;
  features: string[];
  footnote: string;
};

export default function PremiumPlanCard({
  label,
  title,
  subtitle,
  trialBadge,
  priceText,
  features,
  footnote,
}: PremiumPlanCardProps): JSX.Element {
  return (
    <article className={styles.card}>
      <span className={styles.badge}>⭐ Most Popular</span>

      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <h3>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.priceArea}>
        <span className={styles.trialBadge}>{trialBadge}</span>
        <span className={styles.priceText}>{priceText}</span>
      </div>

      <ul className={styles.featureList}>
        {features.map((item) => (
          <li key={item}>
            <Check size={18} strokeWidth={2.25} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <p className={styles.footnote}>{footnote}</p>
      </div>
    </article>
  );
}
