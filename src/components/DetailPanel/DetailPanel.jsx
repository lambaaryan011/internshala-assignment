import styles from "./DetailPanel.module.css";

function getInitials(name) {
  return name ? name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase() : "?";
}

const icons = {
  profile: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  location: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  clock: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
    </svg>
  ),
  money: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9h4.5a2.5 2.5 0 0 1 0 5H9"/>
    </svg>
  ),
  calendar: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
};

function Placeholder() {
  return (
    <div className={styles.placeholder}>
      <span className={styles.placeholderIcon}>💼</span>
      <p className={styles.placeholderTitle}>Select an internship</p>
      <p className={styles.placeholderText}>Click on any internship card to view the full details here</p>
    </div>
  );
}

function DetailRow({ icon, label, value, valueClass }) {
  return (
    <div className={styles.detailRow}>
      <div className={styles.detailIcon}>{icon}</div>
      <div className={styles.detailContent}>
        <span className={styles.detailLabel}>{label}</span>
        <span className={`${styles.detailValue} ${valueClass || ""}`}>{value}</span>
      </div>
    </div>
  );
}

export default function DetailPanel({ internship }) {
  if (!internship) {
    return <div className={`${styles.panel} sticky-panel`}><Placeholder /></div>;
  }

  const {
    title, company_name, work_from_home, location_names,
    duration, stipend, start_date, posted_on, application_deadline,
    profile_name, is_international_job, is_premium_internship,
  } = internship;

  const locationLabel = work_from_home
    ? "Work From Home"
    : location_names?.length ? location_names.join(", ") : "Remote";

  return (
    <div className={`${styles.panel} sticky-panel`}>
      <div className={styles.companyHeader}>
        <div className={styles.logoLarge}>{getInitials(company_name)}</div>
        <h2 className={styles.roleTitle}>{title}</h2>
        <p className={styles.companyName}>{company_name}</p>
        <div className={styles.headerBadges}>
          {work_from_home && <span className={`${styles.badge} ${styles.badgeRemote}`}>🌐 Remote</span>}
          {is_international_job && <span className={`${styles.badge} ${styles.badgeIntl}`}>✈️ International</span>}
          {is_premium_internship && <span className={`${styles.badge} ${styles.badgePremium}`}>★ Premium</span>}
        </div>
      </div>

      <div className={styles.applySection}>
        <button className={styles.applyBtn}>Apply Now →</button>
        <button className={styles.saveBtn} title="Save internship">♡</button>
      </div>

      <div className={styles.deadlineBox}>
        <span>⚠️</span>
        <span>Deadline: Apply by {application_deadline}</span>
      </div>

      <div className={styles.detailsBox}>
        <p className={styles.sectionLabel}>Internship Details</p>
        <DetailRow icon={icons.profile}   label="Profile"    value={profile_name} />
        <DetailRow icon={icons.location}  label="Location"   value={locationLabel} />
        <DetailRow icon={icons.clock}     label="Duration"   value={duration} />
        <DetailRow icon={icons.money}     label="Stipend"    value={stipend.salary} valueClass={styles.stipend} />
        <DetailRow icon={icons.calendar}  label="Start Date" value={start_date} />
        <DetailRow icon={icons.calendar}  label="Posted On"  value={posted_on} />
      </div>

      <div className={styles.aboutBox}>
        <p className={styles.aboutTitle}>About the Role</p>
        <p className={styles.aboutText}>
          This is a <strong>{duration}</strong> internship in <strong>{profile_name}</strong> at{" "}
          <strong>{company_name}</strong>. The role is{" "}
          {work_from_home ? "fully remote" : `based in ${locationLabel}`}, with a stipend of{" "}
          <strong>{stipend.salary}</strong>. Apply before <strong>{application_deadline}</strong> to be considered.
        </p>
      </div>
    </div>
  );
}
