import styles from "./InternshipCard.module.css";

function getInitials(name) {
  return name ? name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase() : "?";
}

const PinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
  </svg>
);

const CoinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9h4.5a2.5 2.5 0 0 1 0 5H9"/>
  </svg>
);

const CalIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default function InternshipCard({ internship, isActive, onClick }) {
  const {
    title, company_name, work_from_home, location_names,
    duration, stipend, posted_on, application_deadline,
    is_international_job, is_ppo, is_premium_internship,
  } = internship;

  const locationLabel = work_from_home
    ? "Work From Home"
    : location_names?.length
    ? location_names.slice(0, 2).join(", ") + (location_names.length > 2 ? ` +${location_names.length - 2}` : "")
    : "Remote";

  return (
    <article
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-pressed={isActive}
    >
      {is_premium_internship && <div className={styles.premiumStrip}>★ Premium</div>}

      <div className={styles.top}>
        <div className={styles.logoArea}>{getInitials(company_name)}</div>

        <div className={styles.info}>
          <div className={styles.titleRow}>
            <div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.company}>{company_name}</p>
            </div>
            <div className={styles.badgeRow}>
              {work_from_home && <span className={`${styles.badge} ${styles.badgeRemote}`}>Remote</span>}
              {is_international_job && <span className={`${styles.badge} ${styles.badgeIntl}`}>Intl</span>}
              {is_ppo && <span className={`${styles.badge} ${styles.badgePPO}`}>PPO</span>}
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}><PinIcon />{locationLabel}</span>
            <span className={styles.tag}><ClockIcon />{duration}</span>
            <span className={`${styles.tag} ${styles.stipendTag}`}><CoinIcon />{stipend.salary}</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.postedOn}>Posted {posted_on}</span>
        <span className={styles.deadline}><CalIcon /> Apply by {application_deadline}</span>
      </div>
    </article>
  );
}
